// Keyword- en rankingrapport La Duna Tarifa (windsurf + wing foil, ES + EN)
// Bronnen: SE Ranking (databases es, uk, us, de, nl, fr, it) + live Google-SERP vanuit Tarifa (9 okt 2026).
const L = require('./ba_lib.js');
const serp = Object.fromEntries(JSON.parse(L.fs.readFileSync('tarifa_serp.json', 'utf8')).map((r) => [r.query + '|' + r.lang, r]));

const DATE = '9 oktober 2026';
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
  if (!measured) return { text: 'n.g.', color: L.GRAY, align: L.AlignmentType.CENTER };
  const n = posNum(v);
  if (n == null) return { text: '–', color: L.GRAY, align: L.AlignmentType.CENTER };
  const fill = n <= 3 ? L.GREEN : n <= 10 ? L.AMBER : L.RED;
  return { text: String(v), fill, color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER };
}
const vol = (v) => ({ text: v == null ? '–' : v >= 10000 ? (v / 1000).toLocaleString('nl-NL', { maximumFractionDigits: 1 }) + 'k' : v.toLocaleString('nl-NL'), align: L.AlignmentType.CENTER });

function rowsFor(list) {
  return list.map(([kw, lang, vEs, vUk, vUs, sEs, sCom, wEs, wCom]) => {
    const t = lang ? serp[kw + '|' + lang] : null;
    return [kw, vol(vEs), vol(vUk), vol(vUs),
      posCell(t?.es_pos, !!t), posCell(t?.com_pos, !!t),
      posCell(sEs), posCell(sCom), posCell(wEs), posCell(wCom)];
  });
}
const W = [2160, 620, 620, 620, 830, 830, 830, 830, 1010, 1010];
const H = ['Zoekwoord', 'Vol ES', 'Vol UK', 'Vol US', 'Tarifa .es', 'Tarifa .com', 'Spanje .es', 'Spanje .com', 'Wereld .es', 'Wereld .com'];
const kwTable = (list) => L.table(H, W, rowsFor(list), { size: 15, boldFirst: true, centerFrom: 1 });

