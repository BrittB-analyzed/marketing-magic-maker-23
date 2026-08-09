import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { Check } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";
import { ReviewsSection } from "@/components/site/reviews";
import portretFounder from "@/assets/photos/portret-founder.jpg.asset.json";
import portretBuiten from "@/assets/photos/portret-buiten.jpg.asset.json";
import portretZittend from "@/assets/photos/portret-zittend.jpg.asset.json";

export const Route = createFileRoute("/online-marketing-bedrijf")({
  head: () => ({
    meta: [
      { title: "Hey hallo, wij zijn een online marketing bedrijf | B. Analyzed" },
      {
        name: "description",
        content:
          "B. Analyzed is in 2014 gestart door Britt Daemen en is uitgegroeid tot een fullservice online marketingbureau met freelancers wereldwijd. 12+ jaar ervaring in SEO, GEO, Ads en meer.",
      },
      { property: "og:title", content: "Hey hallo, wij zijn een online marketing bedrijf" },
      { property: "og:description", content: "Remote team van online vakidioten. Transparant, persoonlijk en gericht op meetbaar resultaat." },
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
        title="Hey hallo, wij zijn een online marketing bedrijf"
        intro="Maar dan anders. Ons team bestaat uit online vakidioten die blij worden van de digitale wereld en work from anywhere — B. Analyzed runt het bedrijf volledig remote, wereldwijd."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="B. Analyzed door de jaren heen" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted">
              <p>
                In 2014 startte Britt Daemen als freelance marketeer onder de naam B. Analyzed
                marketing, met zoekmachine optimalisatie en Google Ads als specialismen. Al snel bleek
                dat klanten behoefte hadden aan een totaalpakket: een nieuwe website, social media,
                linkbuilding en een betere vindbaarheid.
              </p>
              <p>
                Inmiddels is B. Analyzed een fullservice online marketingbureau dat ieder bedrijf van
                A tot Z ontzorgt: SEO, Google Ads, linkbuilding, social media marketing, Google Tag
                Manager, SEO-teksten, WordPress-websites en SEO voor MKB.
              </p>
              <p>
                Omdat we remote werken hebben we geen hoge bedrijfspandkosten — dat vertaalt zich naar
                scherpe prijzen en kennis die altijd en overal voor jou beschikbaar is. En we geloven in
                wij en samen: we werken net zo lang door tot jij een gegarandeerd mooi, meetbaar
                resultaat boekt.
              </p>
            </div>
            <Link
              to="/online-marketing-cases/"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              Bekijk onze cases <ArrowRight className="size-4 text-brand-red" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={portretBuiten.url}
                alt="Sanne van B. Analyzed buiten in het veld"
                className="h-64 w-full object-cover sm:h-80"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={portretFounder.url}
                alt="Britt Daemen — oprichter van B. Analyzed"
                className="h-64 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-brand-line">
              <img
                src={portretZittend.url}
                alt="Persoonlijk contact staat voorop bij B. Analyzed"
                className="h-64 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section className="border-t border-brand-line bg-white">
        <SectionHeading eyebrow="Onze voordelen" title="Waarom bedrijven voor B. Analyzed kiezen" intro="Wij hanteren een transparante en persoonlijke werkwijze. Resultaatgericht werken staat hierin voorop!" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["12 jaar ervaring", "B. Analyzed bestaat al meer dan 12 jaar op het gebied van online marketing — daar zijn we trots op."],
            ["Transparante werkwijze", "Alles wat we doen laten we zien via Loom-video's, zodat je precies weet wat er gebeurt."],
            ["Aantoonbare resultaten", "Met tools en screenshots van website statistieken laten we onze cases zien waar we trots op zijn."],
            ["Gegarandeerde top 10 posities", "In Google. Alleen de eerste pagina telt en dat weten wij als geen ander."],
            ["Trouwe opdrachtgevers", "Klanten waar wij al jaren voor werken — het bewijs dat wat we doen, we goed doen."],
            ["Verbeterd ROI", "Dat is waar het uiteindelijk om draait. Dit presenteren wij graag."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-brand-line bg-brand-canvas p-6">
              <span className="flex size-8 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                <Check className="size-4" strokeWidth={3} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-ink">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <ReviewsSection
        initial={6}
        linkToAll
        title="Wat opdrachtgevers over ons zeggen"
        intro="Een greep uit de 45 klantwaarderingen die we ontvingen. Klanttevredenheid staat bij ons voorop: de meeste opdrachtgevers werken al jaren met ons samen."
      />
      <CtaBand />
    </SiteLayout>
  );
}