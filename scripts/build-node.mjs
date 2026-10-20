#!/usr/bin/env node
/**
 * Bouwt de site voor een gewone Node-server in plaats van een Cloudflare-worker.
 *
 * De standaardbuild (`npm run build`) gebruikt het cloudflare-module preset van
 * Nitro. Dat draait niet op Hostinger: daar moet een Node-proces de requests
 * afhandelen. Dit script zet alleen NITRO_PRESET en draait verder dezelfde
 * build, zodat de sitemap- en metacontroles er net zo goed in blijven zitten.
 *
 * Waarom een script en geen `NITRO_PRESET=... npm run build` in package.json:
 * die vorm werkt niet op Windows, waar npm de scripts via cmd uitvoert.
 *
 * Resultaat:
 *   .output/public   statische bestanden
 *   .output/server   de Node-server, te starten met `node .output/server/index.mjs`
 *
 * Draai met:  npm run build:node
 */
import { spawnSync } from "node:child_process";

const r = spawnSync("npm", ["run", "build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NITRO_PRESET: "node-server" },
});

process.exit(r.status ?? 1);
