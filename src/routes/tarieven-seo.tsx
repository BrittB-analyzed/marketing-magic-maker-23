import { seoMeta } from "@/data/seo-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
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
  faqJsonLd,
  type ContentBlock,
} from "@/components/site/page-bits";

const FAQ: Faq[] = [
  {
    q: "Wat kost SEO per maand?",
    a: "Bij ons vanaf € 999,- per maand voor een doorlopend SEO- en GEO-pakket. In de Nederlandse markt loopt dat bij MKB-bureaus uiteen van ongeveer € 500,- tot € 3.500,- per maand, afhankelijk van hoeveel uren erin zitten. Onder de € 500,- per maand blijft er na overleg en rapportage nauwelijks uitvoerende tijd over.",
  },
  {
    q: "Wat kost een eenmalige SEO-audit?",
    a: "Een uitgebreide audit kost vanaf € 599,-. Daarin zitten de technische analyse, het zoekwoordenonderzoek, een concurrentievergelijking, een GEO-nulmeting en een actielijst op volgorde van impact, plus een adviesgesprek waarin we alles doornemen.",
  },
  {
    q: "Wat kost SEO uitbesteden vergeleken met zelf doen?",
    a: "Zelf doen kost geen factuur maar wel tijd: reken op vier tot acht uur per week om het serieus bij te houden. Een eigen SEO-specialist in dienst kost inclusief werkgeverslasten al snel € 5.000,- tot € 7.000,- per maand. Uitbesteden zit daar met € 999,- tot € 3.500,- per maand ruim onder.",
  },
  {
    q: "Waarom werken jullie met vanaf-prijzen?",
    a: "Omdat een webshop met 4.000 producten iets anders nodig heeft dan een installatiebedrijf met vijf diensten. Je krijgt altijd vooraf een vaste maandprijs, zodat je nooit een nacalculatie krijgt.",
  },
  {
    q: "Zit GEO bij het SEO-pakket in?",
    a: "Ja. Vanaf € 999,- per maand werken we aan zichtbaarheid in Google én in AI-antwoorden. We zien het niet als losse dienst maar als één zichtbaarheidsstrategie.",
  },
  {
    q: "Wat als het niet werkt?",
    a: "We spreken vooraf af welke resultaten we nastreven en meten die maandelijks. Blijven die uit, dan sturen we bij zonder extra kosten en werken we net zo lang door tot je wél meetbaar resultaat boekt.",
  },
  {
    q: "Werken jullie ook op uurbasis?",
    a: "Ja, voor losse werkzaamheden buiten een vast pakket hanteren we een uurtarief van € 90,-. Dat spreken we altijd vooraf af, zodat je nooit voor verrassingen komt te staan.",
  },
  {
    q: "Zit er btw bij de genoemde bedragen?",
    a: "Nee, alle bedragen op deze pagina zijn exclusief btw. Voor de meeste ondernemers is die btw verrekenbaar, waardoor het netto bedrag gelijk is aan de genoemde prijs.",
  },
];

const PLANS = [
  {
    name: "Gratis quick scan",
    price: "€ 0,-",
    note: "Eenmalig",
    items: ["Zichtbaarheid in Google en AI", "Belangrijkste blokkades", "Korte persoonlijke video", "Binnen 2 werkdagen"],
    cta: "Aanvragen",
    to: "/gratis-seo-scan/",
    highlight: false,
  },
  {
    name: "Uitgebreide audit",
    price: "vanaf € 599,-",
    note: "Eenmalig",
    items: [
      "Volledige technische en content-audit",
      "GEO-nulmeting op je belangrijkste prompts",
      "Concurrentieanalyse",
      "Actieplan op volgorde van impact",
      "Toelichting in een adviesgesprek",
    ],
    cta: "Audit aanvragen",
    to: "/contact/",
    highlight: false,
  },
  {
    name: "SEO & GEO-pakket",
    price: "vanaf € 999,-",
    note: "Per maand",
    items: [
      "Alles uit de audit, doorlopend",
      "Techniek, content en autoriteit",
      "GEO: citeerbaarheid en promptmonitoring",
      "Maandelijkse Loom-video en dashboard",
      "Vaste specialist, geen accountmanager",
    ],
    cta: "Plan een gesprek",
    to: "/contact/",
    highlight: true,
  },
];

