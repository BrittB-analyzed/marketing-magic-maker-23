import { seoMeta } from "@/data/seo-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Waarom zou ik linkbuilding uitbesteden?",
    a: "Een effectieve linkbuilding strategie opzetten vraagt kennis van technieken, een netwerk van relevante websites en tijd om dat netwerk te onderhouden. Door linkbuilding uit te besteden bespaar je tijd en geld en weet je zeker dat de backlinks daadwerkelijk bijdragen aan je posities.",
  },
  {
    q: "Wat is een backlink en waarom is die belangrijk?",
    a: "Een backlink is een link vanaf een andere website naar de jouwe en werkt als een aanbeveling. Google beredeneert dat een website met veel kwalitatieve backlinks waardevolle content bevat, en rankt zo'n website hoger dan een site zonder goede backlinks.",
  },
  {
    q: "Vanaf hoeveel uur per maand kan ik linkbuilding uitbesteden?",
    a: "Je kunt al starten vanaf 2 uur per maand. Heb je nog niets aan linkbuilding gedaan, dan adviseren we te beginnen met het basis- of standaardpakket. Heb je al een goede reputatie en wil je een extra zetje, dan past het basispakket vaak goed; voor veel kwalitatieve links tegelijk is het XXL-pakket geschikter.",
  },
  {
    q: "Zit linkbuilding bij een SEO-abonnement inbegrepen?",
    a: "Ja, bij een SEO-abonnement bij B. Analyzed is linkbuilding onderdeel van het pakket. Heb je al een andere partij voor je overige SEO-diensten, dan kun je ook los bij ons terecht voor linkbuilding uitbesteden.",
  },
  {
    q: "Wat kost linkbuilding uitbesteden?",
    a: "Ons uurtarief is € 90,- exclusief btw, ongeacht welke marketingdienst je afneemt. We werken zonder langlopende contracten: iedere maand bepalen we samen waar de focus op ligt, en je krijgt maandelijkse rapportages van alle geplaatste links en aanvragen.",
  },
  {
    q: "Hoe bepalen jullie welk linkbuilding pakket het beste past?",
    a: "Dat hangt af van je budget, je doelstellingen en je huidige linkprofiel. We bespreken eerst je situatie en wensen, brengen je huidige linkprofiel in kaart en stellen op basis daarvan de meest effectieve linkbuilding strategie samen, op maat, niet uit een standaard schap.",
  },
];

export const Route = createFileRoute("/online-marketing/linkbuilding-uitbesteden")({
  head: () => ({
    meta: seoMeta('/online-marketing/linkbuilding-uitbesteden/', { ogType: 'article', twitterCard: 'summary' }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Linkbuilding uitbesteden: een natuurlijk linkprofiel dat blijft renderen"
      intro="Kwalitatieve linkbuilding is onmisbaar voor een goedlopende website. Wij bouwen sinds 2009 aan linkprofielen die zowel Google als AI-modellen als bewijs van autoriteit herkennen, zonder linkspam."
      points={[
        "Linkprofielanalyse: wat heb je, wat mist er, wat is risicovol",
        "Externe links op relevante websites met een goede autoriteit binnen jouw branche",
        "Homepage-, partnerpagina-, startpagina- en bedrijvenpagina-links vanaf Nederlandse IP-adressen",
        "Begeleidende artikelen die de linkplaatsing onderbouwen",
        "Maandelijkse rapportage van alle geplaatste links en aanvragen",
        "Linkbuilding op maat: pakketten voor de korte en de lange termijn",
      ]}
      sections={[
        {
          title: "Waarom linkbuilding uitbesteden?",
          body: "Niet iedereen beschikt over kennis van de juiste linkbuilding technieken. Een effectieve linkbuilding campagne opzetten vereist expertise en een netwerk van externe websites. Steeds meer bedrijven besteden linkbuilding daarom uit als vast onderdeel van hun marketingstrategie.",
        },
        {
          title: "Een netwerk sinds 2009",
          body: "Onze linkbuilding specialisten hebben in ruim 15 jaar een groot netwerk van interessante websites en partnerships opgebouwd. Door bewezen technieken linken we jouw website aan relevante, autoritatieve websites, zodat je met kwalitatieve backlinks hogere posities behaalt.",
        },
        {
          title: "Van basis- tot XXL-pakket",
          body: "Onze pakketten variëren van een basispakket met circa 8 geplaatste links en 1 artikel per maand tot een XXL-pakket vanaf 50 linkjes per maand met minimaal 4 artikelen. Hoe uitgebreider het pakket, hoe meer kwalitatieve backlinks en zoektermen je meekrijgt, altijd met een minimale domeinautoriteit als kwaliteitsgrens.",
        },
        {
          title: "Linkbuilding zonder vaste contracten",
          body: "B. Analyzed werkt niet met langlopende contracten. We zijn een flexibel online marketingbureau uit Venlo dat meedenkt: iedere maand bepalen we samen aan welke dienst aandacht wordt besteed. Je hoeft geen extra pakket af te nemen om van onze andere diensten gebruik te maken.",
        },
      ]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Linkbuilding werkt alleen bovenop een goede technische en inhoudelijke basis. Daarom hangt het onder de SEO-pijler. Een audit start vanaf € 599,-, doorlopende linkbuilding vanaf € 999,- per maand of ons uurtarief van € 90,-."
      faq={FAQ}
    />
  ),
});
