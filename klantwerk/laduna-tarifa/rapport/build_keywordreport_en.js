// Keyword & ranking report La Duna Tarifa – English client version (windsurf + wing foil, ES + EN)
// Sources: SE Ranking (databases es, uk, us, de, nl, fr, it) + live Google SERP from Tarifa (9 Oct 2026).
const L = require('./ba_lib.js');
const serp = Object.fromEntries(JSON.parse(L.fs.readFileSync('tarifa_serp.json', 'utf8')).map((r) => [r.query + '|' + r.lang, r]));

const DATE = '9 October 2026';
const SUBJECT = 'La Duna Tarifa';

// [zoekwoord, taal-SERP voor Tarifa (null = niet gemeten), volES, volUK, volUS, Spanje .es, Spanje .com, Wereld .es, Wereld .com]
// Wereld = beste positie in UK, US, DE, NL, FR of IT (land tussen haakjes).
const ES_WIND = [
  ['windsurf tarifa', 'es', 170, 10, 10, 4, 62, '11 (IT/NL)', '4 (US/NL)'],
  ['tarifa windsurf', 'es', 70, 10, null, 3, 35, '23 (UK/FR)', '4 (NL)'],
  ['escuela windsurf tarifa', 'es', 70, null, null, 2, null, null, null],
  ['curso windsurf tarifa', 'es', 30, 10, null, 3, 94, '3 (UK)', '34 (UK)'],
  ['clases windsurf tarifa', 'es', 20, null, null, 3, null, null, null],
  ['alquiler windsurf tarifa', 'es', 20, null, null, null, 70, null, null],
  ['windsurf en tarifa', 'es', 20, null, 10, 3, 68, '1 (US)', '7 (US)'],
  ['campamento windsurf tarifa', 'es', 10, null, null, 1, null, null, null],
  ['curso windsurf', 'es', 90, null, 10, null, null, '36 (US)', null],
  ['clases de windsurf', 'es', 70, null, 10, null, null, '10 (FR)', null],
  ['escuela windsurf', null, 50, null, null, 54, null, '5 (US)', null],
  ['windsurf camp', null, 20, 20, 50, 1, null, null, null],
  ['windsurf', null, 18100, null, null, null, null, null, null],
];
const ES_WING = [
  ['wingfoil tarifa', 'es', 110, null, 10, 3, null, null, '37 (US)'],
  ['wing foil tarifa', 'es', 110, null, 10, 4, null, null, '18 (IT)'],
  ['curso wingfoil tarifa', 'es', 40, null, null, 5, 77, null, null],
  ['curso wing foil tarifa', 'es', 40, null, null, 5, 69, null, null],
  ['alquiler wing foil tarifa', 'es', 10, null, null, 2, 58, null, null],
  ['curso wingfoil', 'es', 90, null, null, null, null, null, null],
  ['curso wing foil', null, 90, null, null, null, null, null, null],
  ['wingfoil', null, 6600, 1300, 4400, 19, null, null, null],
  ['wing foil', null, 8000, 3100, 8100, 34, null, null, null],
];
const EN_WIND = [
  ['windsurfing tarifa', 'en', 50, 40, 10, 3, 44, '20 (NL)', '4 (NL)'],
  ['tarifa windsurfing', null, 50, 40, 10, 3, 39, '28 (NL)', '1 (US/NL)'],
  ['windsurf lessons tarifa', 'en', null, null, null, null, null, '18 (NL)', '1 (NL)'],
  ['windsurf school tarifa', 'en', 10, 10, null, 6, 3, '21 (IT)', '2 (UK)'],
  ['windsurf rental tarifa', 'en', 10, null, null, null, 2, '21 (IT)', '5 (US/IT)'],
  ['windsurfing in tarifa', 'en', null, 10, 10, null, 11, '57 (UK)', '4 (US)'],
  ['learn to windsurf tarifa', 'en', null, null, null, null, null, null, null],
  ['windsurf camp tarifa', 'en', null, null, null, null, null, null, null],
  ['windsurfing lessons', 'en', null, 170, 80, null, 8, null, '78 (FR)'],
  ['windsurfing holidays', null, null, 110, 10, null, null, null, null],
  ['tarifa windsurfing holidays', null, null, 10, null, null, null, null, '7 (UK)'],
];
const EN_WING = [
  ['wing foil tarifa', 'en', 110, null, 10, 4, null, null, '18 (IT)'],
  ['wing foil lessons tarifa', 'en', null, null, null, null, null, null, null],
  ['wingfoil lessons tarifa', 'en', null, null, null, null, null, null, null],
  ['wing foil school tarifa', 'en', null, null, null, null, null, null, null],
  ['wing foil rental tarifa', 'en', null, null, null, null, null, null, null],
  ['wing foiling tarifa', 'en', null, null, null, null, null, null, null],
  ['wing foil lessons', 'en', null, null, 10, null, null, null, null],
  ['wing foiling lessons', null, null, 140, 10, null, null, null, null],
  ['learn to wing foil', 'en', null, null, 40, null, null, null, null],
  ['wing foiling holidays', null, null, 70, null, null, null, null, null],
  ['wing foiling', null, null, 880, 3600, null, null, null, null],
];

