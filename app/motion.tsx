"use client";
import {createContext,useContext,useEffect,useRef,useState,ReactNode,CSSProperties} from 'react';
import {Pause,Play,Sparkles} from 'lucide-react';
const MotionContext=createContext(true);
export function MotionScene({children,challengeActive}:{children:ReactNode;challengeActive:boolean}){
 const [reduced,setReduced]=useState(true),[paused,setPaused]=useState(false);
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update)},[]);
 const disabled=reduced||paused;
 useEffect(()=>{const scope=root.current;if(!scope||disabled||!('IntersectionObserver' in window))return;const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('motion-revealed');observer.unobserve(entry.target)}}},{threshold:.08});scope.querySelectorAll('.section-heading,.mode-card,.steps>div,.progress-layout,.portfolio-grid,.institution-section,.join-section').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[disabled]);
 return <MotionContext.Provider value={disabled}><div ref={root} className="motion-scene" data-motion-paused={disabled} data-challenge-active={challengeActive}>{children}<div className="motion-controls"><button type="button" onClick={()=>setPaused(p=>!p)} disabled={reduced} aria-pressed={disabled}>{disabled?<Play size={14}/>:<Pause size={14}/>} {reduced?'Reduced motion enabled':paused?'Resume motion':'Pause motion'}</button></div></div></MotionContext.Provider>
}
export function AnimatedNumber({value}:{value:number}){
 const disabled=useContext(MotionContext),[shown,setShown]=useState(disabled?value:0),current=useRef(disabled?value:0);
 useEffect(()=>{if(disabled){current.current=value;setShown(value);return}const from=current.current;let frame=0;const start=performance.now();function tick(now:number){const p=Math.min(1,(now-start)/650);const n=Math.round(from+(value-from)*(1-Math.pow(1-p,3)));current.current=n;setShown(n);if(p<1)frame=requestAnimationFrame(tick)}frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[value,disabled]);
 return <span className="animated-number"><span aria-hidden="true">{shown}</span><span className="sr-only">{value}</span></span>
}
export function RewardMoment({messages}:{messages:string[]}){return <div className="reward-moment"><span className="reward-burst" aria-hidden="true">{Array.from({length:8},(_,i)=><i key={i} style={{"--burst-x":`${Math.cos(i*Math.PI/4)*48}px`,"--burst-y":`${Math.sin(i*Math.PI/4)*38}px`,"--burst-angle":`${i*45}deg`} as CSSProperties}/>)}</span><span aria-hidden="true" className="reward-spark"><Sparkles size={22}/></span>{messages.length>0&&<div className="reward-messages">{messages.map(message=><span key={message}>{message}</span>)}</div>}</div>}
