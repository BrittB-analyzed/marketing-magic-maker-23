import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import {
  ContentSections,
  CtaBand,
  DataTable,
  FaqBlock,
  PageHero,
  Section,
  SectionHeading,
  faqJsonLd,
  type ContentBlock,
  type Faq,
} from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/pricing/";

const FAQ: Faq[] = [
  {
    q: "Why do you quote from-prices?",
    a: "Because a webshop with 4,000 products needs something different from an installer with five services. You always get a fixed monthly price agreed up front, so there is never a settlement invoice at the end of a quarter.",
  },
  {
    q: "Is GEO included in the SEO package?",
    a: "Yes. From € 999,- a month we work on visibility in Google and in AI answers together. We do not treat it as a separate service, because the underlying work is largely the same and splitting it would mean charging twice.",
  },
  {
    q: "What if it does not work?",
    a: "We agree in advance which results we are aiming for and measure them monthly. If they fail to materialise, we adjust the approach at no extra cost and keep working until you see measurable results.",
  },
  {
    q: "Do you work hourly?",
    a: "Yes, for loose work outside a package we charge € 90,- an hour. That is agreed in advance so you are never surprised by the invoice.",
  },
  {
    q: "Is VAT included?",
    a: "No, all amounts on this page exclude VAT. For most businesses that VAT is reclaimable, which means the net cost equals the listed price.",
  },
  {
    q: "How do these rates compare to UK agencies?",
    a: "Our hourly rate of € 90,- sits well below the typical London agency rate, while the work is comparable. That gap is a cost-of-market difference, not a quality difference, and it is the main reason clients outside the Netherlands work with us.",
  },
];

const PLANS = [
  {
    name: "Free quick scan",
    price: "€ 0,-",
    note: "One-off",
    items: [
      "Visibility in Google and in AI answers",
      "Your three biggest blockers",
      "A short personal video",
      "Within 2 working days",
    ],
    cta: "Request it",
    to: "/en/free-scan/",
    highlight: false,
  },
  {
    name: "Full audit",
    price: "from € 599,-",
    note: "One-off",
    items: [
      "Complete technical and content audit",
      "GEO baseline on your key prompts",
      "Competitor analysis",
      "Action plan ordered by impact",
      "Walkthrough in an advisory call",
    ],
    cta: "Request an audit",
    to: "/en/contact/",
    highlight: false,
  },
  {
    name: "SEO & GEO package",
    price: "from € 999,-",
    note: "Per month",
    items: [
      "Everything in the audit, continuously",
      "Technology, content and authority",
      "GEO: citability and prompt monitoring",
      "Monthly video and dashboard",
      "A fixed specialist, not an account manager",
    ],
    cta: "Book a call",
    to: "/en/contact/",
    highlight: true,
  },
];

const BLOCKS: ContentBlock[] = [
  {
    h: "What determines the price of SEO?",
    answer:
      "Four things: how large your site is, how strong your competition is, how much is technically wrong, and how much content needs writing. A local service business with eight pages costs structurally less than a webshop with four thousand products in three languages.",
    bullets: [
      "Size of the site: every extra language, category or product group is recurring monthly work",
      "Competition in your keywords: a saturated market needs more content and more authority for the same position",
      "Technical condition: a site that needs clearing up costs more hours in the first months",
      "Content need: rewriting existing pages is cheaper than building a new section from nothing",
      "Pace: faster results means more hours per month, not a different kind of work",
    ],
    paragraphs: [
      "What does not determine the price is the number of keywords in a package. Anyone charging per keyword is selling you a number rather than a result: ten easy keywords are less work than one hard one. Always convert back to hours per month, and ask what happens in those hours.",
    ],
  },
  {
    h: "What to realistically expect per budget",
    answer:
      "Below € 500,- a month you are buying maintenance. Between € 999,- and € 1,500,- you can grow structurally in one market. Above € 2,500,- you keep several topics moving at once. The table below is there to calibrate expectations, not as a promise.",
    table: {
      caption: "Budget, input and what comes out in practice",
      head: ["Budget per month", "Hours per month", "What fits in it", "Realistic outcome"],
      rows: [
        ["€ 250,- to € 500,-", "2 to 5", "Monitoring, small fixes, one text a quarter", "Holding what you have, little growth"],
        ["€ 999,-", "8 to 11", "Technical upkeep, two texts a month, internal links, GEO monitoring", "Structural growth in one market and language"],
        ["€ 1,500,- to € 2,500,-", "12 to 25", "The above plus link building and conversion work", "Growth across several topics at once"],
        ["€ 2,500,- to € 5,000,-", "25 to 50", "Multiple languages or brands, own content calendar, continuous testing", "Competing on saturated keywords"],
      ],
      highlightRow: 1,
      footnote:
        "Hours are derived from a rate of € 90,- to € 120,- an hour. For calibration: one client went from 1 to 28 keywords in the top five in twelve months on the € 999,- tier.",
    },
  },
  {
    h: "How to set your own budget in five steps",
    answer:
      "Work backwards. Start with what one client is worth, decide how many more you want, and work back to the enquiries and visitors needed. Only then look at what it may cost. That way you buy a goal rather than a package.",
    steps: [
      {
        title: "Establish your value per client",
        body: "Average order value times how often a client returns. For service businesses that is usually far higher than the first invoice.",
      },
      {
        title: "Work back to enquiries",
        body: "How many enquiries do you need for one client? At a 25% win rate on quotes, that is four.",
      },
      {
        title: "Work back to visitors",
        body: "Divide the enquiries needed by your conversion rate. If you do not know it, calculate that first.",
      },
      {
        title: "Put a timeframe on it",
        body: "SEO compounds. Allow six to twelve months before the visitor numbers you need come into view.",
      },
      {
        title: "Decide what it may cost",
        body: "Should it pay for itself within the first year, or is the second half of year one acceptable? That answer sets your monthly budget, not an agency's package.",
      },
    ],
  },
];

