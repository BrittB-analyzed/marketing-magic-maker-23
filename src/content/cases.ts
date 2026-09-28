import logoMeubel from "@/assets/logos/meubeloutletweert-logo.avif.asset.json";
import logoParketreus from "@/assets/logos/parketreus-logo.avif.asset.json";
import logoBruidsmode from "@/assets/logos/bruidsmode-outlet.jpg.asset.json";
import logoVogelvoer from "@/assets/logos/vogelvoerkopenlogo_1.avif.asset.json";
import logo10euro from "@/assets/logos/10-euro-taxi.png.asset.json";
import logoVenloTaxi from "@/assets/logos/venlo-taxi-logo.png.asset.json";
import heroMeubel from "@/assets/cases/meubeloutletweert.jpg.asset.json";
import rankingsMeubel from "@/assets/cases/rankings-meubel-outlet.jpg.asset.json";
import heroVanDaken from "@/assets/cases/dakdekker-van-daken.jpg.asset.json";
import posVanDaken from "@/assets/cases/nummer-1-posities-van-daken.png.asset.json";
import imprVanDaken from "@/assets/cases/vergelijking-impressies-van-daken.png.asset.json";
import groeiVanDaken from "@/assets/cases/organische-groei-van-daken.png.asset.json";
import heroDn from "@/assets/cases/dn-labs-office-11.jpg.asset.json";
import verkopenDn from "@/assets/cases/verkopen-dn-research.png.asset.json";
import impressiesDn from "@/assets/cases/impressies-dn-research.png.asset.json";
import heroParket from "@/assets/cases/Showroom-Parketreus.jpg.asset.json";
import kwParket from "@/assets/cases/groei-in-zoekwoorden-parketreus.png.asset.json";
import vglParket from "@/assets/cases/vergelijking-impressies-parketreus.png.asset.json";
import totParket from "@/assets/cases/totale-impressies-parketreus.png.asset.json";
import heroBruid from "@/assets/cases/bohemian-trouwjurk.jpg.asset.json";
import organischBruid from "@/assets/cases/debruidsmodeoutlet-organischverkeer.jpg.asset.json";
import doelenBruid from "@/assets/cases/Online-doelen-bruidsmodeoutlet.jpg.asset.json";
import adsBruid from "@/assets/cases/ads-bruidsmodeoutlet.jpg.asset.json";
import heroSleep from "@/assets/cases/boxspring-madrid-kopen.jpg.asset.json";
import kwSleep from "@/assets/cases/keywords-sleepfactory.jpg.asset.json";
import seoSleep from "@/assets/cases/sleep-factory-seo.jpg.asset.json";
import bestSleep from "@/assets/cases/online-bestellingen-sleepfactory.jpg.asset.json";
import kanalenSleep from "@/assets/cases/kanalen-sleepfactory.jpg.asset.json";
import heroVogel from "@/assets/cases/vogelvoerslinger-vogelvoerkopen_0000_Doppindaslinger-80-cmkopie.jpg.asset.json";
import kwVogel from "@/assets/cases/vogelvoerkeywords.jpg.asset.json";

export type CaseBlock = {
  h?: string;
  ps?: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  logo?: string;
  title: string;
  description: string;
  excerpt: string;
  /**
   * Hero-afbeelding. Ontbreekt die, dan tonen de casepagina en het overzicht
   * de highlights als opener in plaats van een gebroken afbeelding.
   */
  image?: string;
  imageAlt?: string;
  services: string[];
  period: string;
  highlights: { label: string; value: string }[];
  summary: string[];
  blocks: CaseBlock[];
};