/**
 * Inhoudelijke verdieping over de kostenvraag. Deze blokken dekken de
 * zoekvragen "seo kosten" en "seo uitbesteden kosten" af. Bewust op deze
 * pagina en niet op een aparte /seo-kosten/-URL: het is dezelfde zoekintentie,
 * en twee eigen pagina's zouden om hetzelfde zoekwoord concurreren.
 */
const KOSTEN_BLOKKEN: ContentBlock[] = [
  {
    h: "Waar hangen de kosten van SEO van af?",
    answer:
      "Van vier dingen: hoe groot je website is, hoe sterk je concurrentie is, hoeveel er nog technisch mis is en hoeveel content er gemaakt moet worden. Een lokale dienstverlener met acht pagina's kost structureel minder dan een webshop met vierduizend producten in drie talen.",
    bullets: [
      "Omvang van de site: elke extra taal, categorie of productgroep is werk dat elke maand terugkomt.",
      "Concurrentie in je zoekwoorden: op een verzadigde markt heb je meer content en meer autoriteit nodig voor dezelfde positie.",
      "Technische staat: een site die eerst opgeruimd moet worden, kost in de eerste maanden meer uren.",
      "Contentbehoefte: bestaande pagina's herschrijven is goedkoper dan een nieuwe rubriek vanaf nul opbouwen.",
      "Ambitie en tempo: sneller resultaat betekent meer uren per maand, niet een ander soort werk.",
    ],
    paragraphs: [
      "Wat de prijs níet bepaalt, is het aantal zoekwoorden in een pakket. Aanbieders die afrekenen per zoekwoord verkopen een getal, geen resultaat: tien makkelijke zoekwoorden zijn minder werk dan één moeilijke. Reken daarom altijd terug naar uren per maand en vraag wat er in die uren gebeurt.",
    ],
  },
  {
    h: "Wat mag je bij welk budget realistisch verwachten?",
    answer:
      "Onder de € 500,- per maand koop je hooguit onderhoud. Tussen € 999,- en € 1.500,- kun je op één markt structureel groeien. Boven de € 2.500,- houd je meerdere onderwerpen tegelijk in beweging. De tabel hieronder is bedoeld om verwachtingen te ijken, niet als belofte.",
    table: {
      caption: "Budget, inzet en wat daar in de praktijk uit komt",
      head: ["Budget per maand", "Uren per maand", "Wat daarin past", "Realistisch resultaat"],
      rows: [
        [
          "€ 250,- tot € 500,-",
          "2 tot 5",
          "Monitoring, kleine correcties, één tekst per kwartaal",
          "Behoud van wat je hebt, nauwelijks groei",
        ],
        [
          "€ 999,-",
          "8 tot 11",
          "Techniek bijhouden, twee teksten per maand, interne links, GEO-monitoring",
          "Structurele groei op één markt en één taal",
        ],
        [
          "€ 1.500,- tot € 2.500,-",
          "12 tot 25",
          "Bovenstaande plus linkbuilding en conversie-optimalisatie",
          "Groei op meerdere onderwerpen tegelijk",
        ],
        [
          "€ 2.500,- tot € 5.000,-",
          "25 tot 50",
          "Meerdere talen of merken, eigen contentkalender, doorlopend testen",
          "Concurreren op verzadigde zoekwoorden",
        ],
      ],
      highlightRow: 1,
      footnote:
        "Uren zijn afgeleid van een tarief van € 90,- tot € 120,- per uur. Ter ijking: bij Meubel & Outlet Weert leverde zestien maanden structureel werk 680% meer organisch verkeer op, bij Vogelvoerkopen.nl vijf keer zoveel online transacties in negen maanden.",
    },
  },
  {
    h: "Wat kost SEO uitbesteden vergeleken met de alternatieven?",
    answer:
      "Uitbesteden kost geld, zelf doen kost tijd en iemand aannemen kost allebei. Voor de meeste MKB-bedrijven is uitbesteden de goedkoopste route, tot het punt waarop er zoveel werk ligt dat een eigen specialist een volle week vult. Dat punt ligt hoger dan de meeste ondernemers denken.",
    table: {
      caption: "Drie routes naast elkaar",
      head: ["Route", "Kosten per maand", "Wat het je verder kost", "Wanneer verstandig"],
      rows: [
        [
          "Zelf doen",
          "€ 0,- tot € 150,- aan tools",
          "4 tot 8 uur per week van jezelf of een medewerker",
          "Je hebt tijd, geduld en zin om het vak bij te houden",
        ],
        [
          "SEO uitbesteden",
          "€ 999,- tot € 3.500,-",
          "Ongeveer een uur per maand aan overleg",
          "Je wilt resultaat zonder er zelf in te duiken",
        ],
        [
          "Specialist in dienst",
          "€ 5.000,- tot € 7.000,-",
          "Werving, inwerken en het risico dat die persoon vertrekt",
          "Er ligt structureel meer dan een volle werkweek aan werk",
        ],
      ],
      highlightRow: 1,
      footnote:
        "Het bedrag voor een specialist in dienst is inclusief werkgeverslasten, tools en werkplek, op basis van een marktconform brutosalaris voor een medior SEO-specialist.",
    },
    paragraphs: [
      "De vergelijking valt of staat bij wat je eigen uur waard is. Kost het je acht uur per week om SEO zelf te doen, dan is dat bij een intern uurtarief van € 60,- al ruim € 2.000,- per maand aan tijd die je niet aan klanten besteedt. Dat is de kostenpost die zelden op een factuur staat en daarom bijna altijd wordt vergeten.",
    ],
  },
  {
    h: "Hoe herken je een SEO-prijs die te mooi is?",
    answer:
      "Aan de belofte, niet aan het bedrag. Garantie op positie één, een vast aantal backlinks per maand of een pakket met honderd zoekwoorden voor € 199,- zijn alle drie signalen dat er iets anders wordt verkocht dan resultaat. Vraag door tot je weet hoeveel uren er in zitten.",
    bullets: [
      "Garantie op een specifieke positie: niemand kan dat beloven, want niemand beheert het algoritme.",
      "Een vast aantal links per maand: links zijn een uitkomst van goede content, geen product met een weekopbrengst.",
      "Rapportage op zoekwoorden die niemand intikt: veel posities, geen verkeer, geen aanvragen.",
      "Geen inzage in je eigen Analytics of Search Console: je moet altijd zelf bij je data kunnen.",
      "Een opzegtermijn van een jaar: goede resultaten binden je vanzelf, een contract hoeft dat niet te doen.",
    ],
  },
  {
    h: "Zo bepaal je in vijf stappen je eigen SEO-budget",
    answer:
      "Reken van achter naar voren. Begin bij wat één klant je oplevert, bepaal hoeveel klanten je erbij wilt en reken terug naar het aantal aanvragen en bezoekers dat daarvoor nodig is. Pas als dat er staat, kijk je wat het mag kosten. Dan koop je een doel in plaats van een pakket.",
    steps: [
      {
        title: "Bepaal je waarde per klant",
        body: "Gemiddelde orderwaarde maal het aantal keer dat een klant terugkomt. Voor dienstverleners ligt dat vaak veel hoger dan het eerste factuurbedrag.",
      },
      {
        title: "Reken terug naar aanvragen",
        body: "Hoeveel aanvragen heb je nodig voor één klant? Bij een scoringspercentage van 25% op offertes zijn dat er vier.",
      },
      {
        title: "Reken terug naar bezoekers",
        body: "Deel het aantal benodigde aanvragen door je conversiepercentage. Weet je dat niet, bereken dat dan eerst.",
      },
      {
        title: "Zet er een termijn op",
        body: "SEO bouwt op. Reken met zes tot twaalf maanden voordat het aantal bezoekers dat je nodig hebt in zicht komt.",
      },
      {
        title: "Bepaal wat het mag kosten",
        body: "Mag het traject zich in het eerste jaar terugverdienen, of is de tweede helft van het jaar ook goed? Dat antwoord bepaalt je maandbudget, niet het pakket van een aanbieder.",
      },
    ],
    note: "Zo pakte dat uit bij Vogelvoerkopen.nl: de doelstelling was minimaal twee online transacties per dag. Van daaruit rekenden we terug naar het benodigde verkeer en het maandbudget. Binnen negen maanden was dat doel ruimschoots gehaald, met een conversiepercentage dat er nog eens 10% bovenop deed.",
    caseLink: { label: "Bekijk de case van Vogelvoerkopen.nl", slug: "online-transacties-vogelvoerkopen" },
  },
];

