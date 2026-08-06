import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/emailmarketing")({
  head: () => ({
    meta: [
      { title: "E-mailmarketing: rendement uit je bestaande lijst | B. Analyzed" },
      { name: "description", content: "E-mailmarketing voor het MKB: geautomatiseerde flows, nieuwsbrieven en opvolging die van bezoekers klanten maakt." },
      { property: "og:title", content: "E-mailmarketing: rendement uit je bestaande lijst" },
      { property: "og:description", content: "Automatische opvolging en nieuwsbrieven die aantoonbaar omzet opleveren." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="E-mailmarketing: het goedkoopste kanaal dat je hebt"
      intro="Je bestaande contacten kennen je al. Met slimme opvolging en relevante mails haal je omzet uit een lijst waar je nu waarschijnlijk weinig mee doet."
      points={[
        "Geautomatiseerde opvolging na een scan-, offerte- of downloadaanvraag",
        "Nieuwsbrief met een vast ritme en inhoud die mensen echt openen",
        "Segmentatie op interesse en fase in het koopproces",
        "Meting tot op omzetniveau, niet alleen open- en klikratio",
      ]}
      pillar="CRO"
      pillarTo="/online-marketing/conversie-optimalisatie"
      pillarNote="E-mail is verlengde conversie-optimalisatie: je haalt meer uit contacten die je al hebt."
    />
  ),
});