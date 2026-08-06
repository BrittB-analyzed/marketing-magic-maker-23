import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";
import portretFounder from "@/assets/photos/portret-founder.jpg.asset.json";
import teamSamen from "@/assets/photos/team-samen.jpg.asset.json";
import teamOmhelzing from "@/assets/photos/team-omhelzing.jpg.asset.json";

export const Route = createFileRoute("/online-marketing-bedrijf")({
  head: () => ({
    meta: [
      { title: "Over B. Analyzed — online marketingbureau uit Limburg" },
      {
        name: "description",
        content:
          "B. Analyzed is een online marketingbureau uit Limburg voor het MKB. Vaste specialisten, maandelijkse video-rapportage en één verhaal: SEO, GEO, Ads en CRO.",
      },
      { property: "og:title", content: "Over B. Analyzed — online marketingbureau uit Limburg" },
      { property: "og:description", content: "Klein team, vaste specialist, alles wat we doen leggen we uit in gewone taal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OverOns,
});

function OverOns() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Over ons"
        title="Een klein bureau dat je gewoon te spreken krijgt"
        intro="B. Analyzed is een online marketingbureau uit Limburg. We werken voor MKB-bedrijven in Nederland en België die willen groeien zonder een marketingafdeling op te tuigen."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Waarom we anders werken" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted">
              <p>
                De meeste bureaus verkopen losse diensten. Wij vertellen één verhaal: je moet gevonden
                worden in Google, genoemd worden in AI, verkeer kunnen kopen dat vandaag converteert,
                en dat verkeer omzetten in aanvragen. Dat zijn onze vier pijlers.
              </p>
              <p>
                Je krijgt een vaste specialist die het werk zelf uitvoert. Geen accountmanager
                ertussen, geen doorverkoop aan een ander bureau. Elke maand loopt die specialist in
                een Loom-video je resultaten met je door — in gewone taal.
              </p>
              <p>
                We beloven geen posities. Wel dat je op elk moment precies weet wat we doen, waarom we
                het doen en wat het oplevert.
              </p>
            </div>
            <Link
              to="/online-marketing-cases"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              Bekijk onze cases <ArrowRight className="size-4 text-brand-red" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={teamSamen.url}
                alt="Het team van B. Analyzed"
                className="h-64 w-full object-cover sm:h-80"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={portretFounder.url}
                alt="Sanne — oprichter van B. Analyzed"
                className="h-64 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={teamOmhelzing.url}
                alt="Persoonlijk contact staat voorop"
                className="h-64 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}