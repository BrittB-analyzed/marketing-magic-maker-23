/**
 * AEO-content per pagina: definiërende openingszin, vraagkoppen met
 * zelfstandige antwoorden (40 tot 60 woorden), een vergelijkingstabel,
 * een genummerde stappenlijst, een opsomming en extra FAQ-vragen.
 *
 * Sleutel = URL-pad met slash aan het eind.
 */

import type { Comparison, QaItem } from "@/components/site/aeo";
import type { Faq } from "@/components/site/page-bits";

export type AeoEntry = {
  /** Eén zin: "X is ...". Staat direct onder de H1. */
  definition: string;
  /** Naam van de dienst voor Service-schema. */
  serviceName?: string;
  /** Kruimelpad-label. */
  breadcrumb?: string;
  qa: QaItem[];
  comparison?: Comparison;
  steps?: { title: string; intro?: string; items: string[] };
  bullets?: { title: string; items: string[] };
  faq?: Faq[];
};

const SEO_ADS_TABEL: Comparison = {
  title: "Wanneer kies je SEO, wanneer Ads en wanneer allebei?",
  intro: "SEO bouwt een basis die blijft, Ads levert vandaag verkeer. De meeste MKB-bedrijven doen beide.",
  columns: ["Situatie", "SEO", "Google Ads"],
  rows: [
    ["Je wilt binnen een week aanvragen", "Nee, effect komt na 3 tot 6 maanden", "Ja, binnen enkele dagen zichtbaar"],
    ["Je wilt kosten per lead verlagen", "Ja, verkeer is niet per klik betaald", "Beperkt, je betaalt per klik"],
    ["Je lanceert een nieuw product", "Later, na validatie", "Ja, je test vraag en zoektermen direct"],
    ["Je budget is beperkt", "Ja, opbouw met blijvend effect", "Alleen bij een scherpe campagne"],
    ["Je markt is sterk concurrerend", "Ja, autoriteit is je voorsprong", "Ja, maar de klikprijs loopt op"],
    ["Beste rendement op lange termijn", "Ja", "Aanvullend"],
  ],
};

