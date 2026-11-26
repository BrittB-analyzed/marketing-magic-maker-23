export type PostImage = { src: string; alt: string; caption?: string };
export type PostSection = {
  h: string;
  /** Platte tekst; een lege regel ("\n\n") begint een nieuwe alinea. */
  p: string;
  list?: string[];
  /** Toon de lijst genummerd (1, 2, 3) in plaats van met bolletjes. */
  ordered?: boolean;
  /** Tekst die na de lijst of tabel komt; een lege regel begint een nieuwe alinea. */
  na?: string;
  table?: { head: string[]; rows: string[][] };
  images?: PostImage[];
  links?: { label: string; href: string }[];
};
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  sections: PostSection[];
};

export const POSTS: Record<string, Post> = {
  "geo-factoren-gevonden-worden-door-ai": {
  "slug": "geo-factoren-gevonden-worden-door-ai",
  "title": "De 10 belangrijkste GEO-factoren voor zichtbaarheid in AI",
  "description": "Hoe word je geciteerd door ChatGPT, Perplexity en Gemini? De 10 GEO-factoren die het verschil maken, plus tips voor WordPress, Shopify en meten.",
  "date": "2026-11-26",
  "tag": "AI & SEO",
  "excerpt": "Bij GEO draait het niet meer om gekozen worden, maar om geciteerd worden. Deze 10 factoren bepalen of ChatGPT, Perplexity en Gemini jouw pagina gebruiken.",
  "sections": [
    {
      "h": "Bij GEO draait het om geciteerd worden",
      "p": "Bij GEO draait het niet meer om gekozen worden, maar om geciteerd worden. Een zoekmachine stuurt bezoekers naar je pagina. ChatGPT, Perplexity of Gemini leest je pagina, haalt er één alinea uit en laat de rest liggen.\n\nDe afgelopen weken heb ik de gratis GEO-cursus van Emad Sharaki (LearnGEO) doorgewerkt: 19 modules, 57 lessen. Geen hype, wel bronnen en eerlijke kanttekeningen. Hieronder staan de 10 onderdelen die volgens mij het verschil maken om gevonden en aanbevolen te worden door AI.\n\nEén ding vooraf: GEO vervangt SEO niet. AI-assistenten zoeken via gewone zoekmachines. Google AI Overviews draait op Google-resultaten, Copilot op Bing. Wie de SEO-basis niet op orde heeft, hoeft aan GEO nog niet te beginnen."
    },
    {
      "h": "1. Zorg eerst dat je SEO-fundament klopt",
      "p": "AI-assistenten bouwen geen eigen index. Ze zoeken via Google en Bing en lezen wat daar bovenkomt. Een pagina die niet geïndexeerd is, valt af voordat GEO überhaupt meetelt.",
      "list": [
        "Controleer indexering in Google Search Console én in Bing Webmaster Tools. Zonder Bing ben je onzichtbaar in Copilot.",
        "Los kapotte canonicals, redirectketens en duplicate content op.",
        "Versterk je interne linking: volgens de cursus de tactiek die door AI juist meer waarde krijgt."
      ],
      "na": "Let op: je hoeft niet in de Google top 3 te staan. Je moet wel geïndexeerd zijn, maar AI zoekt niet op jouw hoofdkeyword. Het splitst de vraag op in deelvragen (query fan-out) en kiest bronnen uit die resultaten. Volgens Ahrefs komt maar zo'n 38% van de citaties in Google AI Overviews uit de top 10 (maart 2026). Bij ChatGPT, Gemini en Copilot staat gemiddeld maar 12% van de geciteerde pagina's in de Google top 10 voor dezelfde vraag (augustus 2025). Goed scoren op de deelvragen rond je onderwerp telt dus meer dan die ene toppositie."
    },
    {
      "h": "2. Laat AI-crawlers bewust binnen",
      "p": "Veel sites blokkeren AI-bots zonder het te weten, via robots.txt, een plugin of de CDN-instellingen. Blokkeren gaat snel, de schade herstellen duurt lang.",
      "list": [
        "Check robots.txt en je CDN (bijvoorbeeld Cloudflare) op regels voor AI-bots.",
        "Marketing-, product- en supportpagina's: gewoon alles toestaan.",
        "Blokkeer alleen gericht, per bot en per map, met een datum en reden erbij."
      ]
    },
    {
      "h": "3. Zet je content in de HTML, niet alleen in JavaScript",
      "p": "AI-crawlers verwerken JavaScript minder goed dan Googlebot. Prijzen in een afbeelding of tekst die pas na het laden verschijnt, zien ze niet.",
      "list": [
        "Bekijk je vijf belangrijkste pagina's met JavaScript uitgeschakeld. Staat de inhoud er nog?",
        "Zet prijzen, specificaties en tabellen als echte tekst op de pagina.",
        "Geef video's een transcriptie en afbeeldingen een echte alt-tekst."
      ]
    },
    {
      "h": "4. Begin met het antwoord",
      "p": "AI leest vaak één sectie van je pagina, niet het hele verhaal. Zet daarom de conclusie bovenaan en onderbouw daarna, zoals de omgekeerde piramide in de journalistiek.",
      "list": [
        "Open belangrijke pagina's met een korte samenvatting van twee à drie zinnen.",
        "Houd de diepgang eronder voor de menselijke lezer.",
        "Schrap intro's die alleen de vraag herhalen. Die kosten ruimte en leveren niets op."
      ]
    },
    {
      "h": "5. Schrijf alinea's die op zichzelf staan",
      "p": "De meeste opgehaalde pagina's worden weggegooid voordat ze gelezen zijn. Wat overblijft, is compact en los te begrijpen. Een alinea die steunt op \"zoals hierboven genoemd\" valt af.",
      "list": [
        "Eén idee per alinea, met dat idee in de eerste zin.",
        "Koppen die zeggen wat eronder staat. Dus niet \"Onze aanpak\", maar de vraag of het antwoord.",
        "Test: lees een sectie los. Beantwoordt die nog steeds een vraag?"
      ]
    },
    {
      "h": "6. Maak je claims controleerbaar",
      "p": "AI herhaalt het liefst wat het kan verantwoorden. \"Enterprise-grade oplossing\" beantwoordt geen enkele vraag. \"Ondersteunt SSO via SAML en Okta\" wel.",
      "list": [
        "Maak claims specifiek: wie, hoeveel, sinds wanneer.",
        "Zet bij elk cijfer de bron en de datum.",
        "Noem een echte auteur met een bio, en zeg ook wat je niet weet. Dat maakt de rest geloofwaardiger."
      ]
    },
    {
      "h": "7. Wees één duidelijke entiteit",
      "p": "AI denkt in entiteiten: je bedrijf, je product en jijzelf zijn elk een \"ding\" met eigenschappen. Elke naamvariant splitst het bewijs over meerdere dingen.",
      "list": [
        "Kies één naam en gebruik die overal: site, footer, LinkedIn, Google Bedrijfsprofiel, gidsen.",
        "Benoem je categorie in de woorden die klanten gebruiken, niet in een zelfbedacht label.",
        "Maak relaties expliciet: wie zit erachter, voor wie is het, wie zijn de alternatieven. Leg dit vast met Organization-schema, maar verwacht niet dat schema het werk alleen doet."
      ]
    },
    {
      "h": "8. Zorg dat anderen je goed beschrijven",
      "p": "Of AI je tot een categorie rekent, hangt vooral af van wat ánderen over je schrijven. Word je wel genoemd als iemand naar je merk vraagt, maar niet bij \"beste X in Y\"? Dan los je dat niet op je eigen site op.",
      "list": [
        "Zoek uit welke bronnen AI citeert in jouw branche: lijstjes, vergelijkingssites, Reddit, vakmedia.",
        "Zorg dat je daar voorkomt, met dezelfde naam en omschrijving.",
        "Maak eerlijke vergelijkingspagina's met je echte alternatieven. Volgens de cursus het werk dat het meest bijdraagt aan categorie-associatie."
      ]
    },
    {
      "h": "9. Wees zelf de bron",
      "p": "Alle andere tactieken vergroten je kans. Eigen data is de enige positie waarbij AI niet om je heen kan: wie over dat feit schrijft, moet jou noemen.",
      "list": [
        "Meet iets in je branche dat nog niemand gemeten heeft, bijvoorbeeld een benchmark of een kleine studie.",
        "Publiceer het met methode, steekproef, datum en beperkingen. Zonder methode is het niet citeerbaar.",
        "Zet het op een vaste URL, niet in een pdf waar niemand naar linkt."
      ]
    },
    {
      "h": "10. Kies je platforms en talen, en werk per markt",
      "p": "ChatGPT, Perplexity, Gemini, Copilot en Claude citeren heel verschillende bronnen. Volgens een synthese van 5W PR overlapt maar zo'n 11% van de domeinen tussen ChatGPT en Perplexity. Tussen talen is het verschil nog groter: dezelfde vraag in een andere taal levert maar 4 tot 11% dezelfde bronnen op.",
      "list": [
        "Kies twee platforms op basis van waar jouw klanten zitten, niet op basis van gebruikersaantallen.",
        "Behandel Nederlands en Engels als aparte markten, met eigen content en eigen metingen.",
        "Gebruik Perplexity als testomgeving: daar zie je verbeteringen het snelst terug."
      ]
    },
    {
      "h": "GEO in WordPress: waar het vaak misgaat",
      "p": "De meeste problemen ontstaan niet door het platform zelf, maar door thema's, plugins en instellingen die ooit zijn blijven staan. Je ziet ze niet in de browser, wel in de ruwe HTML die een crawler binnenkrijgt.",
      "list": [
        "Controleer het vinkje \"Zoekmachines ontmoedigen\" (Instellingen > Lezen). Het zet een noindex-tag in je pagina's, dus in robots.txt zie je niets. Het blijft vaak staan na een herbouw of staging.",
        "Kijk of er een los robots.txt-bestand in de root staat. Dat wint altijd van je SEO-plugin, ook als Yoast of Rank Math iets anders laat zien.",
        "Check je beveiligingsplugin en host. Firewalls kunnen AI-bots weigeren zonder dat je het in WordPress ziet. Zoek in de serverlogs naar 403-meldingen.",
        "Zet het antwoord direct onder elke kop. Een hero, featuregrid of testimonials boven het antwoord betekent dat AI de verkeerde tekst als eerste leest.",
        "Ruim dunne tag- en categoriepagina's op. Archieven met minder dan drie berichten concurreren met de pagina die je wilt laten vinden.",
        "Laat schema kloppen met de pagina. Een auteur \"admin\" of een bedrijfsnaam die afwijkt van de footer is een tegenstrijdigheid in machinetaal. Geef elke auteur een echte naam, bio en externe link."
      ]
    },
    {
      "h": "GEO in Shopify: waar het vaak misgaat",
      "p": "Ook in Shopify zitten de problemen vooral in apps en instellingen, niet in het platform zelf.",
      "list": [
        "Schrijf per product drie zinnen: voor wie het is, waarmee het werkt (maten, modellen, normen) en voor wie het níet is. AI-koopvragen gaan over \"past dit bij mij?\", niet over specificaties.",
        "Pas op met \"Unlisted\" en het metafield seo.hidden. Beide halen een product uit de sitemap, en daarmee uit AI-antwoorden.",
        "Pas robots.txt aan via robots.txt.liquid, nooit met een statisch bestand. Anders bevriezen de standaardregels van Shopify.",
        "Zet varianten en reviews in de HTML. Maten of kleuren die pas na een klik verschijnen, en reviews die een app later inlaadt, ziet AI niet.",
        "Beperk gefilterde collecties. Houd alleen filters die een eigen introductie verdienen, zoals maat of compatibiliteit.",
        "Controleer dubbel schema van apps. Meerdere apps kunnen tegenstrijdige prijzen of ratings publiceren. Publiceer nooit een rating die je niet met zichtbare reviews kunt onderbouwen."
      ],
      "na": "Snelle test voor beide platforms: open de broncode van je vijf belangrijkste pagina's en zoek de belangrijkste zin. Staat die er niet in, dan ziet AI hem ook niet."
    },
    {
      "h": "Zo meet je of GEO werkt",
      "p": "AI-antwoorden verschillen per keer dat je dezelfde vraag stelt. Eén check is dus een anekdote. Bovendien ziet Google Analytics alleen klikken, terwijl de meeste waarde zit in genoemd worden zonder klik. Mijn aanpak, gebaseerd op de cursus:",
      "ordered": true,
      "list": [
        "Kies tien koopvragen zoals een klant ze stelt, zonder je merknaam erin.",
        "Stel ze op drie platforms, telkens in een nieuwe sessie zonder geheugen, en elke vraag drie keer.",
        "Noteer per antwoord de datum, het platform, of je genoemd wordt (met of zonder link), welke concurrenten erbij staan en welke bronnen geciteerd worden.",
        "Vraag ook: \"Wat is [jouw merk] en voor wie is het?\" Het verschil met je eigen omschrijving is je echte probleem.",
        "Herhaal dit maandelijks. De richting telt meer dan het getal."
      ],
      "na": "Dat zijn 90 datapunten per maand, voor ongeveer een uur werk. Vermijd één gecombineerde \"AI-zichtbaarheidsscore\": een gemiddelde over platforms die het niet met elkaar eens zijn, verbergt precies wat je moet weten."
    },
    {
      "h": "Tot slot: GEO is geen trucje",
      "p": "Het meeste GEO-werk is geen trucje. Het is een kleine verandering in hoe je een alinea schrijft, consequent toegepast. Daarnaast kost het geduld: wat AI vandaag over je weet, is jaren geleden geschreven. Wie nu begint, bouwt aan de aanbevelingen van over een paar jaar.\n\nBenieuwd hoe zichtbaar jouw bedrijf is in ChatGPT, Perplexity en Gemini? Neem contact op, dan doe ik een korte nulmeting op jouw belangrijkste koopvragen.",
      "links": [
        {
          "label": "Vraag een nulmeting aan",
          "href": "/contact/"
        }
      ]
    },
    {
      "h": "Bronnen",
      "p": "Dit artikel is gebaseerd op de volgende bronnen:",
      "list": [
        "LearnGEO, gratis GEO-cursus van Emad Sharaki (19 modules, 57 lessen, bijgewerkt september 2026), met de modules over citaties en bronnen, het SEO-fundament, AI-crawlertoegang, entiteiten, categorie-associatie en de richtlijnen voor WordPress en Shopify",
        "Ahrefs: 38% of AI Overview Citations Pull From The Top 10 (maart 2026)",
        "Ahrefs: Only 12% of AI Cited URLs Rank in Google's Top 10 (augustus 2025)",
        "5W PR: synthese van citatiebronnen per AI-platform (11% overlap tussen ChatGPT en Perplexity)"
      ],
      "links": [
        {
          "label": "Ahrefs: 38% of AI Overview Citations Pull From The Top 10 (2026)",
          "href": "https://ahrefs.com/blog/ai-overview-citations-top-10/"
        }
      ]
    }
  ]
},
  "agentic-seo-workflows-2026": {
  "slug": "agentic-seo-workflows-2026",
  "title": "Agentic SEO in 2026: van losse prompts naar slimme systemen",
  "description": "Wat is agentic SEO? Zes workflows met SE Ranking, Claude en Screaming Frog die uren schelen, en zes vragen om te bepalen wat je wel en niet automatiseert.",
  "date": "2026-11-16",
  "tag": "AI & SEO",
  "excerpt": "Een goede prompt bespaart je een uur, een goed systeem elke week een dag. Zo zet je AI, live zoekdata en je eigen SEO-tools aan elkaar in workflows die schalen.",
  "image": "/assets/blog/agentic-seo-workflows-2026/vijf-fases-agentic-seo-workflow.webp",
  "imageAlt": "Schema van de vijf fases van een agentic SEO-workflow",
  "sections": [
    {
      "h": "Van een slimme prompt naar een slim systeem",
      "p": "Een goede prompt bespaart je een uur. Een goed systeem bespaart je elke week een dag. Dat is in één zin het verschil tussen hoe de meeste bedrijven AI nu inzetten voor SEO en waar het in 2026 naartoe gaat.\n\nTwee jaar geleden draaide alles om de perfecte prompt: een slimme opdracht in ChatGPT, een eigen Custom GPT of een Claude-project vol instructies. Dat werkt prima voor een losse tekst of een snelle analyse. Maar wie een website met honderden pagina's beheert of duizenden zoekwoorden moet ordenen, loopt al snel vast. Elke keer opnieuw kopiëren en plakken, steeds net andere uitkomsten en geen manier om het werk op te schalen.\n\nDaarom stappen steeds meer bureaus en marketingteams over op agentic SEO: werkprocessen waarin AI-modellen, live zoekdata, SEO-tools en een menselijke specialist automatisch op elkaar aansluiten. In dit artikel lees je wat dat in de praktijk betekent, bij welke zes taken het de meeste tijd scheelt en hoe je bepaalt wat je wel en niet moet automatiseren."
    },
    {
      "h": "Waarom losse prompts niet meer genoeg zijn",
      "p": "Een prompt is een losse opdracht. Je geeft input, je krijgt output, en daarna begint het handwerk: resultaten controleren, overzetten naar een spreadsheet, combineren met data uit Search Console of je keywordtool. Daar zitten drie problemen in:",
      "ordered": true,
      "list": [
        "Wisselende kwaliteit: dezelfde vraag levert morgen een ander antwoord op dan vandaag. Voor een strategie waar je op wilt bouwen, is dat onhandig.",
        "Veel handwerk tussen de stappen: de AI doet één stukje, jij doet de rest. De tijdwinst valt daardoor vaak tegen.",
        "Het schaalt niet: tien zoekwoorden kun je nog met de hand verwerken, tienduizend niet."
      ],
      "images": [
        {
          "src": "/assets/blog/agentic-seo-workflows-2026/prompt-vs-agentic-workflow.webp",
          "alt": "Schema: links een losse prompt waarbij de gebruiker zelf kopieert en controleert, rechts een agentic workflow die data ophaalt, verwerkt, laat goedkeuren en doorzet"
        }
      ]
    },
    {
      "h": "Wat is agentic SEO?",
      "p": "Bij agentic SEO bouw je geen betere prompt, maar een systeem. Zo'n systeem haalt zelf data op, verwerkt die met AI, legt de uitkomst voor aan een specialist en zet het goedgekeurde resultaat door naar de volgende stap. De persoon die zulke systemen ontwerpt, noemen we steeds vaker een marketing engineer: iemand die marketing, data en techniek combineert.\n\nEen goed opgezette workflow doorloopt altijd dezelfde vijf fases:",
      "ordered": true,
      "list": [
        "Het knelpunt kiezen: welke taak kost nu onevenredig veel tijd? Denk aan dagenlang zoekwoorden sorteren of elke maand dezelfde rapportage samenstellen.",
        "Koppelen: de benodigde tools, zoals SE Ranking, Semrush, DataForSEO of Search Console, via een API verbinden met een AI-model.",
        "Automatisch verwerken: data verzamelen, opschonen en in een vaste structuur zetten, zonder dat iemand ernaar hoeft om te kijken.",
        "Menselijke controle: een ervaren SEO-specialist beoordeelt de uitkomst op strategie, kwaliteit en tone of voice. Dit heet ook wel human-in-the-loop.",
        "Live zetten en meten: de resultaten doorvoeren en bijhouden of de workflow echt iets oplevert."
      ],
      "images": [
        {
          "src": "/assets/blog/agentic-seo-workflows-2026/vijf-fases-agentic-seo-workflow.webp",
          "alt": "Schema van de vijf fases: knelpunt kiezen, koppelen, verwerken, menselijke check, live zetten en meten"
        }
      ]
    },
    {
      "h": "1. Zoekwoorden clusteren in uren in plaats van weken",
      "p": "Zoekwoorden vinden is met de huidige tools geen probleem meer. Het lastige deel komt daarna: welke zoektermen horen bij elkaar, wanneer heeft een zoekwoord een andere intentie, en waar heb je een aparte pagina voor nodig?\n\nEen agentic workflow pakt dat in drie stappen aan. Eerst haalt hij voor elk zoekwoord op welke pagina's er nu in Google staan. Daarna berekent AI hoe inhoudelijk verwant de zoektermen zijn (met zogeheten embeddings). Tot slot worden de zoekwoorden automatisch gegroepeerd op onderwerp en intentie, desnoods in meerdere talen tegelijk. De specialist krijgt een kant-en-klaar overzicht en kan meteen beslissen welke clusters prioriteit krijgen.\n\nZo ziet dat eruit: een webshop in tuinverlichting heeft 1.500 zoekwoorden uit SE Ranking. Een script, gebouwd met Claude Code, haalt via de API van SE Ranking per zoekwoord de top tien op. Zoekwoorden waarvoor grotendeels dezelfde pagina's ranken, komen in één cluster, zoals \"tuinspots\", \"wandlampen buiten\" en \"tuinverlichting op zonne-energie\". Claude geeft elk cluster een label voor de zoekintentie (informatief of koopgericht) en stelt voor welke pagina erbij hoort. Het resultaat staat in een Google Sheet, klaar om te beoordelen.",
      "images": [
        {
          "src": "/assets/blog/agentic-seo-workflows-2026/zoekwoorden-clusteren-workflow.webp",
          "alt": "Schema: zoekwoorden uit SE Ranking, top 10 per zoekwoord via de API, clustering met Claude Code, intentielabels door Claude, resultaat in Google Sheet"
        }
      ]
    },
    {
      "h": "2. Contentbriefings op basis van live zoekresultaten",
      "p": "Voor een goede contentbriefing bekijk je normaal gesproken per zoekwoord de huidige toppagina's, analyseer je wat concurrenten behandelen en bepaal je welke onderwerpen niet mogen ontbreken. Voor één artikel is dat te doen. Voor een contentkalender met vijftig artikelen kost het weken.\n\nEen geautomatiseerde workflow analyseert de top tien voor het doelzoekwoord, vult dat aan met je eigen bedrijfsinformatie en doelgroepkennis, en laat AI daar een complete briefing van maken: opbouw, kopjes, toon en gewenste lengte. Pas daarna kijkt de specialist mee, zodat de tekstschrijver start met een briefing die strategisch klopt en bij je merk past.\n\nZo ziet dat eruit: voor een rijschool staat een blog gepland over \"hoeveel rijlessen heb je nodig\". De workflow haalt de top tien op uit SE Ranking en de zoekopdrachten waarmee de site nu al vertoningen krijgt uit Google Search Console. Een Claude-skill met de tone of voice van de rijschool maakt daar een briefing van: de vragen die concurrenten beantwoorden, de kopjes, de lengte en waar je intern naar linkt. De specialist leest hem na en past aan waar nodig voordat de schrijver begint."
    },
    {
      "h": "3. Losse tools aan elkaar koppelen",
      "p": "De grootste winst zit niet in één slimme AI-taak, maar in de koppeling tussen taken. Neem een content gap-analyse. Normaal exporteer je data uit je keywordtool, filter je die in Excel, bekijk je de zoekresultaten met de hand en schrijf je daarna pas een briefing.\n\nIn een gekoppelde workflow gebeurt dat in één doorlopende keten: het systeem haalt de ontbrekende onderwerpen op, zet ze op volgorde van kansrijkheid, maakt een eerste opzet voor de pagina en legt alles klaar in één omgeving. De specialist hoeft alleen nog te beoordelen en bij te sturen.\n\nZo ziet dat eruit: SE Ranking laat zien voor welke zoekwoorden twee concurrenten wel ranken en jij niet. Claude zet die lijst op volgorde, op basis van zoekvolume, moeilijkheid en hoe goed het onderwerp bij je diensten past. Van de vijf beste kansen maakt het systeem een eerste opzet, die als concept in WordPress terechtkomt. Er gaat niets live zonder dat de specialist het concept heeft gelezen en goedgekeurd."
    },
    {
      "h": "4. Zichtbaarheid in AI-antwoorden in kaart brengen (GEO)",
      "p": "AI-zoekmachines zoals ChatGPT, Perplexity en Google AI Overviews splitsen één vraag op in tientallen deelvragen. Dat heet query fan-out. Wie alleen op het hoofdzoekwoord optimaliseert, mist dus een groot deel van de antwoorden waarin hij genoemd had kunnen worden.\n\nEen agentic workflow brengt rond een kernonderwerp alle vragen en informatiebehoeften in kaart, controleert hoe vaak jouw merk in AI-antwoorden voorkomt ten opzichte van concurrenten en zet de gaten op volgorde van zichtbaarheid en omzetpotentie. Zo ontstaat een roadmap voor generative engine optimization in plaats van losse gokken.\n\nZo ziet dat eruit: een online marketingbureau wil genoemd worden als iemand vraagt naar een \"GEO-specialist in Limburg\". Claude splitst die vraag op in de vervolgvragen die een AI-zoekmachine waarschijnlijk stelt, zoals \"wat kost GEO?\", \"wat is het verschil met SEO?\" en \"hoe meet je zichtbaarheid in ChatGPT?\". Met de AI Search Toolkit van SE Ranking zie je hoe vaak jouw merk en je concurrenten in AI-antwoorden voorkomen. Vragen waarop je nog niet wordt genoemd, komen bovenaan de contentplanning.",
      "images": [
        {
          "src": "/assets/blog/agentic-seo-workflows-2026/query-fan-out-geo.webp",
          "alt": "Schema: de hoofdvraag GEO-specialist Limburg vertakt in zes deelvragen, zoals wat kost GEO en wat is het verschil met SEO"
        }
      ]
    },
    {
      "h": "5. Kwaliteit bewaken als je veel content maakt",
      "p": "Met AI is het makkelijk om veel content te produceren. Juist daardoor wordt kwaliteitsbewaking belangrijker, zeker in sectoren met strenge regels, zoals zorg, financiën of juridische dienstverlening, of bij merken met duidelijke huisstijlrichtlijnen.\n\nEen governance-workflow zet alles in één dashboard: automatische checks op tone of voice en merkrichtlijnen, vaste goedkeuringsrondes voor juridische of inhoudelijke controle en een helder overzicht van welke tekst in welke fase zit. Geen losse mailtjes en geen zoekgeraakte versies meer.\n\nZo ziet dat eruit: een financieel adviseur laat elke maand acht blogs schrijven. Voordat een tekst naar de klant gaat, controleert een Claude-skill hem op de merkrichtlijnen: aanspreekvorm, verboden beloftes zoals \"gegarandeerd rendement\", verplichte disclaimers en de huisstijl van koppen. Wat niet voldoet, krijgt een opmerking terug. In één overzicht zie je per tekst of hij in concept, in controle, bij de klant of gepubliceerd is."
    },
    {
      "h": "6. Technische SEO-meldingen slim prioriteren",
      "p": "Een crawler zoals Screaming Frog vindt op een grotere site al snel duizenden meldingen. Maar de crawler weet niet welke pagina's het meeste omzet opleveren, en ook niet of een wijziging bewust is doorgevoerd.\n\nEen slimme technische workflow controleert dagelijks alle belangrijke URL's en weegt elke verandering af. Is dit onverwacht? Gaat het om een pagina die veel conversies oplevert? Is een eerder doorgegeven verbetering ook echt goed doorgevoerd? Alleen wat ertoe doet, komt als melding bij het team terecht. Zo los je problemen op voordat ze je posities of omzet kosten.\n\nZo ziet dat eruit: Screaming Frog crawlt elke maandagnacht automatisch een Shopify-webshop en haalt via de koppeling met Google Search Console en GA4 de kliks en conversies per URL op. Claude vergelijkt de crawl met die van vorige week. Staat een productcategorie met veel verkopen ineens op noindex, of is een canonical veranderd, dan krijgt het team dezelfde ochtend een melding met uitleg. Honderd kleine meldingen op pagina's zonder verkeer blijven in het rapport en leiden niemand af.",
      "images": [
        {
          "src": "/assets/blog/agentic-seo-workflows-2026/technische-seo-monitoring-workflow.webp",
          "alt": "Schema: wekelijkse Screaming Frog-crawl, kliks en conversies uit Search Console en GA4, vergelijking door Claude, filter op pagina's met verkopen, gerichte melding"
        }
      ]
    },
    {
      "h": "Automatiseren of niet? Zes toetsvragen",
      "p": "Een workflow bouwen kost tijd en geld. Automatiseren omdat het kan, is dus geen goed idee. Loop deze zes vragen langs voordat je begint:",
      "ordered": true,
      "list": [
        "Herhaalt de taak zich? Volg je telkens dezelfde stappen?",
        "Komt de taak vaak voor? Doe je dit wekelijks, of doen meerdere collega's het maandelijks?",
        "Draait het om veel data? Zit het werk in het verwerken van grote hoeveelheden informatie, en niet in één strategische keuze?",
        "Zijn de regels vast te leggen? Kun je criteria, drempelwaarden en prioriteiten helder omschrijven?",
        "Waar moet een mens meekijken? Welke stappen vragen echt om ervaring en oordeel?",
        "Is de winst meetbaar? Levert het, na aftrek van bouwtijd en AI-kosten, netto tijd en betere resultaten op?"
      ],
      "na": "Beantwoord je de eerste vier vragen met ja, dan is de taak waarschijnlijk geschikt voor automatisering. Vraag vijf bepaalt waar de menselijke controle in de workflow komt, en vraag zes of het de investering waard is.",
      "images": [
        {
          "src": "/assets/blog/agentic-seo-workflows-2026/terugverdientijd-seo-automatisering.webp",
          "alt": "Lijngrafiek: handmatig werk loopt op tot 72 uur in twaalf weken, een workflow tot 28 uur; terugverdiend na ruim drie weken",
          "caption": "Rekenvoorbeeld ter illustratie: 6 uur handwerk per week tegenover 16 uur bouwen en 1 uur controle per week."
        }
      ]
    },
    {
      "h": "Wie heb je nodig in je team?",
      "p": "Sterke marketingteams combineren in 2026 drie soorten expertise:",
      "list": [
        "De SEO-strateeg kent de markt, bepaalt de koers en bewaakt kwaliteit en creativiteit.",
        "De data-specialist legt vast wat succes is en meet de werkelijke impact op aanvragen, conversies en omzet.",
        "De marketing engineer bouwt en onderhoudt de systemen waarmee het team op schaal kan werken."
      ],
      "na": "Voor de meeste MKB-bedrijven zijn dat geen drie aparte functies. Vaak combineert één specialist of bureau deze rollen. Het belangrijkste is dat alle drie de invalshoeken aan tafel zitten."
    },
    {
      "h": "Conclusie: van AI-experiment naar vast onderdeel van je marketing",
      "p": "De vraag is in 2026 niet meer óf je AI gebruikt, maar hoe goed je het hebt ingebed in je werkprocessen. Losse prompts zijn een prima begin. Wie de stap zet naar gestructureerde workflows, werkt sneller, nauwkeuriger en met resultaten waar je op kunt bouwen.\n\nBenieuwd welke onderdelen van jouw SEO al slimmer kunnen? Bij B. Analyzed combineren we jarenlange SEO-ervaring met de nieuwste AI- en datatools, met één vast aanspreekpunt en meetbaar resultaat. Vraag de gratis SEO-scan aan of neem contact op voor een aanpak op maat."
    }
  ]
},
  "seo-performance-meten-2026": {
  "slug": "seo-performance-meten-2026",
  "title": "SEO-performance meten in 2026: van vanity metrics naar omzet",
  "description": "Stop met vanity metrics. Ontdek welke SEO-KPI's in 2026 écht tellen, hoe je AI-zichtbaarheid meet en hoe je SEO koppelt aan conversies en omzet.",
  "date": "2026-11-25",
  "tag": "SEO",
  "excerpt": "Een nummer 1-positie of meer bezoekers zegt in 2026 weinig. Zo koppel je SEO aan conversies, omzet en zichtbaarheid in AI-antwoorden, met de KPI's die er écht toe doen.",
  "image": "/assets/blog/seo-performance-meten-2026/seo-vanity-metrics-verkeer-vs-omzet.webp",
  "imageAlt": "Staafdiagram: organisch verkeer stijgt met 60 procent terwijl de organische omzet met 20 procent daalt",
  "sections": [
    {
      "h": "Waarom SEO meten in 2026 anders is",
      "p": "SEO gaat in 2026 niet meer alleen over het behalen van een nummer 1-positie in Google of het genereren van zoveel mogelijk anonieme bezoekers. Met de opkomst van AI Overviews, zero-click zoekresultaten en AI-chatbots zoals ChatGPT, Gemini en Perplexity is het meten van zoekmachineprestaties fundamenteel veranderd. Echte SEO-performance draait om het verbinden van zoekzichtbaarheid aan concrete zakelijke resultaten: kwalitatief verkeer, conversies, omzet en merkautoriteit in zowel traditionele zoekmachines als AI-antwoordsystemen.\n\nIn dit artikel leggen we precies uit hoe je het verschil maakt tussen SEO-prestaties en SEO-resultaten, welke KPI's er écht toe doen, hoe je AI-zichtbaarheid meet en hoe je een waterdicht meetmodel opbouwt voor jouw organisatie."
    },
    {
      "h": "SEO-performance vs. SEO-resultaten: wat is het verschil?",
      "p": "Veel bedrijven halen twee begrippen door elkaar: SEO-prestaties (performance) en SEO-resultaten (results). Toch zijn dit twee verschillende dimensies van je online marketingstrategie.",
      "table": {
        "head": [
          "Categorie",
          "SEO-performance (prestaties)",
          "SEO-resultaten (results)"
        ],
        "rows": [
          [
            "Focus",
            "Voortgang, trends en de algemene gezondheid van je site",
            "Concrete zakelijke uitkomsten en harde cijfers"
          ],
          [
            "Doel",
            "Kansen en technische knelpunten vroegtijdig opsporen",
            "De ROI en zakelijke waarde bewijzen aan stakeholders"
          ],
          [
            "Metrieken",
            "Zoekwoordgroei, impressies, CTR-trends, Core Web Vitals",
            "Exact organisch bezoekersaantal, conversieratio, omzet"
          ],
          [
            "Evaluatie",
            "Continu of per kwartaal",
            "Maandelijks of per campagne"
          ]
        ]
      }
    },
    {
      "h": "SEO-prestaties (performance)",
      "p": "SEO-performance brengt de gezondheid en het potentieel van je website in kaart. Het laat zien of zoekmachines jouw content opmerken en waarderen. Denk hierbij aan stijgende impressies in Google Search Console of een toename van het aantal zoekwoorden waarmee je pagina's in de top 10 verschijnen. Prestaties fungeren als vroegtijdige signalen die voorspellen of er in de toekomst meer verkeer en omzet aan gaat komen."
    },
    {
      "h": "SEO-resultaten (results)",
      "p": "SEO-resultaten zijn de kwantificeerbare uitkomsten van al je inspanningen. Het beantwoordt de vraag: wat levert al die moeite en investering onderaan de streep op? Hier kijken we naar het exacte aantal organische bezoekers, de gegenereerde leads, het aantal verkopen en de uiteindelijke omzet uit organisch zoekverkeer."
    },
    {
      "h": "Waarom vanity metrics je SEO-strategie misleiden",
      "p": "Veel marketingteams vieren successen op basis van vanity metrics (ijdelheidsstatistieken). Een stijging van 60% in organisch verkeer klinkt fantastisch, maar als de omzet met 20% daalt, schiet je er niets mee op. Waarom sturen traditionele metrieken je soms het bos in?",
      "ordered": true,
      "list": [
        "Rankings zonder conversie-intentie: ranken op positie 1 voor een zoekwoord met een hoog zoekvolume maar nul commerciële intentie levert weliswaar bezoekers op, maar geen omzet.",
        "De privacy gap in Search Console: Google toont zeldzame zoekopdrachten niet, om de privacy van gebruikers te beschermen. Uit onderzoek van Ahrefs (2026) blijkt dat gemiddeld bijna de helft (±47%) van alle kliks geen zichtbare zoekterm heeft; bij veel websites ligt dat aandeel tussen 45% en 80%. Search Console geeft dus een richtinggevend signaal, maar niet de volledige waarheid.",
        "Stijging in scraper- en botverkeer: geautomatiseerd botverkeer (scrapers en AI-crawlers) is sterk toegenomen. Zonder goede filtering kan dit een vals beeld geven van je werkelijke bezoekersaantallen.",
        "De impact van zero-click search en AI Overviews: gebruikers krijgen hun antwoord steeds vaker direct op de zoekresultatenpagina of via AI-antwoorden. Een zoekwoordpositie kan hoog zijn, maar als het antwoord al bovenin door een AI Overview wordt getoond, daalt de klikfrequentie (CTR)."
      ],
      "images": [
        {
          "src": "/assets/blog/seo-performance-meten-2026/search-console-kliks-zonder-zoekterm.webp",
          "alt": "Balkdiagram: gemiddeld 53 procent van de Search Console-kliks heeft een zichtbare zoekterm, 47 procent is geanonimiseerd",
          "caption": "Bron: Ahrefs, 2026."
        }
      ]
    },
    {
      "h": "Hoeveel kliks kost een AI Overview?",
      "p": "Ahrefs vergeleek de klikfrequentie van het #1-resultaat voor en na de komst van AI Overviews. Bij informatieve zoekwoorden zonder AI Overview daalde de CTR van positie 1 tussen december 2023 en december 2025 van 7,6% naar 3,9%. Bij zoekwoorden mét AI Overview zakte die van 7,3% naar 1,6%. Gecorrigeerd voor de algemene daling krijgt het toppresultaat bij een AI Overview zo'n 58% minder kliks, en ook op positie 2 en 3 is het effect groot. Een hoge positie is dus geen garantie meer voor verkeer.",
      "images": [
        {
          "src": "/assets/blog/seo-performance-meten-2026/ai-overviews-ctr-positie-1.webp",
          "alt": "Staafdiagram: CTR van positie 1 daalde van 7,6 naar 3,9 procent zonder AI Overview en van 7,3 naar 1,6 procent met AI Overview tussen december 2023 en december 2025",
          "caption": "Bron: Ahrefs, februari 2026."
        },
        {
          "src": "/assets/blog/seo-performance-meten-2026/ai-overviews-ctr-daling-per-positie.webp",
          "alt": "Staafdiagram: een AI Overview verlaagt de CTR met 58 procent op positie 1, 50,8 procent op positie 2 en 46,4 procent op positie 3",
          "caption": "Bron: Ahrefs, februari 2026."
        }
      ]
    },
    {
      "h": "De belangrijkste SEO-KPI's om in 2026 te meten",
      "p": "Om een realistisch en waardevol beeld te krijgen van je SEO-succes, verdeel je je KPI's in vier hoofdcategorieën.",
      "images": [
        {
          "src": "/assets/blog/seo-performance-meten-2026/seo-kpi-categorieen-2026.webp",
          "alt": "Overzicht van vier SEO-KPI-categorieën: zakelijke uitkomsten, verkeerskwaliteit, AI- en LLM-zichtbaarheid, SERP en techniek"
        }
      ]
    },
    {
      "h": "A. Zakelijke uitkomsten en omzet (business impact)",
      "p": "",
      "list": [
        "Organische omzet: de directe omzet die voortvloeit uit organische bezoekers, meetbaar via Google Analytics 4 en e-commerce tracking.",
        "Organische conversieratio: het percentage organische bezoekers dat een gewenste actie uitvoert, zoals een leadformulier invullen, een aankoop doen of een offerte aanvragen.",
        "Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV): de kosten om een klant via SEO binnen te halen, vergeleken met de totale waarde die deze klant gedurende zijn klantreis oplevert.",
        "SEO ROI: de verhouding tussen de totale investering in SEO (content, techniek, linkbuilding) en de gegenereerde marge of omzet."
      ]
    },
    {
      "h": "B. Verkeerskwaliteit en waarde (quality metrics)",
      "p": "",
      "list": [
        "Geëngageerd verkeer: in plaats van puur te kijken naar totale sessies, meet je de kwaliteit van het bezoek, bijvoorbeeld bezoekers die minimaal twee pagina's bekijken, scrollen of een CTA aanklikken.",
        "Traffic cost (geschatte verkeerswaarde): een metriek uit tools zoals Semrush die berekent hoeveel hetzelfde verkeer gekost zou hebben als je het via Google Ads had moeten inkopen. Dit toont de directe besparing en waarde van je organische positie.",
        "Branded vs. non-branded verkeer: non-branded verkeer toont hoe goed je nieuwe potentiële klanten aantrekt die je merknaam nog niet kenden."
      ]
    },
    {
      "h": "C. AI- en LLM-zichtbaarheid (AEO/GEO-metrics)",
      "p": "",
      "list": [
        "AI Overview inclusion rate: hoe vaak wordt jouw content als bron gebruikt of geciteerd in Google AI Overviews?",
        "Citaties en share of voice in AI-chatbots: de frequentie waarmee jouw merk wordt genoemd in antwoorden van ChatGPT, Perplexity, Gemini en Claude.",
        "LLM-referralverkeer en conversie: verkeer dat vanuit AI-platforms naar je site doorklikt. Dit verkeer vertoont vaak een aanzienlijk hogere conversiebereidheid, omdat de bezoeker al een gericht advies heeft gekregen van de AI."
      ]
    },
    {
      "h": "D. SERP-zichtbaarheid en technische gezondheid",
      "p": "",
      "list": [
        "Click-through rate (CTR): het percentage weergaven dat daadwerkelijk leidt tot een klik. Een lage CTR bij hoge impressies duidt op een niet-relevante of oninteressante meta-title en -description.",
        "Index coverage en crawl health: zorgen dat alle belangrijke pagina's correct door zoekmachines worden geïndexeerd, zonder dat crawlbudget wordt verspild aan pagina's met weinig waarde.",
        "Core Web Vitals en toegankelijkheid (SXO): snelheid (LCP, INP), visuele stabiliteit (CLS) en een toegankelijke sitestructuur (WCAG) verbeteren zowel de gebruikerservaring als de crawl-efficiëntie van zoekmachines."
      ]
    },
    {
      "h": "Stap 1: bepaal de nulmeting (baseline)",
      "p": "Hoe zet je deze KPI's om in een praktisch actieplan? Het begint met een nulmeting. Voordat je nieuwe SEO-initiatieven start, breng je je huidige prestatieniveau nauwkeurig in kaart. Documenteer je huidige maandelijkse organische verkeer, de conversieratio, de gemiddelde orderwaarde (AOV) en de organische omzet."
    },
    {
      "h": "Stap 2: formuleer concrete doelen en KPI's",
      "p": "Koppel je SEO-doelen rechtstreeks aan je bedrijfsdoelstellingen. Als je doel is om de organische omzet met 30% te laten groeien, zijn je primaire KPI's het verhogen van kwalitatief organisch verkeer naar commerciële landingspagina's en het optimaliseren van de conversieratio op die pagina's."
    },
    {
      "h": "Stap 3: stel haalbare mijlpalen per periode in",
      "p": "Verdeel een jaardoel in kwartaal- of maandmijlpalen:",
      "list": [
        "Maand 1-2: optimaliseer de Core Web Vitals en verbeter de meta-titles van pagina's die nu op posities 5-10 ranken, om de CTR direct te verhogen.",
        "Maand 3-4: bouw doelgerichte content-clusters rondom high-intent zoekwoorden en voeg FAQ-secties toe voor meer kans op AI Overviews.",
        "Maand 5-6: versterk de autoriteit met kwalitatieve linkbuilding en meet het effect op de conversieratio en organische omzet."
      ],
      "images": [
        {
          "src": "/assets/blog/seo-performance-meten-2026/seo-roadmap-6-maanden.webp",
          "alt": "Tijdlijn van zes maanden: maand 1-2 snelle winst, maand 3-4 content en AI, maand 5-6 autoriteit en resultaat"
        }
      ]
    },
    {
      "h": "Veelvoorkomende valkuilen bij het meten van SEO",
      "p": "",
      "ordered": true,
      "list": [
        "Silo-rapportage: SEO op zichzelf beoordelen zonder te kijken naar hoe het samenwerkt met Google Ads, social media en e-mailmarketing.",
        "Te vroeg conclusies trekken: SEO-aanpassingen hebben vaak enkele weken tot maanden nodig om volledig door te werken in de zoekresultaten.",
        "Vertrouwen op één bron: gebruik niet alleen Google Search Console of alleen een losse SEO-tool, maar combineer data uit GA4, Search Console, serverlogs en gespecialiseerde SEO-software."
      ]
    },
    {
      "h": "Conclusie: maak van SEO een meetbare groeimotor",
      "p": "In 2026 is SEO geen gokspel meer, maar een strategisch systeem van oorzaak en gevolg. Door af te stappen van losse ranking-lijstjes en te focussen op kwalitatief verkeer, omzet, conversies en AI-zichtbaarheid, transformeer je SEO van een kostenpost naar een voorspelbare groeimotor.\n\nWil je weten waar jouw kansen liggen om de SEO-performance van je bedrijf meetbaar te verbeteren? Bij B. Analyzed helpen we bedrijven om data om te zetten in concrete resultaten. Vraag de gratis SEO-scan aan voor direct inzicht in je groeikansen, of neem contact op voor een aanpak op maat."
    },
    {
      "h": "Bronnen",
      "p": "",
      "links": [
        {
          "label": "Ahrefs: Anonymized Queries Make Up Nearly Half of Google Search Console Traffic (2026)",
          "href": "https://ahrefs.com/blog/gsc-anonymized-queries/"
        },
        {
          "label": "Ahrefs: Update: AI Overviews Reduce Clicks by 58% (februari 2026)",
          "href": "https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/"
        }
      ]
    }
  ]
},
  "ahrefs-alternatieven-in-2026": {
  "slug": "ahrefs-alternatieven-in-2026",
  "title": "Ahrefs-alternatieven in 2026: welke SEO-tool past bij jouw bedrijf?",
  "description": "Op zoek naar een alternatief voor Ahrefs? Vergelijk Semrush, SE Ranking, Mangools, Moz Pro en meer, en ontdek welke SEO-tool bij jouw budget past.",
  "date": "2026-06-26",
  "tag": "SEO-tools",
  "excerpt": "SE Ranking voor de beste prijs-kwaliteit, Semrush voor grote marketingteams, Mangools voor starters en Moz Pro voor linkbuilding. Zo kies je de tool die bij je past.",
  "sections": [
    {
      "h": "Het korte antwoord",
      "p": "Het beste Ahrefs-alternatief is voor de meeste MKB-bedrijven SE Ranking, vanwege de prijs-kwaliteitverhouding en de module voor AI-zichtbaarheid. Semrush is de beste keuze voor grotere marketingteams, Mangools voor beginners die snel willen starten en Moz Pro voor wie linkbuilding en domeinautoriteit centraal zet. Ahrefs zelf blijft ongeëvenaard in backlinkdata, maar is niet voor iedereen de meest rendabele keuze."
    },
    {
      "h": "Wat maakt Ahrefs zo sterk?",
      "p": "Ahrefs heeft een van de grootste en meest actuele backlink-indexen ter wereld, gevoed door een eigen crawler die dagelijks miljarden pagina's bezoekt. Daarbovenop komen de Content Explorer voor inspiratie, de Site Explorer voor diepgaande concurrentieanalyse, een Keyword Explorer met SERP-overzicht en historische data, en een betrouwbare rank tracker. Voor SEO-specialisten en bureaus is het daarom al jaren de gouden standaard."
    },
    {
      "h": "Waarom bedrijven toch verder kijken",
      "p": "Er zijn drie redenen die we bij klanten steeds terugzien. De prijs: voor kleinere organisaties zijn er tools die 80 procent van de functionaliteit bieden voor de helft van het budget. Het creditsysteem: bij intensief gebruik op grote sites of veel concurrenten raken credits snel op. En AI-zichtbaarheid: Ahrefs heeft nog geen volwaardige module om je zichtbaarheid in ChatGPT, Gemini of Perplexity te meten, terwijl sommige alternatieven dat wel hebben."
    },
    {
      "h": "Semrush: het meest complete marketingplatform",
      "p": "Semrush is het bekendste alternatief. De kracht zit in de breedte: naast SEO biedt het uitgebreide mogelijkheden voor Google Ads, contentmarketing, social media en marktonderzoek, met meer dan 55 tools in één omgeving. Het is de beste keuze voor grotere bedrijven en bureaus die online marketing breed aanpakken. Voor kleine bedrijven die alleen basis-SEO doen, is het vaak meer dan nodig, en de interface vraagt even inwerken."
    },
    {
      "h": "SE Ranking: beste prijs-kwaliteit voor het MKB",
      "p": "SE Ranking combineert zoekwoordonderzoek, nauwkeurige rank tracking, site-audits en concurrentieanalyse met een toegankelijke prijs en een overzichtelijke interface. Uniek is de AI Search Toolkit, die meet hoe vaak je merk wordt genoemd in AI-zoekmachines. Voor bedrijven die SEO serieus willen aanpakken zonder de hoofdprijs te betalen, is dit in onze ervaring het sterkste alternatief."
    },
    {
      "h": "Mangools: de makkelijkste start",
      "p": "Mangools bestaat uit vijf tools: KWFinder voor zoekwoordonderzoek, SERPChecker, SERPWatcher voor posities, LinkMiner voor backlinks en SiteProfiler voor domeinanalyse. De interface is visueel en binnen een middag te leren, ook zonder SEO-achtergrond. Ideaal voor freelancers, zzp'ers en kleine bedrijven. Wie diepgaande backlinkdata of rapportages voor veel klanten nodig heeft, loopt er wel tegen grenzen aan."
    },
    {
      "h": "Moz Pro, Ubersuggest en SEO PowerSuite",
      "p": "Moz Pro is bekend van Domain Authority en Page Authority, de scores die branchebreed worden gebruikt om linkwaarde in te schatten. Het is sterk in linkprospecting, maar minder breed dan Semrush. Ubersuggest is de laagdrempelige instap voor starters met een klein budget, met een beperkte gratis versie. SEO PowerSuite draait als desktopsoftware en kent geen creditbeperkingen, wat het interessant maakt voor diepe technische audits van grote sites."
    },
    {
      "h": "Welke tool wint per onderdeel?",
      "p": "Voor backlinkanalyse blijft Ahrefs toonaangevend, met Moz Pro en SEO PowerSuite als beste alternatieven. Voor zoekwoordonderzoek en concurrentieanalyse is Semrush het sterkst. Voor rank tracking en AI-zichtbaarheid scoort SE Ranking het best. Voor technische audits zonder limieten kies je SEO PowerSuite, en voor gebruiksgemak Mangools of SE Ranking."
    },
    {
      "h": "Gratis alternatieven",
      "p": "Zonder budget kom je al ver met een combinatie van gratis tools. Google Search Console laat je echte klikken, vertoningen en indexatieproblemen zien. Screaming Frog crawlt in de gratis versie tot 500 URL's en vindt technische fouten. Bing Webmaster Tools geeft verrassend veel inzicht in prestaties, indexatie en backlinks. De datasets zijn kleiner dan die van Ahrefs, maar voor een kleine site vaak voldoende."
    },
    {
      "h": "Welke tool gebruikt B. Analyzed?",
      "p": "Wij werken dagelijks met meerdere platformen. Voor het meeste werk vinden we SE Ranking het sterkste Ahrefs-alternatief, vanwege de combinatie van functionaliteit, AI-zichtbaarheid, gebruiksgemak en prijs. Een universeel beste tool bestaat niet: de resultaten komen uit de juiste strategie, prioriteiten en consequente uitvoering, niet uit de tool zelf. Twijfel je welke tool of aanpak bij jouw bedrijf past? Vraag de gratis SEO-scan aan, dan laten we zien waar je grootste kansen liggen."
    }
  ]
},
  "seo-gericht-schrijven": {
  "slug": "seo-gericht-schrijven",
  "title": "SEO-gericht schrijven: content die scoort in Google én in AI",
  "description": "Zo schrijf je SEO-gerichte content die rankt in Google en wordt geciteerd door ChatGPT en Gemini: zoekintentie, structuur, E-E-A-T en on-page optimalisatie.",
  "date": "2026-06-22",
  "tag": "Content",
  "excerpt": "SEO-gericht schrijven is in 2026 schrijven voor twee lezers: de mens en het taalmodel. Met deze vijf stappen maak je content die rankt én wordt geciteerd.",
  "sections": [
    {
      "h": "Wat is SEO-gericht schrijven?",
      "p": "SEO-gericht schrijven is het maken van waardevolle content die goed vindbaar is voor mensen die zoeken in Google én voor AI-systemen zoals ChatGPT en Gemini. Je schrijft vanuit de zoekintentie, met een heldere structuur en aantoonbare expertise, zodat je zowel rankt in de organische resultaten als wordt geciteerd als betrouwbare bron. Je schrijft dus voor twee lezers tegelijk: de mens en het algoritme."
    },
    {
      "h": "Van trefwoorden naar autoriteit",
      "p": "Vroeger draaide SEO vooral om het herhalen van het hoofdzoekwoord. Algoritmes begrijpen context inmiddels veel beter, en Google beoordeelt content aan de hand van E-E-A-T: ervaring, expertise, autoriteit en betrouwbaarheid. Zeker bij onderwerpen met impact op gezondheid of financiën is dat doorslaggevend. Succes heeft in 2026 twee vormen: ranken in de organische resultaten en geciteerd worden door AI. Wie beide combineert, bouwt zichtbaarheid die bestand is tegen algoritmewijzigingen."
    },
    {
      "h": "Stap 1: onderwerp en zoekintentie bepalen",
      "p": "Elke goede tekst begint met onderzoek. Kijk niet alleen naar zoekvolume: een onderwerp met weinig zoekopdrachten kan juist waardevol zijn als het precies jouw doelgroep raakt. Bepaal daarna de intentie. Bij een informatieve zoekvraag geef je een diepgaand antwoord met context. Bij een navigerende zoekvraag moet je direct zichtbaar zijn op je merknaam. Bij een commerciële zoekvraag vergelijk je opties, en bij een transactionele zoekvraag hoort een korte boodschap met een duidelijke call-to-action. Bekijk altijd eerst welke pagina's nu bovenaan staan: die laten zien wat Google als beste match ziet."
    },
    {
      "h": "Stap 2: een heldere tekststructuur",
      "p": "Een logische opbouw helpt lezers én AI-systemen. De H1 is de titel met het hoofdzoekwoord, H2's zijn de hoofdthema's en H3's de deelonderwerpen daarbinnen. Formuleer koppen als vraag of als direct antwoord: niet 'Inleiding', maar 'Wat is SEO-gericht schrijven?'. Een lezer die alleen de koppen scant, moet al weten waar de pagina over gaat, en een taalmodel dat naar citeerbare fragmenten zoekt evengoed. Houd zinnen en alinea's kort en schrijf actief."
    },
    {
      "h": "Stap 3: schrijven voor AI-zichtbaarheid",
      "p": "Om door ChatGPT of Google AI Overviews te worden genoemd, moet je content citeerbaar zijn: feiten en definities helder en beknopt, bij voorkeur in de eerste zinnen van een sectie. Taalmodellen geven de voorkeur aan bronnen met unieke, controleerbare informatie. Werk daarom vanuit eigen materiaal: praktijkervaring, cijfers, cases en klantervaringen. AI-schrijftools zonder die input leveren teksten die niet te onderscheiden zijn van die van je concurrent."
    },
    {
      "h": "Stap 4: on-page elementen optimaliseren",
      "p": "Houd de title tag rond de 55 tekens, met het belangrijkste zoekwoord vooraan. Schrijf een meta description die uitnodigt tot klikken. Maak de URL kort en beschrijvend, met koppeltekens tussen de woorden. Geef elke afbeelding een beschrijvende alt-tekst en vat video's kort samen in tekst op de pagina. Afbeeldingen en video's zijn voor sommige zoekopdrachten inmiddels een voorwaarde om te ranken, en AI-zoekmachines gebruiken ze ook als bron."
    },
    {
      "h": "Stap 5: interne links en topical authority",
      "p": "Een tekst staat nooit op zichzelf. Met interne links laat je zoekmachines zien hoe je pagina's samenhangen en verdeel je linkwaarde over je site. Link vanuit een nieuwe blog naar relevante oudere artikelen en dienstpagina's, en andersom. Bouw ondersteunende pagina's voor subonderwerpen die in het hoofdartikel maar kort aan bod komen. Zo groeit je autoriteit op een thema stap voor stap."
    },
    {
      "h": "AI als gereedschap, niet als schrijver",
      "p": "AI-tools versnellen het onderzoek, leveren een eerste opzet en brengen ideeën boven. Ze vervangen geen redactie. Controleer altijd de feiten, pas de toon aan op je merk en voeg de praktijkervaring toe die een model niet heeft. Teksten die rechtstreeks uit een AI-tool komen, zijn generiek, en generieke content wordt niet geciteerd, niet onthouden en niet gedeeld. De vuistregel: AI voor snelheid en structuur, de mens voor expertise en kwaliteit."
    },
    {
      "h": "Na publicatie: meten en verbeteren",
      "p": "Publiceren is geen eindpunt. Volg in Search Console hoe een pagina presteert. Komen er zoekopdrachten binnen die je pagina nog niet beantwoordt, voeg dan een sectie toe. Daalt het verkeer, onderzoek dan of de zoekintentie is verschoven of dat een concurrent een betere tekst heeft. Over lengte: een uitgebreide handleiding kan 2.000 woorden tellen, een helder antwoord op een specifieke vraag 300. Volledigheid telt, niet het aantal woorden."
    },
    {
      "h": "Hulp bij SEO-gericht schrijven",
      "p": "Wil je weten hoe je huidige teksten scoren in Google en in AI-antwoorden? Vraag de gratis SEO-scan aan. Daarin zie je waar je pagina's tekortschieten in structuur, zoekintentie of autoriteit, en welke onderwerpen je concurrenten al wel afdekken. Wil je de content liever uitbesteden, dan schrijven we SEO-teksten op basis van zoekwoordonderzoek en jouw eigen expertise."
    }
  ]
},
  "ai-in-seo-de-toekomst-van-zoekmachineoptimalisatie": {
  "slug": "ai-in-seo-de-toekomst-van-zoekmachineoptimalisatie",
  "title": "AI in SEO: de toekomst van zoekmachineoptimalisatie",
  "description": "Hoe verandert kunstmatige intelligentie SEO? Van data-analyse tot contentcreatie: dit is de impact van AI op zoekmachineoptimalisatie.",
  "date": "2024-04-18",
  "tag": "AI & SEO",
  "excerpt": "AI is geen losse tool meer binnen SEO, maar een fundamenteel onderdeel van hoe we zoekgedrag analyseren en content maken.",
  "image": "/assets/blog/ai-in-seo-de-toekomst-van-zoekmachineoptimalisatie.jpg",
  "imageAlt": "Illustratie van kunstmatige intelligentie in SEO",
  "sections": [
    {
      "h": "Wat AI verandert aan zoekmachineoptimalisatie",
      "p": "Kunstmatige intelligentie maakt het mogelijk om enorme hoeveelheden data te doorgronden op een schaal die voor mensen onbereikbaar is. Waar SEO-specialisten vroeger handmatig zoekwoorden en concurrenten analyseerden, doen algoritmes dat nu in seconden. Het resultaat is dat optimalisatie niet langer draait om losse zoekwoorden, maar om het volledig begrijpen van zoekintentie, context en gebruikersgedrag."
    },
    {
      "h": "Machine learning in SEO-strategieën",
      "p": "Machine learning-modellen leren van historische zoek- en klikdata en voorspellen daarmee welke content het beste aansluit bij een zoekopdracht. Tools als Semrush en Moz gebruiken deze modellen om verbeterpunten te signaleren nog voordat een positie daadwerkelijk daalt. Voor SEO-specialisten betekent dit dat strategieën steeds vaker vooruitkijkend zijn in plaats van reactief."
    },
    {
      "h": "Natural language processing en content",
      "p": "Natuurlijke taalverwerking stelt AI in staat om tekst te beoordelen op relevantie, leesbaarheid en onderwerpdekking, niet alleen op het voorkomen van een zoekwoord. Tools zoals NeuronWriter en Surfer gebruiken NLP om te bepalen welke subonderwerpen een tekst compleet maken. Dat verschuift de focus van schrijvers: niet keyword-dichtheid, maar volledigheid van het antwoord bepaalt de kwaliteit."
    },
    {
      "h": "Zoekwoordanalyse op een hoger niveau",
      "p": "AI-gedreven tools ontdekken sneller verschuivingen in zoekgedrag en leggen verbanden tussen zoektermen die voorheen los van elkaar werden behandeld. Dat maakt het mogelijk om content te bouwen rond een compleet thema in plaats van een enkel zoekwoord, wat aansluit bij hoe moderne zoekalgoritmes content beoordelen."
    },
    {
      "h": "Gebruikerservaring en voorspellend gedrag",
      "p": "Chatbots en aanbevelingssystemen op basis van AI maken het mogelijk om bezoekers direct te helpen en content te personaliseren op basis van eerder gedrag. Dat verhoogt niet alleen de tevredenheid, maar ook belangrijke signalen zoals tijd op de pagina en herhaalbezoek, factoren die zoekmachines meewegen."
    },
    {
      "h": "AI en linkbuilding: kwaliteit boven kwantiteit",
      "p": "AI-algoritmes binnen tools als Ahrefs en Pitchbox beoordelen welke websites daadwerkelijk relevant en gezaghebbend zijn voor een linkmogelijkheid. Dat maakt linkbuilding gerichter: niet zoveel mogelijk links verzamelen, maar de links die daadwerkelijk bijdragen aan autoriteit binnen een specifiek onderwerp."
    },
    {
      "h": "Waar AI de mens niet vervangt",
      "p": "AI-gegenereerde content moet altijd gecontroleerd worden op toon, juistheid en merkidentiteit. Een algoritme herkent patronen, maar mist het inzicht in waarom een klant iets belangrijk vindt. De sterkste SEO-strategieën combineren daarom AI-snelheid met menselijke beoordeling."
    }
  ]
},
  "het-gebruik-nlp-in-seo-met-ai-tools-als-neuronwriter-een-casestudy": {
  "slug": "het-gebruik-nlp-in-seo-met-ai-tools-als-neuronwriter-een-casestudy",
  "title": "NLP in SEO met AI-tools als NeuronWriter: een casestudy",
  "description": "Hoe wij met NLP-analyse en NeuronWriter de contentkwaliteit verbeterden en binnen enkele maanden posities wonnen. Inclusief concrete resultaten.",
  "date": "2024-05-14",
  "tag": "Case",
  "excerpt": "Een praktijkvoorbeeld: wat NLP-optimalisatie in de praktijk wel en niet oplevert voor je posities.",
  "image": "/assets/blog/het-gebruik-nlp-in-seo-met-ai-tools-als-neuronwriter-een-casestudy.jpg",
  "imageAlt": "NLP en AI-tools voor SEO-content",
  "sections": [
    {
      "h": "De uitgangssituatie",
      "p": "We begonnen dit traject met een klant wiens servicepagina's technisch prima in orde waren, maar structureel bleven hangen rond positie tien tot vijftien. De content was geschreven vanuit het eigen aanbod in plaats vanuit de vraag van de bezoeker, waardoor belangrijke subonderwerpen ontbraken die concurrenten wel behandelden."
    },
    {
      "h": "Wat NLP-analyse concreet oplevert",
      "p": "NeuronWriter analyseert de best rankende pagina's voor een zoekterm en berekent welke woorden, entiteiten en subonderwerpen daarin structureel terugkomen. Dat levert geen zoekwoordenlijst op, maar een contentplan: welke vragen moet de tekst beantwoorden om als volledig te worden beoordeeld door zowel lezer als algoritme."
    },
    {
      "h": "De aanpak per pagina",
      "p": "Voor elke servicepagina brachten we eerst de contentgaten ten opzichte van de top tien in kaart. Vervolgens herschreven we de opbouw naar een vraag-en-antwoordstructuur, voegden we ontbrekende subonderwerpen toe en verwijderden we passages die geen toegevoegde waarde hadden. Er zijn in dit traject bewust geen nieuwe backlinks ingezet en geen technische wijzigingen doorgevoerd."
    },
    {
      "h": "Waarom we voor deze volgorde kozen",
      "p": "Door alleen aan content te sleutelen, konden we het effect van NLP-optimalisatie zuiver meten zonder ruis van andere factoren. Dat is belangrijk om te bepalen of een investering in dit soort tools zich daadwerkelijk terugverdient voordat je het breder inzet."
    },
    {
      "h": "De resultaten na vier maanden",
      "p": "Zeven van de tien pagina's stonden na vier maanden in de top vijf en het organische verkeer naar deze pagina's steeg met 61 procent. De grootste stijgers waren de pagina's met de meeste ontbrekende subonderwerpen vóór de optimalisatie, wat bevestigt dat dekking van het onderwerp zwaarder weegt dan puur zoekwoordgebruik."
    },
    {
      "h": "Wat dit betekent voor jouw content",
      "p": "NLP-tools zijn geen vervanging voor een contentstrategie, maar een manier om objectief te bepalen waar je content tekortschiet ten opzichte van de concurrentie. Voor bedrijven met content die al langere tijd stil staat, is dit vaak de snelste manier om weer beweging te krijgen zonder te investeren in nieuwe links."
    }
  ]
},
  "searchgpt": {
  "slug": "searchgpt",
  "title": "SearchGPT: wat betekent OpenAI's zoekmachine voor jouw vindbaarheid?",
  "description": "SearchGPT combineert een chatbot met live zoekresultaten. Wat is het, hoe werkt het en hoe zorg je dat jouw bedrijf hierin wordt genoemd?",
  "date": "2024-12-10",
  "tag": "GEO",
  "excerpt": "SearchGPT beantwoordt vragen direct met bronnen erbij. Wie niet als bron wordt gebruikt, bestaat online niet meer voor deze gebruiker.",
  "image": "/assets/blog/searchgpt.jpg",
  "imageAlt": "SearchGPT zoekmachine van OpenAI",
  "sections": [
    {
      "h": "Wat is SearchGPT precies",
      "p": "SearchGPT is de zoekfunctie van OpenAI die realtime informatie van het web combineert met de conversatievaardigheden van ChatGPT. In plaats van een lijst met links krijgt de gebruiker een samengesteld antwoord met bronvermeldingen erbij. Voor gebruikers is dat sneller; voor website-eigenaren betekent het dat zichtbaarheid niet meer draait om een positie, maar om een vermelding."
    },
    {
      "h": "Hoe SearchGPT bronnen selecteert",
      "p": "Het systeem beoordeelt content op actualiteit, duidelijkheid en autoriteit. Pagina's die een vraag direct en feitelijk beantwoorden, met concrete cijfers en heldere structuur, worden vaker als bron gebruikt dan pagina's vol marketingtaal. Techniek zoals snelle laadtijden en correcte structured data helpt, maar de doorslag geeft de kwaliteit van het antwoord zelf."
    },
    {
      "h": "Het verschil met traditionele SEO",
      "p": "Bij klassieke SEO optimaliseer je voor een positie in een lijst; bij SearchGPT optimaliseer je voor opname in een antwoord. Dat vraagt een andere schrijfstijl: korte, feitelijke alinea's die op zichzelf kunnen staan, in plaats van lange inleidingen voordat het antwoord komt."
    },
    {
      "h": "Wat je nu al kunt doen",
      "p": "Zorg dat je belangrijkste pagina's het antwoord op de kernvraag in de eerste alinea geven, gebruik heldere H2's die als vraag zijn geformuleerd en voeg waar relevant FAQ-schema toe. Consistente en actuele informatie op je site vergroot de kans dat een AI-systeem je als betrouwbare bron beoordeelt."
    },
    {
      "h": "Meet of je al zichtbaar bent",
      "p": "Stel de vragen die klanten aan jou stellen ook aan SearchGPT en kijk welke bedrijven worden genoemd. Sta je er niet bij, dan geeft dat direct richting aan welke content je moet aanscherpen of aanvullen."
    }
  ]
},
  "ranken-in-perplexity": {
  "slug": "ranken-in-perplexity",
  "title": "Ranken in Perplexity: zo word je genoemd door de AI-zoekmachine",
  "description": "Perplexity groeit snel als alternatief voor Google. Dit is hoe de AI-zoekmachine bronnen kiest en hoe je zorgt dat jouw bedrijf wordt genoemd.",
  "date": "2025-07-22",
  "tag": "GEO",
  "excerpt": "Perplexity geeft een direct antwoord met bronvermeldingen. Wie daar niet tussen staat, mist een groeiend deel van het zoekverkeer.",
  "image": "/assets/blog/ranken-in-perplexity.jpg",
  "imageAlt": "Perplexity AI zoekresultaten",
  "sections": [
    {
      "h": "Waarom Perplexity relevant is geworden",
      "p": "Perplexity combineert een zoekmachine met een taalmodel en toont per antwoord de bronnen waarop het zich baseert. Voor gebruikers die snel een onderbouwd antwoord willen zonder tien tabbladen te openen, is dit aantrekkelijker geworden dan een traditionele zoekmachine. Dat maakt Perplexity een groeiend, maar nog onderschat kanaal voor zichtbaarheid."
    },
    {
      "h": "Hoe Perplexity bronnen beoordeelt",
      "p": "Het model geeft voorkeur aan actuele, feitelijke content met een duidelijke structuur en herkenbare autoriteit binnen een onderwerp. Pagina's die met concrete cijfers en directe antwoorden werken, worden vaker geciteerd dan brede, algemene overzichtspagina's. Ook consistentie tussen wat je zelf zegt en wat externe bronnen over je zeggen, telt mee."
    },
    {
      "h": "Het belang van vermeldingen buiten je eigen site",
      "p": "Perplexity trekt informatie uit een breed netwerk van bronnen, waaronder nieuwswebsites, vakportalen en forums. Word je daar al genoemd met je expertise, dan vergroot dat de kans dat het model je ook zelf citeert. Dit maakt PR en gastcontent relevanter voor GEO dan ze traditioneel voor SEO waren."
    },
    {
      "h": "Praktische optimalisatiestappen",
      "p": "Beantwoord vragen expliciet in de eerste zinnen van een sectie, onderbouw claims met bronnen en cijfers, en zorg voor actuele publicatiedata op je pagina's. Voeg gestructureerde data toe waar mogelijk, zodat machines je content correct kunnen interpreteren."
    },
    {
      "h": "Testen en bijsturen",
      "p": "Stel dezelfde vragen die je doelgroep stelt rechtstreeks aan Perplexity en kijk welke resultaten verschijnen. Ontbreekt je bedrijf, ga dan na welke concurrent wel wordt genoemd en waarom: vaak zit het verschil in specificiteit en actualiteit van de content."
    }
  ]
},
  "google-ai-mode": {
  "slug": "google-ai-mode",
  "title": "Google AI Mode: zo verandert zoeken en wat betekent dat voor jouw site",
  "description": "Google AI Mode geeft complete, gegenereerde antwoorden binnen de zoekresultaten. Dit is de impact op klikken en hoe je toch zichtbaar blijft.",
  "date": "2025-08-19",
  "tag": "GEO",
  "excerpt": "AI Mode beantwoordt complexe zoekopdrachten volledig binnen Google zelf. Klikken worden schaarser, zichtbaarheid in het antwoord wordt cruciaal.",
  "image": "/assets/blog/google-ai-mode.jpg",
  "imageAlt": "Google AI Mode zoekresultaat",
  "sections": [
    {
      "h": "Wat AI Mode toevoegt aan Google",
      "p": "AI Mode is een uitgebreide, conversationele zoekervaring binnen Google waarin complexere vragen in één keer worden beantwoord, met de mogelijkheid om door te vragen. Anders dan de klassieke AI Overviews neemt AI Mode een groter deel van het scherm in en verwijst het minder snel door naar externe sites."
    },
    {
      "h": "Wat dit betekent voor klikgedrag",
      "p": "Voor informatieve zoekopdrachten daalt het aantal kliks naar websites merkbaar, omdat de gebruiker het antwoord al op de resultatenpagina krijgt. Voor transactionele en lokale zoekopdrachten blijft doorklikken vaker nodig, omdat de gebruiker uiteindelijk toch een aanbieder moet kiezen of contact wil opnemen."
    },
    {
      "h": "Hoe je toch zichtbaar blijft",
      "p": "Content die feitelijk, actueel en goed gestructureerd is, wordt vaker als bron gebruikt binnen AI Mode. Zorg dat je antwoorden expliciet en zelfstandig leesbaar zijn per sectie, zodat een model precies dat stuk kan overnemen dat bij de vraag hoort."
    },
    {
      "h": "Waarom merkopbouw belangrijker wordt",
      "p": "Als klikken afnemen voor oriënterende zoekopdrachten, wordt merkbekendheid een grotere factor in de uiteindelijke keuze van de gebruiker. Zorg dat je naam consistent en herkenbaar terugkomt in de bronnen die AI Mode gebruikt, ook als dat niet direct tot een klik leidt."
    },
    {
      "h": "Focus op wat wel converteert",
      "p": "Verschuif de aandacht van puur verkeer naar kwalitatieve conversies: lokale zoekopdrachten, vergelijkingen en aankoopklare vragen leveren nog altijd bezoekers op die klaar zijn om te converteren. Meet daarom niet alleen posities, maar vooral welk verkeer nog overblijft en wat dat oplevert."
    }
  ]
},
  "content-schrijven-voor-ai": {
  "slug": "content-schrijven-voor-ai",
  "title": "Content schrijven voor AI: zo word je geciteerd in plaats van genegeerd",
  "description": "Hoe schrijf je content die AI-zoekmachines citeren? Structuur, feiten en formuleringen die werken in ChatGPT, Gemini en Perplexity.",
  "date": "2026-06-15",
  "tag": "GEO",
  "excerpt": "Schrijven voor AI is niet schrijven mét AI. Dit zijn de regels die bepalen of jouw tekst wordt overgenomen als antwoord.",
  "image": "/assets/blog/content-schrijven-voor-ai.jpg",
  "imageAlt": "Content schrijven voor AI-zoekmachines",
  "sections": [
    {
      "h": "Antwoord eerst, uitleg daarna",
      "p": "Zet het antwoord op de kernvraag in de eerste twee zinnen onder een kop. AI-modellen extraheren precies die passages het vaakst, omdat ze op zichzelf kunnen staan zonder de rest van de tekst nodig te hebben. De onderbouwing, nuance en voorbeelden zet je daarna, voor de lezer die verder wil lezen."
    },
    {
      "h": "Wees concreet en controleerbaar",
      "p": "Noem bedragen, percentages, doorlooptijden en bronnen in plaats van vage beloftes. Een zin als 'wij leveren snel resultaat' wordt vrijwel nooit geciteerd; 'lokale verbeteringen zijn meestal binnen vier weken zichtbaar' wel, omdat het feitelijk en controleerbaar is."
    },
    {
      "h": "Structuur is net zo belangrijk als inhoud",
      "p": "Gebruik logische koppen die als vraag zijn geformuleerd, korte alinea's van maximaal een paar zinnen, opsommingen waar dat kan en FAQ-markup onderaan de pagina. Zo kan een AI-model precies het onderdeel selecteren dat bij de gestelde vraag hoort, zonder de hele pagina te hoeven interpreteren."
    },
    {
      "h": "Herhaal kernpunten in eigen woorden",
      "p": "Waar SEO-schrijven vaak juist herhaling van dezelfde zoekwoorden vermeed, helpt het voor GEO om je belangrijkste boodschap op meerdere plekken in net andere bewoordingen te herhalen. Dat vergroot de kans dat een model, ongeacht welke formulering het gebruikt om te zoeken, jouw content als match herkent."
    },
    {
      "h": "Vermijd stapeling van claims zonder bewijs",
      "p": "AI-modellen wegen betrouwbaarheid mee. Onderbouw uitspraken met eigen data, klantcijfers of externe bronnen in plaats van opeenvolgende superlatieven. Dat verhoogt niet alleen de kans op citatie, maar ook het vertrouwen van de menselijke lezer."
    },
    {
      "h": "Actualiseer bestaande content structureel",
      "p": "AI-systemen geven de voorkeur aan recente informatie. Content die je een paar jaar geleden hebt geschreven en sindsdien niet hebt bijgewerkt, verliest gestaag relevantie, ook als de kern nog klopt. Plan periodiek onderhoud in plaats van alleen nieuwe pagina's te schrijven."
    }
  ]
},
  "seo-taken-en-ai": {
  "slug": "seo-taken-en-ai",
  "title": "SEO-taken en AI: welk werk kun je uitbesteden aan een algoritme?",
  "description": "Niet elke SEO-taak is geschikt voor automatisering. Dit overzicht laat zien welk werk AI goed van je overneemt en waar mensen onmisbaar blijven.",
  "date": "2025-09-30",
  "tag": "AI & SEO",
  "excerpt": "AI versnelt veel SEO-werk, maar niet elk onderdeel van het vak. Dit is waar automatisering wel en niet verstandig is.",
  "image": "/assets/blog/seo-taken-en-ai.jpg",
  "imageAlt": "SEO-taken en kunstmatige intelligentie",
  "sections": [
    {
      "h": "Waarom deze vraag steeds vaker gesteld wordt",
      "p": "Naarmate AI-tools makkelijker toegankelijk worden, groeit de verleiding om zoveel mogelijk SEO-werk te automatiseren. Dat is begrijpelijk vanuit tijd- en kostenoogpunt, maar niet elke taak wordt er beter van. Het onderscheid tussen repetitief werk en strategisch werk is hierin doorslaggevend."
    },
    {
      "h": "Taken die AI uitstekend van je overneemt",
      "p": "Monitoring van indexeringsstatus, meldingen bij 404-fouten, signalering van positiewijzigingen, validatie van schema-markup en het samenstellen van standaardrapportages zijn allemaal taken waar een algoritme sneller en consistenter is dan een mens. Dit is werk waarbij fouten duur zijn maar creativiteit niet nodig is."
    },
    {
      "h": "Waar automatisering risico's oplevert",
      "p": "Volledig geautomatiseerde contentproductie zonder menselijke controle, linkbuilding gericht op volume in plaats van relevantie, en het interpreteren van cijfers zonder context zijn de gebieden waar het vaak misgaat. Een algoritme herkent een trend, maar begrijpt niet altijd waarom die trend voor jouw specifieke markt wel of niet relevant is."
    },
    {
      "h": "Zoekwoordenonderzoek: gedeeltelijk automatiseerbaar",
      "p": "AI-tools zijn sterk in het snel verzamelen en clusteren van zoekwoorddata, maar de vertaling naar een contentstrategie die past bij je diensten en doelgroep vraagt nog altijd mensenwerk. Gebruik AI voor de verzameling, niet voor de uiteindelijke prioritering."
    },
    {
      "h": "Contentcreatie: AI als startpunt, niet als eindpunt",
      "p": "Een eerste opzet, structuur of samenvatting laten genereren bespaart tijd, maar de uiteindelijke tekst moet worden gecontroleerd op juistheid, merkstem en nuance. Ongecontroleerde AI-content is vaak feitelijk correct maar mist de specifieke details die een tekst overtuigend maken."
    },
    {
      "h": "Een praktische taakverdeling",
      "p": "Automatiseer wekelijkse technische controles met een melding bij afwijkingen, laat AI een eerste conceptversie van content maken, en reserveer menselijke tijd voor strategie, interpretatie van resultaten en de uiteindelijke redactieslag. Deze verdeling levert voor de meeste MKB-bedrijven de beste balans tussen snelheid en kwaliteit."
    }
  ]
},
  "wat-blijft-er-in-2026-hetzelfde-op-seo-gebied": {
  "slug": "wat-blijft-er-in-2026-hetzelfde-op-seo-gebied",
  "title": "Wat blijft er in 2026 hetzelfde op SEO-gebied?",
  "description": "Tussen alle AI-ontwikkelingen blijven een aantal SEO-fundamenten onveranderd. Dit zijn de basisprincipes die ook in 2026 gewoon blijven werken.",
  "date": "2025-11-12",
  "tag": "SEO",
  "excerpt": "Bij alle aandacht voor AI-zoekmachines vergeten veel bedrijven dat de basis van SEO grotendeels overeind blijft.",
  "image": "/assets/blog/wat-blijft-er-in-2026-hetzelfde-op-seo-gebied.jpg",
  "imageAlt": "SEO-fundamenten die blijven werken",
  "sections": [
    {
      "h": "Relevantie blijft de kern",
      "p": "Ongeacht welk algoritme of model een zoekopdracht verwerkt, de vraag blijft hetzelfde: sluit deze content aan bij wat de gebruiker zoekt. Content die een vraag half beantwoordt of afleidt naar iets anders, presteert slecht, of dat nu in een klassieke zoekmachine is of in een AI-antwoord."
    },
    {
      "h": "Technische basis blijft een randvoorwaarde",
      "p": "Snelheid, mobielvriendelijkheid, een logische sitestructuur en correcte indexering blijven noodzakelijk. Een technisch zwakke site wordt nog steeds slechter gecrawld en beoordeeld, ongeacht hoe goed de content erop is."
    },
    {
      "h": "Autoriteit en vertrouwen blijven meewegen",
      "p": "Backlinks en vermeldingen van betrouwbare bronnen blijven een signaal van geloofwaardigheid, zowel voor klassieke zoekmachines als voor AI-systemen die bronnen selecteren. Een sterk linkprofiel bouw je niet in maanden, en die opbouwtijd verandert niet door nieuwe technologie."
    },
    {
      "h": "Gebruikerservaring blijft doorslaggevend",
      "p": "Bounce rate, tijd op de pagina en herhaalbezoek zijn signalen die aangeven of content daadwerkelijk waarde levert. Deze gedragssignalen blijven relevant, ongeacht via welk kanaal een bezoeker binnenkomt."
    },
    {
      "h": "Consistente publicatie blijft lonen",
      "p": "Bedrijven die structureel blijven publiceren en actualiseren, bouwen sneller autoriteit op een onderwerp op dan bedrijven die sporadisch content plaatsen. Dat principe verandert niet door de opkomst van AI-zoekmachines, het wordt er eerder door versterkt."
    },
    {
      "h": "Wat je hiervan moet onthouden",
      "p": "Investeer niet je hele budget in nieuwe GEO-technieken ten koste van de basis. De bedrijven die het beste presteren in 2026 zijn degenen die de fundamenten op orde hebben én zich aanpassen aan nieuwe zoekkanalen, niet degenen die de basis overslaan voor de nieuwste trend."
    }
  ]
},
  "de-beste-local-strategie-voor-2026": {
  "slug": "de-beste-local-strategie-voor-2026",
  "title": "De beste local SEO-strategie voor 2026",
  "description": "Local SEO in 2026: Google Bedrijfsprofiel, reviews, lokale content en AI-zichtbaarheid. Concreet stappenplan voor lokale ondernemers.",
  "date": "2026-03-05",
  "tag": "Local SEO",
  "excerpt": "Lokaal winnen is nog steeds het snelste rendement voor MKB-bedrijven met een duidelijk werkgebied.",
  "image": "/assets/blog/de-beste-local-strategie-voor-2026.jpg",
  "imageAlt": "Local SEO strategie 2026",
  "sections": [
    {
      "h": "Je Google Bedrijfsprofiel is je belangrijkste pagina",
      "p": "Voor veel lokale zoekopdrachten wordt je Google Bedrijfsprofiel vaker bekeken dan je eigen website. Volledig ingevulde categorieën, actuele openingstijden, diensten, foto's en regelmatige updates bepalen een groot deel van je lokale zichtbaarheid, vaak meer dan techniek op de site zelf."
    },
    {
      "h": "Reviews zijn ranking én conversie tegelijk",
      "p": "Reviews beïnvloeden zowel je positie in het lokale pakket als de beslissing van de zoeker om juist voor jou te kiezen. Vraag structureel om reviews na een afgeronde opdracht en reageer op elke review, positief én negatief. Het effect op klikratio is vaak groter dan een positie erbij."
    },
    {
      "h": "Lokale content zonder dubbele pagina's",
      "p": "Maak alleen een aparte pagina per plaats als je daar daadwerkelijk iets specifieks te vertellen hebt, zoals een ander team, andere openingstijden of specifieke lokale voorbeelden. Twintig bijna identieke pagina's met enkel een andere plaatsnaam werken averechts en kunnen als dunne content worden beoordeeld."
    },
    {
      "h": "Consistentie van NAW-gegevens",
      "p": "Naam, adres en telefoonnummer moeten overal exact hetzelfde zijn: op je site, in bedrijvengidsen en op social media. Inconsistenties zorgen voor twijfel bij zoekmachines én bij AI-systemen die steeds vaker lokale vragen beantwoorden."
    },
    {
      "h": "Voorbereiden op AI-gedreven lokale zoekopdrachten",
      "p": "Steeds meer lokale vragen worden gesteld aan AI-assistenten in plaats van rechtstreeks aan Google. Zorg dat je diensten en werkgebied duidelijk en feitelijk beschreven staan, zodat een AI-systeem je correct kan citeren wanneer iemand vraagt naar een aanbieder in jouw regio."
    },
    {
      "h": "Meten en bijsturen per kwartaal",
      "p": "Volg niet alleen posities maar ook het aantal telefoontjes, routebeschrijvingen en websiteclicks vanuit je Bedrijfsprofiel. Deze cijfers geven een realistischer beeld van lokale prestaties dan alleen organische rankings."
    }
  ]
},
  "lokale-seo-wat-moet-je-weten-2": {
  "slug": "lokale-seo-wat-moet-je-weten-2",
  "title": "Lokale SEO: wat moet je weten om lokaal gevonden te worden?",
  "description": "De basis van lokale SEO op een rij: van Google Bedrijfsprofiel tot lokale zoekwoorden en vermeldingen. Praktisch en zonder overbodige theorie.",
  "date": "2022-01-19",
  "tag": "Local SEO",
  "excerpt": "Lokaal gevonden worden begint bij een paar fundamentele keuzes die veel bedrijven onbewust overslaan.",
  "image": "/assets/blog/lokale-seo-wat-moet-je-weten-2.jpg",
  "imageAlt": "Lokale SEO basisprincipes",
  "sections": [
    {
      "h": "Wat lokale SEO onderscheidt van reguliere SEO",
      "p": "Bij lokale SEO speelt naast relevantie en autoriteit ook afstand een rol: Google toont resultaten die passen bij de locatie van de zoeker. Dat betekent dat je niet alleen concurreert op inhoud, maar ook op nabijheid en lokale signalen zoals vermeldingen en reviews."
    },
    {
      "h": "Google Bedrijfsprofiel als startpunt",
      "p": "Zonder een volledig ingericht Bedrijfsprofiel mis je het grootste deel van het lokale zoekverkeer. Kies de juiste hoofdcategorie, vul al je diensten in en voeg regelmatig nieuwe foto's toe om actief te blijven in de ogen van Google."
    },
    {
      "h": "Lokale zoekwoorden verwerken zonder overdrijving",
      "p": "Verwerk je plaatsnaam en regio natuurlijk in titels, koppen en tekst, maar herhaal het niet onnodig vaak. Eén duidelijke vermelding per belangrijk onderdeel van de pagina is voldoende voor zowel gebruiker als zoekmachine."
    },
    {
      "h": "Vermeldingen in bedrijvengidsen",
      "p": "Consistente vermeldingen in relevante bedrijvengidsen versterken het vertrouwen dat zoekmachines in je bedrijfsgegevens hebben. Kies voor kwaliteit boven kwantiteit: een paar relevante, actuele vermeldingen werken beter dan tientallen verouderde profielen."
    },
    {
      "h": "Reviews structureel opbouwen",
      "p": "Een gestage stroom van nieuwe reviews werkt beter dan een piek gevolgd door stilte. Maak het vragen om een review onderdeel van je vaste proces na een afgeronde klus of aankoop."
    }
  ]
},
  "lokale-zoekoptimalisatie-per-landingspagina-8-best-practices": {
  "slug": "lokale-zoekoptimalisatie-per-landingspagina-8-best-practices",
  "title": "Lokale zoekoptimalisatie per landingspagina: 8 best practices",
  "description": "Acht concrete best practices om lokale landingspagina's te optimaliseren zonder in dunne, dubbele content te vervallen.",
  "date": "2023-05-08",
  "tag": "Local SEO",
  "excerpt": "Lokale landingspagina's werken alleen als ze inhoudelijk verschillen. Dit zijn de acht regels die dat waarborgen.",
  "image": "/assets/blog/lokale-zoekoptimalisatie-per-landingspagina-8-best-practices.jpg",
  "imageAlt": "Lokale landingspagina optimalisatie",
  "sections": [
    {
      "h": "Begin met een duidelijk doel per pagina",
      "p": "Bepaal voor elke lokale landingspagina welke unieke waarde ze biedt: een ander team, specifieke lokale voorbeelden of afwijkende diensten. Zonder dat uitgangspunt eindig je met pagina's die alleen in plaatsnaam verschillen, wat zoekmachines als dunne content herkennen."
    },
    {
      "h": "Gebruik echte, lokale content",
      "p": "Verwerk concrete referenties naar de plaats of regio: straatnamen, wijken, lokale projecten of samenwerkingen. Dit soort specificiteit is precies wat een lokale pagina onderscheidt van een generieke tekst met een plaatsnaam erin geplakt."
    },
    {
      "h": "Optimaliseer titel en meta-omschrijving per locatie",
      "p": "Verwerk de plaatsnaam in de title tag en meta-omschrijving, maar behoud een natuurlijke zin. Een titel die begint met de dienst en eindigt met de locatie werkt doorgaans beter dan een titel die alleen uit zoekwoorden bestaat."
    },
    {
      "h": "Zorg voor unieke afbeeldingen en social proof",
      "p": "Gebruik waar mogelijk foto's van het daadwerkelijke team, de locatie of eerdere projecten in die regio, aangevuld met reviews van klanten uit dat gebied. Dit vergroot niet alleen de geloofwaardigheid maar ook de tijd die bezoekers op de pagina doorbrengen."
    },
    {
      "h": "Interne links tussen locatiepagina's",
      "p": "Verbind lokale pagina's logisch met elkaar en met een centrale overzichtspagina, zodat zowel bezoekers als zoekmachines de structuur van je werkgebied goed begrijpen."
    },
    {
      "h": "Vermijd het klakkeloos dupliceren van teksten",
      "p": "Kopieer nooit dezelfde tekst met enkel een andere plaatsnaam. Schrijf per pagina minimaal een deel van de content opnieuw, gericht op wat relevant is voor die specifieke locatie."
    },
    {
      "h": "Voeg lokale structured data toe",
      "p": "Gebruik LocalBusiness-schema per vestiging of werkgebied, inclusief adres, openingstijden en contactgegevens. Dit helpt zoekmachines de juiste informatie te tonen in lokale zoekresultaten."
    },
    {
      "h": "Monitor per pagina, niet alleen op domeinniveau",
      "p": "Volg posities, verkeer en conversies per lokale pagina afzonderlijk. Zo zie je snel welke pagina's ondermaats presteren en gerichte aandacht nodig hebben, in plaats van dat dit wegvalt in een gemiddelde over de hele site."
    }
  ]
},
  "hoog-in-google-mijn-bedrijf-ranken": {
  "slug": "hoog-in-google-mijn-bedrijf-ranken",
  "title": "Hoog in Google Mijn Bedrijf ranken: praktische stappen",
  "description": "Zo verbeter je je positie in het lokale pakket van Google: van categorieën en foto's tot reviews en actieve updates.",
  "date": "2021-01-25",
  "tag": "Local SEO",
  "excerpt": "Een compleet en actief bedrijfsprofiel is de snelste weg naar een betere plek in het lokale zoekresultaat.",
  "image": "/assets/blog/hoog-in-google-mijn-bedrijf-ranken.jpg",
  "imageAlt": "Google Mijn Bedrijf ranken",
  "sections": [
    {
      "h": "Vul je profiel volledig in",
      "p": "Een onvolledig profiel wordt door Google lager gewaardeerd dan een profiel waarin elke categorie, dienst, openingstijd en beschrijving is ingevuld. Volledigheid is een van de meest onderschatte rankingfactoren binnen het lokale pakket."
    },
    {
      "h": "Kies de juiste hoofd- en subcategorieën",
      "p": "De hoofdcategorie bepaalt grotendeels voor welke zoekopdrachten je zichtbaar wordt. Kies zo specifiek mogelijk en vul relevante subcategorieën aan om je bereik te vergroten zonder af te wijken van je kernactiviteit."
    },
    {
      "h": "Blijf actief met foto's en updates",
      "p": "Bedrijven die regelmatig nieuwe foto's en updates plaatsen, worden door Google als actiever en betrouwbaarder beoordeeld. Dit is een laagdrempelige manier om je zichtbaarheid te verbeteren zonder extra kosten."
    },
    {
      "h": "Verzamel reviews structureel",
      "p": "Het aantal, de recentheid en de inhoud van reviews zijn belangrijke signalen. Reageer altijd, ook op negatieve reviews, en verwerk waar mogelijk relevante zoekwoorden op een natuurlijke manier in je reactie."
    },
    {
      "h": "Beantwoord vragen op je profiel",
      "p": "De vraag-en-antwoordsectie wordt vaak overgeslagen, terwijl actief beantwoorde vragen bijdragen aan zowel vertrouwen als relevantie. Vul veelgestelde vragen zelf alvast in om verwarring te voorkomen."
    },
    {
      "h": "Zorg voor consistente NAW-gegevens elders online",
      "p": "Afwijkende gegevens in andere bronnen ondermijnen het vertrouwen dat Google in je bedrijfsprofiel heeft. Controleer periodiek of je gegevens overal identiek zijn."
    }
  ]
},
  "waarom-falen-de-meeste-merken-in-linkbuilding-top-5-fouten-die-je-moet-vermijden": {
  "slug": "waarom-falen-de-meeste-merken-in-linkbuilding-top-5-fouten-die-je-moet-vermijden",
  "title": "Waarom falen de meeste merken in linkbuilding? Top 5 fouten",
  "description": "De vijf meest gemaakte linkbuildingfouten en hoe je ze voorkomt, zodat je linkprofiel autoriteit opbouwt in plaats van risico.",
  "date": "2023-05-24",
  "tag": "Linkbuilding",
  "excerpt": "De meeste linkbuildingtrajecten falen niet door gebrek aan inspanning, maar door een verkeerde aanpak.",
  "image": "/assets/blog/waarom-falen-de-meeste-merken-in-linkbuilding-top-5-fouten-die-je-moet-vermijden.jpg",
  "imageAlt": "Fouten bij linkbuilding voorkomen",
  "sections": [
    {
      "h": "Fout 1: focussen op aantal in plaats van relevantie",
      "p": "Veel bedrijven jagen op een zo hoog mogelijk aantal backlinks, terwijl relevantie voor het onderwerp veel zwaarder weegt bij het bepalen van autoriteit. Tien links van relevante, gezaghebbende sites leveren doorgaans meer op dan honderd willekeurige vermeldingen."
    },
    {
      "h": "Fout 2: geen samenhang met de contentstrategie",
      "p": "Linkbuilding zonder onderliggende content om naar te verwijzen mist doel. Bouw eerst pagina's die het waard zijn om naar te linken, zoals onderzoek, praktische gidsen of unieke data, en zet daarna gericht linkbuilding in."
    },
    {
      "h": "Fout 3: te snel te veel links opbouwen",
      "p": "Een plotselinge piek in het aantal backlinks kan als onnatuurlijk worden beoordeeld. Een geleidelijke, consistente opbouw over tijd oogt betrouwbaarder en past beter bij hoe een merk organisch autoriteit zou opbouwen."
    },
    {
      "h": "Fout 4: ankertekst-overoptimalisatie",
      "p": "Het herhaaldelijk gebruiken van exact dezelfde zoekwoordrijke ankertekst is een bekend signaal van manipulatie. Varieer ankerteksten natuurlijk, inclusief merknaam- en URL-varianten naast beschrijvende teksten."
    },
    {
      "h": "Fout 5: geen onderhoud van het bestaande linkprofiel",
      "p": "Links verdwijnen, sites gaan offline en pagina's worden verwijderd. Zonder periodieke controle van je linkprofiel verlies je onopgemerkt autoriteit. Controleer minstens ieder kwartaal welke links nog actief en relevant zijn."
    }
  ]
},
  "belang-domain-rating": {
  "slug": "belang-domain-rating",
  "title": "Wat is Domain Rating en waarom is het belangrijk?",
  "description": "Domain Rating geeft een indicatie van de sterkte van je backlinkprofiel. Zo lees je de score en verbeter je hem gericht.",
  "date": "2024-12-18",
  "tag": "Linkbuilding",
  "excerpt": "Slechts één website ter wereld heeft een Domain Rating van 100. Dat maakt duidelijk hoe competitief linkbuilding is.",
  "image": "/assets/blog/belang-domain-rating.jpg",
  "imageAlt": "Domain Rating uitgelegd",
  "sections": [
    {
      "h": "Wat Domain Rating precies meet",
      "p": "Domain Rating, een metric van Ahrefs, geeft op een schaal van nul tot honderd aan hoe sterk het backlinkprofiel van een website is in vergelijking met andere sites in de index. Het zegt iets over de autoriteit van je hele domein, niet over de kans dat een specifieke pagina rankt voor een specifieke zoekterm."
    },
    {
      "h": "Waarom de score zo lastig te verhogen is",
      "p": "De schaal is logaritmisch: de stap van 20 naar 30 kost aanzienlijk minder moeite dan de stap van 60 naar 70. Dat komt doordat de score relatief wordt berekend ten opzichte van het hele web, waardoor elke stap hogerop meer en sterkere links vereist."
    },
    {
      "h": "Wat een hoge Domain Rating wel en niet garandeert",
      "p": "Een hoge score vergroot de kans dat nieuwe content sneller en makkelijker rankt, omdat de autoriteit van het domein als geheel meeweegt. Het garandeert echter geen top positie: content, relevantie en gebruikerssignalen blijven per pagina doorslaggevend."
    },
    {
      "h": "Hoe je je Domain Rating verhoogt",
      "p": "Focus op het verkrijgen van links van relevante, gezaghebbende websites binnen je vakgebied in plaats van een groot aantal willekeurige links. Eén link van een gerespecteerde branchesite heeft vaak meer impact dan tientallen links van onbekende blogs."
    },
    {
      "h": "Hoe je de score interpreteert bij concurrentieanalyse",
      "p": "Vergelijk je Domain Rating altijd met directe concurrenten binnen dezelfde markt, niet met willekeurige grote merken. Een score van 30 kan uitstekend zijn in een niche markt en tegelijk laag in een competitieve sector."
    }
  ]
},
  "1-positie-in-google-door-backlinks": {
  "slug": "1-positie-in-google-door-backlinks",
  "title": "In 3 maanden op 1 in Google door gerichte linkbuilding",
  "description": "Een praktijkcasus: hoe een gerichte linkbuildingaanpak binnen drie maanden een eerste positie opleverde voor een concurrerend zoekwoord.",
  "date": "2021-02-16",
  "tag": "Case",
  "excerpt": "Niet het aantal links, maar de juiste links op het juiste moment maakte in deze case het verschil.",
  "image": "/assets/blog/1-positie-in-google-door-backlinks.jpg",
  "imageAlt": "Backlinks en Google positie 1",
  "sections": [
    {
      "h": "De uitgangspositie",
      "p": "De klant stond voor een belangrijk zoekwoord op de tweede pagina van Google, terwijl de content zelf al goed aansloot op de zoekintentie. De belangrijkste bottleneck was een beperkt en weinig relevant linkprofiel ten opzichte van de concurrentie op pagina één."
    },
    {
      "h": "De analyse vooraf",
      "p": "We brachten het linkprofiel van de top vijf concurrerende pagina's in kaart en identificeerden welk type bronnen zij gemeen hadden: branchegerelateerde sites, vakpublicaties en een aantal sterke vermeldingen in gidsen. Dat gaf een concreet doelbeeld in plaats van willekeurige linkbuilding."
    },
    {
      "h": "De uitvoering",
      "p": "We benaderden gericht relevante branchesites voor een vermelding of gastbijdrage en zorgden dat de content op de doelpagina de moeite van het linken waard was door een concrete toevoeging te maken. Er werd bewust gekozen voor kwaliteit boven snelheid, met een geleidelijke opbouw van nieuwe links."
    },
    {
      "h": "Het resultaat na drie maanden",
      "p": "De pagina steeg naar de eerste positie voor het belangrijkste zoekwoord en verbeterde ook voor een reeks gerelateerde zoektermen door de toegenomen autoriteit van de pagina. Het organische verkeer naar deze pagina verdubbelde in dezelfde periode."
    },
    {
      "h": "De belangrijkste les uit deze case",
      "p": "Een gerichte linkbuildingstrategie op basis van concurrentieanalyse levert sneller resultaat op dan het lukraak verzamelen van zoveel mogelijk links. De kwaliteit en relevantie van de bron bleek doorslaggevender dan het totale aantal nieuwe links."
    }
  ]
},
  "technische-seo": {
  "slug": "technische-seo",
  "title": "Technische SEO: de basis waarop al je content moet staan",
  "description": "Wat is technische SEO en waarom bepaalt het of je content überhaupt een kans krijgt om te ranken? Uitleg en concrete aandachtspunten.",
  "date": "2025-02-11",
  "tag": "Technische SEO",
  "excerpt": "Zonder een technisch gezonde website blijft zelfs de beste content onder haar niveau presteren.",
  "image": "/assets/blog/technische-seo.jpg",
  "imageAlt": "Technische SEO fundamenten",
  "sections": [
    {
      "h": "Wat technische SEO precies omvat",
      "p": "Technische SEO is alles wat niet over de inhoud van je website gaat: de structuur, laadsnelheid, beveiliging, URL-opbouw en de manier waarop zoekmachines je site kunnen crawlen en indexeren. Je kunt het zien als het fundament waarop je content rust; zonder een stevige basis blijft ook goede content onderpresteren."
    },
    {
      "h": "Waarom techniek vaak wordt overgeslagen",
      "p": "Adviezen over SEO gaan vaak over content, zoekwoorden en linkbuilding, terwijl de technische kant minder zichtbaar en minder eenvoudig uit te leggen is. Toch bepaalt techniek of zoekmachines je content wel goed kunnen lezen en waarderen, ongeacht hoe goed die content is."
    },
    {
      "h": "Responsive design en mobiele prestaties",
      "p": "Een website die zich niet goed aanpast aan verschillende schermformaten, presteert slechter in zoekresultaten, omdat zoekmachines mobielvriendelijkheid als vaste factor meewegen. Test regelmatig hoe je site presteert op verschillende apparaten, niet alleen op je eigen telefoon."
    },
    {
      "h": "Snelheid en Core Web Vitals",
      "p": "Trage websites verliezen bezoekers én posities. Optimaliseer afbeeldingen, beperk het aantal plugins en scripts, en gebruik caching om de laadtijd te verbeteren. Core Web Vitals geven concreet inzicht in waar de knelpunten zitten."
    },
    {
      "h": "URL-structuur en interne links",
      "p": "Een logische, leesbare URL-opbouw en doordachte interne links helpen zowel bezoekers als zoekmachines om de structuur van je site te begrijpen. Interne links verdelen bovendien autoriteit tussen pagina's onderling."
    },
    {
      "h": "Periodieke technische controle",
      "p": "Vergelijk een jaarlijkse technische check met een APK voor je auto: een vaste controle voorkomt dat kleine problemen uitgroeien tot grote obstakels. Omdat zoekmachine-algoritmes continu veranderen, is een periodieke controle ook nodig om aan nieuwe eisen te blijven voldoen."
    }
  ]
},
  "wat-is-schema-markup": {
  "slug": "wat-is-schema-markup",
  "title": "Wat is schema markup en waarom heb je het nodig?",
  "description": "Schema markup helpt zoekmachines je content te begrijpen en kan zorgen voor rich snippets. Uitleg met praktische toepassingen.",
  "date": "2025-07-09",
  "tag": "Technische SEO",
  "excerpt": "Schema markup vertaalt je content naar taal die machines direct begrijpen, wat je kansen op rich snippets vergroot.",
  "image": "/assets/blog/wat-is-schema-markup.jpg",
  "imageAlt": "Schema markup en structured data",
  "sections": [
    {
      "h": "Wat schema markup precies is",
      "p": "Schema markup is gestructureerde data die je toevoegt aan de broncode van je website om zoekmachines expliciet te vertellen wat een stuk content betekent: een review, een recept, een veelgestelde vraag of een product met prijs. Zonder deze markup moet een zoekmachine dat betekenisniveau zelf afleiden, wat minder betrouwbaar is."
    },
    {
      "h": "Waarom dit belangrijker wordt in het AI-tijdperk",
      "p": "Naast klassieke rich snippets gebruiken ook AI-zoekmachines gestructureerde data om content sneller en correcter te interpreteren. Content met duidelijke schema-markup heeft een streepje voor wanneer een model moet bepalen welke bron het beste antwoord geeft op een vraag."
    },
    {
      "h": "De meest waardevolle schema-typen",
      "p": "FAQPage voor veelgestelde vragen, LocalBusiness voor lokale bedrijfsgegevens, Review voor klantbeoordelingen en Article voor blogcontent zijn de types die voor de meeste MKB-bedrijven het meeste opleveren. Kies schema die daadwerkelijk overeenkomt met de content op de pagina."
    },
    {
      "h": "Wat rich snippets opleveren",
      "p": "Rich snippets, zoals sterren bij een review of een directe FAQ-uitklap in de zoekresultaten, vergroten de zichtbaarheid en klikratio van je resultaat zonder dat je positie hoeft te stijgen. Dat maakt schema markup een van de meest rendabele technische optimalisaties."
    },
    {
      "h": "Implementatie en validatie",
      "p": "Schema kan handmatig worden toegevoegd of via een plugin zoals Yoast SEO worden gegenereerd. Controleer na implementatie altijd met een validatietool of de markup foutloos is, want onjuiste schema kan averechts werken en zelfs tot een waarschuwing in Search Console leiden."
    }
  ]
},
  "gids-voor-een-goede-sitestructuur": {
  "slug": "gids-voor-een-goede-sitestructuur",
  "title": "Gids voor een goede sitestructuur: de basis van vindbaarheid",
  "description": "Een heldere sitestructuur bepaalt hoe goed zoekmachines én bezoekers je website begrijpen. Praktische uitleg met concrete opbouw.",
  "date": "2025-03-27",
  "tag": "Technische SEO",
  "excerpt": "Een rommelige sitestructuur kost je posities voordat er ook maar naar content wordt gekeken.",
  "image": "/assets/blog/gids-voor-een-goede-sitestructuur.jpg",
  "imageAlt": "Goede sitestructuur voor SEO",
  "sections": [
    {
      "h": "Waarom sitestructuur meer is dan een menu",
      "p": "De structuur van je website bepaalt hoe autoriteit zich verspreidt tussen pagina's en hoe eenvoudig zoekmachines je belangrijkste content kunnen vinden. Een onduidelijke structuur zorgt ervoor dat waardevolle pagina's diep begraven raken en nauwelijks worden gecrawld."
    },
    {
      "h": "De piramidestructuur als uitgangspunt",
      "p": "Werk met een hoofdpagina die doorverwijst naar categoriepagina's, die op hun beurt weer naar specifieke detailpagina's linken. Deze hiërarchische opbouw zorgt voor een logische verdeling van autoriteit en maakt het voor bezoekers eenvoudig om te navigeren."
    },
    {
      "h": "Het belang van klikdiepte",
      "p": "Belangrijke pagina's zouden binnen maximaal drie kliks vanaf de homepage bereikbaar moeten zijn. Hoe dieper een pagina in de structuur ligt, hoe minder autoriteit en aandacht zoekmachines er doorgaans aan toekennen."
    },
    {
      "h": "Interne links als sturingsmiddel",
      "p": "Gebruik interne links bewust om autoriteit naar je belangrijkste pagina's te sturen. Verwijs vanuit relevante blogartikelen naar bijbehorende dienstenpagina's in plaats van alleen generiek naar de homepage te linken."
    },
    {
      "h": "URL-opbouw die de structuur weerspiegelt",
      "p": "Een logische URL, waarin categorie en onderwerp herkenbaar zijn, versterkt zowel het begrip van zoekmachines als het vertrouwen van bezoekers. Vermijd onnodig lange of onduidelijke URL's met parameters die geen betekenis toevoegen."
    },
    {
      "h": "Structuur periodiek herzien",
      "p": "Naarmate een website groeit, verschuiven prioriteiten en ontstaan nieuwe categorieën. Herzie de structuur regelmatig om te voorkomen dat oude indelingen niet meer aansluiten bij wat nu het belangrijkst is voor je bedrijf."
    }
  ]
},
  "seo-verkeer-2025": {
  "slug": "seo-verkeer-2025",
  "title": "SEO-verkeer in 2025: wat verandert er en hoe speel je erop in?",
  "description": "Organisch verkeer verandert door AI Overviews en veranderend zoekgedrag. Dit is wat er gebeurt en hoe je je strategie aanpast.",
  "date": "2025-04-30",
  "tag": "SEO",
  "excerpt": "Minder kliks per zoekopdracht betekent niet minder kansen, maar wel een andere strategie.",
  "image": "/assets/blog/seo-verkeer-2025.jpg",
  "imageAlt": "SEO-verkeer trends 2025",
  "sections": [
    {
      "h": "Waarom klassiek organisch verkeer daalt",
      "p": "AI Overviews en directe antwoorden binnen de zoekresultaten zorgen ervoor dat een deel van de zoekopdrachten wordt beantwoord zonder dat de gebruiker doorklikt. Voor informatieve zoekopdrachten is deze daling het duidelijkst zichtbaar in de statistieken van veel websites."
    },
    {
      "h": "Welk verkeer wel overeind blijft",
      "p": "Transactionele en lokale zoekopdrachten blijven relatief stabiel, omdat de gebruiker uiteindelijk een aanbieder moet kiezen of contact moet opnemen. Deze zoekopdrachten leveren nog altijd bezoekers op die dicht bij een beslissing staan."
    },
    {
      "h": "Hoe je verlies aan verkeer compenseert",
      "p": "Verschuif de focus van puur verkeer naar zichtbaarheid in AI-antwoorden en versterk tegelijk je positie voor zoekopdrachten die dichter bij een aankoop of aanvraag liggen. Een combinatie van GEO en gerichte SEO op transactionele zoekwoorden compenseert een deel van het verlies."
    },
    {
      "h": "Andere kanalen aanvullend inzetten",
      "p": "Bedrijven die naast SEO ook op social media, e-mail en vermeldingen bij andere bronnen inzetten, zijn minder afhankelijk van één kanaal. Dat maakt schommelingen in zoekverkeer minder ingrijpend voor de totale aanvraagstroom."
    },
    {
      "h": "Meten wat er echt toe doet",
      "p": "Kijk niet alleen naar totaal verkeer, maar naar het aantal aanvragen, telefoontjes en conversies dat uit organisch verkeer voortkomt. Een daling in bezoekers hoeft geen probleem te zijn als de kwaliteit van het overgebleven verkeer stijgt."
    }
  ]
},
  "wat-top-ads-specialisten-doen": {
  "slug": "wat-top-ads-specialisten-doen",
  "title": "Wat top Ads-specialisten doen dat de meeste accounts missen",
  "description": "Het verschil tussen een gemiddeld en een uitstekend presterend Google Ads-account zit vaak in een paar structurele gewoontes.",
  "date": "2025-06-24",
  "tag": "Google Ads",
  "excerpt": "De beste Ads-specialisten onderscheiden zich niet door geheime trucs, maar door consequente discipline.",
  "image": "/assets/blog/wat-top-ads-specialisten-doen.jpg",
  "imageAlt": "Google Ads specialist aan het werk",
  "sections": [
    {
      "h": "Ze sturen op data, niet op onderbuikgevoel",
      "p": "Topaccounts worden wekelijks doorgelicht op zoektermen, conversieratio's en kosten per conversie, in plaats van eens per maand oppervlakkig bekeken. Beslissingen worden genomen op basis van statistisch relevante data, niet op basis van een indruk over één dag."
    },
    {
      "h": "Ze houden accountstructuur strak en logisch",
      "p": "Campagnes en advertentiegroepen zijn ingedeeld naar duidelijke thema's met bijpassende zoekwoorden en advertentieteksten, in plaats van brede, algemene campagnes waarin alles door elkaar loopt. Dit maakt optimalisatie op onderdeelniveau veel effectiever."
    },
    {
      "h": "Ze investeren continu in uitsluitingszoekwoorden",
      "p": "Een goed onderhouden lijst met uitsluitingszoekwoorden voorkomt dat budget wordt verspild aan irrelevante zoekopdrachten. Topaccounts breiden deze lijst wekelijks uit op basis van de zoektermrapportage."
    },
    {
      "h": "Ze testen advertenties en landingspagina's structureel",
      "p": "In plaats van één advertentietekst lange tijd te laten draaien, worden varianten voortdurend tegen elkaar getest. Hetzelfde geldt voor landingspagina's: kleine aanpassingen in aanbod of opbouw worden gemeten in plaats van aangenomen."
    },
    {
      "h": "Ze koppelen Ads aan echte bedrijfsresultaten",
      "p": "In plaats van te sturen op kliks of vertoningen, wordt succes gemeten aan omzet, aanvragen of telefoontjes. Dat vraagt een correcte conversiemeting, wat vaak het eerste is wat topaccounts op orde hebben voordat ze verder optimaliseren."
    },
    {
      "h": "Ze schalen gecontroleerd",
      "p": "Budgetten worden pas verhoogd wanneer een campagne bewezen rendabel is, met kleine, gemeten stappen in plaats van abrupte verhogingen. Dat voorkomt dat winstgevende campagnes plots onrendabel worden door te snelle opschaling."
    }
  ]
},
};

export const POST_LIST: Post[] = Object.values(POSTS).sort((a, b) => b.date.localeCompare(a.date));