// ---------- English rendering (client version) ----------
const ES_KITE = [
  ['kitesurf tarifa', 'es', 590, 10, 20, 18, null, null, null],
  ['kite tarifa', 'es', 260, 140, null, null, null, null, null],
  ['curso kitesurf tarifa', 'es', 260, null, null, 8, null, null, null],
  ['cursos kitesurf tarifa', null, 260, null, null, 9, null, '12 (UK)', null],
  ['curso kite tarifa', null, 260, null, null, 9, null, null, null],
  ['escuela kitesurf tarifa', 'es', 210, null, null, 7, null, null, null],
  ['clases kitesurf tarifa', 'es', 50, null, null, null, null, null, null],
  ['alquiler kitesurf tarifa', 'es', 30, null, null, null, null, null, null],
  ['kitesurf camp tarifa', 'es', 170, 10, 10, 27, null, null, null],
  ['kitesurf valdevaqueros', 'es', 30, null, null, 9, null, null, null],
  ['clases kitesurf', null, 260, null, null, null, null, null, null],
  ['curso kitesurf', null, 140, null, null, null, null, null, null],
  ['kitesurf', null, 14800, 4400, 14800, null, null, null, null],
];
const EN_KITE = [
  ['kitesurfing tarifa', 'en', 260, 140, 170, null, null, null, null],
  ['kitesurf school tarifa', 'en', 260, 20, 30, 14, null, null, null],
  ['kitesurf lessons tarifa', 'en', null, 10, 90, null, null, null, '37 (DE)'],
  ['kitesurfing lessons tarifa', null, null, 10, 90, null, null, null, '65 (DE)'],
  ['kite school tarifa', 'en', null, 10, 30, null, null, null, null],
  ['kite rental tarifa', 'en', null, 10, 10, null, null, null, '17 (UK)'],
  ['kitesurf camp tarifa', 'en', 170, 10, 10, null, null, null, null],
  ['kitesurfing lessons', 'en', null, 590, 40, null, null, null, null],
  ['learn to kitesurf', 'en', null, 110, 210, null, null, null, null],
  ['kitesurfing holidays', null, null, 110, 20, null, null, null, '1 (US)'],
];

const posNum = (v) => (v == null ? null : parseInt(String(v), 10));
function posCell(v, measured = true) {
  if (!measured) return { text: 'n/m', color: L.GRAY, align: L.AlignmentType.CENTER };
  const n = posNum(v);
  if (n == null) return { text: '–', color: L.GRAY, align: L.AlignmentType.CENTER };
  const fill = n <= 3 ? L.GREEN : n <= 10 ? L.AMBER : L.RED;
  return { text: String(v), fill, color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER };
}
const vol = (v) => ({ text: v == null ? '–' : v >= 10000 ? (v / 1000).toLocaleString('en-GB', { maximumFractionDigits: 1 }) + 'k' : v.toLocaleString('en-GB'), align: L.AlignmentType.CENTER });
function rowsFor(list) {
  return list.map(([kw, lang, vEs, vUk, vUs, sEs, sCom, wEs, wCom]) => {
    const t = lang ? serp[kw + '|' + lang] : null;
    return [kw, vol(vEs), vol(vUk), vol(vUs), posCell(t?.es_pos, !!t), posCell(t?.com_pos, !!t), posCell(sEs), posCell(sCom), posCell(wEs), posCell(wCom)];
  });
}
const W = [2160, 620, 620, 620, 830, 830, 830, 830, 1010, 1010];
const H = ['Keyword', 'Vol ES', 'Vol UK', 'Vol US', 'Tarifa .es', 'Tarifa .com', 'Spain .es', 'Spain .com', 'World .es', 'World .com'];
const kwTable = (list) => L.table(H, W, rowsFor(list), { size: 15, boldFirst: true, centerFrom: 1 });