export const AEO: Record<string, AeoEntry> = {
  "/online-marketing/": {
    definition:
      "Online marketing uitbesteden is het overdragen van je vindbaarheid, advertenties en conversie-optimalisatie aan een vast team dat de strategie bedenkt, uitvoert en maandelijks verantwoordt.",
    serviceName: "Online marketing",
    breadcrumb: "Online marketing",
    qa: [
      {
        q: "Wat kost online marketing uitbesteden?",
        a: "Online marketing uitbesteden bij B. Analyzed start bij 999 euro per maand voor een doorlopend pakket met SEO, GEO, Ads en CRO. Een eenmalige uitgebreide audit kost vanaf 599 euro. Los maatwerk factureren we tegen 90 euro per uur, altijd tegen een vooraf afgesproken vaste prijs.",
      },
      {
        q: "Hoe lang duurt het voor online marketing resultaat geeft?",
        a: "Google Ads levert binnen enkele dagen de eerste aanvragen. Conversie-optimalisatie geeft doorgaans binnen vier tot acht weken effect. SEO en GEO laten de eerste stijging na dertig tot zestig dagen zien en bouwen structureel door in zes tot twaalf maanden, afhankelijk van je concurrentie.",
      },
      {
        q: "Wanneer kies je voor een bureau in plaats van een eigen marketeer?",
        a: "Kies een bureau wanneer je meerdere disciplines tegelijk nodig hebt en geen fulltime salaris wilt dragen. Eén interne marketeer beheerst zelden techniek, content, advertenties en analyse tegelijk. Bij ons werk je met één vast aanspreekpunt dat specialisten inschakelt waar dat nodig is.",
      },
    ],
    comparison: SEO_ADS_TABEL,
    steps: {
      title: "Zo verloopt een traject in vier stappen",
      items: [
        "Nulmeting: we leggen je huidige posities, AI-vermeldingen, verkeer en conversies vast.",
        "Strategie: we bepalen welke pijlers het snelst rendement geven en in welke volgorde.",
        "Uitvoering: techniek, content, campagnes en conversiepunten worden aangepakt.",
        "Rapportage: elke maand een video met wat er gedaan is en wat het opleverde.",
      ],
    },
    bullets: {
      title: "Wat inbegrepen is",
      items: [
        "Eén vast aanspreekpunt, geen accountmanager",
        "Maandelijkse videorapportage plus 24/7 dashboard",
        "Eigendom van accounts, content en data blijft bij jou",
        "Vaste prijs vooraf, geen nacalculatie",
      ],
    },
  },

  "/online-marketing/seo-uitbesteden/": {
    definition:
      "SEO uitbesteden is het onderbrengen van je zoekmachineoptimalisatie bij een specialist die techniek, content en autoriteit van je website structureel verbetert zodat je hoger in Google komt.",
    serviceName: "SEO uitbesteden",
    breadcrumb: "SEO uitbesteden",
    qa: [
      {
        q: "Wat kost SEO uitbesteden per maand?",
        a: "SEO uitbesteden bij B. Analyzed kost vanaf 999 euro per maand, inclusief GEO. Een losse uitgebreide audit met concrete actiepunten kost vanaf 599 euro. De prijs hangt af van je markt, de omvang van je website en hoeveel werk wij zelf uitvoeren in plaats van je eigen team.",
      },
      {
        q: "Hoe lang duurt het voordat SEO werkt?",
        a: "De eerste quick wins uit techniek en bestaande pagina's zijn meestal binnen dertig tot zestig dagen zichtbaar. Structurele groei in posities en organisch verkeer bouw je op in zes tot twaalf maanden. Hoe sterker je concurrentie en hoe zwakker je startpositie, hoe langer die opbouw duurt.",
      },
      {
        q: "Wanneer kies je voor SEO uitbesteden?",
        a: "Kies voor uitbesteden wanneer je geen tijd of kennis hebt om techniek, content en linkbuilding structureel bij te houden, of wanneer je afhankelijk bent van advertentiebudget voor elke lead. Een specialist verdient zichzelf terug zodra organisch verkeer je kosten per aanvraag verlaagt.",
      },
    ],
    comparison: SEO_ADS_TABEL,
  },

  "/online-marketing/geo-optimalisatie/": {
    definition:
      "GEO, generative engine optimization, is het optimaliseren van je website zodat AI-systemen zoals ChatGPT, Gemini, Perplexity en Google AI Overviews jouw bedrijf noemen en citeren in hun antwoorden.",
    serviceName: "GEO-optimalisatie",
    breadcrumb: "GEO-optimalisatie",
    qa: [
      {
        q: "Wat kost GEO-optimalisatie?",
        a: "GEO zit standaard in het SEO- en GEO-pakket van B. Analyzed vanaf 999 euro per maand. Wil je eerst weten waar je staat, dan kost een losse AI-scan met nulmeting en promptset vanaf 599 euro. Je betaalt altijd een vooraf afgesproken vaste prijs, zonder nacalculatie.",
      },
      {
        q: "Hoe lang duurt het voordat GEO effect heeft?",
        a: "De eerste verschuivingen in AI-antwoorden zien we doorgaans na zes tot twaalf weken, zodra herschreven pagina's opnieuw gecrawld en verwerkt zijn. Omdat modellen periodiek bijwerken, meten we maandelijks met een vaste promptset zodat groei per model zichtbaar wordt in plaats van geschat.",
      },
      {
        q: "Wanneer kies je voor GEO naast SEO?",
        a: "Kies GEO zodra je doelgroep vragen stelt aan AI in plaats van te klikken op zoekresultaten, bijvoorbeeld bij vergelijkingen en leverancierkeuzes. GEO werkt alleen op een gezonde SEO-basis: zonder schone techniek en sterke content vinden AI-modellen je content simpelweg niet terug.",
      },
    ],
    steps: {
      title: "Zo maken we je citeerbaar in AI-antwoorden",
      items: [
        "Nulmeting: 20 tot 50 realistische prompts door ChatGPT, Perplexity, Gemini en AI Overviews.",
        "Herstructureren: het antwoord vooraan, koppen in de vraagvorm die je doelgroep gebruikt.",
        "Feiten en schema: cijfers, definities en Article-, FAQPage- en Organization-markup toevoegen.",
        "Crawler-toegang: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot en Google-Extended toelaten.",
        "Monitoring: maandelijks meten waar je genoemd wordt en naast welke concurrenten.",
      ],
    },
    bullets: {
      title: "AI-systemen die we monitoren",
      items: [
        "ChatGPT en OAI-SearchBot",
        "Google AI Overviews en Gemini",
        "Perplexity",
        "Claude",
      ],
    },
  },

  "/online-marketing/google-ads-uitbesteden/": {
    definition:
      "Google Ads uitbesteden is het laten opzetten en dagelijks bijsturen van je advertentiecampagnes door een specialist die stuurt op aanvragen en omzet in plaats van op klikken.",
    serviceName: "Google Ads uitbesteden",
    breadcrumb: "Google Ads",
    qa: [
      {
        q: "Wat kost Google Ads uitbesteden?",
        a: "Het beheer van Google Ads start bij 499 euro per maand, los van je advertentiebudget dat je rechtstreeks aan Google betaalt. Voor de meeste MKB-bedrijven werkt een startbudget vanaf 750 euro per maand. Beheer en budget houden we altijd gescheiden, zodat je precies ziet waar je geld heen gaat.",
      },
      {
        q: "Hoe snel leveren Google Ads aanvragen op?",
        a: "Een correct opgezette campagne levert meestal binnen enkele dagen de eerste klikken en aanvragen. De eerste twee tot vier weken gebruiken we om zoektermen, biedingen en advertenties bij te sturen. Daarna daalt de kosten per aanvraag doorgaans doordat verspilling uit de campagne verdwijnt.",
      },
      {
        q: "Wanneer kies je Google Ads en wanneer SEO?",
        a: "Kies Google Ads wanneer je snel wilt weten of er vraag is, wanneer je een actie of nieuw product lanceert of wanneer je seizoenspieken wilt benutten. Kies SEO wanneer je de kosten per aanvraag structureel wilt verlagen. In de praktijk versterken de twee kanalen elkaar met dezelfde zoektermdata.",
      },
    ],
    comparison: SEO_ADS_TABEL,
  },

  "/online-marketing/conversie-optimalisatie/": {
    definition:
      "Conversie-optimalisatie is het systematisch verbeteren van een website zodat een groter deel van de bezoekers een aanvraag doet, belt of bestelt.",
    serviceName: "Conversie-optimalisatie (CRO)",
    breadcrumb: "Conversie-optimalisatie",
    qa: [
      {
        q: "Wat kost conversie-optimalisatie?",
        a: "Conversie-optimalisatie start bij 999 euro per maand en is in te zetten als onderdeel van het pakket of als losse schijf. Daarin zit onderzoek, het doorvoeren van aanpassingen, het inrichten van meting in GA4 en een maandelijkse rapportage op conversieratio en leadkwaliteit.",
      },
      {
        q: "Hoeveel bezoekers heb je nodig voor A/B-testen?",
        a: "Voor statistisch betrouwbare A/B-tests heb je per variant enkele honderden conversies nodig, wat in de praktijk neerkomt op duizenden bezoekers per maand. Heb je dat volume niet, dan starten we kwalitatief: sessieopnames in Microsoft Clarity, formulieranalyse en gebruikersfeedback leveren dan de grootste winst.",
      },
      {
        q: "Wanneer kies je voor CRO in plaats van meer verkeer?",
        a: "Kies CRO wanneer je verkeer wel groeit maar je aanvragen achterblijven, of wanneer je advertentiekosten per lead te hoog worden. Elke procentpunt conversiestijging verhoogt het rendement van SEO, GEO en Ads tegelijk, zonder dat je één euro extra advertentiebudget uitgeeft.",
      },
    ],
    comparison: {
      title: "Wanneer kies je CRO, wanneer meer verkeer?",
      intro: "Meer bezoekers en een hogere conversieratio lossen verschillende problemen op.",
      columns: ["Situatie", "Conversie-optimalisatie", "Meer verkeer (SEO of Ads)"],
      rows: [
        ["Veel bezoek, weinig aanvragen", "Ja, hier zit je winst", "Nee, verergert het probleem"],
        ["Weinig bezoek, goede conversieratio", "Beperkt", "Ja, schaal het verkeer op"],
        ["Hoge kosten per lead in Ads", "Ja, verlaagt de kosten direct", "Alleen met betere targeting"],
        ["Formulier met veel afhakers", "Ja, herontwerp in stappen", "Nee"],
        ["Snelheid van effect", "4 tot 8 weken", "Ads dagen, SEO maanden"],
      ],
    },
  },

  "/online-marketing/local-seo/": {
    definition:
      "Local SEO is het optimaliseren van je vindbaarheid in Google Maps, het lokale pakket en zoekopdrachten met een plaatsnaam, zodat klanten uit je eigen werkgebied je vinden.",
    serviceName: "Local SEO",
    breadcrumb: "Local SEO",
    qa: [
      {
        q: "Wat kost local SEO?",
        a: "Local SEO voeren we uit binnen het maandpakket vanaf 999 euro per maand, of als losse opdracht tegen 90 euro per uur. Het inrichten en optimaliseren van een Google Bedrijfsprofiel inclusief categorieën, foto's, diensten en reviewstrategie is doorgaans in enkele uren gedaan.",
      },
      {
        q: "Hoe lang duurt het voor je in Google Maps stijgt?",
        a: "Een goed ingericht Google Bedrijfsprofiel geeft vaak binnen twee tot zes weken zichtbaar effect in het lokale pakket. Structurele stijging in concurrerende steden vraagt drie tot zes maanden, omdat reviews, lokale vermeldingen en relevante pagina's zich eerst moeten opbouwen.",
      },
      {
        q: "Wanneer kies je voor local SEO?",
        a: "Kies local SEO wanneer je klanten uit een afgebakend gebied haalt: installateurs, klinieken, showrooms, horeca en dienstverleners met een servicegebied. Verkoop je landelijk online, dan levert reguliere SEO en GEO meer op dan optimalisatie op plaatsnamen.",
      },
    ],
    comparison: {
      title: "Local SEO of landelijke SEO?",
      columns: ["Situatie", "Local SEO", "Landelijke SEO"],
      rows: [
        ["Klanten komen uit je regio", "Ja", "Aanvullend"],
        ["Webshop met landelijke bezorging", "Beperkt", "Ja"],
        ["Fysieke vestiging of showroom", "Ja, Google Maps is doorslaggevend", "Aanvullend"],
        ["Belangrijkste kanaal", "Google Bedrijfsprofiel en reviews", "Content en autoriteit"],
        ["Snelheid van effect", "2 tot 6 weken", "3 tot 12 maanden"],
      ],
    },
  },

  "/online-marketing/linkbuilding-uitbesteden/": {
    definition:
      "Linkbuilding is het opbouwen van verwijzingen vanaf relevante externe websites naar jouw site, zodat Google je domein als betrouwbaarder beoordeelt en je hoger kunt ranken.",
    serviceName: "Linkbuilding uitbesteden",
    breadcrumb: "Linkbuilding",
    qa: [
      {
        q: "Wat kost linkbuilding uitbesteden?",
        a: "Linkbuildingpakketten starten bij 125 euro per maand en lopen op met het aantal en de kwaliteit van de plaatsingen. We werken met een netwerk van meer dan 3.500 sites, plaatsen vanaf Nederlandse IP-adressen en hanteren een minimale domeinautoriteit per link.",
      },
      {
        q: "Hoeveel links heb je per maand nodig?",
        a: "Voor de meeste MKB-websites volstaan twee tot vijf relevante links per maand. In sterk concurrerende markten ligt dat hoger. Belangrijker dan het aantal is de spreiding: variatie in ankerteksten, domeinen en paginatypes voorkomt dat je linkprofiel onnatuurlijk oogt.",
      },
      {
        q: "Wanneer kies je voor linkbuilding?",
        a: "Kies linkbuilding pas wanneer je techniek en content op orde zijn. Links versterken bestaande kwaliteit, ze compenseren geen dunne pagina's. Sta je vast op pagina twee terwijl je content beter is dan die van de concurrent, dan is autoriteit meestal de ontbrekende factor.",
      },
    ],
    comparison: {
      title: "Wanneer kies je linkbuilding, wanneer content?",
      columns: ["Situatie", "Linkbuilding", "Content"],
      rows: [
        ["Je pagina's zijn dun of onvolledig", "Nee", "Ja, eerst content"],
        ["Sterke content, toch positie 11 tot 20", "Ja", "Beperkt"],
        ["Nieuw domein zonder autoriteit", "Ja, gefaseerd opbouwen", "Ja, parallel"],
        ["Concurrenten hebben veel meer links", "Ja", "Aanvullend"],
        ["Effect zichtbaar na", "2 tot 4 maanden", "1 tot 3 maanden"],
      ],
    },
  },

  "/online-marketing/seo-teksten-laten-schrijven/": {
    definition:
      "SEO-teksten laten schrijven is het uitbesteden van webteksten die zowel de zoekvraag van je doelgroep beantwoorden als door Google en AI-systemen goed te interpreteren zijn.",
    serviceName: "SEO-teksten laten schrijven",
    breadcrumb: "SEO-teksten",
    qa: [
      {
        q: "Wat kost een SEO-tekst?",
        a: "SEO-teksten schrijven we tegen 90 euro per uur, of binnen het maandpakket vanaf 999 euro per maand. Een goed onderbouwde pagina van 700 tot 1.200 woorden inclusief zoekwoordonderzoek, structuur, interne links en optimalisatie kost doorgaans drie tot vijf uur.",
      },
      {
        q: "Hoe lang moet een SEO-tekst zijn?",
        a: "De lengte volgt uit de zoekvraag, niet uit een norm. Een servicepagina heeft vaak genoeg aan 600 tot 900 woorden, een vergelijkend artikel vraagt er al snel 1.500. Belangrijker dan lengte is dat het antwoord bovenaan staat en dat elke alinea zelfstandig te lezen is.",
      },
      {
        q: "Wanneer kies je voor herschrijven in plaats van nieuwe pagina's?",
        a: "Kies herschrijven wanneer een pagina al vertoningen krijgt maar blijft steken op positie elf tot twintig. Die pagina heeft autoriteit die je meeneemt. Nieuwe pagina's maak je alleen voor zoekvragen die nog nergens op je site behandeld worden, om kannibalisatie te voorkomen.",
      },
    ],
    comparison: {
      title: "Herschrijven of nieuwe pagina maken?",
      columns: ["Situatie", "Bestaande pagina herschrijven", "Nieuwe pagina maken"],
      rows: [
        ["Pagina staat op positie 11 tot 20", "Ja", "Nee, kannibalisatie"],
        ["Zoekvraag komt nergens voor op je site", "Nee", "Ja"],
        ["Tekst is verouderd of te dun", "Ja", "Alleen bij ander onderwerp"],
        ["Doorlooptijd", "1 tot 2 weken", "2 tot 4 weken"],
      ],
    },
  },

  "/online-marketing/social-media-marketing/": {
    definition:
      "Social media marketing is het inzetten van kanalen als LinkedIn, Instagram, Facebook en TikTok om bereik, herkenning en verkeer op te bouwen dat je andere marketingkanalen versterkt.",
    serviceName: "Social media marketing",
    breadcrumb: "Social media marketing",
    qa: [
      {
        q: "Wat kost social media marketing uitbesteden?",
        a: "Social media begeleiding voeren we uit binnen het maandpakket vanaf 999 euro per maand of los tegen 90 euro per uur. Advertentiebudget staat daar los van en betaal je rechtstreeks aan het platform, zodat je altijd ziet wat beheer kost en wat mediabudget is.",
      },
      {
        q: "Welk kanaal kies je voor B2B en welk voor B2C?",
        a: "Voor B2B levert LinkedIn doorgaans de beste kwaliteit contacten, aangevuld met e-mail en zoekverkeer. Voor B2C werken Instagram, Facebook en TikTok beter door bereik en visuele producten. De keuze volgt uit waar jouw doelgroep aantoonbaar actief is, niet uit de populariteit van een platform.",
      },
      {
        q: "Wanneer kies je voor social media naast SEO en Ads?",
        a: "Kies social media wanneer je merkherkenning nodig hebt voor een aankoop met een langere beslistermijn, of wanneer je product visueel overtuigt. Zoekverkeer bedient bestaande vraag, social creëert vraag. Zonder een converterende website blijft het effect van beide kanalen echter beperkt.",
      },
    ],
    comparison: {
      title: "Social media of zoekmachinemarketing?",
      columns: ["Doel", "Social media", "SEO en Ads"],
      rows: [
        ["Bestaande vraag afvangen", "Beperkt", "Ja"],
        ["Nieuwe vraag creëren", "Ja", "Beperkt"],
        ["Zichtbaar merk opbouwen", "Ja", "Aanvullend"],
        ["Direct meetbare aanvragen", "Wisselend", "Ja"],
        ["Snelheid van effect", "Weken", "Ads dagen, SEO maanden"],
      ],
    },
  },

  "/online-marketing/emailmarketing/": {
    definition:
      "E-mailmarketing is het structureel benaderen van je eigen contactenbestand met relevante berichten, zodat je omzet haalt uit mensen die je al kent zonder per klik te betalen.",
    serviceName: "E-mailmarketing",
    breadcrumb: "E-mailmarketing",
    qa: [
      {
        q: "Wat kost e-mailmarketing uitbesteden?",
        a: "E-mailmarketing zetten we op binnen het maandpakket vanaf 999 euro per maand of los tegen 90 euro per uur. De software zelf kost bij de meeste aanbieders tussen de 20 en 100 euro per maand, afhankelijk van de omvang van je contactenbestand.",
      },
      {
        q: "Hoe vaak moet je een nieuwsbrief sturen?",
        a: "Voor de meeste MKB-bedrijven werkt één tot twee keer per maand het beste. Vaker mag, mits elke mail iets oplevert voor de lezer. Frequentie is minder bepalend dan relevantie: segmenteren op interesse of aankoopgedrag verhoogt je opens en klikken meer dan extra verzendmomenten.",
      },
      {
        q: "Wanneer kies je voor geautomatiseerde flows?",
        a: "Kies automatisering zodra je terugkerende momenten hebt: een welkomstreeks na inschrijving, een herinnering bij een niet-afgeronde aanvraag of een opvolging na levering. Flows draaien eenmalig ingericht door en leveren doorgaans meer omzet per contact op dan losse nieuwsbrieven.",
      },
    ],
    comparison: {
      title: "Nieuwsbrief of geautomatiseerde flow?",
      columns: ["Doel", "Nieuwsbrief", "Automatische flow"],
      rows: [
        ["Actueel nieuws of aanbieding", "Ja", "Nee"],
        ["Nieuwe inschrijver opwarmen", "Beperkt", "Ja, welkomstreeks"],
        ["Niet-afgeronde aanvraag opvolgen", "Nee", "Ja"],
        ["Werk per verzending", "Elke keer opnieuw", "Eenmalig inrichten"],
      ],
    },
  },

  "/online-marketing/display-advertisement/": {
    definition:
      "Display advertising is het tonen van visuele advertenties op websites, apps en YouTube binnen het Google Display Netwerk, gericht op bereik en herhaling in plaats van directe zoekvraag.",
    serviceName: "Display advertising",
    breadcrumb: "Display advertising",
    qa: [
      {
        q: "Wat kost display advertising?",
        a: "Het beheer van display-campagnes start bij 499 euro per maand, los van je mediabudget. Klikprijzen in het Display Netwerk liggen fors lager dan in zoekadvertenties, waardoor een budget van 250 tot 500 euro per maand vaak al voldoende bereik oplevert voor een MKB-bedrijf.",
      },
      {
        q: "Werkt display advertising voor het MKB?",
        a: "Display werkt goed voor herhaling en naamsbekendheid, en het beste als remarketing naar mensen die je site al bezochten. Als koud kanaal voor directe aanvragen presteert het zwakker dan zoekadvertenties, omdat je mensen bereikt die op dat moment niet naar jouw oplossing zoeken.",
      },
      {
        q: "Wanneer kies je display in plaats van zoekadvertenties?",
        a: "Kies display wanneer je bereik of herkenning nodig hebt, een langere beslistermijn overbrugt of bezoekers wilt terughalen die niet converteerden. Kies zoekadvertenties wanneer je directe aanvragen wilt van mensen die actief zoeken. In de praktijk werkt de combinatie het beste.",
      },
    ],
    comparison: {
      title: "Display of zoekadvertenties?",
      columns: ["Doel", "Display", "Zoekadvertenties"],
      rows: [
        ["Directe aanvraag", "Beperkt", "Ja"],
        ["Naamsbekendheid opbouwen", "Ja", "Beperkt"],
        ["Bezoekers terughalen", "Ja, remarketing", "Aanvullend"],
        ["Kosten per klik", "Laag", "Hoger"],
        ["Beste inzet", "Herhaling en bereik", "Bestaande vraag"],
      ],
    },
    faq: [
      { q: "Wat is het Google Display Netwerk?", a: "Een netwerk van miljoenen websites, apps en YouTube waarop Google visuele advertenties toont. Je bereikt daarmee mensen tijdens het lezen of kijken, niet tijdens het zoeken." },
      { q: "Maken jullie de banners?", a: "Ja. We leveren responsieve advertenties op basis van je huisstijl, of werken met bestaande beeldmiddelen van je eigen ontwerper." },
      { q: "Hoe meet je het resultaat van display?", a: "We meten conversies na weergave en na klik in GA4 en Google Ads, en beoordelen display altijd in samenhang met je zoekcampagnes en direct verkeer." },
      { q: "Kan ik display los afnemen?", a: "Ja. Display kan los, maar levert het meeste op als remarketing naast lopende zoekcampagnes of SEO." },
    ],
  },

  "/online-marketing/google-tag-manager-inrichten/": {
    definition:
      "Google Tag Manager inrichten is het centraal opzetten van alle metingen en trackingcodes op je website, zodat je betrouwbaar ziet welke marketinginspanning welke aanvraag oplevert.",
    serviceName: "Google Tag Manager inrichten",
    breadcrumb: "Google Tag Manager",
    qa: [
      {
        q: "Wat kost het inrichten van Google Tag Manager?",
        a: "Een volledige inrichting van Tag Manager en GA4 met doelen, formulier-events en e-commerce meting kost doorgaans vier tot acht uur tegen 90 euro per uur. Binnen het maandpakket vanaf 999 euro per maand valt het onder de reguliere werkzaamheden.",
      },
      {
        q: "Wat is het verschil tussen GA4 en Tag Manager?",
        a: "GA4 is het analysepakket waarin je bezoekers en conversies rapporteert. Tag Manager is de laag daarboven waarmee je bepaalt welke codes en events wanneer afvuren. Zonder Tag Manager moet elke wijziging via je websitebouwer, met Tag Manager beheer je dat zelf.",
      },
      {
        q: "Wanneer kies je voor server-side tracking?",
        a: "Kies server-side tracking wanneer adblockers en browserbeperkingen aantoonbaar data kosten, of wanneer je advertentieplatformen betrouwbare conversiedata wilt teruggeven. Voor de meeste MKB-websites is een correct ingerichte client-side meting met consent mode voorlopig voldoende.",
      },
    ],
    comparison: {
      title: "Los meten of via Tag Manager?",
      columns: ["Aspect", "Codes los in de website", "Google Tag Manager"],
      rows: [
        ["Wijziging doorvoeren", "Via je websitebouwer", "Zelf, binnen minuten"],
        ["Overzicht van actieve tags", "Verspreid", "Eén dashboard"],
        ["Foutkans bij updates", "Hoog", "Laag, met preview-modus"],
        ["Consent en privacy", "Handmatig per script", "Centraal geregeld"],
      ],
    },
  },

  "/online-marketing/wordpress-onderhoud/": {
    definition:
      "WordPress onderhoud is het periodiek bijwerken, beveiligen, back-uppen en versnellen van je WordPress-website, zodat storingen, hacks en snelheidsverlies je geen bezoekers kosten.",
    serviceName: "WordPress onderhoud",
    breadcrumb: "WordPress onderhoud",
    qa: [
      {
        q: "Wat kost WordPress onderhoud per maand?",
        a: "WordPress onderhoud voeren we uit tegen 90 euro per uur of als vast onderdeel van het maandpakket. Voor een gemiddelde MKB-website kost regulier onderhoud met updates, back-ups, beveiliging en een snelheidscontrole ongeveer één tot twee uur per maand.",
      },
      {
        q: "Hoe vaak moet WordPress worden bijgewerkt?",
        a: "Plugins en core werken we maandelijks bij, en beveiligingsupdates direct bij verschijnen. Updates draaien eerst op een testomgeving zodat een incompatibele plugin je site niet plat legt. Na elke update controleren we formulieren, snelheid en indexatie.",
      },
      {
        q: "Wanneer kies je voor onderhoud in plaats van een nieuwe site?",
        a: "Kies onderhoud wanneer de structuur, snelheid en conversie in de basis kloppen en alleen techniek achterloopt. Kies een nieuwe site wanneer het thema niet meer ondersteund wordt, de laadtijd structureel te hoog is of de site niet meegroeit met je diensten.",
      },
    ],
    comparison: {
      title: "Onderhouden of opnieuw bouwen?",
      columns: ["Signaal", "Onderhoud volstaat", "Nieuwe website"],
      rows: [
        ["Verouderde plugins, verder gezond", "Ja", "Nee"],
        ["Laadtijd boven 4 seconden mobiel", "Beperkt", "Ja"],
        ["Thema niet meer ondersteund", "Nee", "Ja"],
        ["Structuur past niet bij je diensten", "Nee", "Ja"],
        ["Kosten", "Vanaf 90 euro per uur", "Vanaf 499 euro"],
      ],
    },
  },

  "/online-marketing/website-advies/": {
    definition:
      "Website advies is een onafhankelijke beoordeling van je huidige website op techniek, structuur, content en conversie, met een onderbouwd oordeel of doorontwikkelen slimmer is dan opnieuw bouwen.",
    serviceName: "Website advies",
    breadcrumb: "Website advies",
    qa: [
      {
        q: "Wat kost website advies?",
        a: "Een uitgebreid website-advies met analyse, prioriteitenlijst en persoonlijke toelichting kost vanaf 599 euro eenmalig. Wil je alleen een eerste indruk, dan kun je de gratis scan aanvragen: daarin krijg je een videoanalyse met de drie punten die het meeste opleveren.",
      },
      {
        q: "Hoe weet je of je een nieuwe website nodig hebt?",
        a: "Een nieuwe website is nodig wanneer de laadtijd structureel te hoog is, het CMS of thema niet meer ondersteund wordt, of de structuur niet meer past bij je diensten. Bij twijfel is doorontwikkelen bijna altijd goedkoper en behoud je bestaande posities in Google.",
      },
      {
        q: "Wanneer schakel je website advies in?",
        a: "Schakel advies in vóórdat je een offerte voor een nieuwe website tekent. Een verkeerde migratie kost posities die je jaren hebt opgebouwd. We beoordelen de offerte, bewaken het redirectplan en zorgen dat techniek en conversie vanaf dag één meegenomen worden.",
      },
    ],
    comparison: {
      title: "Doorontwikkelen of nieuw bouwen?",
      columns: ["Aspect", "Doorontwikkelen", "Nieuw bouwen"],
      rows: [
        ["Kosten", "Lager, gefaseerd", "Vanaf 499 euro, eenmalig hoger"],
        ["Behoud van Google-posities", "Hoog", "Alleen met goed redirectplan"],
        ["Doorlooptijd", "Weken", "Maanden"],
        ["Geschikt bij verouderd CMS", "Nee", "Ja"],
        ["Geschikt bij goede basis", "Ja", "Nee"],
      ],
    },
    faq: [
      { q: "Wat krijg ik bij een website advies?", a: "Een analyse van techniek, snelheid, content en conversie, een prioriteitenlijst met verwacht effect en benodigde inspanning, en een persoonlijke toelichting per video of gesprek." },
      { q: "Beoordelen jullie ook offertes van webbouwers?", a: "Ja. We lezen de offerte door op ontbrekende onderdelen zoals redirects, meting, snelheid en eigendom van de code, zodat je niet voor verrassingen komt te staan." },
      { q: "Behoud ik mijn posities bij een nieuwe website?", a: "Alleen met een compleet redirectplan en behoud van content en URL-structuur. Wij stellen dat plan op en controleren na livegang op fouten en indexatieverlies." },
      { q: "Hoe lang duurt een website advies?", a: "Doorgaans één tot twee weken vanaf het moment dat we toegang hebben tot je website, Analytics en Search Console." },
    ],
  },

  "/online-marketing/uitbesteden/": {
    definition:
      "Online marketing uitbesteden is het beleggen van je vindbaarheid, advertenties en conversie bij een extern specialist die de uitvoering overneemt en verantwoordelijk is voor het resultaat.",
    serviceName: "Online marketing uitbesteden",
    breadcrumb: "Uitbesteden",
    qa: [
      {
        q: "Wat kost online marketing uitbesteden per maand?",
        a: "Een doorlopend pakket start bij 999 euro per maand en combineert SEO, GEO, Ads en CRO. Een eenmalige audit kost vanaf 599 euro en los maatwerk 90 euro per uur. Je weet vooraf exact wat je betaalt, er volgt geen nacalculatie achteraf.",
      },
      {
        q: "Wat heb je zelf nog te doen na uitbesteden?",
        a: "Je levert toegang tot je website, Analytics, Search Console en advertentieaccounts, en je beantwoordt inhoudelijke vragen over je vak. Verder werken wij zelfstandig door. Eén keer per maand bespreken we in een video wat er is gedaan en wat het opleverde.",
      },
      {
        q: "Wanneer kies je voor uitbesteden en wanneer voor zelf doen?",
        a: "Kies zelf doen wanneer je tijd hebt en één kanaal wilt leren beheersen. Kies uitbesteden wanneer meerdere disciplines tegelijk nodig zijn of wanneer je marketing blijft liggen naast de dagelijkse werkzaamheden. Uitbesteden kost geld, blijven liggen kost omzet.",
      },
    ],
    comparison: {
      title: "Zelf doen, iemand aannemen of uitbesteden?",
      columns: ["Aspect", "Zelf doen of aannemen", "Uitbesteden"],
      rows: [
        ["Maandelijkse kosten", "Salaris vanaf 3.500 euro", "Vanaf 999 euro"],
        ["Breedte aan kennis", "Eén tot twee disciplines", "SEO, GEO, Ads en CRO"],
        ["Opstarttijd", "Werving en inwerken", "Binnen twee weken live"],
        ["Continuïteit bij ziekte of vertrek", "Kwetsbaar", "Geborgd"],
        ["Beste bij", "Groot volume en eigen team", "MKB zonder marketingafdeling"],
      ],
    },
  },

  "/kennisbank/": {
    definition:
      "De kennisbank van B. Analyzed is een verzameling uitleg over SEO, GEO, Google Ads en conversie-optimalisatie, geschreven voor MKB-ondernemers zonder marketingjargon.",
    breadcrumb: "Kennisbank",
    qa: [
      {
        q: "Wat is het verschil tussen SEO en GEO?",
        a: "SEO zorgt dat je website hoog in de resultatenlijst van Google staat, GEO zorgt dat AI-systemen zoals ChatGPT en Perplexity je bedrijf noemen in hun antwoord. SEO levert klikken op, GEO levert vermeldingen op het moment dat er geen klik meer plaatsvindt.",
      },
      {
        q: "Hoe lang duurt het voor SEO en GEO effect hebben?",
        a: "Technische verbeteringen en herschreven pagina's geven vaak binnen dertig tot zestig dagen de eerste beweging. Structurele groei in posities en AI-vermeldingen bouw je op in zes tot twaalf maanden, afhankelijk van je concurrentie, je startpositie en hoe consistent er gepubliceerd wordt.",
      },
      {
        q: "Waar begin je als je website niet gevonden wordt?",
        a: "Begin bij techniek en indexatie: staat je site in Google, laadt hij snel genoeg en zijn de belangrijkste pagina's bereikbaar. Daarna komt content op zoekvragen met koopintentie. Autoriteit via links is de laatste stap, want die versterkt alleen wat inhoudelijk al klopt.",
      },
    ],
    steps: {
      title: "Zo gebruik je deze kennisbank",
      items: [
        "Begin bij de uitleg over GEO als je wilt weten hoe AI-antwoorden hun bronnen kiezen.",
        "Lees daarna de dienstpagina die bij jouw vraag past, bijvoorbeeld SEO of Google Ads.",
        "Bekijk de tarievenpagina om te zien wat een traject in de praktijk kost.",
        "Vraag de gratis scan aan voor een persoonlijke analyse van je eigen situatie.",
      ],
    },
    bullets: {
      title: "Onderwerpen in de kennisbank",
      items: [
        "GEO en zichtbaarheid in AI-zoekmachines",
        "SEO: techniek, content en autoriteit",
        "Google Ads en advertentiebudget",
        "Conversie-optimalisatie en meting",
      ],
    },
    faq: [
      { q: "Is de kennisbank gratis te lezen?", a: "Ja. Alle uitleg is vrij toegankelijk en bedoeld om je zelf een oordeel te laten vormen, ook als je niet met ons samenwerkt." },
      { q: "Wie schrijft de artikelen?", a: "Britt Daemen, oprichter van B. Analyzed, met 15 jaar ervaring in SEO, GEO, Google Ads en conversie-optimalisatie." },
      { q: "Hoe vaak wordt de kennisbank bijgewerkt?", a: "We werken de uitleg bij zodra zoekmachines of AI-systemen aantoonbaar veranderen, in de praktijk enkele keren per jaar per onderwerp." },
      { q: "Kan ik een onderwerp aanvragen?", a: "Ja. Bel of mail je vraag en we behandelen hem, meestal eerst persoonlijk en daarna als uitleg in de kennisbank." },
    ],
  },

  "/kennisbank/geo/": {
    definition:
      "GEO is generative engine optimization: het geschikt maken van je website zodat AI-zoekmachines jouw content als bron gebruiken en je bedrijf noemen in hun antwoord.",
    breadcrumb: "GEO uitgelegd",
    qa: [
      {
        q: "Hoe kiezen AI-modellen hun bronnen?",
        a: "AI-modellen kiezen bronnen op duidelijkheid, feitelijkheid, structuur en consistentie met andere vindplaatsen op het web. Pagina's die een vraag direct in de eerste alinea beantwoorden en die cijfers, definities en schema-markup bevatten, worden aanzienlijk vaker geciteerd dan wollige, lange teksten.",
      },
      {
        q: "Wat pas je concreet aan op je website?",
        a: "Zet het antwoord bovenaan de pagina, formuleer koppen als de vraag die je doelgroep echt stelt en voeg concrete cijfers toe. Vul dat aan met FAQ-markup, schema.org-gegevens over je bedrijf en een llms.txt-bestand dat AI-crawlers de weg wijst naar je belangrijkste pagina's.",
      },
      {
        q: "Kun je GEO meten?",
        a: "Ja. We stellen een vaste set van 20 tot 50 realistische prompts samen en draaien die maandelijks door ChatGPT, Gemini, Perplexity en Google AI Overviews. Per prompt leggen we vast of je genoemd wordt, in welke context en naast welke concurrenten je verschijnt.",
      },
    ],
    steps: {
      title: "In vier stappen citeerbaar worden",
      items: [
        "Meet je startpositie met een vaste promptset per AI-systeem.",
        "Herschrijf je belangrijkste pagina's zodat het antwoord bovenaan staat.",
        "Voeg schema-markup en verifieerbare feiten toe aan elke pagina.",
        "Geef AI-crawlers toegang en meet maandelijks opnieuw.",
      ],
    },
    bullets: {
      title: "Wat niet werkt",
      items: [
        "Met AI gegenereerde content zonder eigen kennis of cijfers",
        "Keyword-stuffing en herhaalde standaardzinnen",
        "Dunne plaatsnaampagina's zonder unieke inhoud",
        "Beloftes over een gegarandeerde plek in een AI-antwoord",
      ],
    },
  },
};

export function aeoFor(pathname: string): AeoEntry | undefined {
  const key = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return AEO[key];
}
