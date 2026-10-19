import { AeoBlocks } from "@/components/site/aeo";
import { seoMeta } from "@/data/seo-meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import {
  CtaBand,
  Faq,
  FaqBlock,
  PageHero,
  Section,
  SectionHeading,
  faqJsonLd,
} from "@/components/site/page-bits";
import { LeadForm } from "@/components/site/lead-form";
import { AiEngineLogos } from "@/components/site/ai-engines";

const FAQ: Faq[] = [
  {
    q: "Wat is GEO?",
    a: "GEO is Generative Engine Optimization: het optimaliseren van je website zodat AI-systemen zoals ChatGPT, Gemini, Perplexity en Google AI Overviews jouw bedrijf noemen en citeren in hun antwoorden. Het is de tegenhanger van SEO voor zoekmachines die geen lijst met links geven, maar één antwoord.",
  },
  {
    q: "Vervangt GEO mijn SEO?",
    a: "Nee. AI-systemen halen hun bronnen grotendeels uit dezelfde index als de zoekmachines. Sterke SEO is de basis waarop GEO bouwt. Wie alleen GEO doet zonder technische en inhoudelijke SEO-fundering, wordt nergens gevonden.",
  },
  {
    q: "Hoe meten jullie of GEO werkt?",
    a: "We stellen samen een set van 20 tot 50 prompts vast die jouw doelgroep realistisch stelt. Die prompts draaien we periodiek door ChatGPT, Perplexity, Gemini en Google AI Overviews en leggen vast of je genoemd wordt, in welke context en naast welke concurrenten. Dat rapporteren we maandelijks met een nulmeting als vertrekpunt.",
  },
  {
    q: "Kun je een plek in een AI-antwoord garanderen?",
    a: "Nee, en niemand die dat wel belooft kan het waarmaken. AI-antwoorden zijn probabilistisch en veranderen per model, per update en soms per gesprek. Wat we wel kunnen: de kans dat je genoemd wordt structureel vergroten en meetbaar maken.",
  },
  {
    q: "Wat kost GEO?",
    a: "GEO zit standaard in ons SEO- & GEO-pakket vanaf € 999,- per maand. Wil je eerst weten waar je staat, dan kun je de losse AI-scan aanvragen.",
  },
];

export const Route = createFileRoute("/online-marketing/geo-optimalisatie")({
  head: () => ({
    meta: seoMeta('/online-marketing/geo-optimalisatie/', { ogType: 'article', twitterCard: 'summary' }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: GeoPage,
});

function GeoPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="GEO, nieuw"
        title="GEO-optimalisatie: genoemd worden in ChatGPT, Claude en AI Overviews"
        intro="GEO is het optimaliseren van je website zodat AI-systemen jouw bedrijf noemen en citeren in hun antwoorden. Waar SEO zorgt dat je gevonden wordt, zorgt GEO dat je genoemd wordt op het moment dat er geen klik meer plaatsvindt."
        ctaLabel="Vraag de gratis AI-scan aan"
      />

      <Section>
        <SectionHeading
          eyebrow="Waarom nu"
          title="Een groeiend deel van het zoekverkeer eindigt zonder klik"
          intro="Als AI het antwoord direct geeft, verdwijnt de klik naar jouw site. Echter win je het wel met de aankoopbeslissing. Wie in dat antwoord genoemd wordt, wint de opdracht. Wie er niet in staat, bestaat voor die zoeker niet."
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted">
          Dit gaat niet over de toekomst. Je klanten vragen nu al aan ChatGPT of Claude welk bureau, welke
          leverancier of welke oplossing ze moeten kiezen. Wij leggen vast waar je vandaag genoemd
          wordt, en werken van daaruit.
        </p>
        <AiEngineLogos className="mt-10 border-t border-brand-line pt-8" label="AI-zoekmachines die we monitoren:" />
      </Section>

      <Section className="border-y border-brand-line bg-white">
        <SectionHeading eyebrow="Vergelijking" title="SEO of GEO?" intro="Ze bestaan naast elkaar, niet in plaats van elkaar." />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brand-line">
                <th className="py-4 pr-6 font-semibold"> </th>
                <th className="py-4 pr-6 font-semibold">SEO</th>
                <th className="py-4 font-semibold">GEO</th>
              </tr>
            </thead>
            <tbody className="text-brand-muted">
              {[
                ["Waar je gevonden wordt", "Google, Bing, Maps", "ChatGPT, Gemini, Perplexity, AI Overviews"],
                ["Wat het doel is", "Een positie in de resultatenlijst", "Genoemd worden in het antwoord zelf"],
                ["Waarop je optimaliseert", "Zoekwoorden, techniek, autoriteit", "Citeerbaarheid, feitendichtheid, entiteiten"],
                ["Hoe je het meet", "Posities, klikken, verkeer", "Vermeldingen per gemonitorde prompt"],
                ["Wat het oplevert", "Klikken naar je site", "Voorkeurspositie in de beslissing"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-brand-line">
                  <th className="py-4 pr-6 text-left font-medium text-brand-ink">{row[0]}</th>
                  <td className="py-4 pr-6">{row[1]}</td>
                  <td className="py-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Wat wij doen" title="Concreet, per onderdeel" />
            <div className="mt-8 space-y-6">
              {[
                ["Content herstructureren", "Het antwoord komt vooraan te staan, daarna pas de uitleg. Koppen worden geformuleerd als de vraag die iemand echt stelt."],
                ["Feitendichtheid verhogen", "Cijfers, definities en bronvermelding in de tekst zelf, zodat een model een passage los kan citeren zonder context te verliezen."],
                ["Schema-markup", "Article-, FAQPage- en Organization-schema zodat machines weten wat er staat en wie het zegt."],
                ["Entiteitsopbouw", "Consistente vermeldingen van je bedrijf, mensen en expertise over het hele web, zodat modellen je als entiteit herkennen."],
                ["Crawler-toegang", "GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot en Google-Extended expliciet toelaten. Zonder toegang geen vermelding."],
                ["Monitoring", "Periodiek meten waar je genoemd wordt, in welke context, en naast welke concurrenten."],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-brand-red pl-5">
                  <h3 className="text-base font-semibold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm id="ai-scan" />
        </div>
      </Section>

      <Section className="border-y border-brand-line bg-brand-sand">
        <SectionHeading
          eyebrow="Eerlijk"
          title="GEO, nieuw vakgebied"
          intro="GEO is een jong vakgebied. De meetmethodes zijn in ontwikkeling en niemand kan een plek in een AI-antwoord garanderen."
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted">
          Wat wel vaststaat: de technieken die je citeerbaar maken zoals heldere structuur, verifieerbare
          feiten, schema en autoriteit. Deze onderdelen maken je site ook beter voor Google en voor je
          bezoeker. Je investering is dus niet weg als het landschap verschuift.
        </p>
        <Link
          to="/kennisbank/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink"
        >
          Lees meer in de kennisbank <ArrowRight className="size-4 text-brand-red" />
        </Link>
      </Section>

      <AeoBlocks />
      <FaqBlock items={FAQ} />
      <CtaBand
        title="Weten of AI jou al noemt?"
        intro="We draaien een set realistische prompts door ChatGPT, Perplexity en AI Overviews en laten je zien wat eruit komt."
      />
    </SiteLayout>
  );
}