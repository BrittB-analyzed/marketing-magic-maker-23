import { seoMetaWithFallback } from "@/data/seo-meta";
import { SiteLayout } from "./site-chrome";
import { PageHero, Section } from "./page-bits";

export type TextBlock = { h: string; p: string | string[] };

export function TextPage({
  eyebrow,
  title,
  intro,
  blocks,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: TextBlock[];
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <Section>
        <div className="max-w-3xl space-y-8">
          {blocks.map((b) => (
            <div key={b.h}>
              <h2 className="text-xl font-semibold tracking-tight">{b.h}</h2>
              <div className="mt-2 space-y-3 text-sm leading-relaxed text-brand-muted">
                {(Array.isArray(b.p) ? b.p : [b.p]).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

export function textHead(title: string, description: string, path?: string) {
  return () => ({
    meta: seoMetaWithFallback(path ?? "", `${title} | B. Analyzed`, description),
  });
}
