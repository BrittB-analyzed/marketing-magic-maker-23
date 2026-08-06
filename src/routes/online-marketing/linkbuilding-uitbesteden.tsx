import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/linkbuilding-uitbesteden")({
  head: () => ({
    meta: [
      { title: "Linkbuilding uitbesteden — autoriteit die standhoudt | B. Analyzed" },
      { name: "description", content: "Linkbuilding uitbesteden zonder linkspam: relevante vermeldingen die je autoriteit in Google én je herkenbaarheid in AI-antwoorden versterken." },
      { property: "og:title", content: "Linkbuilding uitbesteden — autoriteit die standhoudt" },
      { property: "og:description", content: "Relevante links en vermeldingen in plaats van massaproductie." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Linkbuilding uitbesteden zonder linkspam"
      intro="Links blijven een van de sterkste rankingsignalen — mits ze uit de juiste hoek komen. Wij bouwen aan vermeldingen die zowel Google als AI-modellen als bewijs van autoriteit zien."
      points={[
        "Linkprofielanalyse: wat heb je, wat mist er, wat is risicovol",
        "Relevante plaatsingen in jouw branche, geen willekeurige linknetwerken",
        "Digitale PR en vermeldingen die ook zonder link waarde hebben",
        "Interne linkstructuur als eerste, gratis winst",
        "Maandelijkse rapportage van nieuwe verwijzingen",
      ]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Linkbuilding werkt alleen bovenop een goede technische en inhoudelijke basis. Daarom hangt het onder de SEO-pijler."
    />
  ),
});