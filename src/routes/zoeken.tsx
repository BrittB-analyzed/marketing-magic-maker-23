import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { PageHero, Section } from "@/components/site/page-bits";
import { POST_LIST } from "@/content/blog";
import { LANDINGS } from "@/content/landings";

type Item = { title: string; description: string; slug: string; kind: "Artikel" | "Pagina" };

const INDEX: Item[] = [
  ...POST_LIST.map((p) => ({ title: p.title, description: p.excerpt, slug: p.slug, kind: "Artikel" as const })),
  ...Object.entries(LANDINGS).map(([slug, l]) => ({
    title: l.h1,
    description: l.description,
    slug,
    kind: "Pagina" as const,
  })),
];

export const Route = createFileRoute("/zoeken")({
  validateSearch: (search: Record<string, unknown>) => ({ q: typeof search.q === "string" ? search.q : "" }),
  head: () => ({
    meta: [
      { title: "Zoeken op b-analyzed.com | B. Analyzed" },
      { name: "description", content: "Zoek in de artikelen en dienstenpagina's van B. Analyzed over SEO, GEO, Google Ads en conversie." },
      { property: "og:title", content: "Zoeken op b-analyzed.com" },
      { property: "og:description", content: "Zoek in onze artikelen en dienstenpagina's." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Zoeken,
});

function Zoeken() {
  const { q } = Route.useSearch();
  const [term, setTerm] = useState(q);
  const needle = term.trim().toLowerCase();
  const results = needle
    ? INDEX.filter((i) => (i.title + " " + i.description).toLowerCase().includes(needle))
    : [];

  return (
    <SiteLayout>
      <PageHero eyebrow="Zoeken" title="Waar ben je naar op zoek?" intro="Doorzoek onze artikelen en dienstenpagina's." />
      <Section>
        <div className="max-w-2xl">
          <div className="flex gap-2">
            <input
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Bijvoorbeeld: local seo, tarieven, GEO"
              aria-label="Zoekterm"
              className="w-full rounded-full border border-brand-line bg-white px-5 py-3 text-sm outline-none focus:border-brand-ink"
            />
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-5 py-3 text-sm font-semibold">
              <Search className="size-4 text-brand-red" /> {results.length}
            </span>
          </div>
          <ul className="mt-8 space-y-4">
            {results.map((r) => (
              <li key={r.slug} className="rounded-2xl border border-brand-line bg-white p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{r.kind}</span>
                <Link to="/$slug/" params={{ slug: r.slug }} className="mt-2 block text-base font-semibold hover:text-brand-red">
                  {r.title}
                </Link>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">{r.description}</p>
              </li>
            ))}
            {needle && results.length === 0 && (
              <li className="text-sm text-brand-muted">Geen resultaten. Probeer een korter zoekwoord.</li>
            )}
          </ul>
        </div>
      </Section>
    </SiteLayout>
  );
}
