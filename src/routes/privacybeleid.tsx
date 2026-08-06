import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/site/text-page";

export const Route = createFileRoute("/privacybeleid")({
  head: textHead("Privacybeleid", "Privacybeleid van B. Analyzed: welke persoonsgegevens wij verwerken, waarom, hoe lang wij ze bewaren en welke rechten je hebt."),
  component: () => (
    <TextPage eyebrow="Juridisch" title="Privacybeleid" intro="Wij gaan zorgvuldig om met je gegevens en verwerken niet meer dan nodig is om je te helpen." blocks={[{"h": "Welke gegevens wij verwerken", "p": "Wanneer je een scan of contactformulier invult, verwerken wij je naam, e-mailadres, telefoonnummer, bedrijfsnaam en website-URL. Daarnaast verzamelen wij geanonimiseerde gebruiksstatistieken van deze website."}, {"h": "Waarom wij die gegevens gebruiken", "p": "Uitsluitend om je aanvraag te behandelen, je de gevraagde analyse te sturen en contact met je op te nemen over je vraag. Wij verkopen je gegevens nooit door aan derden."}, {"h": "Bewaartermijn", "p": "Aanvraaggegevens bewaren wij maximaal twee jaar na het laatste contact. Gegevens die wij op grond van de belastingwetgeving moeten bewaren, houden wij zeven jaar aan."}, {"h": "Statistieken en cookies", "p": "Wij meten websitegebruik met privacyvriendelijke instellingen: IP-adressen worden geanonimiseerd en gegevens worden niet gedeeld voor advertentiedoeleinden zonder jouw toestemming."}, {"h": "Jouw rechten", "p": "Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Stuur daarvoor een bericht via onze contactpagina; wij reageren binnen vijf werkdagen."}]} />
  ),
});
