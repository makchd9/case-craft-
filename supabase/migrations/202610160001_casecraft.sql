-- CaseCraft: run once in Supabase SQL Editor. No passwords or keys required.
begin;
create schema if not exists casecraft_private;
revoke all on schema casecraft_private from public, anon, authenticated;
create table if not exists public.cc_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null default 'Learner' check (char_length(display_name) between 1 and 40),
 public_token uuid unique,
 created_at timestamptz not null default now()
);
alter table public.cc_profiles enable row level security;
revoke all on public.cc_profiles from anon, authenticated;
grant select on public.cc_profiles to authenticated;
drop policy if exists "Read own profile" on public.cc_profiles;
create policy "Read own profile" on public.cc_profiles for select to authenticated using ((select auth.uid())=user_id);
create table if not exists casecraft_private.questions (
 id text primary key, mode text not null check(mode in ('speed','ratio','fake')),
 domain text not null, answer text not null, options jsonb not null
);
create table if not exists casecraft_private.sessions (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
 question_id text not null references casecraft_private.questions(id),
 started_at timestamptz not null default clock_timestamp(), time_limit integer not null check(time_limit in(30,60)),
 submitted_at timestamptz, selected text, correct boolean, xp integer, seconds integer, repeated boolean
);
create index if not exists cc_sessions_user on casecraft_private.sessions(user_id,started_at);
alter table casecraft_private.questions enable row level security;
alter table casecraft_private.sessions enable row level security;
create or replace function public.cc_profile(p_name text default null) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare u uuid := auth.uid(); result jsonb;
begin
 if u is null then raise exception 'Sign in required'; end if;
 if p_name is not null and (char_length(trim(p_name)) < 1 or char_length(trim(p_name)) > 40) then raise exception 'Name must contain 1–40 characters'; end if;
 insert into public.cc_profiles(user_id,display_name) values(u,coalesce(trim(p_name),'Learner')) on conflict(user_id) do nothing;
 if p_name is not null then update public.cc_profiles set display_name=trim(p_name) where user_id=u; end if;
 select jsonb_build_object('name',p.display_name,'publicToken',p.public_token,'attempts',coalesce((
 select jsonb_agg(jsonb_build_object('id',q.id,'mode',q.mode,'domain',q.domain,'answer',q.answer,'correct',s.correct,'xp',s.xp,'seconds',s.seconds,'date',to_char(s.submitted_at at time zone 'Asia/Kolkata','YYYY-MM-DD')) order by s.submitted_at,s.id)
 from casecraft_private.sessions s join casecraft_private.questions q on q.id=s.question_id where s.user_id=u and s.submitted_at is not null),'[]'::jsonb)) into result from public.cc_profiles p where p.user_id=u;
 return result;
end $$;
create or replace function public.cc_begin(p_question text,p_limit integer default 60) returns uuid
language plpgsql security definer set search_path = '' as $$
declare u uuid:=auth.uid(); result uuid;
begin
 if u is null then raise exception 'Sign in required'; end if;
 perform pg_advisory_xact_lock(hashtextextended(u::text,0));
 if p_limit not in(30,60) then raise exception 'Invalid time limit'; end if;
 if not exists(select 1 from casecraft_private.questions where id=p_question) then raise exception 'Question unavailable'; end if;
 if (select count(*) from casecraft_private.sessions where user_id=u and started_at>now()-interval '1 minute')>=30 then raise exception 'Please wait before starting another challenge'; end if;
 insert into casecraft_private.sessions(user_id,question_id,time_limit) values(u,p_question,p_limit) returning id into result;
 return result;
end $$;
create or replace function public.cc_submit(p_session uuid,p_selected text) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare u uuid:=auth.uid(); s casecraft_private.sessions%rowtype; q casecraft_private.questions%rowtype; elapsed integer; ok boolean; replay boolean; points integer; timedout boolean;
begin
 if u is null then raise exception 'Sign in required'; end if;
 perform pg_advisory_xact_lock(hashtextextended(u::text,0));
 select * into s from casecraft_private.sessions where id=p_session and user_id=u for update;
 if not found then raise exception 'Challenge session not found'; end if;
 select * into q from casecraft_private.questions where id=s.question_id;
 if s.submitted_at is null then
 if s.started_at<clock_timestamp()-interval '24 hours' then raise exception 'Challenge expired. Start again'; end if;
 if p_selected<>'' and not exists(select 1 from jsonb_array_elements(q.options) o where o->>'id'=p_selected) then raise exception 'Invalid answer'; end if;
 elapsed:=greatest(0,floor(extract(epoch from clock_timestamp()-s.started_at))::integer);
 timedout:=q.mode='speed' and elapsed>=s.time_limit;
 ok:=coalesce(p_selected=q.answer,false) and not timedout;
 replay:=exists(select 1 from casecraft_private.sessions where user_id=u and question_id=q.id and submitted_at is not null);
 points:=case when replay or not ok then 0 else 100+case when q.mode='speed' then greatest(0,60-elapsed) else 0 end end;
 update casecraft_private.sessions set submitted_at=clock_timestamp(),selected=p_selected,correct=ok,xp=points,seconds=elapsed,repeated=replay where id=s.id returning * into s;
 end if;
 return jsonb_build_object('correct',s.correct,'xp',s.xp,'repeated',s.repeated,'seconds',s.seconds,'timeout',q.mode='speed' and s.seconds>=s.time_limit,'selectedAnswer',coalesce((select o->>'text' from jsonb_array_elements(q.options)o where o->>'id'=s.selected),'No answer submitted'),'correctAnswer',(select o->>'text' from jsonb_array_elements(q.options)o where o->>'id'=q.answer));
end $$;
create or replace function public.cc_sharing(p_enabled boolean) returns uuid
language plpgsql security definer set search_path = '' as $$
declare u uuid:=auth.uid(); token uuid;
begin
 if u is null then raise exception 'Sign in required'; end if;
 perform public.cc_profile();
 update public.cc_profiles set public_token=case when p_enabled then coalesce(public_token,gen_random_uuid()) else null end where user_id=u returning public_token into token;
 return token;
end $$;
create or replace function public.cc_public_portfolio(p_token uuid) returns jsonb
language sql stable security definer set search_path = '' as $$
 select jsonb_build_object('name',p.display_name,'xp',coalesce((select sum(xp) from casecraft_private.sessions where user_id=p.user_id and submitted_at is not null),0),'accuracy',coalesce((select jsonb_agg(t) from(select mode,count(*) as attempted,count(*) filter(where correct) as correct from(select distinct on(s.question_id) q.mode,s.correct from casecraft_private.sessions s join casecraft_private.questions q on q.id=s.question_id where s.user_id=p.user_id and s.submitted_at is not null order by s.question_id,s.submitted_at,s.id) first_answers group by mode)t),'[]'::jsonb)) from public.cc_profiles p where p.public_token=p_token;
$$;
revoke all on function public.cc_profile(text),public.cc_begin(text,integer),public.cc_submit(uuid,text),public.cc_sharing(boolean),public.cc_public_portfolio(uuid) from public,anon,authenticated;
grant execute on function public.cc_profile(text),public.cc_begin(text,integer),public.cc_submit(uuid,text),public.cc_sharing(boolean) to authenticated;
grant execute on function public.cc_public_portfolio(uuid) to anon,authenticated;
commit;
