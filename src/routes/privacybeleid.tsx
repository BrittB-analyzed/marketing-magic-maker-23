import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/site/text-page";
import { PRIVACY_BLOCKS, PRIVACY_INTRO } from "@/content/legal";

export const Route = createFileRoute("/privacybeleid")({
  head: textHead("Privacybeleid", "Privacybeleid van B. Analyzed: welke persoonsgegevens wij verwerken, waarom, hoe lang wij ze bewaren en welke rechten je hebt."),
  component: () => (
    <TextPage
      eyebrow="Juridisch"
      title="Privacybeleid"
      intro={PRIVACY_INTRO}
      blocks={PRIVACY_BLOCKS}
    />
  ),
});
