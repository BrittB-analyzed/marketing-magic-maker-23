/**
 * Kennisbank: korte definitiepagina's onder /kennisbank/[slug]/.
 *
 * Elk begrip volgt hetzelfde sjabloon: een definiërende openingszin van
 * maximaal 40 woorden, twee alinea's over waarom het ertoe doet, een
 * (reken)voorbeeld, twee tot drie vraagkoppen met antwoorden van 40 tot 60
 * woorden en een blok met drie gerelateerde begrippen.
 *
 * PUBLICATIETEMPO: maximaal drie pagina's per week. Een site met beperkte
 * autoriteit die in één keer tientallen korte pagina's publiceert, wordt door
 * Google als thin content behandeld. Het veld `publicatie` regelt dat: pagina's
 * met een datum in de toekomst staan op noindex, staan niet in het register en
 * staan niet in de sitemap. Er is geen handmatige actie nodig om ze live te
 * zetten; ze verschijnen vanzelf op hun datum.
 */

export type KennisbankVraag = { q: string; a: string };

export type KennisbankTerm = {
  slug: string;
  /** Label in het alfabetisch register. */
  term: string;
  /** Extra woorden waarop het zoekveld in het register moet matchen. */
  synoniemen?: string[];
  h1: string;
  title: string;
  description: string;
  /** Definiërende openingszin in de vorm "X is ...", maximaal 40 woorden. */
  definitie: string;
  /** Waarom het ertoe doet voor een ondernemer, in precies twee alinea's. */
  waarom: [string, string];
  voorbeeld: { h: string; p: string[] };
  /** Twee tot drie vraagkoppen met antwoorden van 40 tot 60 woorden. */
  vragen: KennisbankVraag[];
  /** Primaire dienstpagina waar dit begrip bij hoort. */
  dienst: { label: string; to: string; note: string };
  /** Drie slugs van gerelateerde begrippen, zodat de sectie één cluster vormt. */
  gerelateerd: [string, string, string];
  /** Publicatiedatum, ISO. Ligt deze in de toekomst, dan is de pagina nog niet live. */
  publicatie: string;
};

