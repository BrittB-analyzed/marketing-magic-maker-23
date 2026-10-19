import { AeoBlocks } from "./aeo";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "./site-chrome";
import { CtaBand, Faq, FaqBlock, PageHero, Section, SectionHeading, faqJsonLd } from "./page-bits";
import { BrandIcon } from "./brand-icon";

export type SupportPageSection = { title: string; body: string };

export function SupportPage({
  eyebrow,
  title,
  intro,
  points,
  pillar,
  pillarTo,
  pillarNote,
  sections,
  faq,
  extra,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  pillar: string;
  pillarTo: string;
  pillarNote: string;
  sections?: SupportPageSection[];
  faq?: Faq[];
  /** Extra secties, gerenderd tussen de inhoud en de FAQ. */
  extra?: React.ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Wat we voor je doen" />
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-line bg-white p-8">
            <BrandIcon name="strategie" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Hoort bij pijler {pillar}
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">{pillarNote}</p>
            <Link to={pillarTo} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
              Bekijk {pillar} <ArrowRight className="size-4 text-brand-red" />
            </Link>
          </div>
        </div>
      </Section>
      {sections && sections.length > 0 && (
        <Section className="border-t border-brand-line bg-white">
          <div className="grid gap-10 md:grid-cols-2">
            {sections.map((s, i) => (
              <div key={s.title}>
                <BrandIcon
                  name={(["content", "technisch", "linkbuilding", "monitoring"] as const)[i % 4]}
                  size="sm"
                />
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
      {extra}
      <AeoBlocks hasFaq={!!faq && faq.length > 0} />
      {faq && faq.length > 0 && <FaqBlock items={faq} />}
      <CtaBand />
    </SiteLayout>
  );
}
