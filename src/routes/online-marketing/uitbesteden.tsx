import { seoMeta } from "@/data/seo-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  { q: "Waarom zou ik online marketing uitbesteden?", a: "De online wereld verandert continu, en om optimaal resultaat te behalen moet je goed op de hoogte zijn van de laatste ontwikkelingen binnen elke discipline. Online marketing uitbesteden bespaart je tijd en kosten, en een goed opgezette strategie levert je geld op in plaats van dat het kost." },
  { q: "Welke online marketing diensten bieden jullie aan?", a: "Onder meer zoekmachineoptimalisatie (SEO), Google Ads, linkbuilding, e-mailmarketing, conversieratio-optimalisatie (CRO) en social media marketing. We bepalen aan de hand van een analyse van je bedrijf, doelgroep en doelstellingen welke mix het meest oplevert." },
  { q: "Wat is een full service internet marketing plan?", a: "Dat is een allesomvattend pakket waarin we alle voor jouw bedrijf relevante marketingdiensten combineren: van webdesign en SEO tot SEA, e-mail- en social media marketing. We stellen een op maat gemaakte strategie op en passen die aan op wat jij wel en niet nodig hebt." },
  { q: "Voor welk type bedrijf werkt een full service plan?", a: "Voor elke website en branche: een e-commercesite, een B2B-website gericht op leadgeneratie of een andere website. Het plan bevat alles om meer bezoekers aan te trekken, meer conversies te behalen en je website gebruiksvriendelijker te maken." },
  { q: "Werken jullie met langlopende contracten?", a: "Nee. We geloven in een op maat gemaakte, transparante aanpak zonder overbodige onderdelen, dat houdt onze dienstverlening kosteneffectief en jouw marketingbudget op schema. We bieden bovendien een no cure - no pay garantie." },
];

export const Route = createFileRoute("/online-marketing/uitbesteden")({
  head: () => ({
    meta: seoMeta('/online-marketing/uitbesteden/', { ogType: 'article', twitterCard: 'summary' }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Online marketing uitbesteden zonder je grip te verliezen"
      intro="Online marketing is niet meer weg te denken uit een gezonde marketingstrategie. Of het nu gaat om SEO, SEA, social media marketing, display advertising of e-mailmarketing: de mogelijkheden zijn talloos, en juist daardoor zien veel ondernemers door de bomen het bos niet meer."
      points={[
        "Eén partij voor SEO, Google Ads, linkbuilding, e-mailmarketing en CRO",
        "Uitgebreide analyse van je bedrijf, doelgroep en doelstellingen als vertrekpunt",
        "Vast aanspreekpunt dat je bedrijf kent, geen wisselende accountmanagers",
        "Full service internet marketing plan mogelijk, op maat samengesteld",
        "Geen langlopende contracten: maandelijks opzegbaar na de opstartperiode",
        "Toegang tot je eigen accounts en data blijft altijd van jou",
      ]}
      sections={[
        {
          title: "Waarom online marketing uitbesteden?",
          body: "Bedrijven die hun online marketing uitbesteden bepalen samen met ons welke diensten het beste aansluiten bij hun doelgroep en doelstellingen. Omdat de online wereld continu verandert, is diepgaande kennis van elke discipline nodig om optimaal resultaat te behalen, tijd en expertise die uitbesteden je bespaart.",
        },
        {
          title: "Een breed palet aan diensten",
          body: "Onze online marketing diensten bestaan onder meer uit SEO uitbesteden, Google Ads uitbesteden, linkbuilding uitbesteden, e-mailmarketing, conversieratio-optimalisatie (CRO) en social media marketing. Aan de hand van een grondige analyse zetten we de mix op die voor jouw bedrijf het meeste oplevert.",
        },
        {
          title: "Full service internet marketing",
          body: "Heb je een marketingplan dat niet oplevert wat je hoopte, of begin je net? Met een full service internet marketing plan dekken we alles wat nodig is: webdesign, SEO, SEA, e-mail- en social media marketing, allemaal gecombineerd in één op maat gemaakte strategie voor jouw bedrijf en branche.",
        },
        {
          title: "Altijd een op maat gerichte service",
          body: "Heb je niet alles nodig wat we hebben genoemd? Geen probleem: we passen het plan aan op jouw specifieke behoeften. Zo blijft onze dienstverlening kosteneffectief en jouw marketingbudget op schema, mét een no cure - no pay garantie op resultaat.",
        },
      ]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Uitbesteden betekent bij ons niet dat je het overzicht kwijtraakt, maar dat je het terugkrijgt. Een audit start vanaf € 599,-, doorlopende samenwerking vanaf € 999,- per maand of tegen ons uurtarief van € 90,-."
      faq={FAQ}
    />
  ),
});
