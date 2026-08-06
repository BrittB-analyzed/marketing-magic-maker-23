import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/uitbesteden")({
  head: () => ({
    meta: [
      { title: "Online marketing uitbesteden | B. Analyzed" },
      { name: "description", content: "Online marketing uitbesteden aan een vast team: SEO, GEO, Ads en CRO onder één dak, met maandelijkse video-rapportage." },
      { property: "og:title", content: "Online marketing uitbesteden" },
      { property: "og:description", content: "Online marketing uitbesteden aan een vast team: SEO, GEO, Ads en CRO onder één dak, met maandelijkse video-rapportage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Online marketing uitbesteden zonder je grip te verliezen"
      intro="Je krijgt een vast aanspreekpunt, een maandelijkse video waarin we het werk uitleggen en cijfers die je zelf kunt controleren."
      points={["Eén partij voor SEO, GEO, Google Ads en conversie-optimalisatie", "Vast aanspreekpunt dat je bedrijf kent, geen wisselende accountmanagers", "Maandelijkse Loom-video met wat we deden, wat het opleverde en wat er volgt", "Maandelijks opzegbaar na de opstartperiode", "Toegang tot je eigen accounts en data blijft altijd van jou"]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Uitbesteden betekent bij ons niet dat je het overzicht kwijtraakt, maar dat je het terugkrijgt."
    />
  ),
});
