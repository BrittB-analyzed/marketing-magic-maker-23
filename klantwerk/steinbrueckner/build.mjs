// Bouwt het prototype: zet header, footer en <head> om elke pagina in src/.
// Gebruik: node klantwerk/steinbrueckner/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sprite, icon, H3, TRUST } from './icons.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'nieuwe-site');
const SITE = 'https://www.steinbrueckner.nl';
const IMG = (id, v, w = 1200) => `https://image.jimcdn.com/app/cms/image/transf/dimension=${w}x10000:format=jpg/path/s08461c509908f8cb/image/${id}/version/${v}/image.jpg`;

const pages = [
  { file: 'index.html', src: 'home.html', nav: 'home', path: '/',
    title: 'Truckwash & wasstraat voor vrachtwagens en bussen | Steinbrückner Nederland',
    desc: 'Portaalwasstraten (DBA) en mobiele truckwash borstels (EBA) voor transport, OV en logistiek. 350+ installaties sinds 1993, 24/7 service. Vraag advies op maat aan.' },
  { file: 'dba-wasstraat.html', src: 'dba.html', nav: 'oplossingen', path: '/bedrijfsvoertuigreiniging/wasstraten-voor-bussen-en-vrachtwagens-dba/',
    title: 'DBA portaalwasstraat voor vrachtwagens en bussen | Steinbrückner',
    desc: 'Volautomatische DBA wasstraat voor wagenparken vanaf ±20 voertuigen. Kettingloze aandrijving, RVS, doorrijhoogte tot 4,20 m. Bekijk specificaties en vraag een offerte aan.',
    crumbs: [['Bedrijfsvoertuigreiniging', '/bedrijfsvoertuigreiniging/'], ['DBA wasstraat', null]] },
  { file: 'eba-mobiele-wasborstel.html', src: 'eba.html', nav: 'oplossingen', path: '/bedrijfsvoertuigreiniging/mobiele-truckwash-borstels-eba/',
    title: 'EBA mobiele truckwash borstel | Steinbrückner Nederland',
    desc: 'Mobiele wasborstel voor vrachtwagens, bussen en landbouwvoertuigen. Onderhoudsvrije directe aandrijving, levensduur 20-25 jaar. Ideaal tot ±20 voertuigen. Vraag een offerte aan.',
    crumbs: [['Bedrijfsvoertuigreiniging', '/bedrijfsvoertuigreiniging/'], ['EBA mobiele wasborstel', null]] },
  { file: 'wasstraat-kopen.html', src: 'kopen.html', nav: 'oplossingen', path: '/wasstraat-kopen/',
    title: 'Truckwash kopen: wasstraat voor uw wagenpark | Steinbrückner',
    desc: 'Een eigen truckwash kopen? Vergelijk DBA en EBA, bereken wat extern wassen u nu kost en ontdek hoe advies, installatie en service verlopen. 24 maanden garantie.',
    crumbs: [['Wasstraat kopen', null]] },
  { file: 'service-onderhoud.html', src: 'service.html', nav: 'service', path: '/service-onderhoud/',
    title: 'Service, onderhoud en onderdelen voor uw truckwash | Steinbrückner',
    desc: '24/7 service, onderhoudscontracten en meer dan 90% van de onderdelen direct uit voorraad. Ook voor oudere Steinbrückner-installaties. Meld een storing of plan onderhoud.',
    crumbs: [['Service & onderhoud', null]] },
  { file: 'projecten-en-kennis.html', src: 'berichten.html', nav: 'berichten', path: '/berichten/',
    title: 'Projecten, nieuws en kennisbank over truckwash | Steinbrückner',
    desc: 'Bekijk gerealiseerde truckwash-projecten bij onder meer Poiesz en Transpo Nuth, het laatste nieuws en praktische blogs over bedrijfsvoertuigreiniging.',
    crumbs: [['Projecten & kennis', null]] },
  { file: 'over-ons.html', src: 'over.html', nav: 'over', path: '/over-ons/',
    title: 'Over Steinbrückner Nederland: specialist sinds 1993',
    desc: 'Familiebedrijf uit Belfeld en Nederlands importeur van Steinbrückner ReinigungsTechnik GmbH. Duitse kwaliteit, Nederlandse service, ruim 350 installaties.',
    crumbs: [['Over ons', null]] },
  { file: 'contact.html', src: 'contact.html', nav: 'contact', path: '/contact/',
    title: 'Contact en offerte aanvragen | Steinbrückner Nederland',
    desc: 'Vraag een offerte of adviesgesprek aan voor een truckwash, of meld een storing. Bel 077-475 23 26 of vul het formulier in. Reactie binnen één werkdag.',
    crumbs: [['Contact', null]] },
];

