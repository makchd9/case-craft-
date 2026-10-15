import type {Question} from './content/questions';
/** Evaluate stable option IDs, independent of catalogue order or search filtering. */
export function evaluateAnswer(question:Question,selection:string,seconds:number,limit:number,forcedTimeout=false){
 const selected=question.options.find(option=>option.id===selection);
 const expected=question.options.find(option=>option.id===question.answer);
 const timeout=forcedTimeout||(question.mode==='speed'&&seconds>=limit);
 const correct=!timeout&&!!selected&&selected.id===question.answer;
 return {correct,timeout,selectedAnswer:selected?.text??'No answer submitted',correctAnswer:expected?.text??'',label:timeout?'Time’s up — no XP earned.':correct?'Correct answer.':'Incorrect answer.'};
}
