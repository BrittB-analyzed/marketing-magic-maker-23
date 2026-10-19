import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import {
  CtaBand,
  FaqBlock,
  PageHero,
  Section,
  SectionHeading,
  faqJsonLd,
  type Faq,
} from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/case-studies/";

/**
 * Engelse samenvattingen van de cases. De uitgewerkte casepagina's zelf staan
 * in het Nederlands; daarom krijgen die links hrefLang="nl" mee, zodat zowel
 * de bezoeker als Google weet dat daar een andere taal achter zit.
 */
const CASES_EN = [
  {
    client: "Steinbrückner",
    sector: "Truck wash installations · B2B",
    period: "12 months",
    headline: "From 1 to 28 keywords in the top 5",
    body: "A market where the key searches get twenty to thirty queries a month, and a single order is worth more than € 75,000. We split the search questions across their own pages and won the metal-wash category outright. Organic traffic rose 733%, and the site is now cited in Google's AI Overview on several terms.",
    stats: [
      { label: "Keywords in top 5", value: "1 → 28" },
      { label: "Organic traffic", value: "+733%" },
      { label: "Order value", value: "€ 75,000+" },
    ],
    slug: "steinbrueckner-truckwash-top-5",
  },
  {
    client: "Med4U",
    sector: "Mediation practice · local services",
    period: "24 months",
    headline: "From position 16 to 1, and 22 times the organic traffic",
    body: "A practice that barely existed online. We rebuilt the local structure and rewrote the existing articles around the questions people actually type. Traffic went from four to eighty-nine visitors a month, and the practice now ranks first on its most important local term.",
    stats: [
      { label: "Organic traffic", value: "4 → 89 /mo" },
      { label: "Core keyword", value: "16 → 1" },
      { label: "Keywords in top 10", value: "24 → 49" },
    ],
    slug: "med4u-mediation-van-16-naar-1",
  },
  {
    client: "Venlo Taxi",
    sector: "Taxi services · local",
    period: "9 years",
    headline: "Nine years at number one, and what it takes to hold it",
    body: "Getting to first place took twelve months. Staying there took nine years. Across 203 consecutive weekly measurements the site held position 1 on its core term. The hard part is not the climb; it is the monthly maintenance nobody sees.",
    stats: [
      { label: "Core keyword", value: "9 years at 1" },
      { label: "Keywords in top 5", value: "26 → 106" },
      { label: "Ranked keywords", value: "344 → 1,270" },
    ],
    slug: "venlo-taxi-negen-jaar-nummer-1",
  },
  {
    client: "World of Art",
    sector: "E-commerce · wall decoration",
    period: "4 years",
    headline: "Six number one positions in a market with no brand loyalty",
    body: "Nobody searches for the shop, they search for the product. We won the weakly contested metal category first, then used that authority to compete on the hard wooden-map terms where a thousand people search every month.",
    stats: [
      { label: "Number one positions", value: "6 keywords" },
      { label: "Keywords in top 5", value: "58 → 209" },
      { label: "Measurements", value: "204" },
    ],
    slug: "world-of-art-wereldkaarten",
  },
  {
    client: "Meubel & Outlet Weert",
    sector: "Furniture retail",
    period: "16 months",
    headline: "+680% organic traffic and position 1 on the category term",
    body: "A shop that was effectively invisible online while people searched daily for exactly what it sold. Rewriting the category pages, adding a blog and rebuilding the ad campaigns took organic traffic from under 500 to nearly 5,500 visitors a month.",
    stats: [
      { label: "Organic traffic", value: "+680%" },
      { label: "Keywords", value: "1,500 → 5,000+" },
      { label: "Clicks in Google", value: "15,000+" },
    ],
    slug: "6600x-meubel-outlet-nummer-1-in-google",
  },
  {
    client: "Vogelvoerkopen.nl",
    sector: "E-commerce · pet supplies",
    period: "9 months",
    headline: "Five times the online transactions, plus 10% conversion uplift",
    body: "SEO and Google Ads brought the traffic; optimising the product pages made that traffic worth more. Showing delivery costs up front and cutting steps to the basket lifted the conversion rate by 10% on top of the traffic growth.",
    stats: [
      { label: "Online transactions", value: "5×" },
      { label: "Conversion rate", value: "+10%" },
      { label: "Positions", value: "top 3" },
    ],
    slug: "online-transacties-vogelvoerkopen",
  },
] as const;

const FAQ: Faq[] = [
  {
    q: "Are these numbers verifiable?",
    a: "Every figure comes from rank-tracking or analytics data and can be traced back to a specific measurement date. Where a client figure is involved that we cannot publish, we say so rather than rounding something up.",
  },
  {
    q: "Why are the full case studies in Dutch?",
    a: "The detailed write-ups were written for the Dutch site and have not been translated yet. The summaries on this page carry the same numbers. If you would like a full case study in English, ask and we will send it.",
  },
  {
    q: "Do you have cases in my sector?",
    a: "Possibly, and if not, that is not necessarily a problem. The craft transfers between sectors far more than most agencies suggest. What matters more is whether your market has search volume with buying intent, and that is the first thing we check.",
  },
  {
    q: "Can you show a case that did not work?",
    a: "Yes, and we would rather do that in a call than in writing. There are engagements where the market was too thin or the site needed rebuilding before SEO made sense. Knowing when to say that is part of the job.",
  },
];

export const Route = createFileRoute("/en/case-studies")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <SiteLayoutEn>
      <PageHero
        locale="en"
        eyebrow="Case studies"
        title="Real numbers, with the measurement dates behind them"
        intro="No percentages without a baseline and no claims we cannot trace. Each case below lists where the client started, where they ended and over what period. The full write-ups are on the Dutch site; the numbers are the same."
        visual={false}
      />

      <Section>
        <div className="space-y-6">
          {CASES_EN.map((c) => (
            <article key={c.client} className="rounded-2xl border border-brand-line bg-white p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                  {c.client} · {c.sector}
                </p>
                <p className="text-xs text-brand-muted">{c.period}</p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{c.headline}</h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-brand-muted">{c.body}</p>
              <dl className="mt-6 grid gap-5 border-t border-brand-line pt-5 sm:grid-cols-3">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs uppercase tracking-[0.16em] text-brand-muted">{s.label}</dt>
                    <dd className="mt-1 text-2xl font-semibold text-brand-green">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/cases/$slug/"
                params={{ slug: c.slug }}
                hrefLang="nl"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:text-brand-red"
              >
                Read the full case study (in Dutch)
                <ArrowRight className="size-4 text-brand-red" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-brand-line bg-white">
        <SectionHeading
          eyebrow="How to read these"
          title="What we do and do not claim"
          intro="Rankings and traffic are things we can influence. Revenue depends on your margins, your sales process and your market, so we report the part we are responsible for and are explicit about the rest."
        />
      </Section>

      <FaqBlock locale="en" items={FAQ} title="About these case studies" />
      <CtaBand locale="en" />
    </SiteLayoutEn>
  );
}
