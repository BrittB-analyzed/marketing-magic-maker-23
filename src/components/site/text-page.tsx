import { SiteLayout } from "./site-chrome";
import { PageHero, Section } from "./page-bits";

export type TextBlock = { h: string; p: string };

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
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{b.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

export function textHead(title: string, description: string) {
  return () => ({
    meta: [
      { title: `${title} | B. Analyzed` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  });
}
