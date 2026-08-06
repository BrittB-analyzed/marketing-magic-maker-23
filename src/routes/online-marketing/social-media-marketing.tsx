import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { faqJsonLd } from "@/components/site/page-bits";

const FAQ = [
  { q: "Welke social media kanalen zijn het meest gebruikt in Nederland?", a: "Facebook (10,4 miljoen gebruikers), Instagram (5,6 miljoen), LinkedIn (4,7 miljoen) en Pinterest (3,5 miljoen) zijn de meest gebruikte kanalen. Welk kanaal het beste past hangt af van waar jouw doelgroep zich bevindt en of je product zich leent voor visuele of zakelijke content." },
  { q: "Wat moet ik weten voordat ik start met social media marketing?", a: "Bepaal eerst welke kanalen jouw doelgroep gebruikt, of jouw product of dienst daarbij past, wat je wilt bereiken en of je organisch (posts), via advertenties, of via beide wilt werken." },
  { q: "Wat is het verschil tussen de strategie voor LinkedIn en Instagram?", a: "Op LinkedIn beheren en optimaliseren we je pagina met een constante stroom relevante berichten en letten we op je Social Selling Index. Op Instagram richten we ons op foto's, video's en 24-uurs stories, aangevuld met gerichte hashtags om nieuwe volgers te bereiken." },
  { q: "Kan ik social media marketing volledig uitbesteden?", a: "Ja. Wij beheren je accounts en profielen, plaatsen content die jij aanlevert, bedenken campagnes en beheren je social advertenties — voor één kanaal of voor alle platformen die je gebruikt. Jij houdt altijd het laatste woord en direct contact met je specialist." },
  { q: "Hoe lang blijft content op Pinterest zichtbaar vergeleken met Instagram?", a: "Een pin op Pinterest blijft gemiddeld drie en een halve maand zichtbaar, terwijl een Instagram-post na ongeveer 21 uur nauwelijks nog wordt getoond. Dat maakt Pinterest interessant voor content met een lange levensduur." },
];

export const Route = createFileRoute("/online-marketing/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social media marketing voor het MKB | B. Analyzed" },
      { name: "description", content: "Social media marketing op Facebook, Instagram, LinkedIn en Pinterest: strategie, contentbeheer en advertenties die bijdragen aan aanvragen." },
      { property: "og:title", content: "Social media marketing voor het MKB" },
      { property: "og:description", content: "Zichtbaarheid op social die je verkoopdoelen ondersteunt, meetbaar gemaakt." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="Social media marketing die bijdraagt aan omzet"
      intro="Social media is een laagdrempelige manier om je bereik te vergroten: je kunt adverteren, naamsbekendheid opbouwen en nieuwe leads genereren. Met de juiste kanaalkeuze en strategie zet je social in als versterking van je andere pijlers."
      points={[
        "Kanaalkeuze op basis van waar jouw doelgroep zich echt bevindt",
        "Contentkalender afgestemd op je SEO- en GEO-thema's",
        "Beheer van Facebook-, Instagram-, LinkedIn- of Pinterestpagina's",
        "Social advertising met een concreet, meetbaar doel",
        "Gebruik van stories, hashtags en de Social Selling Index waar relevant",
        "Social media marketing analyse: welk kanaal past het beste bij jouw bedrijf",
      ]}
      sections={[
        {
          title: "Vier belangrijkste kanalen in Nederland",
          body: "Facebook is met 10,4 miljoen gebruikers het populairst en flexibel inzetbaar via posts en advertenties. Instagram (5,6 miljoen) is sterk bij een jongere doelgroep en werkt met push- en pull-marketing via beeld, video en hashtags. LinkedIn (4,7 miljoen) is ideaal voor de zakelijke markt en professionals. Pinterest (3,5 miljoen) is visueel en laat content, in tegenstelling tot Instagram, maandenlang zichtbaar blijven.",
        },
        {
          title: "Per kanaal een andere aanpak",
          body: "Op LinkedIn plaatsen we een constante stroom interessante berichten en optimaliseren we je Social Selling Index. Op Instagram werken we met foto's en video's op je tijdlijn, korte 'stories' die 24 uur zichtbaar zijn en toepasselijke hashtags waarmee nieuwe volgers je kunnen vinden.",
        },
        {
          title: "Social media marketing uitbesteden",
          body: "Zelf je social media beheren kost veel tijd en moeite. Besteed je het uit aan B. Analyzed, dan verzorgen wij het volledige accountbeheer, plaatsen we de content die jij aanlevert en bedenken we campagnes en advertenties — jij houdt altijd het laatste woord en direct contact met je specialist.",
        },
        {
          title: "Social media marketing analyse",
          body: "Weet je nog niet welk kanaal het beste bij jouw bedrijf past, of wat de mogelijkheden van social advertising zijn? Wij brengen dat voor je in kaart met een gerichte analyse, zodat je precies weet welke middelen je bereik en naamsbekendheid het meest vergroten.",
        },
      ]}
      pillar="Ads"
      pillarTo="/online-marketing/google-ads-uitbesteden"
      pillarNote="Social advertising hoort bij de Ads-pijler: betaald bereik met een meetbaar rendement. Een audit start vanaf € 599,-, doorlopend beheer vanaf € 999,- per maand."
      faq={FAQ}
    />
  ),
});
