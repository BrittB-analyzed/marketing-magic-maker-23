import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { ServicePage } from "@/components/site/service-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  {
    q: "Wat kost SEO uitbesteden?",
    a: "Een SEO- & GEO-pakket start bij € 999,- per maand. Een eenmalige uitgebreide audit kost vanaf € 599,-. Wat je betaalt hangt af van je markt en van hoeveel we zelf uitvoeren.",
  },
  {
    q: "Hoe lang duurt het voor SEO werkt?",
    a: "Quick wins zijn vaak binnen 30 tot 60 dagen zichtbaar. Structurele groei bouw je op in 6 tot 12 maanden, afhankelijk van je concurrentie en je startpositie.",
  },
  {
    q: "Doen jullie ook de teksten?",
    a: "Ja. We schrijven de content zelf of begeleiden jouw team. Elke tekst wordt zo opgebouwd dat hij zowel voor Google als voor AI-antwoorden werkt.",
  },
  {
    q: "Blijf ik eigenaar van het werk?",
    a: "Altijd. Content, accounts en data staan op jouw naam. Stopt de samenwerking, dan houd je alles.",
  },
];

export const Route = createFileRoute("/online-marketing/seo-uitbesteden")({
  head: () => ({
    meta: [
      { title: "SEO uitbesteden aan een bureau dat het uitlegt | B. Analyzed" },
      {
        name: "description",
        content:
          "SEO uitbesteden voor het MKB: technische fundering, content op koopintentie en autoriteit. Vaste specialist, maandelijkse video-rapportage, vanaf € 999,- per maand.",
      },
      { property: "og:title", content: "SEO uitbesteden aan een bureau dat het uitlegt" },
      {
        property: "og:description",
        content: "Structurele groei in organisch verkeer, met een vaste specialist en maandelijkse Loom-video.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayout>
      <ServicePage
        eyebrow="SEO"
        title="SEO uitbesteden aan een bureau dat het ook uitlegt"
        intro="SEO uitbesteden betekent bij ons: één vaste specialist die je site technisch op orde brengt, content maakt op de zoekvragen waar geld in zit, en je elke maand in een video laat zien wat het opleverde."
        forWho={[
          { title: "Je staat stil in Google", body: "Je website is jaren geleden gebouwd en levert nauwelijks aanvragen op." },
          { title: "Je betaalt alles via Ads", body: "Elke lead kost geld. Je wilt een basis die ook zonder advertentiebudget doorloopt." },
          { title: "Je vorige bureau bleef vaag", body: "Automatische rapporten vol grafieken, maar niemand die uitlegt wat het betekent." },
        ]}
        deliverables={[
          "Technische audit en fixes: snelheid, indexatie, Core Web Vitals",
          "Zoekwoordenonderzoek gericht op koopintentie, niet op volume",
          "Contentplan en uitvoering: nieuwe pagina's en herschrijvingen",
          "Interne linkstructuur en autoriteitsopbouw",
          "Lokale vindbaarheid en Google Bedrijfsprofiel",
          "Maandelijkse Loom-video plus 24/7 dashboard",
        ]}
        steps={[
          { title: "Onderzoek", body: "Nulmeting van je posities, techniek, content en concurrentie." },
          { title: "Strategie", body: "Welke pagina's het snelst rendement geven en in welke volgorde we werken." },
          { title: "Uitvoering", body: "Techniek eerst, dan content, dan autoriteit. Alles zichtbaar in je dashboard." },
          { title: "Optimalisatie", body: "Maandelijks bijsturen op basis van wat de data laat zien." },
        ]}
        connection="Meer dan 90% van de klikken gaat naar pagina 1 van Google, en zo'n 60% daarvan naar de top 3. SEO en GEO gebruiken dezelfde fundering: sterke content en schone techniek. Ads levert binnen weken de zoektermdata waarmee we de SEO-strategie scherper maken, en CRO zorgt dat het organische verkeer dat binnenkomt ook echt aanvragen wordt."
        price={{ from: "Vanaf € 999,- per maand", note: "Losse uitgebreide audit met concrete actiepunten vanaf € 599,-. Altijd een vaste prijs vooraf." }}
        related={[
          { label: "GEO: zichtbaar in AI", to: "/online-marketing/geo-optimalisatie/" },
          { label: "Local SEO", to: "/online-marketing/local-seo/" },
          { label: "Linkbuilding uitbesteden", to: "/online-marketing/linkbuilding-uitbesteden/" },
          { label: "SEO-teksten laten schrijven", to: "/online-marketing/seo-teksten-laten-schrijven/" },
        ]}
        related={[
          { label: "GEO: zichtbaar in AI", to: "/online-marketing/geo-optimalisatie/" },
          { label: "Local SEO", to: "/online-marketing/local-seo/" },
          { label: "Linkbuilding uitbesteden", to: "/online-marketing/linkbuilding-uitbesteden/" },
          { label: "SEO-teksten laten schrijven", to: "/online-marketing/seo-teksten-laten-schrijven/" },
        ]}
        faq={FAQ}
      />
    </SiteLayout>
  ),
});