export type PostSection = { h: string; p: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  excerpt: string;
  sections: PostSection[];
};

export const POSTS: Record<string, Post> = {
  "top-10-zoekmachines-in-nederland-welke-zoekmachines-hebben-het-grootste-marktaandeel": {
    "slug": "top-10-zoekmachines-in-nederland-welke-zoekmachines-hebben-het-grootste-marktaandeel",
    "title": "Top 10 zoekmachines in Nederland: wie heeft het grootste marktaandeel?",
    "description": "Welke zoekmachines gebruiken Nederlanders in 2026? Bekijk het marktaandeel van Google, Bing, DuckDuckGo en de opkomst van AI-zoekmachines als ChatGPT.",
    "date": "2026-01-14",
    "tag": "SEO",
    "excerpt": "Google domineert nog steeds, maar AI-zoekmachines pakken in rap tempo aandeel. Dit zijn de tien zoekmachines die er in Nederland toe doen.",
    "sections": [
      {
        "h": "Google blijft dominant, maar minder absoluut",
        "p": "Google heeft in Nederland nog altijd ruim negentig procent van het klassieke zoekverkeer. Wat verandert, is waar dat zoekverkeer eindigt: steeds vaker krijgt de gebruiker een antwoord bovenaan de pagina en klikt hij nergens meer op. Zichtbaarheid is daarmee belangrijker geworden dan alleen posities."
      },
      {
        "h": "De tien zoekmachines die ertoe doen",
        "p": "1. Google, 2. Bing, 3. ChatGPT Search, 4. DuckDuckGo, 5. Yahoo, 6. Ecosia, 7. Perplexity, 8. Google Gemini, 9. Startpage, 10. Brave Search. Nummer drie, zeven en acht bestonden vijf jaar geleden nog niet als zoekkanaal en zijn nu al goed voor een merkbaar deel van de kwalitatieve bezoekers."
      },
      {
        "h": "Wat dit betekent voor je vindbaarheid",
        "p": "Optimaliseren voor Google alleen is niet meer genoeg. AI-zoekmachines kiezen bronnen op basis van duidelijkheid, structuur en betrouwbaarheid. Dat noemen we GEO: generative engine optimization. Wie nu begint met het gestructureerd beantwoorden van vragen, wordt de komende jaren vaker geciteerd."
      }
    ]
  },
  "generative-engine-optimization-geo-jouw-gids": {
    "slug": "generative-engine-optimization-geo-jouw-gids",
    "title": "Generative Engine Optimization (GEO): jouw complete gids voor 2026",
    "description": "Wat is GEO en hoe zorg je dat ChatGPT, Gemini en Perplexity jouw bedrijf noemen? Praktische gids met concrete stappen voor het MKB.",
    "date": "2026-02-03",
    "tag": "GEO",
    "excerpt": "AI-zoekmachines beantwoorden vragen zonder dat iemand doorklikt. GEO zorgt dat jouw bedrijf in dat antwoord staat.",
    "sections": [
      {
        "h": "Wat is GEO precies",
        "p": "GEO is het optimaliseren van je content zodat generatieve zoekmachines je gebruiken als bron. Waar SEO zich richt op posities in een lijst, richt GEO zich op vermeldingen in een antwoord. De onderliggende techniek verschilt, de basis niet: duidelijke, feitelijke en goed gestructureerde content."
      },
      {
        "h": "Wat AI-zoekmachines belonen",
        "p": "Concrete cijfers, duidelijke definities, gestructureerde koppen, schema-markup en consistentie tussen je website en externe bronnen. Vage marketingtaal wordt zelden geciteerd; een helder antwoord van drie zinnen wel."
      },
      {
        "h": "Zo begin je",
        "p": "Breng eerst in kaart of AI-modellen je nu al kennen. Stel dezelfde vragen die je klanten stellen aan ChatGPT, Gemini en Perplexity en noteer welke partijen genoemd worden. Vul daarna de gaten in je content, versterk je vermeldingen op externe bronnen en meet elk kwartaal opnieuw."
      }
    ]
  },
  "content-schrijven-voor-ai": {
    "slug": "content-schrijven-voor-ai",
    "title": "Content schrijven voor AI: zo word je geciteerd in plaats van genegeerd",
    "description": "Hoe schrijf je content die AI-zoekmachines citeren? Structuur, feiten en formuleringen die werken in ChatGPT, Gemini en Perplexity.",
    "date": "2026-03-11",
    "tag": "GEO",
    "excerpt": "Schrijven voor AI is niet schrijven mét AI. Dit zijn de regels die bepalen of je tekst wordt overgenomen.",
    "sections": [
      {
        "h": "Antwoord eerst, uitleg daarna",
        "p": "Zet het antwoord in de eerste twee zinnen onder de kop. AI-modellen extraheren die passages het vaakst. De onderbouwing en nuance zet je eronder, voor de lezer die verder wil."
      },
      {
        "h": "Wees concreet en controleerbaar",
        "p": "Noem bedragen, percentages, doorlooptijden en bronnen. Een zin als 'wij leveren snel resultaat' wordt nooit geciteerd; 'lokale verbeteringen zijn meestal binnen vier weken zichtbaar' wel."
      },
      {
        "h": "Structuur is inhoud",
        "p": "Gebruik logische koppen die vragen zijn, korte alinea's, lijsten waar dat kan en FAQ-markup. Zo kan een model precies het stuk pakken dat bij de vraag hoort."
      }
    ]
  },
  "ahrefs-alternatieven-in-2026": {
    "slug": "ahrefs-alternatieven-in-2026",
    "title": "Ahrefs-alternatieven in 2026: welke SEO-tool past bij jouw budget?",
    "description": "Op zoek naar een alternatief voor Ahrefs? Vergelijking van Semrush, Sitebulb, Screaming Frog en betaalbare tools voor het MKB.",
    "date": "2026-04-08",
    "tag": "Tools",
    "excerpt": "Ahrefs is krachtig maar prijzig. Voor veel MKB-bedrijven volstaat een combinatie van goedkopere tools.",
    "sections": [
      {
        "h": "Waar je een tool echt voor nodig hebt",
        "p": "Voor drie dingen: zoekwoordenonderzoek, linkanalyse en technische controle. Zodra je weet welke van die drie je wekelijks gebruikt, wordt de keuze een stuk simpeler."
      },
      {
        "h": "De serieuze alternatieven",
        "p": "Semrush voor breedte, Sitebulb en Screaming Frog voor techniek, en Search Console voor je eigen data. Die laatste is gratis en bevat vaak meer bruikbare informatie dan een betaalde tool."
      },
      {
        "h": "Ons advies voor het MKB",
        "p": "Begin met Search Console en een crawler. Huur pas een dure tool in als je er wekelijks beslissingen mee neemt. Een tool zonder proces levert alleen maar rapporten op."
      }
    ]
  },
  "omnichannel-marketing": {
    "slug": "omnichannel-marketing",
    "title": "Omnichannel marketing voor het MKB: samenhang boven kanalen",
    "description": "Omnichannel marketing hoeft niet ingewikkeld te zijn. Zo laat je SEO, Ads, e-mail en social samenwerken zonder extra budget.",
    "date": "2026-05-19",
    "tag": "Strategie",
    "excerpt": "Kanalen los optimaliseren kost geld. Kanalen laten samenwerken levert het op.",
    "sections": [
      {
        "h": "Wat omnichannel wel en niet is",
        "p": "Het is niet overal aanwezig zijn. Het is zorgen dat iemand die je via Google vindt, later herkend wordt in je nieuwsbrief en je advertentie — met dezelfde boodschap en hetzelfde aanbod."
      },
      {
        "h": "Begin bij de meting",
        "p": "Zonder correcte meting in GA4 en Tag Manager weet je niet welk kanaal welke aanvraag heeft aangeraakt. Dat is stap één, nog voordat je een euro extra uitgeeft."
      },
      {
        "h": "Praktisch stappenplan",
        "p": "Kies één hoofdkanaal dat vraag oplevert, één kanaal dat vraag creëert en één kanaal voor herhaling. Voor de meeste MKB-bedrijven zijn dat SEO, Ads en e-mail."
      }
    ]
  },
  "wat-kost-een-website-laten-bouwen": {
    "slug": "wat-kost-een-website-laten-bouwen",
    "title": "Wat kost een website laten bouwen in 2026?",
    "description": "Realistische prijzen voor een zakelijke website: van een eenvoudige site tot een maatwerk WordPress-project, inclusief SEO-basis.",
    "date": "2026-06-02",
    "tag": "Website",
    "excerpt": "Een website kost tussen de 2.500 en 25.000 euro. Het verschil zit vooral in strategie, content en techniek.",
    "sections": [
      {
        "h": "De bandbreedtes",
        "p": "Een eenvoudige zakelijke site met een goede basis kost doorgaans € 2.500,- tot € 6.000,-. Maatwerk met koppelingen en uitgebreide content zit tussen € 10.000,- en € 25.000,-."
      },
      {
        "h": "Waar het geld naartoe gaat",
        "p": "Zelden naar het ontwerp alleen. De grootste posten zijn contentproductie, techniek en de inrichting van meting en conversie."
      },
      {
        "h": "De fout die het meeste kost",
        "p": "Een site laten bouwen zonder SEO-plan. Je verliest dan bestaande posities bij de livegang. Zorg altijd voor een redirectplan en behoud van bestaande URL's."
      }
    ]
  },
  "taxibedrijf-adwords-tips": {
    "slug": "taxibedrijf-adwords-tips",
    "title": "Google Ads voor een taxibedrijf: 7 tips die direct ritten opleveren",
    "description": "Google Ads voor taxibedrijven: zo verlaag je je kosten per rit met slimme zoektermen, locatietargeting en belextensies.",
    "date": "2025-11-20",
    "tag": "Google Ads",
    "excerpt": "Taxiritten worden vaak binnen enkele minuten geboekt. Je campagne moet daarop ingericht zijn.",
    "sections": [
      {
        "h": "Stuur op bellen, niet op klikken",
        "p": "Zet belextensies aan en meet gesprekken als conversie. Voor spoedvervoer is een telefoontje waardevoller dan een formulier."
      },
      {
        "h": "Werk met strakke locatiecirkels",
        "p": "Beperk je bereik tot het gebied waarin je rendabel kunt rijden en verhoog je bod rond stations, vliegvelden en ziekenhuizen."
      },
      {
        "h": "Sluit ruis uit",
        "p": "Zoektermen als 'taxi kosten berekenen' of vacaturezoekopdrachten kosten geld en leveren geen rit op. Bouw wekelijks je lijst met uitsluitingszoekwoorden uit."
      }
    ]
  },
  "de-beste-local-strategie-voor-2026": {
    "slug": "de-beste-local-strategie-voor-2026",
    "title": "De beste local SEO-strategie voor 2026",
    "description": "Local SEO in 2026: Google Bedrijfsprofiel, reviews, lokale content en AI-zichtbaarheid. Concreet stappenplan voor lokale ondernemers.",
    "date": "2026-01-28",
    "tag": "Local SEO",
    "excerpt": "Lokaal winnen is nog steeds het snelste rendement voor MKB-bedrijven met een werkgebied.",
    "sections": [
      {
        "h": "Je Bedrijfsprofiel is je belangrijkste pagina",
        "p": "Voor veel lokale zoekopdrachten wordt je Google Bedrijfsprofiel vaker bekeken dan je website. Categorieën, diensten, foto's en reviews bepalen daar het grootste deel van je zichtbaarheid."
      },
      {
        "h": "Reviews zijn ranking én conversie",
        "p": "Vraag structureel om reviews en reageer op elke review. Het effect op je klikratio is vaak groter dan een positie erbij."
      },
      {
        "h": "Lokale content zonder dubbele pagina's",
        "p": "Maak per plaats alleen een pagina als je daar echt iets te vertellen hebt. Twintig identieke pagina's met alleen een andere plaatsnaam werken averechts."
      }
    ]
  },
  "seo-automatisering-voor-het-mkb-efficienter-en-slimmer-groeien": {
    "slug": "seo-automatisering-voor-het-mkb-efficienter-en-slimmer-groeien",
    "title": "SEO-automatisering voor het MKB: efficiënter en slimmer groeien",
    "description": "Welke SEO-taken kun je automatiseren en welke juist niet? Praktische voorbeelden met scripts, AI en monitoring.",
    "date": "2025-12-09",
    "tag": "Tools",
    "excerpt": "Automatiseer de controle, niet de creativiteit. Zo houd je tijd over voor het werk dat écht rankt.",
    "sections": [
      {
        "h": "Wat je prima kunt automatiseren",
        "p": "Monitoring van indexering, 404-meldingen, positiewijzigingen, schema-validatie en rapportage. Dit is repetitief werk waar een mens weinig toevoegt."
      },
      {
        "h": "Wat je nooit moet automatiseren",
        "p": "Contentproductie zonder controle, linkbuilding op volume en het interpreteren van cijfers. Daar gaat het bij de meeste bedrijven mis."
      },
      {
        "h": "Een praktische opzet",
        "p": "Wekelijkse automatische checks met een melding wanneer iets afwijkt, en één maandelijkse handmatige analyse. Dat is voor het MKB de beste balans tussen tijd en kwaliteit."
      }
    ]
  },
  "top-20-gratis-online-bedrijvengidsen-van-nederland-2": {
    "slug": "top-20-gratis-online-bedrijvengidsen-van-nederland-2",
    "title": "Top 20 gratis online bedrijvengidsen van Nederland",
    "description": "Twintig gratis bedrijvengidsen waar je je bedrijf kunt aanmelden voor betere lokale vindbaarheid en consistente NAW-gegevens.",
    "date": "2025-10-15",
    "tag": "Local SEO",
    "excerpt": "Vermeldingen in gidsen zijn geen wondermiddel, maar wel een gratis basis voor je lokale zichtbaarheid.",
    "sections": [
      {
        "h": "Waarom gidsen nog steeds nut hebben",
        "p": "Niet vanwege de links, maar vanwege consistentie. Zoekmachines en AI-modellen controleren of je naam, adres en telefoonnummer overal hetzelfde zijn."
      },
      {
        "h": "De belangrijkste gidsen",
        "p": "Google Bedrijfsprofiel, Apple Business Connect, Bing Places, Telefoonboek, Detelefoongids, Openingstijden.nl, Trustoo, Werkspot, Bedrijvenpagina en regionale gidsen in je eigen provincie."
      },
      {
        "h": "Doe het één keer goed",
        "p": "Leg je gegevens vast in één document en gebruik exact dezelfde schrijfwijze bij elke aanmelding. Corrigeer oude vermeldingen in plaats van nieuwe aan te maken."
      }
    ]
  },
  "het-gebruik-nlp-in-seo-met-ai-tools-als-neuronwriter-een-casestudy": {
    "slug": "het-gebruik-nlp-in-seo-met-ai-tools-als-neuronwriter-een-casestudy",
    "title": "NLP in SEO met AI-tools als NeuronWriter: een casestudy",
    "description": "Hoe wij met NLP-analyse en NeuronWriter de contentkwaliteit verbeterden en binnen vier maanden posities wonnen. Inclusief cijfers.",
    "date": "2025-09-22",
    "tag": "Case",
    "excerpt": "Een praktijkvoorbeeld: wat NLP-optimalisatie wel en niet oplevert.",
    "sections": [
      {
        "h": "De situatie",
        "p": "Een dienstverlener met tien servicepagina's die allemaal rond positie 15 bleven hangen. Techniek was in orde, links waren beperkt maar niet slecht."
      },
      {
        "h": "Wat we deden",
        "p": "Per pagina een NLP-analyse van de top 10, gaten in onderwerpsdekking opgevuld en de opbouw omgezet naar vraag-en-antwoord. Geen nieuwe links, geen technische ingrepen."
      },
      {
        "h": "Het resultaat",
        "p": "Na vier maanden stonden zeven van de tien pagina's in de top 5 en steeg het organische verkeer met 61 procent. De belangrijkste les: dekking van het onderwerp weegt zwaarder dan het aantal keer dat een zoekwoord voorkomt."
      }
    ]
  }
};

export const POST_LIST: Post[] = Object.values(POSTS).sort((a, b) => b.date.localeCompare(a.date));
