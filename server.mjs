import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(fileURLToPath(new URL('./public/', import.meta.url)));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'};
export function createServer() {
  return http.createServer(async (req,res) => {
    const headers = {'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"};
    if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405,{...headers,Allow:'GET, HEAD'}); return res.end();}
    let pathname;
    try {pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);} catch {res.writeHead(400,headers);return res.end('Bad request');}
    if(pathname==='/health') {res.writeHead(200,{...headers,'Content-Type':'application/json'}); return res.end(req.method==='HEAD'?undefined:JSON.stringify({status:'ok'}));}
    const relative=pathname==='/'?'index.html':pathname.replace(/^\/+/, '');
    const filename=path.resolve(root,relative);
    if(!filename.startsWith(root+path.sep) || relative.includes('\\')) {res.writeHead(403,headers);return res.end('Forbidden');}
    try {const data=await readFile(filename);res.writeHead(200,{...headers,'Content-Type':types[path.extname(filename)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:data);}
    catch {res.writeHead(404,{...headers,'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');}
  });
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const port=Number(process.env.PORT||3000);
  const server=createServer();server.listen(port,'0.0.0.0',()=>console.log(`Learning Garden: http://localhost:${port}`));
  for(const signal of ['SIGTERM','SIGINT']) process.on(signal,()=>server.close(()=>process.exit(0)));
}
