import { createFileRoute } from "@tanstack/react-router";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import { ServicePage } from "@/components/site/service-page";
import { ContentSections, faqJsonLd, type ContentBlock, type Faq } from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/services/conversion-optimisation/";

const FAQ: Faq[] = [
  {
    q: "What is conversion optimisation?",
    a: "Conversion optimisation, or CRO, is raising the share of visitors who make an enquiry, call or buy. You get more out of the traffic you already have, without spending another euro on advertising.",
  },
  {
    q: "How do I calculate my conversion rate?",
    a: "Divide conversions by visitors over the same period and multiply by a hundred. With 4,000 visitors and 60 enquiries that is 60 ÷ 4,000 × 100 = 1.5%. Always calculate per channel and per landing page as well, because a site-wide average hides exactly where things go wrong.",
  },
  {
    q: "Do I have enough traffic for CRO?",
    a: "Reliable A/B testing needs volume. If you do not have it yet, we start with qualitative analysis: session recordings, form analysis and user feedback. In practice that often produces the biggest wins anyway.",
  },
  {
    q: "How long does an A/B test run?",
    a: "Until you have enough conversions to trust the difference, usually two to four weeks and always a whole number of weeks. Stopping early because a variant is ahead means you are measuring chance rather than improvement.",
  },
  {
    q: "What is a good conversion rate?",
    a: "There is no universal number. It depends on your sector, your price, how heavy the decision is and where your traffic comes from. The only benchmark that genuinely says something is your own figure from last quarter, measured per channel.",
  },
];

const BLOCKS: ContentBlock[] = [
  {
    h: "How to calculate a conversion rate",
    answer:
      "Your conversion rate is conversions divided by visitors over the same period, times a hundred. Sixty enquiries from 4,000 visitors is 60 ÷ 4,000 × 100 = 1.5%. Same period, same source, same type of conversion, or you are comparing things that cannot be compared.",
    paragraphs: [
      "The arithmetic is the easy part. What matters is what you put in the numerator and the denominator. Do you count every visitor, or only those on the page where a conversion can happen? Does a newsletter signup count, or only enquiries that could become a quote? Two businesses with the same percentage can be entirely different businesses.",
      "So we always calculate at three levels: across the site, per channel and per landing page. A site average of 1.5% sounds reasonable, but if your paid traffic sits at 0.4% and your brand traffic at 6%, you immediately know where the money is leaking.",
    ],
  },
  {
    h: "Which tests to run, in which order",
    answer:
      "In order of certainty, not excitement. First make sure your measurement is right, then remove the blockers everyone can see, then the form, then the message, and only last the visual design. Starting with button colours means testing noise for months while the real leaks stay open.",
    steps: [
      {
        title: "Verify measurement",
        body: "No test without a reliable baseline. We validate conversion tracking and exclude internal traffic. This is not a test, it is the precondition for every test after it.",
      },
      {
        title: "Remove blockers",
        body: "A broken form, a slow mobile page, a cookie banner filling the screen. You do not test these, you fix them, then compare the period before with the period after.",
      },
      {
        title: "Shorten the form",
        body: "Usually the single biggest win on a smaller site. Cut fields, make required fields optional, split long forms into steps.",
      },
      {
        title: "Sharpen the message",
        body: "Does the first screen say what you do, for whom, and what the next step is? Here you test headlines and button copy, not the colour of the button.",
      },
      {
        title: "Add proof",
        body: "Reviews, cases and concrete numbers placed where the doubt arises: just above the form, not at the bottom of the page.",
      },
      {
        title: "Clarify price and offer",
        body: "From-prices, what is and is not included, and what happens after an enquiry. This hits conversion hardest, which is why it comes once the rest is in place.",
      },
    ],
    note: "For each test we agree in advance what we expect, how many conversions we need and when we stop. A test abandoned halfway because one variant is ahead measures chance, not improvement.",
  },
  {
    h: "What it costs and what it returns",
    answer:
      "A conversion audit starts at € 599,-. Ongoing conversion work sits inside the package from € 999,- a month, and loose work is € 90,- an hour. What it returns you calculate with your own figures: every percentage point of improvement is extra enquiries from the same traffic.",
    paragraphs: [
      "That last sentence is the whole business case. Double your traffic and you double your advertising cost. Raise your conversion rate from 1.5% to 2.1% and you get 40% more enquiries without another euro going to Google. At 4,000 visitors a month that is the difference between 60 and 84 enquiries.",
      "Whether that is worth the investment depends on what one enquiry is worth to you. You have that number, we do not. In the first session we work it out together, so you know before starting at what point the work pays for itself.",
    ],
  },
];

export const Route = createFileRoute("/en/services/conversion-optimisation")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "article" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayoutEn>
      <ServicePage
        locale="en"
        eyebrow="CRO"
        title="Conversion optimisation: more enquiries from the traffic you already have"
        intro="Conversion optimisation is systematically raising the share of visitors who make an enquiry, call or buy, by measuring where people drop out and fixing exactly that. Without another euro of advertising budget."
        forWho={[
          {
            title: "Plenty of traffic, few enquiries",
            body: "Your visitor numbers grow but your phone does not ring more often.",
          },
          {
            title: "Your form is a barrier",
            body: "Twelve fields, a required explanation and a captcha. Nobody completes that.",
          },
          {
            title: "You cannot see where it breaks",
            body: "You have numbers, but no explanation for what they show.",
          },
        ]}
        deliverables={[
          "A conversion audit of your most important paths",
          "Session recordings and heatmaps on the pages that matter",
          "Forms redesigned into shorter, stepped versions",
          "A/B tests with a success criterion agreed before the test starts",
          "Correct goal tracking in analytics and tag management",
          "A monthly report on conversion rate and lead quality",
        ]}
        steps={[
          { title: "Research", body: "Data analysis plus qualitative research: where do people drop out, and why." },
          { title: "Strategy", body: "Hypotheses ordered by expected impact against required effort." },
          { title: "Execution", body: "Changes shipped or tested, depending on your volume." },
          { title: "Optimisation", body: "What wins stays. What loses teaches us something for the next test." },
        ]}
        connection="CRO is what makes SEO, GEO and Ads profitable. More traffic without conversion is an expensive hobby; a higher conversion rate raises the return on every channel at once and lowers your cost per enquiry in Google Ads at the same time."
        price={{
          from: "Audit from € 599,- · ongoing from € 999,- a month",
          note: "CRO can run inside the package or as a separate track on the same basis. Loose work is charged at € 90,- an hour.",
        }}
        related={[
          { label: "SEO services", to: "/en/services/seo/" },
          { label: "Google Ads management", to: "/en/services/google-ads/" },
          { label: "Get cited in AI answers", to: "/en/services/geo/" },
          { label: "Pricing", to: "/en/pricing/" },
        ]}
        extra={
          <ContentSections
            className="border-t border-brand-line bg-white"
            eyebrow="Conversion explained"
            title="From conversion rate to test order"
            intro="Everything you need to calculate your own figure, judge it and improve it. In this order, because the steps build on each other."
            blocks={BLOCKS}
          />
        }
        faq={FAQ}
      />
    </SiteLayoutEn>
  ),
});
