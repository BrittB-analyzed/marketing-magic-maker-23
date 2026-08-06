import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/site-chrome";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/page-bits";
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
                alt="Sanne — oprichter van B. Analyzed"
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
      <CtaBand />
    </SiteLayout>
  );
}