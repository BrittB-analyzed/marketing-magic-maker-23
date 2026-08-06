import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PILLARS } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";

const SUPPORT = [
  { label: "Local SEO", to: "/online-marketing/local-seo", d: "Zichtbaar in je eigen werkgebied." },
  { label: "Linkbuilding", to: "/online-marketing/linkbuilding-uitbesteden", d: "Autoriteit zonder linkspam." },
  { label: "Social media marketing", to: "/online-marketing/social-media-marketing", d: "Bereik dat je pijlers versterkt." },
  { label: "E-mailmarketing", to: "/online-marketing/emailmarketing", d: "Rendement uit bestaande contacten." },
  { label: "Google Tag Manager", to: "/online-marketing/google-tag-manager-inrichten", d: "Meting waar je op kunt sturen." },
  { label: "WordPress onderhoud", to: "/online-marketing/wordpress-onderhoud", d: "Snel, veilig en vindbaar." },
];

export const Route = createFileRoute("/online-marketing/")({
  head: () => ({
    meta: [
      { title: "Online marketing diensten voor het MKB | B. Analyzed" },
      {
        name: "description",
        content:
          "Alle diensten van B. Analyzed op een rij: SEO, GEO, Ads en CRO als hoofdpijlers, plus ondersteunende diensten zoals local SEO, linkbuilding en e-mailmarketing.",
      },
      { property: "og:title", content: "Online marketing diensten voor het MKB" },
      { property: "og:description", content: "Vier pijlers en de ondersteunende diensten daaromheen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Diensten,
});

function Diensten() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Diensten"
        title="Vier pijlers, en alles wat ze ondersteunt"
        intro="We beginnen altijd bij de vraag wat jouw groei nu het meest in de weg zit. Daarna kiezen we de pijler die daar het snelste antwoord op geeft."
      />
      <Section>
        <SectionHeading eyebrow="Hoofdpijlers" title="Waar we mee beginnen" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PILLARS.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group rounded-2xl border border-brand-line bg-white p-8 transition-colors hover:border-brand-ink"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-2 text-base text-brand-muted">{p.claim}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Meer over {p.name}
                <ArrowRight className="size-4 text-brand-red transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="border-t border-brand-line bg-white">
        <SectionHeading eyebrow="Ondersteunend" title="Diensten die de pijlers versterken" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT.map((s) => (
            <Link key={s.to} to={s.to} className="rounded-2xl border border-brand-line p-6 transition-colors hover:border-brand-ink">
              <h3 className="text-base font-semibold">{s.label}</h3>
              <p className="mt-1.5 text-sm text-brand-muted">{s.d}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}