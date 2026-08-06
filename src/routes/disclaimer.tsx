import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/site/text-page";

export const Route = createFileRoute("/disclaimer")({
  head: textHead("Disclaimer", "Disclaimer van B. Analyzed over het gebruik van deze website, aansprakelijkheid en verwijzingen naar externe bronnen."),
  component: () => (
    <TextPage eyebrow="Juridisch" title="Disclaimer" intro="Op het gebruik van deze website zijn de onderstaande voorwaarden van toepassing." blocks={[{"h": "Informatie op deze website", "p": "B. Analyzed stelt de informatie op deze website met zorg samen. Toch kunnen wij niet garanderen dat alle informatie altijd volledig, juist en actueel is. Aan de inhoud van deze website kunnen dan ook geen rechten worden ontleend."}, {"h": "Aansprakelijkheid", "p": "B. Analyzed is niet aansprakelijk voor schade die voortvloeit uit het gebruik van deze website of uit beslissingen die op basis van de inhoud worden genomen. Adviezen op deze site zijn algemeen van aard en vervangen geen persoonlijk advies."}, {"h": "Externe links", "p": "Deze website bevat verwijzingen naar websites van derden. B. Analyzed heeft geen invloed op de inhoud van die websites en aanvaardt daarvoor geen verantwoordelijkheid."}, {"h": "Auteursrecht", "p": "Alle teksten, afbeeldingen en vormgeving op deze website zijn eigendom van B. Analyzed. Overname is toegestaan met bronvermelding en een link naar de betreffende pagina."}, {"h": "Vragen", "p": "Heb je een vraag of opmerking over deze disclaimer? Neem dan contact met ons op via de contactpagina."}]} />
  ),
});
