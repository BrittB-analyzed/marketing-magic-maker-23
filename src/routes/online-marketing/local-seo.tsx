import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/local-seo")({
  head: () => ({
    meta: [
      { title: "Local SEO: gevonden worden in je eigen regio | B. Analyzed" },
      { name: "description", content: "Local SEO voor MKB-bedrijven: Google Bedrijfsprofiel, lokale landingspagina's en reviews die je zichtbaar maken in je werkgebied." },
      { property: "og:title", content: "Local SEO: gevonden worden in je eigen regio" },
      { property: "og:description", content: "Zichtbaar in Maps en lokale zoekresultaten, met een profiel dat aanvragen oplevert." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Local SEO: gevonden worden in je eigen werkgebied"
      intro="Voor bedrijven die klanten uit de regio halen is lokale zichtbaarheid vaak waardevoller dan landelijk ranken. Wij richten je lokale aanwezigheid volledig in."
      points={[
        "Google Bedrijfsprofiel volledig ingericht en geoptimaliseerd",
        "Lokale landingspagina's met echte, plaatsspecifieke inhoud",
        "Consistente bedrijfsvermeldingen (NAW) over relevante platformen",
        "Reviewstrategie: structureel meer en betere beoordelingen",
        "LocalBusiness-schema zodat machines je vestiging begrijpen",
      ]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Local SEO is een onderdeel van de SEO-pijler. Zit je in een regionale markt, dan begint je groei hier."
    />
  ),
});