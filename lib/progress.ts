import {questions, type Mode, type Question} from './content/questions';
export type Attempt={id:string;mode:Mode;correct:boolean;xp:number;date:string;domain:string;seconds:number;answer:string};
export type Profile={name:string;email:string;group:string;optIn:boolean;attempts:Attempt[];days:string[]};
export const freshProfile:Profile={name:'',email:'',group:'Class A',optIn:false,attempts:[],days:[]};
export const STORAGE_KEY='casecraft-starter-v2';
export const dateKey=(date=new Date())=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
function previousDay(key:string){const d=new Date(key+'T12:00:00');d.setDate(d.getDate()-1);return dateKey(d)}
export function streakFor(days:string[],today=dateKey()){const set=new Set(days);let key=set.has(today)?today:previousDay(today),n=0;while(set.has(key)){n++;key=previousDay(key)}return n}
export function longestStreak(days:string[]){return days.reduce((best,day)=>Math.max(best,streakFor(days,day)),0)}
export function firstAttempts(attempts:Attempt[]){const seen=new Set<string>();return attempts.filter(a=>{if(seen.has(a.id))return false;seen.add(a.id);return true})}
export function recordAttempt(profile:Profile,q:Question,correct:boolean,seconds:number,day=dateKey()){
 const repeated=profile.attempts.some(a=>a.id===q.id);
 const xp=repeated?0:correct?100+(q.mode==='speed'?Math.max(0,60-Math.max(0,Math.floor(seconds))):0):0;
 const attempt:Attempt={id:q.id,mode:q.mode,correct,xp,date:day,domain:q.domain,seconds,answer:q.answer};
 return {profile:{...profile,attempts:[...profile.attempts,attempt],days:Array.from(new Set([...profile.days,day]))},xp,repeated};
}
export function earnedBadges(profile:Profile){const a=profile.attempts;const correct=a.filter(x=>x.correct);const count=(mode:Mode)=>correct.filter(x=>x.mode===mode).length;const longest=longestStreak(profile.days);const perfect=profile.days.some(end=>{let day=end;for(let i=0;i<7;i++){const played=a.filter(x=>x.date===day);if(!played.length||played.some(x=>!x.correct))return false;day=previousDay(day)}return true});return [count('speed')>=20,new Set(correct.filter(x=>x.mode==='ratio').map(x=>x.id)).size>=5,correct.filter(x=>x.mode==='fake'&&x.answer==='fake').length>=10,longest>=5,longest>=10,correct.filter(x=>x.domain.split('/').includes('Constitutional')).length>=10,correct.some(x=>x.mode==='speed'&&x.seconds<30),perfect]}
export function readProfile(raw:string|null):Profile{if(!raw)return {...freshProfile};const p:unknown=JSON.parse(raw);if(!p||typeof p!=='object')return {...freshProfile};const r=p as Partial<Profile>;const cleanText=(value:unknown,max:number,fallback='')=>typeof value==='string'?value.slice(0,max):fallback;const attempts=Array.isArray(r.attempts)?r.attempts.filter(a=>a&&questions.some(q=>q.id===a.id&&q.mode===a.mode)&&typeof a.correct==='boolean'&&Number.isFinite(a.xp)&&a.xp>=0&&a.xp<=160&&Number.isFinite(a.seconds)&&a.seconds>=0&&typeof a.domain==='string'&&typeof a.answer==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(a.date)):[];return {name:cleanText(r.name,40),email:cleanText(r.email,120),group:cleanText(r.group,40,'Class A'),optIn:r.optIn===true,attempts,days:Array.from(new Set(attempts.map(a=>a.date)))}}
