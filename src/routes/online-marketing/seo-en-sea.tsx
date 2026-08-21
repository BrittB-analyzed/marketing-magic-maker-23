import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PILLARS } from "@/components/site/site-chrome";
import {
  ContentSections,
  CtaBand,
  DataTable,
  Faq,
  FaqBlock,
  PageHero,
  RelatedLinks,
  Section,
  SectionHeading,
  type ContentBlock,
} from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";

const PAD = "/online-marketing/seo-en-sea/";

const FAQ: Faq[] = [
  {
    q: "Wat is het verschil tussen SEO en SEA?",
    a: "SEO is zichtbaarheid in de onbetaalde zoekresultaten, SEA is zichtbaarheid in de advertenties erboven. SEO kost tijd en bouwt op, SEA kost geld en werkt direct. Samen heten ze zoekmachinemarketing, oftewel SEM: hetzelfde zoekresultaat, twee verschillende manieren om erin te komen.",
  },
  {
    q: "Moet ik kiezen tussen SEO en SEA?",
    a: "Meestal niet. SEA levert vanaf dag één zoektermdata en aanvragen; SEO maakt dat verkeer op termijn goedkoper. Heb je heel weinig budget, begin dan met SEA op je meest winstgevende dienst en bouw met de opbrengst je SEO op. Andersom werkt zelden.",
  },
  {
    q: "Hoe verdeel ik mijn budget over SEO en SEA?",
    a: "Als vuistregel in het eerste jaar: ongeveer 60% naar SEA en 40% naar SEO, en die verhouding kantelt naarmate je organische posities gaan staan. SEA financiert dan de eerste aanvragen, SEO verlaagt daarna je kosten per aanvraag. De juiste verhouding hangt af van hoe snel je omzet nodig hebt.",
  },
  {
    q: "Wat is zoekmachineadverteren?",
    a: "Zoekmachineadverteren is betalen om bovenaan de zoekresultaten te staan op zoekopdrachten die jij kiest. Je betaalt per klik, niet per vertoning. In Nederland gaat dat vrijwel altijd via Google Ads, met Microsoft Advertising voor Bing als kleinere aanvulling.",
  },
  {
    q: "Wat doet een zoekmachinemarketing bureau?",
    a: "Een zoekmachinemarketing bureau beheert beide kanten van het zoekresultaat: de organische posities en de advertenties. Het voordeel van één partij is dat de zoektermdata uit de advertenties direct de contentkeuzes stuurt, en dat je niet twee bureaus betaalt die elkaars werk niet zien.",
  },
  {
    q: "Kannibaliseren advertenties mijn organische verkeer?",
    a: "Deels. Sta je al op één en zet je daar ook een advertentie op, dan koop je een deel van de klikken die je gratis had gekregen. Op zoekopdrachten met je merknaam is dat vaak alsnog verstandig als concurrenten daarop bieden. Op de rest test je het gewoon door de advertentie een periode uit te zetten.",
  },
  {
    q: "Hoe snel zie ik resultaat van elk kanaal?",
    a: "SEA levert binnen dagen de eerste klikken en binnen weken bruikbare conversiedata. SEO laat na twee tot drie maanden beweging zien en levert meestal tussen maand zes en twaalf meetbaar meer aanvragen op. Dat verschil in tempo is precies waarom de combinatie werkt.",
  },
];

