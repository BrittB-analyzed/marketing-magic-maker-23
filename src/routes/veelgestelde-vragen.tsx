import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, Faq, FaqBlock, PageHero, faqJsonLd } from "@/components/site/page-bits";

const FAQ: Faq[] = [
  { q: "Wat kost SEO bij B. Analyzed?", a: "Een eenmalige SEO & GEO-audit kost € 599,-. Een doorlopend traject start bij € 999,- per maand. Wat je nodig hebt, hangt af van je markt en je huidige situatie; dat vertellen we eerlijk na de gratis scan." },
  { q: "Wat is GEO en waarom is het belangrijk?", a: "GEO staat voor generative engine optimization: zorgen dat AI-zoekmachines als ChatGPT, Gemini en Perplexity jouw bedrijf noemen in hun antwoord. Steeds meer mensen zoeken daar en klikken niet meer door naar Google." },
  { q: "Hoe snel zie ik resultaat?", a: "Bij lokale zoekopdrachten en snelle technische winst vaak binnen vier tot acht weken. Voor competitieve landelijke termen reken je op zes tot twaalf maanden. Wij werken net zo lang door tot je meetbaar resultaat boekt." },
  { q: "Zit ik vast aan een lang contract?", a: "Nee. Na een opstartperiode van drie maanden is de samenwerking maandelijks opzegbaar. Je accounts en data blijven altijd van jou." },
  { q: "Werken jullie ook buiten Limburg?", a: "Ja. We werken vanuit Venlo voor klanten door heel Nederland. Overleg gaat via video-calls en maandelijkse Loom-rapportages, dus afstand is geen probleem." },
  { q: "Wat is het verschil tussen de gratis scan en de betaalde audit?", a: "De gratis scan is een korte video met de drie belangrijkste kansen. De audit van € 599,- is een volledige analyse van techniek, content, links en AI-zichtbaarheid, met een uitgewerkt actieplan dat je zelf of met ons kunt uitvoeren." },
  { q: "Doen jullie ook Google Ads?", a: "Ja. SEO, GEO, Google Ads en conversie-optimalisatie zitten bij ons onder één dak, zodat de kanalen elkaar versterken in plaats van beconcurreren." },
  { q: "Hoe rapporteren jullie?", a: "Elke maand een dashboard met de cijfers en een persoonlijke Loom-video waarin we uitleggen wat we deden, wat het opleverde en wat er hierna gebeurt." },
];

export const Route = createFileRoute("/veelgestelde-vragen")({
  head: () => ({
    meta: [
      { title: "Veelgestelde vragen over SEO, GEO en Ads | B. Analyzed" },
      { name: "description", content: "Antwoord op de meestgestelde vragen over SEO, GEO, tarieven, doorlooptijd en samenwerken met B. Analyzed." },
      { property: "og:title", content: "Veelgestelde vragen over SEO, GEO en Ads" },
      { property: "og:description", content: "Tarieven, doorlooptijd, contractvorm en werkwijze: eerlijk antwoord op de vragen die je nu hebt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Eerlijk antwoord op de vragen die je nu hebt"
        intro="Staat je vraag er niet bij? Stuur een WhatsApp-bericht of bel ons — je krijgt gewoon een mens aan de lijn."
      />
      <FaqBlock items={FAQ} />
      <CtaBand />
    </SiteLayout>
  ),
});
