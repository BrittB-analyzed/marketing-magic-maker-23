import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayoutEn, PILLARS_EN } from "@/components/site/site-chrome-en";
import {
  CtaBand,
  DataTable,
  FaqBlock,
  PageHero,
  Section,
  SectionHeading,
  faqJsonLd,
  type Faq,
} from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/services/";

const FAQ: Faq[] = [
  {
    q: "Which service should I start with?",
    a: "Start with whatever is blocking your growth right now. If you need revenue within two months, that is Google Ads. If you want traffic that keeps running without a cost per click, that is SEO. If you already have traffic but few enquiries, it is conversion optimisation.",
  },
  {
    q: "Do I have to take all four?",
    a: "No, and doing so is usually the most expensive mistake. Two channels running well return more than six being half maintained. We start with the one that solves your biggest bottleneck and expand only when it demonstrably pays.",
  },
  {
    q: "Why four pillars instead of a long service list?",
    a: "Because a list of thirteen services makes you choose without knowing what you need. Four pillars map onto four questions: can people find you, are you named in AI answers, can you buy demand today, and does your traffic turn into enquiries.",
  },
  {
    q: "Do you work in English?",
    a: "Yes. Reporting, calls and content are available in English, and this section of the site is written in British English. For markets where we are not natively fluent, we say so up front and have copy checked by a native speaker before it goes live.",
  },
];

export const Route = createFileRoute("/en/services/")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayoutEn>
      <PageHero
        locale="en"
        eyebrow="Services"
        title="Four pillars, and everything that supports them"
        intro="Most agencies sell you a list of thirteen services and let you guess which you need. We work with four, because they map onto the only four questions that matter: can people find you, are you named in AI answers, can you buy demand today, and does your traffic become enquiries."
      />

      <Section>
        <SectionHeading eyebrow="The pillars" title="Where we start" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PILLARS_EN.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group rounded-2xl border border-brand-line bg-white p-8 transition-colors hover:border-brand-ink"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-2 text-base text-brand-muted">{p.claim}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                More on {p.name}
                <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-brand-line bg-white">
        <SectionHeading
          eyebrow="Choosing"
          title="What each pillar returns, and when"
          intro="The honest comparison. Speed and durability pull in opposite directions, which is exactly why most businesses end up running two of these together."
        />
        <div className="mt-10">
          <DataTable
            caption="The four pillars side by side"
            head={["Pillar", "What it delivers", "What it costs", "Timeframe"]}
            rows={[
              ["SEO", "Structural, repeatable traffic", "Work up front, no cost per click", "6 to 12 months"],
              ["GEO", "Being named in AI answers", "Work up front", "3 to 9 months"],
              ["Ads", "Immediate enquiries and search data", "Per click, ongoing", "Days to weeks"],
              ["CRO", "More enquiries from the same traffic", "One-off or ongoing", "Weeks"],
            ]}
            footnote="Timeframes are indicative for a single market and exclude clearing any technical backlog first."
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we work"
          title="One specialist, not an account manager"
          intro="The person who builds your strategy is the person who carries it out. That keeps the turnaround short and means nothing is lost between the conversation and the work."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              h: "Analysis first",
              p: "We map your site, your market and your competition before recommending anything. If a channel will not pay for itself in your situation, we say so.",
            },
            {
              h: "You own everything",
              p: "Your analytics, your search console, your ad account. You keep access during and after the engagement, without exception.",
            },
            {
              h: "We adjust at no extra cost",
              p: "If the agreed results do not come, we change the approach and keep going. That is the deal, not a sales line.",
            },
          ].map((c) => (
            <div key={c.h} className="rounded-2xl border border-brand-line bg-white p-7">
              <h3 className="text-base font-semibold">{c.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{c.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <FaqBlock locale="en" items={FAQ} />
      <CtaBand locale="en" />
    </SiteLayoutEn>
  );
}
