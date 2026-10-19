import { createFileRoute } from "@tanstack/react-router";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import { ServicePage } from "@/components/site/service-page";
import { ContentSections, faqJsonLd, type ContentBlock, type Faq } from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/services/geo/";

const FAQ: Faq[] = [
  {
    q: "What is GEO?",
    a: "GEO stands for generative engine optimisation: making sure your brand is named and cited in the answers that ChatGPT, Gemini, Perplexity and Google AI Overviews generate. Where SEO competes for a position in a list, GEO competes for a mention inside an answer.",
  },
  {
    q: "Is GEO different work from SEO?",
    a: "It overlaps heavily. Clean structure, verifiable facts and authority help in both. What differs is the unit of optimisation: SEO works at page level, GEO works at passage level, because an AI system lifts a single paragraph rather than the whole page.",
  },
  {
    q: "Can you guarantee a mention in ChatGPT?",
    a: "No, and nobody can. There is no ranking to buy and no index to submit to. What we can do is monitor which prompts mention you today, make your pages citable, and measure whether that share rises over time.",
  },
  {
    q: "How do you measure something like this?",
    a: "We run a fixed set of realistic prompts through the major assistants on a schedule and record whether you appear, in what context and alongside which competitors. That gives a baseline and a trend rather than a vague impression.",
  },
  {
    q: "Is it worth it if I already rank well in Google?",
    a: "Increasingly, yes. A growing share of searches now end without a click because the answer appears directly on the results page. Ranking first in a list nobody scrolls to is worth less every quarter. Being in the answer is the thing that still earns attention.",
  },
];

const BLOCKS: ContentBlock[] = [
  {
    h: "Why visibility is shifting",
    answer:
      "More and more searches end without a click. Google answers directly through AI Overviews, and a large share of commercial research now starts in ChatGPT rather than in a search box. If you are not in that answer, you do not exist for that person, however well you rank underneath it.",
    paragraphs: [
      "This is not a prediction. It is already visible in the numbers of most sites we work with: impressions holding steady while clicks decline. The traffic has not gone to a competitor; it has gone to the answer at the top of the page.",
      "The honest caveat: this is a young field. Measurement methods are still maturing and nobody can promise a place in a generated answer. What does hold is that the techniques making you citable, clear structure, verifiable facts, schema and authority, also make your site better for Google and for your reader. The investment is not wasted if the landscape shifts again.",
    ],
  },
  {
    h: "What makes a page citable",
    answer:
      "An AI system has to be able to lift one self-contained passage and stand behind it. That means the answer sits directly under a heading that matches the question, in forty to sixty words, with facts that can be checked elsewhere and an author with a name attached.",
    bullets: [
      "Headings that state the actual question rather than a creative label",
      "The answer in the first hundred words, not as a conclusion at the bottom",
      "Concrete, checkable facts: prices, timeframes, numbers with a source",
      "A named author with credentials, not an anonymous company voice",
      "Schema markup so machines can read what the page asserts",
      "Mentions on sites that already carry weight in your sector",
    ],
  },
  {
    h: "What we actually do",
    answer:
      "We start with a baseline across the major assistants, rewrite the pages that should be cited but are not, add the markup that makes assertions machine-readable, and then measure monthly whether your share of mentions moves.",
    steps: [
      {
        title: "Prompt baseline",
        body: "A fixed set of realistic questions your buyers would ask, run through ChatGPT, Gemini, Perplexity and Google AI Overviews. We record who gets named and in what context.",
      },
      {
        title: "Crawler access",
        body: "Check that GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot and Google-Extended are actually allowed to read your site. This is a one-line setting that is frequently wrong.",
      },
      {
        title: "Make pages citable",
        body: "Rewrite the key pages so each question has its own heading with a self-contained answer underneath it.",
      },
      {
        title: "Add structured data",
        body: "Organisation, author, FAQ and product markup so the facts on the page are unambiguous to a machine.",
      },
      {
        title: "Measure and repeat",
        body: "Rerun the prompt set monthly and track whether your share of mentions rises, holds or slips.",
      },
    ],
  },
];

export const Route = createFileRoute("/en/services/geo")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "article" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SiteLayoutEn>
      <ServicePage
        locale="en"
        eyebrow="GEO"
        title="GEO: get named in the answer, not just ranked below it"
        intro="Generative engine optimisation is the work that gets your brand cited in ChatGPT, Gemini, Perplexity and Google's AI Overviews. Ranking first is worth less every quarter if the answer above you means nobody scrolls. This is how you get into that answer."
        forWho={[
          {
            title: "Your impressions hold, your clicks fall",
            body: "The classic sign that an AI answer now sits above your result and absorbs the attention.",
          },
          {
            title: "Competitors get named, you do not",
            body: "Ask an assistant who the good suppliers in your sector are. If your name is missing, that is a measurable gap.",
          },
          {
            title: "You want to be early",
            body: "The field is young and the competition is thin. That combination rarely lasts long.",
          },
        ]}
        deliverables={[
          "A baseline across ChatGPT, Gemini, Perplexity and Google AI Overviews on your own prompt set",
          "A check that AI crawlers are permitted to read your site at all",
          "Key pages rewritten at passage level so an answer can be lifted cleanly",
          "Schema markup covering organisation, author, FAQ and products",
          "Author credentials made explicit, because anonymous content is rarely cited",
          "Monthly monitoring of your share of mentions, with the competitors who appear alongside you",
        ]}
        steps={[
          { title: "Baseline", body: "We measure who gets named today on the questions your buyers ask." },
          { title: "Access", body: "We confirm AI crawlers can reach your content, which is often quietly blocked." },
          { title: "Rewrite", body: "Pages restructured so each question has a self-contained answer beneath it." },
          { title: "Markup", body: "Structured data so machines can read your facts without interpreting them." },
          { title: "Monitor", body: "The same prompts rerun monthly, so you see a trend and not an anecdote." },
        ]}
        connection="GEO runs on the same foundation as SEO: clean technology, clear structure and real authority. The difference is the unit of work. SEO optimises a page for a position; GEO optimises a passage for a citation. Doing both means the same content earns visibility in two places at once."
        price={{
          from: "Included from € 999,- a month",
          note: "GEO is not sold separately. It sits inside the ongoing SEO and GEO package, because the underlying work is the same and splitting it would mean charging twice for one effort.",
        }}
        related={[
          { label: "SEO services", to: "/en/services/seo/" },
          { label: "Google Ads management", to: "/en/services/google-ads/" },
          { label: "Conversion optimisation", to: "/en/services/conversion-optimisation/" },
          { label: "Pricing", to: "/en/pricing/" },
        ]}
        extra={
          <ContentSections
            className="border-t border-brand-line bg-white"
            eyebrow="GEO explained"
            title="What changes when the answer sits above the results"
            intro="Why visibility is shifting, what makes a page citable, and what the work looks like in practice."
            blocks={BLOCKS}
          />
        }
        faq={FAQ}
      />
    </SiteLayoutEn>
  ),
});