const ALLE_TARIEVEN = {
  caption: "Alle tarieven op een rij",
  head: ["Dienst", "Prijs", "Wat het is"],
  rows: [
    ["Gratis quick scan", "€ 0,-", "Korte video met je drie grootste blokkades, binnen twee werkdagen"],
    [
      "Uitgebreide SEO- en GEO-audit",
      "vanaf € 599,-",
      "Eenmalig: techniek, zoekwoorden, concurrentie, GEO-nulmeting en een actielijst",
    ],
    [
      "Doorlopend SEO- en GEO-pakket",
      "vanaf € 999,- per maand",
      "Uitvoering van techniek, content en autoriteit, met maandelijkse video en dashboard",
    ],
    ["Losse uren", "€ 90,- per uur", "Los maatwerk buiten een pakket om, vooraf afgesproken"],
    ["Linkbuilding", "vanaf € 125,- per maand", "Los af te nemen of als onderdeel van het pakket"],
    ["Google Ads-beheer", "vanaf € 499,- per maand", "Exclusief je advertentiebudget, dat je zelf aan Google betaalt"],
  ],
  highlightRow: 2,
  footnote: "Alle bedragen exclusief btw. Je krijgt vooraf een vaste maandprijs, er volgt nooit een nacalculatie.",
};

