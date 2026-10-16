import {test} from 'node:test';
import assert from 'node:assert/strict';
import {questions,roundQuestions,shuffled,badgeDefinitions} from '../lib/content/questions';
import {freshProfile,recordAttempt,readProfile,streakFor,longestStreak,earnedBadges,firstAttempts} from '../lib/progress';
test('all workbook content is mapped with valid answers and no detector cues',()=>{
 assert.equal(questions.length,57);assert.equal(new Set(questions.map(q=>q.id)).size,57);
 assert.deepEqual(['speed','ratio','fake'].map(m=>questions.filter(q=>q.mode===m).length),[35,6,16]);
 assert.equal(questions.filter(q=>q.mode==='fake'&&q.answer==='fake').length,8);assert.equal(badgeDefinitions.length,8);
 for(const q of questions){assert.equal(q.options.filter(o=>o.id===q.answer).length,1);assert.ok(q.prompt&&q.explanation);if(q.mode==='fake')assert.ok(!q.snippet?.includes('Allegedly'))}
});
test('rounds shuffle without losing content and prioritize unseen questions',()=>{
 const ids=questions.filter(q=>q.mode==='speed').map(q=>q.id);const round=roundQuestions('speed',[ids[0]],()=>.4);assert.equal(round.at(-1)?.id,ids[0]);assert.equal(new Set(round.map(q=>q.id)).size,35);assert.deepEqual(shuffled([1,2,3],()=>0),[2,3,1]);
});
test('XP does not repeat, every attempt is counted, first accuracy is stable',()=>{
 const q=questions[0];const a=recordAttempt(freshProfile,q,false,35,'2026-10-08');const b=recordAttempt(a.profile,q,true,5,'2026-10-08');assert.equal(b.xp,0);assert.equal(b.profile.attempts.length,2);assert.equal(firstAttempts(b.profile.attempts)[0].correct,false);assert.deepEqual(b.profile.days,['2026-10-08']);const c=recordAttempt(freshProfile,q,true,5,'2026-10-08');assert.equal(c.xp,155);
});
test('streaks handle gaps, yesterday, and month/year boundaries',()=>{
 assert.equal(streakFor(['2025-12-31','2026-01-01'],'2026-01-02'),2);assert.equal(streakFor(['2025-12-31'],'2026-01-02'),0);assert.equal(streakFor(['2026-02-28','2026-03-01'],'2026-03-01'),2);assert.equal(longestStreak(['2026-10-01','2026-10-02','2026-10-04']),2);
});
test('badge thresholds include replays, fake-only verdicts and split domain tags',()=>{
 let p={...freshProfile};const speed=questions.find(q=>q.mode==='speed'&&q.domain==='Constitutional')!,fake=questions.find(q=>q.mode==='fake'&&q.answer==='fake')!,real=questions.find(q=>q.mode==='fake'&&q.answer==='real')!;
 for(let i=0;i<20;i++)p=recordAttempt(p,speed,true,20,'2026-10-08').profile;
 assert.equal(earnedBadges(p)[0],true);assert.equal(earnedBadges(p)[5],true);assert.equal(earnedBadges(p)[6],true);
 for(let i=0;i<10;i++)p=recordAttempt(p,real,true,5,'2026-10-08').profile;assert.equal(earnedBadges(p)[2],false);
 for(let i=0;i<10;i++)p=recordAttempt(p,fake,true,5,'2026-10-08').profile;assert.equal(earnedBadges(p)[2],true);
});
test('Perfect Week requires activity and correctness on all seven days; awards persist',()=>{
 let p={...freshProfile};for(let i=1;i<=7;i++)p=recordAttempt(p,questions[0],true,10,`2026-10-0${i}`).profile;assert.equal(earnedBadges(p)[7],true);assert.equal(earnedBadges(p)[3],true);
 const bad=recordAttempt(p,questions[1],false,10,'2026-10-04').profile;assert.equal(earnedBadges(bad)[7],false);
 p=recordAttempt(p,questions[0],false,60,'2026-10-20').profile;assert.equal(earnedBadges(p)[7],true);assert.equal(earnedBadges(p)[3],true);
});
test('storage rejects malformed attempts and old fixture progress',()=>{
 const p=readProfile(JSON.stringify({name:2,attempts:[null,{id:'s1',xp:100},{id:questions[0].id,mode:'speed',correct:true,xp:'oops'}],days:['2026-10-08']}));assert.equal(p.attempts.length,0);assert.equal(p.name,'');assert.deepEqual(p.days,[]);assert.deepEqual(readProfile(null),freshProfile);
});


test('Speed Search grades the selected case ID, including the reported Mehta/Kesavananda mismatch',async()=>{
 const {evaluateAnswer}=await import('../lib/answer-result');
 const q=questions.find(q=>q.mode==='speed'&&q.options.find(o=>o.id===q.answer)?.text.startsWith('M.C. Mehta'))!;
 const wrong=q.options.find(o=>o.text.startsWith('Kesavananda'))!;
 assert.ok(q&&wrong);
 const filtered={...q,options:shuffled(q.options,()=>.3)};
 const result=evaluateAnswer(filtered,wrong.id,4,60);
 assert.equal(result.correct,false);assert.equal(result.label,'Incorrect answer.');assert.equal(result.selectedAnswer,wrong.text);
 const saved=recordAttempt(freshProfile,q,result.correct,4);
 assert.equal(saved.xp,0);assert.equal(earnedBadges(saved.profile)[6],false);
 const right=evaluateAnswer(filtered,q.answer,4,60);assert.equal(right.correct,true);assert.equal(right.label,'Correct answer.');
 assert.equal(earnedBadges(recordAttempt(saved.profile,q,right.correct,4).profile)[6],true);
 assert.equal(evaluateAnswer(q,q.answer,60,60).correct,false);
 assert.equal(evaluateAnswer(q,q.answer,2,60,true).timeout,true);
 assert.equal(evaluateAnswer(q,'nonexistent',2,60).correct,false);
 for(const question of questions){const wrong=question.options.find(o=>o.id!==question.answer)!;assert.equal(evaluateAnswer(question,wrong.id,1,60).correct,false);assert.equal(evaluateAnswer(question,question.answer,1,60).correct,true)}
});
test('Ratio Detective unlocks at five distinct correct questions, not repeated or wrong answers',()=>{
 const ratio=questions.filter(q=>q.mode==='ratio');let p={...freshProfile};
 for(let i=0;i<6;i++)p=recordAttempt(p,ratio[0],true,5).profile;
 assert.equal(earnedBadges(p)[1],false);
 for(const q of ratio.slice(1,4))p=recordAttempt(p,q,true,5).profile;
 assert.equal(earnedBadges(p)[1],false);
 p=recordAttempt(p,ratio[4],false,5).profile;assert.equal(earnedBadges(p)[1],false);
 p=recordAttempt(p,ratio[4],true,5).profile;assert.equal(earnedBadges(p)[1],true);
 assert.match(badgeDefinitions[1].text,/5 different/);
});
