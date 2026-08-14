// Downloads every CDN asset pointer (*.asset.json) into public/assets/<group>/<file>
// and rewrites the pointer's `url` to a local path, so the site can be hosted
// anywhere (Hostinger etc.) with all media in one separate /assets folder.
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.ASSET_BASE ?? "http://localhost:8080";
const ROOT = path.resolve("src/assets");
const OUT = path.resolve("public/assets");

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith(".asset.json")) out.push(p);
  }
  return out;
}

const files = await walk(ROOT);
let done = 0;
for (const file of files) {
  const json = JSON.parse(await readFile(file, "utf8"));
  const group = path.relative(ROOT, path.dirname(file)) || ".";
  const name = json.original_filename ?? path.basename(file, ".asset.json");
  const localRel = path.posix.join("/assets", group === "." ? "" : group, name);
  const source = json.cdn_url ?? json.url;
  const remote = source.startsWith("http") ? source : BASE + source;
  const res = await fetch(remote);
  if (!res.ok) throw new Error(`${remote} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(OUT, group === "." ? "" : group, name);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  json.cdn_url = source;
  json.url = localRel;
  await writeFile(file, JSON.stringify(json, null, 2) + "\n");
  done++;
  console.log(`${localRel}  (${buf.length} bytes)`);
}
console.log(`\nExported ${done} assets to public/assets`);
