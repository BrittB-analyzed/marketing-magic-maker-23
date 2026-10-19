/*
 * B. Analyzed marketing - rapportsjabloon (docx-js)
 * ------------------------------------------------
 * Dit is een werkend voorbeeld: het SEO/GEO/AEO-auditrapport van b-analyzed.com.
 *
 * Wat je vervangt bij een nieuw document:
 *   - DATE_NL en DOMAIN bovenaan
 *   - de inhouds-arrays onder "content data": SCORES, PAGES, SEO_*, GEO_*, AEO_*,
 *     PRIORITIES, WORKING, en de tekst in summaryBox
 *   - bodyChildren als de sectie-indeling anders is
 *   - het uitvoerpad onderaan
 *
 * Wat je NIET verandert: het palet, de fonts, de coveropbouw en de tabelhelpers.
 * Die staan vast in SKILL.md.
 *
 * Na het genereren: valideren, naar PDF converteren en de pagina's bekijken.
 * De cover loopt snel over naar pagina 2 - stel dan whiteSpacer() bij.
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, Tab, TabStopType,
  TableLayoutType, HeightRule
} = require('docx');
const fs = require('fs');

const ANTRACIET = '3C3C3B';  // covervlak + tabelkoppen
const ROOD_DIEP = 'C81433';  // primair merkrood / status kritiek
const ROOD_LICHT = 'E03E33';
const NAVY = ANTRACIET;      // covervlak (was merkrood, nu antraciet)
const BLUE = ANTRACIET;
const LIGHTBLUE = 'D6D8DD';
const GREEN = '1F8A5B';      // .pass uit de brandsheet
const AMBER = 'B07000';      // .warn uit de brandsheet
const RED = ROOD_DIEP;       // .dont uit de brandsheet
const ROW_ALT = 'F4F4F5';    // mist
const BORDER = 'E2E2E4';     // lijn
const DARK = ANTRACIET;
const SECTION_BG = 'F4F4F5';
const GREEN_BG = 'F4F4F5';
const GRAY = '8A8A8D';
const INK = ANTRACIET;
const COVER_MUTED = 'A0A0A4';

const DISPLAY = 'Poppins';
const BODY = 'Inter';
const MONO = 'IBM Plex Mono';

const CW = 9360; // content width
const DATE_NL = '11 oktober 2026';
const DOMAIN = 'partycreations.nl';

// ---------- helpers ----------
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
};
const thinBorders = {
  top: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
  left: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
  right: { style: BorderStyle.SINGLE, size: 4, color: BORDER },
};

function navySpacer(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(new Paragraph({
      shading: { type: ShadingType.CLEAR, fill: NAVY, color: 'auto' },
      spacing: { before: 0, after: 0, line: 240, lineRule: 'exact' },
      children: [new TextRun({ text: ' ', font: BODY, size: 22, color: NAVY })],
    }));
  }
  return out;
}

function navyText(text, opts = {}) {
  return new Paragraph({
    shading: { type: ShadingType.CLEAR, fill: NAVY, color: 'auto' },
    alignment: AlignmentType.CENTER,
    spacing: { before: opts.before || 0, after: opts.after || 0 },
    children: [new TextRun({
      text,
      font: opts.font || BODY,
      size: opts.size || 22,
      bold: opts.bold || false,
      italics: opts.italics || false,
      color: opts.color || 'FFFFFF',
    })],
  });
}

function scoreColor(score) {
  if (score >= 8) return GREEN;
  if (score >= 5) return AMBER;
  return RED;
}

function coverScoreCell(label, score, status) {
  const fill = scoreColor(score);
  return new TableCell({
    width: { size: 4080, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: 'FFFFFF', color: 'auto' },
    borders: noBorders,
    margins: { top: 300, bottom: 300, left: 100, right: 100 },
    verticalAlign: VerticalAlign.CENTER,
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: label, font: DISPLAY, size: 20, bold: true, color: ANTRACIET })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: String(score), font: DISPLAY, size: 72, bold: true, color: fill })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: status, font: BODY, size: 18, italics: true, color: GRAY })],
      }),
    ],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, font: DISPLAY, size: 48, bold: true, color: ROOD_DIEP })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 140 },
    children: [new TextRun({ text, font: DISPLAY, size: 36, bold: true, color: ANTRACIET })],
  });
}
function sub(text) {
  return new Paragraph({
    spacing: { before: 0, after: 200 },
    children: [new TextRun({ text, font: BODY, size: 22, italics: true, color: GRAY })],
  });
}
function body(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.before || 0, after: opts.after === undefined ? 160 : opts.after },
    children: [new TextRun({ text, font: BODY, size: 22, color: DARK, bold: opts.bold || false })],
  });
}
function bullet(text) {
  return new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 80 },
    children: [new TextRun({ text, font: BODY, size: 22, color: DARK })],
  });
}

function cell(text, widthDxa, opts = {}) {
  return new TableCell({
    width: { size: widthDxa, type: WidthType.DXA },
    shading: opts.fill ? { type: ShadingType.CLEAR, fill: opts.fill, color: 'auto' } : undefined,
    borders: opts.borders || thinBorders,
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({
        text,
        font: opts.font || BODY,
        size: opts.size || 20,
        bold: opts.bold || false,
        color: opts.color || DARK,
      })],
    })],
  });
}

function headerRow(labels, widths) {
  return new TableRow({
        cantSplit: true,
    tableHeader: true,
    children: labels.map((l, i) => cell(l, widths[i], { fill: INK, color: 'FFFFFF', bold: true, font: DISPLAY })),
  });
}

const STATUS_FILL = { 'Goed': GREEN, 'Aandacht': AMBER, 'Ontbreekt': RED, 'Te verifiëren': GRAY };

// Signal | Finding | Status  table
function signalTable(rows) {
  const widths = [2350, 5210, 1800];
  return new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: widths,
    layout: TableLayoutType.FIXED,
    rows: [
      headerRow(['Signaal', 'Bevinding', 'Status'], widths),
      ...rows.map((r, idx) => new TableRow({
        cantSplit: true,
        children: [
          cell(r[0], widths[0], { fill: idx % 2 ? ROW_ALT : undefined, bold: true }),
          cell(r[1], widths[1], { fill: idx % 2 ? ROW_ALT : undefined }),
          cell(r[2], widths[2], { fill: STATUS_FILL[r[2]] || GRAY, color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
        ],
      })),
    ],
  });
}

// ---------- content data ----------
const SCORES = [
  ['SEO', 4, 'Needs Work', 'Goede technische basis, maar oude rankings lekken weg via 404’s en titels, meta descriptions en productteksten zijn zwak.'],
  ['CRO', 4, 'Needs Work', 'Geen propositie of CTA boven de vouw, geen reviews, tellers tonen 0+ en een formulier met tien velden.'],
  ['Lokaal', 3, 'Kritiek', 'Venlo staat alleen op /contact/. Er is geen werkgebied, geen LocalBusiness-markup en er zijn geen locatiepagina’s.'],
];

const PAGES = [
  ['/', 'Homepage', 'Geen H1 en geen H2; titel "Home - Party Creations"'],
  ['/stretchtenten/', 'Dienst', 'Beste contentpagina (511 woorden); typefout "Stretchten"'],
  ['/producten/stretchtenten/', 'Product', 'Zelfde titel en H1 als /stretchtenten/; alleen een CTA-zin'],
  ['/producten/ (+ 11 subpagina’s)', 'Productoverzicht', 'Collecties sterk; subpagina’s dun'],
  ['/bruiloftsfeesten/, /verjaardagsfeesten/, /bedrijfsfeesten/', 'Doelgroep', '326-354 woorden met logische H2’s'],
  ['/themafeesten/ (+ 3 thema’s)', 'Doelgroep', 'Goede opbouw; 344-483 woorden'],
  ['/feest-deejay/', 'Dienst', 'Intro gaat over bruiloftsaankleding in plaats van de DJ'],
  ['/referenties/', 'Bewijs', 'Alleen foto’s, geen tekst, namen of reviews'],
  ['/contact/', 'Conversie', 'Enige formulier van de site: tien velden'],
  ['/voorbeeld-pagina/', 'Restant', 'Standaard WordPress-pagina, staat in de sitemap'],
];

const SEO_TECH = [
  ['Oude URL’s', 'Elf URL’s van de vorige site ranken nog, maar sturen via een 301 naar een 404: /boostenhof (positie 6), /ria-joosten (4 op "riajoosten"), /stage-crew (6), /floor-models (6), /venlotech (4), /galerie-de-hoeve (10), /alda, /grenswerk, /dynamic, /dj-get-a-job, /sandton-chateau-de-raaij. Die posities en eventuele backlinks gaan verloren.', 'Ontbreekt'],
  ['Titel-tags', 'Alle 25 pagina’s volgen het patroon "<Paginanaam> - Party Creations". De homepage heet "Home - Party Creations". Geen zoekwoord, geen regio, geen reden om te klikken.', 'Aandacht'],
  ['Meta descriptions', 'Niet ingevuld: Avada/Yoast plakt de eerste regels van de pagina erin. Op tien productpagina’s begint de snippet daardoor met "Interesse of meer informatie?". Op /producten/stretchtenten/, /referenties/ en /producten/white-ibiza-collection/ ontbreekt hij helemaal.', 'Ontbreekt'],
  ['H1 homepage', 'De homepage heeft geen H1 en geen enkele H2. Koppen als "Feesten" en "Wij maken evenementen mooier" zijn opgemaakte div’s.', 'Ontbreekt'],
  ['H1 overige pagina’s', 'Overal aanwezig en enkelvoudig, maar gelijk aan de paginanaam ("Koelingen", "Black collection") zonder zoekwoord als "huren".', 'Aandacht'],
  ['Kannibalisatie', '/stretchtenten/ en /producten/stretchtenten/ hebben dezelfde titel ("Stretchtenten - Party Creations") en dezelfde H1. Google moet kiezen; de dunne productpagina kan de sterke dienstpagina verdringen.', 'Aandacht'],
  ['Restpagina’s', '/voorbeeld-pagina/ ("Dit is een voorbeeldpagina…") is indexeerbaar en staat in de sitemap.', 'Aandacht'],
  ['Sitemap', 'De sitemap-index bevat naast pagina’s ook Avada-templatecategorieën (/fusion_tb_category/header/, /footer/, /page_title_bar/ en /element_category/sections/).', 'Aandacht'],
  ['HTTPS en redirects', 'http en www sturen met een 301 door naar https://partycreations.nl/. Canonicals verwijzen naar zichzelf, robots.txt blokkeert niets.', 'Goed'],
  ['Alt-teksten', 'Alle gecrawlde afbeeldingen hebben een alt-attribuut. De kwaliteit van de teksten is niet per afbeelding beoordeeld.', 'Goed'],
  ['Paginagewicht', '/producten/stretchtenten/ laadt 90 afbeeldingen, /producten/white-ibiza-collection/ 61. Bestandsnamen als IMG_2730-scaled.jpeg wijzen op onbewerkte foto’s.', 'Te verifiëren'],
];

const SEO_CONTENT = [
  ['Productpagina’s', 'De elf pagina’s onder /producten/ tellen 127-151 woorden inclusief menu en footer. De eigenlijke inhoud is een fotogalerij plus één CTA-blok. Geen afmetingen, aantallen, prijsindicatie of veelgestelde vragen.', 'Ontbreekt'],
  ['Copy-pastefout', '/feest-deejay/ opent met "Een bruiloft is een bijzondere dag" en "verzorgen we de feest aankleding voor bruiloften" — tekst van de bruiloftspagina.', 'Ontbreekt'],
  ['Referenties', '/referenties/ bevat alleen foto’s: geen klantnaam, geen locatie, geen quote, geen review.', 'Ontbreekt'],
  ['Feitelijke consistentie', 'De HTML bevat twee ervaringsclaims: data-value 10 ("jaar ervaring", in het blok Over Partycreations) en 15 ("jaar ervaring in feest aankleding").', 'Aandacht'],
  ['Spelling en naam', '"Stretchten huren" staat twee keer in een kop op /stretchtenten/. De bedrijfsnaam wisselt tussen Partycreations, PartyCreations en Party Creations; de dienst tussen "Feest Deejay" en "Feest DJ".', 'Aandacht'],
  ['Doelgroeppagina’s', 'Bruiloft, verjaardag, bedrijfsfeest en de drie thema’s hebben 326-483 woorden met een logische H2-opbouw ("Wat wij verzorgen bij …"). Goede basis om uit te bouwen.', 'Goed'],
];

const SEO_SCHEMA = [
  ['Aanwezig', 'Yoast levert Organization, WebSite, WebPage en BreadcrumbList.', 'Goed'],
  ['LocalBusiness', 'Ontbreekt, terwijl adres (Burgemeester Bloemartsstraat 30, 5913 BG Venlo), telefoon en openingsinformatie beschikbaar zijn.', 'Ontbreekt'],
  ['Service en FAQPage', 'Niet aanwezig. Per dienstpagina een Service-blok en een FAQ-sectie met FAQPage-markup ligt voor de hand.', 'Aandacht'],
];

// keyword, volume, KD, doelpagina
const KEYWORDS = [
  ['stretchtent', '3.600', '34', '/stretchtenten/'],
  ['partytent huren', '3.600', '32', 'Nieuwe pagina "Tenten huren" (stretch + easy-up)'],
  ['party verhuur', '660', '21', 'Homepage'],
  ['themafeest', '480', '13', '/themafeesten/'],
  ['bedrijfsfeest organiseren', '480', '28', '/bedrijfsfeesten/ (piek juli-oktober)'],
  ['dj boeken', '390', '18', '/feest-dj/ (nu /feest-deejay/)'],
  ['bruiloft decoratie huren', '390', '13', '/bruiloftsfeesten/'],
  ['koeling huren', '320', '18', '/producten/koelingen/'],
  ['feest dj', '260', '5', '/feest-dj/'],
  ['aankleding bruiloft', '260', '26', '/bruiloftsfeesten/'],
  ['stretchtent huren limburg', '140', '10', '/stretchtenten/'],
  ['bar huren', '130', '19', 'Productpagina bars (bestaat nog niet)'],
  ['ibiza thema feest', '70', '5', '/themafeesten/ibiza-thema/'],
  ['statafels huren', '50', '15', '/producten/ledbars-en-ledstatafels/'],
  ['partyverhuur venlo', '30', '11', 'Homepage'],
];

const CRO_ROWS = [
  ['Boven de vouw', 'De homepage opent met een slider zonder kop of propositie; de enige knop is "Meer informatie" naar /themafeesten/. Een bezoeker ziet niet in één oogopslag wat Party Creations doet, waar en hoe je boekt.', 'Ontbreekt'],
  ['Dode knop', 'De knop "Over ons" op de homepage linkt naar "#". Er bestaat geen Over ons-pagina.', 'Ontbreekt'],
  ['Tellers', 'Alle tellers staan in de HTML op 0 en lopen pas op als je erlangs scrolt. Zonder die animatie (zoals in een tekstweergave of bij snel scrollen) staat er "0+ jaar ervaring", "0+ tevreden klanten" en "0% betrouwbaar".', 'Ontbreekt'],
  ['Social proof', 'Geen reviews, geen Google-score, geen klantquotes en geen logo’s van zakelijke klanten. De referentiepagina toont alleen foto’s.', 'Ontbreekt'],
  ['Primaire CTA', 'De enige terugkerende actie is "Contact" in het menu en "Neem contact op" onderaan productpagina’s. Geen "Offerte aanvragen" of "Beschikbaarheid checken".', 'Aandacht'],
  ['Formulier', 'Alleen op /contact/, met tien velden: naam, adres, postcode, woonplaats, e-mail, telefoon, datum, locatie, soort feest en vraag. Adres en postcode zijn bij een eerste aanvraag overbodig en verhogen de drempel.', 'Aandacht'],
  ['Laagdrempelig contact', 'Telefoonnummer staat als klikbare link, maar er is geen WhatsApp-knop — voor particuliere feestaanvragen vaak het snelste kanaal.', 'Aandacht'],
  ['Prijsindicatie', 'Nergens een prijs, "vanaf"-bedrag of pakketprijs. Bezoekers die willen vergelijken haken af of gaan naar een concurrent met prijzen.', 'Aandacht'],
  ['Menu', '"Feesten" en "Producten/Diensten" zijn uitklapitems met href="#". Op mobiel levert de eerste tik niets op als het submenu niet opent.', 'Te verifiëren'],
  ['Wie zit erachter', 'Er staat een foto van eigenaar Rob Houkes in de media, maar zijn naam en verhaal komen op de site niet voor. Bij een persoonlijke dienst is dat een gemiste vertrouwensfactor.', 'Aandacht'],
  ['Sociale links', 'Facebook verwijst naar het persoonlijke profiel /rob.houkes/, de LinkedIn-link is een "authwall"-trackingadres dat niet-ingelogde bezoekers naar een inlogscherm stuurt.', 'Aandacht'],
  ['Collecties', 'White Ibiza, Black, Moulin Rouge, Velvet Chic en Industrial zijn als complete pakketten beschreven. Dat is een sterk verkoopargument dat nog niet als pakket (met richtprijs en "Boek dit pakket") wordt aangeboden.', 'Goed'],
  ['Meten', 'In de broncode is geen Google Analytics, Tag Manager of andere tracking aangetroffen. Zonder meting is CRO niet te sturen.', 'Ontbreekt'],
];

const LOCAL_ROWS = [
  ['Vestigingsplaats', 'Het adres in Venlo staat alleen op /contact/ en in de meta description van die pagina. Homepage, titels en koppen noemen geen plaats of regio.', 'Ontbreekt'],
  ['Werkgebied', 'Nergens staat waar Party Creations levert (Venlo, Noord-Limburg, Brabant, Duitsland?). Lokale zoekopdrachten als "stretchtent huren limburg" (140/mnd) worden zo niet bediend.', 'Ontbreekt'],
  ['Feestlocaties', 'De oude site rankte op namen van locaties en partners in de regio (Boostenhof, Galerie de Hoeve, Sandton Château de Raaij, Grenswerk). Pagina’s per feestlocatie ("Feest bij Boostenhof: zo kleden wij het aan") zijn een kans die concurrenten zelden pakken.', 'Aandacht'],
  ['LocalBusiness-markup', 'Ontbreekt (zie SEO).', 'Ontbreekt'],
  ['Google Bedrijfsprofiel', 'Niet gemeten in deze audit. Controleer categorieën, foto’s, reviews en de link naar de site.', 'Te verifiëren'],
];

// pagina, titel, meta description
const META = [
  ['/', 'Partyverhuur & feestaankleding in Venlo en Limburg | Party Creations', 'Stretchtenten, meubilair, koelingen en complete feestaankleding huren in Venlo en omgeving. Eén aanspreekpunt van idee tot opbouw. Vraag vrijblijvend een offerte aan.'],
  ['/stretchtenten/', 'Stretchtent huren in Limburg | 6×6 tot 10×30 m | Party Creations', 'Stretchtent huren voor bruiloft, tuinfeest of bedrijfsevent. Vijf formaten, koppelbaar tot 10×30 meter, met advies over maat en opstelling. Ook te koop.'],
  ['/feest-dj/', 'Feest DJ boeken in Venlo en Limburg | Party Creations', 'Een feest-DJ die de sfeer aanvoelt: van achtergrondmuziek bij het diner tot een volle dansvloer. Los te boeken of samen met aankleding en licht.'],
  ['/bruiloftsfeesten/', 'Bruiloft aankleding en decoratie huren | Party Creations Venlo', 'Aankleding, meubilair, verlichting en stretchtent voor jullie bruiloft, afgestemd op locatie en stijl. Bekijk onze collecties en vraag een voorstel aan.'],
  ['/bedrijfsfeesten/', 'Bedrijfsfeest organiseren in Limburg | Aankleding & verhuur | Party Creations', 'Van personeelsfeest tot relatie-event: wij verzorgen tent, meubilair, bar, koeling, licht en DJ. Eén aanspreekpunt, volledig op maat. Plan een kennismaking.'],
  ['/themafeesten/', 'Themafeest organiseren: Ibiza, festival of industrial | Party Creations', 'Een themafeest met complete aankleding: White Ibiza, festival of industrial. Wij combineren meubilair, decoratie en verlichting tot één concept.'],
  ['/producten/koelingen/', 'Koeling huren voor je feest of evenement | Party Creations', 'Professionele koelingen huren in Venlo en omgeving, voor kleine feesten en grote evenementen. Los te huren of te combineren met een bar.'],
];

const PRIORITIES = [
  ['Kritiek', 'Elf oude URL’s (o.a. /boostenhof, /ria-joosten, /stage-crew) die nog ranken leiden naar een 404: 301 naar relevante nieuwe pagina’s of pagina opnieuw opbouwen', 'SEO', 'Laag', 'Hoog'],
  ['Kritiek', 'Tellers tonen 0+ zonder animatie; zet echte waarden statisch in de HTML en kies één ervaringsjaar (10 of 15)', 'CRO', 'Laag', 'Hoog'],
  ['Kritiek', 'GA4 en Google Search Console koppelen en offerteaanvragen als conversie meten', 'CRO', 'Laag', 'Hoog'],
  ['Kritiek', 'Bruiloftstekst op /feest-deejay/ vervangen door eigen DJ-tekst', 'SEO', 'Laag', 'Midden'],
  ['Hoog', 'Homepage-hero met H1, propositie, regio en knop "Offerte aanvragen"; dode "Over ons"-knop repareren', 'CRO', 'Midden', 'Hoog'],
  ['Hoog', 'Titels en meta descriptions herschrijven (voorstellen in dit rapport)', 'SEO', 'Laag', 'Hoog'],
  ['Hoog', 'Reviews verzamelen (Google) en tonen op homepage, dienstpagina’s en referenties', 'CRO', 'Midden', 'Hoog'],
  ['Hoog', 'Kort offerteformulier (5 velden) op elke dienstpagina plus WhatsApp-knop', 'CRO', 'Midden', 'Hoog'],
  ['Hoog', 'Vestigingsplaats en werkgebied op homepage, in footer en in titels', 'Lokaal', 'Laag', 'Hoog'],
  ['Midden', 'Productpagina’s aanvullen met afmetingen, aantallen, vanaf-prijs en FAQ', 'SEO', 'Hoog', 'Hoog'],
  ['Midden', '/producten/stretchtenten/ samenvoegen met /stretchtenten/ (301)', 'SEO', 'Laag', 'Midden'],
  ['Midden', 'LocalBusiness-, Service- en FAQPage-markup toevoegen', 'Lokaal', 'Midden', 'Midden'],
  ['Midden', 'Collecties als pakketten met richtprijs en boekknop aanbieden', 'CRO', 'Midden', 'Hoog'],
  ['Midden', 'Pagina’s per feestlocatie in de regio, te beginnen met de oude rankende locaties', 'Lokaal', 'Hoog', 'Midden'],
  ['Quick win', '/voorbeeld-pagina/ verwijderen en templatecategorieën uit de sitemap halen', 'SEO', 'Laag', 'Laag'],
  ['Quick win', '"Stretchten" corrigeren; één schrijfwijze voor bedrijfsnaam en "Feest DJ"', 'SEO', 'Laag', 'Laag'],
  ['Quick win', 'Over ons-pagina met Rob Houkes: foto, verhaal, jaren ervaring', 'CRO', 'Laag', 'Midden'],
  ['Quick win', 'Facebook- en LinkedIn-links naar bedrijfspagina’s laten wijzen', 'CRO', 'Laag', 'Laag'],
];

const PRIO_FILL = { 'Kritiek': RED, 'Hoog': ROOD_LICHT, 'Midden': AMBER, 'Quick win': GREEN };

const WORKING = [
  ['Technische basis', 'HTTPS, 301’s van http en www, zelfverwijzende canonicals, een open robots.txt en een Yoast-sitemap: de fundering staat.'],
  ['Alt-teksten', 'Alle gecrawlde afbeeldingen hebben een alt-attribuut — bij een fotogedreven site als deze zeldzaam.'],
  ['Stretchtentpagina', '/stretchtenten/ noemt concrete formaten (6×6 tot 10×15 m), aantallen ("twee exemplaren per formaat"), koppelbare opstellingen tot 10×30 m en verkoop. Zo zou elke dienstpagina eruit moeten zien.'],
  ['Collecties', 'Vijf benoemde stijlcollecties maken het aanbod tastbaar en onderscheiden Party Creations van losse verhuurders.'],
  ['Doelgroeppagina’s', 'Aparte pagina’s voor bruiloft, verjaardag, bedrijfsfeest en drie thema’s, elk met een logische kopstructuur.'],
  ['Bestaande zichtbaarheid', 'SE Ranking ziet het domein op 156 zoekwoorden, waarvan 20 in de top 10. Wie de oude URL’s goed doorstuurt, behoudt die voorsprong.'],
];

const STRUCTURE = [
  ['Home', 'Propositie + regio, drie routes (Feest / Verhuur / DJ), pakketten, reviews, werkwijze in 3 stappen, offerteformulier'],
  ['Feesten', 'Bruiloft, Verjaardag, Bedrijfsfeest, Themafeesten (Ibiza, Festival, Industrial)'],
  ['Verhuur', 'Tenten (stretchtenten, easy-ups), Meubilair & bars, Verlichting & LED, Koelingen, Planten & accessoires'],
  ['Pakketten', 'White Ibiza, Black, Moulin Rouge, Velvet Chic, Industrial — elk met richtprijs en boekknop'],
  ['Feest DJ', '/feest-dj/ met eigen tekst, playlists/werkwijze en reviews'],
  ['Locaties', 'Werkgebied plus pagina’s per feestlocatie (Boostenhof, Galerie de Hoeve, …)'],
  ['Over ons / Referenties', 'Rob Houkes, jaren ervaring, cases met naam, locatie, foto en quote'],
  ['Offerte', 'Kort formulier: naam, e-mail/telefoon, datum, soort feest, aantal gasten + optioneel bericht'],
];

// ---------- generic table ----------
function simpleTable(headers, widths, rows, opts = {}) {
  return new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: widths,
    layout: TableLayoutType.FIXED,
    rows: [
      headerRow(headers, widths),
      ...rows.map((r, i) => new TableRow({
        cantSplit: true,
        children: r.map((c, j) => cell(c, widths[j], {
          fill: i % 2 ? ROW_ALT : undefined,
          bold: j === 0,
          size: opts.size || 20,
          align: (opts.center || []).includes(j) ? AlignmentType.CENTER : AlignmentType.LEFT,
        })),
      })),
    ],
  });
}

// ---------- cover ----------
function whiteSpacer(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(new Paragraph({
      spacing: { before: 0, after: 0, line: 240, lineRule: 'exact' },
      children: [new TextRun({ text: ' ', font: BODY, size: 22 })],
    }));
  }
  return out;
}

function coverLine(text, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: opts.before || 0, after: opts.after || 0 },
    border: opts.rule ? { bottom: { style: BorderStyle.SINGLE, size: 12, color: ROOD_DIEP, space: 10 } } : undefined,
    indent: opts.rule ? { left: 3200, right: 3200 } : undefined,
    children: [new TextRun({
      text,
      font: opts.font || BODY,
      size: opts.size || 22,
      bold: opts.bold || false,
      italics: opts.italics || false,
      color: opts.color || ANTRACIET,
    })],
  });
}

function whiteScoreCell(label, score, status) {
  return new TableCell({
    width: { size: 3120, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: BORDER },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: BORDER },
      left: { style: BorderStyle.SINGLE, size: 6, color: BORDER },
      right: { style: BorderStyle.SINGLE, size: 6, color: BORDER },
    },
    margins: { top: 340, bottom: 340, left: 120, right: 120 },
    verticalAlign: VerticalAlign.CENTER,
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 },
        children: [new TextRun({ text: label, font: MONO, size: 17, bold: true, color: GRAY })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 },
        children: [new TextRun({ text: String(score), font: DISPLAY, size: 80, bold: true, color: scoreColor(score) })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: status, font: BODY, size: 19, italics: true, color: GRAY })] }),
    ],
  });
}

const coverChildren = [
  ...whiteSpacer(14),
  coverLine(DOMAIN, { size: 68, bold: true, font: DISPLAY, after: 60, color: ANTRACIET }),
  coverLine('', { size: 2, rule: true, after: 260 }),
  coverLine('SEO & CRO Audit Report', { size: 30, font: DISPLAY, color: '6E6E71', after: 300 }),
  coverLine('Q U I C K   A U D I T', { size: 30, bold: true, font: MONO, color: ANTRACIET, after: 560 }),
  new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: [3120, 3120, 3120],
    layout: TableLayoutType.FIXED,
    rows: [new TableRow({ cantSplit: true, children: SCORES.map((s) => whiteScoreCell(s[0], s[1], s[2])) })],
  }),
  ...whiteSpacer(12),
  coverLine('AUDITDATUM ' + DATE_NL.toUpperCase(), { size: 16, font: MONO, color: GRAY, after: 80 }),
  coverLine('B. ANALYZED MARKETING', { size: 16, font: MONO, bold: true, color: ROOD_DIEP }),
];

// ---------- body ----------
const scoreWidths = [1500, 1100, 1700, 5060];
const total = SCORES.reduce((a, s) => a + s[1], 0);
const scoreTable = new Table({
  width: { size: CW, type: WidthType.DXA },
  columnWidths: scoreWidths,
  layout: TableLayoutType.FIXED,
  rows: [
    headerRow(['Dimensie', 'Score', 'Status', 'Kernpunt'], scoreWidths),
    ...SCORES.map((s, i) => new TableRow({
      cantSplit: true,
      children: [
        cell(s[0], scoreWidths[0], { bold: true, fill: i % 2 ? ROW_ALT : undefined }),
        cell(s[1] + '/10', scoreWidths[1], { fill: scoreColor(s[1]), color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
        cell(s[2], scoreWidths[2], { fill: i % 2 ? ROW_ALT : undefined, align: AlignmentType.CENTER }),
        cell(s[3], scoreWidths[3], { fill: i % 2 ? ROW_ALT : undefined }),
      ],
    })),
    new TableRow({
      cantSplit: true,
      children: [
        cell('Totaal', scoreWidths[0], { bold: true, fill: SECTION_BG }),
        cell(total + '/30', scoreWidths[1], { bold: true, fill: SECTION_BG, align: AlignmentType.CENTER }),
        cell('', scoreWidths[2], { fill: SECTION_BG }),
        cell('', scoreWidths[3], { fill: SECTION_BG }),
      ],
    }),
  ],
});

function greyBox(text) {
  return new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: [CW],
    layout: TableLayoutType.FIXED,
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        width: { size: CW, type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: SECTION_BG, color: 'auto' },
        borders: noBorders,
        margins: { top: 240, bottom: 240, left: 240, right: 240 },
        children: [new Paragraph({ children: [new TextRun({ text, font: BODY, size: 22, color: DARK })] })],
      })],
    })],
  });
}

const summaryBox = greyBox('De nieuwe site van Party Creations staat technisch netjes (https, redirects, canonicals, alt-teksten) en heeft met de stijlcollecties en de stretchtentpagina sterk materiaal in huis. Het grootste probleem is dat de site bezoekers niet overtuigt en niet naar een aanvraag leidt: de homepage heeft geen kop, geen propositie en geen offerteknop, er staan nergens reviews, en de tellers tonen zonder animatie "0+ tevreden klanten". Daarnaast lekt de bestaande zichtbaarheid weg: elf URL’s van de oude site die nog in Google ranken, eindigen in een 404. Titels en meta descriptions zijn niet ingevuld en de regio Venlo komt buiten de contactpagina niet voor. Met een handvol snelle ingrepen (redirects, tellers, titels, hero met CTA, kort formulier) is binnen enkele weken een flinke stap te zetten; daarna loont het om productpagina’s en lokale pagina’s uit te bouwen.');

const pagesTable = simpleTable(['URL', 'Type', 'Opmerking'], [3500, 1600, 4260], PAGES);
const kwTable = simpleTable(['Zoekwoord', 'Volume', 'KD', 'Doelpagina'], [3000, 1100, 800, 4460], KEYWORDS, { center: [1, 2] });
const metaTable = simpleTable(['Pagina', 'Nieuwe titel', 'Nieuwe meta description'], [1700, 3200, 4460], META, { size: 18 });
const structTable = simpleTable(['Onderdeel', 'Inhoud'], [2200, 7160], STRUCTURE);

const prioWidths = [1300, 3760, 1340, 1460, 1500];
const prioTable = new Table({
  width: { size: CW, type: WidthType.DXA },
  columnWidths: prioWidths,
  layout: TableLayoutType.FIXED,
  rows: [
    headerRow(['Prioriteit', 'Issue', 'Dimensie', 'Inspanning', 'Impact'], prioWidths),
    ...PRIORITIES.map((p, i) => new TableRow({
      cantSplit: true,
      children: [
        cell(p[0], prioWidths[0], { fill: PRIO_FILL[p[0]], color: 'FFFFFF', bold: true, align: AlignmentType.CENTER }),
        cell(p[1], prioWidths[1], { fill: i % 2 ? ROW_ALT : undefined }),
        cell(p[2], prioWidths[2], { fill: i % 2 ? ROW_ALT : undefined, align: AlignmentType.CENTER }),
        cell(p[3], prioWidths[3], { fill: i % 2 ? ROW_ALT : undefined, align: AlignmentType.CENTER }),
        cell(p[4], prioWidths[4], { fill: i % 2 ? ROW_ALT : undefined, align: AlignmentType.CENTER }),
      ],
    })),
  ],
});

const workWidths = [2200, 7160];
const workingTable = new Table({
  width: { size: CW, type: WidthType.DXA },
  columnWidths: workWidths,
  layout: TableLayoutType.FIXED,
  rows: [
    headerRow(['Sterkte', 'Bewijs uit de crawl'], workWidths),
    ...WORKING.map((w) => new TableRow({
      cantSplit: true,
      children: [cell(w[0], workWidths[0], { fill: GREEN_BG, bold: true }), cell(w[1], workWidths[1], { fill: GREEN_BG })],
    })),
  ],
});

const spacer = () => new Paragraph({ spacing: { after: 200 }, children: [] });

const bodyChildren = [
  h1('Executive Summary'),
  summaryBox,
  spacer(),
  scoreTable,

  h1('Pagina’s in deze audit'),
  body('Alle 25 pagina’s uit de sitemap zijn op 11 oktober 2026 gecrawld. Zoekwoorddata en huidige posities komen uit SE Ranking (database Nederland). Dit zijn de pagina’s waar de bevindingen naar verwijzen:'),
  pagesTable,

  new Paragraph({ children: [new PageBreak()] }),
  h1('SEO-analyse'),
  sub('Score: 4/10 — Needs Work'),
  h2('Techniek en on-page'),
  signalTable(SEO_TECH),
  h2('Contentkwaliteit'),
  signalTable(SEO_CONTENT),
  h2('Gestructureerde data'),
  signalTable(SEO_SCHEMA),

  new Paragraph({ children: [new PageBreak()] }),
  h1('Zoekwoordkansen'),
  body('Landelijk zoekvolume per maand (SE Ranking, NL) met moeilijkheidsgraad (KD, 0-100). De volumes met een plaatsnaam zijn klein, maar hebben de hoogste koopintentie. Het domein staat nu op 156 zoekwoorden met naar schatting 25 bezoeken per maand; vrijwel al die posities komen van de oude locatiepagina’s. Op generieke termen staat de site hooguit op positie 24 ("dj venlo", "partytentverhuur venlo").'),
  kwTable,
  h2('Voorstel titels en meta descriptions'),
  body('Elke titel noemt het zoekwoord en waar mogelijk de regio; elke description eindigt met een actie. Lengtes blijven onder 65 en 160 tekens.'),
  metaTable,

  new Paragraph({ children: [new PageBreak()] }),
  h1('CRO-analyse'),
  sub('Score: 4/10 — Needs Work'),
  body('CRO (conversie-optimalisatie) kijkt naar wat een bezoeker nodig heeft om een aanvraag te doen: snappen wat je aanbiedt, vertrouwen dat het goed komt, en een makkelijke volgende stap. Beoordeeld op basis van de HTML en de paginastructuur; er was nog geen gedragsdata beschikbaar.'),
  signalTable(CRO_ROWS),

  h1('Lokale vindbaarheid'),
  sub('Score: 3/10 — Kritiek'),
  signalTable(LOCAL_ROWS),

  new Paragraph({ children: [new PageBreak()] }),
  h1('Prioriteiten'),
  body('Gerangschikt op urgentie. Inspanning is een schatting van de doorlooptijd, impact van het effect op zichtbaarheid en aanvragen.'),
  prioTable,

  h1('Voorgestelde sitestructuur'),
  body('Een structuur die zoekwoorden én de beslisroute van de bezoeker volgt. Een uitgewerkt prototype met deze structuur en CRO-elementen wordt apart opgeleverd.'),
  structTable,

  new Paragraph({ children: [new PageBreak()] }),
  h1('Wat goed werkt'),
  workingTable,

  h1('Wat deze audit niet kon meten'),
  body('Deze analyse leest de HTML zoals die wordt uitgeleverd. Een aantal signalen valt daarbuiten:'),
  bullet('Core Web Vitals en laadtijd: meet via pagespeed.web.dev, met name voor de productpagina’s met 50-90 foto’s.'),
  bullet('Visuele en mobiele weergave: screenshots waren in deze sessie niet beschikbaar. De CRO-bevindingen zijn gebaseerd op de paginastructuur, niet op een visuele beoordeling.'),
  bullet('Of Google de tellers als 0 of als echte waarde indexeert: controleer via de URL-inspectie in Search Console.'),
  bullet('Backlinks naar de oude URL’s: bepaal met SE Ranking of Search Console welke links er zijn voordat je de redirectdoelen kiest.'),
  bullet('Google Bedrijfsprofiel, reviews en werkelijke zoekprestaties: niet gekoppeld.'),
  bullet('Gedragsdata (heatmaps, formulier-uitval): pas mogelijk nadat tracking is ingericht.'),
];

// ---------- document ----------
const doc = new Document({
  styles: { default: { document: { run: { font: BODY, size: 21, color: ANTRACIET } } } },
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{ level: 0, format: 'bullet', text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 460, hanging: 260 } } } }],
    }],
  },
  sections: [
    {
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: coverChildren,
    },
    {
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 720, footer: 720 } } },
      headers: {
        default: new Header({
          children: [new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: CW }],
            border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ROOD_DIEP, space: 6 } },
            children: [
              new TextRun({ text: DOMAIN, font: MONO, size: 17, bold: true, color: ROOD_DIEP }),
              new TextRun({ children: [new Tab(), 'SEO & CRO AUDIT REPORT'], font: MONO, size: 16, color: GRAY }),
            ],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            tabStops: [{ type: TabStopType.RIGHT, position: CW }],
            border: { top: { style: BorderStyle.SINGLE, size: 6, color: BORDER, space: 6 } },
            children: [
              new TextRun({ text: 'B. ANALYZED MARKETING', font: MONO, size: 16, bold: true, color: ROOD_DIEP }),
              new TextRun({ children: [new Tab(), PageNumber.CURRENT], font: MONO, size: 16, color: GRAY }),
            ],
          })],
        }),
      },
      children: bodyChildren,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(process.argv[2], buffer);
  console.log('DOCX written');
});
