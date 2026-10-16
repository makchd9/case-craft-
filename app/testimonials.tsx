"use client";
import {useEffect,useState} from 'react';
import {testimonials} from '@/lib/content/testimonials';
export function Testimonials(){
 const [index,setIndex]=useState(0),[paused,setPaused]=useState(false),[hover,setHover]=useState(false),[focused,setFocused]=useState(false),[reduced,setReduced]=useState(true);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update)},[]);
 useEffect(()=>{if(paused||hover||focused||reduced||testimonials.length<2)return;const timer=setInterval(()=>{if(!document.hidden)setIndex(i=>(i+1)%testimonials.length)},7000);return()=>clearInterval(timer)},[paused,hover,focused,reduced]);
 if(!testimonials.length)return null;
 const item=testimonials[index];return <section aria-label="Learner feedback" className="section feedback-section" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocus={()=>setFocused(true)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}><div className="eyebrow">FROM OUR LEARNERS</div><blockquote key={item.id} className={reduced?'':'feedback-enter'}><p>“{item.quote}”</p><footer>{item.name}{item.description&&<small> · {item.description}</small>}</footer></blockquote>{testimonials.length>1&&<div className="submit-row"><button className="button secondary small" aria-label="Previous feedback" onClick={()=>setIndex(i=>(i-1+testimonials.length)%testimonials.length)}>←</button><span>{index+1} / {testimonials.length}</span><button className="button secondary small" onClick={()=>setPaused(p=>!p)}>{paused?'Resume':'Pause'}</button><button className="button secondary small" aria-label="Next feedback" onClick={()=>setIndex(i=>(i+1)%testimonials.length)}>→</button></div>}</section>
}
