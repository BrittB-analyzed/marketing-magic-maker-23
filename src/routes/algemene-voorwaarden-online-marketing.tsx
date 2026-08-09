import { createFileRoute } from "@tanstack/react-router";
import { TextPage, textHead } from "@/components/site/text-page";
import { TERMS_BLOCKS, TERMS_INTRO } from "@/content/legal";

export const Route = createFileRoute("/algemene-voorwaarden-online-marketing")({
  head: textHead("Algemene voorwaarden", "De algemene voorwaarden van B. Analyzed voor online marketing dienstverlening: offertes, looptijd, betaling en eigendom van accounts."),
  component: () => (
    <TextPage
      eyebrow="Juridisch"
      title="Algemene voorwaarden B. Analyzed marketing"
      intro={TERMS_INTRO}
      blocks={TERMS_BLOCKS}
    />
  ),
});
