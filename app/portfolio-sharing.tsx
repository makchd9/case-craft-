"use client";
import {useEffect,useState} from 'react';
import {rpc} from '@/lib/supabase';
export function PortfolioSharing({signedIn,token,onToken}:{signedIn:boolean;token:string|null;onToken:(token:string|null)=>void}){
 const [busy,setBusy]=useState(false),[message,setMessage]=useState('');
 async function toggle(){setBusy(true);setMessage('');try{onToken(await rpc<string|null>('cc_sharing',{p_enabled:!token}))}catch(e){setMessage(e instanceof Error?e.message:'Unable to change sharing.')}finally{setBusy(false)}}
 const url=typeof window==='undefined'?'':window.location.origin+window.location.pathname+'?portfolio='+token;
 return <div className="local-note">{signedIn?<><p>Sharing is optional. A public link shows your display name, XP and accuracy. Anyone with the link can view it.</p><button className="button secondary small" disabled={busy} onClick={toggle}>{busy?'Updating…':token?'Disable public link':'Enable public link'}</button>{token&&<><a href={url} target="_blank" rel="noopener noreferrer">View public portfolio</a><button className="button secondary small" onClick={async()=>{try{await navigator.clipboard.writeText(url);setMessage('Link copied.')}catch{setMessage('Open your public portfolio and copy the address.')}}}>Copy link</button></>}</>:<p>Log in to save across devices and create a public portfolio link. Guest exports are local snapshots.</p>}{message&&<p role="status">{message}</p>}</div>
}
export function PublicPortfolio({token}:{token:string}){
 const [data,setData]=useState<{name:string;xp:number;accuracy:{mode:string;attempted:number;correct:number}[]}|null>(null),[message,setMessage]=useState('Loading portfolio…');
 useEffect(()=>{let active=true;if(!/^[0-9a-f-]{36}$/i.test(token)){setMessage('Portfolio unavailable.');return}rpc<typeof data>('cc_public_portfolio',{p_token:token}).then(value=>{if(active){setData(value);setMessage(value?'':'This portfolio is private or unavailable.')}}).catch(()=>{if(active)setMessage('Portfolio could not load. Please try again later.')});return()=>{active=false}},[token]);
 return <main className="section portfolio-section"><a className="button secondary" href={typeof window==='undefined'?'/':window.location.pathname}>Back to CaseCraft</a>{data?<><div className="eyebrow">CASECRAFT · PUBLIC PORTFOLIO</div><h1>{data.name}</h1><h2>{data.xp} XP</h2><p>Learning progress, not a professional credential.</p>{data.accuracy.map(a=><p key={a.mode}>{({speed:'Speed Search',ratio:'Ratio Decidendi',fake:'Fake Case Detector'} as Record<string,string>)[a.mode]}: {Math.round(a.correct/a.attempted*100)}% · {a.correct}/{a.attempted} correct first attempts</p>)}</>:<p role="status">{message}</p>}</main>
}
