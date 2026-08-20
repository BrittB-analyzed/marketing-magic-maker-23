import { createFileRoute } from "@tanstack/react-router";
import { Bot, Check, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { LeadForm } from "@/components/site/lead-form";
import { Eyebrow, Faq, FaqBlock, Section, faqJsonLd } from "@/components/site/page-bits";
import { AiEngineLogos } from "@/components/site/ai-engines";

const FAQ: Faq[] = [
  { q: "Wat is een AI-scan precies?", a: "Wij stellen de vragen die jouw klanten stellen aan ChatGPT, Gemini en Perplexity en kijken of jij genoemd wordt, en zo niet, welke concurrent wel." },
  { q: "Waarom is dit nu belangrijk?", a: "Een groeiend deel van de zoekopdrachten eindigt in een AI-antwoord zonder klik. Word je daar niet genoemd, dan verdwijn je uit beeld terwijl je Google-posities gelijk blijven." },
  { q: "Wat kost het?", a: "De AI-scan is gratis en vrijblijvend. Je ontvangt binnen twee werkdagen een korte video met de bevindingen." },
  { q: "Wat kan ik met de uitkomst?", a: "Je krijgt drie concrete verbeterpunten. Die kun je zelf oppakken of samen met ons uitvoeren, beide is prima." },
];

const CHECKS = [
  "Word je genoemd in ChatGPT, Gemini en Perplexity op jouw belangrijkste vragen?",
  "Welke concurrenten worden wél als bron gebruikt en waarom?",
  "Zijn je pagina's leesbaar en citeerbaar voor AI-modellen?",
  "Kloppen je bedrijfsgegevens en vermeldingen op externe bronnen?",
  "Welke drie ingrepen leveren bij jou het snelste AI-zichtbaarheid op?",
];

export const Route = createFileRoute("/gratis-ai-scan")({
  head: () => ({
    meta: [
      { title: "Gratis AI-scan: word je genoemd in ChatGPT? | B. Analyzed" },
      { name: "description", content: "Gratis AI-scan van B. Analyzed: ontdek of ChatGPT, Gemini en Perplexity jouw bedrijf noemen en wat je moet doen om wél geciteerd te worden." },
      { property: "og:title", content: "Gratis AI-scan: word je genoemd in ChatGPT?" },
      { property: "og:description", content: "Binnen 2 werkdagen een persoonlijke video over je zichtbaarheid in AI-zoekmachines." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: AiScan,
});

function AiScan() {
  return (
    <SiteLayout>
      <Section className="pt-12">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>
              <Sparkles className="mr-2 inline size-3.5 text-brand-red" />
              Gratis AI-scan
            </Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Noemt ChatGPT jouw bedrijf, of je concurrent?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted">
              Steeds meer klanten zoeken in AI in plaats van in Google. Wij checken gratis of jij in die
              antwoorden voorkomt en wat er nodig is om er wél tussen te staan.
            </p>
            <ul className="mt-8 space-y-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-sm font-medium">
              <Bot className="size-4 text-brand-red" /> Binnen 2 werkdagen een persoonlijke video, geen standaardrapport
            </p>
            <AiEngineLogos className="mt-8 border-t border-brand-line pt-6" label="We checken je zichtbaarheid in:" />
          </div>
          <LeadForm id="ai-scan" />
        </div>
      </Section>
      <FaqBlock items={FAQ} />
    </SiteLayout>
  );
}
