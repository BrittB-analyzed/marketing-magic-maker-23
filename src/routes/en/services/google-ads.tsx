import { createFileRoute } from "@tanstack/react-router";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import { ServicePage } from "@/components/site/service-page";
import { ContentSections, faqJsonLd, type ContentBlock, type Faq } from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/services/google-ads/";

const FAQ: Faq[] = [
  {
    q: "What does Google Ads management cost?",
    a: "An audit of your existing account starts at € 599,-. Ongoing management, combined with SEO and GEO, starts at € 999,- a month. Your advertising budget is paid directly to Google from your own account and never passes through us.",
  },
  {
    q: "Do I keep ownership of my account?",
    a: "Yes. We always work inside your own Google Ads account, linked to your Analytics. You remain the owner, including if the engagement ends. An agency that only works in its own account is holding your history hostage.",
  },
  {
    q: "How quickly will I see results?",
    a: "Ads is the fastest channel there is. The first clicks arrive within days and usable conversion data within weeks. That speed is exactly why it pairs well with SEO, which takes months to build but then keeps running.",
  },
  {
    q: "Can I advertise on a small budget?",
    a: "Yes. You set your own daily budget, so you never spend more than you decide. The question is not whether the budget is large enough but whether your margin per enquiry can carry the cost per click in your market.",
  },
  {
    q: "What is the difference between Google Ads and AdWords?",
    a: "Only the name. Google AdWords has been called Google Ads since 2018, because the platform does far more than text ads on keywords. The craft, the auction and the way you steer it have not fundamentally changed.",
  },
];

const BLOCKS: ContentBlock[] = [
  {
    h: "What a Google Ads specialist does",
    answer:
      "A specialist manages your account from keyword to conversion: structure, bids, ad copy and exclusions. Where the job used to be steering towards clicks, it is now steering towards cost per enquiry. The work is continuous adjustment on data, not a one-off setup left to run.",
    paragraphs: [
      "That difference has grown as Google automates more of the account. Smart bidding, broad match and Performance Max take decisions that used to be yours. A specialist guards exactly those decisions: which searches the system is allowed to buy, which conversion counts, and when to intervene because the algorithm is optimising towards the wrong audience.",
      "In practice you see it in the search terms report. Without supervision an account quickly buys impressions on searches that have nothing to do with what you sell. Excluding those is dull, recurring work, and that is precisely where the return on having someone look weekly comes from.",
    ],
  },
  {
    h: "What happens every week",
    answer:
      "The same fixed round, because an advertising account without maintenance gets more expensive on its own. Search terms, bids, ad copy and conversion tracking all come past weekly. Anything deviating from the agreed cost per enquiry is corrected that week rather than at the monthly report.",
    steps: [
      {
        title: "Review the search terms report",
        body: "Every search you were shown for, measured against one test: relevant or not. What does not fit becomes an exclusion, so budget stops leaking to the wrong demand.",
      },
      {
        title: "Redistribute bids and budget",
        body: "Budget shifts to the campaigns with the lowest cost per enquiry. What stays structurally too expensive gets paused rather than carried for months.",
      },
      {
        title: "Test ad copy",
        body: "Two variants per ad group, one measurable difference per test. The winner stays, the next variant goes in.",
      },
      {
        title: "Verify conversion tracking",
        body: "Is Ads still counting what it should? We check conversions against GA4 so you steer on enquiries, not on pages that happened to load.",
      },
      {
        title: "Check the auction",
        body: "New advertisers, shifting impression share and bid prices that suddenly climb. You only catch that if someone looks weekly.",
      },
      {
        title: "Assess landing pages",
        body: "A click is only worth something if the page behind it delivers what the ad promised. Load time, headline and form go into the same round.",
      },
    ],
  },
  {
    h: "A specialist or a larger agency?",
    answer:
      "A specialist suits you if you want one fixed contact who actually works in the account themselves, your budget sits below ten thousand euros a month, and you want to move quickly. A larger agency pays off once you are running multiple countries, dozens of campaigns, or steering an in-house team.",
    table: {
      caption: "Where the difference sits",
      head: ["", "Fixed specialist", "Larger agency"],
      rows: [
        ["Who does the work", "The person you speak to", "Account manager plus delivery team"],
        ["Turnaround on a change", "Days", "Weeks, through a planning cycle"],
        ["Strong at", "One market, clear offering", "Several countries and brands"],
        ["Weak at", "Sharp spikes in volume", "Small budgets, fast adjustment"],
        ["Knowledge of your business", "Held by one person", "Spread across roles"],
      ],
      footnote:
        "Both models work. The question is which fits your current size and pace, not which is better in the abstract.",
    },
  },
];

export const Route = createFileRoute("/en/services/google-ads")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "article" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayoutEn>
      <ServicePage
        locale="en"
        eyebrow="Google Ads"
        title="Google Ads management by a specialist who works in your account weekly"
        intro="Advertising with us means buying enquiries, not clicks. We build and manage Search, Shopping and Display campaigns aimed at buying intent, in your own account, with weekly optimisation and a monthly report showing cost per enquiry rather than vanity metrics."
        forWho={[
          {
            title: "You need revenue now",
            body: "SEO and GEO build over months, but your diary needs filling next month.",
          },
          {
            title: "Your budget disappears",
            body: "The campaigns run, but nobody can explain what they actually return.",
          },
          {
            title: "You want certainty before scaling",
            body: "You want to know which searches genuinely convert before investing further.",
          },
        ]}
        deliverables={[
          "Account build or restructure organised around buying intent",
          "Search, Shopping and Display campaigns with sharp geographic and audience exclusions",
          "Correct conversion tracking: enquiries and sales, not stray page views",
          "Weekly optimisation of bids, search terms and budgets",
          "A monthly report showing cost per enquiry and what we recommend next",
          "Landing page review, because a click is wasted if the page does not deliver",
        ]}
        steps={[
          { title: "Intake", body: "We get your market, margins and goals clear before anything is built." },
          { title: "Account analysis", body: "We examine your existing account, your market and the competition in the auction." },
          { title: "Build", body: "Budget, campaign types and target cost per enquiry agreed, then the campaigns built." },
          { title: "Launch and optimise", body: "Nothing goes live without your approval, then weekly optimisation until it performs." },
        ]}
        connection="Ads delivers within weeks the search-term data that SEO and GEO take months to gather. Whatever demonstrably converts in advertising goes into the organic strategy. Conversion optimisation then makes every euro of ad budget worth more by turning more of those visitors into enquiries."
        price={{
          from: "Audit from € 599,- · ongoing from € 999,- a month",
          note: "Excluding your advertising budget, which you pay directly to Google from your own account. You remain the owner of that account at all times.",
        }}
        related={[
          { label: "SEO services", to: "/en/services/seo/" },
          { label: "Conversion optimisation", to: "/en/services/conversion-optimisation/" },
          { label: "Get cited in AI answers", to: "/en/services/geo/" },
          { label: "Pricing", to: "/en/pricing/" },
        ]}
        extra={
          <ContentSections
            className="border-t border-brand-line bg-white"
            eyebrow="The specialist"
            title="What the work actually involves"
            intro="Outsourcing ads is one thing; knowing what then happens is another. Here is what a specialist does, how often, and when a larger agency is the better call."
            blocks={BLOCKS}
          />
        }
        faq={FAQ}
      />
    </SiteLayoutEn>
  ),
});