export const Route = createFileRoute("/tarieven-seo")({
  head: () => ({
    meta: seoMeta("/tarieven-seo/", { ogType: "website", twitterCard: "summary" }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: Tarieven,
});

function Tarieven() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="SEO kosten & tarieven"
        title="Wat kost SEO en GEO bij B. Analyzed?"
        intro="SEO kost bij ons € 599,- voor een eenmalige audit, vanaf € 999,- per maand voor doorlopend werk en € 90,- per uur voor los maatwerk. Geen offertetraject van drie weken: hieronder zie je waar we starten, waar die bedragen van afhangen en wat je bij welk budget realistisch mag verwachten."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight ? "border-brand-ink bg-white shadow-[0_2px_16px_rgba(20,24,31,0.06)]" : "border-brand-line bg-white"
              }`}
            >
              {p.highlight && (
                <div className="-mx-8 -mt-8 mb-5 rounded-t-2xl bg-brand-green px-8 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  Meest gekozen
                </div>
              )}
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{p.price}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-muted">{p.note}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-brand-muted">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                to={p.to}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-brand-green text-white hover:bg-brand-green-dark"
                    : "border border-brand-line text-brand-ink hover:border-brand-ink"
                }`}
              >
                {p.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Alle bedragen zijn exclusief btw. Vanaf € 999,- per maand combineren we SEO, GEO, Ads en CRO, je kiest zelf uit diverse diensten. Los maatwerk factureren we tegen € 90,- per uur. Werken we samen? Dan gaan we net zo lang door tot je meetbaar resultaat boekt.
        </p>
        <div className="mt-10">
          <DataTable {...ALLE_TARIEVEN} />
        </div>
        <p className="mt-6 text-sm text-brand-muted">
          Wil je liever eerst een plan zonder maandverplichting, kijk dan bij{" "}
          <Link to="/online-marketing/seo-advies/" className="font-semibold text-brand-ink hover:text-brand-red">
            eenmalig SEO-advies
          </Link>
          .
        </p>
      </Section>
      <Section className="bg-brand-sand">
        <SectionHeading
          eyebrow="Marktoverzicht"
          title="Wat kost SEO & GEO in de markt?"
          intro="Ter vergelijking: dit zijn de gangbare investeringen in Nederland, per type aanbieder en per bedrijfsgrootte. Zo zie je meteen waar onze tarieven staan."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <DataTable
            caption="Per type aanbieder"
            head={["Type aanbieder", "Per maand", "Uurtarief"]}
            rows={[
              ["Freelancer / SEO-specialist", "€ 500,- tot € 1.500,-", "€ 75,- tot € 110,-"],
              ["MKB-bureau (zoals wij)", "€ 999,- tot € 3.500,-", "€ 90,- tot € 140,-"],
              ["Enterprise agency", "€ 3.500,- tot € 10.000+", "€ 140,- tot € 200+"],
            ]}
            highlightRow={1}
          />
          <DataTable
            caption="Per bedrijfsgrootte"
            head={["Bedrijfsgrootte / platform", "Gemiddelde investering per maand"]}
            rows={[
              ["Lokale speler / kleine website", "€ 500,- tot € 1.000,-"],
              ["Nationale MKB / e-commerce", "€ 1.000,- tot € 4.000,-"],
              ["Internationaal / enterprise e-commerce", "€ 4.000,- tot € 15.000+"],
            ]}
            highlightRow={1}
          />
        </div>
        <p className="mt-6 text-sm text-brand-muted">
          Bedragen exclusief btw en indicatief. Bij ons weet je vooraf exact wat je betaalt, geen nacalculatie.
        </p>
      </Section>

      <ContentSections
        className="border-t border-brand-line bg-white"
        eyebrow="SEO kosten uitgelegd"
        title="Wat bepaalt wat SEO kost?"
        intro="De bedragen hierboven zijn het antwoord. Hieronder staat waar ze vandaan komen, zodat je ze kunt vergelijken met elke andere offerte die op je bureau ligt."
        blocks={KOSTEN_BLOKKEN}
      />

      <RelatedLinks
        title="Verder over kosten en wat je ervoor krijgt"
        items={[
          {
            label: "SEO uitbesteden aan een vaste specialist",
            to: "/online-marketing/seo-uitbesteden/",
            note: "Wat je voor het maandbedrag daadwerkelijk krijgt.",
          },
          {
            label: "SEO-advies zonder maandpakket",
            to: "/online-marketing/seo-advies/",
            note: "Eenmalig een plan kopen en het zelf uitvoeren.",
          },
          {
            label: "Zoekmachine optimalisatie specialist inhuren",
            to: "/online-marketing/zoekmachine-optimalisatie-specialist/",
            note: "Wie het werk doet en waar je op let bij het kiezen.",
          },
          {
            label: "Kosten van online marketing breder",
            to: "/kosten-online-marketing/",
            note: "Ook Ads, social en e-mail naast SEO.",
          },
          {
            label: "Tarieven linkbuilding",
            to: "/tarieven-linkbuilding/",
            note: "Wat autoriteit opbouwen per maand kost.",
          },
          {
            label: "SEO en SEA combineren",
            to: "/online-marketing/seo-en-sea/",
            note: "Hoe je je budget verdeelt over organisch en betaald.",
          },
        ]}
      />

      <FaqBlock items={FAQ} title="Over onze tarieven" />
      <CtaBand />
    </SiteLayout>
  );
}
