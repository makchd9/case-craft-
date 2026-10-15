import workbook from './starter-set.json';
export type Mode = 'speed' | 'ratio' | 'fake';
export type Question = {
 id: string; mode: Mode; domain: string; prompt: string; caseName?: string;
 snippet?: string; options: {id: string; text: string; detail?: string}[];
 answer: string; explanation: string; source?: string; sourceLabel?: string;
};
const researchSource='https://www.sci.gov.in/aor-examination/';
const catalogue=workbook.Speed_Search.map((r,i)=>({id:`case-${i+1}`,text:r['Correct Case Name'],detail:`${r.Citation} · ${r.Court} · Decided ${r.Year} · ${r.Domain}`}));
const ratioPrompts=[
 'Which principle limits Parliament’s power under Article 368?',
 'Which standard must a procedure depriving a person of liberty satisfy under Article 21?',
 'Which principle governs the choice of the death penalty rather than life imprisonment?',
 'Which duty applies to an enterprise engaged in a hazardous or inherently dangerous activity?',
 'Which principle explains how the Court filled the legislative gap on workplace sexual harassment?',
 'Which holding addresses the validity of Section 66A?'
];
// The workbook’s “obiter” column contains some binding reasoning/directions.
// Use clearly incorrect alternative principles rather than misclassifying them as obiter.
const distractors=[
 'Parliament’s power under Article 368 is unlimited, including the power to destroy the Constitution’s basic structure.',
 'Any procedure enacted by law satisfies Article 21, even if it is arbitrary or oppressive.',
 'The death penalty is the default sentence for murder, without considering life imprisonment.',
 'A hazardous enterprise has no responsibility for harm unless the injured person proves the enterprise’s negligence.',
 'A court cannot protect constitutional rights against workplace sexual harassment until a specific domestic statute is enacted.',
 'Section 66A remains valid whenever an online message causes annoyance, even if it falls outside Article 19(2).'
];
const ratioNotes=[
 'The tested principle is the limit on the amending power. The competing option removes that limit. Illustrations of basic structure should not simply be treated as non-binding.',
 'The question tests procedural fairness under Article 21. The relationship between Articles 14, 19 and 21 is also part of the reasoning, not a safe example of mere obiter.',
 'The question tests the threshold for choosing death over life imprisonment. Illustrative sentencing factors help apply that threshold; a non-exhaustive list is not automatically obiter.',
 'The question tests the duty arising from hazardous activity. Suggestions for future institutions are distinct from this rule of liability.',
 'The guidelines filled a gap in protection of fundamental rights. The complaints-committee requirements were part of those binding guidelines, not merely optional advice.',
 'Section 66A was struck down. The separate conclusions on Sections 69A and 79 were also holdings; they should not be labelled mere commentary.'
];
export const questions: Question[]=[
 ...workbook.Speed_Search.map((r,i):Question=>({id:`starter-speed-${i+1}`,mode:'speed',domain:r.Domain,prompt:r['Legal Issue (prompt shown to player)'].replace('but capped total reservation at 50%','and applied a general 50% ceiling to reservations'),options:catalogue,answer:`case-${i+1}`,explanation:`The matching precedent is ${r['Correct Case Name']}, ${r.Citation}, decided by the ${r.Court} in ${r.Year}. ${i===8?'The 50% rule is a general rule discussed in that decision, with exceptional situations; this is a historical case-identification exercise.':''}`,source:researchSource,sourceLabel:'Supreme Court leading-case resources'})),
 ...workbook.Ratio_Quiz.map((r,i):Question=>({id:`starter-ratio-${i+1}`,mode:'ratio',domain:r.Domain,caseName:r['Case Name'],prompt:ratioPrompts[i],snippet:r['Judgment Snippet (paraphrased, shown to player)'],options:[{id:'principle',text:r['Ratio Decidendi (correct answer)']},{id:'alternative',text:distractors[i]}],answer:'principle',explanation:ratioNotes[i],source:researchSource,sourceLabel:'Supreme Court leading-case resources'})),
 ...workbook.Fake_Case_Detector.map((r,i):Question=>{
 const match=workbook.Speed_Search.find(c=>c['Correct Case Name'].startsWith(r['Case Name Shown']));
 const domain=match?.Domain||(['Constitutional','Tort/Environmental','Corporate','Constitutional/IT Law','Constitutional','Labour','Constitutional/IT Law','Corporate/Tax'][i-8]??'Legal research');
 // “Allegedly” was present only on fabricated rows and leaked the answer.
 const snippet=r['Short Summary Shown to Player'].replace(/^Allegedly /,'').replace(/^held /,'Held ').replace(/^the case/,'The case').replace(/^the leading/,'The leading').replace(/^recognized/,'Recognized').replace('capping total reservation at 50%','applying a general 50% ceiling to reservations');
 const fakeExplanations=[
 'This name–citation–holding combination is a fabricated exercise in the supplied content set. A plausible citation does not establish a Supreme Court right to free Wi-Fi. Verify the exact judgment before relying on it.',
 'The supplied entry misattributes absolute liability. The relevant landmark is M.C. Mehta v. Union of India (Oleum Gas Leak), not the invented case presented here.',
 'This supposed leading precedent is labelled fabricated in the supplied content set. Verify both the exact case title and the cited report before treating it as authority.',
 'The supplied name–citation–holding combination is fabricated. A genuine-looking reporter reference does not verify the proposed digital-privacy holding.',
 'The basic structure doctrine is associated with Kesavananda Bharati v. State of Kerala (1973). The supplied entry attributes it to a fabricated case.',
 'The supplied entry is fabricated: it is not a reliable authority for automatic ESI benefits for all gig workers. This exercise makes no claim about the current law on worker classification.',
 'This supplied name–citation–holding combination is fabricated. Do not infer the current law on the right to be forgotten from this exercise.',
 'This supplied entry is fabricated and does not establish automatic deductibility of all CSR spending. Tax treatment must be checked against applicable law.'
 ];
 return {id:`starter-fake-${i+1}`,mode:'fake',domain,prompt:`${r['Case Name Shown']} · ${r['Citation Shown']}`,snippet,options:[{id:'real',text:'Real precedent'},{id:'fake',text:'Fabricated or misattributed'}],answer:r['Real or Fake'].toLowerCase(),explanation:i<8?r['Explanation (revealed after answer)']:fakeExplanations[i-8],...(i<8?{source:researchSource,sourceLabel:'Supreme Court leading-case resources'}:{})};
 })
];
const sourceOverrides:Record<string,string>={
 'Maneka Gandhi':'https://indiankanoon.org/doc/43475503/',
 'Vishaka':'https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aor_notice_circular/13.pdf',
 'Shreya Singhal':'https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aor_notice_circular/35.pdf'
};
for(const q of questions){const title=q.caseName??(q.mode==='speed'?q.options.find(o=>o.id===q.answer)?.text:q.prompt)??'';for(const [name,url] of Object.entries(sourceOverrides)){if(q.source&&title.startsWith(name)){q.source=url;q.sourceLabel='Read the judgment';}}}
export const badgeDefinitions=workbook.Badges.map((r,i)=>({id:i,name:r['Badge Name'],text:r['Badge Name']==='Ratio Detective'?'Correctly answer 5 different Ratio Decidendi questions.':r['Criteria to Earn It']}));
export function shuffled<T>(items:readonly T[],random= Math.random):T[]{const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
export function roundQuestions(mode:Mode,completed:string[],random=Math.random):Question[]{const pool=questions.filter(q=>q.mode===mode);return [...shuffled(pool.filter(q=>!completed.includes(q.id)),random),...shuffled(pool.filter(q=>completed.includes(q.id)),random)].map(q=>({...q,options:shuffled(q.options,random)}))}
