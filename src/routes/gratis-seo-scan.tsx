import { createFileRoute } from "@tanstack/react-router";
import { Check, Video } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { LeadForm } from "@/components/site/lead-form";
import { Faq, FaqBlock, Section, SectionHeading, Eyebrow, faqJsonLd } from "@/components/site/page-bits";

const FAQ: Faq[] = [
  {
    q: "Is de scan echt gratis?",
    a: "Ja. Je krijgt een gratis quick scan van je zichtbaarheid in Google en in AI-antwoorden, met de belangrijkste bevindingen in een korte video. Wil je daarna de volledige audit met een uitgewerkt actieplan, dan kost die vanaf € 599,-.",
  },
  {
    q: "Wat krijg ik precies?",
    a: "Een persoonlijke video-analyse van je website: waar je nu staat in Google, of AI-systemen je noemen, en de drie ingrepen die bij jou het meeste opleveren. Geen automatisch gegenereerd PDF-rapport.",
  },
  {
    q: "Hoe snel heb ik de scan?",
    a: "Binnen twee werkdagen na je aanvraag.",
  },
  {
    q: "Word ik daarna gebeld met een verkooppraatje?",
    a: "Je krijgt de scan zonder verplichting. Wil je erover doorpraten, dan plan je zelf een adviesgesprek in. Wil je het zelf oppakken met onze actiepunten: ook prima.",
  },
];

export const Route = createFileRoute("/gratis-seo-scan")({
  head: () => ({
    meta: [
      { title: "Gratis SEO & GEO-scan van je website | B. Analyzed" },
      {
        name: "description",
        content:
          "Vraag de gratis SEO & GEO-scan aan. Binnen 2 werkdagen een persoonlijke video-analyse van je zichtbaarheid in Google én in AI-antwoorden.",
      },
      { property: "og:title", content: "Gratis SEO & GEO-scan van je website" },
      { property: "og:description", content: "Persoonlijke video-analyse binnen 2 werkdagen. Twee velden invullen is genoeg." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: ScanPage,
});

function ScanPage() {
  return (
    <SiteLayout>
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Eyebrow>Gratis scan</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Hoe zichtbaar ben je in Google én in AI?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-muted">
              Vul je website en e-mailadres in. Binnen twee werkdagen krijg je een persoonlijke
              video-analyse van je vindbaarheid, met de drie ingrepen die bij jou het meeste opleveren.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-brand-muted">
              {[
                "Je huidige posities en zichtbaarheid in Google",
                "Of ChatGPT, Gemini en AI Overviews jouw bedrijf noemen",
                "De grootste technische en inhoudelijke blokkades",
                "Drie concrete acties, ook uitvoerbaar zonder ons",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-sand p-6">
              <Video className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <p className="text-sm leading-relaxed text-brand-muted">
                <span className="font-semibold text-brand-ink">Wil je dieper?</span> De uitgebreide
                audit met volledig uitgewerkt actieplan en prioritering start vanaf € 599,-. Je krijgt
                de upgrade aangeboden bij je gratis scan.
              </p>
            </div>
          </div>
          <LeadForm id="scan-form" />
        </div>
      </Section>
      <FaqBlock items={FAQ} title="Over de scan" />
    </SiteLayout>
  );
}