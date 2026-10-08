import {build} from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
await build({configFile:path.resolve('vite.review.config.ts')});
let html=await fs.readFile('.review-build/index.html','utf8');
for(const m of [...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)]){
 const js=await fs.readFile(path.join('.review-build',m[1]),'utf8');
 html=html.replace(m[0],()=>'<script type="module">'+js.replace(/<\/script/gi,'<\\/script')+'</script>');
}
for(const m of [...html.matchAll(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/g)]){
 const css=await fs.readFile(path.join('.review-build',m[1]),'utf8');html=html.replace(m[0],()=>'<style>'+css.replace(/<\/style/gi,'<\\/style')+'</style>');
}
if(/(?:src|href)="\.\/assets\//.test(html))throw new Error('Unresolved external bundle');
await fs.mkdir('deliverables',{recursive:true});
await fs.writeFile('deliverables/CaseCraft-Client-Preview.html',html);
console.log('Wrote self-contained client preview, '+Math.round(Buffer.byteLength(html)/1024)+' KB');
