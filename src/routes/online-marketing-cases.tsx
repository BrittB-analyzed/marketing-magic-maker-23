import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";

const CASES = [
  {
    tag: "Meubel & Outlet Weert",
    title: "6.600x per maand gezocht op 'meubel outlet' en nummer 1 in Google",
    start: "De website werd nauwelijks gevonden: minder dan 500 organische bezoekers per maand.",
    action: "Belangrijkste categoriepagina's geoptimaliseerd, een blog gelanceerd en Google Ads opnieuw ingericht.",
    result: "+680% organisch verkeer naar bijna 5.500 bezoekers/maand, positie 1 op 'meubel outlet' en 15.000+ klikken in 16 maanden.",
    period: "16 maanden",
  },
  {
    tag: "Van Daken",
    title: "Van regionale dakdekker naar nummer 1 in Google",
    start: "Beperkte online zichtbaarheid voor een regionaal dakdekkersbedrijf.",
    action: "Slimme content, technische SEO en lokale optimalisatie.",
    result: "Verdrievoudiging van topposities in Google en fors meer offerteaanvragen.",
    period: "6 maanden",
  },
  {
    tag: "Dn Research",
    title: "Internationale groei door strategische content en SEO",
    start: "Beperkte zichtbaarheid binnen Europa voor deze leverancier van onderzoekspeptiden.",
    action: "Strategische SEO en blogcontent gericht op internationale doelgroepen.",
    result: "Ruim 389.000 vertoningen en een sterke toename in internationale bestellingen.",
    period: "sinds juli 2024",
  },
  {
    tag: "Parketreus",
    title: "Regionale SEO die Limburg bereikt én beweegt",
    start: "Beperkte digitale zichtbaarheid in de regio Limburg.",
    action: "Lokale SEO, contentoptimalisatie en gerichte landingspagina's.",
    result: "439.000 vertoningen in 8 maanden en top 3-posities op termen als 'traprenovatie limburg'.",
    period: "8 maanden",
  },
  {
    tag: "De Bruidsmode Outlet België",
    title: "Verdubbeling van omzet in 1 jaar tijd",
    start: "Beperkt bereik via zoekmachines en social media.",
    action: "Online marketingmix van Google Ads, SEO en social media (Facebook en Instagram).",
    result: "De website groeide met 135% in een jaar tijd.",
    period: "12 maanden",
  },
  {
    tag: "Sleep Factory BV",
    title: "Groei van 800% in het aantal transacties online",
    start: "Beperkt Google Ads-verkeer en organisch bezoek voor deze boxspring-webshop.",
    action: "Combinatie van Google Ads en SEO gericht op termen als 'goedkope boxspring' en 'boxspring 180x200'.",
    result: "800% meer online transacties in 1,5 jaar en top 5-posities met 3.000+ bezoekers per maand.",
    period: "1,5 jaar",
  },
];

export const Route = createFileRoute("/online-marketing-cases")({
  head: () => ({
    meta: [
      { title: "Resultaten online marketing cases | B. Analyzed" },
      {
        name: "description",
        content:
          "Bekijk echte cases van B. Analyzed: Meubel & Outlet Weert, Van Daken, Dn Research, Parketreus, De Bruidsmode Outlet België en Sleep Factory BV. SEO- en Google Ads-resultaten met cijfers.",
      },
      { property: "og:title", content: "Resultaten online marketing cases" },
      { property: "og:description", content: "Echte klanten, echte cijfers: van +680% organisch verkeer tot 800% meer online transacties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Cases,
});

function Cases() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cases"
        title="Resultaten online marketing cases"
        intro="De jarenlange ervaring van B. Analyzed heeft geleid tot mooie resultaten die we samen met onze partners en opdrachtgevers hebben behaald. Hieronder lees je hoe we de online kansen van onze klanten hebben benut."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-brand-line bg-white p-8">
              <span className="w-fit rounded-full bg-brand-sand px-3 py-1 text-xs font-semibold text-brand-muted">
                {c.tag}
              </span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{c.title}</h2>
              <dl className="mt-6 flex-1 space-y-4 text-sm">
                {[
                  ["Startsituatie", c.start],
                  ["Ingreep", c.action],
                  ["Resultaat", c.result],
                  ["Periode", c.period],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">{k}</dt>
                    <dd className="mt-1 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </SiteLayout>
  );
}