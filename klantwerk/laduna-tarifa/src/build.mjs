// Statische generator voor tarifawindsurfing.es (ES, primair) en tarifawindsurfing.com (EN).
// Gebruik: node src/build.mjs            → productie-URL's → dist/es en dist/com
//          node src/build.mjs --local    → localhost:4321 (es) / 4322 (en) voor preview
//          node src/build.mjs --preview  → één map (ES op /, EN op /en/), noindex; voor Lovable-preview
import { mkdirSync, rmSync, writeFileSync, readFileSync, copyFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { business as B, ui } from './site.mjs';
import { pages, redirects } from './pages.mjs';
import { legal } from './legal.mjs';
import { images, heroImage, cardImage } from './images.mjs';
import { readdirSync } from 'node:fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const local = process.argv.includes('--local');
const preview = process.argv.includes('--preview');
const outIdx = process.argv.indexOf('--out');
const PREVIEW_OUT = join(root, outIdx > -1 ? process.argv[outIdx + 1] : 'dist');
const ORIGIN = local
  ? { es: 'http://localhost:4321', en: 'http://localhost:4322' }
  : { es: 'https://www.tarifawindsurfing.es', en: 'https://www.tarifawindsurfing.com' };
const OUT = preview ? { es: PREVIEW_OUT, en: join(PREVIEW_OUT, 'en') } : { es: join(root, 'dist', 'es'), en: join(root, 'dist', 'com') };
const LANGS = ['es', 'en'];
const today = new Date().toISOString().slice(0, 10);
const byId = Object.fromEntries(pages.map((p) => [p.id, p]));
const BIZ_ID = `${ORIGIN.es}/#business`;

// ── helpers ──
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// path = interne link, abs = productie-URL (canonical, hreflang, schema), link = taalwissel
const prodPath = (lang, id) => '/' + byId[id][lang].slug;
const path = (lang, id) => (preview ? `${lang === 'en' ? '/en' : ''}/${byId[id][lang].slug}${byId[id][lang].slug ? '/' : ''}` : prodPath(lang, id));
const abs = (lang, id) => ORIGIN[lang] + prodPath(lang, id);
const link = (lang, id) => (preview ? path(lang, id) : abs(lang, id));
const eur = (n, lang) => (lang === 'es' ? `${n} €` : `€${n}`);
const fillLinks = (html, lang) => html.replace(/\{\{(\w+)\}\}/g, (_, id) => path(lang, id));
const waLink = (text) => `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(text)}`;
const IMG_DIR = join(root, 'src/assets/img');
const imgFiles = existsSync(IMG_DIR) ? readdirSync(IMG_DIR) : [];
function picture(key, lang, { sizes = '100vw', eager = false, cls = '' } = {}) {
  const im = images[key];
  const ws = [640, 1024, 1600].filter((w) => imgFiles.includes(`${key}-${w}.webp`));
  const srcset = ws.map((w) => `/assets/img/${key}-${w}.webp ${w}w`).join(', ');
  const fallback = `/assets/img/${key}-${ws.includes(1024) ? 1024 : ws[0]}.webp`;
  return `<img class="${cls}" src="${fallback}" srcset="${srcset}" sizes="${sizes}" width="${im.w}" height="${im.h}" alt="${esc(im.alt[lang])}"${eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"'}>`;
}
const ogFor = (lang, id) => (heroImage[id] ? `${ORIGIN[lang]}/assets/img/${heroImage[id]}-og.jpg` : `${ORIGIN[lang]}/assets/og.png`);
const hash = (buf) => createHash('sha256').update(buf).digest('hex').slice(0, 10);

// ── assets (fingerprinted) ──
// object-position per foto als CSS-regel (geen inline styles i.v.m. CSP)
const css = Buffer.from(readFileSync(join(root, 'src/assets/styles.css'), 'utf8') + '\n' +
  Object.entries(images).map(([k, v]) => `img[src*="/${k}-"]{object-position:${v.pos}}`).join('\n') + '\n');
const js = readFileSync(join(root, 'src/assets/app.js'));
const ASSET = { css: `/assets/styles.${hash(css)}.css`, js: `/assets/app.${hash(js)}.js` };

// ── iconen (inline SVG, geen externe requests) ──
const icon = {
  wa: '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.2.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.3-.3-.3-.6-.4Z"/></svg>',
  phone: '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"/></svg>',
  check: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"/></svg>',
  arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 4 10.6 5.4 16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8-8-8Z"/></svg>',
};

// ── activiteit per pagina (voor WhatsApp-tekst en formulier) ──
const activityIndex = { windsurf: 0, wing: 1, kite: 2, sup: 3, rentWindsurf: 4, rentWing: 4, rentKite: 4, camp: 5, summer: 6, groups: 7 };
function activityFor(page, lang) {
  const i = activityIndex[page.id];
  return i === undefined ? null : ui[lang].form.activities[i];
}

// ── blokken ──
function priceCard(item, lang) {
  const t = ui[lang];
  const amount = item.priceText
    ? `<span class="price-amount price-text">${esc(item.priceText)}</span>`
    : `${item.from ? `<span class="price-from">${t.from}</span> ` : ''}<span class="price-amount">${eur(item.price, lang)}</span>`;
  return `<article class="price-card${item.featured ? ' is-featured' : ''}">
  ${item.badge ? `<p class="badge">${esc(item.badge)}</p>` : ''}
  <h3>${esc(item.name)}</h3>
  <p class="price-meta">${esc(item.meta)}</p>
  <p class="price">${amount}${item.unit ? ` <span class="price-unit">${esc(item.unit)}</span>` : ''}</p>
  <ul class="ticks">${item.features.map((f) => `<li>${icon.check}${esc(f)}</li>`).join('')}</ul>
  <a class="btn ${item.featured ? 'btn-primary' : 'btn-ghost'}" href="#reservar" data-pick="${esc(item.name)}">${t.book}</a>
</article>`;
}

const render = {
  prices: (b, lang) => `<section class="section" id="precios"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <div class="price-grid">${b.items.map((i) => priceCard(i, lang)).join('')}</div>
</div></section>`,
  table: (b) => `<section class="section" id="precios"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <div class="table-wrap"><table>
    <thead><tr>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody>
  </table></div>
  ${b.note ? `<p class="note">${esc(b.note)}</p>` : ''}
</div></section>`,
  includes: (b) => `<section class="section section-sand"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <ul class="ticks ticks-grid">${b.items.map((f) => `<li>${icon.check}${esc(f)}</li>`).join('')}</ul>
</div></section>`,
  features: (b) => `<section class="section"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <div class="feature-grid">${b.items.map(([h, p]) => `<div class="feature"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div>
</div></section>`,
  steps: (b) => `<section class="section section-sand"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <ol class="steps">${b.items.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ol>
</div></section>`,
  text: (b, lang) => b.img
    ? `<section class="section"><div class="wrap split">
  <div class="prose"><h2>${esc(b.title)}</h2>${fillLinks(b.html, lang)}</div>
  <figure class="split-photo">${picture(b.img, lang, { sizes: '(min-width: 900px) 520px, 100vw' })}</figure>
</div></section>`
    : `<section class="section"><div class="wrap prose">
  <h2>${esc(b.title)}</h2>
  ${fillLinks(b.html, lang)}
</div></section>`,
  gallery: (b, lang) => `<section class="section section-sand"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <div class="gallery">${b.items.map((k) => `<figure>${picture(k, lang, { sizes: '(min-width: 900px) 280px, 50vw' })}</figure>`).join('')}</div>
</div></section>`,
  cards: (b, lang) => `<section class="section" id="actividades"><div class="wrap">
  <h2>${esc(b.title)}</h2>
  <div class="card-grid">${b.items.map((c) => `<a class="card card-${c.ref}" href="${path(lang, c.ref)}">
    ${cardImage[c.ref] ? `<span class="card-art card-photo">${picture(cardImage[c.ref], lang, { sizes: '(min-width: 1100px) 270px, (min-width: 600px) 45vw, 100vw' })}</span>` : '<span class="card-art" aria-hidden="true"></span>'}
    <span class="card-body"><strong class="card-title">${esc(c.title)}</strong><span>${esc(c.text)}</span><span class="card-price">${esc(c.price)} ${icon.arrow}</span></span>
  </a>`).join('')}</div>
</div></section>`,
  faq: (b, lang) => `<section class="section section-sand" id="faq"><div class="wrap narrow">
  <h2>${ui[lang].faq}</h2>
  ${b.items.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}
</div></section>`,
  related: (b, lang) => `<section class="section"><div class="wrap">
  <h2>${ui[lang].related}</h2>
  <ul class="related">${b.items.map((id) => `<li><a href="${path(lang, id)}">${esc(byId[id][lang].h1)} ${icon.arrow}</a></li>`).join('')}</ul>
</div></section>`,
};

// ── layout-onderdelen ──
const chevron = '<svg class="chev" aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z"/></svg>';
function navItems(page, lang, mobile) {
  const cur = (id) => (id === page.id ? ' aria-current="page"' : '');
  return ui[lang].nav.map((n, i) => {
    if (!n.items) return `<li><a class="nav-link" href="${path(lang, n.id)}"${cur(n.id)}>${n.label}</a></li>`;
    const active = n.items.some((x) => x.id === page.id) || n.all?.id === page.id;
    const links = n.items.map((x) => `<li><a class="sub-link${x.img ? ' has-img' : ''}" href="${path(lang, x.id)}"${cur(x.id)}>${x.img && !mobile ? `<span class="sub-img">${picture(x.img, lang, { sizes: '96px', cls: 'sub-thumb' })}</span>` : ''}<span class="sub-text"><strong>${x.label}</strong><span>${x.desc}</span>${x.price ? `<em>${x.price}</em>` : ''}</span></a></li>`).join('');
    const all = n.all ? `<li class="sub-all"><a href="${path(lang, n.all.id)}"${cur(n.all.id)}>${n.all.label} ${icon.arrow}</a></li>` : '';
    if (mobile) return `<li class="m-group"><p class="m-label">${n.label}</p><ul>${links}${all}</ul></li>`;
    return `<li class="has-sub${active ? ' is-active' : ''}"><button type="button" class="nav-link nav-trigger" aria-expanded="false" aria-controls="sub-${i}">${n.label}${chevron}</button>
      <div class="sub${n.items.some((x) => x.img) ? ' sub-wide' : ''}" id="sub-${i}"><ul>${links}${all}</ul></div></li>`;
  }).join('');
}

function header(page, lang) {
  const t = ui[lang];
  const other = lang === 'es' ? 'en' : 'es';
  return `<a class="skip" href="#main">${t.skip}</a>
<header class="site-header"><div class="wrap header-inner">
  <a class="logo" href="${path(lang, 'home')}" title="${t.home}"><img src="/assets/logo-96.webp" srcset="/assets/logo-96.webp 1x, /assets/logo-192.webp 2x" width="56" height="54" alt="La Duna Tarifa"></a>
  <nav class="nav-desktop" aria-label="${lang === 'es' ? 'Menú principal' : 'Main menu'}"><ul class="nav-list">${navItems(page, lang, false)}</ul></nav>
  <div class="header-actions">
    <a class="lang" href="${link(other, page.id)}" hreflang="${other}" lang="${other}" title="${t.switchTitle}">${other.toUpperCase()}</a>
    <a class="btn btn-primary btn-sm" href="#reservar">${t.book}</a>
    <details class="nav-mobile"><summary aria-label="${t.menu}"><span></span></summary>
      <nav aria-label="${t.menu}"><ul class="m-list">${navItems(page, lang, true)}<li class="m-lang"><a href="${link(other, page.id)}" hreflang="${other}" lang="${other}">${t.switchLabel}</a></li></ul></nav>
    </details>
  </div>
</div></header>`;
}

function hero(page, lang, c) {
  const t = ui[lang];
  const act = activityFor(page, lang);
  const waText = `${t.form.msg}${act ? `: ${act}` : ''}`;
  const hasPrices = c.blocks.some((b) => b.t === 'prices' || b.t === 'table');
  const crumbs = page.type === 'home' ? '' : `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="${path(lang, 'home')}">${t.home}</a></li><li aria-current="page">${esc(c.h1)}</li></ol></nav>`;
  const photo = heroImage[page.id];
  return `<section class="hero hero-${page.id}${photo ? ' has-photo' : ''}">${photo ? `<div class="hero-photo">${picture(photo, lang, { eager: true })}</div>` : ''}<div class="wrap hero-inner">
  ${crumbs}
  <p class="kicker">${esc(c.kicker)}</p>
  <h1>${esc(c.h1)}</h1>
  <p class="lead">${esc(c.lead)}</p>
  <div class="cta-row">
    <a class="btn btn-wa" href="${waLink(waText)}" data-track="whatsapp" rel="noopener">${icon.wa}${t.whatsapp}</a>
    ${hasPrices ? `<a class="btn btn-light" href="#precios">${lang === 'es' ? 'Ver precios' : 'See prices'}</a>` : `<a class="btn btn-light" href="#reservar">${t.book}</a>`}
  </div>
  <ul class="trust">${t.trust.map((x) => `<li>${icon.check}${esc(x)}</li>`).join('')}</ul>
</div><div class="hero-art" aria-hidden="true">${photo ? '' : '<span class="sun"></span><span class="sail"></span>'}<span class="wave w1"></span><span class="wave w2"></span><span class="dune"></span></div></section>`;
}

function bookingForm(page, lang) {
  const f = ui[lang].form;
  const act = activityFor(page, lang);
  return `<section class="section section-ocean" id="reservar"><div class="wrap booking">
  <div class="booking-copy">
    <h2>${f.title}</h2>
    <p>${f.intro}</p>
    <p class="booking-alt">${f.alt} <a href="tel:${B.phone}" data-track="phone">${B.phoneDisplay}</a></p>
    <p class="booking-note">${f.note}</p>
  </div>
  <form class="booking-form" data-wa="${B.whatsapp}" data-msg="${esc(f.msg)}" data-lang="${lang}" novalidate>
    <label>${f.activity}<select name="activity" required>${f.activities.map((a) => `<option${a === act ? ' selected' : ''}>${esc(a)}</option>`).join('')}</select></label>
    <div class="form-row">
      <label>${f.date}<input type="date" name="date" min="${today}"></label>
      <label>${f.people}<input type="number" name="people" min="1" max="40" value="1" inputmode="numeric"></label>
    </div>
    <label>${f.level}<select name="level">${f.levels.map((l) => `<option>${esc(l)}</option>`).join('')}</select></label>
    <input type="hidden" name="pick">
    <button class="btn btn-wa btn-block" type="submit">${icon.wa}${f.submit}</button>
  </form>
</div></section>`;
}

function contactBlock(lang) {
  const es = lang === 'es';
  return `<section class="section"><div class="wrap contact-grid">
  <div class="contact-card">
    <h2>${es ? 'Escuela' : 'School'}</h2>
    <address>La Duna Tarifa<br>${B.street}<br>${B.postalCode} ${B.locality} (${B.region})${es ? '' : ', Spain'}</address>
    <p><a href="tel:${B.phone}" data-track="phone">${icon.phone} ${B.phoneDisplay}</a></p>
    <p><a href="${waLink(ui[lang].form.msg)}" data-track="whatsapp" rel="noopener">${icon.wa} WhatsApp</a></p>
    <p><a class="btn btn-ghost" href="${B.maps}" rel="noopener">${es ? 'Abrir en Google Maps' : 'Open in Google Maps'}</a></p>
  </div>
  <div class="contact-card">
    <h2>${es ? 'Horario' : 'Opening hours'}</h2>
    <p>${es ? `De ${B.season.es}` : `${B.season.en}`}<br>${es ? 'Todos los días' : 'Every day'} ${B.hours.opens}–${B.hours.closes}</p>
    <h2>${es ? 'Cómo llegar' : 'How to get here'}</h2>
    <p>${es
      ? 'Desde Tarifa, toma la N-340 dirección Cádiz. En el km 74 gira hacia la playa de Valdevaqueros. Unos 10 minutos en coche; hay parking junto a la playa.'
      : 'From Tarifa, take the N-340 towards Cádiz. At km 74 turn off to Valdevaqueros beach. About 10 minutes by car; parking next to the beach.'}</p>
  </div>
</div></section>`;
}

function footer(lang) {
  const t = ui[lang];
  const f = t.footer;
  const col = (title, ids) => `<div><h2>${title}</h2><ul>${ids.map((id) => `<li><a href="${path(lang, id)}">${esc(byId[id][lang].h1)}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-footer"><div class="wrap footer-grid">
  <div><p class="logo logo-footer"><img src="/assets/logo-192.webp" width="96" height="93" alt="La Duna Tarifa" loading="lazy"></p><p>${f.about}</p>
    <p><a href="tel:${B.phone}">${B.phoneDisplay}</a> · <a href="${B.instagram}" rel="noopener">Instagram</a> · <a href="${B.facebook}" rel="noopener">Facebook</a></p></div>
  ${col(f.lessons, ['windsurf', 'wing', 'kite', 'sup', 'adaptive'])}
  ${col(f.rental, ['rentWindsurf', 'rentWing', 'rentKite'])}
  ${col(f.more, ['camp', 'summer', 'stay', 'groups', 'contact'])}
</div><div class="wrap footer-legal">
  <p>© ${new Date().getFullYear()} La Duna Tarifa</p>
  <ul>${['legal', 'privacy', 'cookies'].map((id) => `<li><a href="${path(lang, id)}">${esc(byId[id][lang].h1)}</a></li>`).join('')}<li><button type="button" class="linklike" data-cookie-settings>${f.cookiesBtn}</button></li></ul>
</div></footer>
<div class="sticky-cta"><a class="btn btn-wa" href="${waLink(t.form.msg)}" data-track="whatsapp" rel="noopener">${icon.wa}${t.whatsapp}</a><a class="btn btn-primary" href="#reservar">${t.stickyBook}</a></div>
<div class="cookie" role="dialog" aria-live="polite" aria-label="Cookies" hidden>
  <p>${t.cookie.text} <a href="${path(lang, 'cookies')}">${t.cookie.link}</a>.</p>
  <div><button type="button" class="btn btn-ghost btn-sm" data-consent="denied">${t.cookie.reject}</button><button type="button" class="btn btn-ghost btn-sm" data-consent="granted">${t.cookie.accept}</button></div>
</div>`;
}

// ── structured data ──
function businessNode() {
  return {
    '@type': ['SportsActivityLocation', 'LocalBusiness'],
    '@id': BIZ_ID,
    name: B.name,
    alternateName: B.alternateName,
    url: ORIGIN.es + '/',
    telephone: B.phone,
    ...(B.email ? { email: B.email } : {}),
    image: [`${ORIGIN.es}/assets/img/escuela-wing-og.jpg`, `${ORIGIN.es}/assets/img/laguna-aerea-og.jpg`, `${ORIGIN.es}/assets/img/windsurf-clase-instructora-og.jpg`],
    logo: `${ORIGIN.es}/assets/logo.png`,
    priceRange: '€€',
    address: { '@type': 'PostalAddress', streetAddress: B.street, postalCode: B.postalCode, addressLocality: B.locality, addressRegion: B.region, addressCountry: B.country },
    geo: { '@type': 'GeoCoordinates', latitude: B.geo.lat, longitude: B.geo.lng },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: B.hours.opens, closes: B.hours.closes }],
    knowsLanguage: ['es', 'en'],
    sameAs: [B.instagram, B.facebook, ORIGIN.en + '/'],
  };
}

function schema(page, lang, c) {
  const url = abs(lang, page.id);
  const graph = [
    businessNode(),
    { '@type': 'WebSite', '@id': `${ORIGIN[lang]}/#website`, url: ORIGIN[lang] + '/', name: 'La Duna Tarifa', inLanguage: ui[lang].lang, publisher: { '@id': BIZ_ID } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: c.title, description: c.description, inLanguage: ui[lang].lang, isPartOf: { '@id': `${ORIGIN[lang]}/#website` }, about: { '@id': BIZ_ID }, dateModified: today },
  ];
  if (page.type !== 'home') {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui[lang].home, item: ORIGIN[lang] + '/' },
      { '@type': 'ListItem', position: 2, name: c.h1, item: url },
    ] });
  }
  if (page.type === 'service') {
    const offers = (c.blocks || []).filter((b) => b.t === 'prices').flatMap((b) => b.items).filter((i) => i.price)
      .map((i) => ({ '@type': 'Offer', name: i.name, description: i.meta, price: i.price, priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url }));
    graph.push({ '@type': 'Service', '@id': `${url}#service`, name: c.h1, description: c.summary || c.description, provider: { '@id': BIZ_ID },
      areaServed: { '@type': 'Place', name: 'Tarifa, Cádiz' }, url, ...(offers.length ? { offers } : {}) });
  }
  const faq = (c.blocks || []).find((b) => b.t === 'faq');
  if (faq) graph.push({ '@type': 'FAQPage', mainEntity: faq.items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
}

// ── pagina ──
function head(page, lang, c, { noindex = false } = {}) {
  const url = page ? abs(lang, page.id) : ORIGIN[lang] + '/404';
  const alt = page ? LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(l, page.id)}">`).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${abs('es', page.id)}">` : '';
  return `<!doctype html>
<html lang="${ui[lang].lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.description)}">
${noindex || preview ? `<meta name="robots" content="noindex, nofollow">${preview && page ? `\n<link rel="canonical" href="${url}">` : ''}` : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">\n<link rel="canonical" href="${url}">\n${alt}`}
<meta name="theme-color" content="#0b3a53">
<link rel="icon" href="/assets/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/jost-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/figtree-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
${page && heroImage[page.id] ? `<link rel="preload" as="image" type="image/webp" imagesrcset="${[640, 1024, 1600].filter((w) => imgFiles.includes(`${heroImage[page.id]}-${w}.webp`)).map((w) => `/assets/img/${heroImage[page.id]}-${w}.webp ${w}w`).join(', ')}" imagesizes="100vw" fetchpriority="high">` : ''}
<link rel="stylesheet" href="${ASSET.css}">
<script src="${ASSET.js}" defer></script>
<meta property="og:type" content="website">
<meta property="og:site_name" content="La Duna Tarifa">
<meta property="og:locale" content="${lang === 'es' ? 'es_ES' : 'en_GB'}">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${page ? ogFor(lang, page.id) : ORIGIN[lang] + '/assets/og.png'}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
${page ? schema(page, lang, c) : ''}
</head>`;
}

function renderPage(page, lang) {
  const c = page[lang];
  const t = ui[lang];
  let main;
  if (page.type === 'legal') {
    main = `<div class="legal-banner">${picture('laguna-aerea', lang, { eager: true })}</div><section class="section"><div class="wrap narrow prose"><h1>${esc(c.h1)}</h1>${legal[lang][c.html]}<p class="note">${lang === 'es' ? 'Última actualización' : 'Last updated'}: ${today}</p></div></section>`;
  } else {
    const blocks = c.blocks.map((b) => render[b.t](b, lang)).join('\n');
    const summary = c.summary ? `<section class="summary"><div class="wrap narrow"><p class="summary-box"><strong>${t.summary}:</strong> ${esc(c.summary)}</p></div></section>` : '';
    main = hero(page, lang, c) + summary + blocks + (page.type === 'contact' ? contactBlock(lang) : '') + bookingForm(page, lang);
  }
  return `${head(page, lang, c)}
<body data-page="${page.id}">
${header(page, lang)}
<main id="main">
${main}
</main>
${footer(lang)}
</body>
</html>
`;
}

function render404(lang) {
  const es = lang === 'es';
  const c = { title: es ? 'Página no encontrada | La Duna Tarifa' : 'Page not found | La Duna Tarifa', description: '' };
  const fake = { id: 'home', type: 'legal' };
  return `${head(null, lang, c, { noindex: true })}
<body>${header(fake, lang)}
<main id="main"><div class="legal-banner">${picture('salto-bandera', lang, { eager: true })}</div><section class="section"><div class="wrap narrow prose">
<h1>${es ? 'Esta página se ha ido con el viento' : 'This page blew away'}</h1>
<p>${es ? 'No encontramos lo que buscas. Prueba con:' : 'We could not find what you were looking for. Try:'}</p>
<ul class="related">${['windsurf', 'wing', 'kite', 'rentWindsurf', 'contact'].map((id) => `<li><a href="${path(lang, id)}">${esc(byId[id][lang].h1)} ${icon.arrow}</a></li>`).join('')}</ul>
</div></section></main>${footer(lang)}</body></html>
`;
}

// ── extra bestanden ──
function sitemap(lang) {
  const urls = pages.map((p) => `<url><loc>${abs(lang, p.id)}</loc><lastmod>${today}</lastmod>${LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(l, p.id)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${abs('es', p.id)}"/></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
}

const robots = (lang) => `# La Duna Tarifa\nUser-agent: *\nAllow: /\n\n# AI-zoekmachines expliciet toegestaan (citaties in ChatGPT, Perplexity, Gemini, Copilot)\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${ORIGIN[lang]}/sitemap.xml\n`;

function llms(lang) {
  const es = lang === 'es';
  const list = pages.filter((p) => p.type === 'service' || p.type === 'home' || p.type === 'contact')
    .map((p) => `- [${p[lang].h1}](${abs(lang, p.id)}): ${p[lang].description}`).join('\n');
  return `# La Duna Tarifa\n\n> ${es ? ui.es.footer.about : ui.en.footer.about} ${es ? 'Teléfono y WhatsApp' : 'Phone and WhatsApp'}: ${B.phoneDisplay}. ${B.street}, ${B.postalCode} ${B.locality}.\n\n## ${es ? 'Páginas' : 'Pages'}\n\n${list}\n\n## ${es ? 'Otra versión' : 'Other language'}\n\n- ${es ? 'English' : 'Español'}: ${ORIGIN[es ? 'en' : 'es']}/\n`;
}

const headers = `/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com; img-src 'self' data: https://*.google-analytics.com https://www.googletagmanager.com; style-src 'self'; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

function redirectsFile(lang) {
  const lines = Object.entries(redirects[lang]).map(([from, id]) => `${from}  ${path(lang, id)}  301`);
  return `# Oude URL's → nieuwe URL's (Cloudflare Pages / Netlify formaat)\n${lines.join('\n')}\n`;
}

// ── build ──
rmSync(preview ? PREVIEW_OUT : join(root, 'dist'), { recursive: true, force: true });
for (const lang of LANGS) {
  const out = OUT[lang];
  mkdirSync(join(out, 'assets'), { recursive: true });
  for (const page of pages) {
    const slug = page[lang].slug;
    const file = !slug ? 'index.html' : preview ? join(slug, 'index.html') : `${slug}.html`;
    mkdirSync(dirname(join(out, file)), { recursive: true });
    writeFileSync(join(out, file), renderPage(page, lang));
  }
  if (preview) {
    // Preview: één map, gedeelde assets in /assets, niet indexeren.
    if (lang === 'en') { rmSync(join(out, 'assets'), { recursive: true, force: true }); continue; }
    writeFileSync(join(out, '404.html'), render404(lang));
    writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  } else {
  writeFileSync(join(out, '404.html'), render404(lang));
  writeFileSync(join(out, 'sitemap.xml'), sitemap(lang));
  writeFileSync(join(out, 'robots.txt'), robots(lang));
  writeFileSync(join(out, 'llms.txt'), llms(lang));
  writeFileSync(join(out, '_headers'), headers);
  writeFileSync(join(out, '_redirects'), redirectsFile(lang));
  }
  writeFileSync(join(out, ASSET.css.slice(1)), css);
  writeFileSync(join(out, ASSET.js.slice(1)), js.toString().replace('__GA_ID__', B.gaId));
  mkdirSync(join(out, 'assets/img'), { recursive: true });
  for (const f of imgFiles) copyFileSync(join(IMG_DIR, f), join(out, 'assets/img', f));
  mkdirSync(join(out, 'assets/fonts'), { recursive: true });
  for (const f of readdirSync(join(root, 'src/assets/fonts'))) copyFileSync(join(root, 'src/assets/fonts', f), join(out, 'assets/fonts', f));
  for (const f of ['favicon.png', 'apple-touch-icon.png', 'og.png', 'logo.png', 'logo-96.webp', 'logo-192.webp']) {
    const src = join(root, 'src/assets', f);
    if (existsSync(src)) copyFileSync(src, join(out, 'assets', f));
  }
}
console.log(`✓ ${pages.length * 2} pagina's gebouwd (${preview ? 'preview → ' + PREVIEW_OUT : local ? 'lokaal → dist/es, dist/com' : 'productie → dist/es, dist/com'})`);
