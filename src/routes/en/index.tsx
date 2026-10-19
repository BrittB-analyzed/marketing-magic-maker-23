import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayoutEn, PILLARS_EN } from "@/components/site/site-chrome-en";
import {
  CtaBand,
  DataTable,
  FaqBlock,
  PageHero,
  Section,
  SectionHeading,
  type Faq,
} from "@/components/site/page-bits";
import { AiEngineLogos } from "@/components/site/ai-engines";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta, schemaTaal } from "@/lib/i18n";
import { BEDRIJFSCIJFERS } from "@/data/bedrijfscijfers";
import { faqSchema, graph, localBusinessSchema, organizationSchema } from "@/lib/schema";

const PATH = "/en/";

const FAQ: Faq[] = [
  {
    q: "Do you work with clients outside the Netherlands?",
    a: "Yes. The work runs remotely: analysis, implementation, and a monthly video showing what was done and what it produced. We report in English and work with clients across Europe. Only if you specifically want someone at the table does distance become a factor.",
  },
  {
    q: "What does it cost?",
    a: "A one-off audit starts at € 599,-. An ongoing SEO and GEO package starts at € 999,- a month, and loose hours are € 90,-. All prices exclude VAT and are agreed as a fixed monthly amount up front.",
  },
  {
    q: "Why a Dutch agency rather than a local one?",
    a: "Mostly cost base. Our hourly rate of € 90,- sits well below the typical rate in London or other major European cities, while the craft is identical. What differs between markets is the language of the search and the competition in it, and that is research rather than a different discipline.",
  },
  {
    q: "Who will I actually be working with?",
    a: "Britt Daemen, who has fifteen years in SEO and Google Ads. The person who builds your strategy is the person who carries it out. There is no account manager passing your brief to someone you never meet.",
  },
  {
    q: "What happens if the results do not come?",
    a: "We agree the target results up front and measure them monthly. If they fail to materialise, we change the approach at no extra cost and keep going until you see measurable results.",
  },
];

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: graph(
          { ...organizationSchema(), inLanguage: schemaTaal("en") },
          localBusinessSchema(),
          faqSchema(FAQ),
        ),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayoutEn>
      <PageHero
        locale="en"
        eyebrow="SEO · GEO · Ads · CRO"
        title="Get found in Google. Get named in AI. Turn that into enquiries."
        intro="B. Analyzed is a Dutch online marketing agency working across Europe. Fifteen years of experience, rated 9.8, and one fixed specialist instead of an account manager. We make sure people find you, that AI assistants name you, and that your visitors actually get in touch."
      />

      <Section>
        <SectionHeading
          eyebrow="The shift"
          title="Ranking alone is no longer enough"
          intro="More and more searches end without a click, because AI gives the answer directly. If you are not in that answer, you do not exist for that person, even when you rank first underneath it."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Google", v: "Get found", d: "Classic search results, maps and features." },
            { k: "ChatGPT", v: "Get named", d: "As a source inside the generated answer." },
            { k: "Gemini & AI Overviews", v: "Get cited", d: "At the top of Google's own answer." },
            { k: "Perplexity", v: "Get recommended", d: "In comparisons and supplier shortlists." },
          ].map((item) => (
            <div key={item.k} className="rounded-2xl border border-brand-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.k}</p>
              <p className="mt-3 text-lg font-semibold tracking-tight">{item.v}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{item.d}</p>
            </div>
          ))}
        </div>
        <AiEngineLogos className="mt-12 border-t border-brand-line pt-8" label="We monitor your visibility in:" />
      </Section>

      <Section className="border-t border-brand-line bg-white">
        <SectionHeading
          eyebrow="Four pillars"
          title="One story, four disciplines"
          intro="You pick what fits your situation. They reinforce each other, but you do not need all four at once."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PILLARS_EN.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group rounded-2xl border border-brand-line bg-brand-canvas p-8 transition-colors hover:border-brand-ink"
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

      <Section>
        <SectionHeading
          eyebrow="Proof"
          title="Numbers from actual clients"
          intro="Every figure below comes from rank-tracking data and can be traced back to a measurement date. No rounded-up claims."
        />
        <div className="mt-10">
          <DataTable
            caption="A selection from our case studies"
            head={["Client", "Period", "Result"]}
            rows={[
              ["Steinbrückner", "12 months", "From 1 to 28 keywords in the top 5, organic traffic +733%"],
              ["Med4U", "24 months", "From position 16 to 1 on the key local term, traffic 4 → 89 a month"],
              ["Venlo Taxi", "9 years", "Position 1 on the core term, held across 203 consecutive measurements"],
              ["World of Art", "4 years", "Six keywords at number 1, top 5 keywords from 58 to 209"],
            ]}
            footnote="Full write-ups, including what we did and what did not work, are on the case studies page."
          />
        </div>
        <Link
          to="/en/case-studies/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:text-brand-red"
        >
          Read the full case studies <ArrowRight className="size-4 text-brand-red" />
        </Link>
      </Section>

      <Section className="border-t border-brand-line bg-white">
        <SectionHeading eyebrow="Why us" title="What makes this different" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              h: "One specialist, not a team you never meet",
              p: `${BEDRIJFSCIJFERS.jarenErvaring} years of experience, and the person who writes your strategy is the person who executes it.`,
            },
            {
              h: "You own your accounts",
              p: "Analytics, Search Console and your ad account stay yours, during the engagement and after it.",
            },
            {
              h: "Dutch rates, European standard",
              p: "An hourly rate of € 90,- against a quality bar set by fifteen years of work in competitive markets.",
            },
          ].map((c) => (
            <div key={c.h} className="rounded-2xl border border-brand-line p-7">
              <Check className="size-5 text-brand-green" strokeWidth={2.5} />
              <h3 className="mt-3 text-base font-semibold">{c.h}</h3>
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