const BLOKKEN: ContentBlock[] = [
  {
    h: "Wat is het verschil tussen SEO en SEA?",
    answer:
      "SEO zorgt dat je in de onbetaalde zoekresultaten verschijnt, SEA dat je in de advertenties erboven staat. SEO kost tijd en bouwt op; SEA kost geld en stopt zodra je stopt met betalen. Samen vormen ze zoekmachinemarketing: hetzelfde zoekresultaat, twee routes ernaartoe.",
    table: {
      caption: "SEO en SEA naast elkaar",
      head: ["", "SEO", "SEA"],
      rows: [
        ["Waar je verschijnt", "Onbetaalde resultaten", "Advertenties boven en onder de resultaten"],
        ["Wat je betaalt", "Werk vooraf, geen kosten per klik", "Per klik, doorlopend"],
        ["Eerste resultaat", "2 tot 3 maanden", "Dagen"],
        ["Wat er gebeurt als je stopt", "Posities zakken langzaam weg", "Verkeer valt dezelfde dag stil"],
        ["Kosten per aanvraag over tijd", "Daalt naarmate posities staan", "Blijft gelijk of stijgt bij meer concurrentie"],
        ["Wat je ervan leert", "Welke onderwerpen aanslaan", "Welke exacte zoekwoorden geld opleveren"],
        ["Beste voor", "Structurele, herhaalbare vraag", "Snelle omzet en het testen van vraag"],
      ],
      footnote:
        "SEM, zoekmachinemarketing, is de verzamelnaam voor beide. In het Nederlands hoor je ook zoekmachineoptimalisatie (SEO) en zoekmachineadverteren (SEA).",
    },
  },
  {
    h: "Hoe versterken SEO en SEA elkaar?",
    answer:
      "Op drie manieren die geen van beide kanalen alleen kan. SEA levert binnen weken de zoektermdata waar SEO maanden over doet. Organische posities verlagen je kosten per klik doordat je landingspagina's beter scoren. En samen bezetten ze meer ruimte in hetzelfde zoekresultaat.",
    bullets: [
      "Zoektermdata: je advertenties laten letterlijk zien op welke woorden mensen kopen. Die woorden gaan één op één de contentkalender in.",
      "Kwaliteitsscore: een landingspagina die organisch goed presteert, scoort in Google Ads ook beter en verlaagt daarmee je klikprijs.",
      "Dubbele zichtbaarheid: een advertentie én een organisch resultaat op dezelfde zoekopdracht levert samen meer klikken op dan elk apart.",
      "Testruimte: voordat je drie maanden aan een nieuwe dienstpagina werkt, test je met een advertentie van twee weken of de vraag er echt is.",
      "Overbrugging: terwijl SEO opbouwt, houdt SEA de agenda vol. Zonder die overbrugging haken de meeste bedrijven halverwege af.",
      "Remarketing: bezoekers die via organisch binnenkwamen maar niet aanvroegen, bereik je opnieuw via advertenties.",
    ],
    paragraphs: [
      "Die eerste is in de praktijk het waardevolst. Een zoektermenrapport uit Google Ads is de enige plek waar je zonder schatten ziet welke exacte formulering tot een aanvraag leidt. Zoekwoordtools geven volumes; een advertentieaccount geeft omzet per formulering. Wie die twee niet aan elkaar knoopt, laat de helft van het rendement liggen.",
    ],
    note: "Zo ging het bij Meubel & Outlet Weert: de zoektermen die in Google Ads aantoonbaar bestellingen opleverden, bepaalden welke categoriepagina's we als eerste herschreven. Op 'meubel outlet', goed voor 5.400 zoekopdrachten per maand, staat de site nu op positie 1 in Weert. Tegelijk leverden de advertenties 77% meer sessies op met een efficiënter ingezet budget.",
    caseLink: { label: "Bekijk de case van Meubel & Outlet Weert", slug: "6600x-meubel-outlet-nummer-1-in-google" },
  },
  {
    h: "Wat is zoekmachineadverteren precies?",
    answer:
      "Zoekmachineadverteren is betalen om bovenaan de zoekresultaten te staan op zoekopdrachten die je zelf kiest. Je betaalt per klik, niet per vertoning, en je bepaalt zelf je dagbudget. In Nederland loopt dat vrijwel volledig via Google Ads, met Microsoft Advertising voor Bing als kleinere aanvulling.",
    paragraphs: [
      "Wat je betaalt per klik hangt niet alleen van je bod af. Google weegt ook hoe relevant je advertentie en je landingspagina zijn voor de zoekopdracht. Twee adverteerders met hetzelfde bod betalen daardoor een verschillende prijs voor dezelfde positie. Dat is precies het punt waar goede SEO je advertentiekosten verlaagt.",
      "Naast de gewone zoekadvertenties vallen ook Shopping-campagnes en de advertenties in AI-antwoorden onder zoekmachineadverteren. De logica blijft dezelfde: je koopt zichtbaarheid op het moment dat iemand actief zoekt, en dat is fundamenteel iets anders dan advertenties die mensen onderbreken.",
    ],
  },
  {
    h: "Hoe verdeel je je budget over SEO en SEA?",
    answer:
      "Begin zwaar op SEA en laat het verschuiven. In het eerste halfjaar ligt de verhouding vaak rond 60% SEA en 40% SEO: je hebt de aanvragen nu nodig en de zoektermdata stuurt de content. Naarmate organische posities gaan staan, kantelt dat en daalt je kosten per aanvraag mee.",
    table: {
      caption: "Rekenvoorbeeld bij € 2.000,- marketingbudget per maand",
      head: ["Periode", "SEA", "SEO", "Waarom deze verdeling"],
      rows: [
        [
          "Maand 1 tot 6",
          "€ 1.200,- (advertentiebudget + beheer)",
          "€ 800,-",
          "Aanvragen moeten nú binnenkomen; de zoektermdata stuurt de eerste contentkeuzes",
        ],
        [
          "Maand 7 tot 12",
          "€ 1.000,-",
          "€ 1.000,-",
          "Eerste organische posities staan, SEO gaat een deel van het volume overnemen",
        ],
        [
          "Maand 13 en verder",
          "€ 700,-",
          "€ 1.300,-",
          "Organisch levert het stabiele volume; advertenties richten zich op de duurste koopintentie",
        ],
      ],
      highlightRow: 0,
      footnote:
        "Rekenvoorbeeld bij een totaalbudget van € 2.000,- per maand exclusief btw. Bij Meubel & Outlet Weert liep deze verschuiving over zestien maanden: organisch verkeer groeide met 680% en nam daarmee het volume over dat eerst uit advertenties moest komen.",
    },
    paragraphs: [
      "Twee dingen om vooraf vast te leggen. Ten eerste: het advertentiebudget en het beheerhonorarium zijn verschillende posten. Bij ons betaal je het advertentiebudget rechtstreeks aan Google, in je eigen account. Ten tweede: verschuif nooit budget van SEO naar SEA omdat SEO in maand drie nog niets doet. Dat is precies het moment waarop het werk begint te renderen.",
    ],
  },
  {
    h: "Wanneer kies je alleen SEO, alleen SEA of allebei?",
    answer:
      "Alleen SEA als je snel moet weten of er vraag is, of als je marge zo hoog is dat klikprijs er nauwelijks toe doet. Alleen SEO als je budget krap is en je een jaar de tijd hebt. Allebei zodra je zowel omzet op korte termijn als een lagere kostprijs op lange termijn wilt.",
    steps: [
      {
        title: "Bepaal hoe snel je omzet nodig hebt",
        body: "Moet de agenda binnen twee maanden voller, dan begint het gesprek bij SEA. SEO is dan de tweede stap, niet de eerste.",
      },
      {
        title: "Kijk of de vraag bewezen is",
        body: "Zoeken mensen al actief op wat je aanbiedt? Zo nee, test dat eerst met advertenties voordat je maanden aan content besteedt.",
      },
      {
        title: "Reken je marge per aanvraag door",
        body: "Bij een lage marge lopen de klikprijzen snel uit de hand en is organisch verkeer op termijn de enige haalbare route.",
      },
      {
        title: "Beoordeel de staat van je website",
        body: "Is je site technisch of inhoudelijk zwak, dan verbrandt SEA-budget op pagina's die toch niet converteren. Dan eerst de basis.",
      },
      {
        title: "Kies een startverhouding en leg een evaluatiemoment vast",
        body: "Spreek af dat je na drie maanden herijkt op basis van kosten per aanvraag per kanaal, niet op onderbuikgevoel.",
      },
    ],
  },
  {
    h: "Wat doet een zoekmachinemarketing bureau?",
    answer:
      "Een zoekmachinemarketing bureau beheert beide kanten van hetzelfde zoekresultaat: de organische posities en de advertenties erboven. Het voordeel van één partij is dat de zoektermdata uit de advertenties rechtstreeks de contentkeuzes stuurt, en dat je niet twee bureaus betaalt die elkaars werk niet zien.",
    paragraphs: [
      "Bij ons is dat onderdeel van een bredere aanpak met vier pijlers: SEO voor de organische posities, GEO voor zichtbaarheid in AI-antwoorden, Ads voor het betaalde verkeer en CRO om te zorgen dat al dat verkeer ook daadwerkelijk iets oplevert. Zoekmachinemarketing is daarvan de eerste helft; zonder de vierde pijler blijft het bij bezoekers.",
      "Praktisch betekent dat één aanspreekpunt, één rapportage en één budget waarin je ziet wat elk kanaal je per aanvraag kost. Dat laatste is de enige vergelijking die telt: niet welk kanaal meer klikken levert, maar welk kanaal de goedkoopste aanvraag levert bij gelijke kwaliteit.",
    ],
  },
];

