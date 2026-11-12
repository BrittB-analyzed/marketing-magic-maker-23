import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/landing-page";
import { LANDINGS } from "@/content/landings";
import { breadcrumbSchema, graph, serviceSchema } from "@/lib/schema";

const PATH = "/sea-specialist-noord-limburg/";
const data = LANDINGS["sea-specialist-noord-limburg"]!;

export const Route = createFileRoute("/sea-specialist-noord-limburg")({
  head: () => {
    const head = landingHead(data, PATH);
    return {
      ...head,
      scripts: [
        ...head.scripts,
        {
          type: "application/ld+json",
          children: graph(
            serviceSchema({
              name: "SEA-specialist Noord-Limburg",
              description: data.description,
              path: PATH,
              serviceType: "Zoekmachineadverteren (SEA) en Google Ads-beheer",
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Online marketing", path: "/online-marketing/" },
              { name: "SEA-specialist Noord-Limburg", path: PATH },
            ]),
          ),
        },
      ],
    };
  },
  component: () => <LandingPage data={data} />,
});