const navItems = [
  ['home', 'index.html', 'Home'],
  ['oplossingen', 'wasstraat-kopen.html', 'Oplossingen', [
    ['dba-wasstraat.html', 'DBA portaalwasstraat', 'Volautomatisch, vanaf ±20 voertuigen'],
    ['eba-mobiele-wasborstel.html', 'EBA mobiele wasborstel', 'Flexibel, tot ±20 voertuigen'],
    ['wasstraat-kopen.html', 'Wasstraat kopen', 'Vergelijken, kosten en proces'],
  ]],
  ['service', 'service-onderhoud.html', 'Service & onderdelen', [
    ['service-onderhoud.html', 'Service & onderhoud', '24/7 storingsdienst'],
    ['https://truckwash.shop/', 'Webshop onderdelen', 'truckwash.shop'],
  ]],
  ['berichten', 'projecten-en-kennis.html', 'Projecten & kennis', [
    ['projecten-en-kennis.html#projecten', 'Projecten', 'Gerealiseerde installaties'],
    ['projecten-en-kennis.html#nieuws', 'Nieuws', 'Beurzen en updates'],
    ['projecten-en-kennis.html#blogs', 'Kennisbank', 'Blogs en tips'],
  ]],
  ['over', 'over-ons.html', 'Over ons'],
  ['contact', 'contact.html', 'Contact'],
];

const nav = cur => navItems.map(([key, href, label, sub]) => {
  const ac = key === cur ? ' aria-current="page"' : '';
  const subHtml = sub ? `<ul class="sub">${sub.map(([h, l, s]) => `<li><a href="${h}">${l}<small>${s}</small></a></li>`).join('')}</ul>` : '';
  return `<li><a href="${href}"${ac}>${label}</a>${subHtml}</li>`;
}).join('\n        ');

const org = {
  '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE}/#organization`,
  name: 'Steinbrückner Nederland B.V.', url: `${SITE}/`, telephone: '+31774752326', email: 'info@steinbrueckner.nl',
  logo: IMG('i5f31a9b5b4c84a24', '1752521546', 190), foundingDate: '1993',
  slogan: 'Kwaliteit kent kleur',
  address: { '@type': 'PostalAddress', streetAddress: 'Geloërveldweg 1', postalCode: '5951 DH', addressLocality: 'Belfeld', addressCountry: 'NL' },
  areaServed: ['NL', 'BE', 'DE'],
  parentOrganization: { '@type': 'Organization', name: 'Steinbrückner ReinigungsTechnik GmbH' },
};

const crumbLd = p => p.crumbs ? {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...p.crumbs].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, ...(u || i === p.crumbs.length ? { item: SITE + (u || p.path) } : {}) })),
} : null;

