import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social media marketing voor het MKB | B. Analyzed" },
      { name: "description", content: "Social media marketing die bijdraagt aan aanvragen: contentkalender, advertenties en meetbare doelen in plaats van likes." },
      { property: "og:title", content: "Social media marketing voor het MKB" },
      { property: "og:description", content: "Zichtbaarheid op social die je verkoopdoelen ondersteunt, meetbaar gemaakt." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Social media marketing die bijdraagt aan omzet"
      intro="Social is zelden je grootste leadbron, maar wel de plek waar mensen je merk leren kennen voordat ze zoeken. Wij zetten het in als versterking van je vier pijlers."
      points={[
        "Contentkalender afgestemd op je SEO- en GEO-thema's",
        "Advertenties op LinkedIn, Meta of Instagram met een concreet doel",
        "Hergebruik van bestaande content in plaats van steeds iets nieuws",
        "Meetbare doelen: aanvragen en bereik binnen je doelgroep",
      ]}
      pillar="Ads"
      pillarTo="/online-marketing/google-ads-uitbesteden"
      pillarNote="Social advertising hoort bij de Ads-pijler: betaald bereik met een meetbaar rendement."
    />
  ),
});