// Mobiele posities vanuit Tarifa (SE Ranking-project, Google Mobile, 10 okt 2026): mobile_serp.json = [{query, lang, es_pos, com_pos}]
const mobile = L.fs.existsSync('mobile_serp.json') ? Object.fromEntries(JSON.parse(L.fs.readFileSync('mobile_serp.json', 'utf8')).map((r) => [r.query + '|' + r.lang, r])) : {};
function mobileRows() {
  return Object.values(serp).map((d) => {
    const m = mobile[d.query + '|' + d.lang];
    return [d.query + (d.lang === 'en' ? ' (EN)' : ''), posCell(d.es_pos), posCell(m?.es_pos, !!m), posCell(d.com_pos), posCell(m?.com_pos, !!m)];
  }).filter((r) => r.slice(1).some((c) => c.text !== '–' && c.text !== 'n/m' && c.text !== 'n.g.'));
}
const mobStats = (() => {
  let better = 0, worse = 0, same = 0;
  Object.values(serp).forEach((d) => {
    const m = mobile[d.query + '|' + d.lang]; if (!m) return;
    [['es_pos', 'es_pos'], ['com_pos', 'com_pos']].forEach(([a]) => {
      const x = d[a], y = m[a]; if (x == null && y == null) return;
      const xx = x ?? 101, yy = y ?? 101; if (Math.min(xx, yy) > 10) return;
      if (yy < xx) better++; else if (yy > xx) worse++; else same++;
    });
  });
  return { better, worse, same, n: Object.keys(mobile).length };
})();

const all = Object.values(serp);
const top3 = all.filter((r) => [r.es_pos, r.com_pos].some((p) => p && p <= 3)).length;
const top10 = all.filter((r) => [r.es_pos, r.com_pos].some((p) => p && p <= 10)).length;
const none = all.filter((r) => !r.es_pos && !r.com_pos).length;
const comp = {};
all.forEach((r) => r.top3.forEach((d) => { d = d.replace(/^www\./, ''); comp[d] = (comp[d] || 0) + 1; }));
const compRows = Object.entries(comp).sort((a, b) => b[1] - a[1]).slice(0, 10)
  .map(([d, n]) => [d, { text: String(n), align: L.AlignmentType.CENTER }, d.startsWith('tarifawindsurfing') ? 'La Duna (your site)' : '']);

const coverChildren = L.cover({
  subject: SUBJECT,
  docType: 'Keyword & Ranking Report',
  variant: 'W I N D S U R F  ·  W I N G   F O I L  ·  K I T E',
  cards: [
    ['TOP 3 IN TARIFA', top3, `of ${all.length} keywords`, L.GREEN],
    ['TOP 10 IN TARIFA', top10, `of ${all.length} keywords`, L.AMBER],
    ['NOT FOUND', none, 'in the top 100', L.RED],
  ],
  dateLabel: 'REPORT DATE ' + DATE.toUpperCase(),
});

const c = (t, fill) => ({ text: t, fill, color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER });
const legend = L.table(['Colour', 'Meaning'], [2200, 7160], [
  [c('1–3', L.GREEN), 'Top position: visible without scrolling, highest chance of a click'],
  [c('4–10', L.AMBER), 'Page 1, but below the top 3: this is where the quickest gains are'],
  [c('11+', L.RED), 'Page 2 or further: hardly any clicks'],
  [{ text: '–', align: L.AlignmentType.CENTER }, 'Not found in the top 100 (for volumes: no search volume measured)'],
  [{ text: 'n/m', align: L.AlignmentType.CENTER }, 'Not measured from Tarifa (generic term)'],
]);