// FAQ-schema automatisch uit de <details class="faq-item"> op de pagina
const faqLd = body => {
  const qs = [...body.matchAll(/<details class="faq-item"><summary>(.*?)<\/summary><div>([\s\S]*?)<\/div><\/details>/g)];
  if (!qs.length) return null;
  const strip = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qs.map(([, q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) };
};

const crumbHtml = p => p.crumbs ? `<nav class="breadcrumb" aria-label="Kruimelpad"><a href="index.html">Home</a> › ${p.crumbs.map(([n], i) => i < p.crumbs.length - 1 ? `<a href="#">${n}</a>` : `<span aria-current="page">${n}</span>`).join(' › ')}</nav>` : '';

for (const p of pages) {
  let body = readFileSync(join(root, 'src', p.src), 'utf8');
  // Extra schema per pagina staat in de bron tussen <!--ld ... ld-->
  const extra = [...body.matchAll(/<!--ld([\s\S]*?)ld-->/g)].map(m => m[1].trim());
  body = body.replace(/<!--ld[\s\S]*?ld-->\s*/g, '').replace('{{crumbs}}', crumbHtml(p));
  // Iconen bij koppen en kerncijfers (centraal beheerd in icons.mjs)
  body = body.replace(/<h3>(.*?)<\/h3>/g, (m, txt) => H3[txt] ? icon(H3[txt]) + m : m)
    .replace(/<div><strong>(.*?)<\/strong>/g, (m, txt) => TRUST[txt] ? `<div>${icon(TRUST[txt])}<strong>${txt}</strong>` : m);
  const lds = [org, crumbLd(p), faqLd(body)]
    .filter(Boolean).map(o => JSON.stringify(o, null, 1)).concat(extra);
  const html = `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<!-- Prototype Steinbrückner Nederland - B. Analyzed marketing, oktober 2026. Canonical en og-tags wijzen al naar de live URL. -->
<title>${p.title}</title>
<meta name="description" content="${p.desc}">
<link rel="canonical" href="${SITE}${p.path}">
<meta property="og:type" content="website">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.desc}">
<meta property="og:url" content="${SITE}${p.path}">
<meta property="og:image" content="${IMG('i158bb9d60fa50e9b', '1742999265')}">
<meta property="og:locale" content="nl_NL">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet">
<link rel="icon" href="assets/str-logo.jpg">
<link rel="stylesheet" href="assets/style.css">
${lds.map(l => `<script type="application/ld+json">\n${l}\n</script>`).join('\n')}
</head>
<body>
${sprite}

<div class="topbar">
  <div class="wrap">
    <span class="usp-mini" data-cro="Drie harde B2B-argumenten direct zichtbaar, nog vóór de navigatie."><span>Specialist sinds 1993</span><span>350+ installaties in Nederland</span><span>24/7 service</span></span>
    <span><a href="service-onderhoud.html#storing">Storing melden</a> · <a href="tel:+31774752326">077-475 23 26</a></span>
  </div>
</div>

<header class="site">
  <div class="wrap">
    <a class="logo" href="index.html"><img src="assets/str-logo.jpg" alt="Steinbrückner logo" width="95" height="48"><span>Steinbrückner<small>Nederland · Reinigingstechniek</small></span></a>
    <nav class="main" aria-label="Hoofdmenu">
      <ul>
        ${nav(p.nav)}
      </ul>
    </nav>
    <div class="header-cta">
      <a class="tel" href="tel:+31774752326">077-475 23 26</a>
      <a class="btn btn-primary" href="contact.html" data-cro="Vaste primaire CTA in de sticky header. Eén duidelijke vervolgstap op elke pagina.">Offerte aanvragen</a>
      <button class="menu-toggle" aria-label="Menu openen" aria-expanded="false">☰</button>
    </div>
  </div>
</header>

<main>
${body}
</main>

<section class="cta-band">
  <div class="wrap">
    <div>
      <h2>Welke wasoplossing past bij uw wagenpark?</h2>
      <p style="margin:0">Binnen één werkdag reactie van een specialist. Vrijblijvend advies, ook op locatie.</p>
    </div>
    <div class="btn-row" style="margin:0">
      <a class="btn btn-primary" href="contact.html">Plan een adviesgesprek</a>
      <a class="btn btn-ghost" href="tel:+31774752326">Bel 077-475 23 26</a>
    </div>
  </div>
</section>

<footer class="site">
  <div class="wrap">
    <div class="cols">
      <div>
        <h4>Steinbrückner Nederland B.V.</h4>
        <p>Geloërveldweg 1<br>5951 DH Belfeld</p>
        <p><a href="tel:+31774752326">077-475 23 26</a><br><a href="mailto:info@steinbrueckner.nl">info@steinbrueckner.nl</a></p>
        <p>KvK <span class="ph">[INVULLEN]</span></p>
      </div>
      <div>
        <h4>Oplossingen</h4>
        <ul>
          <li><a href="dba-wasstraat.html">Wasstraat vrachtwagens</a></li>
          <li><a href="dba-wasstraat.html">Truckwash installatie</a></li>
          <li><a href="wasstraat-kopen.html">Wasstraat kopen</a></li>
          <li><a href="eba-mobiele-wasborstel.html">Mobiele truckwash</a></li>
          <li><a href="eba-mobiele-wasborstel.html">Truck wasborstel</a></li>
        </ul>
      </div>
      <div>
        <h4>Service</h4>
        <ul>
          <li><a href="service-onderhoud.html">Service &amp; onderhoud</a></li>
          <li><a href="service-onderhoud.html#storing">Storing melden</a></li>
          <li><a href="https://truckwash.shop/">Onderdelen (truckwash.shop)</a></li>
          <li><a href="https://truckwash.shop/collections/hogedruk">Hogedrukinstallaties</a></li>
          <li><a href="https://truckwash.shop/collections/ophangsysteem">Ophangsystemen</a></li>
        </ul>
      </div>
      <div>
        <h4>Bedrijf</h4>
        <ul>
          <li><a href="over-ons.html">Over ons</a></li>
          <li><a href="projecten-en-kennis.html#projecten">Projecten</a></li>
          <li><a href="projecten-en-kennis.html#nieuws">Nieuws</a></li>
          <li><a href="projecten-en-kennis.html#blogs">Kennisbank</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="legal">
      <span>© 2026 Steinbrückner Nederland B.V. · Webdesign door B. Analyzed</span>
      <span><a href="#">Privacy Policy</a> · <a href="#">Cookie Policy</a> · <a href="#">Sitemap</a> · <a href="#">Legal guarantee</a> · <a href="#">Withdraw contract</a></span>
    </div>
  </div>
</footer>

<div class="mobile-bar" data-cro="Op mobiel altijd bellen of offerte binnen duimbereik.">
  <a href="tel:+31774752326">Bellen</a>
  <a href="contact.html">Offerte aanvragen</a>
</div>

<script src="assets/main.js" defer></script>
</body>
</html>
`;
  writeFileSync(join(out, p.file), html);
  console.log('gebouwd:', p.file);
}
