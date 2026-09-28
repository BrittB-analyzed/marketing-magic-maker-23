import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, RelatedLinks, Section } from "@/components/site/page-bits";
import { CASES, CASE_LIST, type CaseBlock } from "@/content/cases";
import { CASE_DIENST_LINKS, CASE_VERVOLG_LINKS, type InterneLink } from "@/data/interne-links";
import { abs, breadcrumbSchema, graph } from "@/lib/schema";
import { AUTEUR, SITE_URL, SOCIAL_IMAGE } from "@/data/organisatie";

/**
 * De diensten uit het `services`-veld omgezet naar links naar de bijbehorende
 * dienstpagina. Dubbele doelen worden eruit gefilterd, zodat een case met
 * zowel "SEO" als "Technische SEO" niet twee keer naar dezelfde pagina linkt.
 */
function dienstLinks(services: readonly string[]): InterneLink[] {
  const uniek = new Map<string, InterneLink>();
  for (const s of services) {
    const link = CASE_DIENST_LINKS[s];
    if (link && !uniek.has(link.to)) uniek.set(link.to, link);
  }
  return [...uniek.values()];
}

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const study = CASES[params.slug];
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case niet gevonden | B. Analyzed" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    const pad = `/cases/${study.slug}/`;
    const afbeelding = study.image ? abs(study.image) : SOCIAL_IMAGE;
    return {
      meta: [
        { title: `${study.title} | B. Analyzed` },
        { name: "description", content: study.description },
        { property: "og:title", content: study.title },
        { property: "og:description", content: study.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(pad) },
        { property: "og:image", content: afbeelding },
        { name: "twitter:card", content: study.image ? "summary_large_image" : "summary" },
        { name: "twitter:title", content: study.title },
        { name: "twitter:description", content: study.description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: graph(
            {
              "@type": "Article",
              "@id": `${abs(pad)}#article`,
              headline: study.title,
              description: study.description,
              mainEntityOfPage: abs(pad),
              image: afbeelding,
              about: study.client,
              // Datums alleen meegeven als ze bekend zijn: een verzonnen
              // publicatiedatum is schadelijker dan geen datum.
              ...(study.datum ? { datePublished: study.datum, dateModified: study.datum } : {}),
              author: {
                "@type": "Person",
                name: AUTEUR.naam,
                jobTitle: AUTEUR.functie,
                url: AUTEUR.url,
              },
              publisher: { "@id": `${SITE_URL}/#organisatie` },
            },
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Cases", path: "/online-marketing-cases/" },
              { name: study.client, path: pad },
            ]),
          ),
        },
      ],
    };
  },
  component: CaseDetail,
  notFoundComponent: CaseNotFound,
});

function CaseDetail() {
  const { study } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero eyebrow={`Case · ${study.client}`} title={study.title} intro={study.excerpt} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <article>
            {study.logo ? (
              <img
                src={study.logo}
                alt={`Logo ${study.client}`}
                className="mb-6 h-10 w-auto max-w-[180px] object-contain object-left"
              />
            ) : null}
            {study.image ? (
              <img
                src={study.image}
                alt={study.imageAlt ?? study.client}
                loading="lazy"
                className="aspect-[16/9] w-full rounded-2xl border border-brand-line object-cover"
              />
            ) : (
              // Nog geen beeldmateriaal: open dan met de cijfers, niet met een gat.
              <div className="grid gap-6 rounded-2xl border border-brand-line bg-brand-sand p-8 sm:grid-cols-3">
                {study.highlights.map((h) => (
                  <div key={h.label}>
                    <p className="text-3xl font-semibold tracking-tight text-brand-green">{h.value}</p>
                    <p className="mt-1 text-sm leading-snug text-brand-muted">{h.label}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-10 space-y-8">
              {study.blocks.map((b: CaseBlock, i: number) => (
                <div key={i}>
                  {b.h && <h2 className="text-2xl font-semibold tracking-tight">{b.h}</h2>}
                  {b.ps?.map((p: string) => (
                    <p key={p} className="mt-3 text-base leading-relaxed text-brand-muted">
                      {p}
                    </p>
                  ))}
                  {b.bullets && (
                    <ul className="mt-4 space-y-2">
                      {b.bullets.map((li: string) => (
                        <li key={li} className="flex gap-2 text-base leading-relaxed text-brand-muted">
                          <Check className="mt-1 size-4 shrink-0 text-brand-green" /> {li}
                        </li>
                      ))}
                    </ul>
                  )}
                  {b.image && (
                    <img
                      src={b.image}
                      alt={b.imageAlt ?? study.client}
                      loading="lazy"
                      className="mt-6 w-full rounded-2xl border border-brand-line bg-white"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-brand-line bg-brand-sand p-8">
              <h2 className="text-xl font-semibold tracking-tight">Samengevat</h2>
              <ul className="mt-4 space-y-2">
                {study.summary.map((s: string) => (
                  <li key={s} className="flex gap-2 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-green" /> {s}
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/online-marketing-cases/" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold">
              <ArrowLeft className="size-4 text-brand-red" /> Terug naar alle cases
            </Link>

            {/* Contextuele links naar de dienstpagina's die in deze case zijn
                ingezet. Ankertekst bevat het zoekwoord van de doelpagina. */}
            {dienstLinks(study.services).length > 0 && (
              <div className="mt-12 border-t border-brand-line pt-8">
                <h2 className="text-xl font-semibold tracking-tight">Wat we in deze case hebben ingezet</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {dienstLinks(study.services).map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="block rounded-2xl border border-brand-line bg-white p-5 transition-colors hover:border-brand-ink"
                      >
                        <span className="text-sm font-semibold text-brand-ink">{l.label}</span>
                        {l.note && (
                          <span className="mt-1 block text-sm leading-relaxed text-brand-muted">{l.note}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="h-fit space-y-6">
            <div className="rounded-2xl border border-brand-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">Resultaten</p>
              <dl className="mt-4 space-y-4">
                {study.highlights.map((h: { label: string; value: string }) => (
                  <div key={h.label}>
                    <dt className="text-xs uppercase tracking-[0.16em] text-brand-muted">{h.label}</dt>
                    <dd className="text-2xl font-semibold text-brand-green">{h.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-brand-line pt-5 text-sm">
                <p>
                  <span className="text-brand-muted">Opdrachtgever:</span> {study.client}
                </p>
                <p className="mt-1">
                  <span className="text-brand-muted">Periode:</span> {study.period}
                </p>
                <p className="mt-1">
                  <span className="text-brand-muted">Diensten:</span> {study.services.join(", ")}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-brand-line bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">Andere cases</p>
              <ul className="mt-4 space-y-3">
                {CASE_LIST.filter((c) => c.slug !== study.slug).map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/cases/$slug/"
                      params={{ slug: c.slug }}
                      className="text-sm font-medium hover:text-brand-red"
                    >
                      {c.client}: {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <RelatedLinks className="bg-white" title="Volgende stap" items={CASE_VERVOLG_LINKS} />

      <CtaBand />
    </SiteLayout>
  );
}

function CaseNotFound() {
  return (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Deze case bestaat niet (meer)</h1>
          <Link to="/online-marketing-cases/" className="mt-6 inline-flex text-sm font-semibold">
            Bekijk alle cases
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}