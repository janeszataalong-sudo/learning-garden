import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from '../server.mjs';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
test('production server serves all assets, checks health and restricts unsafe requests',async()=>{const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;try{for(const route of ['/','/style.css','/app.js','/logic.js','/icon.svg']){const res=await fetch(base+route);assert.equal(res.status,200,route);assert.ok((await res.text()).length>30);assert.ok(res.headers.get('content-security-policy'));}const health=await fetch(base+'/health');assert.deepEqual(await health.json(),{status:'ok'});assert.equal((await fetch(base+'/missing')).status,404);assert.equal((await fetch(base+'/%2e%2e%5cpackage.json')).status,403);assert.equal((await fetch(base+'/%ZZ')).status,400);assert.equal((await fetch(base+'/',{method:'POST'})).status,405);const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');}finally{await new Promise(resolve=>server.close(resolve));}});
test('deployment entry point honors the supplied PORT environment variable',async()=>{
 const probe=createServer();await new Promise(r=>probe.listen(0,'127.0.0.1',r));const port=probe.address().port;await new Promise(r=>probe.close(r));
 const child=spawn(process.execPath,[fileURLToPath(new URL('../server.mjs',import.meta.url))],{env:{...process.env,PORT:String(port)},stdio:['ignore','pipe','pipe']});
 try {
  await new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(new Error('Server startup timed out')),5000);child.stdout.on('data',data=>{if(data.toString().includes('Learning Garden')){clearTimeout(timeout);resolve();}});child.once('error',e=>{clearTimeout(timeout);reject(e);});child.once('exit',code=>{clearTimeout(timeout);reject(new Error(`Server exited early: ${code}`));});});
  const res=await fetch(`http://127.0.0.1:${port}/health`);assert.equal(res.status,200);assert.deepEqual(await res.json(),{status:'ok'});
  assert.equal((await fetch(`http://127.0.0.1:${port}/`)).status,200);
 }finally{const exited=new Promise(resolve=>child.once('exit',resolve));child.kill();await exited;}
});