// Kerncijfers Tarifa
// Mobiele posities vanuit Tarifa (SE Ranking-project, Google Mobile, 10 okt 2026): mobile_serp.json = [{query, lang, es_pos, com_pos}]
const mobile = L.fs.existsSync('mobile_serp.json') ? Object.fromEntries(JSON.parse(L.fs.readFileSync('mobile_serp.json', 'utf8')).map((r) => [r.query + '|' + r.lang, r])) : {};
function mobileRows() {
  return Object.values(serp).map((d) => {
    const m = mobile[d.query + '|' + d.lang];
    return [d.query + (d.lang === 'en' ? ' (EN)' : ''), posCell(d.es_pos), posCell(m?.es_pos, !!m), posCell(d.com_pos), posCell(m?.com_pos, !!m)];
  }).filter((r) => r.slice(1).some((c) => c.text !== '–' && c.text !== 'n.g.' && c.text !== 'n.g.'));
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

// Concurrenten in de top 3 vanuit Tarifa
const comp = {};
all.forEach((r) => r.top3.forEach((d) => { d = d.replace(/^www\./, ''); comp[d] = (comp[d] || 0) + 1; }));
const compRows = Object.entries(comp).sort((a, b) => b[1] - a[1]).slice(0, 10)
  .map(([d, n]) => [d, { text: String(n), align: L.AlignmentType.CENTER }, d.startsWith('tarifawindsurfing') ? 'La Duna (eigen site)' : '']);

const coverChildren = L.cover({
  subject: SUBJECT,
  docType: 'Keyword- & rankingrapport',
  variant: 'W I N D S U R F  ·  W I N G   F O I L  ·  K I T E',
  cards: [
    ['TOP 3 IN TARIFA', top3, `van ${all.length} zoekwoorden`, L.GREEN],
    ['TOP 10 IN TARIFA', top10, `van ${all.length} zoekwoorden`, L.AMBER],
    ['NIET GEVONDEN', none, 'in de top 100', L.RED],
  ],
  dateLabel: 'RAPPORTDATUM ' + DATE.toUpperCase(),
});

const legend = L.table(['Kleur', 'Betekenis'], [2200, 7160], [
  [{ text: '1–3', fill: L.GREEN, color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER }, 'Toppositie: zichtbaar boven de vouw, hoogste klikkans'],
  [{ text: '4–10', fill: L.AMBER, color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER }, 'Pagina 1, maar onder de top 3: hier ligt de snelste winst'],
  [{ text: '11+', fill: L.RED, color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER }, 'Pagina 2 of verder: nauwelijks klikken'],
  [{ text: '–', align: L.AlignmentType.CENTER }, 'Niet gevonden in de top 100 (of geen zoekvolume gemeten bij volumes)'],
  [{ text: 'n.g.', align: L.AlignmentType.CENTER }, 'Niet gemeten vanuit Tarifa (generieke of algemene term)'],
]);

const PRIOS = [
  ['Kritiek', 'Wing foil: in Tarifa staat .es op 2–6 en .com is afwezig op "wing foil tarifa" (EN); surfcentertarifa en wingstarifa staan bovenaan', 'Wing foil', 'Midden', 'Hoog'],
  ['Kritiek', 'Kitesurf: "kitesurf tarifa" (590/maand) en vijf cursus- en schooltermen (elk 210–260) tonen La Duna niet in Tarifa; landelijk positie 7–27. Bouw een complete kitesurfcursuspagina (ES + EN)', 'Kitesurf', 'Midden', 'Hoog'],
  ['Hoog', '.es rankt bij Engelse zoekopdrachten (windsurfing tarifa 4, wing foil tarifa 5, windsurf camp tarifa 1) waar .com zou moeten staan: kannibalisatie tussen de domeinen', 'Domeinen', 'Midden', 'Hoog'],
  ['Hoog', 'Generieke termen met veel volume ("windsurf" 18.100, "wing foil" 8.000, "wingfoil" 6.600 in Spanje) halen geen top 10; alleen een blogartikel staat op 19 en 34', 'Content', 'Hoog', 'Hoog'],
  ['Hoog', '"alquiler windsurf tarifa": .es staat nergens in de Spaanse database, in Tarifa op 4. Huurpagina versterken (prijstabel, interne links)', 'Windsurf', 'Laag', 'Midden'],
  ['Midden', 'Engelse vakantiezoekwoorden ("windsurfing holidays" 110 UK, "wing foiling holidays" 70 UK, "wing foiling lessons" 140 UK) hebben nog geen landingspagina', 'EN content', 'Midden', 'Midden'],
  ['Midden', 'Algemene cursuszoekwoorden in het Spaans ("curso windsurf" 90, "curso wingfoil" 90): niet zichtbaar, scholen uit Barcelona en Mallorca winnen', 'Content', 'Midden', 'Midden'],
  ['Quick win', 'Pagina’s op 4–6 in Tarifa naar de top 3 tillen: titel, H1 en een prijs in de snippet ("curso wingfoil tarifa" 4, "wing foil tarifa" 5, "alquiler wing foil tarifa" 6)', 'On-page', 'Laag', 'Hoog'],
  ['Quick win', 'Google Business Profile: in vrijwel elke Tarifa-SERP staat een kaart met bedrijven (local pack). Reviews en categorieën wing foil/windsurf school bijwerken', 'Lokaal', 'Laag', 'Hoog'],
];
const PRIO_FILL = { Kritiek: L.RED, Hoog: L.ROOD_LICHT, Midden: L.AMBER, 'Quick win': L.GREEN };
const prioTable = L.table(['Prioriteit', 'Bevinding en actie', 'Thema', 'Inspanning', 'Impact'], [1300, 4560, 1200, 1100, 1200],
  PRIOS.map((p) => [{ text: p[0], fill: PRIO_FILL[p[0]], color: 'FFFFFF', bold: true, align: L.AlignmentType.CENTER }, p[1],
    { text: p[2], align: L.AlignmentType.CENTER }, { text: p[3], align: L.AlignmentType.CENTER }, { text: p[4], align: L.AlignmentType.CENTER }]), { size: 18 });

const bodyChildren = [
  L.h1('Samenvatting'),
  L.box([
    `In Tarifa zelf staat La Duna sterk op windsurf: op alle acht Spaanse windsurfzoekwoorden met "tarifa" staat tarifawindsurfing.es in de top 4, op "windsurf en tarifa" op 1 en op "windsurf tarifa" en "escuela windsurf tarifa" op 2. Van de ${all.length} zoekwoorden die we live vanuit Tarifa hebben gecontroleerd, staat La Duna ${top3} keer in de top 3 en ${top10} keer op pagina 1.`,
    'Wing foil is de zwakke plek. Het zoekvolume is groter dan bij windsurf ("wingfoil tarifa" en "wing foil tarifa" elk 110 per maand in Spanje tegenover 170 voor "windsurf tarifa"), maar La Duna staat daar op 2 tot 6, achter surfcentertarifa.com, wingstarifa.com en de Ozu-scholen. In het Engels ontbreekt .com op "wing foil tarifa" en "wing foiling tarifa".',
    'Kitesurf is de grootste onbenutte markt. Alleen "kitesurf tarifa" heeft al 590 zoekopdrachten per maand in Spanje, maar La Duna staat daarvoor niet in de top 100 in Tarifa. Alleen "alquiler kitesurf tarifa" (5) en "kitesurf valdevaqueros" (6) staan op pagina 1.',
    'Buiten Spanje komt het Engelse verkeer vooral binnen via tarifawindsurfing.com (positie 1 in de VS en Nederland op "tarifa windsurfing", 2 in het VK op "windsurf school tarifa"). Tegelijk verschijnt .es bij Engelse zoekopdrachten, soms boven .com. Dat bevestigt het advies uit de mail: één primair domein met een gekoppelde Engelse versie, zodat de twee domeinen elkaar niet beconcurreren.',
  ]),
  L.spacer(),
  L.h2('Zo lees je de tabellen'),
  L.body('Per zoekwoord staan het maandelijkse zoekvolume (Spanje, Verenigd Koninkrijk, Verenigde Staten) en de positie van beide sites op drie niveaus:'),
  L.bullet('Tarifa: live Google-resultaat vanuit Tarifa (desktop, 9 oktober 2026), in de taal van het zoekwoord. Dit is wat een toerist ter plaatse ziet.'),
  L.bullet('Spanje: positie in de Spaanse SE Ranking-database (landelijk, niet gepersonaliseerd).'),
  L.bullet('Wereld: beste positie in het VK, de VS, Duitsland, Nederland, Frankrijk of Italië; het land staat erbij.'),
  legend,

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Windsurf — Spaanse zoekwoorden'),
  L.body('Wat je hier ziet: hoe Spaanstaligen zoeken naar windsurfen en waar je twee websites staan. Lees elke rij van links naar rechts. De eerste cijfers zijn het aantal zoekopdrachten per maand; de gekleurde vakken tonen op welke positie Google je site laat zien. Groen: direct zichtbaar. Oranje: op pagina 1, maar onder de concurrent. Rood: vrijwel niemand vindt je.'),
  kwTable(ES_WIND),
  L.spacer(),
  L.body('Sterk in Tarifa en landelijk op alle "tarifa"-combinaties. De grote generieke termen ("windsurf", "curso windsurf", "clases de windsurf") gaan naar scholen elders in Spanje; daar is de site niet op ingericht. "alquiler windsurf tarifa" is de enige Tarifa-term zonder Spaanse ranking van .es.'),

  L.h1('Wing foil — Spaanse zoekwoorden'),
  L.body('Wat je hier ziet: hetzelfde overzicht voor wing foil. "wingfoil tarifa" en "wing foil tarifa" worden net zo vaak gezocht als de windsurftermen, maar de posities zijn oranje in plaats van groen. De onderste twee rijen zijn de grote algemene termen, waar alleen een blogartikel op pagina 2 en 4 staat.'),
  kwTable(ES_WING),
  L.spacer(),
  L.body('Het volume ligt hoger dan bij windsurf, maar de posities zijn lager. In Tarifa staat .es op 2 ("wingfoil tarifa") tot 6 ("alquiler wing foil tarifa"). Op de brede termen "wingfoil" en "wing foil" (samen 14.600 zoekopdrachten per maand in Spanje) rankt alleen het blogartikel, op 19 en 34.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Kitesurf — Spaanse zoekwoorden'),
  L.body('Wat je hier ziet: kitesurf heeft verreweg de meeste zoekopdrachten van de drie sporten ("kitesurf tarifa" 590 per maand, vijf cursus- en schooltermen met elk 210–260). De Tarifa-kolommen zijn bijna allemaal grijs: daar is de site niet zichtbaar. Landelijk (Spanje-kolommen) staat hij op 7–27, meest oranje. Alleen "alquiler kitesurf tarifa" (5) en "kitesurf valdevaqueros" (6) halen pagina 1 in Tarifa.'),
  kwTable(ES_KITE),
  L.spacer(),
  L.body('Tarifa is de kitesurfhoofdstad van Europa en de concurrentie is sterk (3Sixty, Kite Obsession, Ozu, KTS). De huidige kitesurfpagina\u2019s zijn kort en de homepage pakt de meeste posities. Een volwaardige kitesurfcursuspagina met prijzen, IKO-certificering, reviews en FAQ kan een deel van deze 2.000+ maandelijkse zoekopdrachten winnen.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Windsurf — Engelse zoekwoorden'),
  L.body('Wat je hier ziet: hoe Engelstalige bezoekers (vooral uit het VK, de VS en Noord-Europa) zoeken naar windsurfen in Tarifa. Hier zijn de .com-kolommen het belangrijkst, want .com is de Engelse site. Groen bij "Wereld .com" betekent dat mensen je al vinden voordat ze op reis gaan.'),
  kwTable(EN_WIND),
  L.spacer(),
  L.body('.com is in Tarifa sterk op lessen, school en verhuur (1–2). Op "windsurfing tarifa" staat in Tarifa juist .es op 4 en .com niet, en "windsurf camp tarifa" gaat naar .es (1). Internationaal is .com de sterkste: 1 in de VS en Nederland op "tarifa windsurfing".'),

  L.h1('Wing foil — Engelse zoekwoorden'),
  L.body('Wat je hier ziet: de Engelse wing-foilzoekopdrachten. De meeste rijen zijn grijs: er wordt wel gezocht (bijvoorbeeld "wing foiling lessons", 140 per maand in het VK), maar de Engelse site verschijnt er nog niet.'),
  kwTable(EN_WING),
  L.spacer(),
  L.body('De Engelse wing-foilzoekwoorden zijn het grootste gat. .com staat in Tarifa op 2 ("wingfoil lessons tarifa") en 4 ("wing foil lessons tarifa"), maar ontbreekt op "wing foil tarifa" en "wing foiling tarifa". In het VK en de VS zijn "wing foiling lessons" (140 UK) en "learn to wing foil" (40 US) gezocht, zonder zichtbaarheid voor La Duna.'),

  L.h1('Kitesurf — Engelse zoekwoorden'),
  L.body('Wat je hier ziet: de Engelse kitesurfzoekopdrachten. "kitesurfing tarifa" (260 Spanje, 140 VK, 170 VS) en "kitesurfing lessons" (590 VK) hebben flink volume, maar geen van beide sites verschijnt in Tarifa. Lichtpuntje: tarifawindsurfing.com staat in de VS op 1 voor "kitesurfing holidays".'),
  kwTable(EN_KITE),
  L.spacer(),
  L.body('In Tarifa gaan de Engelse kiteresultaten naar gespecialiseerde kitescholen (Freeride Tarifa, Addict Kite School, 3Sixty, Tarifa Max). Een eigen Engelse kitesurfpagina op de nieuwe site is nodig om mee te doen.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Desktop versus mobiel in Tarifa'),
  L.body(`Wat je hier ziet: dezelfde zoekopdrachten vanuit Tarifa, één keer op een computer (desktop) en één keer op een smartphone (mobiel). De meeste bezoekers gebruiken een telefoon (71% van de klikken in Search Console), dus de mobiele kolom telt het zwaarst. Alleen zoekwoorden waarop minstens één site verschijnt, staan erin. Kijkend naar posities op pagina 1 (top 10) was mobiel ${mobStats.better} keer beter dan desktop, ${mobStats.worse} keer slechter en ${mobStats.same} keer gelijk.`),
  L.table(['Zoekwoord', 'Desktop .es', 'Mobiel .es', 'Desktop .com', 'Mobiel .com'], [3760, 1400, 1400, 1400, 1400], mobileRows(), { size: 16, boldFirst: true, centerFrom: 1 }),
  L.spacer(),
  L.body('Op mobiel toont Google meestal een kaart met lokale scholen en meer advertenties boven het eerste organische resultaat, waardoor zelfs positie 3 vaak onder het eerste scherm valt. Een volledig Google-bedrijfsprofiel met veel reviews is daarom net zo belangrijk als de website zelf.'),

  new L.Paragraph({ children: [new L.PageBreak()] }),
  L.h1('Concurrentie in Tarifa'),
  L.body(`Aantal keer dat een domein in de top 3 stond, over alle ${all.length} gecontroleerde Tarifa-zoekopdrachten (advertenties niet meegeteld):`),
  L.table(['Domein', 'Top-3 vermeldingen', 'Opmerking'], [4200, 2000, 3160], compRows, { boldFirst: true }),
  L.spacer(),
  L.body('surfcentertarifa.com is de belangrijkste concurrent in zowel windsurf als wing foil, en toont reviewsterren in de resultaten (4,8 op 432 reviews bij "wing foil tarifa"). Bij wing foil komen daar wingstarifa.com en de Ozu-scholen bij.'),
  L.body('Opvallend: op meerdere zoekopdrachten draait een advertentie van het domein laduntarifaofertas.com, onder meer met de tekst "Wing foil tarifa | Aparcamiento y Más Laduna". Controleer of dit een campagne van La Duna zelf is. Zo niet, dan biedt een derde op de merknaam.'),

  L.h1('Prioriteiten'),
  prioTable,

  L.h1('Wat dit rapport niet meet'),
  L.bullet('Mobiele posities zijn één keer gemeten vanuit Tarifa (10 oktober 2026) voor de zoekwoorden uit de desktopmeting; generieke termen (n.g.) zijn niet meegenomen.'),
  L.bullet('Posities in de kaart (local pack) van Google Maps: die staan los van de organische posities in dit rapport.'),
  L.bullet('Zoekwoorden zonder gemeten volume ("–") kunnen wel verkeer opleveren; SE Ranking toont pas volume vanaf circa 10 zoekopdrachten per maand.'),
  L.bullet('De meting vanuit Tarifa is een momentopname van 9 oktober 2026. De landelijke posities komen uit de meest recente SE Ranking-update.'),
  L.bullet('Werkelijke klikken en vertoningen: daarvoor is Search Console van beide domeinen nodig (voor .es aanwezig, voor .com niet).'),
];

const doc = L.makeDoc({ subject: SUBJECT.toUpperCase(), headerTitle: 'KEYWORD- & RANKINGRAPPORT', coverChildren, bodyChildren });
const out = 'keywordrapport-tarifawindsurfing-es-com-2026-10-09.docx';
L.Packer.toBuffer(doc).then((b) => { L.fs.writeFileSync(out, b); console.log('ok', out, { top3, top10, none }); });