export const Route = createFileRoute("/online-marketing/seo-en-sea")({
  head: () => ({
    meta: seoMeta(PAD, { ogType: "article", twitterCard: "summary" }),
    scripts: [
      {
        type: "application/ld+json",
        children: graph(
          serviceSchema({
            name: "Zoekmachinemarketing (SEO en SEA)",
            description:
              "SEO en SEA gecombineerd: organische posities en zoekmachineadverteren vanuit één plan, met een vergelijkingstabel en een rekenvoorbeeld van de budgetverdeling.",
            path: PAD,
            serviceType: "Zoekmachinemarketing",
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Online marketing", path: "/online-marketing/" },
            { name: "SEO en SEA", path: PAD },
          ]),
        ),
      },
    ],
  }),
  component: SeoEnSea,
});

function SeoEnSea() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Zoekmachinemarketing"
        variant="ads"
        title="SEO en SEA: zo versterken ze elkaar"
        intro="SEO en SEA zijn twee routes naar hetzelfde zoekresultaat: de onbetaalde posities en de advertenties erboven. SEA levert vandaag aanvragen en zoektermdata, SEO maakt datzelfde verkeer op termijn goedkoper. Hieronder de vergelijking, de samenhang en een rekenvoorbeeld van de budgetverdeling."
      />

      <Section>
        <SectionHeading
          eyebrow="Vier pijlers"
          title="Waar SEO en SEA in het geheel passen"
          intro="Zoekmachinemarketing is de eerste helft van onze aanpak. GEO zorgt dat je ook in AI-antwoorden genoemd wordt, CRO zorgt dat al dat verkeer iets oplevert."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group rounded-2xl border border-brand-line bg-white p-7 transition-colors hover:border-brand-ink"
            >
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.claim}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <DataTable
            caption="Wat elk kanaal je oplevert"
            head={["Kanaal", "Levert", "Kost", "Termijn"]}
            rows={[
              ["SEO", "Structureel, herhaalbaar verkeer", "Werk vooraf", "6 tot 12 maanden"],
              ["SEA", "Directe aanvragen en zoektermdata", "Per klik, doorlopend", "Dagen tot weken"],
              ["GEO", "Genoemd worden in AI-antwoorden", "Werk vooraf", "3 tot 9 maanden"],
              ["CRO", "Meer aanvragen uit hetzelfde verkeer", "Eenmalig of doorlopend", "Weken"],
            ]}
            footnote="Termijnen zijn indicaties voor een MKB-site op één markt, exclusief het opruimen van technische achterstanden."
          />
        </div>
      </Section>

      <ContentSections className="border-t border-brand-line bg-white" blocks={BLOKKEN} />

      <RelatedLinks
        title="Verder over zoeken, adverteren en converteren"
        items={[
          {
            label: "Google Ads uitbesteden",
            to: "/online-marketing/google-ads-uitbesteden/",
            note: "De SEA-kant in detail: campagnes, beheer en wat een specialist wekelijks doet.",
          },
          {
            label: "SEO uitbesteden aan een vaste specialist",
            to: "/online-marketing/seo-uitbesteden/",
            note: "De SEO-kant in detail: techniek, content en autoriteit.",
          },
          {
            label: "Conversie-optimalisatie",
            to: "/online-marketing/conversie-optimalisatie/",
            note: "Zodat het verkeer uit beide kanalen ook echt aanvragen wordt.",
          },
          {
            label: "Wat SEO kost per maand",
            to: "/tarieven-seo/",
            note: "Bedragen en budgetverdeling, met wat je per budget mag verwachten.",
          },
          {
            label: "Zoekmachine optimalisatie specialist inhuren",
            to: "/online-marketing/zoekmachine-optimalisatie-specialist/",
            note: "Wie het organische werk uitvoert.",
          },
          {
            label: "Genoemd worden in AI-antwoorden",
            to: "/online-marketing/geo-optimalisatie/",
            note: "GEO: de derde pijler naast SEO en SEA.",
          },
        ]}
      />

      <FaqBlock items={FAQ} title="Over SEO en SEA" />
      <CtaBand />
    </SiteLayout>
  );
}
