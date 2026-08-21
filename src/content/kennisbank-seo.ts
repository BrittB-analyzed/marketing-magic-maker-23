import type { KennisbankTerm } from "./kennisbank";

/**
 * Kennisbankbegrippen rond SEO, techniek en meten.
 *
 * Deze pagina's stonden op de oude WordPress-site onder dezelfde slugs. Ze zijn
 * bewust op hun oorspronkelijke URL teruggezet, zodat bestaande links en
 * resterende autoriteit weer op een bestaande pagina uitkomen in plaats van op
 * een 404. De inhoud is herschreven naar het sjabloon uit ./kennisbank.ts.
 */
export const KENNISBANK_SEO: Record<string, KennisbankTerm> = {
  "alt-tag": {
    slug: "alt-tag",
    term: "Alt-tag",
    synoniemen: ["alt tekst", "alternatieve tekst", "alt attribuut", "afbeelding alt"],
    h1: "Alt-tag: wat het is en hoe je hem goed invult",
    title: "Alt-tag | Wat het is en hoe je hem goed invult",
    description:
      "Een alt-tag beschrijft wat er op een afbeelding staat, voor zoekmachines en schermlezers. Uitleg, een goed en een fout voorbeeld, en waar je hem invult.",
    definitie:
      "Een alt-tag is de tekst die beschrijft wat er op een afbeelding staat. Schermlezers lezen hem voor aan mensen die de afbeelding niet kunnen zien, en zoekmachines gebruiken hem om te begrijpen waar het beeld over gaat.",
    waarom: [
      "Voor een ondernemer heeft dit twee kanten die allebei geld waard zijn. Toegankelijkheid: bezoekers die een schermlezer gebruiken, horen wat er op je productfoto staat. Zonder alt-tekst horen ze alleen de bestandsnaam, en dat is meestal iets als IMG_4471. Voor een webshop betekent dat letterlijk dat een deel van je bezoekers niet kan kopen.",
      "Daarnaast is het de enige manier waarop Google weet waar je afbeelding over gaat. Google Afbeeldingen is voor visuele branches, denk aan meubels, kleding, interieur of bouw, een serieuze verkeersbron. Wie zijn alt-teksten leeg laat, doet daar niet aan mee. Het kost een paar seconden per afbeelding en het is een van de weinige SEO-taken die je zelf volledig kunt afronden.",
    ],
    voorbeeld: {
      h: "Goed en fout naast elkaar",
      p: [
        "Fout: alt=\"afbeelding\" of alt=\"eetkamerstoel eetkamerstoelen eetkamerstoel kopen goedkoop\". Het eerste zegt niets, het tweede is zoekwoordstapeling en werkt averechts: Google negeert het en een schermlezer maakt er een onverstaanbare brij van.",
        "Goed: alt=\"Eiken eetkamerstoel met zwarte metalen poten in de showroom\". Beschrijf wat je ziet, in normale taal, en verwerk het zoekwoord alleen als het er logisch in past. Is de afbeelding puur decoratief, laat de alt-tekst dan bewust leeg met alt=\"\", zodat schermlezers hem overslaan.",
      ],
    },
    vragen: [
      {
        q: "Waar vul ik een alt-tag in?",
        a: "In WordPress vul je hem in bij het veld Alternatieve tekst in de mediabibliotheek of in de zijbalk van de afbeelding. In andere systemen heet het meestal alt-tekst of afbeeldingsbeschrijving. Vul hem in op het moment dat je de afbeelding uploadt, want achteraf honderd afbeeldingen nalopen doet niemand ooit.",
      },
      {
        q: "Hoe lang moet een alt-tag zijn?",
        a: "Eén korte zin is genoeg, meestal vijf tot vijftien woorden. Beschrijf wat er te zien is en waarom het relevant is voor de pagina. Wordt het langer dan een regel, dan hoort die informatie eigenlijk in de tekst naast de afbeelding en niet in het alt-attribuut.",
      },
      {
        q: "Telt de alt-tag echt mee voor mijn positie?",
        a: "Voor je positie in de gewone zoekresultaten is het effect klein, voor Google Afbeeldingen is het doorslaggevend. Zie het niet als rankingtruc maar als basisonderhoud: het is snel gedaan, het helpt bezoekers met een schermlezer en het opent een verkeersbron die je anders volledig laat liggen.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Afbeeldingen nalopen op alt-teksten en bestandsgrootte hoort bij de technische SEO in ons pakket.",
    },
    gerelateerd: ["headings", "html-titel", "structured-data"],
    publicatie: "2026-09-18",
  },

  headings: {
    slug: "headings",
    term: "Headings",
    synoniemen: ["koppen", "h1 h2 h3", "kopstructuur", "tussenkop"],
    h1: "Headings: hoe koppen de structuur van je pagina bepalen",
    title: "Headings | Zo bepalen koppen de structuur van je pagina",
    description:
      "Headings zijn de koppen die je pagina indelen, van H1 tot H6. Uitleg over de juiste volgorde, een goed voorbeeld en de fouten die posities kosten.",
    definitie:
      "Headings zijn de koppen die je pagina indelen, van H1 tot en met H6. Ze vertellen lezers, zoekmachines en schermlezers hoe de tekst is opgebouwd en welk onderwerp bij welk stuk hoort.",
    waarom: [
      "Voor een ondernemer is dit de goedkoopste structuurwinst die er is. Bezoekers lezen webpagina's niet van boven naar beneden, ze scannen de koppen tot ze de kop zien die hun vraag beantwoordt. Staan er geen koppen, of alleen wervende kreten die niets beloven, dan haken ze af voordat ze bij je aanbod zijn.",
      "Voor zoekmachines werkt het net zo. De koppen zijn het skelet waaraan Google ophangt waar je pagina over gaat en welke deelvragen je beantwoordt. Dat is ook precies wat AI-antwoordmachines gebruiken: die pakken het blok onder een kop als los citaat. Een kop die letterlijk de vraag stelt die iemand intikt, maakt de kans dat jouw antwoord wordt overgenomen aanzienlijk groter.",
    ],
    voorbeeld: {
      h: "De juiste volgorde",
      p: [
        "Eén H1 per pagina, en dat is je hoofdonderwerp. Daaronder H2's voor de hoofdstukken, en pas binnen een H2 gebruik je H3's voor onderdelen. Sla geen niveaus over: van H2 direct naar H4 springen maakt de structuur onleesbaar voor schermlezers.",
        "Concreet: H1 \"Warmtepomp laten installeren\", daaronder H2 \"Wat kost een warmtepomp?\", H2 \"Welke soorten zijn er?\", H2 \"Hoe lang duurt de installatie?\". Elke H2 is een vraag die iemand daadwerkelijk intikt, en direct onder de kop staat het antwoord in twee tot drie zinnen.",
      ],
    },
    vragen: [
      {
        q: "Mag een pagina meerdere H1's hebben?",
        a: "Technisch mag het en Google gaat er niet van onderuit, maar het is zelden verstandig. Eén H1 dwingt je om te kiezen waar de pagina over gaat. Twee H1's is meestal een teken dat er eigenlijk twee pagina's in elkaar zijn geschoven die elk beter apart zouden ranken.",
      },
      {
        q: "Moet mijn zoekwoord in elke kop staan?",
        a: "Nee, en dat is juist contraproductief. Zet het zoekwoord in de H1 en in één of twee H2's waar het natuurlijk past. De rest van de koppen mag gewoon de deelvraag benoemen. Koppen die allemaal hetzelfde woord herhalen, lezen als spam en helpen je positie niet vooruit.",
      },
      {
        q: "Mag ik een kop gebruiken om tekst groter te maken?",
        a: "Nee. Koppen zijn structuur, geen opmaak. Gebruik je een H3 alleen omdat je die lettergrootte mooi vindt, dan vertel je zoekmachines en schermlezers dat er een nieuw onderdeel begint terwijl dat niet zo is. Wil je alleen tekst benadrukken, gebruik dan vet of pas de stijl aan.",
      },
    ],
    dienst: {
      label: "SEO-teksten laten schrijven",
      to: "/online-marketing/seo-teksten-laten-schrijven/",
      note: "Wij bouwen teksten op vraagkoppen, zodat Google én AI-antwoordmachines het juiste stuk kunnen overnemen.",
    },
    gerelateerd: ["html-titel", "alt-tag", "seo-copywriter"],
    publicatie: "2026-09-18",
  },

  "html-titel": {
    slug: "html-titel",
    term: "HTML-titel",
    synoniemen: ["title tag", "titel tag", "paginatitel", "seo titel"],
    h1: "HTML-titel: de belangrijkste regel tekst van je pagina",
    title: "HTML-titel | De title tag en hoe je hem schrijft",
    description:
      "De HTML-titel is de klikbare kop in Google en de tekst in je browsertab. Uitleg over lengte, opbouw en de fouten die je kliks kosten.",
    definitie:
      "De HTML-titel, of title tag, is de titel die je pagina in de broncode meekrijgt. Hij staat niet zichtbaar op de pagina zelf, maar verschijnt als de klikbare blauwe kop in Google en als de tekst in je browsertabblad.",
    waarom: [
      "Dit is de belangrijkste regel tekst die je schrijft, en tegelijk de regel die het vaakst wordt vergeten. Je positie bepaalt of je gezien wordt; je titel bepaalt of er geklikt wordt. Twee bedrijven op plek drie en plek vier kunnen een compleet ander aantal bezoekers krijgen, puur door hoe hun titel is geformuleerd.",
      "Bovendien is de titel een van de sterkste signalen waarmee Google bepaalt waar je pagina over gaat. Staat er alleen je bedrijfsnaam, dan geef je dat signaal weg en laat je Google gokken. Vaak schrijft Google de titel dan zelf om, en dan verlies je ook nog de controle over wat er in het zoekresultaat komt te staan.",
    ],
    voorbeeld: {
      h: "Hoe je hem opbouwt",
      p: [
        "Zwak: \"Home | Installatiebedrijf Jansen B.V.\". Dit beantwoordt geen enkele zoekvraag en gebruikt de eerste, zwaarst wegende woorden aan je eigen naam.",
        "Sterk: \"Warmtepomp laten installeren in Venlo | vanaf € 6.000,-\". Het zoekwoord staat vooraan, de plaats maakt hem relevant voor lokaal zoeken, en het bedrag geeft een reden om juist op jouw resultaat te klikken in plaats van op dat van de buurman. Houd hem onder de zestig tekens, anders kapt Google hem af met drie puntjes.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen de HTML-titel en de H1?",
        a: "De HTML-titel staat in de broncode en verschijnt in Google en in je browsertab. De H1 is de zichtbare kop bovenaan de pagina zelf. Ze mogen verschillen: de titel schrijf je om de klik te winnen, de H1 om de bezoeker te bevestigen dat hij goed zit.",
      },
      {
        q: "Hoe lang mag een HTML-titel zijn?",
        a: "Houd zestig tekens aan als bovengrens. Google rekent niet in tekens maar in pixelbreedte, dus brede letters tellen zwaarder. Wordt hij te lang, dan kapt Google hem af en verlies je precies het stuk dat je bezoeker had moeten overtuigen. Zet het belangrijkste daarom altijd vooraan.",
      },
      {
        q: "Waarom toont Google een andere titel dan ik heb ingevuld?",
        a: "Dat doet Google als het je titel niet passend vindt bij de zoekopdracht, bijvoorbeeld omdat hij te lang is, alleen je merknaam bevat of niet overeenkomt met wat er op de pagina staat. De oplossing is niet ertegen vechten, maar een titel schrijven die de zoekvraag beter dekt.",
      },
    ],
    dienst: {
      label: "SEO-teksten laten schrijven",
      to: "/online-marketing/seo-teksten-laten-schrijven/",
      note: "Titels en omschrijvingen die kliks winnen horen standaard bij elke tekst die we opleveren.",
    },
    gerelateerd: ["meta-description", "headings", "ctr"],
    publicatie: "2026-09-18",
  },

  "meta-description": {
    slug: "meta-description",
    term: "Meta description",
    synoniemen: ["metabeschrijving", "meta beschrijving", "pagina-omschrijving", "snippet tekst"],
    h1: "Meta description: het stukje tekst onder je zoekresultaat",
    title: "Meta description | Wat het is en hoe je hem schrijft",
    description:
      "De meta description is de omschrijving onder je zoekresultaat in Google. Wat hij wel en niet doet voor je positie, en hoe je er kliks mee wint.",
    definitie:
      "De meta description is de korte omschrijving onder je titel in de zoekresultaten. Hij staat in de broncode van je pagina en vertelt de zoeker in één of twee zinnen wat hij op je pagina vindt.",
    waarom: [
      "Laten we eerst een hardnekkig misverstand wegnemen: de meta description is geen rankingfactor. Google gebruikt hem niet om te bepalen op welke plek je staat. Wat hij wél doet is bepalen hoeveel mensen op die plek klikken, en dat is voor een ondernemer minstens zo waardevol. Dezelfde positie kan twee keer zoveel bezoekers opleveren met een betere omschrijving.",
      "Zie het daarom als advertentietekst waar je niet voor betaalt. Je hebt ongeveer 155 tekens om duidelijk te maken wat je aanbiedt, voor wie en waarom iemand juist jou zou aanklikken. Een prijs, een termijn of een concreet getal werkt vrijwel altijd beter dan een algemene belofte over kwaliteit en service.",
    ],
    voorbeeld: {
      h: "Zwak versus sterk",
      p: [
        "Zwak: \"Welkom op onze website. Wij zijn een betrouwbaar bedrijf met jarenlange ervaring en staan altijd voor u klaar.\" Dit kan elke concurrent letterlijk kopiëren, en dat is precies het probleem.",
        "Sterk: \"Warmtepomp laten installeren vanaf € 6.000,- inclusief montage. Gratis inspectie aan huis, binnen twee weken geplaatst. Bekijk wat het bij jou kost.\" Concreet aanbod, concrete termijn, duidelijke volgende stap. Dat wint de klik van het resultaat erboven.",
      ],
    },
    vragen: [
      {
        q: "Waarom toont Google soms een andere tekst?",
        a: "Google vervangt je omschrijving als het denkt dat een ander stuk van je pagina beter aansluit bij de zoekopdracht. Dat gebeurt in een flink deel van de gevallen en is geen fout. Sluit je omschrijving nauw aan bij de vraag waarop je wilt ranken, dan neemt Google hem vaker gewoon over.",
      },
      {
        q: "Hoe lang mag een meta description zijn?",
        a: "Reken op ongeveer 155 tekens voor desktop en iets minder op mobiel. Wordt hij langer, dan kapt Google hem af. Zet de belangrijkste informatie daarom in de eerste zin, zodat je boodschap ook overeind blijft als het staartje wegvalt. Controleer hem daarna in een previewtool voordat je hem publiceert.",
      },
      {
        q: "Moet elke pagina een eigen omschrijving hebben?",
        a: "Ja. Dezelfde omschrijving op tientallen pagina's is een gemiste kans en een signaal dat de pagina's te veel op elkaar lijken. Heb je honderden productpagina's, gebruik dan een sjabloon dat de productnaam, prijs en levertijd automatisch invult in plaats van één tekst voor alles.",
      },
    ],
    dienst: {
      label: "SEO-teksten laten schrijven",
      to: "/online-marketing/seo-teksten-laten-schrijven/",
      note: "Elke tekst die we opleveren komt met een titel en omschrijving die op de klik zijn geschreven.",
    },
    gerelateerd: ["html-titel", "ctr", "seo-copywriter"],
    publicatie: "2026-09-25",
  },

  anchortekst: {
    slug: "anchortekst",
    term: "Anchortekst",
    synoniemen: ["anchor tekst", "ankertekst", "linktekst", "anchor text"],
    h1: "Anchortekst: de woorden waarop je een link legt",
    title: "Anchortekst | De woorden waarop je een link legt",
    description:
      "De anchortekst is de klikbare tekst van een link. Waarom lees meer en klik hier je posities kosten, en hoe je een linktekst wel schrijft.",
    definitie:
      "De anchortekst is de zichtbare, klikbare tekst van een link. Zoekmachines gebruiken die woorden om te bepalen waar de pagina achter de link over gaat, en bezoekers gebruiken ze om te beslissen of ze klikken.",
    waarom: [
      "Voor een ondernemer betekent dit dat elke link die je legt een klein stemsignaal is. Link je vanaf een blogartikel naar je dienstpagina met de woorden lees meer, dan vertel je Google niets. Link je met de woorden warmtepomp laten installeren, dan zeg je precies waar die pagina over gaat, en dat telt mee in hoe Google die pagina beoordeelt.",
      "Datzelfde geldt voor bezoekers, en daar wordt het vaak onderschat. Iemand die een pagina scant, ziet vooral de gekleurde en onderstreepte woorden. Staat daar lees meer, dan moet hij de omliggende zin lezen om te weten waar hij heen gaat. Staat er een beschrijvende linktekst, dan weet hij het meteen en klikt hij vaker.",
    ],
    voorbeeld: {
      h: "Drie linkteksten voor dezelfde pagina",
      p: [
        "Zwak: \"Meer weten over onze aanpak? Klik hier.\" De link zit op twee woorden die op elke website van Nederland staan en dus niets onderscheiden.",
        "Beter: \"Meer weten? Lees onze pagina over SEO uitbesteden.\" Sterk: \"Lees hoe SEO uitbesteden bij een vaste specialist werkt.\" De laatste variant bevat het zoekwoord van de doelpagina, leest natuurlijk en vertelt de bezoeker exact wat hij krijgt na de klik. Varieer de formulering wel: honderd identieke linkteksten naar dezelfde pagina ziet er onnatuurlijk uit.",
      ],
    },
    vragen: [
      {
        q: "Mag ik steeds dezelfde anchortekst gebruiken?",
        a: "Voor interne links is enige herhaling prima en zelfs logisch. Bij externe links naar je site is variatie belangrijker: een linkprofiel waarin honderden externe sites exact hetzelfde zoekwoord gebruiken, ziet er gekocht uit. Een natuurlijk profiel bevat ook je merknaam, kale URL's en losse formuleringen.",
      },
      {
        q: "Wat is een naked link?",
        a: "Een link waarbij de URL zelf de zichtbare tekst is, bijvoorbeeld b-analyzed.com. Dat komt in de praktijk veel voor, zeker in nieuwsberichten en op forums, en het hoort dus gewoon in een gezond linkprofiel thuis. Alleen als signaal over het onderwerp is het zwakker dan een beschrijvende tekst.",
      },
      {
        q: "Telt de anchortekst van een afbeeldingslink ook mee?",
        a: "Ja, maar dan neemt de alt-tekst van de afbeelding die rol over. Link je een logo of een productfoto naar een andere pagina, dan leest Google het alt-attribuut als linktekst. Laat je dat leeg, dan gaat het signaal verloren en weet Google alleen dát er gelinkt is.",
      },
    ],
    dienst: {
      label: "Linkbuilding uitbesteden",
      to: "/online-marketing/linkbuilding-uitbesteden/",
      note: "Wij sturen op een natuurlijke verdeling van linkteksten, niet op zoveel mogelijk zoekwoorden in de link.",
    },
    gerelateerd: ["interne-links", "backlinks", "alt-tag"],
    publicatie: "2026-09-25",
  },

  "interne-links": {
    slug: "interne-links",
    term: "Interne links",
    synoniemen: ["interne linkstructuur", "interne linkbuilding", "linkstructuur"],
    h1: "Interne links: de goedkoopste SEO die je zelf kunt doen",
    title: "Interne Links | De goedkoopste SEO die er is",
    description:
      "Interne links verbinden je eigen pagina's en verdelen autoriteit over je site. Waarom het werkt, hoe je het aanpakt en welke fouten je maakt.",
    definitie:
      "Interne links zijn links van de ene pagina op je website naar een andere pagina op diezelfde website. Ze bepalen hoe bezoekers en zoekmachines door je site navigeren, en hoe het gewicht van je sterke pagina's wordt doorgegeven.",
    waarom: [
      "Dit is de enige vorm van linkbuilding waar je volledig zelf over gaat. Externe links moet je verdienen of inkopen; interne links leg je vanmiddag. Toch is het het onderdeel dat op de meeste MKB-sites structureel wordt overgeslagen, waardoor waardevolle pagina's alleen via het menu bereikbaar zijn en nauwelijks gewicht meekrijgen.",
      "Het mechanisme is simpel. Een pagina die veel autoriteit heeft opgebouwd, geeft een deel daarvan door aan de pagina's waarnaar hij linkt. Link je vanaf je best presterende artikel naar de dienstpagina die net buiten de top tien staat, dan is dat vaak genoeg om hem een paar plekken te laten opschuiven. Zonder één externe link en zonder één euro extra.",
    ],
    voorbeeld: {
      h: "Van sterk naar bijna-sterk",
      p: [
        "Kijk in Search Console welke pagina's op positie elf tot en met twintig staan. Dat is de groep waar de meeste winst zit: ze zijn al relevant genoeg om mee te doen, maar net niet zichtbaar genoeg om verkeer te krijgen. Zoek vervolgens de pagina's die het wél goed doen op een verwant onderwerp.",
        "Leg vanaf die sterke pagina's twee tot drie links naar de pagina die net buiten bereik staat, met een beschrijvende ankertekst die het zoekwoord van de doelpagina bevat. Doe dit in de lopende tekst, niet alleen in een blokje onderaan: een link midden in een relevante alinea telt zwaarder dan een link in een standaardlijst.",
      ],
    },
    vragen: [
      {
        q: "Hoeveel interne links moet een pagina hebben?",
        a: "Er is geen vast getal, maar hanteer als ondergrens dat elke pagina minstens drie inkomende links uit de inhoud van andere pagina's heeft. Menu- en footerlinks tellen daarvoor niet mee: die staan op elke pagina en zeggen dus niets over een specifiek onderwerp.",
      },
      {
        q: "Kan ik te veel interne links leggen?",
        a: "Ja. Staan er vijftig links in één artikel, dan wordt elk signaal zwakker en raakt de lezer het spoor bijster. Houd het bij links die de lezer op dat punt daadwerkelijk verder helpen. Twijfel je of een link nuttig is voor een mens, laat hem dan weg.",
      },
      {
        q: "Wat is een verweesde pagina?",
        a: "Een pagina waar geen enkele andere pagina op je site naartoe linkt. Google vindt hem dan hooguit via de sitemap en kent er weinig waarde aan toe, en bezoekers komen er alleen als ze de URL kennen. Op de meeste sites zijn dat er meer dan de eigenaar verwacht.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "De interne linkstructuur is een vaste maandelijkse taak bij ons, geen eenmalige opschoonactie.",
    },
    gerelateerd: ["anchortekst", "backlinks", "bovenaan-in-google"],
    publicatie: "2026-09-25",
  },

  backlinks: {
    slug: "backlinks",
    term: "Backlinks",
    synoniemen: ["inkomende links", "externe links", "linkprofiel", "verwijzende domeinen"],
    h1: "Backlinks: wat ze zijn en wanneer ze waarde hebben",
    title: "Backlinks | Wat ze zijn en wanneer ze waarde hebben",
    description:
      "Backlinks zijn links van andere websites naar de jouwe. Waarom kwaliteit zwaarder weegt dan aantal, en hoe je herkent of een link je helpt of schaadt.",
    definitie:
      "Backlinks zijn links van andere websites naar jouw website. Zoekmachines behandelen ze als aanbevelingen: hoe vaker relevante, betrouwbare sites naar je verwijzen, hoe geloofwaardiger jouw site wordt gevonden.",
    waarom: [
      "Voor een ondernemer is dit het lastigste onderdeel van SEO, omdat je het niet zelf in de hand hebt. Techniek en content kun je zelf regelen; links moet iemand anders je geven. Precies daarom weegt het zwaar: het is een signaal dat je niet zelf kunt vervalsen, althans niet zonder dat het opvalt.",
      "Het aantal zegt daarbij weinig. Eén link vanaf een vakblad in jouw branche is meer waard dan honderd links vanaf linkverzamelsites die niemand bezoekt. Sterker nog: een groot volume aan slechte links kan actief schadelijk zijn. De vuistregel is simpel: zou je blij zijn geweest met die link als Google niet bestond, dan is het een goede link.",
    ],
    voorbeeld: {
      h: "Waar goede links vandaan komen",
      p: [
        "In de praktijk komen bruikbare links uit een handvol hoeken. Branchevereniging of leverancier waar je bij aangesloten bent. Lokale nieuwssite of ondernemersplatform als je iets doet dat nieuwswaarde heeft. Een klant die een case over de samenwerking publiceert. Een vakblad dat je citeert als je iets te zeggen hebt over je vakgebied.",
        "Wat je herkent aan een slechte link: een site zonder eigen bezoekers, een pagina die uit niets anders bestaat dan een lijst met links, of een aanbod van duizend links voor honderd euro. Die laatste categorie kost geen posities omdat Google ze bestraft, maar omdat Google ze simpelweg negeert. Je hebt dan honderd euro betaald voor nul effect.",
      ],
    },
    vragen: [
      {
        q: "Hoeveel backlinks heb ik nodig?",
        a: "Dat hangt volledig af van je concurrentie. De bruikbare maatstaf is niet een absoluut aantal, maar hoeveel verwijzende domeinen de bedrijven boven je hebben op de zoekwoorden die jij wilt. Die vergelijking vertelt je of het gat in maanden of in jaren te overbruggen is.",
      },
      {
        q: "Wat is het verschil tussen backlinks en verwijzende domeinen?",
        a: "Tien links vanaf dezelfde website zijn tien backlinks maar één verwijzend domein. Voor je autoriteit telt vooral dat tweede getal: een nieuwe site die naar je verwijst voegt meer toe dan een negende link vanaf een site die al naar je linkte.",
      },
      {
        q: "Kunnen slechte backlinks mijn site schaden?",
        a: "In de meeste gevallen negeert Google ze gewoon en gebeurt er niets. Schadelijk wordt het als er een patroon in zit dat op manipulatie wijst, bijvoorbeeld honderden links met exact hetzelfde zoekwoord als linktekst. Bij twijfel kun je links laten afwijzen via het disavow-bestand in Search Console.",
      },
    ],
    dienst: {
      label: "Linkbuilding uitbesteden",
      to: "/online-marketing/linkbuilding-uitbesteden/",
      note: "Wij werken met Nederlandse sites die zelf bezoekers hebben, niet met linknetwerken.",
    },
    gerelateerd: ["anchortekst", "interne-links", "zoekmachine-optimalisatie-seo"],
    publicatie: "2026-10-02",
  },

  "robots-txt-bestand": {
    slug: "robots-txt-bestand",
    term: "Robots.txt",
    synoniemen: ["robots txt bestand", "robots.txt", "crawlregels"],
    h1: "Robots.txt: het bestand dat bepaalt wat zoekmachines mogen bekijken",
    title: "Robots.txt | Wat het is en hoe je het instelt",
    description:
      "Robots.txt vertelt zoekmachines welke delen van je site ze mogen crawlen. Uitleg, een voorbeeldbestand en de fout die hele sites onvindbaar maakt.",
    definitie:
      "Robots.txt is een tekstbestand in de hoofdmap van je website dat zoekmachines vertelt welke delen ze wel en niet mogen bekijken. Het is een instructie voor crawlers, geen slot: het houdt niemand tegen die je pagina toch wil openen.",
    waarom: [
      "Voor de meeste MKB-sites is dit bestand een van die dingen die je één keer goed instelt en daarna nooit meer aanraakt. Juist daarom gaat het zo vaak mis. Bij een verhuizing of herbouw blijft het bestand van de testomgeving staan, waarin alles is dichtgezet, en dan verdwijnt je hele site binnen enkele weken uit Google.",
      "Waar het wél nuttig is: crawlbudget besparen op grote sites. Heeft je webshop duizenden filtercombinaties die allemaal een eigen URL opleveren, dan is het zonde als Google zijn tijd daaraan besteedt in plaats van aan je productpagina's. Voor een site van vijftig pagina's speelt dat niet en kun je het bestand grotendeels met rust laten.",
    ],
    voorbeeld: {
      h: "Hoe een gezond bestand eruitziet",
      p: [
        "Een normaal robots.txt-bestand geeft alle crawlers toegang, sluit alleen de delen uit die niets in de zoekresultaten te zoeken hebben, en verwijst naar je sitemap. Denk aan interne zoekresultaten, bedanktpagina's en de beheeromgeving. Elke regel begint met User-agent, gevolgd door Allow- of Disallow-regels.",
        "De fout die het meeste kost, past op één regel: Disallow: / onder User-agent: *. Dat sluit je volledige website af. Controleer na elke livegang of migratie dus als eerste jouwdomein.nl/robots.txt in je browser. Het kost tien seconden en voorkomt een probleem dat maanden kost om te herstellen.",
      ],
    },
    vragen: [
      {
        q: "Houdt robots.txt een pagina uit Google?",
        a: "Niet betrouwbaar. Blokkeer je een pagina, dan mag Google hem niet lezen, maar hij kan alsnog in de resultaten verschijnen als andere sites ernaar linken, dan zonder omschrijving. Wil je een pagina echt uit de index houden, gebruik dan een noindex-instructie en blokkeer hem juist niet.",
      },
      {
        q: "Heeft elke website een robots.txt nodig?",
        a: "Nodig is het niet: zonder bestand mogen crawlers gewoon alles bekijken. Het is wel handig om er een te hebben, al is het alleen om je sitemap erin aan te melden. Voor kleine sites hoeft er verder vrijwel niets in te staan.",
      },
      {
        q: "Hoe controleer ik of mijn robots.txt klopt?",
        a: "Open jouwdomein.nl/robots.txt in je browser en lees mee. Zie je Disallow: / staan, dan is dat vrijwel altijd fout. Google Search Console laat daarnaast per URL zien of een pagina geblokkeerd wordt, wat handig is als je twijfelt over één specifieke regel.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Crawl- en indexeringsinstellingen controleren we bij elke migratie en bij elke maandelijkse ronde.",
    },
    gerelateerd: ["indexeren-betekenis", "google-search-console", "staging"],
    publicatie: "2026-10-02",
  },

  "structured-data": {
    slug: "structured-data",
    term: "Structured data",
    synoniemen: ["gestructureerde data", "schema markup", "json-ld", "rich snippets"],
    h1: "Structured data: je pagina uitleggen aan machines",
    title: "Structured data | Schema markup en rich results",
    description:
      "Structured data vertelt zoekmachines wat de onderdelen van je pagina betekenen. Wat het oplevert aan rich results en waarom AI-antwoorden erop leunen.",
    definitie:
      "Structured data is extra code in een vaste notatie waarmee je zoekmachines vertelt wat de onderdelen van je pagina betekenen: dit is een prijs, dit een beoordeling, dit een openingstijd. Mensen zien er niets van, machines wel.",
    waarom: [
      "Zonder deze code ziet een zoekmachine alleen tekst. Er staat ergens 49,95 op je pagina, maar of dat een prijs is, een artikelnummer of een huisnummer moet het systeem raden. Met structured data leg je dat vast. Dat maakt het verschil tussen een gewoon zoekresultaat en een resultaat met sterretjes, prijs, voorraad of een uitklapbare vragenlijst.",
      "Sinds AI-antwoordmachines meedoen is het belang toegenomen. ChatGPT, Gemini en de AI Overviews van Google moeten in korte tijd bepalen of jouw pagina een betrouwbaar antwoord bevat. Expliciet gemarkeerde feiten, een auteur met een naam en een organisatie met een adres en KVK-nummer maken die beoordeling makkelijker. Wie het weglaat, moet het van interpretatie hebben.",
    ],
    voorbeeld: {
      h: "Wat je in de praktijk markeert",
      p: [
        "Voor een MKB-site zijn vier types goed voor het overgrote deel van het effect. Organization of LocalBusiness met je adres, telefoonnummer, openingstijden en KVK-nummer. BreadcrumbList voor de kruimelnavigatie, waardoor je in het zoekresultaat een leesbaar pad krijgt in plaats van een kale URL. FAQPage voor je veelgestelde vragen. En Product met prijs en voorraad als je een webshop hebt.",
        "De code schrijf je in JSON-LD en zet je in de broncode van de pagina. Je controleert hem daarna in de Rich Results Test van Google. Belangrijk: markeer alleen wat er ook echt op de pagina staat. Beoordelingen markeren die nergens zichtbaar zijn, is een overtreding waar Google op ingrijpt.",
      ],
    },
    vragen: [
      {
        q: "Krijg ik gegarandeerd sterretjes in Google?",
        a: "Nee. Correcte markup maakt je pagina in aanmerking komend voor een rich result, maar Google beslist zelf of het die toont. Onjuiste of onvolledige markup sluit je uit; correcte markup geeft je een kans. Meer garantie dan dat bestaat er niet.",
      },
      {
        q: "Verbetert structured data mijn positie?",
        a: "Niet rechtstreeks. Het is geen rankingfactor. Wat het wel doet is je zoekresultaat opvallender maken, waardoor er vaker op wordt geklikt, en machines helpen begrijpen waar je pagina over gaat. Dat tweede weegt bij AI-antwoorden zwaarder dan bij de klassieke zoekresultaten.",
      },
      {
        q: "Kan ik dit zelf toevoegen?",
        a: "In WordPress regelen SEO-plug-ins de basis vaak automatisch voor organisatie, kruimelpad en artikelen. Voor productgegevens, vragenlijsten en beoordelingen is meestal handwerk of een extra plug-in nodig. Controleer het resultaat altijd in de Rich Results Test voordat je ervan uitgaat dat het klopt.",
      },
    ],
    dienst: {
      label: "Genoemd worden in AI-antwoorden",
      to: "/online-marketing/geo-optimalisatie/",
      note: "Schema-markup is een van de bouwstenen die je pagina citeerbaar maken voor AI-antwoordmachines.",
    },
    gerelateerd: ["google-search-console", "alt-tag", "bovenaan-in-google"],
    publicatie: "2026-10-02",
  },

  zoekwoorden: {
    slug: "zoekwoorden",
    term: "Zoekwoorden",
    synoniemen: ["keywords", "trefwoorden", "zoektermen", "zoekwoordenonderzoek"],
    h1: "Zoekwoorden: waarop je klanten daadwerkelijk zoeken",
    title: "Zoekwoorden | Short tail, long tail en zoekintentie",
    description:
      "Zoekwoorden zijn de termen die je klanten intikken. Het verschil tussen short tail en long tail, en waarom zoekintentie belangrijker is dan volume.",
    definitie:
      "Zoekwoorden zijn de woorden en zinnen die mensen intikken in Google, Bing of een AI-chat. Ze bepalen op welke vragen jouw website kan verschijnen, en dus welke bezoekers je bereikt.",
    waarom: [
      "De grootste fout die ondernemers maken, is uitgaan van hun eigen taal. Jij noemt het misschien vloerafwerking, je klant zoekt op laminaat leggen. Jij verkoopt HR-software, je klant zoekt op verlofregistratie bijhouden. Wie de eigen vakterminologie op de website zet, is onvindbaar voor iedereen die dat woord niet kent, en dat is vrijwel de hele markt.",
      "Daarom begint elk SEO-traject met zoekwoordenonderzoek. Niet om een lijst met woorden te hebben, maar om te ontdekken hoe je markt over je aanbod praat, hoeveel mensen dat maandelijks doen en hoe sterk de concurrentie op elk woord is. Uit die drie gegevens volgt de volgorde waarin je pagina's maakt of herschrijft.",
    ],
    voorbeeld: {
      h: "Short tail, long tail en wat ze opleveren",
      p: [
        "Short tail is kort en breed: vloeren. Veel zoekvolume, maar je weet niet of iemand wil kopen, leggen, schoonmaken of alleen kijken. De concurrentie is hoog en de conversie laag. Long tail is specifiek: eiken visgraatvloer laten leggen in Venlo. Minder zoekvolume, veel minder concurrentie, en iemand die dat intikt is vrijwel klaar om te kopen.",
        "Voor een MKB-bedrijf ligt de winst bijna altijd in de long tail. Tien specifieke zoekwoorden van elk vijftig zoekopdrachten per maand leveren samen meer klanten op dan één breed zoekwoord van vijfduizend waarop je nooit op pagina één komt. En je hebt er geen jarenlange autoriteitsopbouw voor nodig.",
      ],
    },
    vragen: [
      {
        q: "Wat is zoekintentie en waarom telt het?",
        a: "Zoekintentie is wat iemand wil bereiken met een zoekopdracht: iets weten, iets vergelijken of iets kopen. Twee zoekwoorden met hetzelfde volume kunnen compleet verschillende bezoekers opleveren. Schrijf altijd voor de intentie, anders trek je bezoekers die nooit klant worden. Iemand die nog vergelijkt, wil een overzicht en geen bestelknop.",
      },
      {
        q: "Hoeveel zoekwoorden per pagina?",
        a: "Eén hoofdzoekwoord per pagina, met de varianten en bijvragen daaromheen. Twee pagina's die op hetzelfde woord mikken, gaan met elkaar concurreren en dan verliezen ze allebei. Merk je dat twee eigen pagina's om dezelfde term vechten, voeg ze dan samen of laat de ene naar de andere verwijzen.",
      },
      {
        q: "Waar vind ik betrouwbare zoekvolumes?",
        a: "Google Keyword Planner geeft ruwe indicaties en is gratis bij een Ads-account. Betaalde tools zijn nauwkeuriger. De meest bruikbare bron heb je zelf al: het zoektermenrapport uit je Google Ads-account laat zien op welke exacte formuleringen mensen daadwerkelijk kopen, niet alleen zoeken.",
      },
    ],
    dienst: {
      label: "SEO-advies zonder maandpakket",
      to: "/online-marketing/seo-advies/",
      note: "Een zoekwoordenonderzoek met volume, moeilijkheidsgraad en intentie zit standaard in het adviesrapport.",
    },
    gerelateerd: ["zoekmachine-optimalisatie-seo", "google-search-console", "bovenaan-in-google"],
    publicatie: "2026-10-09",
  },

  "zoekmachine-optimalisatie-seo": {
    slug: "zoekmachine-optimalisatie-seo",
    term: "Zoekmachineoptimalisatie (SEO)",
    synoniemen: ["seo", "search engine optimization", "zoekmachine optimalisatie"],
    h1: "Zoekmachineoptimalisatie: wat SEO is en waaruit het bestaat",
    title: "Zoekmachineoptimalisatie | Wat SEO is en inhoudt",
    description:
      "Zoekmachineoptimalisatie is je website beter vindbaar maken in de onbetaalde zoekresultaten. De drie onderdelen, wat het oplevert en hoe lang het duurt.",
    definitie:
      "Zoekmachineoptimalisatie, in het Engels search engine optimization of SEO, is het geheel aan werk dat je website beter vindbaar maakt in de onbetaalde zoekresultaten. Je betaalt niet per klik, je investeert vooraf in techniek, content en autoriteit.",
    waarom: [
      "Het verschil met adverteren zit in wat je overhoudt. Zet je je advertenties uit, dan stopt het verkeer dezelfde dag. Stop je met SEO, dan zakken je posities langzaam weg, maar je houdt maandenlang bezoekers uit werk dat je al hebt gedaan. Voor bedrijven met een terugkerende vraag is dat het verschil tussen huren en bezitten.",
      "Daar staat tegenover dat het tijd kost. De eerste beweging zie je meestal na twee tot drie maanden, meetbaar meer aanvragen tussen maand zes en twaalf. Wie binnen zes weken resultaat nodig heeft, moet met advertenties beginnen en SEO daarnaast opbouwen. Die twee bijten elkaar niet, ze vullen elkaar aan.",
    ],
    voorbeeld: {
      h: "De drie lagen waar het uit bestaat",
      p: [
        "Techniek: je pagina's moeten gevonden, gelezen en geïndexeerd kunnen worden, en snel laden op een telefoon. Dit is de randvoorwaarde. Zonder deze laag heeft de rest geen effect, want een pagina die niet in de index staat, kan nergens op ranken.",
        "Content: je pagina moet de zoekvraag beter beantwoorden dan de pagina's die er nu staan. Autoriteit: andere sites moeten naar je verwijzen, want dat is het signaal dat anderen je serieus nemen. De volgorde is niet vrijblijvend, en voor de meeste MKB-sites zit de grootste winst in de tweede laag: bestaande pagina's die de vraag net niet goed genoeg beantwoorden.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen SEO en SEA?",
        a: "SEO gaat over de onbetaalde zoekresultaten, SEA over de advertenties erboven. SEO kost tijd en bouwt op, SEA kost geld per klik en werkt direct. Samen heten ze zoekmachinemarketing. De meeste bedrijven doen er verstandig aan om beide in te zetten en de verhouding te laten verschuiven.",
      },
      {
        q: "Kan ik SEO zelf doen?",
        a: "De basis zeker: titels en omschrijvingen schrijven, koppen structureren, interne links leggen en je teksten op de zoekvraag afstemmen. Waar het meestal misgaat is volhouden en de techniek. SEO is onderhoudswerk, geen project met een einddatum, en dat sneuvelt als eerste in een drukke maand.",
      },
      {
        q: "Werkt SEO nog met AI-antwoorden erbij?",
        a: "Ja, maar het doel verschuift. Naast gevonden worden in de blauwe links wil je genoemd worden als bron in het AI-antwoord. De technieken die daarvoor zorgen, heldere structuur, controleerbare feiten en autoriteit, zijn grotendeels dezelfde die je al voor Google inzet.",
      },
    ],
    dienst: {
      label: "Zoekmachine optimalisatie specialist inhuren",
      to: "/online-marketing/zoekmachine-optimalisatie-specialist/",
      note: "Eén vaste specialist die de strategie bedenkt en ook zelf uitvoert, vanaf € 999,- per maand.",
    },
    gerelateerd: ["zoekwoorden", "bovenaan-in-google", "zoekmachine-marketing"],
    publicatie: "2026-10-09",
  },

  "google-search-console": {
    slug: "google-search-console",
    term: "Google Search Console",
    synoniemen: ["search console", "gsc", "webmaster tools"],
    h1: "Google Search Console: zien hoe Google je site bekijkt",
    title: "Google Search Console | Wat je ermee kunt zien",
    description:
      "Search Console laat zien op welke zoekopdrachten je verschijnt, welke pagina's geïndexeerd zijn en waar het misgaat. Gratis, en onmisbaar voor SEO.",
    definitie:
      "Google Search Console is een gratis dienst van Google waarin je ziet hoe Google je website bekijkt: op welke zoekopdrachten je verschijnt, hoeveel mensen klikken, welke pagina's zijn geïndexeerd en welke problemen Google tegenkomt.",
    waarom: [
      "Dit is de enige plek waar je echte Google-data over je eigen site ziet. Alle andere tools schatten; Search Console meet. Je ziet per zoekopdracht hoe vaak je bent getoond, hoe vaak er geklikt is en op welke gemiddelde positie je staat. Dat is precies de informatie die je nodig hebt om te bepalen waar je volgende uur werk het meeste oplevert.",
      "Voor een ondernemer zit de grootste praktische waarde in twee lijstjes. Ten eerste: de zoekopdrachten waarop je veel wordt getoond maar weinig geklikt. Dat is bijna altijd een titel- of omschrijvingsprobleem en in een middag op te lossen. Ten tweede: de pagina's die Google wel heeft bekeken maar niet heeft opgenomen, met de reden erbij.",
    ],
    voorbeeld: {
      h: "Waar je begint als je hem net hebt gekoppeld",
      p: [
        "Ga naar Prestaties, zet het filter op de laatste drie maanden en sorteer op vertoningen. Kijk naar de zoekopdrachten met veel vertoningen en een lage doorklikratio: daar laat je bezoekers liggen zonder dat je een plek hoeft te stijgen. Filter daarna op posities elf tot en met twintig; dat is de groep die met beperkt werk naar pagina één kan.",
        "Ga vervolgens naar Pagina's, onder Indexering. Daar staat per niet-opgenomen pagina waarom Google hem heeft overgeslagen: uitgesloten door noindex, duplicaat, of gecrawld maar niet geïndexeerd. Die laatste reden betekent meestal dat Google de pagina te dun of te weinig onderscheidend vindt.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met Google Analytics?",
        a: "Search Console gaat over wat er vóór de klik gebeurt: zoekopdrachten, vertoningen, posities en indexering. Analytics gaat over wat er daarna gebeurt: welke pagina's bezoekers bekijken en of ze converteren. Je hebt ze allebei nodig, ze meten verschillende helften van dezelfde reis.",
      },
      {
        q: "Moet ik mijn site aanmelden om in Google te komen?",
        a: "Nee, Google vindt je site ook zonder Search Console. Wat het wel doet, is je inzicht geven en je de mogelijkheid bieden om een URL versneld ter beoordeling aan te bieden. Voor nieuwe pagina's scheelt dat vaak dagen tot weken in de tijd tot indexering.",
      },
      {
        q: "Hoe koppel ik hem aan mijn website?",
        a: "Je bewijst dat de site van jou is, meestal via een DNS-record bij je domeinbeheerder of via een bestand op je server. In WordPress kan het ook met een regel code die je SEO-plug-in toevoegt. Daarna duurt het een paar dagen voordat de eerste data binnenkomt.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Wij werken in jouw eigen Search Console-account, zodat je altijd zelf bij je data kunt.",
    },
    gerelateerd: ["indexeren-betekenis", "google-analytics", "robots-txt-bestand"],
    publicatie: "2026-10-09",
  },

  "google-analytics": {
    slug: "google-analytics",
    term: "Google Analytics",
    synoniemen: ["ga4", "webanalyse", "statistieken website"],
    h1: "Google Analytics: wat bezoekers op je site doen",
    title: "Google Analytics | Wat je ermee meet en wat niet",
    description:
      "Google Analytics laat zien waar bezoekers vandaan komen en wat ze op je site doen. Wat je meet, wat GA4 anders doet en waar de meetfouten zitten.",
    definitie:
      "Google Analytics is een gratis dienst die bijhoudt wat bezoekers op je website doen: waar ze vandaan komen, welke pagina's ze bekijken, hoe lang ze blijven en of ze de actie uitvoeren waar het je om te doen is.",
    waarom: [
      "Zonder deze cijfers stuur je op gevoel. Je weet dan wel dat er bezoekers komen, maar niet welk kanaal ze levert, welke pagina's aanvragen opleveren en welke bezoekers na acht seconden weer weg zijn. Dat maakt elke marketingbeslissing een gok, en het maakt het onmogelijk om te zien of iets werkte.",
      "De grootste waarde zit niet in het aantal bezoekers, maar in de vergelijking per kanaal. Organisch verkeer dat op 3% converteert en advertentieverkeer dat op 0,4% converteert vragen om compleet verschillende beslissingen, ook al staat er in het totaal een keurig gemiddelde. Wie alleen naar het totaal kijkt, ziet dat verschil nooit.",
    ],
    voorbeeld: {
      h: "Wat je als eerste inricht",
      p: [
        "Begin bij de conversie. Wijs één gebeurtenis aan als de actie die geld waard is, meestal een verzonden formulier of een afgeronde bestelling. Dat is je sleutelgebeurtenis. Micro-acties zoals een klik op je telefoonnummer meet je apart, want als je die bij je hoofdconversie optelt, ziet elk cijfer er mooier uit dan het is.",
        "Sluit daarna je eigen verkeer uit, en dat van je bureau en je webbouwer. Op een site met tweehonderd bezoekers per maand vertekent tien keer zelf inloggen het beeld volledig. Controleer tot slot of je bedanktpagina daadwerkelijk een conversie registreert, door zelf één keer het formulier in te vullen.",
      ],
    },
    vragen: [
      {
        q: "Wat is er veranderd met GA4?",
        a: "GA4 meet gebeurtenissen in plaats van paginaweergaven en sessies. Dat maakt het flexibeler maar ook onwennig: bekende cijfers als bouncepercentage zijn vervangen of anders gedefinieerd. Belangrijk voor jou: cijfers van vóór en ná de overstap zijn niet één op één vergelijkbaar.",
      },
      {
        q: "Kloppen de cijfers in Analytics precies?",
        a: "Nee, en dat hoeft ook niet. Cookiebanners, adblockers en privacyinstellingen zorgen ervoor dat een deel van je bezoekers niet wordt gemeten. Gebruik de cijfers om trends en verschillen tussen kanalen te beoordelen, niet als exacte boekhouding tot op de bezoeker nauwkeurig.",
      },
      {
        q: "Waarom verschillen Analytics en Search Console?",
        a: "Ze meten iets anders. Search Console telt klikken in de zoekresultaten, Analytics telt bezoekers die de pagina daadwerkelijk hebben geladen. Iemand die wegklikt voordat de pagina laadt, telt bij de één wel en bij de ander niet. Een verschil van tien tot twintig procent is normaal.",
      },
    ],
    dienst: {
      label: "Google Tag Manager inrichten",
      to: "/online-marketing/google-tag-manager-inrichten/",
      note: "Meting die klopt is de voorwaarde voor elke beslissing daarna. Wij richten hem in en controleren hem.",
    },
    gerelateerd: ["google-search-console", "conversie", "ctr"],
    publicatie: "2026-10-16",
  },

  conversie: {
    slug: "conversie",
    term: "Conversie",
    synoniemen: ["omzetting", "conversies", "doelbereik"],
    h1: "Conversie: wanneer een bezoeker meer wordt dan een bezoeker",
    title: "Conversie | Wat het is en wat je precies meet",
    description:
      "Een conversie is de actie waarvoor je website bestaat: een aanvraag, bestelling of telefoontje. Uitleg over macro, micro en wat je wel en niet meetelt.",
    definitie:
      "Een conversie is het moment waarop een bezoeker de actie uitvoert waarvoor je website bestaat: een offerte aanvragen, bestellen, bellen of zich inschrijven. Het is de omslag van bezoeker naar iemand met wie je zaken kunt doen.",
    waarom: [
      "Zolang je geen conversie hebt gedefinieerd, is elke andere marketingmeting betekenisloos. Meer bezoekers is dan alleen maar meer bezoekers. Pas als je vastlegt welke actie geld waard is, kun je per kanaal beoordelen of een euro advertentiebudget of een uur SEO-werk zichzelf terugverdient.",
      "De valkuil zit in te veel dingen conversie noemen. Een nieuwsbriefinschrijving, een klik op je telefoonnummer en een afgeronde bestelling zijn niet gelijkwaardig, maar in veel Analytics-accounts staan ze wel bij elkaar opgeteld. Het resultaat is een indrukwekkend getal waar je niets mee kunt sturen, omdat je niet weet wat eronder zit.",
    ],
    voorbeeld: {
      h: "Macro en micro uit elkaar houden",
      p: [
        "Je macro-conversie is de actie waar omzet uit voortkomt: de offerteaanvraag, de bestelling, het ingevulde contactformulier. Daar stuur je op, en dat is het cijfer dat in je hoofdrapportage staat. Micro-conversies zijn signalen onderweg: een klik op je telefoonnummer, een gedownloade brochure, drie pagina's diep doorklikken.",
        "Reken concreet: 4.000 bezoekers en 60 aanvragen is een conversiepercentage van 1,5%. Stijgt dat naar 2,1%, dan krijg je 84 aanvragen uit precies hetzelfde verkeer. Dat is 40% meer klanten zonder één euro extra advertentiebudget, en dat is de reden dat conversie-optimalisatie vrijwel altijd rendabeler is dan meer verkeer inkopen.",
      ],
    },
    vragen: [
      {
        q: "Wat is een goed conversiepercentage?",
        a: "Er bestaat geen universeel getal. Het hangt af van je branche, je prijs, hoe zwaar de beslissing is en waar je verkeer vandaan komt. De enige benchmark die echt iets zegt, is je eigen cijfer van vorig kwartaal, gemeten per kanaal en per landingspagina.",
      },
      {
        q: "Reken ik op sessies of op bezoekers?",
        a: "Kies er één en houd die aan. Op sessies gerekend valt je percentage lager uit, omdat dezelfde persoon meerdere keren terugkomt voor hij koopt. Bij producten met een lange oriëntatie is rekenen op unieke gebruikers realistischer. Door elkaar gebruiken maakt vergelijken onmogelijk.",
      },
      {
        q: "Hoe verhoog ik mijn conversie?",
        a: "Begin bij je formulier: velden schrappen is meestal de grootste enkele winst op een MKB-site. Zorg daarna dat de eerste schermvulling meteen duidelijk maakt wat je doet en voor wie, en zet je bewijsvoering vlak boven het formulier in plaats van onderaan de pagina.",
      },
    ],
    dienst: {
      label: "Conversie-optimalisatie",
      to: "/online-marketing/conversie-optimalisatie/",
      note: "Meer aanvragen uit hetzelfde verkeer, met een vaste testvolgorde en vooraf afgesproken succescriteria.",
    },
    gerelateerd: ["ctr", "landingspagina", "user-experience"],
    publicatie: "2026-10-16",
  },

  "user-experience": {
    slug: "user-experience",
    term: "User experience (UX)",
    synoniemen: ["ux", "gebruikerservaring", "ux design", "gebruiksvriendelijkheid"],
    h1: "User experience: waarom gebruiksgemak omzet oplevert",
    title: "User experience | Wat UX is en wat het oplevert",
    description:
      "User experience is hoe prettig je site werkt voor de bezoeker. Waarom Google erop let, wat het verschil is met UI en waar je zelf kunt beginnen.",
    definitie:
      "User experience, kortweg UX, is de totale ervaring die iemand heeft bij het gebruiken van je website: hoe snel hij vindt wat hij zoekt, hoe duidelijk de stappen zijn en hoeveel moeite het kost om te doen waarvoor hij kwam.",
    waarom: [
      "Voor een ondernemer is UX geen designonderwerp maar een omzetonderwerp. Elke extra klik, elk onduidelijk label en elk formulierveld dat niemand begrijpt, kost je een deel van je bezoekers. Dat verlies staat nergens op een factuur, waardoor het jarenlang onopgemerkt kan doorlopen terwijl je wel gewoon voor het verkeer betaalt.",
      "Google let er inmiddels ook op. Laadtijd, stabiliteit van de pagina tijdens het laden en hoe snel de site reageert op een tik zijn meetbare signalen die meewegen. Ze zijn zelden doorslaggevend voor je positie, maar bij verder gelijke pagina's geven ze de doorslag, en ze bepalen wel degelijk of iemand blijft.",
    ],
    voorbeeld: {
      h: "Drie dingen die je vandaag kunt controleren",
      p: [
        "Pak je telefoon en probeer op je eigen site een offerte aan te vragen, alsof je de site niet kent. Tel hoeveel keer je moet zoomen, hoe vaak je verkeerd tikt en hoeveel velden je moet invullen. De meeste ondernemers halen het formulier niet zonder te vloeken, en dat is precies wat hun klanten ook doen.",
        "Kijk daarna naar de laadtijd op mobiel via PageSpeed Insights, en let vooral op de veldgegevens van echte bezoekers in plaats van op de labscore. Bekijk tot slot een handvol sessieopnames in een tool als Microsoft Clarity. Waar mensen heen en weer scrollen of herhaaldelijk op iets niet-klikbaars tikken, zit je probleem.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen UX en UI?",
        a: "UI is de zichtbare laag: knoppen, kleuren, typografie en indeling. UX is de hele ervaring, inclusief snelheid, logica van de stappen en of iemand zijn doel bereikt. Een strak vormgegeven site met een onlogisch bestelproces heeft een goede UI en een slechte UX.",
      },
      {
        q: "Beïnvloedt UX mijn positie in Google?",
        a: "Indirect en deels direct. Direct via de Core Web Vitals: laadtijd, reactiesnelheid en visuele stabiliteit wegen mee. Indirect en zwaarder: bezoekers die meteen terugkeren naar de zoekresultaten geven Google het signaal dat jouw pagina de vraag niet beantwoordde. Dat signaal weegt op termijn zwaarder dan welke technische score ook.",
      },
      {
        q: "Waar begin ik met beperkt budget?",
        a: "Bij je formulier en bij de eerste schermvulling op mobiel. Dat zijn de twee plekken waar de meeste bezoekers afhaken en tegelijk de goedkoopste om aan te passen. Vormgeving en animaties komen daarna pas, want die verplaatsen zelden een conversiepercentage.",
      },
    ],
    dienst: {
      label: "Website advies en laten bouwen",
      to: "/online-marketing/website-advies/",
      note: "Een snelle, duidelijke site die op mobiel werkt, in plaats van een site die alleen op een grote monitor mooi is.",
    },
    gerelateerd: ["conversie", "kiss-principe", "landingspagina"],
    publicatie: "2026-10-16",
  },

  google: {
    slug: "google",
    term: "Google",
    synoniemen: ["zoekmachine google", "google zoekmachine", "marktaandeel google"],
    h1: "Google: hoe de zoekmachine werkt en wat er verandert",
    title: "Google | Hoe de zoekmachine werkt en wat verandert",
    description:
      "Google is met afstand de grootste zoekmachine in Nederland. Hoe crawlen, indexeren en ranken werkt, en wat AI-antwoorden veranderen aan zichtbaarheid.",
    definitie:
      "Google is de grootste zoekmachine ter wereld en verreweg de meest gebruikte in Nederland. De missie is om alle informatie ter wereld te ordenen en universeel toegankelijk te maken, en het bedrijf verdient zijn geld vrijwel volledig met advertenties.",
    waarom: [
      "Voor een Nederlandse ondernemer betekent die dominantie iets heel praktisch: als je online gevonden wilt worden, gaat het gesprek in de praktijk over Google. Bing en anderen zijn niet irrelevant, maar het overgrote deel van je potentiële bezoekers begint hier. Wie hier niet verschijnt, mist het merendeel van de vraag in zijn markt.",
      "Tegelijk verandert wat zichtbaarheid betekent. Google beantwoordt steeds meer vragen direct in de zoekresultaten, via AI Overviews en de AI-modus. Het gevolg is dat een deel van de zoekopdrachten eindigt zonder klik. Bovenaan staan is dan niet meer genoeg: je wilt genoemd worden ín het antwoord, met een bronvermelding naar je site.",
    ],
    voorbeeld: {
      h: "Van crawlen tot ranken in drie stappen",
      p: [
        "Crawlen: Google stuurt software over het web die links volgt en pagina's ophaalt. Indexeren: van de opgehaalde pagina's wordt besloten welke worden opgeslagen in de index. Een pagina die niet in de index staat, kan nergens op verschijnen, ongeacht hoe goed hij is.",
        "Ranken: bij elke zoekopdracht bepaalt Google in een fractie van een seconde welke pagina's uit de index het beste antwoord geven, op basis van honderden signalen. Relevantie van de inhoud, autoriteit van het domein, laadsnelheid en locatie van de zoeker spelen daarin allemaal mee. Die volgorde verschilt per zoekopdracht, per plaats en soms per persoon.",
      ],
    },
    vragen: [
      {
        q: "Hoe groot is Google in Nederland?",
        a: "Het aandeel schommelt al jaren rond de negentig procent of hoger op desktop en mobiel samen, met Bing als grootste van de rest. Voor de meeste MKB-bedrijven betekent dat: optimaliseer voor Google, en beschouw goede prestaties in andere zoekmachines als bijvangst.",
      },
      {
        q: "Wat zijn Google AI Overviews?",
        a: "Dat zijn door AI gegenereerde samenvattingen bovenaan de zoekresultaten, met links naar de bronnen die zijn gebruikt. Ze beantwoorden de vraag vaak volledig, waardoor er minder wordt doorgeklikt. Zichtbaar zijn betekent daar dus: genoemd worden als bron, niet alleen hoog staan.",
      },
      {
        q: "Kan ik Google beïnvloeden om hoger te komen?",
        a: "Beïnvloeden ja, sturen nee. Je kunt zorgen dat je pagina's technisch in orde zijn, de zoekvraag beter beantwoorden dan de concurrentie en dat andere sites naar je verwijzen. Wie een specifieke positie garandeert, verkoopt je een zoekwoord dat vrijwel niemand intikt.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Techniek, content en autoriteit in één doorlopend traject, plus zichtbaarheid in de AI-antwoorden van Google.",
    },
    gerelateerd: ["bing", "indexeren-betekenis", "bovenaan-in-google"],
    publicatie: "2026-10-23",
  },

  bing: {
    slug: "bing",
    term: "Bing",
    synoniemen: ["microsoft bing", "live search", "bing zoekmachine"],
    h1: "Bing: de zoekmachine achter Copilot en ChatGPT",
    title: "Bing | De zoekmachine achter Copilot en ChatGPT",
    description:
      "Bing is de zoekmachine van Microsoft en de tweede van Nederland. Klein in aandeel, maar belangrijker geworden doordat AI-assistenten erop leunen.",
    definitie:
      "Bing is de zoekmachine van Microsoft en na Google de grootste in Nederland. Het aandeel is bescheiden, maar Bing levert wel de zoekresultaten waarop Microsoft Copilot en delen van ChatGPT hun antwoorden baseren.",
    waarom: [
      "Jarenlang was het advies simpel: richt je op Google en Bing volgt vanzelf. Dat klopt nog steeds grotendeels, want de basis is dezelfde. Wat er is veranderd, is waar die Bing-resultaten terechtkomen. Als een AI-assistent live het web raadpleegt, gebeurt dat vaak via de index van Bing, en dan bepaalt jouw positie daar of je in het antwoord wordt genoemd.",
      "Voor een MKB-bedrijf is dat geen reden om een aparte Bing-strategie op te tuigen. Wel is het reden om je site één keer aan te melden bij Bing Webmaster Tools en te controleren of je pagina's daar zijn opgenomen. Dat kost een half uur en het is de goedkoopste manier om mee te doen in AI-antwoorden die niet via Google lopen.",
    ],
    voorbeeld: {
      h: "Wat je concreet doet",
      p: [
        "Meld je site aan bij Bing Webmaster Tools. Je kunt daar in één stap je gegevens uit Google Search Console importeren, waardoor je niet opnieuw hoeft te verifiëren. Dien je sitemap in en controleer of het aantal opgenomen pagina's in de buurt komt van wat Google heeft.",
        "Zorg daarnaast dat je robots.txt de crawler van Bing niet blokkeert, en dat AI-crawlers zoals OAI-SearchBot en PerplexityBot toegang hebben als je in AI-antwoorden genoemd wilt worden. Dat laatste is een instelling van één regel die vaak per ongeluk verkeerd staat.",
      ],
    },
    vragen: [
      {
        q: "Moet ik apart voor Bing optimaliseren?",
        a: "Nauwelijks. Wat werkt voor Google werkt in grote lijnen ook hier: heldere structuur, goede titels, snelle pagina's en autoriteit. Bing hecht wel iets meer waarde aan exacte zoekwoorden in titels en aan sociale signalen, maar dat verschil rechtvaardigt geen apart traject.",
      },
      {
        q: "Hoe groot is Bing in Nederland?",
        a: "Het aandeel ligt in de lage enkele procenten en schommelt met wat Microsoft in Windows en Edge voorinstelt. Dat lijkt verwaarloosbaar, maar bij bedrijven met veel zakelijke bezoekers ligt het hoger, omdat kantooromgevingen vaak op Edge en Bing staan. Meet het zelf na onder je verkeersbronnen in Analytics.",
      },
      {
        q: "Waarom is Bing belangrijker geworden?",
        a: "Omdat AI-assistenten voor actuele informatie het web raadplegen, en een deel daarvan doet dat via de index van Bing. Sta je daar niet in, dan kun je in die antwoorden ook niet als bron worden aangehaald, hoe goed je in Google ook presteert.",
      },
    ],
    dienst: {
      label: "Genoemd worden in AI-antwoorden",
      to: "/online-marketing/geo-optimalisatie/",
      note: "Wij controleren of AI-crawlers je site mogen lezen en monitoren of je in de antwoorden wordt genoemd.",
    },
    gerelateerd: ["google", "yahoo-discovery", "indexeren-betekenis"],
    publicatie: "2026-10-23",
  },

  "yahoo-discovery": {
    slug: "yahoo-discovery",
    term: "Yahoo",
    synoniemen: ["yahoo search", "yahoo discovery", "portaalsite"],
    h1: "Yahoo: van portaalsite tot voetnoot in Nederland",
    title: "Yahoo | Van portaalsite tot voetnoot in Nederland",
    description:
      "Yahoo was ooit de grootste toegangspoort tot het web. Wat er nog van over is, wie de zoekresultaten levert en of het voor jou nog iets uitmaakt.",
    definitie:
      "Yahoo is een van de oudste zoekmachines en portaalsites van het web: een startpagina die nieuws, mail en zoeken combineerde. In Nederland is het aandeel inmiddels verwaarloosbaar, en de zoekresultaten komen niet meer uit een eigen index.",
    waarom: [
      "Voor een Nederlandse ondernemer is dit vooral een begrip om te kunnen plaatsen. Kom je Yahoo tegen in een oud SEO-rapport of in een pakket dat belooft je in Google, Bing én Yahoo te plaatsen, dan weet je nu dat dat laatste geen extra werk is. Yahoo leunt op de resultaten van een andere zoekmachine, dus wie daar goed staat, staat automatisch ook hier.",
      "Het begrip portaalsite is wel blijvend relevant, al heet het inmiddels anders. Een portaal is een pagina die dienstdoet als toegangspoort tot een reeks andere sites over hetzelfde onderwerp. Vergelijkingssites, branchegidsen en marktplaatsen vervullen die rol vandaag, en voor veel MKB-bedrijven zijn dat serieuze verkeersbronnen naast Google.",
    ],
    voorbeeld: {
      h: "Wat het portaalmodel vandaag betekent",
      p: [
        "Denk aan een vergelijkingssite voor installateurs, een branchegids voor advocaten of een regionaal ondernemersplatform. Bezoekers gaan daar naartoe in plaats van rechtstreeks naar Google, en kiezen binnen dat portaal een aanbieder. Voor sommige branches loopt daar een aanzienlijk deel van de aanvragen doorheen.",
        "Praktisch betekent dat twee dingen. Ten eerste: zorg dat je vermelding op die platforms compleet en actueel is, want dat is vaak het eerste beeld dat iemand van je krijgt. Ten tweede: die vermeldingen leveren meestal ook een link op naar je site, wat je autoriteit in Google helpt. Twee vliegen in één klap.",
      ],
    },
    vragen: [
      {
        q: "Bestaat Yahoo nog?",
        a: "Ja, als portaalsite met nieuws, mail en financiële informatie, en in sommige landen met een noemenswaardig aandeel. Als zoekmachine met een eigen index in Nederland speelt het geen rol van betekenis meer, en de resultaten komen van een partner. Voor je eigen vindbaarheid verandert dat in de praktijk niets.",
      },
      {
        q: "Moet ik voor Yahoo optimaliseren?",
        a: "Nee. Doe je je werk goed voor Google en meld je site aan bij Bing Webmaster Tools, dan is dat alles wat er te winnen valt. Een aanbieder die apart betaalt voor Yahoo-optimalisatie verkoopt je werk dat al gedaan is.",
      },
    ],
    dienst: {
      label: "Local SEO en vermeldingen",
      to: "/online-marketing/local-seo/",
      note: "Vermeldingen in gidsen en platforms leveren zowel aanvragen als autoriteit op. Wij zetten ze goed neer.",
    },
    gerelateerd: ["bing", "google", "citymarketing"],
    publicatie: "2026-10-23",
  },
};
