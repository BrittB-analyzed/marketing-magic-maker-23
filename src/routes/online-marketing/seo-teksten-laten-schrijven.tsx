import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/site/support-page";

export const Route = createFileRoute("/online-marketing/seo-teksten-laten-schrijven")({
  head: () => ({
    meta: [
      { title: "SEO-teksten laten schrijven | B. Analyzed" },
      { name: "description", content: "SEO-teksten laten schrijven voor je website: onderzocht, leesbaar en geschreven zodat Google én AI-zoekmachines je content gebruiken." },
      { property: "og:title", content: "SEO-teksten laten schrijven" },
      { property: "og:description", content: "SEO-teksten laten schrijven voor je website: onderzocht, leesbaar en geschreven zodat Google én AI-zoekmachines je content gebruiken." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SupportPage
      eyebrow="Ondersteunende dienst"
      title="SEO-teksten laten schrijven die ook door AI worden geciteerd"
      intro="Teksten die scoren in Google en tegelijk begrijpelijk blijven voor je klant. Geschreven op basis van zoekgedrag, niet op onderbuikgevoel."
      points={["Zoekwoord- en vraagonderzoek per pagina, zodat we weten wat je klant echt intypt", "Teksten met een duidelijk antwoord bovenaan: goed voor de lezer en voor AI-zoekmachines", "Interne links en koppenstructuur die je hele site sterker maken", "Optimalisatie van bestaande pagina's als dat sneller rendement geeft dan nieuwe content", "Vaste tone of voice, afgestemd op jouw markt en vakgebied"]}
      pillar="SEO"
      pillarTo="/online-marketing/seo-uitbesteden"
      pillarNote="Content is de motor onder je SEO. Zonder goede teksten helpen techniek en links maar beperkt."
    />
  ),
});
