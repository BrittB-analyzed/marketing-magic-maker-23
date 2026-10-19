import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
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
import { LeadForm } from "@/components/site/lead-form";
import { AiEngineLogos } from "@/components/site/ai-engines";
import { seoMeta } from "@/data/seo-meta";
import { localeMeta } from "@/lib/i18n";

const PATH = "/en/free-scan/";

const FAQ: Faq[] = [
  {
    q: "Is it really free?",
    a: "Yes, and there is no obligation attached. You get a short personal video covering the three things that would move the needle most on your site. If you want to act on it yourself, that is entirely fine and we will say so.",
  },
  {
    q: "What do I get exactly?",
    a: "A video of a few minutes in which Britt walks through your site: where your visibility stands in Google and in AI answers, what is blocking it, and which three actions would have the most effect. Not a generated PDF report.",
  },
  {
    q: "How long does it take?",
    a: "You receive the analysis within two working days. If something in your situation means it will take longer, you hear that rather than being left waiting.",
  },
  {
    q: "What happens with my details?",
    a: "They stay with us and are used only to carry out this scan and to contact you about it. No mailing lists, no third parties, no sales sequence you have to unsubscribe from.",
  },
];

export const Route = createFileRoute("/en/free-scan")({
  head: () => ({
    meta: [...seoMeta(PATH, { ogType: "website" }), ...localeMeta(PATH)],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: FreeScan,
});

function FreeScan() {
  return (
    <SiteLayoutEn>
      <PageHero
        locale="en"
        eyebrow="Free scan"
        title="See where you stand, in Google and in AI"
        intro="Two fields, and within two working days you get a personal video analysis: where your visibility sits today, what is holding it back, and the three actions that would have the most effect. No obligation, and no generated PDF."
        visual={false}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="What you get" title="A person looking at your site, not a tool" />
            <ul className="mt-8 space-y-3">
              {[
                "A personal video analysis from Britt, not an automated report",
                "Your visibility in Google and in ChatGPT, Gemini and AI Overviews",
                "The three blockers costing you the most right now",
                "Concrete actions you can carry out without us",
                "An honest answer if SEO is not worth it in your market",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-brand-muted">
                  <Check className="mt-1 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <AiEngineLogos
              className="mt-10 border-t border-brand-line pt-8"
              label="We check your visibility in:"
            />
          </div>
          <LeadForm id="scan" locale="en" />
        </div>
      </Section>

      <FaqBlock locale="en" items={FAQ} title="About the scan" />
      <CtaBand locale="en" />
    </SiteLayoutEn>
  );
}
