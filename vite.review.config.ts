import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {fileURLToPath} from 'node:url';
export default defineConfig({root:'review',base:'./',publicDir:false,plugins:[react()],resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},build:{outDir:'../.review-build',emptyOutDir:true,cssCodeSplit:false,rolldownOptions:{output:{codeSplitting:false}}}});
