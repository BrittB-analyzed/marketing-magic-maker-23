import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, Faq, FaqBlock, PageHero, RelatedLinks, faqJsonLd } from "@/components/site/page-bits";
import { DIENST_LINKS, OVERIGE_LINKS, SEO_ROL_LINKS } from "@/data/interne-links";

const FAQ: Faq[] = [
  { q: "Waarom online marketing?", a: "In een wereld die constant in beweging is, speelt online marketing een steeds grotere rol. Een goede online marketingcampagne kan al voor een laag tarief een meetbaar effect en groot bereik hebben. Wij denken in de breedste zin mee aan het behalen van online resultaat." },
  { q: "Wat is B. Analyzed?", a: "B. Analyzed is een online marketing bureau dat online resultaten boekt. Online marketing is onze passie: met +15 jaar werkervaring runnen wij met een team van freelancers wereldwijd B. Analyzed marketing." },
  { q: "Hoe werkt B. Analyzed?", a: "We starten met een kennismakingsgesprek zodat we jouw wensen en doelen goed in kaart brengen. Zonder dat inzicht kunnen we geen kwalitatieve oplossing aanbieden." },
  { q: "Voor wie is B. Analyzed?", a: "B. Analyzed is er voor iedereen die online zichtbaar wil zijn en meer uit een webshop of website wil halen, van ZZP'er tot multinational." },
  { q: "Wat kunnen jullie voor mij doen?", a: "B. Analyzed is een one-stop, fullservice internet marketingbureau dat ieder bedrijf van A tot Z ontzorgt: SEO, GEO, Google Ads, linkbuilding, social media en meer, in een strategie op maat." },
  { q: "Moet ik over technische vaardigheden beschikken?", a: "In het geheel niet. Wij kunnen je bijstaan met advies, maar ook een compleet marketingtraject opzetten en volledig uitvoeren." },
  { q: "Wat kost SEO bij B. Analyzed?", a: "Een uitgebreide SEO & GEO-audit start vanaf € 599,-. Een doorlopend pakket start vanaf € 999,- per maand, met diverse diensten om uit te kiezen. Los maatwerk factureren we tegen € 90,- per uur." },
  { q: "Zit ik vast aan een lang contract?", a: "SEO-trajecten werken we met een minimale periode van 9 maanden, daarna maandelijks opzegbaar. We werken net zo lang door tot je meetbaar resultaat boekt." },
  { q: "Worden e-mails snel beantwoord?", a: "Wij proberen altijd binnen 24 uur jouw vraag te beantwoorden." },
  { q: "Waar komt B. Analyzed vandaan?", a: "B. Analyzed is een online marketingbureau dat gevestigd is in Arcen, Limburg, maar wereldwijd en remote werkt." },
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
        intro="Staat je vraag er niet bij? Stuur een WhatsApp-bericht of bel ons, je krijgt gewoon een mens aan de lijn."
      />
      <FaqBlock items={FAQ} />
      <RelatedLinks title="Meer over zoekmachineoptimalisatie" items={SEO_ROL_LINKS} />
      <RelatedLinks className="bg-white" title="Verder op de site" items={OVERIGE_LINKS} />
      <RelatedLinks title="Onze diensten" items={DIENST_LINKS} />
      <CtaBand />
    </SiteLayout>
  ),
});
