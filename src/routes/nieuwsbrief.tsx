import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/site/text-page";

export const Route = createFileRoute("/nieuwsbrief")({
  head: textHead("Nieuwsbrief", "Meld je aan voor de nieuwsbrief van B. Analyzed: elke maand concrete tips over SEO, GEO en advertenties voor MKB-ondernemers."),
  component: () => (
    <TextPage eyebrow="Nieuwsbrief" title="Elke maand één mail over vindbaarheid in Google en AI" intro="Geen nieuwsbrief vol nieuwtjes, maar één mail per maand met iets dat je diezelfde week kunt toepassen." blocks={[{"h": "Wat je krijgt", "p": "Eén korte mail per maand: wat er veranderde in Google en in AI-zoekmachines, wat dat betekent voor het MKB, en één concrete actie die je zelf kunt uitvoeren."}, {"h": "Wat je niet krijgt", "p": "Geen dagelijkse mails, geen doorverkoop van je adres en geen verkooptrechter van tien berichten. Uitschrijven kan met één klik onderaan elke mail."}, {"h": "Aanmelden", "p": "Vul het formulier onderaan deze pagina in of laat je e-mailadres achter via de contactpagina met de opmerking 'nieuwsbrief'. Je ontvangt de eerstvolgende editie automatisch."}]} />
  ),
});
