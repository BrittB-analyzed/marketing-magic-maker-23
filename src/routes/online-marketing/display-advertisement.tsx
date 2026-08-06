import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/display-advertisement")({
  head: () => ({
    meta: [
      { title: "Display advertising | B. Analyzed" },
      { name: "description", content: "Display advertising en remarketing via het Google Display Netwerk. Zichtbaar blijven bij bezoekers die nog niet klaar waren om te kopen." },
      { property: "og:title", content: "Display advertising" },
      { property: "og:description", content: "Display advertising en remarketing via het Google Display Netwerk. Zichtbaar blijven bij bezoekers die nog niet klaar waren om te kopen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Display advertising: zichtbaar blijven bij mensen die je site al kennen"
      intro="Display werkt zelden als los kanaal, maar wel als versterking. Wij zetten het in om bestaande interesse om te zetten in aanvragen."
      points={["Inzet van het Google Display Netwerk, goed voor het merendeel van Google's advertentie-inkomsten en dus zeer verfijnd op rendement", "Remarketing op bezoekers die een dienstpagina of offerteformulier bekeken", "Uitsluitingen van apps en lage-kwaliteit plaatsingen, zodat je budget niet verdampt", "Banners in jouw huisstijl, in alle formaten die het netwerk nodig heeft: of iemand klikt is voor zo'n 70% afhankelijk van de vormgeving, dus we A/B-testen visuals en boodschap", "Frequentiebeperking zodat je merk niet irritant wordt", "Rapportage op bijdrage aan conversies, niet op vertoningen"]}
      pillar="Google Ads"
      pillarTo="/online-marketing/google-ads-uitbesteden"
      pillarNote="Display is het sluitstuk van je advertentiestrategie: eerst vraag afvangen, dan mensen terughalen."
    />
  ),
});
