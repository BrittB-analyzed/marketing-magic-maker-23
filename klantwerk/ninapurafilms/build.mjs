// Bouwt het tweetalige prototype (EN op /, NL op /nl/) naar nieuwe-site/.
// Gebruik: node klantwerk/ninapurafilms/build.mjs
import { mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from './content.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'nieuwe-site');
const SITE = 'https://www.ninapurafilms.com';
const PHONE = '+31648587673';
const WA = 'https://wa.me/31648587673';

const t = {
  en: { menu: [['home', 'Home'], ['weddings', 'Weddings'], ['photoshoots', 'Photoshoots'], ['villas', 'Villas & brands'], ['guide', 'Wedding guide'], ['about', 'About'], ['contact', 'Contact']],
        other: 'NL', otherLabel: 'Nederlands', tagline: 'Photographer & videographer · Ibiza', proto: 'Concept prototype – yellow = still to be filled in',
        foot: 'Wedding, lifestyle and villa photography & film on Ibiza. Based in Ibiza and the Netherlands, available worldwide.',
        services: 'Services', info: 'Info', contactH: 'Contact' },
  nl: { menu: [['home', 'Home'], ['weddings', 'Bruiloften'], ['photoshoots', 'Fotoshoots'], ['villas', 'Villa’s & merken'], ['guide', 'Trouwen op Ibiza'], ['about', 'Over Nina'], ['contact', 'Contact']],
        other: 'EN', otherLabel: 'English', tagline: 'Fotograaf & videograaf · Ibiza', proto: 'Conceptversie – geel = nog in te vullen',
        foot: 'Trouwfotografie, trouwfilms, fotoshoots en villa-content op Ibiza. Gevestigd op Ibiza en in Nederland, wereldwijd beschikbaar.',
        services: 'Diensten', info: 'Info', contactH: 'Contact' },
};

const byKey = (lang, key) => pages.find(p => p.lang === lang && p.key === key);
const esc = s => s.replace(/&(?!amp;)/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const waIcon = '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8 1 3.9.8a3.3 3.3 0 0 0 2.1-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3z"/></svg>';

function head(p) {
  const alt = byKey(p.lang === 'en' ? 'nl' : 'en', p.key);
  const en = p.lang === 'en' ? p : alt, nl = p.lang === 'nl' ? p : alt;
  const crumbs = [{ name: 'Home', path: byKey(p.lang, 'home').path }, ...(p.key === 'home' ? [] : [{ name: p.crumb, path: p.path }])];
  const graph = [
    { '@type': 'ProfessionalService', '@id': `${SITE}/#business`, name: 'Nina Pura Films',
      description: 'Wedding, lifestyle and villa photographer & videographer on Ibiza.',
      url: `${SITE}/`, telephone: PHONE, email: 'info@ninapurafilms.com',
      image: 'https://static.wixstatic.com/media/2b8723_f00a2496391f42c7822829334762bfb7~mv2.jpg',
      priceRange: '€€', founder: { '@id': `${SITE}/#nina` },
      address: { '@type': 'PostalAddress', addressLocality: 'Ibiza', addressRegion: 'Illes Balears', addressCountry: 'ES' },
      areaServed: [{ '@type': 'Place', name: 'Ibiza' }, { '@type': 'Country', name: 'Spain' }, { '@type': 'Country', name: 'Netherlands' }],
      knowsLanguage: ['en', 'nl'],
      sameAs: ['https://www.instagram.com/ninapurafilms', 'https://www.facebook.com/profile.php?id=100067499144749'] },
    { '@type': 'Person', '@id': `${SITE}/#nina`, name: 'Nina Snip', jobTitle: 'Photographer & videographer', worksFor: { '@id': `${SITE}/#business` } },
    { '@type': 'WebPage', '@id': `${SITE}${p.path}`, url: `${SITE}${p.path}`, name: p.title.replace(/&amp;/g, '&'), inLanguage: p.lang, isPartOf: { '@type': 'WebSite', name: 'Nina Pura Films', url: `${SITE}/` }, about: { '@id': `${SITE}/#business` } },
    { '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE}${c.path}` })) },
    ...(p.schema || []),
  ];
  return `<!doctype html>
<html lang="${p.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="${SITE}${p.path}">
<link rel="alternate" hreflang="en" href="${SITE}${en.path}">
<link rel="alternate" hreflang="nl" href="${SITE}${nl.path}">
<link rel="alternate" hreflang="x-default" href="${SITE}${en.path}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:image" content="${p.og}">
<meta property="og:locale" content="${p.lang === 'en' ? 'en_GB' : 'nl_NL'}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Karla:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/site.css">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>`;
}

function header(p) {
  const L = t[p.lang];
  const alt = byKey(p.lang === 'en' ? 'nl' : 'en', p.key);
  const items = L.menu.map(([k, label]) => `<li><a href="${byKey(p.lang, k).path}"${k === p.key ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  return `<header class="top${p.solid ? ' solid' : ''}"><div class="wrap">
  <a class="logo" href="${byKey(p.lang, 'home').path}">NINA PURA FILMS<small>${L.tagline}</small></a>
  <button class="burger" aria-label="Menu" onclick="this.nextElementSibling.classList.toggle('open')">☰</button>
  <ul class="menu">${items}</ul>
  <a class="lang" href="${alt.path}" hreflang="${alt.lang}" lang="${alt.lang}" title="${L.otherLabel}">${L.other}</a>
</div></header>`;
}

function footer(p) {
  const L = t[p.lang], k = key => byKey(p.lang, key);
  const svc = ['weddings', 'photoshoots', 'villas'].map(x => `<li><a href="${k(x).path}">${k(x).crumb}</a></li>`).join('');
  const inf = ['guide', 'about', 'contact'].map(x => `<li><a href="${k(x).path}">${k(x).crumb}</a></li>`).join('');
  return `<footer class="site"><div class="wrap">
  <div class="cols">
    <div><h4>Nina Pura Films</h4><p>${L.foot}</p></div>
    <div><h4>${L.services}</h4><ul>${svc}</ul></div>
    <div><h4>${L.info}</h4><ul>${inf}</ul></div>
    <div><h4>${L.contactH}</h4><ul>
      <li><a href="mailto:info@ninapurafilms.com">info@ninapurafilms.com</a></li>
      <li><a href="tel:${PHONE}">+31 6 4858 7673</a></li>
      <li><a href="${WA}">WhatsApp</a></li>
      <li><a href="https://www.instagram.com/ninapurafilms">Instagram</a> · <a href="https://www.facebook.com/profile.php?id=100067499144749">Facebook</a></li>
    </ul></div>
  </div>
  <div class="base"><span>© 2026 Nina Pura Films · Nina Snip</span><span>Ibiza · ${p.lang === 'en' ? 'The Netherlands' : 'Nederland'} · ${p.lang === 'en' ? 'Worldwide' : 'Wereldwijd'}</span></div>
</div></footer>
<a class="wa" href="${WA}" aria-label="WhatsApp">${waIcon}</a>
<div class="proto">${L.proto}</div>`;
}

for (const p of pages) {
  const html = `${head(p)}
<body>
${header(p)}
<main>
${p.body}
</main>
${footer(p)}
</body>
</html>
`;
  const file = join(out, p.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}
copyFileSync(join(root, 'site.css'), join(out, 'site.css'));
writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
writeFileSync(join(out, 'netlify.toml'), '[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Robots-Tag = "noindex, nofollow"\n');
console.log(`${pages.length} pagina's gebouwd in ${out}`);
