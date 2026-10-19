#!/usr/bin/env node
/**
 * Genereert public/sitemap.xml met alleen indexeerbare pagina's.
 *
 * Wat er NIET in komt:
 * - de oude WordPress-URL's die een 301 gooien (een sitemap hoort alleen
 *   eindbestemmingen te bevatten, geen doorverwijzingen);
 * - pagina's met een noindex, zoals de interne zoekresultatenpagina;
 * - kennisbankbegrippen waarvan de publicatiedatum nog niet is bereikt.
 *
 * lastmod komt uit de laatste git-commit die het bronbestand raakte, of uit de
 * publicatiedatum van het artikel of begrip. Nooit "vandaag" voor alles: een
 * sitemap waarin elke pagina dagelijks van datum verandert, wordt genegeerd.
 *
 * Draait automatisch mee in `npm run build`.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { verzamelPaginas } from "./lib/paginas.mjs";

const ROOT = process.cwd();
const SITE_URL = "https://b-analyzed.com";

/** Prioriteit op basis van hoe centraal de pagina in de site staat. */
function prioriteit(pad, soort) {
  if (pad === "/") return "1.0";
  if (soort === "kennisbank") return "0.5";
  if (soort === "blog") return "0.5";
  const diepte = pad.split("/").filter(Boolean).length;
  return diepte <= 1 ? "0.8" : "0.7";
}

const gitDatumCache = new Map();
function gitDatum(bestand) {
  if (gitDatumCache.has(bestand)) return gitDatumCache.get(bestand);
  let datum = null;
  try {
    const uit = execFileSync("git", ["log", "-1", "--format=%cs", "--", bestand], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (uit) datum = uit;
  } catch {
    /* geen git-historie beschikbaar, val terug op vandaag */
  }
  gitDatumCache.set(bestand, datum);
  return datum;
}

/**
 * De taalparen uit src/lib/i18n.ts, zodat de sitemap dezelfde bron gebruikt
 * als de hreflang-tags in de pagina zelf. Google verwacht dat die overeenkomen.
 */
function leesTaalparen() {
  const src = readFileSync(join(ROOT, "src", "lib", "i18n.ts"), "utf8");
  const start = src.indexOf("export const TAALPAREN");
  if (start === -1) return new Map();
  const blok = src.slice(start, src.indexOf("};", start));
  const paren = new Map();
  for (const m of blok.matchAll(/"([^"]+)":\s*"([^"]+)"/g)) paren.set(m[1], m[2]);
  return paren;
}

const taalparen = leesTaalparen();
const taalparenOmgekeerd = new Map([...taalparen].map(([nl, en]) => [en, nl]));

/** De hreflang-set voor een pad, of null als er geen tegenhanger bestaat. */
function alternatenVoor(pad) {
  const nlPad = taalparen.has(pad) ? pad : taalparenOmgekeerd.get(pad);
  const enPad = taalparenOmgekeerd.has(pad) ? pad : taalparen.get(pad);
  if (!nlPad || !enPad) return null;
  const nlUrl = SITE_URL + nlPad;
  const enUrl = SITE_URL + enPad;
  return [
    ["nl-NL", nlUrl],
    ["nl-BE", nlUrl],
    ["nl", nlUrl],
    ["en-GB", enUrl],
    ["en", enUrl],
    ["x-default", enUrl],
  ];
}

const vandaag = new Date().toISOString().slice(0, 10);
const { paginas, redirects, noindex, kbGepland } = verzamelPaginas(ROOT);

const rijen = [...paginas.values()]
  .map((p) => ({
    loc: `${SITE_URL}${p.pad}`,
    lastmod: p.datum ?? gitDatum(p.bestand) ?? vandaag,
    priority: prioriteit(p.pad, p.soort),
    alternaten: alternatenVoor(p.pad),
  }))
  .sort((a, b) => a.loc.localeCompare(b.loc));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${rijen
  .map((r) => {
    // Pagina's met een tegenhanger krijgen de volledige hreflang-set mee.
    // Google verwacht dat die overeenkomt met de tags in de pagina zelf.
    const alt = (r.alternaten ?? [])
      .map(([lang, href]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`)
      .join("");
    return `  <url>\n    <loc>${r.loc}</loc>${alt}\n    <lastmod>${r.lastmod}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");

console.log(`✓ sitemap.xml: ${rijen.length} indexeerbare URL's`);
console.log(`  met hreflang: ${rijen.filter((r) => r.alternaten).length} URL's in een taalpaar`);
console.log(`  uitgesloten: ${redirects.size} redirect(s), ${noindex.size} noindex, ${kbGepland.length} nog niet gepubliceerd`);
if (kbGepland.length) {
  for (const k of kbGepland.sort((a, b) => a.publicatie.localeCompare(b.publicatie))) {
    console.log(`    ${k.publicatie}  ${k.pad}`);
  }
}
