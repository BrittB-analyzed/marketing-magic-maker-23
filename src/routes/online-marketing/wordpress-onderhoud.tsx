import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/wordpress-onderhoud")({
  head: () => ({
    meta: [
      { title: "WordPress onderhoud: snel, veilig en vindbaar | B. Analyzed" },
      { name: "description", content: "WordPress onderhoud voor MKB-websites: updates, back-ups, beveiliging en snelheidsoptimalisatie zodat je SEO-fundering intact blijft." },
      { property: "og:title", content: "WordPress onderhoud: snel, veilig en vindbaar" },
      { property: "og:description", content: "Updates, back-ups en snelheid — zodat je vindbaarheid geen schade oploopt." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="WordPress onderhoud dat je vindbaarheid beschermt"
      intro="Een trage of gehackte site kost direct posities en aanvragen. Wij houden je WordPress-website snel, veilig en up-to-date."
      points={[
        "Maandelijkse updates van core, thema en plugins",
        "Dagelijkse back-ups met snelle terugzetgarantie",
        "Beveiliging en monitoring op uptime",
        "Snelheidsoptimalisatie gericht op Core Web Vitals",
        "Kleine contentaanpassingen binnen je uren",
      ]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Techniek en snelheid zijn onderdeel van je SEO-fundering. Verwaarloos je dat, dan zakken je posities."
    />
  ),
});