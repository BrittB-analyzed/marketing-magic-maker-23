import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, Faq, FaqBlock, PageHero, Section, SectionHeading, faqJsonLd } from "@/components/site/page-bits";

const FAQ: Faq[] = [
  {
    q: "Waarom werken jullie met vanaf-prijzen?",
    a: "Omdat een webshop met 4.000 producten iets anders nodig heeft dan een installatiebedrijf met vijf diensten. Je krijgt altijd vooraf een vaste maandprijs, zodat je nooit een nacalculatie krijgt.",
  },
  {
    q: "Zit GEO bij het SEO-pakket in?",
    a: "Ja. Vanaf € 999,- per maand werken we aan zichtbaarheid in Google én in AI-antwoorden. We zien het niet als losse dienst maar als één zichtbaarheidsstrategie.",
  },
  {
    q: "Wat als het niet werkt?",
    a: "We spreken vooraf af welke resultaten we nastreven en meten die maandelijks. Blijven die uit, dan sturen we bij zonder extra kosten en werken we net zo lang door tot je wél meetbaar resultaat boekt.",
  },
  {
    q: "Werken jullie ook op uurbasis?",
    a: "Ja, voor losse werkzaamheden buiten een vast pakket hanteren we een uurtarief van € 90,-. Dat spreken we altijd vooraf af, zodat je nooit voor verrassingen komt te staan.",
  },
];

const PLANS = [
  {
    name: "Gratis quick scan",
    price: "€ 0,-",
    note: "Eenmalig",
    items: ["Zichtbaarheid in Google en AI", "Belangrijkste blokkades", "Korte persoonlijke video", "Binnen 2 werkdagen"],
    cta: "Aanvragen",
    to: "/gratis-seo-scan/",
    highlight: false,
  },
  {
    name: "Uitgebreide audit",
    price: "vanaf € 599,-",
    note: "Eenmalig",
    items: [
      "Volledige technische en content-audit",
      "GEO-nulmeting op je belangrijkste prompts",
      "Concurrentieanalyse",
      "Actieplan op volgorde van impact",
      "Toelichting in een adviesgesprek",
    ],
    cta: "Audit aanvragen",
    to: "/contact/",
    highlight: false,
  },
  {
    name: "SEO & GEO-pakket",
    price: "vanaf € 999,-",
    note: "Per maand",
    items: [
      "Alles uit de audit, doorlopend",
      "Techniek, content en autoriteit",
      "GEO: citeerbaarheid en promptmonitoring",
      "Maandelijkse Loom-video en dashboard",
      "Vaste specialist, geen accountmanager",
    ],
    cta: "Plan een gesprek",
    to: "/contact/",
    highlight: true,
  },
];

export const Route = createFileRoute("/tarieven-seo")({
  head: () => ({
    meta: [
      { title: "Tarieven SEO & GEO — transparant vanaf € 599,- | B. Analyzed" },
      {
        name: "description",
        content:
          "Wat kost SEO en GEO? Uitgebreide audit vanaf € 599,-, doorlopend SEO- & GEO-pakket vanaf € 999,- per maand. Altijd een vaste prijs vooraf.",
      },
      { property: "og:title", content: "Tarieven SEO & GEO — transparant vanaf € 599,-" },
      { property: "og:description", content: "Heldere prijzen: gratis quick scan, audit vanaf € 599,-, pakket vanaf € 999,- per maand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: Tarieven,
});

function Tarieven() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tarieven"
        title="Wat kost SEO en GEO bij B. Analyzed?"
        intro="Geen offertetraject van drie weken. Hieronder zie je waar we starten, wat je ervoor krijgt en wanneer welk pakket logisch is."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight ? "border-brand-ink bg-white shadow-[0_2px_16px_rgba(20,24,31,0.06)]" : "border-brand-line bg-white"
              }`}
            >
              {p.highlight && (
                <div className="-mx-8 -mt-8 mb-5 rounded-t-2xl bg-brand-green px-8 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  Meest gekozen
                </div>
              )}
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{p.price}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-muted">{p.note}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-brand-muted">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                to={p.to}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-brand-red text-white hover:opacity-90"
                    : "border border-brand-line text-brand-ink hover:border-brand-ink"
                }`}
              >
                {p.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-brand-muted">
          Alle bedragen zijn exclusief btw. Vanaf € 999,- per maand combineren we SEO, GEO, Ads en CRO — je kiest zelf uit diverse diensten. Los maatwerk factureren we tegen € 90,- per uur. Werken we samen? Dan gaan we net zo lang door tot je meetbaar resultaat boekt.
        </p>
      </Section>
      <Section className="bg-brand-sand">
        <SectionHeading
          eyebrow="Marktoverzicht"
          title="Wat kost SEO & GEO in de markt?"
          intro="Ter vergelijking: dit zijn de gangbare investeringen in Nederland, per type aanbieder en per bedrijfsgrootte. Zo zie je meteen waar onze tarieven staan."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <PriceTable
            caption="Per type aanbieder"
            head={["Type aanbieder", "Per maand", "Uurtarief"]}
            rows={[
              ["Freelancer / SEO-specialist", "€ 500,- tot € 1.500,-", "€ 75,- tot € 110,-"],
              ["MKB-bureau (zoals wij)", "€ 999,- tot € 3.500,-", "€ 90,- tot € 140,-"],
              ["Enterprise agency", "€ 3.500,- tot € 10.000+", "€ 140,- tot € 200+"],
            ]}
            highlightRow={1}
          />
          <PriceTable
            caption="Per bedrijfsgrootte"
            head={["Bedrijfsgrootte / platform", "Gemiddelde investering per maand"]}
            rows={[
              ["Lokale speler / kleine website", "€ 500,- tot € 1.000,-"],
              ["Nationale MKB / e-commerce", "€ 1.000,- tot € 4.000,-"],
              ["Internationaal / enterprise e-commerce", "€ 4.000,- tot € 15.000+"],
            ]}
            highlightRow={1}
          />
        </div>
        <p className="mt-6 text-sm text-brand-muted">
          Bedragen exclusief btw en indicatief. Bij ons weet je vooraf exact wat je betaalt — geen nacalculatie.
        </p>
      </Section>
      <FaqBlock items={FAQ} title="Over onze tarieven" />
      <CtaBand />
    </SiteLayout>
  );
}

function PriceTable({
  caption,
  head,
  rows,
  highlightRow,
}: {
  caption: string;
  head: string[];
  rows: string[][];
  highlightRow?: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-line bg-white">
      <div className="border-b border-brand-line px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
        {caption}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-brand-sand/60">
              {head.map((h) => (
                <th key={h} className="px-6 py-3 font-semibold text-brand-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r[0]}
                className={`border-t border-brand-line ${i === highlightRow ? "bg-brand-green/10" : ""}`}
              >
                {r.map((cell, j) => (
                  <td
                    key={cell + j}
                    className={`px-6 py-4 ${j === 0 ? "font-medium text-brand-ink" : "text-brand-muted"} ${
                      i === highlightRow && j === 0 ? "text-brand-ink" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}