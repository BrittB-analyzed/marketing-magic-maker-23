import { seoMeta } from "@/data/seo-meta";
import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";
import { RelatedLinks, faqJsonLd } from "@/components/site/page-bits";
import { KENNISBANK_CONTENT_LINKS } from "@/data/interne-links";

const FAQ = [
  { q: "Wat zijn SEO-teksten precies?", a: "SEO-teksten zijn teksten waarbij niet alleen naar vorm en inhoud wordt gekeken, maar ook naar de indeling, het gebruik van de juiste zoekwoorden en de frequentie waarmee die zoekwoorden voorkomen. Het is een leesbare, informatieve beschrijving die potentiële klanten verleidt om te kopen." },
  { q: "Waarom is SEO-teksten laten schrijven belangrijk voor mijn omzet?", a: "Een mooie website is een visitekaartje, maar levert niets op als hij niet gevonden wordt. Mensen zoeken via keywords en vragen; met de juiste, sterke SEO-teksten zorg je dat jouw website daarbij naar voren komt, wat leidt tot een hogere vindbaarheid dan concurrenten zonder geoptimaliseerde teksten." },
  { q: "Is zoekwoordenonderzoek verplicht voordat jullie teksten schrijven?", a: "Nee, het is optioneel. Je kunt zelf zoekwoorden aanleveren of het onderzoek door ons laten uitvoeren. Voer je het zelf uit, dan hoef je daar niet extra voor te betalen; laten we het onderzoek uitvoeren, dan zit dit niet standaard bij de prijs van de teksten inbegrepen." },
  { q: "Hoe ziet het proces van SEO-teksten laten schrijven eruit?", a: "We werken in vier stappen: inventarisatie van je wensen en diensten, (optioneel) zoekwoordenonderzoek, het opstellen van de SEO-strategie inclusief planning en volume, en tot slot het daadwerkelijk schrijven van de teksten op basis van jouw tone of voice en doel." },
  { q: "Kan ik de teksten laten aanpassen als ze niet naar wens zijn?", a: "Ja. Je geeft vooraf aan of je de lezer formeel of informeel wilt benaderen en of je wilt informeren of tot een aankoop wilt aanzetten. Zijn de opgeleverde teksten niet zoals gewenst, dan passen we ze aan." },
];

export const Route = createFileRoute("/online-marketing/seo-teksten-laten-schrijven")({
  head: () => ({
    meta: seoMeta('/online-marketing/seo-teksten-laten-schrijven/', { ogType: 'article', twitterCard: 'summary' }),
    scripts: [{ type: "application/ld+json", children: faqJsonLd(FAQ) }],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="SEO-teksten laten schrijven die ook door AI worden geciteerd"
      intro="Bij B. Analyzed werken we met ervaren SEO-tekstschrijvers met een passie voor unieke, pakkende teksten waarmee je je onderscheidt van de concurrent, of het nu om een blog, landingspagina of productbeschrijving gaat."
      points={[
        "Zoekwoord- en vraagonderzoek per pagina, zodat we weten wat je klant echt intypt",
        "Teksten met een duidelijk antwoord bovenaan: goed voor de lezer en voor AI-zoekmachines",
        "Interne links en koppenstructuur die je hele site sterker maken",
        "Optimalisatie van bestaande pagina's als dat sneller rendement geeft dan nieuwe content",
        "Vaste tone of voice, afgestemd op jouw markt en vakgebied",
        "Snelle oplevering en de mogelijkheid tot revisies",
      ]}
      sections={[
        {
          title: "Wat zijn SEO-teksten?",
          body: "SEO-teksten schrijven is het proces waarbij de juiste woorden op de juiste plek worden gezet om zinnen te maken die kwaliteit en inhoud vertegenwoordigen. Het resultaat is een leesbare, informatieve beschrijving van jouw producten of diensten die bezoekers verleidt tot een aankoop of aanvraag.",
        },
        {
          title: "Waarom SEO-teksten laten schrijven?",
          body: "Een mooie website spreekt voor zich, maar levert niets op als hij niet gevonden wordt. Mensen zoeken via keywords en vragen en belanden op je site als die keywords terugkomen in je tekst. Bedrijven die hun teksten laten schrijven door professionals hebben een hogere vindbaarheidsgraad dan hun concurrentie.",
        },
        {
          title: "Hoge kwaliteit is meer dan keywords",
          body: "Hoge kwaliteit betekent dat teksten niet alleen aan de SEO-criteria voldoen, maar ook inhoudelijk kloppen en grammaticaal correct zijn. De tekst moet prettig leesbaar zijn en interessant genoeg om de lezer vast te houden, daarom laten steeds meer ondernemers hun teksten schrijven door ervaren SEO-copywriters.",
        },
        {
          title: "Ons stappenplan",
          body: "We starten met een inventarisatie van je diensten, doelgroep en eerdere ervaring met SEO-teksten. Daarna volgt optioneel een zoekwoordenonderzoek, stellen we de SEO-strategie op (welke zoekwoorden, hoeveel pagina's, welke oplevertijd) en gaan onze tekstschrijvers aan de slag met teksten die aansluiten op jouw wensen en doelgroep.",
        },
      ]}
      extra={
        <RelatedLinks
          className="bg-white"
          title="Begrippen uit de kennisbank"
          items={KENNISBANK_CONTENT_LINKS}
        />
      }
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Content is de motor onder je SEO. Zonder goede teksten helpen techniek en links maar beperkt. Een audit start vanaf € 599,-, doorlopende contentproductie vanaf € 999,- per maand of tegen ons uurtarief van € 90,-."
      faq={FAQ}
    />
  ),
});
