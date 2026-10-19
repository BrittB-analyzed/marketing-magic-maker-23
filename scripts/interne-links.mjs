#!/usr/bin/env node
/**
 * Bouwt een overzicht van de interne linkstructuur.
 *
 * Onderscheid dat ertoe doet:
 * - CONTEXTUELE links staan in de tekst of in een "verder lezen"-blok van één
 *   specifieke pagina. Dat zijn de links die Google gebruikt om te bepalen
 *   waar een pagina over gaat en hoeveel gewicht hij krijgt.
 * - CHROME-links staan in het menu, de footer of een sitebreed CTA-blok. Die
 *   staan op élke pagina en zeggen dus weinig over één specifiek onderwerp.
 *
 * De regel die dit script bewaakt: geen enkele pagina heeft minder dan drie
 * inkomende interne links. Menu- en footerlinks tellen daarvoor niet mee.
 *
 * Draai met:  node scripts/interne-links.mjs
 * Of als JSON: node scripts/interne-links.mjs --json
 */
import { readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { extractLinks, verzamelPaginas } from "./lib/paginas.mjs";

const ROOT = process.cwd();
const asJson = process.argv.includes("--json");

/** Bestanden waarvan de links op élke pagina staan. */
const CHROME_FILES = [
  join("src", "components", "site", "site-chrome.tsx"),
  join("src", "components", "site", "site-chrome-en.tsx"),
  join("src", "components", "site", "page-bits.tsx"),
  join("src", "components", "site", "lead-form.tsx"),
  join("src", "components", "site", "founder-card.tsx"),
];

const { routeFiles, paginas, redirects, noindex, kbSrc } = verzamelPaginas(ROOT);

function routePathVan(bestand) {
  let rel = relative(join(ROOT, "src", "routes"), bestand).split(sep).join("/");
  rel = rel.replace(/\.(tsx|ts)$/, "");
  if (rel === "index") return "/";
  rel = rel.replace(/\/index$/, "").replace(/\.index$/, "").replace(/\./g, "/");
  const p = `/${rel}`.replace(/\/+$/, "");
  return p === "" ? "/" : `${p}/`;
}

// Gedeelde linksets uit src/data/interne-links.ts. Een routebestand dat zo'n
// constante gebruikt, linkt in de praktijk naar elk pad erin.
const gedeeldeSets = new Map();
{
  const src = readFileSync(join(ROOT, "src", "data", "interne-links.ts"), "utf8");
  const namen = [...src.matchAll(/export const ([A-Z_]+):\s*(?:InterneLink\[\]|Record<string, InterneLink>)\s*=\s*[[{]/g)];
  for (let i = 0; i < namen.length; i++) {
    const start = namen[i].index;
    const end = i + 1 < namen.length ? namen[i + 1].index : src.length;
    gedeeldeSets.set(namen[i][1], [...extractLinks(src.slice(start, end))]);
  }
}

const contextueel = new Map(); // doelpad -> Set van bronpaden
const chrome = new Set(); // doelpaden die in menu/footer/CTA staan
const uitgaand = new Map(); // bronpad -> Set van doelpaden

function voegToe(vanPad, naarPad) {
  if (!naarPad.startsWith("/") || naarPad.includes("$") || vanPad === naarPad) return;
  if (!contextueel.has(naarPad)) contextueel.set(naarPad, new Set());
  contextueel.get(naarPad).add(vanPad);
  if (!uitgaand.has(vanPad)) uitgaand.set(vanPad, new Set());
  uitgaand.get(vanPad).add(naarPad);
}

for (const f of CHROME_FILES) {
  try {
    for (const l of extractLinks(readFileSync(join(ROOT, f), "utf8"))) chrome.add(l);
  } catch {
    /* bestand bestaat niet meer, sla over */
  }
}

const blogPaden = [...paginas.values()].filter((p) => p.soort === "blog").map((p) => p.pad);
const kbPaden = [...paginas.values()].filter((p) => p.soort === "kennisbank").map((p) => p.pad);
const casePaden = [...paginas.values()].filter((p) => p.soort === "case").map((p) => p.pad);

// Links uit routebestanden. Een template-link als to="/$slug/" wordt in de
// praktijk uitgerold over de hele collectie en telt dus als een link naar elke
// pagina daarin.
for (const f of routeFiles) {
  const pad = routePathVan(f);
  if (redirects.has(pad) || noindex.has(pad) || pad.includes("$")) continue;
  const src = readFileSync(f, "utf8");
  for (const l of extractLinks(src)) voegToe(pad, l);
  for (const [naam, paden] of gedeeldeSets) {
    if (new RegExp(`\\b${naam}\\b`).test(src)) for (const l of paden) voegToe(pad, l);
  }
  if (/to="\/\$slug\/"/.test(src)) for (const b of blogPaden) voegToe(pad, b);
  if (/to="\/kennisbank\/\$slug\/"/.test(src)) for (const k of kbPaden) voegToe(pad, k);
  if (/to="\/cases\/\$slug\/"/.test(src)) for (const c of casePaden) voegToe(pad, c);
}

// Elke casepagina deelt hetzelfde routebestand: de links daarin (andere cases,
// de dienstpagina's uit CASE_DIENST_LINKS en de vervolgstappen) staan dus op
// alle cases. Het bestand zelf is een dynamische route en wordt in de lus
// hierboven overgeslagen, vandaar deze aparte afhandeling.
{
  const src = readFileSync(join(ROOT, "src", "routes", "cases.$slug.tsx"), "utf8");
  const vaste = [...extractLinks(src)];
  for (const [naam, paden] of gedeeldeSets) {
    if (new RegExp(`\\b${naam}\\b`).test(src)) vaste.push(...paden);
  }
  for (const van of casePaden) {
    for (const l of vaste) voegToe(van, l);
    if (/to="\/cases\/\$slug\/"/.test(src)) for (const naar of casePaden) voegToe(van, naar);
  }
}

// De artikelpagina toont een "meer lezen"-lijst naar de andere artikelen.
const artikelSrc = readFileSync(join(ROOT, "src", "routes", "$slug.tsx"), "utf8");
if (/to="\/\$slug\/"/.test(artikelSrc)) {
  for (const van of blogPaden) for (const naar of blogPaden) voegToe(van, naar);
}

// De begrippagina's delen één dynamisch routebestand; de vaste links daarin
// (terug naar het register, de auteurspagina) staan dus op elk begrip.
{
  const src = readFileSync(join(ROOT, "src", "routes", "kennisbank.$slug.tsx"), "utf8");
  const vaste = extractLinks(src);
  for (const van of kbPaden) for (const l of vaste) voegToe(van, l);
}

// Links uit de landingspagina-content: per entry, want elke entry is één pagina.
for (const bestand of ["landings-local.ts", "landings-topical.ts"]) {
  const src = readFileSync(join(ROOT, "src", "content", bestand), "utf8");
  const keys = [...src.matchAll(/^ {2}"([a-z0-9-]+)":\s*\{/gm)];
  for (let i = 0; i < keys.length; i++) {
    const start = keys[i].index;
    const end = i + 1 < keys.length ? keys[i + 1].index : src.length;
    const pad = `/${keys[i][1]}/`;
    for (const l of extractLinks(src.slice(start, end))) voegToe(pad, l);
  }
}

// Links uit de kennisbank: de dienstlink en de drie gerelateerde begrippen.
const kbKeys = [...kbSrc.matchAll(/^ {2}"?([a-z0-9-]+)"?:\s*\{/gm)];
for (let i = 0; i < kbKeys.length; i++) {
  const start = kbKeys[i].index;
  const end = i + 1 < kbKeys.length ? kbKeys[i + 1].index : kbSrc.length;
  const blok = kbSrc.slice(start, end);
  const pad = `/kennisbank/${kbKeys[i][1]}/`;
  if (!paginas.has(pad)) continue; // nog niet gepubliceerd, linkt dus nog niet
  for (const l of extractLinks(blok)) voegToe(pad, l);
  const rel = blok.match(/gerelateerd:\s*\[([^\]]+)\]/);
  if (rel) {
    for (const m of rel[1].matchAll(/"([a-z0-9-]+)"/g)) {
      const doel = `/kennisbank/${m[1]}/`;
      if (paginas.has(doel)) voegToe(pad, doel);
    }
  }
}

// -------------------------------------------------------------- rapportage
const rijen = [...paginas.values()].map((p) => {
  const inbound = contextueel.get(p.pad) ?? new Set();
  return {
    pad: p.pad,
    soort: p.soort,
    contextueel: inbound.size,
    inChrome: chrome.has(p.pad),
    uitgaand: (uitgaand.get(p.pad) ?? new Set()).size,
    bronnen: [...inbound].sort(),
  };
});
rijen.sort((a, b) => a.contextueel - b.contextueel || a.pad.localeCompare(b.pad));

// Interne links naar een pad dat geen bestaande indexeerbare pagina is.
const gebroken = [];
for (const [doel, bronnen] of contextueel) {
  if (paginas.has(doel) || doel === "/") continue;
  gebroken.push({
    doel,
    reden: redirects.has(doel)
      ? `301 naar ${redirects.get(doel)}`
      : noindex.has(doel)
        ? "noindex"
        : "bestaat niet",
    bronnen: [...bronnen].sort(),
  });
}

if (asJson) {
  console.log(JSON.stringify({ paginas: rijen, gebroken, redirects: [...redirects] }, null, 2));
} else {
  const zwak = rijen.filter((r) => r.contextueel < 3 && !r.inChrome);
  const zwakInMenu = rijen.filter((r) => r.contextueel < 3 && r.inChrome);
  console.log(`\nINTERNE LINKS — ${rijen.length} indexeerbare pagina's\n`);
  console.log(`Onder de drie inkomende links en NIET in menu of footer: ${zwak.length}`);
  for (const r of zwak) console.log(`  ${String(r.contextueel).padStart(3)} in   ${r.pad}`);
  console.log(`\nOnder de drie contextuele links, wel in menu of footer: ${zwakInMenu.length}`);
  for (const r of zwakInMenu) console.log(`  ${String(r.contextueel).padStart(3)} in   ${r.pad}`);
  console.log(`\nAlle pagina's, gesorteerd op aantal contextuele inkomende links:\n`);
  for (const r of rijen) {
    console.log(
      `  ${String(r.contextueel).padStart(3)} in  ${String(r.uitgaand).padStart(3)} uit  ${r.inChrome ? "menu" : "    "}  ${r.pad}`,
    );
  }
  if (gebroken.length) {
    console.log(`\nInterne links naar een pad dat geen indexeerbare pagina is (${gebroken.length}):\n`);
    for (const g of gebroken) console.log(`  ${g.doel}  (${g.reden})\n      vanaf: ${g.bronnen.join(", ")}`);
  }
  console.log("");
}
