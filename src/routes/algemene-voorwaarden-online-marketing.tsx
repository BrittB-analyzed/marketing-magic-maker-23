import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/site/text-page";

export const Route = createFileRoute("/algemene-voorwaarden-online-marketing")({
  head: textHead("Algemene voorwaarden", "De algemene voorwaarden van B. Analyzed voor online marketing dienstverlening: offertes, looptijd, betaling en eigendom van accounts."),
  component: () => (
    <TextPage eyebrow="Juridisch" title="Algemene voorwaarden online marketing" intro="Hieronder vind je de kern van onze algemene voorwaarden. De volledige voorwaarden sturen wij mee bij elke offerte." blocks={[{"h": "Offertes en opdracht", "p": "Offertes zijn dertig dagen geldig. Een opdracht komt tot stand zodra je de offerte schriftelijk of per e-mail akkoord geeft."}, {"h": "Looptijd en opzegging", "p": "Doorlopende trajecten kennen een opstartperiode van drie maanden. Daarna is de samenwerking maandelijks opzegbaar met een opzegtermijn van één kalendermaand."}, {"h": "Betaling", "p": "Facturatie vindt maandelijks vooraf plaats met een betaaltermijn van veertien dagen. Mediabudget voor advertenties wordt rechtstreeks door de opdrachtgever aan het platform betaald."}, {"h": "Eigendom van accounts en data", "p": "Alle accounts, content en data die tijdens de samenwerking worden opgebouwd, blijven eigendom van de opdrachtgever. Bij beëindiging dragen wij de toegang volledig over."}, {"h": "Resultaat en inspanning", "p": "Wij werken resultaatgericht en spreken vooraf doelen af. Zoekmachines en advertentieplatformen zijn echter externe partijen; wij kunnen posities niet garanderen, wel de afgesproken inspanning en transparante rapportage."}]} />
  ),
});
