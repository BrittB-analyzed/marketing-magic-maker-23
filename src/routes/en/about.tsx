import { createFileRoute } from "@tanstack/react-router";
import { SiteLayoutEn } from "@/components/site/site-chrome-en";
import {
  ContentSections,
  CtaBand,
  FaqBlock,
  PageHero,
  faqJsonLd,
  type ContentBlock,
  type Faq,
} from "@/components/site/page-bits";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta, schemaTaal } from "@/lib/i18n";
import { AUTEUR, ORGANISATIE } from "@/data/organisatie";
import { BEDRIJFSCIJFERS } from "@/data/bedrijfscijfers";
import { graph, organizationSchema } from "@/lib/schema";

const PATH = "/en/about/";

const FAQ: Faq[] = [
  {
    q: "How big is B. Analyzed?",
    a: "Small on purpose. Britt does the strategy and the execution, with a network of specialists for link building, development and design. That keeps the lines short and means you always speak to the person doing the work.",
  },
  {
    q: "Where are you based?",
    a: `We are based in ${ORGANISATIE.adres.plaats}, part of the municipality of Venlo in the south-east of the Netherlands, close to the German border. Clients are spread across the Netherlands, Belgium and the wider European market.`,
  },
  {
    q: "Do you work in English?",
    a: "Yes. Calls, reporting and English-language content are all standard. For markets where we are not natively fluent, we say so up front and have copy checked by a native speaker before it goes live.",
  },
  {
    q: "What kind of clients do you work with?",
    a: "Mostly small and medium businesses without an in-house marketing team: service businesses, webshops and B2B suppliers. From sole traders to companies with a few hundred staff, in the Netherlands, Belgium and beyond.",
  },
];

const BLOCKS: ContentBlock[] = [
  {
    h: "Who you will be working with",
    answer: `B. Analyzed was founded by ${AUTEUR.naam}, who has ${BEDRIJFSCIJFERS.jarenErvaring} years of experience in SEO and Google Ads. You deal with one person: the same person who analyses your site, writes the plan and carries it out. There is no account manager in between.`,
    paragraphs: [
      "That structure is a deliberate choice rather than a limitation of size. In most agencies the person who sells the work is not the person who does it, and the brief loses something at every handover. Keeping it with one person means the context never has to be re-explained.",
      "The practical trade-off is honest to state: one person does not scale infinitely. If you run dozens of campaigns across several countries with an in-house team to coordinate, a larger agency is the better fit, and we will tell you that rather than take the work.",
    ],
  },
  {
    h: "How we work",
    answer:
      "We start with what is blocking your growth right now, not with a list of services. Then the channel that answers that fastest. You get a fixed monthly price, a monthly video showing what happened, and full ownership of every account involved.",
    bullets: [
      "A fixed monthly price agreed up front, never a settlement invoice afterwards",
      "Your analytics, search console and ad accounts stay in your name",
      "A monthly video rather than a dashboard with thirty charts nobody reads",
      "If the agreed results do not come, we change approach at no extra cost",
      "An honest no when a channel will not pay for itself in your situation",
    ],
  },
  {
    h: "Working with a Dutch agency from abroad",
    answer:
      "Everything runs remotely: analysis, implementation, reporting and calls. In practice that means a monthly video, a shared dashboard and a call whenever you want one. Distance only becomes a factor if you specifically want someone physically at the table.",
    paragraphs: [
      "The reason clients outside the Netherlands work with us is usually cost base rather than anything exotic. An hourly rate of € 90,- sits well below the typical rate in London and other major European cities, while the craft itself does not differ by country.",
      "What does differ is the language of the search and the competition within it. That is research, and it is part of the work. Where we are not natively fluent in a market's language, we say so and bring in a native speaker rather than guessing.",
    ],
  },
];

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [
      {
        type: "application/ld+json",
        children: graph({ ...organizationSchema(), inLanguage: schemaTaal("en") }),
      },
      { type: "application/ld+json", children: faqJsonLd(FAQ) },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayoutEn>
      <PageHero
        locale="en"
        eyebrow="About us"
        title="One specialist, fifteen years, no account managers"
        intro={`B. Analyzed is an online marketing agency from ${ORGANISATIE.adres.plaats} in the Netherlands, founded by ${AUTEUR.naam}. We work for small and medium businesses that want to be found in Google and named in AI answers, across the Netherlands, Belgium and the wider European market.`}
      />

      <ContentSections className="border-t border-brand-line bg-white" blocks={BLOCKS} />

      <FaqBlock locale="en" items={FAQ} title="About B. Analyzed" />
      <CtaBand locale="en" />
    </SiteLayoutEn>
  );
}
