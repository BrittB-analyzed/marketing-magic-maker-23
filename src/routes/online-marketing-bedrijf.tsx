import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";

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
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Beoordeling 9,8", "Op basis van 50+ klantwaarderingen."],
              ["Vaste specialist", "Dezelfde persoon van strategie tot uitvoering."],
              ["Maandelijkse video", "Je resultaten uitgelegd, niet toegestuurd."],
              ["MKB-focus", "Nederland en België, van installateur tot dienstverlener."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-brand-line bg-white p-6">
                <h3 className="text-base font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}