import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PILLARS } from "@/components/site/site-chrome";
import { CtaBand, FaqBlock, PageHero, Section, SectionHeading } from "@/components/site/page-bits";
import { faqJsonLd } from "@/components/site/page-bits";

const SUPPORT = [
  { label: "Local SEO", to: "/online-marketing/local-seo/", d: "Zichtbaar in je eigen werkgebied." },
  { label: "Linkbuilding", to: "/online-marketing/linkbuilding-uitbesteden/", d: "Autoriteit zonder linkspam." },
  { label: "Social media marketing", to: "/online-marketing/social-media-marketing/", d: "Bereik dat je pijlers versterkt." },
  { label: "E-mailmarketing", to: "/online-marketing/emailmarketing/", d: "Rendement uit bestaande contacten." },
  { label: "Google Tag Manager", to: "/online-marketing/google-tag-manager-inrichten/", d: "Meting waar je op kunt sturen." },
  { label: "WordPress onderhoud", to: "/online-marketing/wordpress-onderhoud/", d: "Snel, veilig en vindbaar." },
];

const FAQ = [
  {
    q: "Welke online marketing diensten biedt B. Analyzed?",
    a: "Onder meer SEO, GEO, Google Ads (SEA), linkbuilding, e-mailmarketing, social media marketing en conversieoptimalisatie (CRO). Samen met jou brengen we in kaart welke diensten het beste aansluiten bij je doelgroep en doelstellingen.",
  },
  {
    q: "Waarom online marketing uitbesteden?",
    a: "De online wereld verandert continu en vraagt diepgaande kennis van meerdere disciplines tegelijk. Door je online marketing uit te besteden bespaar je tijd en kosten, en zorgt een goed opgezette strategie dat marketing geld oplevert in plaats van kost.",
  },
  {
    q: "Wat is een full service internet marketing plan?",
    a: "Een allesomvattend pakket waarin we alle voor jouw bedrijf relevante diensten combineren: van SEO en SEA tot webdesign en e-mailmarketing. We stellen het samen op basis van een analyse van je website, doelgroep en doelstellingen, en passen het aan op wat jij daadwerkelijk nodig hebt.",
  },
  {
    q: "Bieden jullie een resultaatgarantie?",
    a: "We werken hands-on en resultaatgericht en bieden een no cure – no pay garantie. Daarmee zorgen we dat bedrijven die hun online marketing aan ons uitbesteden constante online groei behalen: we werken net zo lang door tot je meetbaar resultaat boekt.",
  },
  {
    q: "Voor wie werkt B. Analyzed?",
    a: "We werken voor dienstverleners en e-commerce shops, voor zowel B2B als B2C, van ZZP'er en MKB'er tot multinational, door heel Nederland en België.",
  },
];

export const Route = createFileRoute("/online-marketing/")({
  head: () => ({
    meta: [
      { title: "Online marketing uitbesteden: SEO, GEO, Ads & CRO | B. Analyzed" },
      {
        name: "description",
        content:
          "Online marketing uitbesteden aan B. Analyzed: SEO, GEO, Google Ads en CRO als hoofdpijlers, plus ondersteunende diensten zoals local SEO, linkbuilding en e-mailmarketing. No cure – no pay.",
      },
      { property: "og:title", content: "Online marketing uitbesteden: SEO, GEO, Ads & CRO" },
      { property: "og:description", content: "Vier pijlers en de ondersteunende diensten daaromheen, met een no cure – no pay garantie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: Diensten,
});

function Diensten() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Diensten"
        title="Online marketing uitbesteden: vier pijlers, en alles wat ze ondersteunt"
        intro="Online marketing is niet meer weg te denken uit een goede marketingstrategie, maar de juiste aanpak kiezen vraagt kennis en tijd. We beginnen altijd bij de vraag wat jouw groei nu het meest in de weg zit, en kiezen daarna de pijler die daar het snelste antwoord op geeft."
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
        <SectionHeading
          eyebrow="Waarom uitbesteden"
          title="Online marketing vereist de juiste kennis"
          intro="Door de vele vormen van online marketing zien veel ondernemers door de bomen het bos niet meer. De online wereld verandert bovendien continu. Wij houden de laatste ontwikkelingen bij en zetten alleen in wat voor jouw bedrijf daadwerkelijk rendement oplevert."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-line p-7">
            <h3 className="text-base font-semibold">Analyse op maat</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">We brengen je website, doelgroep en doelstellingen in kaart en bepalen samen welke diensten het meeste rendement opleveren.</p>
          </div>
          <div className="rounded-2xl border border-brand-line p-7">
            <h3 className="text-base font-semibold">Transparante samenwerking</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">Ons team werkt nauw samen en houdt je precies op de hoogte van wat we voor je doen, geen black box.</p>
          </div>
          <div className="rounded-2xl border border-brand-line p-7">
            <h3 className="text-base font-semibold">No cure – no pay</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">We garanderen constante online groei: wij werken net zo lang door tot je meetbaar resultaat boekt.</p>
          </div>
        </div>
      </Section>
      <Section className="border-t border-brand-line bg-white">
        <SectionHeading
          eyebrow="Full service"
          title="Een full service internet marketing plan"
          intro="Heb je een plan dat niet genoeg oplevert, of begin je net? Met een full service plan dekken we alles wat nodig is om verkoop te stimuleren en klanten aan te trekken: van webdesign en SEO tot e-mailmarketing en Google Ads. Heb je niet alles nodig? Dan passen we het plan aan jouw situatie aan, zodat het kosteneffectief blijft."
        />
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
      <FaqBlock items={FAQ} />
      <CtaBand />
    </SiteLayout>
  );
}
