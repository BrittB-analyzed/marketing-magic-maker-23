/**
 * Eén bron voor de vraag "welke URL's heeft deze site?".
 *
 * Wordt gebruikt door scripts/generate-sitemap.mjs en scripts/interne-links.mjs,
 * zodat de sitemap en het linkoverzicht nooit uit elkaar kunnen lopen.
 *
 * Uitgesloten van de lijst met indexeerbare pagina's:
 * - routebestanden die een 301 gooien (de oude WordPress-URL's);
 * - pagina's die zichzelf op noindex zetten (zoals de interne zoekpagina);
 * - dynamische routes, want die zijn zelf geen pagina;
 * - kennisbankbegrippen waarvan de publicatiedatum nog niet is bereikt.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

export function normalize(p) {
  const [path] = p.split(/[?#]/);
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : `${trimmed}/`;
}

/** Alle padwaarden uit `to="/x/"`, `to: "/x/"` en `href="/x/"`. */
export function extractLinks(src) {
  const links = new Set();
  // `to="/x/"`, `to = "/x/"` (standaardwaarde van een prop), `to: "/x/"` en `href="/x/"`.
  const patterns = [
    /\bto\s*=\s*\{?"(\/[^"]*)"/g,
    /\bto:\s*"(\/[^"]*)"/g,
    /\bhref\s*=\s*"(\/[^"]*)"/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(src))) links.add(normalize(m[1]));
  }
  return links;
}

export function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name)) out.push(p);
  }
  return out;
}

function routePath(root, file) {
  let rel = relative(join(root, "src", "routes"), file).split(sep).join("/");
  rel = rel.replace(/\.(tsx|ts)$/, "");
  if (rel === "index") return "/";
  rel = rel.replace(/\/index$/, "").replace(/\.index$/, "");
  rel = rel.replace(/\./g, "/");
  return normalize(`/${rel}`);
}

export function verzamelPaginas(root = process.cwd(), nu = new Date()) {
  const routeFiles = walk(join(root, "src", "routes")).filter(
    (f) =>
      !f.endsWith("__root.tsx") &&
      !f.endsWith("routeTree.gen.ts") &&
      !f.includes(`${sep}api${sep}`),
  );

  const paginas = new Map();
  const redirects = new Map();
  const noindex = new Set();
  const dynamischeBestanden = [];

  for (const f of routeFiles) {
    const src = readFileSync(f, "utf8");
    const pad = routePath(root, f);
    const doel = src.match(/redirect\(\{\s*to:\s*"([^"]+)"/);
    if (doel) {
      redirects.set(pad, doel[1]);
      continue;
    }
    if (pad.includes("$")) {
      dynamischeBestanden.push({ pad, bestand: f });
      continue;
    }
    if (/content:\s*"noindex/.test(src)) {
      noindex.add(pad);
      continue;
    }
    paginas.set(pad, { pad, bestand: relative(root, f), soort: "route" });
  }

  // Blogartikelen draaien op de catch-all /$slug
  const blogBestand = join(root, "src", "content", "blog.ts");
  const blogSrc = readFileSync(blogBestand, "utf8");
  for (const m of blogSrc.matchAll(/"slug":\s*"([^"]+)",[\s\S]{0,600}?"date":\s*"([^"]+)"/g)) {
    const pad = `/${m[1]}/`;
    paginas.set(pad, {
      pad,
      bestand: relative(root, blogBestand),
      soort: "blog",
      datum: m[2],
    });
  }

  // Cases draaien op de dynamische route /cases/$slug
  const caseBestand = join(root, "src", "content", "cases.ts");
  const caseSrc = readFileSync(caseBestand, "utf8");
  for (const m of caseSrc.matchAll(/^ {4}slug:\s*"([^"]+)",$/gm)) {
    const pad = `/cases/${m[1]}/`;
    paginas.set(pad, { pad, bestand: relative(root, caseBestand), soort: "case" });
  }

  // Kennisbankbegrippen, alleen de begrippen waarvan de publicatiedatum is bereikt
  const kbBestand = join(root, "src", "content", "kennisbank.ts");
  const kbSrc = ["kennisbank.ts", "kennisbank-seo.ts", "kennisbank-marketing.ts"]
    .map((naam) => readFileSync(join(root, "src", "content", naam), "utf8"))
    .join("\n");
  const kbAlle = [...kbSrc.matchAll(/slug:\s*"([^"]+)",[\s\S]*?publicatie:\s*"([^"]+)"/g)].map((m) => ({
    slug: m[1],
    publicatie: m[2],
  }));
  const kbGepland = [];
  for (const e of kbAlle) {
    const pad = `/kennisbank/${e.slug}/`;
    if (new Date(`${e.publicatie}T00:00:00Z`) > nu) {
      kbGepland.push({ pad, publicatie: e.publicatie });
      continue;
    }
    paginas.set(pad, {
      pad,
      bestand: relative(root, kbBestand),
      soort: "kennisbank",
      datum: e.publicatie,
    });
  }

  return { routeFiles, paginas, redirects, noindex, dynamischeBestanden, kbGepland, kbSrc, blogSrc };
}