export const KENNISBANK: Record<string, KennisbankTerm> = {
  "indexeren-betekenis": {
    slug: "indexeren-betekenis",
    term: "Indexeren",
    synoniemen: ["betekenis indexeren", "indexering", "geïndexeerd"],
    h1: "Indexeren: betekenis en waarom het bepaalt of je gevonden wordt",
    title: "Indexeren Betekenis | Wat het is en waarom het telt",
    description:
      "Indexeren betekent dat Google je pagina opslaat in zijn index. Zonder indexering kun je nergens op ranken. Zo controleer je of jouw pagina's erin staan.",
    definitie:
      "Indexeren is het opslaan van een webpagina in de database van een zoekmachine, nadat die pagina is gevonden en gelezen. Pas als een pagina geïndexeerd is, kan hij in de zoekresultaten verschijnen.",
    waarom: [
      "Voor een ondernemer is dit het meest onderschatte punt van vindbaarheid. Je kunt de beste tekst van je branche schrijven, maar als de pagina niet in de index staat, bestaat hij voor Google simpelweg niet. Er is dan geen positie 40 of positie 90: er is helemaal geen positie. Dat verklaart waarom sommige bedrijven maandenlang aan content werken zonder ook maar één bezoeker uit Google te krijgen.",
      "Het gaat bovendien vaker mis dan je zou denken. Een testomgeving die per ongeluk op noindex blijft staan na livegang, een robots.txt die te veel dichtzet, een canonical die naar de verkeerde pagina wijst of een nieuwe webshop waarvan de categoriepagina's als duplicaat worden gezien. Stuk voor stuk technische instellingen die niemand ziet in de browser, maar die het verschil maken tussen wel of niet meedoen.",
    ],
    voorbeeld: {
      h: "Zo controleer je het in twee minuten",
      p: [
        "Typ in Google: site:jouwdomein.nl. Het aantal resultaten dat je terugkrijgt is een ruwe indicatie van hoeveel pagina's er in de index staan. Heeft je site 80 pagina's en zie je er 12, dan is dat je eerste actiepunt.",
        "Preciezer werkt Google Search Console. Onder Pagina's zie je exact welke URL's geïndexeerd zijn en welke niet, met per niet-geïndexeerde pagina de reden: uitgesloten door noindex, gedupliceerd, gecrawld maar niet geïndexeerd. Die laatste reden betekent meestal dat Google de pagina te dun of te weinig onderscheidend vindt.",
      ],
    },
    vragen: [
      {
        q: "Hoe lang duurt het voordat Google een pagina indexeert?",
        a: "Van enkele uren tot enkele weken. Bij een site die vaak publiceert en al autoriteit heeft, gaat het meestal binnen een dag. Bij een nieuwe site kan het weken duren. Je versnelt het door de URL in Search Console aan te bieden en er intern vanaf een bestaande pagina naartoe te linken.",
      },
      {
        q: "Wat is het verschil tussen crawlen en indexeren?",
        a: "Crawlen is het bezoeken en lezen van je pagina door een zoekmachine, indexeren is het besluit om hem op te slaan. Gecrawld worden is dus geen garantie op indexering. In Search Console zie je die tussenstatus terug als gecrawld, momenteel niet geïndexeerd.",
      },
      {
        q: "Kan ik een pagina bewust uit de index houden?",
        a: "Ja, met een noindex-instructie in de paginakop. Dat is zinvol voor bedanktpagina's, interne zoekresultaten en filterpagina's die niets toevoegen. Blokkeren via robots.txt werkt daarvoor juist niet goed: Google kan de pagina dan niet lezen en dus de noindex ook niet zien.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Indexering controleren en herstellen is standaard onderdeel van de technische SEO in ons pakket.",
    },
    gerelateerd: ["bovenaan-in-google", "webmaster", "staging"],
    publicatie: "2026-08-21",
  },

  ctr: {
    slug: "ctr",
    term: "CTR (click-through rate)",
    synoniemen: ["click through rate", "doorklikratio", "klikfrequentie"],
    h1: "CTR: wat is de click-through rate en wat is een goede score?",
    title: "CTR | Wat is click-through rate en wat is goed?",
    description:
      "CTR is het percentage mensen dat op je link klikt na hem gezien te hebben. Uitleg, de rekensom en wat een goede CTR is in Google en in Google Ads.",
    definitie:
      "CTR, of click-through rate, is het percentage mensen dat op je link, advertentie of e-mail klikt nadat ze hem hebben gezien. Je berekent hem door het aantal klikken te delen door het aantal vertoningen.",
    waarom: [
      "CTR is het enige cijfer dat laat zien of je zichtbaarheid ook aandacht oplevert. Je kunt op positie drie staan met tienduizend vertoningen per maand, maar als niemand klikt, levert die positie niets op. Vaak ligt de oorzaak in de titel en de omschrijving die Google toont: die zijn niet aantrekkelijk genoeg, of ze beloven iets anders dan de zoeker zoekt.",
      "In Google Ads heeft CTR bovendien een directe financiële consequentie. Een advertentie met een hoge doorklikratio krijgt een betere kwaliteitsscore, en daarmee betaal je minder per klik voor dezelfde positie. Twee adverteerders met hetzelfde bod betalen daardoor een verschillende prijs. Werken aan je CTR is in advertenties dus letterlijk werken aan je kostprijs.",
    ],
    voorbeeld: {
      h: "Rekenvoorbeeld",
      p: [
        "Je pagina wordt in Google 4.000 keer getoond en krijgt 120 klikken. De rekensom is 120 ÷ 4.000 × 100 = 3% CTR. Verhoog je dat naar 4,5% door een betere titel, dan levert dezelfde positie 180 klikken op: 60 extra bezoekers per maand zonder één plek te stijgen.",
        "In Google Ads werkt het identiek, maar telt de uitkomst dubbel: die 60 extra klikken leveren niet alleen meer bezoekers op, ze verbeteren ook je kwaliteitsscore en daarmee je klikprijs op alle vertoningen daarna.",
      ],
    },
    vragen: [
      {
        q: "Wat is een goede CTR in de organische zoekresultaten?",
        a: "Dat hangt vooral af van je positie. Op plek één wordt aanzienlijk vaker geklikt dan op plek acht, dus vergelijk je CTR altijd met andere pagina's op een vergelijkbare positie. Zinvoller dan een algemeen gemiddelde: kijk in Search Console welke van je eigen pagina's onder hun eigen positie presteren.",
      },
      {
        q: "Hoe verhoog ik mijn CTR?",
        a: "Schrijf een titel die de zoekvraag letterlijk beantwoordt in plaats van je bedrijfsnaam vooropzet. Zet in de omschrijving iets concreets: een prijs, een termijn of een getal. En zorg dat je pagina in aanmerking komt voor rich results, want die vallen zichtbaar meer op in het resultaat.",
      },
      {
        q: "Is een hoge CTR altijd goed?",
        a: "Nee. Een titel die meer belooft dan de pagina waarmaakt, levert klikken op die meteen weer terugkeren. Dat kost je advertentiebudget zonder aanvragen, en organisch geeft het Google het signaal dat je pagina de vraag niet beantwoordt. Kijk daarom altijd naar CTR én conversie samen.",
      },
    ],
    dienst: {
      label: "Google Ads uitbesteden",
      to: "/online-marketing/google-ads-uitbesteden/",
      note: "In Ads sturen we wekelijks op CTR en kwaliteitsscore, omdat dat direct je klikprijs bepaalt.",
    },
    gerelateerd: ["bovenaan-in-google", "sea-scan", "seo-copywriter"],
    publicatie: "2026-08-21",
  },

  "seo-copywriter": {
    slug: "seo-copywriter",
    term: "SEO-copywriter",
    synoniemen: ["seo copywriter", "seo tekstschrijver"],
    h1: "SEO-copywriter: wat doet die en wat levert het op?",
    title: "SEO-copywriter | Wat doet die en wat kost het?",
    description:
      "Een SEO-copywriter schrijft teksten die scoren in Google én leesbaar blijven voor mensen. Wat het werk inhoudt, wat het oplevert en wat het kost.",
    definitie:
      "Een SEO-copywriter schrijft webteksten die zowel de zoekvraag van een lezer beantwoorden als de signalen bevatten waarop een zoekmachine beoordeelt waar een pagina over gaat. Het vak zit precies op het snijvlak van die twee.",
    waarom: [
      "Voor een ondernemer is het verschil met een gewone tekstschrijver praktisch, niet stilistisch. Een SEO-copywriter begint niet bij een leeg document maar bij een zoekwoordenonderzoek: welke vraag stellen mensen precies, in welke bewoordingen, en welke bijvragen horen daarbij. Die vragen worden de koppen, en de eerste honderd woorden onder elke kop geven het antwoord.",
      "Dat levert twee dingen tegelijk op. Google begrijpt sneller waar de pagina over gaat en waarvoor hij hem kan tonen. En AI-antwoordmachines als ChatGPT en Google AI Overviews kunnen zo'n afgebakende passage overnemen als citaat, mét bronvermelding. Een tekst die netjes leest maar de vraag pas in alinea vijf beantwoordt, verliest op allebei.",
    ],
    voorbeeld: {
      h: "Hetzelfde onderwerp, twee openingen",
      p: [
        "Zonder SEO-copy: \"Al jaren zijn wij als bedrijf actief in de installatiebranche en staat kwaliteit bij ons hoog in het vaandel.\" Die zin beantwoordt geen enkele zoekvraag en bevat geen enkel signaal.",
        "Met SEO-copy: \"Een warmtepomp laten installeren kost in Nederland tussen de € 6.000,- en € 12.000,-, inclusief montage. Wat je precies betaalt, hangt af van het type pomp en de staat van je woning.\" Deze opening beantwoordt de vraag, bevat het zoekwoord in natuurlijke vorm en is als los blok citeerbaar.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen een SEO-copywriter en een gewone copywriter?",
        a: "De uitgangspunten. Een copywriter begint bij de boodschap die jij wilt overbrengen, een SEO-copywriter bij de vraag die je doelgroep intikt. In de praktijk levert dat een andere structuur op: vraagkoppen in plaats van creatieve tussenkoppen, en het antwoord bovenaan in plaats van als slotconclusie.",
      },
      {
        q: "Wat kost een SEO-tekst?",
        a: "Bij ons spreken we per tekst een vaste prijs af, gebaseerd op de lengte en de hoeveelheid onderzoek die het onderwerp vraagt. Losse uren rekenen we tegen € 90,-. In een doorlopend pakket vanaf € 999,- per maand zitten meestal twee teksten per maand inbegrepen.",
      },
      {
        q: "Kan ik dit niet gewoon door AI laten schrijven?",
        a: "Voor een ruwe opzet werkt dat prima. Wat AI niet heeft, is jouw prijzen, jouw cases en jouw ervaring, en juist die maken het verschil tussen een tekst die scoort en een tekst die klinkt als tien andere. Gebruik AI voor de structuur, vul zelf de feiten in.",
      },
    ],
    dienst: {
      label: "SEO-teksten laten schrijven",
      to: "/online-marketing/seo-teksten-laten-schrijven/",
      note: "Teksten die scoren in Google én geciteerd worden door AI-antwoordmachines, tegen een vaste prijs per tekst.",
    },
    gerelateerd: ["wat-is-copywriting", "ctr", "bovenaan-in-google"],
    publicatie: "2026-08-21",
  },

  "bovenaan-in-google": {
    slug: "bovenaan-in-google",
    term: "Bovenaan in Google",
    synoniemen: ["hoog in google", "nummer 1 in google", "eerste pagina google"],
    h1: "Bovenaan in Google komen: wat er echt voor nodig is",
    title: "Bovenaan in Google | Wat er echt voor nodig is",
    description:
      "Bovenaan in Google staan vraagt om drie dingen: techniek, content en autoriteit. Wat realistisch is, hoe lang het duurt en waar je het beste begint.",
    definitie:
      "Bovenaan in Google komen betekent dat jouw pagina bij de eerste resultaten staat voor één specifieke zoekopdracht. Het is geen eigenschap van je website maar een uitkomst per zoekwoord: op het ene woord sta je eerste, op het andere nergens.",
    waarom: [
      "Die nuance is voor een ondernemer de belangrijkste. \"Bovenaan in Google staan\" is geen doel dat je afvinkt, want er is geen enkele lijst. Er zijn duizenden zoekopdrachten en op elke daarvan een eigen rangschikking. De vraag is dus nooit of je bovenaan staat, maar bovenaan waarop, en of dat woord ook klanten oplevert.",
      "Dat verklaart ook waarom bureaus met een garantie op positie één zo makkelijk kunnen leveren: ze kiezen een zoekwoord dat niemand intikt. Een eerste plek op een term met tien zoekopdrachten per maand is waardeloos; een derde plek op een term met achthonderd zoekopdrachten en koopintentie verandert je agenda. Kies je zoekwoorden dus op waarde, niet op haalbaarheid alleen.",
    ],
    voorbeeld: {
      h: "Wat er in de praktijk voor nodig is",
      p: [
        "Google weegt honderden factoren, maar in de praktijk vallen ze uiteen in drie lagen. Techniek: je pagina moet gevonden, gelezen en geïndexeerd kunnen worden, en snel laden op een telefoon. Content: je pagina moet de zoekvraag beter beantwoorden dan de pagina's die er nu staan. Autoriteit: andere sites moeten naar je verwijzen, want dat is het signaal dat anderen je serieus nemen.",
        "De volgorde is niet vrijblijvend. Zonder de eerste laag doet de tweede er niet toe, en zonder de tweede is de derde weggegooid geld. De meeste MKB-sites winnen het meest bij laag twee: bestaande pagina's die de zoekvraag net niet goed genoeg beantwoorden.",
      ],
    },
    vragen: [
      {
        q: "Hoe lang duurt het om bovenaan in Google te komen?",
        a: "Op weinig competitieve, lokale zoekwoorden vaak twee tot vier maanden. Op landelijke zoekwoorden met sterke concurrentie eerder zes tot twaalf maanden, en soms langer. Doorslaggevend is niet je inspanning maar het verschil tussen jouw site en de sites die er nu staan.",
      },
      {
        q: "Kun je een eerste positie garanderen?",
        a: "Nee, en wie dat wel belooft, verkoopt je een zoekwoord dat niemand gebruikt. Niemand beheert het algoritme en niemand kent de wijzigingen van volgende maand. Wat wél kan: vooraf afspreken welke zoekwoorden ertoe doen en maandelijks laten zien wat er beweegt.",
      },
      {
        q: "Waar begin ik als ik nu nergens sta?",
        a: "Bij de pagina's die net buiten bereik staan, meestal plek elf tot twintig. Die zijn met beperkt werk te verplaatsen: beantwoord de zoekvraag in de eerste honderd woorden, voeg de bijvragen als koppen toe en link ernaartoe vanaf pagina's die het al goed doen.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Techniek, content en autoriteit in één doorlopend traject, met maandelijks inzicht in wat er beweegt.",
    },
    gerelateerd: ["indexeren-betekenis", "ctr", "seo-copywriter"],
    publicatie: "2026-08-28",
  },

  "sea-scan": {
    slug: "sea-scan",
    term: "SEA-scan",
    synoniemen: ["sea scan", "google ads scan", "adwords scan"],
    h1: "SEA-scan: wat het is en wat je eraan hebt",
    title: "SEA-scan | Wat het is en wat je eraan hebt",
    description:
      "Een SEA-scan is een doorlichting van je Google Ads-account: structuur, zoektermen, conversiemeting en verspild budget. Wat erin zit en wat het kost.",
    definitie:
      "Een SEA-scan is een doorlichting van je bestaande Google Ads-account, waarbij wordt gecontroleerd of je budget naar de juiste zoekopdrachten gaat en of de conversiemeting klopt. De uitkomst is een lijst met concrete verbeterpunten.",
    waarom: [
      "De aanleiding is bijna altijd dezelfde: er wordt maandelijks een bedrag uitgegeven en niemand kan precies uitleggen wat het oplevert. Dat is geen kwestie van slecht opletten. Google Ads automatiseert steeds meer keuzes, en zonder sturing koopt een account vanzelf vertoningen op zoekopdrachten die niets met je aanbod te maken hebben.",
      "Een scan legt dat bloot voordat je nog een kwartaal doorbetaalt. In de meeste accounts zit het lek op drie plekken: zoektermen die nooit zijn uitgesloten, conversies die iets anders meten dan een echte aanvraag, en campagnes die allang stilgezet hadden moeten worden. Dat zijn geen subtiele optimalisaties, dat is direct terug te vinden geld.",
    ],
    voorbeeld: {
      h: "Wat een scan doorloopt",
      p: [
        "Structuur: sluiten campagnes, advertentiegroepen en zoekwoorden logisch op elkaar aan, of concurreren ze onderling om dezelfde vertoning? Zoektermen: op welke daadwerkelijke zoekopdrachten is je advertentie vertoond, en welk deel daarvan is irrelevant? Conversiemeting: telt Google Ads een ingevuld formulier, of telt het een pagina die toevallig ook geladen wordt?",
        "Daarna volgt de rekenkant: kosten per aanvraag per campagne, het aandeel budget dat naar zoektermen zonder conversie ging, en welke landingspagina's de klik niet waarmaken. Elk punt krijgt een inschatting van hoeveel het maandelijks scheelt.",
      ],
    },
    vragen: [
      {
        q: "Wat kost een SEA-scan?",
        a: "Een korte quick scan is gratis en levert binnen twee werkdagen een video op met de grootste knelpunten. Een uitgebreide doorlichting van je account start bij € 599,-, inclusief een adviesgesprek waarin we de bevindingen doornemen en de volgorde van aanpak vaststellen.",
      },
      {
        q: "Moet ik toegang tot mijn account geven?",
        a: "Ja, maar alleen leestoegang volstaat voor de scan. Je blijft eigenaar van je eigen Google Ads-account en er wordt niets gewijzigd zonder jouw akkoord. Zo kun je de scan ook laten doen als je nog niet weet of je met ons verder wilt.",
      },
      {
        q: "Hoe vaak is een SEA-scan zinvol?",
        a: "Bij een account dat doorlopend wordt beheerd, hooguit één keer per jaar als tegencheck. Bij een account waar niemand structureel naar kijkt, is elk half jaar realistisch. De aanleiding is meestal een verandering: nieuwe campagnetypes, een gewijzigde website of stijgende kosten per aanvraag.",
      },
    ],
    dienst: {
      label: "Google Ads uitbesteden",
      to: "/online-marketing/google-ads-uitbesteden/",
      note: "Na de scan kun je de verbeterpunten zelf doorvoeren, of het beheer bij ons neerleggen.",
    },
    gerelateerd: ["ctr", "bovenaan-in-google", "see-think-do-care"],
    publicatie: "2026-08-28",
  },

  staging: {
    slug: "staging",
    term: "Staging",
    synoniemen: ["stagingomgeving", "testomgeving", "staging site"],
    h1: "Staging: wat is een stagingomgeving en waarom heb je er een nodig?",
    title: "Staging | Wat is een stagingomgeving en waarom?",
    description:
      "Een stagingomgeving is een kopie van je website waarop je test voordat je live gaat. Waarom dat je posities beschermt en hoe je hem goed afschermt.",
    definitie:
      "Staging is een afgeschermde kopie van je website waarop je wijzigingen test voordat ze live gaan. Bezoekers en zoekmachines komen er niet, waardoor je fouten kunt maken zonder dat het je bezoekers of je posities kost.",
    waarom: [
      "Voor een ondernemer is dit vooral risicobeheersing. Een update van een plug-in, een nieuw formulier of een aangepaste sjabloon kan er in de beheeromgeving prima uitzien en toch de mobiele weergave slopen of je contactformulier stilzwijgend laten falen. Zonder testomgeving merk je dat pas als een klant belt, en soms pas als je na een maand ziet dat er geen aanvragen meer binnenkwamen.",
      "Er is nog een tweede reden die specifiek met vindbaarheid te maken heeft. Een stagingomgeving die niet goed is afgeschermd, kan door Google worden gevonden en geïndexeerd. Je hebt dan opeens twee versies van dezelfde site in de index, die elkaar beconcurreren. Dat is een van de vaakst voorkomende oorzaken van onverklaarbaar wegzakkende posities na een verbouwing.",
    ],
    voorbeeld: {
      h: "Hoe je hem goed afschermt",
      p: [
        "Zet de stagingomgeving achter een wachtwoord op serverniveau. Dat is effectiever dan alleen een noindex-instructie, want een wachtwoord houdt zowel zoekmachines als nieuwsgierige bezoekers buiten. Zet daarnaast in robots.txt van de stagingomgeving alles op disallow, als tweede slot op de deur.",
        "En het punt dat het vaakst misgaat: controleer ná de livegang of de noindex-instructie niet is meeverhuisd naar de productieomgeving. Een site die live gaat met noindex verdwijnt binnen enkele weken volledig uit Google. Dat is één vinkje, en het kost maanden om te herstellen.",
      ],
    },
    vragen: [
      {
        q: "Heb ik als klein bedrijf een stagingomgeving nodig?",
        a: "Zodra je website aanvragen oplevert, wel. De vuistregel: als een dag storing je omzet kost, is testen goedkoper dan herstellen. De meeste hostingpartijen bieden een stagingomgeving standaard aan, vaak met één klik en zonder meerkosten. Je hoeft er dus geen aparte server of extra abonnement voor te regelen.",
      },
      {
        q: "Wat is het verschil tussen staging en een lokale testomgeving?",
        a: "Een lokale omgeving draait op de computer van de ontwikkelaar, staging draait op dezelfde server en met dezelfde instellingen als je echte site. Daardoor komen problemen die met serverconfiguratie of caching te maken hebben pas op staging aan het licht, en niet lokaal.",
      },
    ],
    dienst: {
      label: "WordPress onderhoud",
      to: "/online-marketing/wordpress-onderhoud/",
      note: "Updates draaien wij eerst op staging en pas daarna live, met een back-up als terugvaloptie.",
    },
    gerelateerd: ["webmaster", "indexeren-betekenis", "bovenaan-in-google"],
    publicatie: "2026-08-28",
  },

  "wat-is-copywriting": {
    slug: "wat-is-copywriting",
    term: "Copywriting",
    synoniemen: ["wat is copywriting", "copywriter", "commercieel schrijven"],
    h1: "Wat is copywriting?",
    title: "Wat is Copywriting? Betekenis en Voorbeelden",
    description:
      "Copywriting is schrijven met een doel: de lezer een actie laten doen. Lees de betekenis, het verschil met contentschrijven en een concreet voorbeeld.",
    definitie:
      "Copywriting is het schrijven van teksten die de lezer tot een actie moeten bewegen: aanvragen, bellen, kopen of inschrijven. Het verschil met gewone tekst zit niet in de stijl, maar in het feit dat er een meetbaar doel achter zit.",
    waarom: [
      "Voor een ondernemer betekent dat: elke tekst op je website heeft een taak. De koptekst op je homepage moet duidelijk maken wat je doet en voor wie. De tekst boven je formulier moet de laatste twijfel wegnemen. De knoptekst moet vertellen wat er gebeurt na de klik. Als je van een tekst niet kunt zeggen welke taak hij heeft, kun je ook niet beoordelen of hij werkt.",
      "Dat maakt copywriting meetbaar op een manier waarop schrijfstijl dat niet is. Twee versies van dezelfde pagina, hetzelfde verkeer, een ander conversiepercentage: dan weet je welke tekst zijn werk doet. Het bekendste voorbeeld in het vak is een knoptekst die van \"Aanmelden\" naar \"Bekijk de prijzen\" ging en de conversie flink liet stijgen, zonder dat er verder iets veranderde.",
    ],
    voorbeeld: {
      h: "Hetzelfde aanbod, twee formuleringen",
      p: [
        "Variant A: \"Wij bieden professionele dienstverlening op maat en denken graag met u mee.\" Dit zegt niets wat een concurrent niet ook kan zeggen, en geeft de lezer geen enkele reden om nu iets te doen.",
        "Variant B: \"Binnen 24 uur weet je wat het kost. Geen offertetraject van drie weken.\" Deze zin benoemt een concrete bezwaar van de lezer, geeft een termijn en zet zich af tegen het alternatief. Hetzelfde aanbod, een compleet ander effect.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen copywriting en content schrijven?",
        a: "Copywriting is gericht op een directe actie, contentschrijven op informeren en vertrouwen opbouwen. Een productpagina is copywriting, een uitlegartikel is content. In de praktijk lopen ze door elkaar: goede content eindigt met een duidelijke volgende stap, en goede copy onderbouwt zijn belofte.",
      },
      {
        q: "Hoe weet ik of mijn teksten werken?",
        a: "Door ze te meten, niet door ze mooi te vinden. Kijk per pagina naar het conversiepercentage en vergelijk pagina's met dezelfde functie onderling. Heb je genoeg bezoekers, dan test je twee varianten tegen elkaar; heb je die niet, dan voer je de verbetering door en vergelijk je periodes.",
      },
      {
        q: "Kan ik mijn eigen teksten schrijven?",
        a: "Zeker, en vaak beter dan een buitenstaander, want jij kent de bezwaren van je klanten. De valkuil is dat je schrijft over wat jij belangrijk vindt in plaats van wat de lezer wil weten. Schrijf daarom eerst op welke vraag de lezer heeft, en beantwoord alleen die.",
      },
    ],
    dienst: {
      label: "SEO-teksten laten schrijven",
      to: "/online-marketing/seo-teksten-laten-schrijven/",
      note: "Teksten met een doel, geschreven op de zoekvraag van je klant en tegen een vaste prijs per tekst.",
    },
    gerelateerd: ["seo-copywriter", "merkpositionering", "kiss-principe"],
    publicatie: "2026-09-04",
  },

  merkpositionering: {
    slug: "merkpositionering",
    term: "Merkpositionering",
    synoniemen: ["positionering", "brand positioning", "merkpositie"],
    h1: "Merkpositionering: wat het is en hoe je het vastlegt",
    title: "Merkpositionering | Wat het is en hoe je het doet",
    description:
      "Merkpositionering is de plek die je merk inneemt in het hoofd van je klant. Uitleg, een invulzin en een concreet voorbeeld voor MKB-ondernemers.",
    definitie:
      "Merkpositionering is de plek die je merk inneemt in het hoofd van je doelgroep, ten opzichte van de alternatieven. Geen slogan en geen logo, maar het antwoord op de vraag waarom iemand voor jou kiest en niet voor de concurrent.",
    waarom: [
      "Voor een MKB-ondernemer is dit geen abstracte marketingoefening maar de basis onder elke keuze die daarna komt. Zonder heldere positionering weet je niet welke zoekwoorden je wilt winnen, welke argumenten op je website bovenaan moeten en waarom je duurder of goedkoper bent dan de rest. Je marketing wordt dan een verzameling losse acties zonder rode draad.",
      "Het gaat bovendien om onderscheid, niet om superlatieven. \"Kwaliteit, service en betrouwbaarheid\" is geen positionering, want geen enkele concurrent claimt het tegenovergestelde. Een echte positionering is een keuze die iets uitsluit: je bent er voor deze groep en niet voor die, je bent snel maar niet de goedkoopste, je bent gespecialiseerd en dus niet overal goed in.",
    ],
    voorbeeld: {
      h: "De invulzin die het scherp maakt",
      p: [
        "Vul deze zin in en je hebt je positionering staan: \"Voor [doelgroep] die [probleem] heeft, is [merk] de [categorie] die [belangrijkste voordeel], omdat [bewijs].\" De laatste twee delen zijn de moeilijkste en de belangrijkste.",
        "Een voorbeeld: \"Voor MKB-bedrijven die geen eigen marketeer hebben, is B. Analyzed het online marketingbureau dat één vaste specialist levert in plaats van een accountmanager, omdat dezelfde persoon de strategie bedenkt en ook uitvoert.\" Dat sluit iets uit: grote organisaties met een eigen team zijn hiermee expliciet niet de doelgroep.",
      ],
    },
    vragen: [
      {
        q: "Hoe vind ik mijn positionering?",
        a: "Begin bij je bestaande klanten. Bel er vijf en vraag waarom ze destijds voor jou kozen en welk alternatief ze overwogen. De antwoorden die je verrassen, zijn meestal je echte positionering. Wat jij zelf het belangrijkst vindt, blijkt vaak niet doorslaggevend te zijn geweest.",
      },
      {
        q: "Wat is het verschil tussen positionering en een USP?",
        a: "Een USP is één concreet voordeel dat je claimt, positionering is de bredere plek die je inneemt ten opzichte van de alternatieven. Je positionering bepaalt welke USP's geloofwaardig zijn. Zonder die onderlaag worden het losse claims die elkaar tegenspreken, en dan gelooft de lezer uiteindelijk geen van beide.",
      },
      {
        q: "Hoe vaak moet ik mijn positionering herzien?",
        a: "Zelden. Een positionering die elk jaar verandert, is geen positionering maar een campagne. Herzie hem als je doelgroep verschuift, als er een nieuw type concurrent bijkomt of als je merkt dat je bewijsvoering niet meer klopt met wat je daadwerkelijk levert.",
      },
    ],
    dienst: {
      label: "Online marketingstrategie",
      to: "/online-marketing-strategie/",
      note: "We beginnen elk traject met de vraag waarom iemand voor jou kiest, want daar hangt de rest van het plan aan.",
    },
    gerelateerd: ["see-think-do-care", "wat-is-copywriting", "kiss-principe"],
    publicatie: "2026-09-04",
  },

  "opt-in": {
    slug: "opt-in",
    term: "Opt-in",
    synoniemen: ["optin", "double opt-in", "toestemming e-mail"],
    h1: "Opt-in: betekenis, soorten en de regels in Nederland",
    title: "Opt-in | Betekenis, soorten en de regels in Nederland",
    description:
      "Een opt-in is de toestemming die iemand geeft om mail van je te ontvangen. Uitleg over single en double opt-in en wat de AVG hierin van je vraagt.",
    definitie:
      "Een opt-in is de actieve toestemming die iemand geeft om berichten van je te ontvangen, meestal e-mail. Actief betekent: iemand vinkt zelf een vakje aan of vult zelf een formulier in. Een vooraf aangevinkt hokje is geen geldige opt-in.",
    waarom: [
      "Voor een ondernemer heeft dit twee kanten die allebei tellen. Juridisch: zonder geldige toestemming mag je geen commerciële e-mail sturen aan particulieren, en de bewijslast dat je die toestemming hebt, ligt bij jou. Kun je niet aantonen wanneer en hoe iemand zich heeft aangemeld, dan sta je bij een klacht met lege handen.",
      "Commercieel is het minstens zo relevant. Een lijst met adressen die je hebt gekocht of verzameld zonder toestemming, levert lage openingspercentages en veel spammeldingen op. Dat beschadigt je afzenderreputatie, waardoor ook je mail aan mensen die je wél willen ontvangen in de spamfolder belandt. Een kleine lijst met echte opt-ins is meer waard dan een grote zonder.",
    ],
    voorbeeld: {
      h: "Single of double opt-in",
      p: [
        "Bij een single opt-in staat iemand op je lijst zodra het formulier is verzonden. Bij een double opt-in krijgt die persoon eerst een bevestigingsmail met een link, en pas na het klikken daarvan staat de inschrijving vast. Double opt-in levert een kleinere lijst op, maar wel een aantoonbaar geldige.",
        "Praktisch: bewaar bij elke inschrijving de datum, het tijdstip, het IP-adres en de tekst waarmee iemand akkoord ging. De meeste e-mailplatforms doen dat automatisch. Dat logboek is precies het bewijs dat je nodig hebt als er ooit een klacht komt.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen opt-in en opt-out?",
        a: "Bij opt-in geeft iemand vooraf toestemming, bij opt-out mag je sturen totdat iemand zich afmeldt. In Nederland geldt voor commerciële e-mail aan particulieren het opt-in-principe. Voor bestaande klanten bestaat een beperkte uitzondering voor soortgelijke eigen producten of diensten, mits je bij elke mail een afmeldmogelijkheid biedt.",
      },
      {
        q: "Mag ik e-mailadressen van zakelijke contacten zonder opt-in gebruiken?",
        a: "De regels zijn voor zakelijke ontvangers soepeler dan voor particulieren, maar niet vrij. Een algemeen info-adres van een bedrijf mag je in veel gevallen benaderen; een persoonlijk werkadres van een medewerker ligt gevoeliger. Elke mail moet hoe dan ook een werkende afmeldlink bevatten.",
      },
      {
        q: "Hoe lang blijft een opt-in geldig?",
        a: "Er staat geen wettelijke einddatum op, maar toestemming van jaren geleden waar nooit gebruik van is gemaakt, is in de praktijk moeilijk te verdedigen. Verstuur je zelden, vraag dan periodiek opnieuw of iemand je mail nog wil ontvangen. Dat schoont je lijst meteen op.",
      },
    ],
    dienst: {
      label: "E-mailmarketing uitbesteden",
      to: "/online-marketing/emailmarketing/",
      note: "Inschrijfformulieren, bevestigingsflow en een lijst die aantoonbaar in orde is, ingericht en bijgehouden.",
    },
    gerelateerd: ["see-think-do-care", "ctr", "wat-is-copywriting"],
    publicatie: "2026-09-04",
  },

  "see-think-do-care": {
    slug: "see-think-do-care",
    term: "See Think Do Care",
    synoniemen: ["stdc", "see think do care model", "klantreis model"],
    h1: "See Think Do Care: het model in gewone taal",
    title: "See Think Do Care | Het model in gewone taal",
    description:
      "See Think Do Care verdeelt je klantreis in vier fases, elk met eigen kanalen en doelen. Uitleg per fase, met een voorbeeld voor een MKB-bedrijf.",
    definitie:
      "See Think Do Care verdeelt je klantreis in vier fases: mensen die je nog niet kennen, mensen die zich oriënteren, mensen die willen kopen en mensen die al klant zijn. Elke fase vraagt om andere content en andere doelen.",
    waarom: [
      "Het model lost een probleem op dat veel ondernemers herkennen: alle marketing wordt beoordeeld op directe aanvragen. Een blogartikel dat mensen in de oriëntatiefase helpt, levert vandaag geen offerte op en lijkt daardoor te falen. Terwijl juist die fase bepaalt of jij straks in het rijtje staat waaruit gekozen wordt.",
      "Door per fase een ander doel af te spreken, wordt je budget bovendien logischer verdeeld. In de Do-fase reken je op kosten per aanvraag, in de Think-fase op terugkerende bezoekers en ingeschreven mailadressen, in de See-fase op bereik en merkbekendheid. Zonder dat onderscheid schrap je precies het werk dat de latere aanvragen mogelijk maakt.",
    ],
    voorbeeld: {
      h: "De vier fases voor een installatiebedrijf",
      p: [
        "See: iemand die nog niet aan een warmtepomp denkt. Bereik via social media en algemene informatie over energiekosten. Doel: bekendheid, geen aanvraag. Think: iemand die zich oriënteert en zoekt op \"warmtepomp of cv-ketel\". Bereik via uitlegartikelen en vergelijkingen. Doel: terugkerend bezoek en een inschrijving.",
        "Do: iemand die zoekt op \"warmtepomp laten installeren [plaats]\". Bereik via SEO en Google Ads op koopintentie. Doel: een aanvraag. Care: de klant van vorig jaar. Bereik via e-mail en onderhoudsherinneringen. Doel: herhaalopdracht en doorverwijzing. Vier fases, vier kanalen, vier verschillende meetlatten.",
      ],
    },
    vragen: [
      {
        q: "Waar begin je als je beperkt budget hebt?",
        a: "Bij Do. Dat is de fase waar mensen al willen kopen en waar het rendement dus het snelst zichtbaar is. Zodra daar een stabiele stroom aanvragen uit komt, breid je uit naar Think, want dat is de fase die je Do-verkeer op termijn groter en goedkoper maakt.",
      },
      {
        q: "Is See Think Do Care hetzelfde als een marketingfunnel?",
        a: "Het lijkt erop, maar met een belangrijk verschil: een funnel gaat uit van mensen die al in je proces zitten, See Think Do Care begint bij mensen die je nog helemaal niet kennen. Bovendien voegt de Care-fase iets toe dat in een klassieke funnel ontbreekt: bestaande klanten.",
      },
      {
        q: "Hoe meet ik de See- en Think-fase?",
        a: "Niet op aanvragen, want die komen daar niet vandaan. Meet See op bereik en nieuwe bezoekers, Think op terugkerende bezoekers, leestijd en inschrijvingen. Spreek die doelen vooraf af, anders schrap je bij de eerste bezuiniging precies de fases die de latere aanvragen voeden.",
      },
    ],
    dienst: {
      label: "Online marketingstrategie",
      to: "/online-marketing-strategie/",
      note: "We verdelen je kanalen en budget over de vier fases, met per fase een eigen doel en meetlat.",
    },
    gerelateerd: ["merkpositionering", "opt-in", "ctr"],
    publicatie: "2026-09-11",
  },

  "kiss-principe": {
    slug: "kiss-principe",
    term: "KISS-principe",
    synoniemen: ["kiss principe", "keep it simple stupid", "kiss methode"],
    h1: "KISS-principe: keep it simple, ook in je marketing",
    title: "KISS-principe | Keep it simple in je marketing",
    description:
      "Het KISS-principe zegt: hou het simpel. Wat dat betekent voor je website, je teksten en je formulieren, met een voorbeeld en drie concrete tests.",
    definitie:
      "Het KISS-principe staat voor keep it simple, stupid: het uitgangspunt dat een eenvoudige oplossing bijna altijd beter werkt dan een complexe. Het komt uit de techniek, maar is in marketing minstens zo bruikbaar.",
    waarom: [
      "Voor een ondernemer vertaalt het zich direct naar geld. Elke extra keuze op je website is een extra moment waarop iemand kan afhaken. Drie knoppen naast elkaar in plaats van één, twaalf formuliervelden in plaats van vier, een menu met achttien items: stuk voor stuk vragen aan de bezoeker om na te denken over iets waar hij niet voor gekomen is.",
      "De valkuil is dat complexiteit vanzelf ontstaat en eenvoud een keuze is. Elke afdeling wil een blok op de homepage, elke dienst wil een menu-item, elk formulier krijgt er een veld bij omdat iemand die informatie graag zou hebben. Niemand haalt ooit iets weg. Het KISS-principe is in de praktijk vooral de discipline om dat wél te doen.",
    ],
    voorbeeld: {
      h: "Drie tests die je vandaag kunt doen",
      p: [
        "De vijfsecondentest: laat iemand die je bedrijf niet kent vijf seconden naar je homepage kijken en vraag daarna wat je doet en voor wie. Kan diegene dat niet zeggen, dan is de bovenkant van je pagina te vol.",
        "De formuliertest: tel je verplichte velden. Kun je van elk veld uitleggen waarom je het nú nodig hebt in plaats van in het eerste telefoongesprek? Zo niet, weg ermee. De ervaring is dat een formulier van vier velden meer bruikbare aanvragen oplevert dan een van twaalf.",
        "De knoptest: staat er op elke pagina precies één duidelijke volgende stap? Twee gelijkwaardige knoppen naast elkaar leveren doorgaans minder klikken op dan één.",
      ],
    },
    vragen: [
      {
        q: "Betekent KISS dat mijn website kaal moet zijn?",
        a: "Nee, eenvoud gaat over duidelijkheid en niet over weinig. Een pagina mag lang zijn, mits elke sectie één ding doet en de lezer op elk moment weet wat de volgende stap is. Het probleem is zelden de hoeveelheid informatie, maar de hoeveelheid gelijkwaardige keuzes.",
      },
      {
        q: "Hoe pas ik het KISS-principe toe op mijn teksten?",
        a: "Eén gedachte per zin, één onderwerp per alinea en het antwoord bovenaan in plaats van als conclusie. Schrap woorden die niets toevoegen, zoals eigenlijk, uiteraard en in principe. Lees je tekst daarna hardop voor: op de plek waar je zelf struikelt, struikelt je lezer ook.",
      },
    ],
    dienst: {
      label: "Conversie-optimalisatie",
      to: "/online-marketing/conversie-optimalisatie/",
      note: "Formulieren korter maken en keuzes wegnemen is meestal de grootste enkele winst op een MKB-site.",
    },
    gerelateerd: ["wat-is-copywriting", "merkpositionering", "ctr"],
    publicatie: "2026-09-11",
  },

  webmaster: {
    slug: "webmaster",
    term: "Webmaster",
    synoniemen: ["websitebeheerder", "webmaster taken"],
    h1: "Webmaster: wat doet die en heb je er nog een nodig?",
    title: "Webmaster | Wat doet die en heb je er een nodig?",
    description:
      "Een webmaster beheert en onderhoudt je website: updates, back-ups, techniek en beveiliging. Wat het werk inhoudt en wanneer je het beter uitbesteedt.",
    definitie:
      "Een webmaster is degene die een website draaiende houdt: updates uitvoeren, back-ups maken, storingen oplossen, beveiliging bewaken en kleine aanpassingen doorvoeren. Het is een beheerrol, geen marketingrol.",
    waarom: [
      "De term klinkt ouderwets, maar het werk is dat niet. Een moderne website draait op software die vrijwel wekelijks updates krijgt, en elke update kan iets breken. Wordt er niet bijgewerkt, dan ontstaan beveiligingslekken; wordt er blind bijgewerkt, dan gaat er vroeg of laat iets stuk zonder dat iemand het merkt. Beide scenario's kosten uiteindelijk bezoekers.",
      "Voor de vindbaarheid is dit relevanter dan het lijkt. Een site die traag wordt, regelmatig offline is of foutmeldingen geeft, verliest posities. En omdat die achteruitgang geleidelijk gaat, wordt de oorzaak zelden bij het onderhoud gezocht. Beheer is daarmee geen kostenpost naast je marketing, maar een voorwaarde ervoor.",
    ],
    voorbeeld: {
      h: "Wat er in een maand onderhoud zit",
      p: [
        "Updates van het systeem, de plug-ins en het thema, bij voorkeur eerst op een testomgeving. Een back-up vóór elke wijziging, zodat terugdraaien altijd kan. Controle op gebroken links en foutmeldingen. Beveiligingscontrole en het opruimen van ongebruikte plug-ins, want elke plug-in die je niet gebruikt is een risico zonder opbrengst.",
        "Daarnaast de meetkant: draaien je formulieren nog, komt de bevestigingsmail aan, en registreert je statistiekpakket nog wat het moet registreren. Dat laatste breekt opvallend vaak stilletjes, en dan meet je maanden iets anders dan je denkt.",
      ],
    },
    vragen: [
      {
        q: "Is een webmaster hetzelfde als een SEO-specialist?",
        a: "Nee. Een webmaster houdt je site technisch draaiende, een SEO-specialist zorgt dat hij gevonden wordt. De rollen raken elkaar bij de techniek: laadtijd, foutmeldingen en indexering vallen in beide vakgebieden. In kleinere organisaties doet vaak dezelfde persoon of partij allebei, wat de afstemming een stuk simpeler maakt.",
      },
      {
        q: "Wat kost websiteonderhoud?",
        a: "Voor een gemiddelde MKB-website ligt dat in de markt op enkele tientallen tot enkele honderden euro's per maand, afhankelijk van hoeveel maatwerk erin zit en of monitoring en storingsherstel zijn inbegrepen. Vraag altijd expliciet of het herstellen van een storing binnen het bedrag valt.",
      },
      {
        q: "Kan ik het onderhoud zelf doen?",
        a: "Technisch kan het, mits je consequent bent. Het risico zit in de uitzonderingen: een update die iets breekt terwijl je op vakantie bent, of een beveiligingslek dat maanden open blijft staan. De vraag is niet of je het kunt, maar of je het volhoudt in een drukke maand.",
      },
    ],
    dienst: {
      label: "WordPress onderhoud",
      to: "/online-marketing/wordpress-onderhoud/",
      note: "Updates, back-ups, beveiliging en monitoring, met vaste maandprijs en herstel binnen bereik.",
    },
    gerelateerd: ["staging", "indexeren-betekenis", "bovenaan-in-google"],
    publicatie: "2026-09-11",
  },
};

/** Alle begrippen, alfabetisch op registerlabel. */
export const KENNISBANK_LIJST: KennisbankTerm[] = Object.values(KENNISBANK).sort((a, b) =>
  a.term.localeCompare(b.term, "nl"),
);

/**
 * Is dit begrip al gepubliceerd? Bepaalt of de pagina indexeerbaar is, of hij
 * in het register staat en of hij in de sitemap terechtkomt.
 */
export function isGepubliceerd(term: KennisbankTerm, nu: Date = new Date()) {
  return new Date(`${term.publicatie}T00:00:00Z`).getTime() <= nu.getTime();
}

/** De begrippen die op dit moment live horen te staan. */
export function gepubliceerdeTermen(nu: Date = new Date()) {
  return KENNISBANK_LIJST.filter((t) => isGepubliceerd(t, nu));
}