export const CASES: Record<string, CaseStudy> = {
  "6600x-meubel-outlet-nummer-1-in-google": {
    slug: "6600x-meubel-outlet-nummer-1-in-google",
    client: "Meubel & Outlet Weert",
    logo: logoMeubel.url,
    title: "6.600x per maand gezocht op meubel outlet en nummer 1 in Google",
    description:
      "Case Meubel & Outlet Weert: van minder dan 500 naar bijna 5.500 organische bezoekers per maand, positie 1 op 'meubel outlet' en 15.000+ klikken in 16 maanden.",
    excerpt:
      "Van nauwelijks vindbaar naar positie 1 in Weert: +680% organisch verkeer, 15.000+ klikken en 1,15 miljoen vertoningen in 16 maanden.",
    image: heroMeubel.url,
    imageAlt: "Showroom van Meubel & Outlet Weert",
    services: ["SEO", "Google Ads", "GA4"],
    period: "16 maanden",
    highlights: [
      { label: "Organisch verkeer", value: "+680%" },
      { label: "Keywords", value: "1.500 → 5.000+" },
      { label: "Klikken in Google", value: "15.000+" },
    ],
    summary: [
      "Organisch verkeer: van ~500 naar ~5.500 bezoekers per maand (+680%)",
      "Keywords: van 1.500 naar meer dan 5.000",
      "Organisch verkeer jaar-op-jaar: +1.249%",
      "Google Ads sessies: +77% met een efficiënter budget",
      "15.000+ klikken en 1,15 miljoen vertoningen in 16 maanden",
      "Eetkamerstoelenpagina: 3.330 klikken uit 392.000 zoekopdrachten",
    ],
    blocks: [
      {
        ps: [
          "Meubel Outlet Weert is een fysieke meubelwinkel met een scherp aanbod en een loyale klantenkring in de regio. Online was er nog veel te winnen: de website trok nauwelijks bezoekers, terwijl mensen dagelijks zochten naar exact wat zij aanbieden.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "Toen Meubel Outlet Weert bij ons aanklopte was het probleem helder: de website werd simpelweg niet gevonden. Het organisch zoekverkeer lag op een dieptepunt, minder dan 500 bezoekers per maand, en er was geen structureel inzicht in wat wel en niet werkte.",
          "Tegelijkertijd liep er een Google Ads-campagne die veel meer kon opleveren dan ze deed. Kortom: er lag een hoop potentieel te wachten om benut te worden.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "We startten met een grondige analyse van de website, het zoekgedrag in de regio en de concurrentie. Op basis daarvan rolden we een gerichte SEO-strategie uit.",
          "Een belangrijk onderdeel was het optimaliseren van de belangrijkste categoriepagina's, woonmeubelen, banken, relaxstoelen, eetkamerstoelen en design meubels. Die pagina's zijn herschreven, technisch verbeterd en afgestemd op de zoektermen die er echt toe doen.",
          "Daarnaast lanceerden we een blog om ook op informatieve zoekopdrachten gevonden te worden. Artikelen over kleine ruimtes inrichten en meubelzaken in Limburg trekken inmiddels honderden extra bezoekers per maand. De showroompagina is opnieuw ingericht zodat bezoekers een goed beeld krijgen van wat ze in Weert kunnen verwachten.",
          "Tegelijkertijd hebben we de Google Ads-campagnes opnieuw opgezet: minder budget naar brede zoekopdrachten, meer naar merkgerichte, productgerichte en lokale campagnes die de showroom vullen. Als laatste is Google Analytics 4 correct ingericht, zodat precies duidelijk is welk kanaal wat oplevert.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "In 16 maanden genereerde de website meer dan 15.000 klikken en ruim 1,15 miljoen vertoningen in Google. De eetkamerstoelenpagina alleen al is goed voor 3.330 klikken uit bijna 392.000 zoekopdrachten en staat daarmee in de top 3 van best bezochte pagina's. De homepage, de bankenpagina en de relaxstoelenpagina volgen direct daarachter.",
          "Meubel Outlet Weert staat inmiddels op positie 1 in Google in Weert voor het zoekwoord 'meubel outlet', een term met 5.400 zoekopdrachten per maand.",
        ],
        image: rankingsMeubel.url,
        imageAlt: "Rankings van Meubel & Outlet Weert in Google",
      },
      {
        ps: [
          "Vergeleken met het jaar ervoor laat Google Analytics een stijging van +1.249% in organisch zoekverkeer zien. Het totale organische verkeer groeide van minder dan 500 bezoekers per maand naar bijna 5.500 op het hoogtepunt: een toename van meer dan 680%.",
          "Het aantal zoekwoorden waarop de website gevonden wordt groeide van circa 1.500 naar meer dan 5.000, en via Google Ads zagen we +77% meer sessies met een efficiënter ingezet budget. Die groei was niet alleen zichtbaar in de cijfers: ook in de winkel merkten ze het verschil.",
        ],
      },
    ],
  },
  "van-daken": {
    slug: "van-daken",
    client: "Van Daken",
    title: "Van Daken: van regionale dakdekker naar nummer 1 in Google",
    description:
      "Case Van Daken: van 6 naar 15+ nummer 1-posities in Google en +87% meer vertoningen door technische SEO, lokale landingspagina's en linkbuilding.",
    excerpt:
      "Van zes naar meer dan vijftien nummer 1-posities en een verdubbeling van de zichtbaarheid binnen enkele maanden.",
    image: heroVanDaken.url,
    imageAlt: "Dakdekker van Van Daken aan het werk",
    services: ["SEO", "Linkbuilding", "Lokale landingspagina's"],
    period: "6 maanden",
    highlights: [
      { label: "Nummer 1-posities", value: "6 → 15+" },
      { label: "Vertoningen", value: "+87%" },
      { label: "Vertoningen Q2", value: "179.000" },
    ],
    summary: [
      "Van 6 naar meer dan 15 nummer 1-posities tussen december 2024 en maart 2025",
      "Vertoningen van 95.600 naar 179.000 (+87%)",
      "Topposities op 'dakdekker in rotterdam', 'dakonderhoud rotterdam' en 'onderhoud daken'",
      "Fors meer offerteaanvragen vanuit organisch verkeer",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Van Daken Vastgoedonderhoud B.V. is een professioneel dakdekkersbedrijf met vestigingen in Amsterdam en Rotterdam. Ze bieden dakinspecties, dakrenovaties en loodwerk. Wat Van Daken onderscheidt is de klantgerichte aanpak: gratis dakinspecties, 24/7 spoedservice en tien jaar garantie zijn standaard. Het bedrijf is VCA-gecertificeerd en wordt beoordeeld met een 10 op Trustoo en 5 sterren op Google.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "Toen Van Daken eind 2024 bij ons aanklopte, was de online aanwezigheid nog beperkt. Lokaal waren ze bekend, maar uit de eerste analyse bleek dat ze op slechts zes zoekwoorden op positie 1 stonden, waaronder 'daklekkage rotterdam', 'dakdekker amsterdam oost' en twee merkgerichte zoekopdrachten.",
          "Voor een bedrijf met landelijke ambities en hoogwaardige service was dat een gemiste kans. De wens: structureel meer organisch verkeer, beter gevonden worden op relevante zoektermen en daarmee meer offerteaanvragen.",
        ],
      },
      {
        h: "De strategie",
        ps: [
          "We begonnen met een grondige analyse van de website, de technische prestaties en de bestaande content. Daaruit volgde een plan van aanpak met zoekmachineoptimalisatie als kern. We optimaliseerden de technische structuur en zetten een contentstrategie op gericht op zowel veelgebruikte als long-tail zoekwoorden zoals 'daklekkage Rotterdam' en 'aannemer dakrenovatie'.",
          "Daarnaast maakten we regionale landingspagina's voor onder meer Amsterdam en Rotterdam om in te spelen op lokale zoekintentie. De autoriteit van de website versterkten we met gerichte linkbuilding via relevante bouw- en vastgoedplatformen, en we verbeterden de interne linkstructuur zodat zoekmachines en bezoekers beter door de site worden geleid.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Binnen enkele maanden groeide het aantal nummer 1-posities van zes in december 2024 naar meer dan vijftien in maart 2025. Nieuwe topposities werden behaald op 'dakdekker in rotterdam', 'dakonderhoud rotterdam', 'erkende dakdekker rotterdam' en 'daklekkage reparatie rotterdam'. Ook een generieke term als 'onderhoud daken' bereikte de eerste plaats.",
        ],
        image: posVanDaken.url,
        imageAlt: "Groei in nummer 1-posities van Van Daken",
      },
      {
        ps: [
          "Ook het aantal vertoningen nam sterk toe. Van januari tot maart 2025 werd de website 95.600 keer vertoond in de zoekresultaten; van april tot juni 2025 was dat 179.000 keer, een groei van 87% in organische zichtbaarheid.",
          "De doorklikratio daalde licht van 0,5% naar 0,3%, een gebruikelijk effect wanneer het bereik zich uitbreidt naar bredere zoektermen. Het vergrote bereik legt een stevige basis voor verdere optimalisatie en conversieverhoging in de volgende fase.",
        ],
        image: imprVanDaken.url,
        imageAlt: "Vergelijking van vertoningen van Van Daken in Google",
      },
      {
        h: "Conclusie",
        ps: [
          "De samenwerking met Van Daken laat zien hoe krachtig een goed uitgevoerde SEO-strategie is. Door technische optimalisatie, strategische content en slimme linkbuilding groeide Van Daken van regionaal bekende speler naar landelijke autoriteit in het vakgebied.",
          "Onderstaande grafiek toont de groei in organische zichtbaarheid. Vanaf december 2024 stijgt het aantal zoekwoorden met topposities scherp, met een piek in februari, waarna het niveau structureel hoog blijft.",
        ],
        image: groeiVanDaken.url,
        imageAlt: "Organische groei van Van Daken",
      },
    ],
  },
  "dn-research": {
    slug: "dn-research",
    client: "Dn Research",
    title: "Dn Research: internationale groei door strategische content en SEO",
    description:
      "Case Dn Research: van 79.500 naar 307.000 vertoningen (+286%), meer dan een verdubbeling van het aantal maandelijkse bestellingen via internationale SEO.",
    excerpt:
      "+286% vertoningen, ruim 8.490 klikken en een verdrievoudiging van het aantal maandelijkse bestellingen binnen Europa.",
    image: heroDn.url,
    imageAlt: "Kantoor van Dn Research",
    services: ["Internationale SEO", "Content", "Technische SEO"],
    period: "sinds juli 2024",
    highlights: [
      { label: "Vertoningen", value: "+286%" },
      { label: "Klikken", value: "3.310 → 8.490" },
      { label: "Bestellingen", value: "400 → 1.200 p/m" },
    ],
    summary: [
      "Vertoningen van 79.500 naar 307.000 (+286%)",
      "Klikken van 3.310 naar 8.490",
      "Gemiddelde positie van 44,6 naar 34,7",
      "Maandelijkse bestellingen van circa 400 naar meer dan 1.200",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Dn Research is een onderzoeksbedrijf uit het Verenigd Koninkrijk, gespecialiseerd in hoogwaardige peptiden en bioregulatoren voor wetenschappelijk onderzoek. Met een sterk internationaal karakter levert Dn Research aan klanten in heel Europa, met snelle verzending en deskundige ondersteuning. De focus ligt op regeneratieve geneeskunde, cognitieve optimalisatie, sportherstel en anti-aging.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "Sinds de start van de samenwerking in juli 2024 was het doel om de online zichtbaarheid binnen de Europese markt te vergroten. Het merk was binnen een niche al enigszins bekend, maar uit analyse bleek dat er veel potentieel onbenut bleef. De website presteerde matig in zoekmachines: weinig vertoningen en lage posities op relevante zoektermen.",
        ],
      },
      {
        h: "De strategie",
        ps: [
          "Onze aanpak combineerde technische SEO, contentuitbreiding en internationale targeting. Een belangrijk onderdeel was het opzetten van Engelstalige landingspagina's gericht op verschillende Europese landen, geoptimaliseerd voor de zoektermen die per regio het meeste opleveren.",
          "Daarnaast publiceerden we met regelmaat blogcontent om expertise op te bouwen, nieuwe zoekwoorden aan te boren en de autoriteit van de website te versterken. Tegelijk verbeterden we de laadsnelheid en de mobiele bruikbaarheid.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Tussen juli en december 2024 werden 79.500 vertoningen geregistreerd in Google. In de vijf maanden daarna steeg dat naar 307.000 vertoningen: een groei van 286%. Het aantal klikken groeide van 3.310 naar 8.490 en de gemiddelde positie verbeterde van 44,6 naar 34,7.",
          "Ook het aantal bestellingen nam sterk toe. Tussen december 2024 en april 2025 verdrievoudigde het aantal maandelijkse orders: van circa 400 naar meer dan 1.200. Die constante groei weerspiegelt zowel de betere vindbaarheid als de relevantie van de content voor de doelgroep.",
        ],
        image: verkopenDn.url,
        imageAlt: "Groei in verkopen van Dn Research",
      },
      {
        h: "Zichtbaarheid in Search Console",
        ps: [
          "De grafiek uit Google Search Console toont de groei in zichtbaarheid sinds juli 2024. Waar het aantal vertoningen in de eerste maanden nog laag lag, laat de lijn vanaf november 2024 een duidelijke en consistente stijging zien. Die groei weerspiegelt de impact van de geoptimaliseerde landingspagina's, de technische verbeteringen en de internationale contentstrategie.",
        ],
        image: impressiesDn.url,
        imageAlt: "Vertoningen van Dn Research in Google Search Console",
      },
    ],
  },
  parketreus: {
    slug: "parketreus",
    client: "Parketreus",
    logo: logoParketreus.url,
    title: "Parketreus: regionale SEO die Limburg bereikt én beweegt",
    description:
      "Case Parketreus: 439.000 vertoningen in Google, 4.310 klikken en positie 2 op 'traprenovatie limburg' door lokale SEO en contentmarketing.",
    excerpt:
      "439.000 vertoningen en top 3-posities op lokale koopgerichte termen als 'traprenovatie limburg' en 'pvc vloeren heerlen'.",
    image: heroParket.url,
    imageAlt: "Showroom van Parketreus in Heerlen",
    services: ["Lokale SEO", "Content", "Technische SEO"],
    period: "8 maanden",
    highlights: [
      { label: "Vertoningen", value: "439.000" },
      { label: "Klikken", value: "4.310" },
      { label: "'traprenovatie limburg'", value: "positie 18 → 2" },
    ],
    summary: [
      "439.000 vertoningen en 4.310 organische klikken sinds september 2024",
      "'traprenovatie limburg' van positie 18 naar positie 2 (692 klikken)",
      "'pvc vloeren heerlen' goed voor 436 klikken",
      "Vertoningen tussen twee periodes van 182.000 naar 257.000 (+41%)",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Parketreus is een gerenommeerde vloerspecialist uit Heerlen, Zuid-Limburg, met meer dan 30 jaar ervaring in de verkoop en plaatsing van parket, laminaat en pvc-vloeren. Ook voor traprenovatie in Limburg is dit familiebedrijf een bekend adres. Met een showroom van 2.000 m², een breed assortiment topmerken en persoonlijke service richt Parketreus zich op klanten in heel Zuid-Limburg.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "In september 2024 startte de samenwerking met als doel: meer online zichtbaarheid en meer lokale bezoekers via zoekmachines. Parketreus had regionaal een goede naam, maar digitaal bleef het achter. Online werd het bedrijf overvleugeld door grotere landelijke spelers en webshops, terwijl de lokale vindbaarheid op belangrijke termen als 'pvc vloer Heerlen' en 'visgraat vloer Limburg' onvoldoende was.",
        ],
      },
      {
        h: "De strategie",
        ps: [
          "We startten met een technische en inhoudelijke audit van de website. Op basis daarvan voerden we gerichte optimalisaties door: lokale landingspagina's voor de belangrijkste zoekwoorden, gecombineerd met informatieve blogartikelen over vloertrends en onderhoudstips.",
          "Daarnaast werkten we aan laadsnelheid, mobiele gebruikservaring en interne linkstructuur. De content is afgestemd op koopgerichte zoekwoorden met een lokale focus, waardoor Parketreus beter gevonden wordt door klanten uit de eigen regio.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Op zoekwoordniveau zijn mooie ontwikkelingen zichtbaar. 'traprenovatie limburg' steeg van positie 18 naar positie 2, goed voor bijna 2.600 vertoningen en 692 klikken. Het lokale zoekwoord 'pvc vloeren heerlen' groeide naar 436 klikken.",
        ],
        image: kwParket.url,
        imageAlt: "Groei in zoekwoorden van Parketreus",
      },
      {
        ps: [
          "Sinds de start van de samenwerking is het aantal vertoningen in Google gestegen naar 439.000, met 4.310 klikken uit organische zoekresultaten. Vergelijken we de eerste vier maanden met de laatste vier maanden, dan is het verschil nog duidelijker.",
        ],
        bullets: [
          "Vertoningen stegen van 182.000 naar 257.000 (+41%)",
          "Klikken stegen van 2.100 naar 2.210, met een hogere relevantie",
        ],
        image: vglParket.url,
        imageAlt: "Vergelijking van vertoningen van Parketreus",
      },
      {
        h: "Conclusie",
        ps: [
          "De grafiek hieronder toont de stijgende lijn in zichtbaarheid en verkeer sinds het begin van de samenwerking. De pieken in maart en april 2025 zijn momenten waarop specifieke pagina's, zoals acties of nieuwe blogposts, extra tractie kregen.",
          "De case laat zien dat ook een regionale speler zich succesvol kan onderscheiden via SEO en contentmarketing. Het resultaat: meer relevante bezoekers, een sterkere online positie en meer verkeer naar de showroom in Heerlen.",
        ],
        image: totParket.url,
        imageAlt: "Totale vertoningen van Parketreus",
      },
    ],
  },
  "de-bruidsmode-outlet-belgie": {
    slug: "de-bruidsmode-outlet-belgie",
    client: "De Bruidsmode Outlet België",
    logo: logoBruidsmode.url,
    title: "Verdubbeling van omzet in 1 jaar door SEO en Google Ads",
    description:
      "Case De Bruidsmode Outlet België: +40% organische groei, +126% behaalde doelen en 500% meer afspraakaanvragen door SEO en Google Ads.",
    excerpt:
      "Stabiele top 5-posities op 'trouwjurken', bijna 50% meer organisch verkeer en 500% meer afspraakaanvragen.",
    image: heroBruid.url,
    imageAlt: "Bohemian trouwjurk bij De Bruidsmode Outlet",
    services: ["SEO", "Google Ads", "Social media"],
    period: "12 maanden",
    highlights: [
      { label: "Organisch verkeer", value: "+40%" },
      { label: "Online doelen", value: "+126%" },
      { label: "Afspraakaanvragen", value: "+500%" },
    ],
    summary: [
      "Bijna 50% meer organisch verkeer in minder dan een jaar",
      "126% meer behaalde online doelen",
      "500% groei in afspraakaanvragen",
      "150% meer mailto-clicks en 220% meer telefoonclicks",
    ],
    blocks: [
      {
        h: "Over dit project",
        ps: [
          "De Bruidsmode Outlet is de grootste bruidsmodeoutlet van België. Sinds 2020 werkt B. Analyzed samen met De Bruidsmode Outlet aan zichtbaarheid en conversie, en die samenwerking loopt nog altijd door.",
        ],
      },
      {
        h: "Doelen",
        ps: [
          "Dankzij de langdurige relatie heeft de website een sterke SEO-basis opgebouwd, met stabiele organische top 5-posities op grote termen als 'trouwjurken', 'trouwjurk', 'trouwkleed' en 'trouwjurken outlet'. De doelstelling was om het organisch verkeer met 20% te verhogen.",
          "Inmiddels zien we stijgingen van 40% in organische groei en meer dan 100% groei in online conversies: afspraken, e-mailclicks en telefoontjes.",
        ],
      },
      {
        h: "Toename organisch verkeer",
        ps: [
          "In onderstaande screenshot zien we een stijging van bijna 50% organisch verkeer in nog geen jaar tijd. Het aantal behaalde doelen steeg met 126%.",
        ],
        image: organischBruid.url,
        imageAlt: "Toename organisch verkeer De Bruidsmode Outlet",
      },
      {
        h: "Online doelen",
        ps: [
          "In elf maanden tijd is er een enorme groei zichtbaar in de gemeten conversies: 500% groei in het aantal afspraakaanvragen, 150% groei in mailto-clicks en 220% groei in telefoonclicks.",
        ],
        image: doelenBruid.url,
        imageAlt: "Online doelen De Bruidsmode Outlet",
      },
      {
        h: "Google Ads resultaten",
        ps: [
          "Naast SEO draait er een doorlopende Google Ads-inzet die de bruidshuizen in de drukke periodes extra afspraken oplevert. De campagnes zijn opgebouwd rond merk-, product- en lokale zoekopdrachten.",
        ],
        image: adsBruid.url,
        imageAlt: "Google Ads resultaten De Bruidsmode Outlet",
      },
    ],
  },
  "meer-omzet-sleep-factory-bv": {
    slug: "meer-omzet-sleep-factory-bv",
    client: "Sleep Factory BV",
    title: "Groei van 800% in het aantal online transacties",
    description:
      "Case Sleep Factory BV: 460% meer organisch verkeer, top 3-posities op 'goedkope boxspring' en 136% meer online bestellingen door SEO en Google Ads.",
    excerpt:
      "Top 3-posities op grote boxspringtermen, 460% meer organisch verkeer en 136% meer online bestellingen.",
    image: heroSleep.url,
    imageAlt: "Boxspring Madrid van Sleep Factory",
    services: ["SEO", "Google Ads"],
    period: "1,5 jaar",
    highlights: [
      { label: "Organisch verkeer", value: "+460%" },
      { label: "Online bestellingen", value: "+136%" },
      { label: "Topposities", value: "10+ zoekwoorden" },
    ],
    summary: [
      "Stabiele top 3-posities op 'goedkope boxspring' en 'boxspring 180x200'",
      "Bijna 460% meer organisch verkeer in minder dan een jaar",
      "126% meer behaalde online doelen",
      "136% meer online bestellingen in ruim elf maanden",
    ],
    blocks: [
      {
        h: "Over dit project",
        ps: [
          "Sleep Factory BV is een webshop in boxsprings. Sinds 2019 werkt B. Analyzed samen met Sleep Factory aan organische groei en rendabele advertenties.",
        ],
      },
      {
        h: "Doelen",
        ps: [
          "Dankzij de intensieve samenwerking heeft de webshop een sterke SEO-basis opgebouwd, met stabiele top 3-posities op grote termen als 'goedkope boxspring' en 'boxspring 180x200'. De doelstelling was groei in organische bezoekersaantallen én topposities behalen. Dat is op meer dan tien relevante zoekwoorden gelukt.",
        ],
        image: kwSleep.url,
        imageAlt: "Keywordposities van Sleep Factory",
      },
      {
        h: "Toename organisch verkeer en online doelen",
        ps: [
          "In onderstaande screenshot zien we een stijging van bijna 460% organisch verkeer in nog geen jaar tijd. Het aantal behaalde doelen steeg met 126%.",
        ],
        image: seoSleep.url,
        imageAlt: "Organische groei van Sleep Factory",
      },
      {
        h: "Toename online bestellingen",
        ps: [
          "Het aantal online bestellingen groeide in ruim elf maanden met 136%. De belangrijkste kanalen zijn Google / cpc, direct verkeer en Google / organic.",
        ],
        image: bestSleep.url,
        imageAlt: "Online bestellingen van Sleep Factory",
      },
      {
        ps: [
          "De verdeling over kanalen laat zien hoe SEO en Google Ads elkaar versterken: advertenties leveren direct omzet en zoekwoorddata, organisch verkeer bouwt daar structureel op door.",
        ],
        image: kanalenSleep.url,
        imageAlt: "Kanalenverdeling van Sleep Factory",
      },
    ],
  },
  "online-transacties-vogelvoerkopen": {
    slug: "online-transacties-vogelvoerkopen",
    client: "Vogelvoerkopen.nl",
    logo: logoVogelvoer.url,
    title: "Vervijfvoudiging van het aantal online transacties in 9 maanden",
    description:
      "Case Vogelvoerkopen.nl: vijf keer zoveel online transacties in negen maanden door SEO en Google Ads, met top 3-posities op 'vogelvoer kopen'.",
    excerpt:
      "Vijf keer zoveel online transacties in negen maanden, met stabiele top 3-posities op 'vogelvoer kopen' en 'pindaslinger'.",
    image: heroVogel.url,
    imageAlt: "Pindaslinger van Vogelvoerkopen.nl",
    services: ["SEO", "Google Ads", "CRO"],
    period: "9 maanden",
    highlights: [
      { label: "Online transacties", value: "5x" },
      { label: "Conversiepercentage", value: "+10%" },
      { label: "Posities", value: "top 3" },
    ],
    summary: [
      "Vervijfvoudiging van het aantal online transacties in negen maanden",
      "Conversiepercentage met 10% verhoogd door optimalisatie van de productpagina's",
      "Stabiele top 3-posities op 'vogelvoer kopen', 'vogelvoer' en 'pindaslinger'",
      "Doelstelling van minimaal twee transacties per dag ruimschoots behaald",
    ],
    blocks: [
      {
        h: "Over dit project",
        ps: [
          "Vogelvoerkopen.nl is een webshop die kwalitatief vogelvoer verkoopt. Sinds april 2021 werkt B. Analyzed samen met Vogelvoerkopen.nl en zijn wij verantwoordelijk voor SEO, Google Ads en de groei van het aantal online transacties.",
        ],
      },
      {
        h: "Doelen",
        ps: [
          "Dankzij de intensieve samenwerking heeft de webshop een goede SEO-basis opgebouwd, met stabiele top 3-posities op grote termen als 'vogelvoer kopen', 'vogelvoer' en 'pindaslinger'. De doelstelling was om via SEO en Google Ads minimaal twee transacties per dag te realiseren. Die doelen zijn inmiddels ruimschoots behaald.",
        ],
        image: kwVogel.url,
        imageAlt: "Keywordposities van Vogelvoerkopen.nl",
      },
      {
        h: "Meer omzet uit hetzelfde verkeer",
        ps: [
          "Meer bezoekers is maar de helft van het werk. Toen het verkeer eenmaal groeide, hebben we ons op de productpagina's gericht: de plek waar de bezoeker beslist of hij bestelt of wegklikt.",
          "We hebben de productinformatie hoger op de pagina gezet, de verzendkosten en levertijd direct zichtbaar gemaakt in plaats van pas in de afrekenstap, en het aantal stappen naar de winkelwagen verkleind. Ook zijn de productfoto's en de omschrijvingen consistenter gemaakt, zodat bezoekers niet hoefden te zoeken naar wat ze precies kregen.",
          "Het conversiepercentage steeg daardoor met 10%. Dat komt bovenop de groei uit SEO en Google Ads: dezelfde bezoekersaantallen leverden simpelweg meer bestellingen op, zonder extra advertentiebudget.",
        ],
      },
    ],
  },

  "steinbrueckner-truckwash-top-5": {
    slug: "steinbrueckner-truckwash-top-5",
    client: "Steinbrückner Nederland",
    title: "Van 1 naar 28 zoekwoorden in de top 5 in twaalf maanden",
    description:
      "Case Steinbrückner: in twaalf maanden van 1 naar 28 zoekwoorden in de top 5, acht nummer 1-posities op truckwash-installaties en 733% meer organisch verkeer.",
    excerpt:
      "Twintig zoekopdrachten per maand, en een orderwaarde van meer dan € 75.000,-. In twaalf maanden van één naar achtentwintig zoekwoorden in de top 5, en nummer 1 op vrijwel elke term die telt.",
    services: ["SEO", "Technische SEO", "Content", "GEO"],
    period: "januari 2025 – januari 2026",
    highlights: [
      { label: "Zoekwoorden in top 5", value: "1 → 28" },
      { label: "Organisch verkeer", value: "+733%" },
      { label: "Orderwaarde per installatie", value: "€ 75.000+" },
    ],
    summary: [
      "Zoekwoorden in de top 5: van 1 naar 28 in twaalf maanden",
      "Totaal gerankte zoekwoorden: van 65 naar 348 (+435%)",
      "Geschat organisch verkeer: van 6 naar 50 bezoekers per maand (+733%)",
      "Nummer 1 op acht commerciële zoekwoorden rond truckwash-installaties",
      "Eén order in deze markt vertegenwoordigt een waarde van meer dan € 75.000,-",
      "Geciteerd als bron in Google's AI Overview op meerdere zoekopdrachten",
      "Technische auditscore 89 van 100, met 4 fouten op 40 pagina's",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Steinbrückner Nederland levert wasinstallaties voor vrachtwagens: vaste wasstraten, mobiele truckwash-units en borstelsystemen voor bedrijfsvoertuigen. De klanten zijn transportbedrijven, logistieke dienstverleners en wagenparkbeheerders.",
          "Dat is een markt met een ongemakkelijke eigenschap voor wie naar zoekvolumes kijkt: op de belangrijkste zoekwoorden wordt twintig tot dertig keer per maand gezocht. Geen enkel bureau wordt daar enthousiast van, tot je doorrekent wat er achter zo'n zoekopdracht zit. Eén installatie vertegenwoordigt bij Steinbrückner een orderwaarde van meer dan € 75.000,-.",
          "Daarmee kantelt de hele rekensom. Twintig zoekopdrachten per maand zijn tweehonderdveertig per jaar. Wie daar één klant uit haalt, heeft het volledige SEO-traject een veelvoud terugverdiend. Zoekvolume zegt in deze markt niets; orderwaarde zegt alles.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "In januari 2025 stond de website op precies één zoekwoord in de top 5 en op vierenzestig andere ergens daarachter. Het geschatte organische verkeer lag op zes bezoekers per maand. Voor een bedrijf dat zijn omzet uit een handvol grote orders haalt, betekende dat: wie niet toevallig de merknaam kende, kwam er nooit.",
          "De onderliggende oorzaak was niet technisch maar structureel. De site had wel pagina's, maar geen pagina die één specifieke zoekvraag volledig beantwoordde. Wie zocht op 'truckwash installatie' kwam op een algemene productpagina die ook over borstels en over mobiele units ging, en dus over geen van drieën overtuigend was.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "We zijn begonnen met het uit elkaar trekken van de zoekvragen. Elk onderwerp kreeg een eigen pagina met een eigen belofte: truckwash-installatie, wasstraat kopen, mobiele truckwash, wasstraat voor vrachtwagens, bedrijfsvoertuigreiniging. Niet vijf varianten van dezelfde tekst, maar vijf pagina's die elk een andere aankoopvraag beantwoorden.",
          "Elke pagina opent met het antwoord in de eerste alinea, gevolgd door de bijvragen als koppen: wat kost het, wat is het verschil met een vaste wasstraat, hoeveel ruimte heb je nodig, hoe lang duurt de installatie. Dat is dezelfde opbouw die een verkoopgesprek heeft, en precies de opbouw waar zowel Google als AI-antwoordmachines een los citaat uit kunnen halen.",
          "Daarnaast is de technische basis opgeruimd: indexering, laadtijd, interne links van de sterke pagina's naar de pagina's die net buiten bereik stonden, en schema-markup zodat machines konden lezen wat er op de pagina stond.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Twaalf maanden later stonden er achtentwintig zoekwoorden in de top 5 en negentien in de top 6 tot 10. Het totale aantal zoekwoorden waarop de site gevonden wordt groeide van vijfenzestig naar driehonderdachtenveertig, een toename van 435%. Het geschatte organische verkeer ging van zes naar vijftig bezoekers per maand.",
          "Belangrijker dan de aantallen is wélke posities het zijn. Steinbrückner staat op nummer 1 op truckwash installatie, wasinstallatie vrachtwagen, vrachtwagen wasstraat kopen, mobiele truckwash installatie, truckwash installaties, truckwash te koop, wasstraat installatie kopen en truck wash for sale. Dat is vrijwel de complete set zoekopdrachten waarmee een koper in deze markt zoekt.",
        ],
        bullets: [
          "Zoekwoorden in top 1–5: van 1 naar 28",
          "Zoekwoorden in top 6–10: van 4 naar 19",
          "Gerankte zoekwoorden totaal: van 65 naar 348",
          "Geschat organisch verkeer: van 6 naar 50 per maand",
          "Geschatte waarde van dat verkeer: van € 1,50 naar € 25,74 per maand",
        ],
      },
      {
        h: "Ook genoemd in AI-antwoorden",
        ps: [
          "Op zoekopdrachten als 'truckwash installatie', 'wasinstallatie vrachtwagen' en 'truckwash te koop' wordt Steinbrückner inmiddels geciteerd in de AI Overview van Google: het samengevatte antwoord bovenaan de zoekresultaten, met bronvermelding.",
          "Dat is geen toeval en ook geen aparte dienst. Het is het gevolg van dezelfde keuze als hierboven: een pagina die de vraag in één afgebakende alinea beantwoordt, is een pagina die een AI-systeem kan overnemen. Wie zijn antwoord pas in alinea vijf geeft, komt er niet in.",
        ],
      },
      {
        h: "De technische basis",
        ps: [
          "Bij de laatste audit scoorde de site 89 van de 100, met vier fouten op veertig gecrawlde pagina's. Dat is geen doel op zich, maar het is wel de voorwaarde: een pagina die niet goed geïndexeerd wordt, kan nergens op ranken, hoe goed de tekst ook is.",
        ],
      },
    ],
  },

  "med4u-mediation-van-16-naar-1": {
    slug: "med4u-mediation-van-16-naar-1",
    client: "Med4U mediation",
    title: "Van positie 16 naar 1, en 22 keer zoveel organisch verkeer",
    description:
      "Case Med4U: in twee jaar van 4 naar 89 organische bezoekers per maand, nummer 1 op mediation asten en geciteerd in Google's AI Overview.",
    excerpt:
      "Een mediationpraktijk die online nauwelijks bestond. Twee jaar later: nummer 1 op het belangrijkste zoekwoord van de regio en tweeëntwintig keer zoveel organisch verkeer.",
    services: ["SEO", "Content", "Local SEO", "GEO"],
    period: "februari 2024 – februari 2026",
    highlights: [
      { label: "Organisch verkeer", value: "4 → 89 p/m" },
      { label: "mediation asten", value: "positie 16 → 1" },
      { label: "Zoekwoorden in top 10", value: "24 → 49" },
    ],
    summary: [
      "Geschat organisch verkeer: van 4 naar 89 bezoekers per maand",
      "Nummer 1 op 'mediation asten' (170 zoekopdrachten per maand), van positie 16",
      "Zoekwoorden in de top 10: van 24 naar 49",
      "Totaal gerankte zoekwoorden: van 247 naar 743 (+201%)",
      "Geschatte waarde van het organische verkeer: van € 2 naar € 191 per maand",
      "Geciteerd in Google's AI Overview op meerdere inhoudelijke zoekvragen",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Med4U is een mediationpraktijk die werkt in de regio Asten, Someren en de wijde omgeving daaromheen. Het werk bestaat uit scheidingsbemiddeling, arbeidsmediation en conflictbegeleiding: dienstverlening waarbij mensen pas gaan zoeken op het moment dat het echt nodig is.",
          "Dat maakt de zoekvraag klein maar loodzwaar. Iemand die zoekt op 'mediation asten' heeft geen informatiebehoefte, die heeft een probleem. Wie op dat moment niet bovenaan staat, bestaat niet.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "In februari 2024 stond Med4U op positie 16 voor het belangrijkste lokale zoekwoord. Het geschatte organische verkeer lag op vier bezoekers per maand. Er stonden wel tweehonderdzevenenveertig zoekwoorden geregistreerd, maar het overgrote deel daarvan stond op pagina twee, drie of verder: zichtbaar in een rapport, onzichtbaar voor een klant.",
          "Tegelijk was er wél inhoud. De praktijk schreef al over de onderwerpen waar mensen middenin een scheiding mee zitten. Die content stond alleen zo op de site dat noch een zoeker, noch Google er goed uit kon halen welke vraag er nu precies beantwoord werd.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "We hebben de site langs twee sporen aangepakt. Het eerste spoor is lokaal: een heldere plaatsstructuur voor Asten, Someren en de omliggende gemeenten, met per plaats een pagina die daadwerkelijk iets zegt over die plaats in plaats van dezelfde tekst met een andere plaatsnaam. Daarnaast het Google Bedrijfsprofiel op orde, want bij deze zoekvraag verschijnt vrijwel altijd een kaartresultaat boven de gewone resultaten.",
          "Het tweede spoor is inhoudelijk. De bestaande artikelen zijn herschreven rond de vragen die mensen letterlijk intikken: wat kost mediation, wat is het uurtarief van een mediator, hoe verdeel je de inboedel, wat is de gemiddelde waarde van een inboedel bij een scheiding. Elke vraag kreeg zijn eigen kop met het antwoord er direct onder.",
          "Dat laatste is het deel dat het meeste heeft opgeleverd, en het is ook het minst spectaculaire werk: geen nieuwe site, geen campagne, maar bestaande kennis zo opschrijven dat hij vindbaar wordt.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Twee jaar later staat Med4U op nummer 1 voor 'mediation asten', het zoekwoord waarmee het traject begon op positie 16. Ook op 'mediation someren' staat de praktijk eerste. Het geschatte organische verkeer groeide van vier naar negenentachtig bezoekers per maand: een vertwintigvoudiging.",
          "Het aantal zoekwoorden in de top 10 ging van vierentwintig naar negenenveertig, en het totale aantal zoekwoorden waarop de site gevonden wordt van tweehonderdzevenenveertig naar zevenhonderddrieënveertig. De geschatte waarde van dat verkeer, oftewel wat je ervoor zou betalen via advertenties, liep op van twee euro naar honderdeenennegentig euro per maand.",
        ],
        bullets: [
          "'mediation asten' (170 p/m): van positie 16 naar 1",
          "'mediation someren' (50 p/m): positie 1",
          "Geschat organisch verkeer: van 4 naar 89 per maand",
          "Zoekwoorden in top 1–5: van 13 naar 29",
          "Gerankte zoekwoorden totaal: van 247 naar 743",
        ],
      },
      {
        h: "De artikelen die AI overneemt",
        ps: [
          "Op zoekvragen als 'verdelen inboedel', 'gemiddelde waarde inboedel bij scheiding' en 'uurtarief mediator' wordt Med4U geciteerd in de AI Overview van Google. Dat zijn geen commerciële zoekwoorden, maar ze doen precies wat content hoort te doen: iemand die midden in een scheiding zit, komt de praktijk tegen op het moment dat hij een vraag heeft, en niet pas op het moment dat hij een mediator zoekt.",
        ],
      },
    ],
  },

  "taxicentrale-veghel-nummer-1": {
    slug: "taxicentrale-veghel-nummer-1",
    client: "Taxicentrale Veghel",
    title: "Nummer 1 op taxi veghel, goed voor 86% van alle klikken",
    description:
      "Case Taxicentrale Veghel: nummer 1 op taxi veghel en vier verwante zoekwoorden, met 86% van alle klikken op de belangrijkste term van de regio.",
    excerpt:
      "Eén zoekwoord bepaalt in deze markt vrijwel de hele vraag. Taxicentrale Veghel pakte het, en houdt sindsdien 86% van alle klikken die erop vallen.",
    services: ["SEO", "Local SEO", "Content"],
    period: "januari 2023 – mei 2024",
    highlights: [
      { label: "'taxi veghel'", value: "positie 1" },
      { label: "Aandeel van alle klikken", value: "86%" },
      { label: "Organisch verkeer", value: "+136%" },
    ],
    summary: [
      "Nummer 1 op 'taxi veghel' (480 zoekopdrachten per maand)",
      "86% van alle klikken op dat zoekwoord komt bij Taxicentrale Veghel terecht",
      "Ook nummer 1 op taxibedrijf veghel, veghel taxi, taxi centrale veghel en taxicentrale veghel",
      "Geschat organisch verkeer: van 22 naar 52 bezoekers per maand (+136%)",
      "Gerankte zoekwoorden: van 15 naar 34",
      "Piek in het najaar van 2023: een verkeerswaarde van ruim € 110 per maand",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Taxicentrale Veghel rijdt personenvervoer, zakelijk vervoer en luchthavenritten in Veghel en omgeving. Een lokale dienstverlener in een markt waarin de klantvraag zich concentreert op een handvol zoekopdrachten.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "In januari 2023 stond de site op vijftien zoekwoorden, waarvan zeven in de top 5. Het geschatte organische verkeer lag op tweeëntwintig bezoekers per maand. Het probleem was niet dat er niets stond, maar dat de site nauwelijks bereik had buiten de eigen bedrijfsnaam.",
          "In deze branche is dat een reëel omzetprobleem. Wie een taxi nodig heeft, zoekt, kijkt naar de eerste twee resultaten en belt. De derde plek levert een fractie op van wat de eerste oplevert, en de tweede pagina levert niets op.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "De aanpak was smal en diep in plaats van breed. In plaats van tientallen pagina's voor tientallen zoekwoorden, hebben we de site laten winnen op de zoekopdracht die er in deze markt het meest toe doet: 'taxi veghel', met vierhonderdtachtig zoekopdrachten per maand.",
          "Dat betekende de homepage volledig op die zoekvraag inrichten, de dienstpagina's voor luchthavenvervoer en zakelijk vervoer daaronder hangen, en het Google Bedrijfsprofiel zo compleet maken dat de centrale ook in het kaartresultaat bovenaan verschijnt. Bij lokale zoekopdrachten staan die kaartresultaten boven de gewone resultaten, dus wie daar niet in staat, mist het grootste deel van de klikken.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Taxicentrale Veghel staat op nummer 1 voor 'taxi veghel' en vangt daarmee 86% van alle klikken op die zoekopdracht. Dat cijfer is de kern van deze case: het gaat niet om zichtbaarheid maar om marktaandeel op de zoekopdracht die de hele lokale vraag draagt.",
          "Daarnaast staat de centrale eerste op taxibedrijf veghel, veghel taxi, taxi centrale veghel en taxicentrale veghel, en in de top 3 op zakelijk vervoer veghel en luchthaven taxi veghel. Het geschatte organische verkeer groeide in de periode van tweeëntwintig naar tweeënvijftig bezoekers per maand, met een piek in het najaar van 2023 waarin het verkeer een geschatte advertentiewaarde van ruim honderdtien euro per maand vertegenwoordigde.",
        ],
        bullets: [
          "'taxi veghel' (480 p/m): positie 1, met 86% van alle klikken",
          "'taxibedrijf veghel', 'veghel taxi', 'taxi centrale veghel': positie 1",
          "'zakelijk vervoer veghel': positie 3 · 'luchthaven taxi veghel': positie 2",
          "Geschat organisch verkeer: van 22 naar 52 per maand",
          "Gerankte zoekwoorden: van 15 naar 34",
        ],
      },
      {
        h: "Wat deze case laat zien",
        ps: [
          "Niet elke markt vraagt om honderden zoekwoorden. In een lokale dienstverlening met één dominante zoekopdracht is het verstandiger om die ene opdracht volledig te winnen dan om breed zichtbaar te worden op termen die niemand intikt.",
          "Dat maakt het traject ook goedkoper. Er hoefde geen contentfabriek te draaien; er moest één pagina beter zijn dan die van de concurrent, en één bedrijfsprofiel completer.",
        ],
      },
    ],
  },

  "10-euro-taxi-den-bosch": {
    slug: "10-euro-taxi-den-bosch",
    client: "10 Euro Taxi",
    logo: logo10euro.url,
    title: "Drie nummer 1-posities op de zoekwoorden die Den Bosch bepalen",
    description:
      "Case 10 Euro Taxi: nummer 1 op goedkope taxi den bosch en twee verwante termen, met een groei van 88 naar 114 zoekwoorden in de top 5.",
    excerpt:
      "In een stad waar prijs het zoekwoord is, wonnen we de drie zoekopdrachten die daar allemaal over gaan. Plus vijfhonderd extra zoekwoorden eromheen.",
    services: ["SEO", "Local SEO", "Content"],
    period: "januari 2023 – januari 2025",
    highlights: [
      { label: "Zoekwoorden in top 5", value: "88 → 114" },
      { label: "Nummer 1-posities", value: "3 kernzoekwoorden" },
      { label: "Gerankte zoekwoorden", value: "1.471 → 2.001" },
    ],
    summary: [
      "Nummer 1 op 'goedkope taxi den bosch', 'taxi den bosch goedkoop' en 'goedkoopste taxi den bosch'",
      "Zoekwoorden in de top 5: van 88 naar 114",
      "Totaal gerankte zoekwoorden: van 1.471 naar 2.001 (+36%)",
      "Positie 3 op 'taxi vught' en 'vught taxi' (320 zoekopdrachten per maand)",
      "Zichtbaar in het kaartresultaat op de belangrijkste lokale zoekopdrachten",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "10 Euro Taxi rijdt personenvervoer in 's-Hertogenbosch en de omliggende gemeenten, met een propositie die in de naam zit: een vaste, lage ritprijs. Dat is een scherpe positionering, en het is precies de positionering waar de lokale zoekvraag ook om draait.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "Bij de start in januari 2023 stond de site al op ruim veertienhonderd zoekwoorden, waarvan achtentachtig in de top 5. Er was dus een fundament. Wat ontbrak was dominantie op de zoekopdrachten waar de propositie van het bedrijf letterlijk over gaat: de varianten rond 'goedkope taxi den bosch'.",
          "Dat is een herkenbaar patroon bij sites die organisch gegroeid zijn. Er staat veel, er rankt veel, maar juist op de handvol termen met de scherpste koopintentie staat de concurrent boven je.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "We zijn begonnen bij de prijszoekwoorden. Er kwam een pagina die expliciet over goedkoop taxivervoer in Den Bosch gaat, met de tarieven zichtbaar op de pagina in plaats van achter een aanvraagformulier. Dat is in deze markt het verschil: wie op prijs zoekt, wil een bedrag zien, geen offerteknop.",
          "Daarnaast is de plaatsstructuur uitgebreid naar de omliggende gemeenten, met per plaats een pagina die de rit vanaf die plaats beschrijft in plaats van dezelfde tekst met een andere plaatsnaam. Vught is daarvan het duidelijkste voorbeeld: een aparte pagina voor een zoekopdracht met driehonderdtwintig zoekopdrachten per maand.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "In januari 2025 stond 10 Euro Taxi op nummer 1 voor goedkope taxi den bosch, taxi den bosch goedkoop en goedkoopste taxi den bosch, alle drie met honderdveertig zoekopdrachten per maand. Dat is de volledige set prijsgerelateerde zoekopdrachten voor de stad.",
          "Het aantal zoekwoorden in de top 5 groeide van achtentachtig naar honderdveertien, en het totale aantal zoekwoorden waarop de site gevonden wordt van veertienhonderdeenenzeventig naar tweeduizendeen. Op 'taxi vught' en 'vught taxi', samen goed voor driehonderdtwintig zoekopdrachten per maand, staat de site op positie 3.",
        ],
        bullets: [
          "'goedkope taxi den bosch' (140 p/m): positie 1",
          "'taxi den bosch goedkoop' (140 p/m): positie 1",
          "'goedkoopste taxi den bosch' (140 p/m): positie 1",
          "'taxi vught' en 'vught taxi' (320 p/m): positie 3",
          "Zoekwoorden in top 1–5: van 88 naar 114",
        ],
      },
    ],
  },

  "venlo-taxi-negen-jaar-nummer-1": {
    slug: "venlo-taxi-negen-jaar-nummer-1",
    client: "Venlo Taxi",
    logo: logoVenloTaxi.url,
    title: "Negen jaar lang nummer 1 op taxi venlo",
    description:
      "Case Venlo Taxi: binnen een jaar van positie 3 naar positie 1 op 'taxi venlo', en die plek negen jaar lang vastgehouden. Inclusief een nieuwe site met ritcalculatie.",
    excerpt:
      "Nummer 1 worden is één ding. Het negen jaar blijven is een ander vak. Van positie 3 naar 1 in twaalf maanden, en sindsdien niet meer weggeweest.",
    services: ["SEO", "Local SEO", "Website", "Content"],
    period: "2017 – heden",
    highlights: [
      { label: "'taxi venlo'", value: "9 jaar positie 1" },
      { label: "Zoekwoorden in top 5", value: "26 → 106" },
      { label: "Gerankte zoekwoorden", value: "344 → 1.270" },
    ],
    summary: [
      "Van positie 3 naar positie 1 op 'taxi venlo' binnen twaalf maanden",
      "Die eerste positie sindsdien onafgebroken vastgehouden",
      "In de meetdata onafgebroken positie 1 van januari 2021 tot juni 2026: 203 wekelijkse metingen",
      "Zoekwoorden in de top 5: van 26 naar 106",
      "Totaal gerankte zoekwoorden: van 344 naar 1.270",
      "Nieuwe website met ritcalculatie: direct een prijs in plaats van een offerteaanvraag",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "Venlo Taxi rijdt personenvervoer in Venlo en de wijde omgeving: ritten binnen de stad, luchthavenvervoer naar Düsseldorf en Weeze, en zakelijk vervoer. Een bedrijf dat het volledig moet hebben van mensen die op dit moment een taxi nodig hebben.",
          "In die markt bestaat geen overwegingsfase. Iemand zoekt, kijkt naar het eerste resultaat en belt. Wie tweede staat, krijgt een fractie. Wie derde staat, wordt zelden gebeld.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "Bij de start stond Venlo Taxi op positie 3 voor 'taxi venlo'. Dat is precies de vervelendste plek die er is: zichtbaar genoeg om te denken dat het goed gaat, te laag om er iets aan te hebben. Twee concurrenten vingen samen het overgrote deel van de telefoontjes af.",
          "Het doel was daarom niet 'hoger in Google'. Het doel was die eerste plek, en daarna het lastigere deel: hem houden terwijl concurrenten en Google zelf blijven bewegen.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "Het eerste jaar ging over het winnen van de positie. De site is opgebouwd rond de zoekopdrachten waarmee mensen in deze regio daadwerkelijk zoeken: taxi venlo, taxicentrale venlo, taxi blerick, taxi tegelen, en de luchthavenritten naar Düsseldorf en Weeze. Elke rit en elke plaats kreeg een eigen pagina met echte informatie, niet dezelfde tekst met een andere plaatsnaam erin.",
          "Daarnaast is er een nieuwe website gebouwd met een ritcalculatie erin. Dat is de belangrijkste conversiebeslissing van het hele traject: wie een taxi zoekt, wil een prijs zien, geen offerteformulier. De calculator geeft direct een bedrag, waardoor de bezoeker niet wegklikt naar een concurrent die zijn tarieven wél toont.",
          "Het Google Bedrijfsprofiel is compleet gemaakt en compleet gehouden, want bij lokale zoekopdrachten staat het kaartresultaat boven de gewone resultaten. Wie daar niet in staat, mist het grootste deel van de klikken, hoe goed de website ook is.",
        ],
      },
      {
        h: "Het moeilijke deel: negen jaar vasthouden",
        ps: [
          "Nummer 1 worden is een project. Nummer 1 blijven is onderhoud, en dat is waar de meeste trajecten stukgaan. In negen jaar heeft Google zijn zoekresultaten meermaals ingrijpend verbouwd, zijn er kaartresultaten en AI-antwoorden bij gekomen, en hebben concurrenten hun eigen sites vernieuwd.",
          "In de meetdata is dat goed te zien. Van januari 2021 tot juni 2026 registreerde SE Ranking bij 203 opeenvolgende wekelijkse metingen positie 1 voor 'taxi venlo', met één enkele uitschieter. Dat is geen toevalstreffer maar het gevolg van elke maand dezelfde ronde: techniek nalopen, content actueel houden, het bedrijfsprofiel bijwerken en reageren zodra er iets in de zoekresultaten verschuift.",
        ],
      },
      {
        h: "Wat er eromheen groeide",
        ps: [
          "Een eerste positie op één zoekwoord is kwetsbaar. Daarom is de zichtbaarheid in de jaren daarna verbreed naar de rest van de regio en naar de luchthavenritten, zodat het bedrijf niet afhankelijk is van één zoekopdracht.",
          "Het totale aantal zoekwoorden waarop de site gevonden wordt groeide van driehonderdvierenveertig naar twaalfhonderdzeventig. Het aantal zoekwoorden in de top 5 ging van zesentwintig naar honderdzes. Daarmee komt er verkeer binnen op tientallen ritten en plaatsen naast de kernterm.",
        ],
        bullets: [
          "'taxi venlo': van positie 3 naar 1, en negen jaar behouden",
          "Zoekwoorden in top 1–5: van 26 naar 106",
          "Gerankte zoekwoorden totaal: van 344 naar 1.270",
          "Eigen pagina's voor Blerick, Tegelen, Panningen en de luchthavenritten",
          "Ritcalculatie op de site: direct een prijs in plaats van een aanvraag",
        ],
      },
      {
        h: "Wat deze case laat zien",
        ps: [
          "De meeste SEO-verhalen gaan over groei in het eerste jaar. Dit verhaal gaat over de acht jaar daarna. Een eerste positie is geen bezit maar een abonnement: je betaalt hem met onderhoud, en zodra je stopt, komt er iemand anders staan.",
          "Dat is ook de reden dat wij liever doorlopend werken dan in projecten. Niet omdat er elke maand iets spectaculairs gebeurt, maar omdat het opmerken van een verschuiving in week één goedkoper is dan hem repareren in maand zes.",
        ],
      },
    ],
  },

  "world-of-art-wereldkaarten": {
    slug: "world-of-art-wereldkaarten",
    client: "World of Art",
    title: "Zes nummer 1-posities in een markt waar niemand op merknaam zoekt",
    description:
      "Case World of Art: vier jaar lang de metalen wereldkaarten volledig gewonnen, en meevechten om de top 3 op zoekwoorden met duizend zoekopdrachten per maand.",
    excerpt:
      "Wanddecoratie is een markt zonder merkvoorkeur: mensen zoeken op het product, niet op de winkel. Vier jaar later staat World of Art op nummer 1 op zes van die productzoekwoorden.",
    services: ["SEO", "Content", "E-commerce SEO"],
    period: "januari 2021 – december 2024",
    highlights: [
      { label: "Nummer 1-posities", value: "6 zoekwoorden" },
      { label: "Zoekwoorden in top 5", value: "58 → 209" },
      { label: "Meetpunten", value: "204 metingen" },
    ],
    summary: [
      "Zes zoekwoorden op positie 1, waaronder 'wereldkaart metaal' (170 zoekopdrachten per maand)",
      "Top 3 op 'houten wereldkaart' en 'wereldkaart hout', beide 1.000 zoekopdrachten per maand",
      "Zoekwoorden in de top 5 domeinbreed: van 58 naar 209 op het hoogtepunt",
      "Elk van de vijftien kernzoekwoorden stond op enig moment in de top 5",
      "Vier jaar onafgebroken gemeten: 204 wekelijkse metingen tussen januari 2021 en december 2024",
    ],
    blocks: [
      {
        h: "Over de klant",
        ps: [
          "World of Art verkoopt wanddecoratie: wereldkaarten en landkaarten uitgevoerd in hout en in metaal, in verschillende afwerkingen van koper tot brons. Een webshop in een markt waar vrijwel niemand op merknaam zoekt.",
          "Dat is bepalend voor de hele strategie. Wie een houten wereldkaart aan de muur wil, tikt 'houten wereldkaart' in en kiest uit wat er staat. Er is geen winkel waar men naartoe gaat en geen merk dat men zoekt. De zoekresultatenpagina ís de etalage, en je positie daarin is je aandeel in de markt.",
        ],
      },
      {
        h: "De uitdaging",
        ps: [
          "In januari 2021 stond de webshop op geen enkel kernzoekwoord op de eerste plek. Op de twee zoekopdrachten die de markt dragen, 'houten wereldkaart' en 'wereldkaart hout' met elk duizend zoekopdrachten per maand, stond World of Art op positie 4 en 6. Dat is de onderkant van pagina één: zichtbaar, maar met een fractie van de klikken die naar de top 3 gaan.",
          "Tegelijk lag er een kans die de concurrentie liet liggen. De metaalvarianten, wereldkaart metaal, wereldkaart koper, wereldkaart brons, wereldkaart zilver, hadden lagere volumes maar ook nauwelijks serieuze tegenstand. Precies het soort zoekwoorden waarop je eerst kunt winnen voordat je het zware gevecht aangaat.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "We zijn begonnen bij de metaalkant. Elke uitvoering kreeg een eigen pagina met een eigen zoekvraag: niet één categoriepagina voor 'metalen wereldkaarten' met varianten eronder, maar aparte pagina's voor koper, brons, zilver en metaal, elk met eigen foto's, eigen maten en eigen tekst.",
          "Dat is meer werk dan één pagina, en het is de reden dat concurrenten het niet deden. Het effect was direct: op de metaalzoekwoorden schoof World of Art binnen afzienbare tijd naar de eerste plek en bleef daar.",
          "Pas daarna is de houtkant aangepakt, waar de concurrentie een stuk zwaarder is. Daar ging het niet om nieuwe pagina's maar om de bestaande pagina's beter maken dan die van de concurrent: productinformatie hoger op de pagina, maatvoering en houtsoort expliciet benoemd, en de vragen beantwoord die mensen bij zo'n aankoop stellen. Ophangen, formaat, onderhoud.",
        ],
      },
      {
        h: "De resultaten",
        ps: [
          "Aan het eind van de meetperiode stond World of Art op positie 1 voor wereldkaart metaal, wereldkaart koper, wereldkaart brons en wereldkaart metaal muur, en op positie 2 voor metalen wereldkaart en luxe houten wereldkaart. De metaalcategorie was daarmee vrijwel volledig gewonnen.",
          "Op de zware houtzoekwoorden is de positie verbeterd naar de top 3 en top 5: 'houten wereldkaart' van 4 naar 3, 'wereldkaart hout' van 6 naar 5, met positie 1 respectievelijk 2 als beste gemeten stand. Domeinbreed groeide het aantal zoekwoorden in de top 5 van achtenvijftig naar tweehonderdnegen op het hoogtepunt.",
        ],
        bullets: [
          "'wereldkaart metaal' (170 p/m): van positie 4 naar 1",
          "'wereldkaart koper' en 'wereldkaart brons': positie 1, vier jaar vastgehouden",
          "'wereldkaart metaal muur' (20 p/m): van positie 4 naar 1",
          "'metalen wereldkaart' (140 p/m): positie 2, met 1 als beste stand",
          "'houten wereldkaart' (1.000 p/m): van positie 4 naar 3",
          "'wereldkaart hout' (1.000 p/m): van positie 6 naar 5",
        ],
      },
      {
        h: "Wat deze case laat zien",
        ps: [
          "De volgorde was hier belangrijker dan de inspanning. Door eerst de categorie te winnen waar de concurrentie zwak was, bouwde de webshop autoriteit op het onderwerp wereldkaarten op. Die autoriteit maakte het daarna makkelijker om mee te doen op de zoekwoorden waar wel om gevochten wordt.",
          "Andersom beginnen is de meest gemaakte fout in e-commerce SEO: maandenlang beuken op het zoekwoord met het hoogste volume, terwijl de makkelijke categorie ernaast onaangeroerd blijft liggen.",
        ],
      },
      {
        h: "Onderbouwing",
        ps: [
          "Alle posities in deze case komen uit de positiemeting van vijftien kernzoekwoorden, wekelijks gemeten tussen 5 januari 2021 en 3 december 2024. Dat zijn 204 meetmomenten per zoekwoord, geregistreerd op Google Nederland met Limburg als locatie.",
        ],
      },
    ],
  },
};

export const CASE_LIST: CaseStudy[] = [
  CASES["venlo-taxi-negen-jaar-nummer-1"],
  CASES["world-of-art-wereldkaarten"],
  CASES["steinbrueckner-truckwash-top-5"],
  CASES["med4u-mediation-van-16-naar-1"],
  CASES["6600x-meubel-outlet-nummer-1-in-google"],
  CASES["van-daken"],
  CASES["dn-research"],
  CASES["parketreus"],
  CASES["de-bruidsmode-outlet-belgie"],
  CASES["meer-omzet-sleep-factory-bv"],
  CASES["online-transacties-vogelvoerkopen"],
  CASES["taxicentrale-veghel-nummer-1"],
  CASES["10-euro-taxi-den-bosch"],
];