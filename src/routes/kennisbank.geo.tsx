import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, Faq, FaqBlock, PageHero, Section, SectionHeading, faqJsonLd } from "@/components/site/page-bits";

const FAQ: Faq[] = [
  { q: "Is GEO iets anders dan SEO?", a: "Deels. De basis, goede techniek, duidelijke content en betrouwbare vermeldingen, is hetzelfde. GEO voegt daaraan toe dat je content citeerbaar moet zijn: kort, feitelijk en gestructureerd." },
  { q: "Kan ik GEO meten?", a: "Ja. Wij monitoren maandelijks een vaste set vragen in ChatGPT, Gemini en Perplexity en houden bij hoe vaak jij en je concurrenten genoemd worden." },
  { q: "Heeft GEO zin voor een lokaal bedrijf?", a: "Zeker. AI-antwoorden op vragen als 'goede installateur in Venlo' leunen sterk op je bedrijfsprofiel, reviews en lokale vermeldingen." },
];

const TOPICS = [
  { h: "Wat is GEO?", p: "Generative engine optimization: zorgen dat AI-zoekmachines jouw website als bron gebruiken in hun antwoord. Het doel is een vermelding, niet alleen een positie." },
  { h: "Hoe kiezen AI-modellen hun bronnen?", p: "Op basis van duidelijkheid, feitelijkheid, structuur en consistentie met externe bronnen. Pagina's die een vraag direct beantwoorden, worden het vaakst geciteerd." },
  { h: "Wat moet je aanpassen op je site?", p: "Antwoord bovenaan de kop, concrete cijfers, FAQ-markup, schema.org-gegevens over je bedrijf, en een llms.txt-bestand dat AI-crawlers de weg wijst." },
  { h: "Wat werkt niet?", p: "Content die met AI is gegenereerd zonder eigen kennis, keyword-stuffing en dunne plaatsnaampagina's. Dat wordt door zowel Google als AI-modellen genegeerd." },
];

export const Route = createFileRoute("/kennisbank/geo")({
  head: () => ({
    meta: [
      { title: "GEO uitgelegd: zichtbaar in AI-zoekmachines | B. Analyzed" },
      { name: "description", content: "Kennisbank GEO: wat generative engine optimization is, hoe AI-zoekmachines bronnen kiezen en wat je concreet aanpast om geciteerd te worden." },
      { property: "og:title", content: "GEO uitgelegd: zichtbaar in AI-zoekmachines" },
      { property: "og:description", content: "Alles over generative engine optimization voor MKB-bedrijven." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Kennisbank"
        title="GEO: zichtbaar worden in AI-zoekmachines"
        intro="Alles wat je als ondernemer moet weten over generative engine optimization, in gewone taal."
      />
      <Section>
        <SectionHeading title="De basis in vier stukken" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {TOPICS.map((t) => (
            <div key={t.h} className="rounded-2xl border border-brand-line bg-white p-6">
              <h2 className="text-lg font-semibold">{t.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{t.p}</p>
            </div>
          ))}
        </div>
        <Link to="/online-marketing/geo-optimalisatie/" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
          Bekijk onze GEO-dienstverlening <ArrowRight className="size-4 text-brand-red" />
        </Link>
      </Section>
      <FaqBlock items={FAQ} />
      <CtaBand />
    </SiteLayout>
  ),
});
