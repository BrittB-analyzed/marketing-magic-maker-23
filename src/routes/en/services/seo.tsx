import { createFileRoute } from "@tanstack/react-router";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import { ServicePage } from "@/components/site/service-page";
import { ContentSections, faqJsonLd, type ContentBlock, type Faq } from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/services/seo/";

const FAQ: Faq[] = [
  {
    q: "What does SEO cost?",
    a: "A one-off audit starts at € 599,-. Ongoing work, including GEO, starts at € 999,- a month. Loose hours outside a package are € 90,-. You get a fixed monthly price up front, so there is never an unexpected invoice at the end of a quarter.",
  },
  {
    q: "How long before I see results?",
    a: "The first movement in your positions usually shows after two to three months, and measurably more enquiries between month six and twelve. How fast it goes depends mostly on how strong your competition is and how much authority your site has already built.",
  },
  {
    q: "Do you work with clients outside the Netherlands?",
    a: "Yes. The work runs entirely remotely: analysis, implementation and a monthly video in which you see what was done and what it did. We work for clients across Europe and report in English.",
  },
  {
    q: "Who actually does the work?",
    a: "The same person you speak to. There is no account manager passing your brief to a junior. That keeps the turnaround short and means nothing gets lost between the conversation and the implementation.",
  },
  {
    q: "What happens if the results do not come?",
    a: "We agree up front which results we are aiming for and measure them monthly. If they fail to materialise, we change the approach at no extra cost and keep going until you see measurable results.",
  },
  {
    q: "Can I keep access to my own data?",
    a: "Always. We work in your own Google Analytics, Search Console and advertising accounts. You stay the owner, including after the engagement ends. Any agency that does not allow this should be a red flag.",
  },
];

const BLOCKS: ContentBlock[] = [
  {
    h: "What SEO actually consists of",
    answer:
      "Three layers, in a fixed order. Technical: your pages have to be found, read and indexed, and load fast on a phone. Content: your page has to answer the search better than the pages above you. Authority: other sites have to point at you. Skip a layer and the ones above it stop working.",
    paragraphs: [
      "That order is not optional. A page that is not in the index cannot rank for anything, no matter how well it is written. And a brilliantly written page in a market where every competitor has three hundred referring domains will not break into the top three on merit alone.",
      "For most small and medium businesses the biggest gain sits in the middle layer. There are already pages; they simply answer the search question nearly, but not quite, well enough. Rewriting those is faster and cheaper than building anything new.",
    ],
  },
  {
    h: "What a month of SEO looks like",
    answer:
      "A fixed cycle, because search visibility is maintenance work. Every month the positions, the technical health, the content and the links come past. What moves gets more attention. What is stuck gets analysed for cause rather than more of the same.",
    steps: [
      {
        title: "Review positions and traffic",
        body: "Which keywords rose, which fell, and which sit just outside the top ten? That last group is the shortest route to more visitors every single month.",
      },
      {
        title: "Check the technical health",
        body: "Crawl errors, indexing problems, load time and broken links. Usually half an hour, unless something was migrated or published that quietly broke.",
      },
      {
        title: "Write or rewrite content",
        body: "One to three pages a month, chosen where the ratio between effort and return is most favourable.",
      },
      {
        title: "Lay internal links",
        body: "Point the pages that already perform at the pages that sit just out of reach, with descriptive anchor text. This is the cheapest thing you can do and the most commonly skipped.",
      },
      {
        title: "Build authority",
        body: "Mentions and links from sites that matter in your market. Quality over quantity, always.",
      },
      {
        title: "Report and adjust",
        body: "A short video showing what was done, what it did and what happens next month. Not a dashboard with thirty charts nobody reads.",
      },
    ],
  },
  {
    h: "Why a Dutch agency for a European market?",
    answer:
      "Because search behaviour is local but the craft is not. The technical work, the content structure and the authority building are identical in Rotterdam and in Manchester. What differs is the language of the search and the competition in it, and that is research, not a different discipline.",
    paragraphs: [
      "What you do get is a different cost base. Agency rates in the Netherlands sit well below those in London, while the standard of work is comparable. Our hourly rate is € 90,-, where a comparable UK agency typically charges a multiple of that.",
      "What you should check before hiring any agency abroad: who writes the content, and in which language. We write English content in British English, and for markets we do not have native command of, we are upfront that the copy needs a native check before it goes live.",
    ],
  },
];

export const Route = createFileRoute("/en/services/seo")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "article" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayoutEn>
      <ServicePage
        locale="en"
        eyebrow="SEO"
        title="SEO services: get found by the people already looking for you"
        intro="SEO is the work that makes your website show up in the unpaid search results for the terms your customers actually type. No cost per click, no campaign that stops the day you stop paying. One fixed specialist who builds the plan and carries it out."
        forWho={[
          {
            title: "You are invisible outside your own name",
            body: "People who know your company find you. Everyone else finds a competitor.",
          },
          {
            title: "You rank, but nothing happens",
            body: "There is traffic in the dashboard but the phone stays quiet. Usually a sign you rank for the wrong searches.",
          },
          {
            title: "You have had an agency before",
            body: "There were reports, there were keywords, there was no result anyone could point at.",
          },
        ]}
        deliverables={[
          "A technical audit covering crawlability, indexing, load speed and mobile rendering",
          "Keyword research with volume, difficulty and search intent for your market",
          "A competitor comparison showing where the sites above you actually win",
          "Content written or rewritten on the searches that bring buyers, not just visitors",
          "Internal linking from your strong pages to the pages just out of reach",
          "Authority building through mentions and links that matter in your sector",
          "A monthly video and dashboard showing what changed and what it produced",
        ]}
        steps={[
          {
            title: "Intake",
            body: "We get your market, your competition and your goals clear before anything is touched.",
          },
          {
            title: "Baseline measurement",
            body: "Where do you stand now in Google and in AI answers, and what are the three sites above you doing differently?",
          },
          {
            title: "Plan with an order",
            body: "An action list with the highest-impact work at the top, including an estimate of time and expected return.",
          },
          {
            title: "Execution",
            body: "We do the work, you keep ownership of your accounts and your site. A short video every month.",
          },
          {
            title: "Adjust",
            body: "If results fail to come, we change approach at no extra cost and keep going until they do.",
          },
        ]}
        connection="SEO and GEO share the same foundation: clean technology and content that answers a question properly. Google Ads delivers within weeks the search-term data that SEO takes months to gather, and conversion optimisation makes sure the traffic from both actually turns into enquiries."
        price={{
          from: "Audit from € 599,- · ongoing from € 999,- a month",
          note: "All prices exclude VAT. You get a fixed monthly price up front, never a settlement afterwards. Loose work outside a package is € 90,- an hour.",
        }}
        related={[
          { label: "Get cited in AI answers", to: "/en/services/geo/" },
          { label: "Google Ads management", to: "/en/services/google-ads/" },
          { label: "Conversion optimisation", to: "/en/services/conversion-optimisation/" },
          { label: "Pricing", to: "/en/pricing/" },
          { label: "Case studies", to: "/en/case-studies/" },
        ]}
        extra={
          <ContentSections
            className="border-t border-brand-line bg-white"
            eyebrow="How it works"
            title="SEO explained without the jargon"
            intro="What the work consists of, what a month looks like, and why hiring a Dutch agency for a European market is a reasonable idea."
            blocks={BLOCKS}
          />
        }
        faq={FAQ}
      />
    </SiteLayoutEn>
  ),
});
