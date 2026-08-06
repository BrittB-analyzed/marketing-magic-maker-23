import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section } from "@/components/site/page-bits";
import { POSTS, POST_LIST, type PostSection } from "@/content/blog";

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
      meta: [
        { title: `${post.title} | B. Analyzed` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
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
            {post.sections.map((s: PostSection) => (
              <div key={s.h}>
                <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">{s.p}</p>
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