const ALL_RATES = {
  caption: "All rates at a glance",
  head: ["Service", "Price", "What it is"],
  rows: [
    ["Free quick scan", "€ 0,-", "A short video with your three biggest blockers, within two working days"],
    ["Full SEO & GEO audit", "from € 599,-", "One-off: technology, keywords, competition, GEO baseline and an action list"],
    ["Ongoing SEO & GEO package", "from € 999,- per month", "Execution across technology, content and authority, with a monthly video"],
    ["Loose hours", "€ 90,- per hour", "Work outside a package, agreed in advance"],
    ["Link building", "from € 125,- per month", "Available separately or inside the package"],
    ["Google Ads management", "from € 499,- per month", "Excluding your ad budget, which you pay Google directly"],
  ],
  highlightRow: 2,
  footnote: "All amounts exclude VAT. You get a fixed monthly price up front; there is never a settlement afterwards.",
};

export const Route = createFileRoute("/en/pricing")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <SiteLayoutEn>
      <PageHero
        locale="en"
        eyebrow="Pricing"
        title="What SEO and GEO cost at B. Analyzed"
        intro="A one-off audit from € 599,-, ongoing work from € 999,- a month and loose hours at € 90,-. No three-week quotation process to find out whether we are in the same ballpark: it is on this page."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? "border-brand-ink bg-white shadow-[0_2px_16px_rgba(20,24,31,0.06)]"
                  : "border-brand-line bg-white"
              }`}
            >
              {p.highlight && (
                <div className="-mx-8 -mt-8 mb-5 rounded-t-2xl bg-brand-green px-8 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  Most chosen
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
                    ? "bg-brand-green text-white hover:bg-brand-green-dark"
                    : "border border-brand-line text-brand-ink hover:border-brand-ink"
                }`}
              >
                {p.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <DataTable {...ALL_RATES} />
        </div>
      </Section>

      <Section className="bg-brand-sand">
        <SectionHeading
          eyebrow="Market comparison"
          title="How these rates sit in the market"
          intro="For reference, the going rates in the Netherlands by type of supplier. Agency rates in London and other major European cities typically sit well above these."
        />
        <div className="mt-10">
          <DataTable
            caption="By type of supplier"
            head={["Type of supplier", "Per month", "Hourly rate"]}
            rows={[
              ["Freelancer / SEO specialist", "€ 500,- to € 1,500,-", "€ 75,- to € 110,-"],
              ["SME agency (like us)", "€ 999,- to € 3,500,-", "€ 90,- to € 140,-"],
              ["Enterprise agency", "€ 3,500,- to € 10,000+", "€ 140,- to € 200+"],
            ]}
            highlightRow={1}
            footnote="Indicative and excluding VAT. With us you know up front exactly what you pay."
          />
        </div>
      </Section>

      <ContentSections
        className="border-t border-brand-line bg-white"
        eyebrow="Costs explained"
        title="What drives the price"
        intro="The amounts above are the answer. Below is where they come from, so you can compare them against any other quote on your desk."
        blocks={BLOCKS}
      />

      <FaqBlock locale="en" items={FAQ} title="About our pricing" />
      <CtaBand locale="en" />
    </SiteLayoutEn>
  );
}
