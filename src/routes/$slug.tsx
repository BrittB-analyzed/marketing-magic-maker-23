import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section } from "@/components/site/page-bits";
import { POSTS, POST_LIST, type PostSection } from "@/content/blog";
import { seoMetaWithFallback } from "@/data/seo-meta";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Pagina niet gevonden | B. Analyzed" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: seoMetaWithFallback(`/${post.slug}/`, `${post.title} | B. Analyzed`, post.description, {
        ogType: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "B. Analyzed" },
          }),
        },
      ],
    };
  },
  component: Article,
  notFoundComponent: SlugNotFound,
  errorComponent: SlugNotFound,
});

function Article() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero eyebrow={post.tag} title={post.title} intro={post.excerpt} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="space-y-8">
            {post.image && (
              <img
                src={post.image}
                alt={post.imageAlt ?? post.title}
                loading="lazy"
                className="aspect-[16/9] w-full rounded-2xl border border-brand-line object-cover"
              />
            )}
            {post.sections.map((s: PostSection) => (
              <div key={s.h}>
                <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
                {s.p
                  .split("\n\n")
                  .filter(Boolean)
                  .map((alinea, i) => (
                    <p key={i} className="mt-3 text-base leading-relaxed text-brand-muted">
                      {alinea}
                    </p>
                  ))}
                {s.list &&
                  (s.ordered ? (
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-brand-muted">
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-brand-muted">
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ))}
                {s.table && (
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-brand-line">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-brand-line/40">
                        <tr>
                          {s.table.head.map((kop) => (
                            <th key={kop} className="px-4 py-3 font-semibold">
                              {kop}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((rij) => (
                          <tr key={rij[0]} className="border-t border-brand-line">
                            {rij.map((cel, i) => (
                              <td key={i} className={i === 0 ? "px-4 py-3 font-medium" : "px-4 py-3 text-brand-muted"}>
                                {cel}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.images?.map((img) => (
                  <figure key={img.src} className="mt-5">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={675}
                      loading="lazy"
                      className="w-full rounded-2xl border border-brand-line"
                    />
                    {img.caption && (
                      <figcaption className="mt-2 text-xs text-brand-muted">{img.caption}</figcaption>
                    )}
                  </figure>
                ))}
                {s.links && (
                  <ul className="mt-3 space-y-2 text-sm">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener" className="underline hover:text-brand-red">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link to="/blog/" className="inline-flex items-center gap-2 text-sm font-semibold">
              <ArrowLeft className="size-4 text-brand-red" /> Terug naar alle artikelen
            </Link>
          </article>
          <aside className="h-fit rounded-2xl border border-brand-line bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">Meer lezen</p>
            <ul className="mt-4 space-y-3">
              {POST_LIST.filter((p) => p.slug !== post.slug)
                .slice(0, 5)
                .map((p) => (
                  <li key={p.slug}>
                    <Link to="/$slug/" params={{ slug: p.slug }} className="text-sm font-medium hover:text-brand-red">
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}

function SlugNotFound() {
  return (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Deze pagina bestaat niet (meer)</h1>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            Misschien is de pagina verplaatst. Zoek hieronder verder of bekijk onze artikelen.
          </p>
          <form action="/zoeken" method="get" className="mt-6 flex gap-2">
            <input
              type="search"
              name="q"
              placeholder="Waar zoek je naar?"
              aria-label="Zoeken"
              className="w-full rounded-full border border-brand-line bg-white px-5 py-3 text-sm outline-none focus:border-brand-ink"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white"
            >
              <Search className="size-4" /> Zoek
            </button>
          </form>
          <div className="mt-6 flex justify-center gap-4 text-sm font-semibold">
            <Link to="/">Home</Link>
            <Link to="/blog/">Blog</Link>
            <Link to="/online-marketing/">Diensten</Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
