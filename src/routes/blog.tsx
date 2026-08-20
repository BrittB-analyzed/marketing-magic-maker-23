import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section } from "@/components/site/page-bits";
import { POST_LIST } from "@/content/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog over SEO, GEO, Ads en CRO | B. Analyzed" },
      {
        name: "description",
        content:
          "Artikelen over vindbaarheid in Google en AI: SEO, GEO, Google Ads en conversie-optimalisatie, uitgelegd voor MKB-ondernemers.",
      },
      { property: "og:title", content: "Blog over SEO, GEO, Ads en CRO" },
      { property: "og:description", content: "Praktische artikelen over vindbaarheid in Google en in AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Artikelen over vindbaarheid in Google en in AI"
        intro="Praktische stukken over website lanceringen, SEO, GEO, Google Ads en conversie-optimalisatie, geschreven voor ondernemers."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POST_LIST.map((p) => (
            <Link
              key={p.slug}
              to="/$slug/"
              params={{ slug: p.slug }}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-colors hover:border-brand-ink"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{p.tag}</span>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{p.excerpt}</p>
              <time className="mt-4 text-xs text-brand-muted" dateTime={p.date}>
                {new Date(p.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}
