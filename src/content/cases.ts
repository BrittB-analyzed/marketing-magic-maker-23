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
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
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
          "Toen Meubel Outlet Weert bij ons aanklopte was het probleem helder: de website werd simpelweg niet gevonden. Het organisch zoekverkeer lag op een dieptepunt — minder dan 500 bezoekers per maand — en er was geen structureel inzicht in wat wel en niet werkte.",
          "Tegelijkertijd liep er een Google Ads-campagne die veel meer kon opleveren dan ze deed. Kortom: er lag een hoop potentieel te wachten om benut te worden.",
        ],
      },
      {
        h: "Wat we hebben gedaan",
        ps: [
          "We startten met een grondige analyse van de website, het zoekgedrag in de regio en de concurrentie. Op basis daarvan rolden we een gerichte SEO-strategie uit.",
          "Een belangrijk onderdeel was het optimaliseren van de belangrijkste categoriepagina's — woonmeubelen, banken, relaxstoelen, eetkamerstoelen en design meubels. Die pagina's zijn herschreven, technisch verbeterd en afgestemd op de zoektermen die er echt toe doen.",
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
          "Toen Van Daken eind 2024 bij ons aanklopte, was de online aanwezigheid nog beperkt. Lokaal waren ze bekend, maar uit de eerste analyse bleek dat ze op slechts zes zoekwoorden op positie 1 stonden — waaronder 'daklekkage rotterdam', 'dakdekker amsterdam oost' en twee merkgerichte zoekopdrachten.",
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
          "De doorklikratio daalde licht van 0,5% naar 0,3% — een gebruikelijk effect wanneer het bereik zich uitbreidt naar bredere zoektermen. Het vergrote bereik legt een stevige basis voor verdere optimalisatie en conversieverhoging in de volgende fase.",
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
    title: "Vervijfvoudiging van het aantal online transacties in 9 maanden",
    description:
      "Case Vogelvoerkopen.nl: vijf keer zoveel online transacties in negen maanden door SEO en Google Ads, met top 3-posities op 'vogelvoer kopen'.",
    excerpt:
      "Vijf keer zoveel online transacties in negen maanden, met stabiele top 3-posities op 'vogelvoer kopen' en 'pindaslinger'.",
    image: heroVogel.url,
    imageAlt: "Pindaslinger van Vogelvoerkopen.nl",
    services: ["SEO", "Google Ads"],
    period: "9 maanden",
    highlights: [
      { label: "Online transacties", value: "5x" },
      { label: "Posities", value: "top 3" },
      { label: "Doel", value: "2+ orders per dag" },
    ],
    summary: [
      "Vervijfvoudiging van het aantal online transacties in negen maanden",
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
    ],
  },
};

export const CASE_LIST: CaseStudy[] = [
  CASES["6600x-meubel-outlet-nummer-1-in-google"],
  CASES["van-daken"],
  CASES["dn-research"],
  CASES["parketreus"],
  CASES["de-bruidsmode-outlet-belgie"],
  CASES["meer-omzet-sleep-factory-bv"],
  CASES["online-transacties-vogelvoerkopen"],
];