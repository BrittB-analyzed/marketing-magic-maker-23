#!/usr/bin/env node
/**
 * Controleert of elke kennisbankpagina het sjabloon volgt:
 * - definiërende openingszin van maximaal 40 woorden;
 * - antwoorden op de vraagkoppen tussen 40 en 60 woorden;
 * - 400 tot 700 woorden zichtbare tekst;
 * - twee tot drie vraagkoppen en precies drie gerelateerde begrippen.
 *
 * Draai met: node scripts/check-kennisbank.mjs
 */
import { readFileSync } from "node:fs";

const BESTANDEN = ["kennisbank.ts", "kennisbank-seo.ts", "kennisbank-marketing.ts"];
const src = BESTANDEN.map((naam) => readFileSync(`src/content/${naam}`, "utf8")).join("\n");
const woorden = (t) => (t.match(/[\p{L}\p{N}'\u2019-]+/gu) ?? []).length;

/** Alle tekstwaarden binnen een blok, dus alles wat op de pagina zichtbaar wordt. */
const TEKST = /"((?:[^"\\]|\\.){25,})"/g;

const keys = [...src.matchAll(/^ {2}"?([a-z0-9-]+)"?: \{$/gm)];
let fouten = 0;

for (let i = 0; i < keys.length; i++) {
  const naam = keys[i][1];
  const blok = src.slice(keys[i].index, i + 1 < keys.length ? keys[i + 1].index : src.length);

  const veld = (naam) => {
    const m = blok.match(new RegExp(`${naam}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
    return m ? m[1] : "";
  };

  const definitie = veld("definitie");
  const vragen = [...blok.matchAll(/q: "((?:[^"\\]|\\.)*)",\s*\n\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)",/g)];
  const gerelateerd = (blok.match(/gerelateerd: \[([^\]]+)\]/)?.[1] ?? "").match(/"[a-z0-9-]+"/g) ?? [];

  // Alle langere tekstwaarden tellen mee, plus de vraagkoppen zelf.
  let totaal = 0;
  for (const m of blok.matchAll(TEKST)) totaal += woorden(m[1]);
  for (const v of vragen) totaal += woorden(v[1]);

  const problemen = [];
  if (woorden(definitie) > 40) problemen.push(`definitie is ${woorden(definitie)} woorden (max 40)`);
  for (const v of vragen) {
    const w = woorden(v[2]);
    if (w < 40 || w > 60) problemen.push(`antwoord op "${v[1].slice(0, 34)}" is ${w} woorden (40-60)`);
  }
  if (vragen.length < 2 || vragen.length > 3) problemen.push(`${vragen.length} vraagkoppen (moet 2 of 3)`);
  if (gerelateerd.length !== 3) problemen.push(`${gerelateerd.length} gerelateerde begrippen (moet 3)`);
  if (totaal < 400 || totaal > 700) problemen.push(`${totaal} woorden (moet 400-700)`);

  console.log(`${problemen.length ? "x" : "v"} ${naam.padEnd(24)} ${String(totaal).padStart(4)} woorden`);
  for (const p of problemen) console.log(`    - ${p}`);
  fouten += problemen.length;
}

console.log(
  fouten === 0
    ? "\nAlle kennisbankpagina's volgen het sjabloon."
    : `\n${fouten} afwijking(en) van het sjabloon.`,
);