const PRIOS = [
  ['Critical', 'Wing foil: in Tarifa .es ranks 2–6 and .com is missing for "wing foil tarifa" (English). surfcentertarifa and wingstarifa rank above you', 'Wing foil', 'Medium', 'High'],
  ['Critical', 'Kitesurf: "kitesurf tarifa" (590/month) and five course/school terms (210–260 each) do not show La Duna in Tarifa; nationally positions 7–27. Build a complete kitesurf course page (ES + EN)', 'Kitesurf', 'Medium', 'High'],
  ['High', '.es ranks for English searches (windsurfing tarifa 4, wing foil tarifa 5, windsurf camp tarifa 1) where .com should rank: the two domains compete with each other', 'Domains', 'Medium', 'High'],
  ['High', 'High-volume generic terms ("windsurf" 18,100, "wing foil" 8,000, "wingfoil" 6,600 in Spain) do not reach the top 10; only a blog article ranks, at 19 and 34', 'Content', 'High', 'High'],
  ['High', '"alquiler windsurf tarifa": .es does not appear in the Spanish database and ranks 4 in Tarifa. Strengthen the rental page (price table, internal links)', 'Windsurf', 'Low', 'Medium'],
  ['Medium', 'English holiday keywords ("windsurfing holidays" 110 UK, "wing foiling holidays" 70 UK, "wing foiling lessons" 140 UK) have no landing page yet', 'EN content', 'Medium', 'Medium'],
  ['Medium', 'General Spanish course keywords ("curso windsurf" 90, "curso wingfoil" 90): not visible; schools in Barcelona and Mallorca win', 'Content', 'Medium', 'Medium'],
  ['Quick win', 'Move pages ranking 4–6 in Tarifa into the top 3 with a better title, H1 and a price in the search snippet ("curso wingfoil tarifa" 4, "wing foil tarifa" 5, "alquiler wing foil tarifa" 6)', 'On-page', 'Low', 'High'],
  ['Quick win', 'Google Business Profile: almost every Tarifa search shows a map with local businesses. Update reviews and the categories wing foil / windsurf school', 'Local', 'Low', 'High'],
];
const PRIO_FILL = { Critical: L.RED, High: L.ROOD_LICHT, Medium: L.AMBER, 'Quick win': L.GREEN };
const prioTable = L.table(['Priority', 'Finding and action', 'Theme', 'Effort', 'Impact'], [1300, 4560, 1200, 1100, 1200],
  PRIOS.map((p) => [c(p[0], PRIO_FILL[p[0]]), p[1], { text: p[2], align: L.AlignmentType.CENTER }, { text: p[3], align: L.AlignmentType.CENTER }, { text: p[4], align: L.AlignmentType.CENTER }]), { size: 18 });

