import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import {
  ContentSections,
  CtaBand,
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

const PAD = "/online-marketing/seo-advies/";

/** Het aanbod staat bovenaan: de zoekintentie achter "seo advies" is commercieel. */
const VORMEN = [
  {
    naam: "Gratis quick scan",
    prijs: "€ 0,-",
    note: "Eenmalig, binnen 2 werkdagen",
    items: [
      "Korte video met de drie grootste blokkades",
      "Zichtbaarheid in Google én in AI-antwoorden",
      "Geen vervolgverplichting",
    ],
    cta: "Scan aanvragen",
    to: "/gratis-seo-scan/",
    highlight: false,
  },
  {
    naam: "SEO-adviesrapport",
    prijs: "vanaf € 599,-",
    note: "Eenmalig",
    items: [
      "Volledige technische en content-analyse",
      "Zoekwoordenonderzoek en concurrentievergelijking",
      "Actielijst op volgorde van impact",
      "Adviesgesprek van een uur om alles door te nemen",
      "Je voert het zelf uit, of laat het uitvoeren",
    ],
    cta: "Adviesrapport aanvragen",
    to: "/contact/",
    highlight: true,
  },
  {
    naam: "SEO-ondersteuning per uur",
    prijs: "€ 90,- per uur",
    note: "Losse uren, geen contract",
    items: [
      "Meekijken met je eigen team",
      "Tweede mening op een plan of offerte",
      "Uitvoerende hulp bij één concreet probleem",
    ],
    cta: "Uren afnemen",
    to: "/contact/",
    highlight: false,
  },
];

const FAQ: Faq[] = [
  {
    q: "Wat kost SEO-advies?",
    a: "Een eenmalig SEO-adviesrapport start bij € 599,-. Daar zit de analyse, de actielijst en een adviesgesprek van een uur in. Wil je alleen even meekijken op één vraag, dan werken we tegen € 90,- per uur. Een korte quick scan is gratis en verplicht je tot niets.",
  },
  {
    q: "Moet ik daarna een maandpakket afnemen?",
    a: "Nee. Het adviesrapport is een afgerond product: je krijgt de analyse en de actielijst en daar mag je zelf mee verder, of je legt het bij je eigen ontwikkelaar neer. Kies je later alsnog voor doorlopende begeleiding, dan verrekenen we het adviesbedrag met de eerste maand.",
  },
  {
    q: "Wat is het verschil tussen een SEO-scan en SEO-advies?",
    a: "Een scan laat zien wat er mis is, advies vertelt je in welke volgorde je het oplost en waarom. De gratis scan is een signalering van een paar minuten kijken. Het adviesrapport is een dag werk: zoekwoorden, techniek, content en concurrentie, uitmondend in een lijst waar je morgen mee kunt beginnen.",
  },
  {
    q: "Kan ik het advies zelf uitvoeren?",
    a: "Ja, daar is het op geschreven. Elke actie staat in gewone taal met de verwachte impact en de benodigde inspanning erbij. Voor de technische punten staat er precies genoeg detail in om het aan je webbouwer door te geven zonder dat je zelf de vertaling hoeft te maken.",
  },
  {
    q: "Hoe lang blijft een SEO-advies geldig?",
    a: "De strategische keuzes gaan een tot twee jaar mee, de technische aandachtspunten korter. Google verandert continu en je concurrenten ook. Na een jaar is een nieuwe nulmeting zinvol, al is dat meestal een kortere ronde dan de eerste keer.",
  },
  {
    q: "Werken jullie ook voor bedrijven buiten Limburg?",
    a: "Ja. Het adviestraject gaat volledig op afstand: analyse, rapport en een adviesgesprek via videobellen. We werken door heel Nederland en België. Alleen als je uitdrukkelijk aan tafel wilt zitten, kijken we naar de reisafstand.",
  },
];

const BLOKKEN: ContentBlock[] = [
  {
    h: "Wat is SEO-advies?",
    answer:
      "SEO-advies is een eenmalige analyse van je website en je markt, met als uitkomst een concrete lijst met wat je moet aanpassen en in welke volgorde. Je koopt een oordeel en een plan, geen doorlopende dienstverlening. Wat je daarna met dat plan doet, bepaal je zelf.",
    paragraphs: [
      "Dat onderscheid is belangrijk, want de meeste bureaus verkopen advies alleen als opstapje naar een maandcontract. Het rapport is dan bewust net wat te vaag om zelf uit te voeren. Wij leveren het als afgerond product: je kunt ermee naar je eigen marketeer, naar je webbouwer of naar een ander bureau, en je bent nergens aan gebonden.",
      "In de praktijk kiezen ondernemers hier om drie redenen voor. Ze hebben zelf iemand die het kan uitvoeren maar niet weet wat er moet gebeuren. Ze twijfelen over een offerte van een ander bureau en willen een tweede mening. Of ze willen weten of SEO überhaupt zinvol is voor hun markt, vóór ze er structureel geld in steken.",
    ],
  },
  {
    h: "Wat krijg je bij een SEO-adviesrapport?",
    answer:
      "Een analyse van vier lagen: techniek, content, zoekwoorden en autoriteit. Daar rolt een lijst uit met per actie de verwachte impact, de benodigde inspanning en wie het kan uitvoeren. Plus een adviesgesprek van een uur waarin we het doornemen en je vragen kunt stellen tot het duidelijk is.",
    bullets: [
      "Technische analyse: crawlbaarheid, indexering, laadtijd, mobiele weergave en de fouten die posities kosten.",
      "Zoekwoordenonderzoek: op welke zoekopdrachten je klanten daadwerkelijk zoeken, met volume en moeilijkheidsgraad.",
      "Contentanalyse: welke pagina's te dun zijn, welke elkaar in de weg zitten en welke onderwerpen ontbreken.",
      "Concurrentievergelijking: waar de drie bedrijven boven je het van winnen, en op welk punt dat inhaalbaar is.",
      "Autoriteit: hoe je linkprofiel eruitziet en of dat je remt op de zoekwoorden die je wilt.",
      "Zichtbaarheid in AI-antwoorden: word je genoemd in ChatGPT, Gemini en Google AI Overviews, en zo nee, waarom niet.",
      "Actielijst op volgorde van impact, zodat de eerste vijf punten het meeste opleveren.",
    ],
    note: "Voorbeeld van wat er uit zo'n analyse komt: bij Meubel & Outlet Weert wees het rapport de categoriepagina's aan als grootste kans, niet de homepage. Die pagina's zijn herschreven en technisch verbeterd, en groeiden uit tot de best bezochte pagina's van de site.",
    caseLink: { label: "Bekijk de case van Meubel & Outlet Weert", slug: "6600x-meubel-outlet-nummer-1-in-google" },
  },
  {
    h: "Wat kost SEO-advies en waar hangt dat van af?",
    answer:
      "Het adviesrapport start bij € 599,- eenmalig. Dat bedrag stijgt als je site veel pagina's heeft, meerdere talen bedient of een webshop met een groot assortiment is. Losse SEO-ondersteuning rekenen we per uur af tegen € 90,-. De prijs staat vooraf vast, er volgt nooit een nacalculatie.",
    table: {
      caption: "Wat je per vorm betaalt",
      head: ["Vorm", "Prijs", "Doorlooptijd", "Geschikt als"],
      rows: [
        ["Gratis quick scan", "€ 0,-", "2 werkdagen", "Je wilt eerst weten of er überhaupt iets te halen valt"],
        ["SEO-adviesrapport", "vanaf € 599,-", "10 werkdagen", "Je wilt een plan dat je zelf of met je eigen team uitvoert"],
        ["SEO-ondersteuning", "€ 90,- per uur", "In overleg", "Je hebt één concrete vraag of wilt een tweede mening"],
        ["Doorlopend pakket", "vanaf € 999,- p/m", "Continu", "Je wilt dat iemand het ook echt uitvoert en bijhoudt"],
      ],
      footnote:
        "Bedragen exclusief btw. Kies je binnen drie maanden na het adviesrapport alsnog voor een doorlopend pakket, dan verrekenen we het adviesbedrag met de eerste maandfactuur.",
    },
  },
  {
    h: "Wat kun je er zelf mee, stap voor stap?",
    answer:
      "Het rapport is zo geordend dat je van boven naar beneden kunt werken. De eerste punten zijn de blokkades die alles remmen, daarna komt het werk dat posities oplevert en pas daarna de langetermijnopbouw. Onderstaande volgorde is precies hoe wij het zelf zouden uitvoeren.",
    steps: [
      {
        title: "Repareer wat indexering blokkeert",
        body: "Pagina's die op noindex staan, verkeerde canonicals, een robots.txt die te veel dichtzet. Dit kost een middag en zonder deze stap heeft de rest geen effect.",
      },
      {
        title: "Breng je zoekwoorden naar de juiste pagina",
        body: "Vaak concurreren twee eigen pagina's om hetzelfde zoekwoord. Kies er één, laat de andere ernaar verwijzen en pas de titel en de eerste alinea aan.",
      },
      {
        title: "Herschrijf de vijf pagina's die het dichtst bij een positie staan",
        body: "Alles wat op plek 11 tot 20 staat, is met beperkt werk te verplaatsen. Beantwoord de zoekvraag in de eerste honderd woorden en voeg de subvragen als koppen toe.",
      },
      {
        title: "Zet interne links van sterk naar zwak",
        body: "Laat de pagina's die het al goed doen, verwijzen naar de pagina's die net buiten bereik staan. Gebruik als ankertekst het zoekwoord van de doelpagina, nooit een algemene verwijzing.",
      },
      {
        title: "Vul de ontbrekende onderwerpen aan",
        body: "Uit het zoekwoordenonderzoek komen vragen waarop je nog geen pagina hebt. Maak er per maand één of twee, niet tien tegelijk.",
      },
      {
        title: "Meet na drie maanden opnieuw",
        body: "Zet je uitgangsposities in een sheet en vergelijk. Wat niet beweegt, vraagt om een andere aanpak. Wat wel beweegt, verdient meer van hetzelfde.",
      },
    ],
  },
  {
    h: "Advies of toch een maandpakket?",
    answer:
      "Advies past als je zelf uitvoeringskracht hebt of eerst zekerheid wilt voordat je structureel investeert. Een maandpakket past als er niemand is die het werk gaat doen. De meest gemaakte fout is een maandpakket afsluiten zonder plan; de op één na meeste is een plan kopen dat vervolgens in een la verdwijnt.",
    paragraphs: [
      "Wees daarom eerlijk over de uitvoering vóórdat je kiest. Een adviesrapport van € 599,- dat niemand oppakt, is duurder dan een pakket dat wél draait. Andersom is een pakket van € 999,- per maand zonde als je eigen marketeer het werk prima aankan en alleen richting mist.",
      "Twijfel je, begin dan met de gratis scan. Die kost je niets en geeft binnen twee werkdagen antwoord op de enige vraag die er op dat moment toe doet: valt er in jouw markt genoeg te halen om er tijd of geld in te steken.",
    ],
  },
  {
    h: "Wat is SEO-ondersteuning en voor wie is het bedoeld?",
    answer:
      "SEO-ondersteuning is losse hulp per uur, zonder rapport en zonder contract. Bedoeld voor bedrijven die het meeste zelf doen maar op één punt vastlopen: een migratie die posities kostte, een technische vraag die niemand kan beantwoorden, of een offerte van een ander bureau die je wilt laten beoordelen.",
    paragraphs: [
      "Deze vorm werkt goed naast een eigen marketeer. Je koopt kennis in op het moment dat je die nodig hebt en betaalt niet door in de maanden dat er niets speelt. In de praktijk zijn dat vaak twee tot vier uur per kwartaal.",
      "Wat we in die uren níet doen, is een half adviesrapport uitsmeren. Is de vraag eigenlijk een volledige analyse, dan zeggen we dat, zodat je niet twintig losse uren betaalt voor wat als één traject goedkoper was geweest.",
    ],
  },
];

export const Route = createFileRoute("/online-marketing/seo-advies")({
  head: () => ({
    meta: seoMeta(PAD, { ogType: "article", twitterCard: "summary" }),
    scripts: [
      {
        type: "application/ld+json",
        children: graph(
          serviceSchema({
            name: "SEO-advies",
            description:
              "Eenmalig SEO-adviesrapport: technische analyse, zoekwoordenonderzoek, concurrentievergelijking en een actielijst op impact. Zonder maandverplichting.",
            path: PAD,
            serviceType: "SEO-advies",
          }),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Online marketing", path: "/online-marketing/" },
            { name: "SEO-advies", path: PAD },
          ]),
        ),
      },
    ],
  }),
  component: SeoAdvies,
});

