export type LandingSection = { h: string; p: string };
export type LandingFaq = { q: string; a: string };
export type LandingLink = { label: string; to: string };

export type Landing = {
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  sections: LandingSection[];
  faq: LandingFaq[];
  related: LandingLink[];
};

export const LANDINGS: Record<string, Landing> = {
  "seo-venlo": {
    "eyebrow": "Local SEO",
    "h1": "SEO Venlo: gevonden worden waar je klanten zoeken",
    "title": "SEO Venlo — SEO-bureau voor Noord-Limburg | B. Analyzed",
    "description": "SEO in Venlo nodig? B. Analyzed helpt ondernemers in Noord-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Venlo en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Venlo echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Venlo anders werkt",
        "p": "Venlo is een logistiek- en handelsstad: veel bedrijven concurreren hier ook met Duitse partijen aan de andere kant van de grens. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Venlo als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Venlo?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Venlo is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-maastricht": {
    "eyebrow": "Local SEO",
    "h1": "SEO Maastricht: gevonden worden waar je klanten zoeken",
    "title": "SEO Maastricht — SEO-bureau voor Zuid-Limburg | B. Analyzed",
    "description": "SEO in Maastricht nodig? B. Analyzed helpt ondernemers in Zuid-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Maastricht en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Maastricht echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Maastricht anders werkt",
        "p": "Maastricht heeft een sterke dienstverlenende en toeristische sector, waar lokale zichtbaarheid direct aanvragen oplevert. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Zuid-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Maastricht als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Maastricht?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Maastricht is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-nijmegen": {
    "eyebrow": "Local SEO",
    "h1": "SEO Nijmegen: gevonden worden waar je klanten zoeken",
    "title": "SEO Nijmegen — SEO-bureau voor Gelderland | B. Analyzed",
    "description": "SEO in Nijmegen nodig? B. Analyzed helpt ondernemers in Gelderland hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Nijmegen en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Nijmegen echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Nijmegen anders werkt",
        "p": "Nijmegen combineert een grote studentenpopulatie met veel MKB-dienstverleners; de concurrentie op lokale zoektermen is stevig. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Gelderland, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Nijmegen als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Nijmegen?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Nijmegen is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-rotterdam": {
    "eyebrow": "Local SEO",
    "h1": "SEO Rotterdam: gevonden worden waar je klanten zoeken",
    "title": "SEO Rotterdam — SEO-bureau voor Zuid-Holland | B. Analyzed",
    "description": "SEO in Rotterdam nodig? B. Analyzed helpt ondernemers in Zuid-Holland hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Rotterdam en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Rotterdam echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Rotterdam anders werkt",
        "p": "Rotterdam is een van de zwaarste SEO-markten van Nederland. Winnen doe je hier op niches en op sterke servicepagina's, niet op algemene termen. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Zuid-Holland, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Rotterdam als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Rotterdam?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Rotterdam is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-eindhoven": {
    "eyebrow": "Local SEO",
    "h1": "SEO Eindhoven: gevonden worden waar je klanten zoeken",
    "title": "SEO Eindhoven — SEO-bureau voor Noord-Brabant | B. Analyzed",
    "description": "SEO in Eindhoven nodig? B. Analyzed helpt ondernemers in Noord-Brabant hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Eindhoven en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Eindhoven echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Eindhoven anders werkt",
        "p": "Eindhoven zit vol tech- en maakbedrijven met lange salestrajecten; content die uitlegt hoe je werkt weegt hier zwaar. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Brabant, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Eindhoven als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Eindhoven?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Eindhoven is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-roermond": {
    "eyebrow": "Local SEO",
    "h1": "SEO Roermond: gevonden worden waar je klanten zoeken",
    "title": "SEO Roermond — SEO-bureau voor Midden-Limburg | B. Analyzed",
    "description": "SEO in Roermond nodig? B. Analyzed helpt ondernemers in Midden-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Roermond en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Roermond echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Roermond anders werkt",
        "p": "Roermond trekt bezoekers uit een grote regio, inclusief Duitsland. Lokale zichtbaarheid en Google Bedrijfsprofiel doen hier veel. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Midden-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Roermond als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Roermond?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Roermond is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-venray": {
    "eyebrow": "Local SEO",
    "h1": "SEO Venray: gevonden worden waar je klanten zoeken",
    "title": "SEO Venray — SEO-bureau voor Noord-Limburg | B. Analyzed",
    "description": "SEO in Venray nodig? B. Analyzed helpt ondernemers in Noord-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Venray en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Venray echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Venray anders werkt",
        "p": "In Venray draait het om een compacte lokale markt: wie bovenaan staat, pakt een groot deel van de aanvragen. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Venray als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Venray?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Venray is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-horst": {
    "eyebrow": "Local SEO",
    "h1": "SEO Horst aan de Maas: gevonden worden waar je klanten zoeken",
    "title": "SEO Horst aan de Maas — SEO-bureau voor Noord-Limburg | B. Analyzed",
    "description": "SEO in Horst aan de Maas nodig? B. Analyzed helpt ondernemers in Noord-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Horst aan de Maas en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Horst aan de Maas echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Horst aan de Maas anders werkt",
        "p": "Horst en omgeving is agrarisch en MKB-gedreven. Vindbaarheid in de dorpskernen eromheen levert vaak het meeste op. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Horst aan de Maas als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Horst aan de Maas?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Horst aan de Maas is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-belfeld": {
    "eyebrow": "Local SEO",
    "h1": "SEO Belfeld: gevonden worden waar je klanten zoeken",
    "title": "SEO Belfeld — SEO-bureau voor Noord-Limburg | B. Analyzed",
    "description": "SEO in Belfeld nodig? B. Analyzed helpt ondernemers in Noord-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Belfeld en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Belfeld echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Belfeld anders werkt",
        "p": "Belfeld is klein, dus we richten je zichtbaarheid op de hele regio Venlo-Reuver-Tegelen. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Belfeld als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Belfeld?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Belfeld is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-grubbenvorst": {
    "eyebrow": "Local SEO",
    "h1": "SEO Grubbenvorst: gevonden worden waar je klanten zoeken",
    "title": "SEO Grubbenvorst — SEO-bureau voor Noord-Limburg | B. Analyzed",
    "description": "SEO in Grubbenvorst nodig? B. Analyzed helpt ondernemers in Noord-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Grubbenvorst en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Grubbenvorst echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Grubbenvorst anders werkt",
        "p": "Grubbenvorst ligt tussen Venlo en Horst; we combineren lokale SEO met bereik in beide werkgebieden. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Grubbenvorst als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Grubbenvorst?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Grubbenvorst is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-arcen": {
    "eyebrow": "Local SEO",
    "h1": "SEO Arcen: gevonden worden waar je klanten zoeken",
    "title": "SEO Arcen — SEO-bureau voor Noord-Limburg | B. Analyzed",
    "description": "SEO in Arcen nodig? B. Analyzed helpt ondernemers in Noord-Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Arcen en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Arcen echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Arcen anders werkt",
        "p": "Arcen leunt op toerisme en horeca; reviews en lokale zichtbaarheid bepalen hier het grootste deel van de boekingen. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Noord-Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Arcen als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Arcen?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Arcen is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-ibiza": {
    "eyebrow": "Local SEO",
    "h1": "SEO Ibiza: gevonden worden waar je klanten zoeken",
    "title": "SEO Ibiza — SEO-bureau voor Balearen | B. Analyzed",
    "description": "SEO in Ibiza nodig? B. Analyzed helpt ondernemers in Balearen hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Ibiza en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Ibiza echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Ibiza anders werkt",
        "p": "Voor Nederlandse en internationale ondernemers op Ibiza combineren we meertalige SEO met lokale vindbaarheid. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor Balearen, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Ibiza als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Ibiza?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Ibiza is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-limburg": {
    "eyebrow": "Local SEO",
    "h1": "SEO Limburg: het SEO-bureau uit je eigen provincie",
    "title": "SEO Limburg — SEO-bureau uit Venlo | B. Analyzed",
    "description": "SEO in Limburg nodig? B. Analyzed helpt ondernemers in heel Limburg hoger in Google én zichtbaar in AI-zoekmachines. Vraag de gratis SEO & GEO-scan aan.",
    "intro": "Wij helpen bedrijven in Limburg en omgeving structureel hoger in Google te komen — en genoemd te worden in ChatGPT, Gemini en Perplexity. Geen jargon, wel maandelijkse cijfers en een persoonlijke video-uitleg.",
    "bullets": [
      "Zichtbaar op de zoektermen waar klanten uit Limburg echt op zoeken",
      "Google Bedrijfsprofiel dat aanvragen en belletjes oplevert",
      "Ook zichtbaar in AI-antwoorden (GEO), niet alleen in Google"
    ],
    "sections": [
      {
        "h": "Waarom SEO in Limburg anders werkt",
        "p": "Van Venlo tot Maastricht: Limburgse bedrijven concurreren vaak regionaal én over de grens met Duitsland en België. We beginnen daarom met een zoekwoordenonderzoek dat specifiek is voor heel Limburg, niet met een landelijke standaardlijst."
      },
      {
        "h": "Wat we concreet doen",
        "p": "Technische basis op orde, sterke servicepagina's per dienst, een ingericht Google Bedrijfsprofiel, lokale vermeldingen en linkbuilding die echt van waarde is. Daarnaast optimaliseren we je content zodat AI-zoekmachines je bedrijf uit Limburg als bron gebruiken."
      },
      {
        "h": "Wat je van ons mag verwachten",
        "p": "Elke maand een rapportage met een Loom-video waarin we uitleggen wat er gebeurd is, wat het opleverde en wat we hierna doen. Wij werken net zo lang door tot je meetbaar resultaat boekt — je investering verdien je sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Hoe snel zie ik resultaat met SEO in Limburg?",
        "a": "Lokale verbeteringen zoals je Google Bedrijfsprofiel zie je vaak binnen enkele weken. Voor structurele posities op commerciële zoektermen rekenen we op drie tot zes maanden."
      },
      {
        "q": "Werken jullie ook voor bedrijven buiten de regio?",
        "a": "Ja. We zitten in Venlo, werken door heel Nederland en België, en Limburg is een van onze vaste werkgebieden."
      },
      {
        "q": "Wat kost SEO?",
        "a": "Een losse audit start vanaf € 599,-. Doorlopende SEO-begeleiding start vanaf € 999,- per maand, afhankelijk van je markt en ambitie."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Local SEO",
        "to": "/online-marketing/local-seo"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "linkbuilding-uitbesteden-venlo": {
    "eyebrow": "Linkbuilding",
    "h1": "Linkbuilding uitbesteden in Venlo",
    "title": "Linkbuilding uitbesteden Venlo | B. Analyzed",
    "description": "Linkbuilding uitbesteden in Venlo? Wij bouwen relevante, redactionele links die je autoriteit én je posities in Google verhogen. Geen linkspam.",
    "intro": "Autoriteit opbouwen zonder trucjes. We plaatsen links op sites die er in jouw markt écht toe doen — regionaal in Venlo en landelijk in je vakgebied.",
    "bullets": [
      "Alleen redactionele plaatsingen op relevante sites",
      "Volledige transparantie: je ziet elke link en wat die kost",
      "Linkprofiel dat past bij je concurrentie, niet bij een pakket"
    ],
    "sections": [
      {
        "h": "Hoe wij linkbuilding aanpakken",
        "p": "We analyseren eerst je huidige linkprofiel en dat van je concurrenten in Venlo. Daarna bepalen we welk type links ontbreekt: lokale vermeldingen, brancherelevante artikelen of sterke landelijke media. Elke plaatsing keur je vooraf goed."
      },
      {
        "h": "Wat we niet doen",
        "p": "Geen linknetwerken, geen PBN's, geen honderd links voor een vast bedrag. Dat is linkspam en helpt niet — het kost je op termijn posities in plaats van dat het ze oplevert."
      },
      {
        "h": "Linkbuilding als onderdeel van je SEO",
        "p": "Links werken alleen als de pagina waarnaar je linkt goed is. We combineren linkbuilding daarom altijd met content en techniek, zodat de autoriteit ook echt landt op je commerciële pagina's."
      }
    ],
    "faq": [
      {
        "q": "Hoeveel links heb ik nodig?",
        "a": "Dat hangt af van je concurrentie. We rekenen dat voor je uit op basis van de linkprofielen van de partijen die nu boven je staan."
      },
      {
        "q": "Wat kost linkbuilding?",
        "a": "We werken met een maandelijks linkbudget vanaf € 500,-. Je ziet precies welk deel naar plaatsing gaat en welk deel naar werk."
      },
      {
        "q": "Zijn links nog relevant in 2026?",
        "a": "Ja. Links blijven een van de sterkste ranking-signalen en bepalen ook mede of AI-zoekmachines je als betrouwbare bron zien."
      }
    ],
    "related": [
      {
        "label": "Linkbuilding uitbesteden",
        "to": "/online-marketing/linkbuilding-uitbesteden"
      },
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Tarieven linkbuilding",
        "to": "/tarieven-linkbuilding"
      }
    ]
  },
  "linkbuilding-uitbesteden-maastricht": {
    "eyebrow": "Linkbuilding",
    "h1": "Linkbuilding uitbesteden in Maastricht",
    "title": "Linkbuilding uitbesteden Maastricht | B. Analyzed",
    "description": "Linkbuilding uitbesteden in Maastricht? Wij bouwen relevante, redactionele links die je autoriteit én je posities in Google verhogen. Geen linkspam.",
    "intro": "Autoriteit opbouwen zonder trucjes. We plaatsen links op sites die er in jouw markt écht toe doen — regionaal in Maastricht en landelijk in je vakgebied.",
    "bullets": [
      "Alleen redactionele plaatsingen op relevante sites",
      "Volledige transparantie: je ziet elke link en wat die kost",
      "Linkprofiel dat past bij je concurrentie, niet bij een pakket"
    ],
    "sections": [
      {
        "h": "Hoe wij linkbuilding aanpakken",
        "p": "We analyseren eerst je huidige linkprofiel en dat van je concurrenten in Maastricht. Daarna bepalen we welk type links ontbreekt: lokale vermeldingen, brancherelevante artikelen of sterke landelijke media. Elke plaatsing keur je vooraf goed."
      },
      {
        "h": "Wat we niet doen",
        "p": "Geen linknetwerken, geen PBN's, geen honderd links voor een vast bedrag. Dat is linkspam en helpt niet — het kost je op termijn posities in plaats van dat het ze oplevert."
      },
      {
        "h": "Linkbuilding als onderdeel van je SEO",
        "p": "Links werken alleen als de pagina waarnaar je linkt goed is. We combineren linkbuilding daarom altijd met content en techniek, zodat de autoriteit ook echt landt op je commerciële pagina's."
      }
    ],
    "faq": [
      {
        "q": "Hoeveel links heb ik nodig?",
        "a": "Dat hangt af van je concurrentie. We rekenen dat voor je uit op basis van de linkprofielen van de partijen die nu boven je staan."
      },
      {
        "q": "Wat kost linkbuilding?",
        "a": "We werken met een maandelijks linkbudget vanaf € 500,-. Je ziet precies welk deel naar plaatsing gaat en welk deel naar werk."
      },
      {
        "q": "Zijn links nog relevant in 2026?",
        "a": "Ja. Links blijven een van de sterkste ranking-signalen en bepalen ook mede of AI-zoekmachines je als betrouwbare bron zien."
      }
    ],
    "related": [
      {
        "label": "Linkbuilding uitbesteden",
        "to": "/online-marketing/linkbuilding-uitbesteden"
      },
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Tarieven linkbuilding",
        "to": "/tarieven-linkbuilding"
      }
    ]
  },
  "linkbuilding-uitbesteden-nijmegen": {
    "eyebrow": "Linkbuilding",
    "h1": "Linkbuilding uitbesteden in Nijmegen",
    "title": "Linkbuilding uitbesteden Nijmegen | B. Analyzed",
    "description": "Linkbuilding uitbesteden in Nijmegen? Wij bouwen relevante, redactionele links die je autoriteit én je posities in Google verhogen. Geen linkspam.",
    "intro": "Autoriteit opbouwen zonder trucjes. We plaatsen links op sites die er in jouw markt écht toe doen — regionaal in Nijmegen en landelijk in je vakgebied.",
    "bullets": [
      "Alleen redactionele plaatsingen op relevante sites",
      "Volledige transparantie: je ziet elke link en wat die kost",
      "Linkprofiel dat past bij je concurrentie, niet bij een pakket"
    ],
    "sections": [
      {
        "h": "Hoe wij linkbuilding aanpakken",
        "p": "We analyseren eerst je huidige linkprofiel en dat van je concurrenten in Nijmegen. Daarna bepalen we welk type links ontbreekt: lokale vermeldingen, brancherelevante artikelen of sterke landelijke media. Elke plaatsing keur je vooraf goed."
      },
      {
        "h": "Wat we niet doen",
        "p": "Geen linknetwerken, geen PBN's, geen honderd links voor een vast bedrag. Dat is linkspam en helpt niet — het kost je op termijn posities in plaats van dat het ze oplevert."
      },
      {
        "h": "Linkbuilding als onderdeel van je SEO",
        "p": "Links werken alleen als de pagina waarnaar je linkt goed is. We combineren linkbuilding daarom altijd met content en techniek, zodat de autoriteit ook echt landt op je commerciële pagina's."
      }
    ],
    "faq": [
      {
        "q": "Hoeveel links heb ik nodig?",
        "a": "Dat hangt af van je concurrentie. We rekenen dat voor je uit op basis van de linkprofielen van de partijen die nu boven je staan."
      },
      {
        "q": "Wat kost linkbuilding?",
        "a": "We werken met een maandelijks linkbudget vanaf € 500,-. Je ziet precies welk deel naar plaatsing gaat en welk deel naar werk."
      },
      {
        "q": "Zijn links nog relevant in 2026?",
        "a": "Ja. Links blijven een van de sterkste ranking-signalen en bepalen ook mede of AI-zoekmachines je als betrouwbare bron zien."
      }
    ],
    "related": [
      {
        "label": "Linkbuilding uitbesteden",
        "to": "/online-marketing/linkbuilding-uitbesteden"
      },
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "Tarieven linkbuilding",
        "to": "/tarieven-linkbuilding"
      }
    ]
  },
  "seo-bureau": {
    "eyebrow": "SEO-bureau",
    "h1": "SEO-bureau dat verder kijkt dan Google alleen",
    "title": "SEO-bureau voor het MKB | B. Analyzed",
    "description": "Op zoek naar een SEO-bureau? B. Analyzed uit Venlo werkt aan zichtbaarheid in Google én in AI-zoekmachines. Beoordeeld met een 9,8 uit 47 reviews.",
    "intro": "Een SEO-bureau zonder accountmanagers en zonder rapportages die je niet begrijpt. Je werkt direct met de specialist die ook het werk doet.",
    "bullets": [
      "Eén vast aanspreekpunt met 15 jaar ervaring",
      "Maandelijkse videorapportage in gewone taal",
      "Zichtbaarheid in Google én in ChatGPT, Gemini en Perplexity"
    ],
    "sections": [
      {
        "h": "Waar je een bureau voor inhuurt",
        "p": "Niet voor een lijst met zoekwoorden, maar voor omzet. We werken vanuit vier pijlers — SEO, GEO, Ads en CRO — en kiezen samen waar jouw groei nu het meeste vastloopt."
      },
      {
        "h": "Hoe we werken",
        "p": "We starten met een scan en een nulmeting. Daarna een plan van 90 dagen met duidelijke prioriteiten. Elke maand kijken we samen naar de cijfers en sturen we bij."
      },
      {
        "h": "Je verdient je investering terug",
        "p": "We werken net zo lang door tot je meetbaar resultaat boekt. Dat is geen marketingbelofte maar de manier waarop we onze samenwerkingen inrichten."
      }
    ],
    "faq": [
      {
        "q": "Zit ik vast aan een contract?",
        "a": "We werken met maandelijkse samenwerkingen na een startperiode van drie maanden — de tijd die nodig is om resultaat te kunnen laten zien."
      },
      {
        "q": "Voor welke bedrijven werken jullie?",
        "a": "MKB-bedrijven in Nederland en België, van dienstverleners tot webshops en maakbedrijven."
      },
      {
        "q": "Wat maakt jullie anders?",
        "a": "We werken al aan GEO — zichtbaarheid in AI-zoekmachines — terwijl veel bureaus nog puur op Google sturen."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-consultant": {
    "eyebrow": "SEO-consultant",
    "h1": "SEO-consultant die met je meedenkt in plaats van alleen adviseert",
    "title": "SEO-consultant inhuren | B. Analyzed",
    "description": "SEO-consultant nodig? Strategisch advies, een concreet plan en begeleiding van je eigen team. Vanaf € 599,- voor een volledige audit.",
    "intro": "Soms heb je geen bureau nodig maar iemand die de juiste richting bepaalt en je team op weg helpt. Dat is precies wat een consultancytraject bij ons inhoudt.",
    "bullets": [
      "Onafhankelijke analyse van je huidige situatie",
      "Concreet plan dat je zelf kunt uitvoeren",
      "Optioneel: maandelijkse sparringsessies met je team"
    ],
    "sections": [
      {
        "h": "Wat een consultant oplevert",
        "p": "Focus. De meeste bedrijven doen te veel tegelijk. Wij bepalen welke drie dingen dit kwartaal het verschil maken en waarom de rest kan wachten."
      },
      {
        "h": "Voor wie",
        "p": "Voor bedrijven met een eigen marketeer of een webbouwer die de uitvoering doet, maar die richting en controle missen."
      },
      {
        "h": "Hoe het traject loopt",
        "p": "Audit, presentatie met prioriteiten, en daarna zo veel of zo weinig begeleiding als je nodig hebt."
      }
    ],
    "faq": [
      {
        "q": "Wat kost een consultancytraject?",
        "a": "Een volledige audit met prioriteitenlijst kost € 599,-. Doorlopende begeleiding spreken we per uur of per maand af."
      },
      {
        "q": "Voeren jullie het ook uit?",
        "a": "Dat kan, maar het hoeft niet. Veel klanten voeren het zelf uit en gebruiken ons als klankbord."
      },
      {
        "q": "Krijg ik een rapport of een gesprek?",
        "a": "Allebei: een werkbaar document plus een videopresentatie waarin we alles doornemen."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-content": {
    "eyebrow": "Content",
    "h1": "SEO-content die zowel Google als AI overtuigt",
    "title": "SEO-content laten schrijven | B. Analyzed",
    "description": "SEO-content die rankt én converteert. Teksten geschreven voor je doelgroep, geoptimaliseerd voor Google en voor AI-zoekmachines.",
    "intro": "Content is de plek waar SEO en GEO samenkomen. Wie duidelijk en volledig antwoord geeft, wordt geciteerd — door Google én door ChatGPT.",
    "bullets": [
      "Zoekwoordenonderzoek als basis, niet als afvinklijst",
      "Teksten in jouw toon, niet in AI-standaardtaal",
      "Structuur die AI-zoekmachines kunnen citeren"
    ],
    "sections": [
      {
        "h": "Waarom veel content niets oplevert",
        "p": "Omdat het geschreven is voor een zoekwoord in plaats van voor een vraag. We beginnen daarom altijd bij de zoekintentie: wat wil iemand op dat moment weten of regelen?"
      },
      {
        "h": "Wat je krijgt",
        "p": "Servicepagina's, blogartikelen en kennisbankpagina's met een heldere opbouw, interne links en schema-markup waar dat helpt."
      },
      {
        "h": "Content en GEO",
        "p": "AI-zoekmachines citeren bronnen die feitelijk, gestructureerd en actueel zijn. We schrijven met die criteria in het achterhoofd."
      }
    ],
    "faq": [
      {
        "q": "Schrijven jullie met AI?",
        "a": "We gebruiken AI als hulpmiddel voor onderzoek en structuur, maar elke tekst wordt door een mens geschreven en gecontroleerd op feiten."
      },
      {
        "q": "Hoeveel content heb ik nodig?",
        "a": "Liever tien sterke pagina's dan honderd dunne. We bepalen op basis van je markt welke pagina's ontbreken."
      },
      {
        "q": "Wat kost een tekst?",
        "a": "Een geoptimaliseerde servicepagina start vanaf € 295,-, inclusief onderzoek en optimalisatie."
      }
    ],
    "related": [
      {
        "label": "SEO-teksten laten schrijven",
        "to": "/online-marketing/seo-teksten-laten-schrijven"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Kennisbank",
        "to": "/kennisbank"
      }
    ]
  },
  "seo-expert": {
    "eyebrow": "SEO-expert",
    "h1": "SEO-expert met 15 jaar ervaring — geen tussenlaag",
    "title": "SEO-expert inhuren | B. Analyzed",
    "description": "SEO-expert nodig? Je werkt direct met de specialist die het werk uitvoert. 15 jaar ervaring, beoordeeld met een 9,8.",
    "intro": "Bij ons spreek je geen accountmanager. Je werkt direct met de persoon die je site analyseert, het plan maakt en het uitvoert.",
    "bullets": [
      "Direct contact met de specialist zelf",
      "Aantoonbare resultaten in competitieve markten",
      "Zowel klassieke SEO als AI-zichtbaarheid"
    ],
    "sections": [
      {
        "h": "Wat een expert toevoegt",
        "p": "Ervaring in het herkennen van patronen. Waar tools honderd aanbevelingen geven, weet een expert welke drie er dit kwartaal toe doen."
      },
      {
        "h": "Waar we goed in zijn",
        "p": "Technische SEO, contentstrategie, lokale zichtbaarheid en het meetbaar maken van alles wat we doen in GA4 en Tag Manager."
      },
      {
        "h": "Hoe je met ons start",
        "p": "Met de gratis SEO & GEO-scan. Daarin zie je binnen twee werkdagen waar je grootste kansen liggen."
      }
    ],
    "faq": [
      {
        "q": "Kan ik jullie per uur inhuren?",
        "a": "Ja, voor advies en sparren werken we ook op uurbasis."
      },
      {
        "q": "Werken jullie met vaste rapportages?",
        "a": "We rapporteren maandelijks met een Loom-video, zodat je ziet én hoort wat er gebeurd is."
      },
      {
        "q": "Doen jullie ook Google Ads?",
        "a": "Ja, Ads is een van onze vier pijlers. Vaak zetten we die in terwijl SEO opbouwt."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-guru": {
    "eyebrow": "SEO",
    "h1": "SEO-guru? Wij houden het liever bij nuchter en meetbaar",
    "title": "SEO-guru of gewoon een goede SEO-specialist? | B. Analyzed",
    "description": "Geen goeroes, wel meetbare SEO. Ontdek hoe wij werken en waarom transparantie meer oplevert dan geheime trucjes.",
    "intro": "In SEO worden veel beloftes gedaan. Wij doen er één: je ziet elke maand precies wat we deden, wat het opleverde en wat er hierna gebeurt.",
    "bullets": [
      "Geen geheime trucs, wel een controleerbaar plan",
      "Cijfers die je zelf kunt narekenen in GA4 en Search Console",
      "Eerlijk advies, ook als SEO niet je beste kanaal is"
    ],
    "sections": [
      {
        "h": "Waarom 'guru' meestal een rode vlag is",
        "p": "Wie garanties geeft op posities, verkoopt lucht. Google en AI-zoekmachines bepalen de ranking; wij bepalen alleen hoe goed jouw site die verdient."
      },
      {
        "h": "Wat wel werkt",
        "p": "Techniek op orde, content die vragen beantwoordt, autoriteit opbouwen en conversie verbeteren. Saai, maar het werkt al vijftien jaar."
      },
      {
        "h": "Onze belofte",
        "p": "We werken net zo lang door tot je meetbaar resultaat boekt. Je verdient je investering sowieso terug."
      }
    ],
    "faq": [
      {
        "q": "Garanderen jullie posities?",
        "a": "Nee. Niemand kan dat eerlijk doen. We garanderen wel inspanning tot er resultaat is."
      },
      {
        "q": "Wat als SEO niet past bij mijn markt?",
        "a": "Dan zeggen we dat. Soms is Google Ads of CRO een slimmere eerste stap."
      },
      {
        "q": "Hoe meten jullie succes?",
        "a": "Op aanvragen en omzet, niet op posities alleen."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-partner": {
    "eyebrow": "Samenwerking",
    "h1": "SEO-partner voor bureaus en bedrijven",
    "title": "SEO-partner worden | B. Analyzed",
    "description": "Op zoek naar een SEO-partner? Wij werken als whitelabel-partner voor webbureaus en als vaste SEO-partner voor MKB-bedrijven.",
    "intro": "Een partner in plaats van een leverancier: we denken mee over je aanbod, je website en je groei — niet alleen over rankings.",
    "bullets": [
      "Whitelabel samenwerking mogelijk voor webbureaus",
      "Vaste contactpersoon en heldere afspraken",
      "Rapportage die je zonder aanpassing kunt doorsturen"
    ],
    "sections": [
      {
        "h": "Voor webbureaus",
        "p": "Jij bouwt de sites, wij zorgen dat ze gevonden worden. Onder jouw naam of samen aan tafel bij de klant — wat jij prettiger vindt."
      },
      {
        "h": "Voor bedrijven",
        "p": "Een vaste partner die je markt kent en meedenkt over meer dan alleen zoekmachines: meting, conversie en AI-zichtbaarheid horen erbij."
      },
      {
        "h": "Hoe we starten",
        "p": "Met een kennismaking en een gezamenlijke analyse van één klant of één site, zodat je weet hoe we werken voordat je je vastlegt."
      }
    ],
    "faq": [
      {
        "q": "Doen jullie whitelabel?",
        "a": "Ja, inclusief rapportages in jouw huisstijl."
      },
      {
        "q": "Wat zijn de voorwaarden?",
        "a": "Geen minimum aantal klanten. We werken per project of per maand."
      },
      {
        "q": "Kunnen jullie ook Ads en CRO oppakken?",
        "a": "Ja, dat zijn twee van onze vier pijlers."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "seo-score": {
    "eyebrow": "SEO-score",
    "h1": "Wat zegt je SEO-score eigenlijk — en wat moet je ermee?",
    "title": "SEO-score bepalen en verbeteren | B. Analyzed",
    "description": "Wil je je SEO-score weten? Vraag de gratis SEO & GEO-scan aan en krijg een persoonlijke video-analyse met de drie belangrijkste verbeterpunten.",
    "intro": "Een cijfer uit een gratis tool zegt weinig. Wat je nodig hebt is inzicht in welke punten in jouw markt daadwerkelijk posities kosten.",
    "bullets": [
      "Score op techniek, content, autoriteit én AI-zichtbaarheid",
      "Vergelijking met je drie belangrijkste concurrenten",
      "Concrete prioriteiten in plaats van een lange lijst"
    ],
    "sections": [
      {
        "h": "Waarom tool-scores misleiden",
        "p": "Een score van 92 zegt niets als je concurrent honderd relevante links meer heeft. Score altijd relatief, niet absoluut."
      },
      {
        "h": "Hoe wij scoren",
        "p": "We beoordelen vier gebieden: technische gezondheid, contentdekking, autoriteit en conversie. Daarnaast checken we of AI-zoekmachines je überhaupt kennen."
      },
      {
        "h": "En daarna",
        "p": "Je krijgt een videopresentatie met de drie acties die het meeste effect hebben. Die kun je zelf uitvoeren of aan ons uitbesteden."
      }
    ],
    "faq": [
      {
        "q": "Is de scan echt gratis?",
        "a": "Ja, en je krijgt een persoonlijke video-analyse in plaats van een automatisch PDF-rapport."
      },
      {
        "q": "Hoe lang duurt het?",
        "a": "Je ontvangt de analyse binnen twee werkdagen."
      },
      {
        "q": "Zit ik ergens aan vast?",
        "a": "Nee. Geen verkooppraatjes, geen verplichtingen."
      }
    ],
    "related": [
      {
        "label": "Gratis SEO & GEO scan",
        "to": "/gratis-seo-scan"
      },
      {
        "label": "Gratis AI-scan",
        "to": "/gratis-ai-scan"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "online-marketing-bureau-nederland": {
    "eyebrow": "Online marketing",
    "h1": "Online marketingbureau voor heel Nederland",
    "title": "Online marketingbureau Nederland | B. Analyzed",
    "description": "Online marketingbureau uit Limburg, actief in heel Nederland en België. SEO, GEO, Google Ads en conversie-optimalisatie voor het MKB.",
    "intro": "We zitten in Venlo en werken door heel Nederland. Onze klanten zitten van Groningen tot Maastricht — samenwerken op afstand doen we al vijftien jaar.",
    "bullets": [
      "Vier pijlers: SEO, GEO, Ads en CRO",
      "Videorapportage in plaats van dashboards die niemand opent",
      "Vaste specialist, geen wisselende accountmanagers"
    ],
    "sections": [
      {
        "h": "Landelijk werken, lokaal denken",
        "p": "Of je nu landelijk levert of in één stad actief bent: we stemmen de strategie af op je werkgebied en je verkoopcyclus."
      },
      {
        "h": "Waar we mee beginnen",
        "p": "Met de vraag wat je groei nu tegenhoudt. Soms is dat zichtbaarheid, vaak is het conversie of meting."
      },
      {
        "h": "Samenwerken op afstand",
        "p": "Kennismaking en maandelijkse sessies via videocall, met daarnaast een Loom-video die je op je eigen moment terugkijkt."
      }
    ],
    "faq": [
      {
        "q": "Moeten we elkaar fysiek ontmoeten?",
        "a": "Dat mag, maar het hoeft niet. De meeste samenwerkingen lopen volledig op afstand."
      },
      {
        "q": "Werken jullie ook in België?",
        "a": "Ja, we bedienen ook Vlaamse klanten."
      },
      {
        "q": "Welke branches?",
        "a": "Vooral MKB-dienstverleners, maakbedrijven en webshops."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "online-marketing-venlo": {
    "eyebrow": "Online marketing",
    "h1": "Online marketingbureau in Venlo",
    "title": "Online marketingbureau Venlo | B. Analyzed",
    "description": "Online marketingbureau in Venlo. SEO, GEO, Google Ads en conversie-optimalisatie voor ondernemers in Noord-Limburg.",
    "intro": "Uit Venlo, voor Venlo — en voor de rest van Nederland. We kennen de regio, de grensmarkt en de bedrijven die hier actief zijn.",
    "bullets": [
      "Lokale zichtbaarheid in Venlo en omstreken",
      "Ook Duitstalige zichtbaarheid voor grensbedrijven",
      "Vier pijlers onder één dak"
    ],
    "sections": [
      {
        "h": "Waarom lokaal helpt",
        "p": "Korte lijnen. Even langslopen kan, en we kennen de markt waarin je concurreert."
      },
      {
        "h": "Wat we doen",
        "p": "Van SEO en Google Bedrijfsprofiel tot Ads-campagnes en het verbeteren van je formulieren."
      },
      {
        "h": "Grensregio",
        "p": "Veel Venlose bedrijven leveren ook in Duitsland. We denken mee over meertalige zichtbaarheid."
      }
    ],
    "faq": [
      {
        "q": "Kunnen we langskomen?",
        "a": "Graag. Bel of app even en we plannen een afspraak in."
      },
      {
        "q": "Werken jullie alleen lokaal?",
        "a": "Nee, we werken landelijk. Venlo is onze thuisbasis."
      },
      {
        "q": "Wat kost het?",
        "a": "Audits vanaf € 599,-, doorlopende begeleiding vanaf € 999,- per maand."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "marketingbureau-limburg": {
    "eyebrow": "Online marketing",
    "h1": "Marketingbureau in Limburg dat op cijfers stuurt",
    "title": "Marketingbureau Limburg | B. Analyzed",
    "description": "Marketingbureau in Limburg voor het MKB. Zichtbaarheid in Google en AI, campagnes die renderen en websites die converteren.",
    "intro": "Nuchter, direct en meetbaar. Zo werken we vanuit Venlo voor ondernemers in heel Limburg.",
    "bullets": [
      "Eén aanspreekpunt voor SEO, GEO, Ads en CRO",
      "Maandelijkse videorapportage in gewone taal",
      "Beoordeeld met een 9,8 uit 47 reviews"
    ],
    "sections": [
      {
        "h": "Wat je van een Limburgs bureau mag verwachten",
        "p": "Geen grote woorden, wel afspraken die we nakomen. En iemand die je gewoon te spreken krijgt."
      },
      {
        "h": "Onze aanpak",
        "p": "Nulmeting, plan van 90 dagen, maandelijkse bijsturing. Alles meetbaar in GA4 en Search Console."
      },
      {
        "h": "Voor wie",
        "p": "MKB-bedrijven met ambitie, van installateurs en advocaten tot webshops en maakbedrijven."
      }
    ],
    "faq": [
      {
        "q": "In welke plaatsen zijn jullie actief?",
        "a": "In heel Limburg: onder meer Venlo, Roermond, Maastricht, Venray en Horst aan de Maas."
      },
      {
        "q": "Doen jullie ook social media?",
        "a": "Ja, als ondersteunende dienst naast de vier pijlers."
      },
      {
        "q": "Hoe start ik?",
        "a": "Met de gratis SEO & GEO-scan."
      }
    ],
    "related": [
      {
        "label": "SEO uitbesteden",
        "to": "/online-marketing/seo-uitbesteden"
      },
      {
        "label": "GEO-optimalisatie",
        "to": "/online-marketing/geo-optimalisatie"
      },
      {
        "label": "Tarieven",
        "to": "/tarieven-seo"
      }
    ]
  },
  "kosten-online-marketing": {
    "eyebrow": "Tarieven",
    "h1": "Wat kost online marketing in 2026?",
    "title": "Kosten online marketing — tarieven en budgetten | B. Analyzed",
    "description": "Wat kost online marketing? Realistische budgetten voor SEO, GEO, Google Ads en CRO voor het MKB, inclusief onze eigen tarieven.",
    "intro": "Eerlijke cijfers in plaats van 'het hangt ervan af'. Hieronder lees je met welke budgetten MKB-bedrijven realistisch resultaat halen.",
    "bullets": [
      "Audit vanaf € 599,- eenmalig",
      "Doorlopende begeleiding vanaf € 999,- per maand",
      "Advertentiebudget staat los van onze fee"
    ],
    "sections": [
      {
        "h": "Waar je budget naartoe gaat",
        "p": "Ongeveer de helft naar uitvoering (content, techniek), een kwart naar analyse en sturing en een kwart naar autoriteit en tests."
      },
      {
        "h": "Wat is realistisch",
        "p": "Voor een lokale dienstverlener is € 750,- tot € 1.500,- per maand gebruikelijk. In landelijke, competitieve markten begint het eerder rond € 2.000,-."
      },
      {
        "h": "Wanneer verdien je het terug",
        "p": "Als je gemiddelde klantwaarde en conversieratio bekend zijn, rekenen we vooraf uit hoeveel extra aanvragen nodig zijn om break-even te draaien."
      }
    ],
    "faq": [
      {
        "q": "Zijn er opstartkosten?",
        "a": "Alleen als een uitgebreide audit nodig is. Die verrekenen we bij een doorlopende samenwerking."
      },
      {
        "q": "Zit advertentiebudget bij de prijs in?",
        "a": "Nee, dat betaal je rechtstreeks aan Google of Meta."
      },
      {
        "q": "Kan ik maandelijks opzeggen?",
        "a": "Na de eerste drie maanden is de samenwerking maandelijks opzegbaar."
      }
    ],
    "related": [
      {
        "label": "Tarieven SEO",
        "to": "/tarieven-seo"
      },
      {
        "label": "Tarieven social media",
        "to": "/tarieven-social-media"
      },
      {
        "label": "Tarieven linkbuilding",
        "to": "/tarieven-linkbuilding"
      }
    ]
  },
  "tarieven-social-media": {
    "eyebrow": "Tarieven",
    "h1": "Tarieven social media marketing",
    "title": "Tarieven social media marketing | B. Analyzed",
    "description": "Wat kost social media marketing? Bekijk onze pakketten voor contentcreatie, planning en advertising — vanaf € 495,- per maand.",
    "intro": "Social media werkt als het aansluit op de rest van je marketing. Daarom zijn onze pakketten compact en gericht op bereik dat iets oplevert.",
    "bullets": [
      "Vanaf € 495,- per maand voor contentbeheer",
      "Advertising vanaf € 395,- per maand exclusief mediabudget",
      "Altijd gekoppeld aan je meting in GA4"
    ],
    "sections": [
      {
        "h": "Wat zit er in een pakket",
        "p": "Contentkalender, creatie van posts, plaatsing en maandelijkse analyse. Advertising is een losse module."
      },
      {
        "h": "Hoeveel budget heb je nodig",
        "p": "Voor lokale campagnes werkt € 300,- tot € 800,- mediabudget per maand vaak goed. Landelijk ligt dat hoger."
      },
      {
        "h": "Wanneer is social slim",
        "p": "Als je doelgroep je nog niet zoekt. Voor bestaande vraag is SEO of Ads meestal rendabeler."
      }
    ],
    "faq": [
      {
        "q": "Welke kanalen doen jullie?",
        "a": "LinkedIn, Instagram, Facebook en waar relevant TikTok."
      },
      {
        "q": "Maken jullie ook video?",
        "a": "Korte video's en montage van bestaand materiaal, ja."
      },
      {
        "q": "Zit ik vast aan een jaarcontract?",
        "a": "Nee, na drie maanden maandelijks opzegbaar."
      }
    ],
    "related": [
      {
        "label": "Social media marketing",
        "to": "/online-marketing/social-media-marketing"
      },
      {
        "label": "Kosten online marketing",
        "to": "/kosten-online-marketing"
      },
      {
        "label": "Tarieven SEO",
        "to": "/tarieven-seo"
      }
    ]
  },
  "tarieven-linkbuilding": {
    "eyebrow": "Tarieven",
    "h1": "Tarieven linkbuilding",
    "title": "Tarieven linkbuilding | B. Analyzed",
    "description": "Wat kost linkbuilding? Transparante tarieven per link en per maand. Alleen relevante, redactionele plaatsingen — geen linkspam.",
    "intro": "Bij linkbuilding betaal je voor relevantie, niet voor aantallen. Hieronder lees je precies hoe onze tarieven zijn opgebouwd.",
    "bullets": [
      "Vanaf € 500,- linkbudget per maand",
      "Per plaatsing zichtbaar wat de kosten zijn",
      "Elke link vooraf ter goedkeuring"
    ],
    "sections": [
      {
        "h": "Prijs per link",
        "p": "Lokale en brancherelevante plaatsingen liggen doorgaans tussen € 150,- en € 600,-. Sterke landelijke media kosten meer."
      },
      {
        "h": "Wat je betaalt naast de plaatsing",
        "p": "Onderzoek, benadering en het schrijven van de tekst. Dat rekenen we in het maandbedrag, niet per link."
      },
      {
        "h": "Waarom geen pakketten van 50 links",
        "p": "Omdat dat linkspam is en niet helpt. Zulke profielen kosten je op termijn posities."
      }
    ],
    "faq": [
      {
        "q": "Hoeveel links per maand?",
        "a": "Meestal twee tot vijf, afhankelijk van budget en markt."
      },
      {
        "q": "Krijg ik een overzicht?",
        "a": "Ja, maandelijks met de link, de site en de kosten."
      },
      {
        "q": "Doen jullie ook interne links?",
        "a": "Ja, dat is standaard onderdeel van SEO."
      }
    ],
    "related": [
      {
        "label": "Linkbuilding uitbesteden",
        "to": "/online-marketing/linkbuilding-uitbesteden"
      },
      {
        "label": "Kosten online marketing",
        "to": "/kosten-online-marketing"
      },
      {
        "label": "Tarieven SEO",
        "to": "/tarieven-seo"
      }
    ]
  },
  "online-marketing-strategie": {
    "eyebrow": "Strategie",
    "h1": "Online marketingstrategie die begint bij je cijfers",
    "title": "Online marketingstrategie voor het MKB | B. Analyzed",
    "description": "Een online marketingstrategie zonder aannames: nulmeting, doelgroep, kanaalkeuze en een plan van 90 dagen dat je kunt uitvoeren.",
    "intro": "Strategie is bij ons geen document van veertig pagina's, maar een keuze: waar zetten we de komende drie maanden op in, en waarom niet op de rest?",
    "bullets": [
      "Nulmeting van verkeer, conversie en zichtbaarheid",
      "Kanaalkeuze op basis van je verkoopcyclus",
      "Plan van 90 dagen met eigenaar en deadline per actie"
    ],
    "sections": [
      {
        "h": "Van doel naar kanaal",
        "p": "We beginnen bij je omzetdoel en rekenen terug naar het aantal aanvragen, bezoekers en zoekwoorden dat daarvoor nodig is."
      },
      {
        "h": "Vier pijlers wegen",
        "p": "SEO bouwt op, GEO bereidt je voor op AI-zoekgedrag, Ads levert nu verkeer en CRO maakt alles rendabeler. Zelden zet je alles tegelijk in."
      },
      {
        "h": "Uitvoering",
        "p": "Je voert het zelf uit, wij doen het, of we doen het samen. Het plan is van jou, ook als je met een ander verder gaat."
      }
    ],
    "faq": [
      {
        "q": "Wat kost een strategietraject?",
        "a": "Vanaf € 1.250,- eenmalig, inclusief presentatie en plan van 90 dagen."
      },
      {
        "q": "Hoe lang duurt het?",
        "a": "Doorgaans twee tot drie weken."
      },
      {
        "q": "Is dit hetzelfde als een audit?",
        "a": "Nee. Een audit kijkt naar je site, een strategie kijkt naar je markt en je doelen."
      }
    ],
    "related": [
      {
        "label": "Strategie",
        "to": "/online-marketing/strategie"
      },
      {
        "label": "Alle diensten",
        "to": "/online-marketing"
      },
      {
        "label": "Cases",
        "to": "/online-marketing-cases"
      }
    ]
  },
  "klantwaarderingen": {
    "eyebrow": "Reviews",
    "h1": "Klantwaarderingen: beoordeeld met een 9,8",
    "title": "Klantwaarderingen — beoordeeld met een 9,8 | B. Analyzed",
    "description": "Lees wat klanten van B. Analyzed vinden. Gemiddeld een 9,8 op basis van 47 reviews van MKB-ondernemers in Nederland en België.",
    "intro": "Een 9,8 gemiddeld uit 47 reviews. Wat klanten het vaakst noemen: duidelijke uitleg, korte lijnen en resultaat dat je terugziet in aanvragen.",
    "bullets": [
      "47 reviews, gemiddeld een 9,8",
      "Klanten uit heel Nederland en België",
      "Vaste specialist, geen accountmanagers"
    ],
    "sections": [
      {
        "h": "Waar klanten ons op beoordelen",
        "p": "Op begrijpelijkheid, bereikbaarheid en resultaat. De maandelijkse Loom-video wordt daarbij het vaakst genoemd."
      },
      {
        "h": "Zelf een review lezen",
        "p": "Onze reviews staan openbaar bij Google. Je kunt ze daar allemaal teruglezen, inclusief de toelichting van klanten."
      },
      {
        "h": "Wil je klanten spreken?",
        "p": "Vraag het gerust. We brengen je graag in contact met een klant uit een vergelijkbare branche."
      }
    ],
    "faq": [
      {
        "q": "Waar staan de reviews?",
        "a": "Bij Google, gekoppeld aan ons bedrijfsprofiel."
      },
      {
        "q": "Hoeveel reviews zijn het?",
        "a": "47 op dit moment, met een gemiddelde van 9,8."
      },
      {
        "q": "Mag ik referenties spreken?",
        "a": "Ja, dat regelen we graag."
      }
    ],
    "related": [
      {
        "label": "Cases",
        "to": "/online-marketing-cases"
      },
      {
        "label": "Over B. Analyzed",
        "to": "/online-marketing-bedrijf"
      },
      {
        "label": "Contact",
        "to": "/contact"
      }
    ]
  }
};
