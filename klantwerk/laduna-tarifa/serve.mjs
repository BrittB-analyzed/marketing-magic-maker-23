// Lokale preview: ES op :4321, EN op :4322. Eerst: node src/build.mjs --local
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
for (const [dir, port] of [['es', 4321], ['com', 4322]]) {
  const base = join(import.meta.dirname, 'dist', dir);
  createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p === '/') p = '/index.html'; else if (!extname(p)) p += '.html';
    try { const b = await readFile(join(base, p)); res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(b); }
    catch { res.writeHead(404, { 'content-type': types['.html'] }); res.end(await readFile(join(base, '404.html'))); }
  }).listen(port, () => console.log(`${dir}: http://localhost:${port}`));
}
