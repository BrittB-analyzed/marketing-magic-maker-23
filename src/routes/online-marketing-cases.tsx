import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";

const CASES = [
  {
    tag: "Bouw & installatie",
    title: "Van onzichtbaar naar een vaste stroom aanvragen",
    start: "Nauwelijks organisch verkeer, alle aanvragen kwamen uit advertenties.",
    action: "Technische fundering hersteld, 12 dienstpagina's op koopintentie, lokale autoriteit opgebouwd.",
    result: "Organisch verkeer en aanvragen structureel gegroeid binnen 12 maanden.",
    period: "12 maanden",
  },
  {
    tag: "Zakelijke dienstverlening",
    title: "Genoemd worden in AI-antwoorden op branchevragen",
    start: "Goede posities in Google, maar geen enkele vermelding in AI-antwoorden.",
    action: "Content herstructureerd naar citeerbare antwoorden, schema-markup en crawler-toegang geregeld.",
    result: "Wordt inmiddels genoemd bij meerdere gemonitorde prompts in ChatGPT en Perplexity.",
    period: "6 maanden",
  },
  {
    tag: "E-commerce",
    title: "Meer omzet uit hetzelfde advertentiebudget",
    start: "Advertentiekosten liepen op, conversieratio bleef achter.",
    action: "Accountstructuur herbouwd op zoekintentie en de belangrijkste landingspagina's herzien vanuit CRO.",
    result: "Lagere kosten per aanvraag bij gelijk budget.",
    period: "4 maanden",
  },
];

export const Route = createFileRoute("/online-marketing-cases")({
  head: () => ({
    meta: [
      { title: "Cases: wat onze aanpak oplevert | B. Analyzed" },
      {
        name: "description",
        content:
          "Cases van B. Analyzed: startsituatie, ingreep, resultaat en periode. Zie hoe MKB-bedrijven groeiden met SEO, GEO, Ads en CRO.",
      },
      { property: "og:title", content: "Cases: wat onze aanpak oplevert" },
      { property: "og:description", content: "Startsituatie, ingreep, resultaat en periode — per case." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Cases,
});

function Cases() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cases"
        title="Wat onze aanpak in de praktijk oplevert"
        intro="Elke case volgt dezelfde structuur: waar stond de klant, wat hebben we gedaan, wat leverde het op en in welke periode. Exacte cijfers en dashboardbeelden delen we in het adviesgesprek."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-brand-line bg-white p-8">
              <span className="w-fit rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-brand-muted">
                {c.tag}
              </span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{c.title}</h2>
              <dl className="mt-6 flex-1 space-y-4 text-sm">
                {[
                  ["Startsituatie", c.start],
                  ["Ingreep", c.action],
                  ["Resultaat", c.result],
                  ["Periode", c.period],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">{k}</dt>
                    <dd className="mt-1 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}