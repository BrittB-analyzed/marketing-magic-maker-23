import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "./site-chrome";
import { CtaBand, FaqBlock, PageHero, Section, SectionHeading, faqJsonLd } from "./page-bits";
import { BrandIcon, type BrandIconName } from "./brand-icon";
import type { Landing } from "@/content/landings";
import { seoMetaWithFallback } from "@/data/seo-meta";

const SECTION_ICONS: BrandIconName[] = ["seo", "geo", "keywords", "content", "linkbuilding", "grafiek"];

export function landingHead(data: Landing, path?: string) {
  return {
    meta: seoMetaWithFallback(path ?? "", data.title, data.description),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(data.faq) }],
  };
}

export function LandingPage({ data, extra }: { data: Landing; extra?: React.ReactNode }) {
  return (
    <SiteLayout>
      <PageHero eyebrow={data.eyebrow} title={data.h1} intro={data.intro} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-10">
            {data.sections.map((s, i) => (
              <div key={s.h} className="flex gap-5">
                <BrandIcon name={SECTION_ICONS[i % SECTION_ICONS.length]} className="mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
                  <p className="mt-3 text-base leading-relaxed text-brand-muted">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-brand-line bg-white p-8">
            <BrandIcon name="strategie" size="sm" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
              Waarom B. Analyzed
            </p>
            <ul className="mt-5 space-y-3">
              {data.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={2.5} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-brand-line pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Verder lezen
              </p>
              <ul className="mt-3 space-y-2">
                {data.related.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-brand-red">
                      {r.label} <ArrowRight className="size-3.5 text-brand-red" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
      {extra}
      <FaqBlock items={data.faq} />
      <CtaBand />
    </SiteLayout>
  );
}

export function SimplePage({
  eyebrow,
  title,
  intro,
  sections,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { h: string; p: string }[];
  cta?: boolean;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold tracking-tight">{s.h}</h2>
              <p className="mt-2 text-base leading-relaxed text-brand-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
      {cta && <CtaBand />}
    </SiteLayout>
  );
}