const bodyChildren = [
  L.h1('Summary'),
  L.box([
    `In Tarifa itself, La Duna is strong on windsurfing: tarifawindsurfing.es is in the top 4 for all eight Spanish windsurf keywords that include "tarifa", number 1 for "windsurf en tarifa" and number 2 for "windsurf tarifa" and "escuela windsurf tarifa". Of the ${all.length} keywords we checked live from Tarifa, La Duna is in the top 3 for ${top3} and on page 1 for ${top10}.`,
    'Wing foil is the weak spot. Its search volume is comparable to windsurfing ("wingfoil tarifa" and "wing foil tarifa" each 110 searches a month in Spain, against 170 for "windsurf tarifa"), but La Duna ranks 2 to 6, behind surfcentertarifa.com, wingstarifa.com and the Ozu schools. In English, .com is missing for "wing foil tarifa" and "wing foiling tarifa".',
    'Kitesurfing is the biggest untapped market. "kitesurf tarifa" alone has 590 searches a month in Spain (more than windsurf and wing foil combined for the same pattern), but La Duna does not appear in the Tarifa top 100 for it. Only "alquiler kitesurf tarifa" (5) and "kitesurf valdevaqueros" (6) show the site on page 1.',
    'Outside Spain, English-speaking visitors mainly find you through tarifawindsurfing.com (number 1 in the US and the Netherlands for "tarifa windsurfing", number 2 in the UK for "windsurf school tarifa"). At the same time .es appears for English searches, sometimes above .com. This supports our earlier recommendation: one main domain with a linked English version, so the two domains stop competing with each other.',
  ]),
  L.spacer(),
  L.h2('How to read the tables'),
  L.body('For each keyword you see the monthly search volume (Spain, United Kingdom, United States) and the position of both sites at three levels:'),
  L.bullet('Tarifa: the live Google result as seen from Tarifa (desktop, 9 October 2026), in the language of the keyword. This is what a visitor on holiday in Tarifa sees.'),
  L.bullet('Spain: position in the Spanish SE Ranking database (national, not personalised).'),
  L.bullet('World: best position in the UK, US, Germany, the Netherlands, France or Italy; the country is shown in brackets.'),
  legend,

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Windsurf — Spanish keywords'),
  L.body('What this table shows: how Spanish-speaking people search for windsurfing, and where your two websites appear. Read each row from left to right. The first numbers tell you how many people search for it every month; the coloured cells tell you on which position Google shows your site. Green means people see you straight away, orange means you are on page 1 but below the competition, red means almost nobody finds you.'),
  kwTable(ES_WIND),
  L.spacer(),
  L.body('Strong in Tarifa and nationally on every "tarifa" combination. The big generic terms ("windsurf", "curso windsurf", "clases de windsurf") go to schools elsewhere in Spain; the current site is not set up for them. "alquiler windsurf tarifa" is the only Tarifa term where .es has no national ranking.'),

  L.h1('Wing foil — Spanish keywords'),
  L.body('What this table shows: the same overview for wing foil. Look at the first two rows: "wingfoil tarifa" and "wing foil tarifa" are searched as often as the main windsurf terms, but your positions are orange instead of green. The last two rows show the very large general terms ("wingfoil", "wing foil") where only a blog article of yours appears, on page 2 and 4.'),
  kwTable(ES_WING),
  L.spacer(),
  L.body('Positions are lower than for windsurfing. In Tarifa .es ranks from 2 ("wingfoil tarifa") to 6 ("alquiler wing foil tarifa"). For the broad terms "wingfoil" and "wing foil" (together 14,600 searches a month in Spain) only the blog article ranks, at 19 and 34.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Kitesurf — Spanish keywords'),
  L.body('What this table shows: kitesurfing has by far the most searches of the three sports ("kitesurf tarifa" 590 a month, five other course and school terms with 210–260 each). The Tarifa columns are almost all grey: your site is not visible for these searches in Tarifa. Nationally (Spain columns) it ranks 7–27, mostly orange. Only "alquiler kitesurf tarifa" (5) and "kitesurf valdevaqueros" (6) reach page 1 in Tarifa.'),
  kwTable(ES_KITE),
  L.spacer(),
  L.body('Tarifa is Europe\u2019s kitesurf capital and the competition is strong (3Sixty, Kite Obsession, Ozu, KTS). The current kitesurf pages are short and the homepage takes most rankings. A full kitesurf course page with prices, IKO certification, reviews and FAQs can win a share of these 2,000+ monthly searches.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Windsurf — English keywords'),
  L.body('What this table shows: how English-speaking visitors (mainly from the UK, the US and northern Europe) search for windsurfing in Tarifa. Here the .com columns matter most, because .com is your English website. Green cells in "World .com" mean that people abroad find you before they travel.'),
  kwTable(EN_WIND),
  L.spacer(),
  L.body('In Tarifa, .com is strong for lessons, school and rental (positions 1–2). For "windsurfing tarifa" it is .es that ranks 4 in Tarifa, not .com, and "windsurf camp tarifa" goes to .es (1). Internationally .com is the strongest: number 1 in the US and the Netherlands for "tarifa windsurfing".'),

  L.h1('Wing foil — English keywords'),
  L.body('What this table shows: the English wing foil searches. Most rows are grey: these searches exist (for example "wing foiling lessons", 140 a month in the UK), but your English site does not appear for them yet.'),
  kwTable(EN_WING),
  L.spacer(),
  L.body('English wing foil keywords are the biggest gap. In Tarifa .com ranks 2 ("wingfoil lessons tarifa") and 4 ("wing foil lessons tarifa"), but is missing for "wing foil tarifa" and "wing foiling tarifa". In the UK and US people search for "wing foiling lessons" (140 UK) and "learn to wing foil" (40 US), with no visibility for La Duna.'),

  L.h1('Kitesurf — English keywords'),
  L.body('What this table shows: English kitesurf searches. "kitesurfing tarifa" (260 in Spain, 140 UK, 170 US) and "kitesurfing lessons" (590 UK) have real volume, but neither of your sites appears in Tarifa. One bright spot: tarifawindsurfing.com ranks number 1 in the US for "kitesurfing holidays".'),
  kwTable(EN_KITE),
  L.spacer(),
  L.body('In Tarifa the English kitesurf results are taken by specialised kite schools (Freeride Tarifa, Addict Kite School, 3Sixty, Tarifa Max). A dedicated English kitesurf page on the new site is needed to compete.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Desktop versus mobile in Tarifa'),
  L.body(`What this table shows: the same searches from Tarifa, once on a computer (desktop) and once on a smartphone (mobile). Most of your visitors use a phone (71% of clicks in Search Console), so the mobile column is the one that matters most. Only keywords where at least one of your sites appears are listed. Looking only at positions on page 1 (top 10), mobile was better than desktop ${mobStats.better} times, worse ${mobStats.worse} times and the same ${mobStats.same} times.`),
  L.table(['Keyword', 'Desktop .es', 'Mobile .es', 'Desktop .com', 'Mobile .com'], [3760, 1400, 1400, 1400, 1400], mobileRows(), { size: 16, boldFirst: true, centerFrom: 1 }),
  L.spacer(),
  L.body('On mobile, Google usually shows a map with local schools and more ads above the first organic result, so even a position 3 is often below the first screen. A complete Google Business Profile with many reviews is therefore just as important as the website itself.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Competition in Tarifa'),
  L.body(`Number of times a domain appeared in the top 3, across all ${all.length} searches checked from Tarifa (ads not included):`),
  L.table(['Domain', 'Top-3 appearances', 'Note'], [4200, 2000, 3160], compRows, { boldFirst: true }),
  L.spacer(),
  L.body('surfcentertarifa.com is the main competitor for both windsurfing and wing foil, and shows review stars in the results (4.8 from 432 reviews for "wing foil tarifa"). For wing foil, wingstarifa.com and the Ozu schools join them.'),
  L.body('Worth checking: several searches show an ad from the domain laduntarifaofertas.com, including the text "Wing foil tarifa | Aparcamiento y Más Laduna". Please let us know whether this is your own campaign. If not, a third party is advertising on your brand name.'),

  L.h1('Priorities'),
  prioTable,

  L.h1('What this report does not measure'),
  L.bullet('Mobile positions were measured once from Tarifa (10 October 2026) for the keywords in the desktop check; generic terms (n/m) were not included.'),
  L.bullet('Positions in the Google Maps listing (local pack): these are separate from the organic positions in this report.'),
  L.bullet('Keywords without measured volume ("–") can still bring visitors; SE Ranking only reports volume from about 10 searches a month.'),
  L.bullet('The check from Tarifa is a snapshot of 9 October 2026. National positions come from the latest SE Ranking update.'),
  L.bullet('Actual clicks and impressions: this needs Search Console for both domains (available for .es, not yet for .com).'),
];

const doc = L.makeDoc({ subject: SUBJECT.toUpperCase(), headerTitle: 'KEYWORD & RANKING REPORT', coverChildren, bodyChildren });
const out = 'keyword-report-tarifawindsurfing-es-com-2026-10-09.docx';
L.Packer.toBuffer(doc).then((b) => { L.fs.writeFileSync(out, b); console.log('ok', out, { top3, top10, none }); });
