import {createClient} from '@supabase/supabase-js';
// Publishable credentials are intentionally safe to expose. Authorization lives in PostgreSQL.
const env=(import.meta as ImportMeta & {env:Record<string,string|undefined>}).env;
const projectUrl=env.VITE_SUPABASE_URL||'https://cgghbskjymkbxceaunmj.supabase.co';
const publishableKey=env.VITE_SUPABASE_PUBLISHABLE_KEY||'sb_publishable_xVc_GqA4q8Mjtq_auYJLCw_58WOg8QR';
export const supabase=createClient(projectUrl,publishableKey);
export async function rpc<T>(name:string,args:Record<string,unknown>={}):Promise<T>{
 if(!supabase)throw new Error('Account connection is not configured.');
 const {data,error}=await supabase.rpc(name,args);
 if(error)throw new Error(error.code==='PGRST202'?'Account setup is still being completed. Please try again later.':error.message);
 return data as T;
}
