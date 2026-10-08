import {build} from 'esbuild';
import {spawnSync} from 'node:child_process';
import {mkdir} from 'node:fs/promises';
await mkdir('.test-output',{recursive:true});
await build({entryPoints:['tests/core.test.ts'],outfile:'.test-output/core.cjs',bundle:true,platform:'node',format:'cjs',logLevel:'silent'});
const result=spawnSync(process.execPath,['--test','.test-output/core.cjs'],{stdio:'inherit'});process.exitCode=result.status??1;
