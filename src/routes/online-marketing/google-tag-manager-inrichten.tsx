import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/google-tag-manager-inrichten")({
  head: () => ({
    meta: [
      { title: "Google Tag Manager inrichten — meting die klopt | B. Analyzed" },
      { name: "description", content: "Google Tag Manager en GA4 correct inrichten: conversiemeting, consent mode v2 en data waar je beslissingen op kunt baseren." },
      { property: "og:title", content: "Google Tag Manager inrichten — meting die klopt" },
      { property: "og:description", content: "Zonder betrouwbare meting is elke marketingbeslissing een gok." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Google Tag Manager en GA4 inrichten"
      intro="Zonder betrouwbare meting is elke marketingbeslissing een gok. Wij zorgen dat je precies ziet welke kanalen aanvragen opleveren — en welke niet."
      points={[
        "Google Tag Manager opgezet of opgeschoond",
        "GA4-conversies die daadwerkelijk aanvragen meten",
        "Consent mode v2 en een correcte cookiebanner",
        "Server-side meting waar dat meerwaarde heeft",
        "Dashboard waarin je in één oogopslag ziet wat werkt",
      ]}
      pillar="CRO"
      pillarTo="/online-marketing/conversie-optimalisatie"
      pillarNote="Meting is de basis van conversie-optimalisatie. Klopt de data niet, dan test je in het duister."
    />
  ),
});