#!/usr/bin/env node
/**
 * Controleert titles en meta descriptions op lengte.
 * - title: max. 60 tekens
 * - meta description: max. 160 tekens
 * Draait automatisch mee in `npm run build`. Waarschuwt standaard;
 * met --strict faalt de build bij een overschrijding.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const TITLE_MAX = 60;
const DESC_MAX = 160;
const strict = process.argv.includes("--strict");

const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === "components/ui") continue;
      walk(p);
    } else if (/\.(ts|tsx)$/.test(name) && !name.endsWith(".gen.ts")) {
      files.push(p);
    }
  }
}
walk("src");

const problems = [];

const titleRe = /(?:^|[{,\s])"?title"?:\s*(["'])((?:\\.|(?!\1)[^\\])*)\1/g;
const descRe =
  /(?:name:\s*"description",\s*content:|"?description"?:|property:\s*"og:description",\s*content:)\s*(["'])((?:\\.|(?!\1)[^\\])*)\1/g;

function lineOf(source, index) {
  return source.slice(0, index).split("\n").length;
}

for (const file of files) {
  const src = readFileSync(file, "utf8");
  for (const [re, max, kind] of [
    [titleRe, TITLE_MAX, "title"],
    [descRe, DESC_MAX, "meta description"],
  ]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(src))) {
      const value = m[2];
      if (value.includes("${")) continue; // template-waarde, lengte niet statisch te bepalen
      if (value.length > max) {
        problems.push(
          `${file}:${lineOf(src, m.index)}  ${kind} is ${value.length} tekens (max ${max}): "${value.slice(0, 80)}..."`,
        );
      }
    }
  }
}

if (problems.length === 0) {
  console.log(`✓ SEO-metacheck: alle titles ≤ ${TITLE_MAX} en meta descriptions ≤ ${DESC_MAX} tekens.`);
} else {
  const label = strict ? "FOUT" : "WAARSCHUWING";
  console.warn(`\n${label} — SEO-metacheck vond ${problems.length} overschrijding(en):`);
  for (const p of problems) console.warn(`  • ${p}`);
  console.warn("");
  if (strict) process.exit(1);
}