function SeoAdvies() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="SEO-advies"
        variant="seo"
        title="SEO-advies: een plan dat je zelf kunt uitvoeren"
        intro="SEO-advies is een eenmalige analyse van je website en je markt, met als uitkomst een concrete actielijst op volgorde van impact. Geen maandcontract, geen opzegtermijn: je koopt het oordeel en het plan, en bepaalt zelf wat je ermee doet."
      />

      <Section>
        <SectionHeading
          eyebrow="Aanbod"
          title="Drie vormen, van gratis tot uitgewerkt"
          intro="Welke vorm past, hangt af van hoeveel je zelf kunt uitvoeren. Alle drie zijn ze eenmalig: er zit geen doorlopende verplichting aan vast."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {VORMEN.map((v) => (
            <div
              key={v.naam}
              className={`flex flex-col rounded-2xl border p-8 ${
                v.highlight
                  ? "border-brand-ink bg-white shadow-[0_2px_16px_rgba(20,24,31,0.06)]"
                  : "border-brand-line bg-white"
              }`}
            >
              {v.highlight && (
                <div className="-mx-8 -mt-8 mb-5 rounded-t-2xl bg-brand-green px-8 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  Meest gekozen
                </div>
              )}
              <h2 className="text-lg font-semibold">{v.naam}</h2>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{v.prijs}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-muted">{v.note}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-brand-muted">
                {v.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                to={v.to}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  v.highlight
                    ? "bg-brand-green text-white hover:bg-brand-green-dark"
                    : "border border-brand-line text-brand-ink hover:border-brand-ink"
                }`}
              >
                {v.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Alle bedragen exclusief btw. Wil je liever dat wij het werk ook uitvoeren, kijk dan bij{" "}
          <Link to="/tarieven-seo/" className="font-semibold text-brand-ink hover:text-brand-red">
            de tarieven voor het doorlopende SEO-pakket
          </Link>
          .
        </p>
      </Section>

      <ContentSections className="border-t border-brand-line bg-white" blocks={BLOKKEN} />

      <RelatedLinks
        title="Verder over SEO en wat het kost"
        items={[
          {
            label: "Wat SEO kost per maand",
            to: "/tarieven-seo/",
            note: "Alle bedragen op een rij, plus wat je bij welk budget realistisch mag verwachten.",
          },
          {
            label: "SEO uitbesteden aan een vaste specialist",
            to: "/online-marketing/seo-uitbesteden/",
            note: "Voor als je het advies liever laat uitvoeren dan zelf oppakt.",
          },
          {
            label: "Zoekmachine optimalisatie specialist inhuren",
            to: "/online-marketing/zoekmachine-optimalisatie-specialist/",
            note: "Wie het werk doet en waar je op let bij het kiezen.",
          },
          {
            label: "SEO en SEA combineren",
            to: "/online-marketing/seo-en-sea/",
            note: "Waarom advies over organisch en betaald verkeer bij elkaar hoort.",
          },
          {
            label: "Gratis SEO- en GEO-scan aanvragen",
            to: "/gratis-seo-scan/",
            note: "Binnen twee werkdagen een video met je drie grootste blokkades.",
          },
          {
            label: "SEO-teksten laten schrijven",
            to: "/online-marketing/seo-teksten-laten-schrijven/",
            note: "Voor de contentacties die uit het adviesrapport komen.",
          },
        ]}
      />

      <FaqBlock items={FAQ} title="Over SEO-advies" />
      <CtaBand />
    </SiteLayout>
  );
}
