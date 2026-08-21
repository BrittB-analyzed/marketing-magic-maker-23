import type { KennisbankTerm } from "./kennisbank";

/**
 * Kennisbankbegrippen rond marketingkanalen, content, conversiepagina's en CMS.
 *
 * Net als in ./kennisbank-seo.ts staan deze pagina's op hun oorspronkelijke
 * slug van de oude WordPress-site, zodat bestaande links weer ergens uitkomen.
 * De inhoud is herschreven naar het sjabloon uit ./kennisbank.ts.
 */
export const KENNISBANK_MARKETING: Record<string, KennisbankTerm> = {
  "google-ads": {
    slug: "google-ads",
    term: "Google Ads",
    synoniemen: ["google adwords", "adwords", "sea", "zoekmachine adverteren"],
    h1: "Google Ads: adverteren op wat mensen intikken",
    title: "Google Ads | Hoe adverteren in Google werkt",
    description:
      "Google Ads is het advertentieplatform van Google. Hoe het veilingmodel werkt, wat je per klik betaalt en waarom kwaliteitsscore je prijs bepaalt.",
    definitie:
      "Google Ads is het advertentieplatform van Google. Je biedt op zoekwoorden en betaalt alleen als iemand op je advertentie klikt. Je advertenties verschijnen boven en onder de onbetaalde zoekresultaten.",
    waarom: [
      "Het onderscheidende van zoekadvertenties is het moment. Je onderbreekt niemand: je verschijnt precies wanneer iemand actief zoekt naar wat jij verkoopt. Dat maakt het het snelste kanaal dat er is. Waar SEO maanden opbouwt, kunnen de eerste aanvragen hier binnen dagen binnenkomen.",
      "Daar staat tegenover dat het stopt zodra je stopt met betalen. Google Ads is huren, geen bezit. Voor een ondernemer betekent dat: gebruik het om vraag te testen, om pieken op te vangen en om te ontdekken welke exacte woorden geld opleveren. Gebruik die kennis vervolgens om je organische posities op te bouwen, zodat je op termijn minder hoeft te huren.",
    ],
    voorbeeld: {
      h: "Waarom twee adverteerders een andere prijs betalen",
      p: [
        "Google veilt elke vertoning, maar niet alleen op geld. Je positie en je klikprijs komen voort uit je bod maal je kwaliteitsscore. Die score kijkt naar hoe relevant je advertentie is voor de zoekopdracht, hoe vaak erop geklikt wordt en hoe goed je landingspagina aansluit.",
        "Concreet: adverteerder A biedt € 3,- met een lage kwaliteitsscore, adverteerder B biedt € 2,- met een hoge. B kan boven A eindigen én minder per klik betalen. Dat is precies het punt waar SEO en Ads elkaar raken: een landingspagina die organisch goed presteert, verlaagt je advertentiekosten.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen Google Ads en AdWords?",
        a: "Alleen de naam. Google AdWords heet sinds 2018 Google Ads, omdat het platform inmiddels veel meer doet dan alleen tekstadvertenties op zoekwoorden. Veel ondernemers zoeken nog op de oude naam. Het vak en de werking zijn hetzelfde gebleven. Wat er wel bij is gekomen, is automatisering die om sturing vraagt.",
      },
      {
        q: "Wat kost adverteren in Google?",
        a: "Je bepaalt zelf je dagbudget, dus je geeft nooit meer uit dan je instelt. De klikprijs varieert sterk per branche, van enkele dubbeltjes tot tientallen euro's voor zoekwoorden met hoge marges. Wat telt is niet de klikprijs maar je kosten per aanvraag.",
      },
      {
        q: "Kan ik het zelf beheren?",
        a: "Opzetten kan iedereen, en Google helpt daar actief bij. Het risico zit in de automatische instellingen: zonder sturing koopt een account al snel vertoningen op zoekopdrachten die niets met je aanbod te maken hebben. Het wekelijkse zoektermenrapport nalopen is het werk dat het verschil maakt.",
      },
    ],
    dienst: {
      label: "Google Ads uitbesteden",
      to: "/online-marketing/google-ads-uitbesteden/",
      note: "Je adverteert in je eigen account en blijft daar eigenaar van. Wij optimaliseren wekelijks.",
    },
    gerelateerd: ["zoekmachine-marketing", "ctr", "sea-scan"],
    publicatie: "2026-10-30",
  },

  "zoekmachine-marketing": {
    slug: "zoekmachine-marketing",
    term: "Zoekmachinemarketing (SEM)",
    synoniemen: ["sem", "zoekmachine marketing", "search engine marketing"],
    h1: "Zoekmachinemarketing: SEO en SEA onder één noemer",
    title: "Zoekmachinemarketing | SEO en SEA onder één noemer",
    description:
      "Zoekmachinemarketing is de verzamelnaam voor SEO en SEA samen. Wat de twee onderscheidt, hoe ze elkaar versterken en hoe je je budget verdeelt.",
    definitie:
      "Zoekmachinemarketing, of SEM, is de verzamelnaam voor alles wat je doet om zichtbaar te zijn in zoekmachines. Het valt uiteen in twee helften: de onbetaalde resultaten via SEO en de advertenties via SEA.",
    waarom: [
      "De term is nuttig omdat hij een denkfout voorkomt. Veel ondernemers behandelen SEO en advertenties als concurrerende budgetten waaruit gekozen moet worden. In werkelijkheid gaat het om hetzelfde zoekresultaat en dezelfde zoekende klant, alleen bereik je hem via twee routes met een compleet ander tempo en kostenpatroon.",
      "Wie ze als één geheel plant, wint op twee punten. De zoektermdata uit advertenties vertelt je binnen weken welke exacte formuleringen omzet opleveren, en dat is precies de informatie die je contentkalender stuurt. En organische posities verlagen je kwaliteitsscoreproblemen in Ads, waardoor je klikprijs daalt. Wie de kanalen apart houdt, laat die twee voordelen liggen.",
    ],
    voorbeeld: {
      h: "Hoe de verhouding verschuift",
      p: [
        "In het eerste halfjaar ligt het zwaartepunt meestal op advertenties: je hebt aanvragen nu nodig en je wilt weten welke woorden werken. Een verdeling rond zestig procent SEA en veertig procent SEO is dan gebruikelijk bij een MKB-budget.",
        "Naarmate organische posities gaan staan, kantelt dat. SEO neemt een deel van het volume over dat eerst uit advertenties moest komen, en je kosten per aanvraag dalen mee. Na een jaar zie je bij veel bedrijven een omgekeerde verdeling, waarbij advertenties zich concentreren op de zoekopdrachten met de scherpste koopintentie.",
      ],
    },
    vragen: [
      {
        q: "Is SEM hetzelfde als SEA?",
        a: "Nee, al worden ze door elkaar gebruikt. SEM is de overkoepelende term voor zoekmachinemarketing als geheel, SEA is specifiek het betaalde deel. In de praktijk bedoelen mensen met SEM vaak alleen adverteren, dus vraag door als iemand je een SEM-pakket aanbiedt.",
      },
      {
        q: "Kannibaliseren advertenties mijn organische verkeer?",
        a: "Deels. Sta je al op één en zet je daar ook een advertentie op, dan koop je klikken die je gratis had gekregen. Op je eigen merknaam is dat vaak alsnog verstandig als concurrenten daarop bieden. Op de rest test je het door de advertentie een periode uit te zetten.",
      },
      {
        q: "Waar begin ik met een beperkt budget?",
        a: "Bij advertenties op je meest winstgevende dienst, met een klein dagbudget. Dat levert binnen weken zowel aanvragen als data over welke woorden werken. Bouw met die opbrengst je SEO op. Andersom beginnen werkt zelden, omdat de eerste maanden dan volledig zonder resultaat blijven.",
      },
    ],
    dienst: {
      label: "SEO en SEA combineren",
      to: "/online-marketing/seo-en-sea/",
      note: "Beide kanten van hetzelfde zoekresultaat vanuit één plan, met een rekenvoorbeeld van de budgetverdeling.",
    },
    gerelateerd: ["google-ads", "zoekmachine-optimalisatie-seo", "internet-marketing"],
    publicatie: "2026-10-30",
  },

  "internet-marketing": {
    slug: "internet-marketing",
    term: "Internet marketing",
    synoniemen: ["online marketing", "digital marketing", "digitale marketing"],
    h1: "Internet marketing: alle kanalen op een rij",
    title: "Internet marketing | Alle online kanalen op een rij",
    description:
      "Internet marketing is de verzamelnaam voor alle marketing via het web. Welke kanalen eronder vallen en in welke volgorde je ze verstandig inzet.",
    definitie:
      "Internet marketing is de verzamelnaam voor alle marketingactiviteiten die via het internet lopen: zoekmachines, advertenties, e-mail, social media, content en alles wat daarbij hoort. Online marketing en digital marketing betekenen in de praktijk hetzelfde.",
    waarom: [
      "De term is zo breed dat hij vooral nuttig is om te ordenen. Voor een ondernemer is de relevante vraag namelijk nooit of hij aan internet marketing moet doen, maar welk van die kanalen bij zijn markt en zijn moment past. Een installatiebedrijf met lokale vraag heeft een compleet ander pakket nodig dan een webshop met landelijke concurrentie.",
      "Daar gaat het in de praktijk mis. Bureaus verkopen dertien losse diensten, ondernemers nemen er een paar af zonder samenhang, en niemand kan achteraf zeggen wat wat opleverde. Beter is om te beginnen bij de vraag wat je groei nú het meest in de weg zit, en het kanaal te kiezen dat daar het snelste antwoord op geeft.",
    ],
    voorbeeld: {
      h: "Vier pijlers in plaats van dertien diensten",
      p: [
        "SEO zorgt dat je gevonden wordt in de onbetaalde zoekresultaten. GEO zorgt dat je genoemd wordt in AI-antwoorden van ChatGPT, Gemini en Google. Ads koopt het verkeer dat vandaag moet converteren. CRO zorgt dat je van al dat verkeer ook daadwerkelijk iets terugziet in aanvragen.",
        "Daaromheen liggen de ondersteunende kanalen: e-mailmarketing voor het rendement uit contacten die je al hebt, social media voor bereik, linkbuilding voor autoriteit, en de website zelf als fundament. Die zijn zelden een startpunt, maar wel het verschil tussen redelijk en goed presterende marketing.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met online marketing?",
        a: "Niets van betekenis. Internet marketing, online marketing en digital marketing worden door elkaar gebruikt voor hetzelfde vakgebied. Digital marketing wordt soms iets breder opgevat, omdat er ook kanalen onder vallen die niet per se via het web lopen, zoals sms en digitale schermen.",
      },
      {
        q: "Welk kanaal levert het snelst resultaat?",
        a: "Zoekadvertenties, met afstand. De eerste klikken komen binnen dagen en bruikbare conversiedata binnen weken. SEO en GEO bouwen op en leveren meestal tussen maand zes en twaalf meetbaar meer aanvragen, maar blijven daarna doorlopen zonder kosten per klik. Die combinatie van snel en blijvend is precies waarom je beide inzet.",
      },
      {
        q: "Moet ik alle kanalen tegelijk inzetten?",
        a: "Nee, en dat is de duurste fout die je kunt maken. Twee kanalen die goed draaien leveren meer op dan zes die half worden bijgehouden. Begin bij het kanaal dat je grootste knelpunt oplost en breid pas uit als dat aantoonbaar rendeert.",
      },
    ],
    dienst: {
      label: "Online marketing uitbesteden",
      to: "/online-marketing/uitbesteden/",
      note: "Vier pijlers in één plan, vanaf € 999,- per maand, met één vast aanspreekpunt in plaats van een accountmanager.",
    },
    gerelateerd: ["zoekmachine-marketing", "content-marketing", "see-think-do-care"],
    publicatie: "2026-10-30",
  },

  "content-marketing": {
    slug: "content-marketing",
    term: "Content marketing",
    synoniemen: ["contentmarketing", "content strategie", "contentkalender"],
    h1: "Content marketing: klanten winnen door eerst te helpen",
    title: "Content marketing | Klanten winnen door te helpen",
    description:
      "Content marketing is waardevolle content maken om klanten aan te trekken en te binden. Wat het oplevert, hoe lang het duurt en waar je begint.",
    definitie:
      "Content marketing is het maken en verspreiden van waardevolle, relevante content om een duidelijk omschreven doelgroep aan te trekken en te binden, met als uiteindelijk doel om van een lezer een klant te maken.",
    waarom: [
      "De logica erachter is ouderwets en werkt nog steeds: wie je eerst helpt, vertrouwt je eerder als hij gaat kopen. Iemand die drie keer op jouw uitleg is uitgekomen bij het oriënteren op een warmtepomp, denkt bij het aanvragen van offertes aan jou. Dat is geen truc, dat is het opbouwen van een reputatie op een schaal die vroeger onmogelijk was.",
      "Voor SEO is het bovendien de motor. Zoekmachines kunnen alleen pagina's tonen die er zijn. Elke goed geschreven pagina over een deelvraag is een nieuwe ingang naar je site en een nieuwe kans om genoemd te worden in een AI-antwoord. Dat is precies waarom bedrijven met een uitgebreide kennisbank structureel meer organisch verkeer hebben dan bedrijven met alleen dienstpagina's.",
    ],
    voorbeeld: {
      h: "Hoe je het praktisch aanpakt",
      p: [
        "Begin bij de vragen die je in verkoopgesprekken telkens krijgt. Die zijn per definitie relevant, want je klanten stellen ze zelf, en ze zijn vrijwel altijd ook zoekopdrachten. Wat kost het, hoe lang duurt het, wat is het verschil tussen A en B, waar moet ik op letten. Elk daarvan is een pagina.",
        "Maak er één of twee per maand, geen tien tegelijk. Beantwoord de vraag in de eerste honderd woorden, zet de bijvragen als koppen eronder, en link vanuit het artikel naar de dienstpagina waar de lezer terechtkomt als hij het niet zelf wil doen. Meet na drie maanden welke artikelen verkeer trekken en schrijf meer van dat soort.",
      ],
    },
    vragen: [
      {
        q: "Hoe lang duurt het voor content marketing werkt?",
        a: "Reken op zes tot twaalf maanden voordat het een merkbare stroom bezoekers oplevert, en langer voordat het een substantieel deel van je aanvragen levert. Wat je wel vrijwel meteen merkt, is dat verkoopgesprekken korter worden omdat je naar bestaande uitleg kunt verwijzen.",
      },
      {
        q: "Kan ik AI mijn content laten schrijven?",
        a: "Voor een ruwe opzet of structuur werkt dat prima. Wat AI niet heeft, zijn jouw prijzen, jouw cases en jouw ervaring, en juist die maken het verschil tussen een tekst die opvalt en een tekst die klinkt als tien andere. Gebruik AI voor het skelet, vul zelf de feiten in.",
      },
      {
        q: "Hoeveel content heb ik nodig?",
        a: "Minder dan de meeste bureaus je vertellen. Tien pagina's die een zoekvraag echt goed beantwoorden, verslaan honderd oppervlakkige artikelen ruimschoots. Bij een lage domeinautoriteit is veel dunne content bovendien actief schadelijk, omdat het je hele site als oppervlakkig laat overkomen.",
      },
    ],
    dienst: {
      label: "SEO-teksten laten schrijven",
      to: "/online-marketing/seo-teksten-laten-schrijven/",
      note: "Teksten op de zoekvraag van je klant, tegen een vaste prijs per tekst afgesproken vooraf.",
    },
    gerelateerd: ["wat-is-copywriting", "seo-copywriter", "advertorial"],
    publicatie: "2026-11-06",
  },

  "e-mailmarketing": {
    slug: "e-mailmarketing",
    term: "E-mailmarketing",
    synoniemen: ["email marketing", "nieuwsbrief", "mailings", "e-mail campagne"],
    h1: "E-mailmarketing: rendement uit contacten die je al hebt",
    title: "E-mailmarketing | Rendement uit bestaande contacten",
    description:
      "E-mailmarketing is het enige kanaal waarvan je de lijst zelf bezit. Wat het oplevert, welke mails werken en waar de regels je beperken.",
    definitie:
      "E-mailmarketing is het inzetten van e-mail om klanten en geïnteresseerden te bereiken met aanbiedingen, nieuws of herinneringen. Het is het enige kanaal waarbij je de lijst met contacten zelf in handen hebt.",
    waarom: [
      "Dat laatste is precies waarom het ondanks alle nieuwe kanalen overeind blijft. Je bereik op social media hangt af van een algoritme dat morgen kan veranderen, je posities in Google hangen af van Google. Je e-maillijst is van jou. Verandert er iets in de markt, dan kun je je klanten nog steeds rechtstreeks bereiken zonder tussenpersoon.",
      "Voor een ondernemer zit de winst zelden in nieuwe klanten werven. Die zit in klanten die al eens gekocht hebben opnieuw activeren, in aanvragen die zijn blijven liggen weer oppakken, en in het onderhouden van contact met mensen die nog niet klaar zijn om te kopen. Dat is verreweg het goedkoopste verkeer dat je kunt genereren.",
    ],
    voorbeeld: {
      h: "Drie mails die vrijwel altijd renderen",
      p: [
        "De welkomstreeks: twee tot drie mails direct na inschrijving, waarin je uitlegt wat iemand van je kan verwachten en waar je het meest waardevolle geeft. Openingspercentages liggen hier het hoogst, omdat de interesse op dat moment het grootst is.",
        "De opvolgmail na een offerte die stil blijft. En de onderhouds- of herhaalmail: een herinnering op het moment dat een klant je opnieuw nodig heeft, bijvoorbeeld een jaar na een installatie. Die laatste kost je één keer instellen en levert daarna vanzelf omzet op.",
      ],
    },
    vragen: [
      {
        q: "Mag ik zomaar mailen naar mijn klantenbestand?",
        a: "Voor particulieren geldt het opt-in-principe: je hebt toestemming nodig. Voor bestaande klanten bestaat een beperkte uitzondering voor soortgelijke eigen producten of diensten, mits elke mail een werkende afmeldlink bevat. Voor zakelijke ontvangers zijn de regels soepeler, maar niet vrij. Elke mail moet hoe dan ook een werkende afmeldlink bevatten.",
      },
      {
        q: "Hoe vaak moet ik mailen?",
        a: "Liever één keer per maand met iets dat de moeite waard is dan wekelijks met vulling. De belangrijkste maatstaf is je afmeldpercentage: loopt dat op, dan mail je te vaak of te weinig relevant. Een kleine lijst die je mail openmaakt, is meer waard dan een grote die dat niet doet.",
      },
      {
        q: "Wat is een goed openingspercentage?",
        a: "Dat verschilt sterk per branche en is sinds privacymaatregelen van mailproviders minder betrouwbaar te meten geworden. Stuur daarom liever op doorklikken en op conversies dan op openingen. Vergelijk je eigen cijfer over tijd in plaats van met een branchegemiddelde. Een stijgende lijn zegt meer dan een absoluut getal.",
      },
    ],
    dienst: {
      label: "E-mailmarketing uitbesteden",
      to: "/online-marketing/emailmarketing/",
      note: "Campagnes, automations en een lijst die aantoonbaar in orde is, ingericht en bijgehouden.",
    },
    gerelateerd: ["opt-in", "wat-is-marketing-automation", "direct-marketing"],
    publicatie: "2026-11-06",
  },

  advertorial: {
    slug: "advertorial",
    term: "Advertorial",
    synoniemen: ["gesponsord artikel", "native advertising", "ingezonden mededeling"],
    h1: "Advertorial: een advertentie in de vorm van een artikel",
    title: "Advertorial | Advertentie in de vorm van een artikel",
    description:
      "Een advertorial is een betaald artikel dat eruitziet als redactionele inhoud. Wat het oplevert, welke regels gelden en hoe het uitpakt voor SEO.",
    definitie:
      "Een advertorial is een betaalde publicatie die is vormgegeven als een redactioneel artikel. De inhoud komt van de adverteerder, de verpakking is die van de uitgever, en er moet altijd bij staan dat het om advertentie gaat.",
    waarom: [
      "De aantrekkingskracht is duidelijk: mensen die advertenties wegklikken, lezen artikelen wel. Een advertorial in een vakblad of op een regionale nieuwssite bereikt daardoor een publiek dat je met een banner nooit had geraakt. Bovendien leen je een deel van de geloofwaardigheid van het medium, wat vooral werkt in branches waar vertrouwen doorslaggevend is.",
      "Er zitten twee haken aan. Ten eerste is het wettelijk verplicht om duidelijk te maken dat het betaald is; verstopte reclame kan je reputatie meer kosten dan het bereik oplevert. Ten tweede is het geen linkbuildingtruc: links in betaalde publicaties horen als gesponsord gemarkeerd te worden, en Google gaat er sowieso doorgaans niet van uit dat ze verdiend zijn.",
    ],
    voorbeeld: {
      h: "Wanneer het werkt en wanneer niet",
      p: [
        "Het werkt als je iets te vertellen hebt dat op zichzelf interessant is: een opvallende case, een verandering in je branche, een concreet onderzoek. Het medium wil zijn lezers niet kwijt, dus een stuk dat leest als een folder wordt slecht gelezen, hoeveel je er ook voor betaalt.",
        "Het werkt niet als je alleen je diensten opsomt. Reken vooraf ook door wat je ervoor terugkrijgt: vraag naar het aantal lezers, spreek af dat er een link naar een specifieke pagina in komt, en zet een aparte campagnecode in de URL zodat je in Analytics kunt zien hoeveel bezoekers en aanvragen er daadwerkelijk uit voortkwamen.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met native advertising?",
        a: "Native advertising is de bredere term voor advertenties die de vorm aannemen van de omgeving waarin ze staan, inclusief social media en aanbevelingsblokken. Een advertorial is de klassieke variant daarvan: een betaald artikel in de opmaak van de redactionele inhoud.",
      },
      {
        q: "Helpt een advertorial mijn SEO?",
        a: "Voor je autoriteit nauwelijks, want links in betaalde publicaties horen als gesponsord gemarkeerd te worden en tellen dan niet mee. Wat het wel oplevert is bereik, merkbekendheid en verkeer dat rechtstreeks binnenkomt. Beoordeel het dus als advertentie, niet als linkbuilding.",
      },
      {
        q: "Moet erbij staan dat het een advertentie is?",
        a: "Ja. In Nederland moet reclame als zodanig herkenbaar zijn. In de praktijk zie je dat terug als een label boven het artikel, een afwijkende opmaak of de vermelding van de adverteerder als bron. Een uitgever die dat niet doet, neemt een risico dat ook bij jou terechtkomt.",
      },
    ],
    dienst: {
      label: "Linkbuilding en publicaties",
      to: "/online-marketing/linkbuilding-uitbesteden/",
      note: "Wij kijken per publicatie of hij bereik oplevert, autoriteit, of allebei. Dat scheelt in wat je ervoor betaalt.",
    },
    gerelateerd: ["content-marketing", "print-marketing", "wat-is-copywriting"],
    publicatie: "2026-11-06",
  },

  landingspagina: {
    slug: "landingspagina",
    term: "Landingspagina",
    synoniemen: ["landing page", "campagnepagina", "bestemmingspagina"],
    h1: "Landingspagina: de pagina waar je campagne op uitkomt",
    title: "Landingspagina | Wat het is en hoe je hem opbouwt",
    description:
      "Een landingspagina is de pagina waar bezoekers uit een campagne binnenkomen. Hoe je hem opbouwt, wat je weglaat en waarom je homepage het niet is.",
    definitie:
      "Een landingspagina is de pagina waarop een bezoeker binnenkomt vanuit een advertentie, mail of zoekresultaat. Hij is gemaakt voor één doelgroep met één vraag, en stuurt aan op één actie.",
    waarom: [
      "De meest gemaakte fout in advertenties is bezoekers naar de homepage sturen. Je betaalt dan voor een klik en zet die persoon vervolgens op de drukste pagina van je site, waar hij zelf moet uitzoeken waar het aanbod staat waarvoor hij kwam. Een aanzienlijk deel haakt daar af, en dat verlies zie je terug in je kosten per aanvraag.",
      "Een landingspagina lost dat op door alles weg te laten wat niet bij die ene vraag hoort. Zoekt iemand op warmtepomp laten installeren, dan komt hij op een pagina over warmtepompen, met de prijs, de werkwijze, het bewijs en het formulier. Geen menu vol afleidingen, geen zes andere diensten, geen algemene bedrijfsverhalen.",
    ],
    voorbeeld: {
      h: "De opbouw die vrijwel altijd werkt",
      p: [
        "Bovenaan: een kop die de zoekopdracht letterlijk herhaalt, zodat de bezoeker binnen een seconde weet dat hij goed zit. Daaronder in één zin wat je aanbiedt en voor wie. Direct daarna de eerste call-to-action, want een deel van je bezoekers is al overtuigd voordat hij scrolt.",
        "Vervolgens de onderbouwing in de volgorde waarin de twijfel ontstaat: wat je precies levert, wat het kost, hoe lang het duurt, en pas dan het bewijs in de vorm van reviews of een case. Zet de tweede call-to-action vlak onder dat bewijs, want dat is het moment waarop iemand besluit. Één actie per pagina: bellen én offerte aanvragen én downloaden levert samen minder op dan één duidelijke keuze.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met een gewone webpagina?",
        a: "Focus. Een gewone pagina bedient meerdere bezoekers met meerdere vragen en biedt allerlei doorklikmogelijkheden. Een landingspagina bedient één vraag en stuurt op één actie, en laat daarom bewust navigatie en zijpaden weg die de bezoeker zouden afleiden. Alles wat niet bijdraagt aan die ene actie, hoort er niet op.",
      },
      {
        q: "Kan een landingspagina ook organisch ranken?",
        a: "Zeker, mits hij genoeg inhoud heeft om de zoekvraag volledig te beantwoorden. Kale campagnepagina's met vijftig woorden ranken niet. De beste dienstpagina's zijn tegelijk goede landingspagina's: uitgebreid genoeg voor Google, gefocust genoeg voor de bezoeker. Schrijf hem dus alsof hij allebei moet doen, want dat is meestal zo.",
      },
      {
        q: "Hoeveel landingspagina's heb ik nodig?",
        a: "Eén per combinatie van dienst en doelgroep waar je echt op adverteert of wilt ranken. Maak er niet honderd die alleen in de plaatsnaam verschillen: dat levert dunne, bijna identieke pagina's op die Google als duplicaat behandelt en die niemand helpen.",
      },
    ],
    dienst: {
      label: "Conversie-optimalisatie",
      to: "/online-marketing/conversie-optimalisatie/",
      note: "Wij testen landingspagina's op de volgorde van bewijs, prijs en formulier, met een vast succescriterium vooraf.",
    },
    gerelateerd: ["salespagina", "conversie", "user-experience"],
    publicatie: "2026-11-13",
  },

  salespagina: {
    slug: "salespagina",
    term: "Salespagina",
    synoniemen: ["sales page", "verkooppagina", "aanbodpagina"],
    h1: "Salespagina: één pagina die de hele verkoop moet doen",
    title: "Salespagina | Één pagina die de verkoop moet doen",
    description:
      "Een salespagina neemt het volledige verkoopgesprek over: aanbod, bezwaren, bewijs en prijs. De opbouw volgens AIDA en wanneer je er een nodig hebt.",
    definitie:
      "Een salespagina is een lange pagina die in zijn eentje het volledige verkoopgesprek voert: het aanbod uitleggen, bezwaren wegnemen, bewijs leveren en aansturen op de bestelling of aanvraag.",
    waarom: [
      "Het verschil met een gewone dienstpagina is de ambitie. Een dienstpagina informeert en leidt naar contact; een salespagina probeert de beslissing zelf af te ronden. Dat maakt hem geschikt voor producten waarbij geen persoonlijk gesprek nodig is: een cursus, een abonnement, een afgebakend pakket met een vaste prijs.",
      "Voor een dienstverlener met maatwerk is het meestal overdreven. Wie een offerte op maat maakt, hoeft de klant niet op één pagina volledig over de streep te trekken; die hoeft alleen genoeg vertrouwen te wekken om het gesprek aan te gaan. Een salespagina inzetten waar een goede dienstpagina volstaat, levert vooral een lange pagina op die niemand uitleest.",
    ],
    voorbeeld: {
      h: "AIDA als bouwplan",
      p: [
        "Attention: een kop die het probleem of het resultaat benoemt, niet je bedrijfsnaam. Interest: laat zien dat je het probleem begrijpt, in de woorden die de lezer zelf zou gebruiken. Desire: schets wat er verandert als het is opgelost, concreet en met bewijs erbij in de vorm van cases, cijfers of reviews.",
        "Action: één duidelijke actie, herhaald op meerdere plekken in de pagina zodat iemand niet terug hoeft te scrollen als hij overtuigd raakt. Behandel de drie bezwaren die je in verkoopgesprekken het vaakst hoort expliciet, vlak voor die laatste actie. Wat je niet weerlegt, gebruikt de lezer als reden om niets te doen.",
      ],
    },
    vragen: [
      {
        q: "Hoe lang moet een salespagina zijn?",
        a: "Zo lang als nodig om alle bezwaren weg te nemen, en geen woord langer. Bij een goedkoop product met weinig risico volstaat een korte pagina; bij een dure beslissing lezen mensen aantoonbaar veel meer. Lengte is nooit het doel, volledigheid wel.",
      },
      {
        q: "Wat is het verschil met een landingspagina?",
        a: "Een landingspagina is de plek waar een campagne op uitkomt en kan elk doel hebben, ook alleen een aanvraag. Een salespagina is een type landingspagina met één specifiek doel: de verkoop zelf afronden. Elke salespagina is dus een landingspagina, maar niet andersom.",
      },
      {
        q: "Kan een salespagina ranken in Google?",
        a: "Vaak matig. Salespagina's zijn geschreven om te overtuigen, niet om een zoekvraag te beantwoorden, en missen daardoor de structuur van vraagkoppen waar zoekmachines op leunen. Combineer ze meestal met betaald verkeer of met een informatieve pagina die ernaartoe linkt. Zo trekt de ene pagina het verkeer en sluit de andere de verkoop.",
      },
    ],
    dienst: {
      label: "Conversie-optimalisatie",
      to: "/online-marketing/conversie-optimalisatie/",
      note: "We testen welke bezwaren je expliciet moet weerleggen en waar het bewijs het beste staat.",
    },
    gerelateerd: ["landingspagina", "wat-is-copywriting", "conversie"],
    publicatie: "2026-11-13",
  },

  "affiliate-marketing": {
    slug: "affiliate-marketing",
    term: "Affiliate marketing",
    synoniemen: ["affiliate", "partnerprogramma", "affiliatemarketing"],
    h1: "Affiliate marketing: betalen per resultaat via partners",
    title: "Affiliate marketing | Betalen per behaald resultaat",
    description:
      "Bij affiliate marketing betaal je partners een vergoeding per verkoop of lead. Hoe het werkt, wat het kost en waar de valkuilen zitten.",
    definitie:
      "Bij affiliate marketing laat je andere websites naar jouw aanbod verwijzen en betaal je ze alleen een vergoeding als dat een afgesproken resultaat oplevert: een verkoop, een lead of soms een klik.",
    waarom: [
      "De aantrekkingskracht voor een ondernemer is het risico. Je betaalt pas als er iets is verkocht, dus je advertentiebudget kan niet verdampen zonder resultaat. Dat maakt het aantrekkelijk voor webshops met een duidelijk product en een marge die een commissie kan dragen.",
      "De keerzijde is controle. Je partners bepalen zelf hoe ze promoten, en niet elke methode past bij je merk. Bovendien claimen affiliates soms verkopen die je toch al had gekregen, bijvoorbeeld door te adverteren op je eigen merknaam of via kortingscodesites die pas in beeld komen als de klant al bij het afrekenen is. Dan betaal je commissie over omzet die je zelf had binnengehaald.",
    ],
    voorbeeld: {
      h: "Hoe de keten in elkaar zit",
      p: [
        "Je meldt je als adverteerder aan bij een affiliatenetwerk of zet een eigen programma op. Partners krijgen een unieke link met een trackingcode. Klikt een bezoeker daarop en koopt hij binnen de afgesproken periode, dan registreert het netwerk dat en krijgt de partner zijn commissie, meestal een percentage van de orderwaarde.",
        "De afspraken die het meest uitmaken staan in de voorwaarden, niet in het commissiepercentage. Leg vast of adverteren op je merknaam is toegestaan, hoe lang de cookie geldig is en welke promotiemethoden zijn uitgesloten. Zonder die afspraken betaal je vroeg of laat voor verkopen die je zonder programma ook had gehad.",
      ],
    },
    vragen: [
      {
        q: "Voor wie is affiliate marketing geschikt?",
        a: "Vooral voor webshops met een herkenbaar product, voldoende marge en een bestelproces dat online wordt afgerond. Voor dienstverleners met maatwerkoffertes is het lastiger, omdat een lead pas veel later omzet wordt en de waarde per lead sterk verschilt. Reken die waarde eerst uit, anders betaal je commissie zonder zicht op rendement.",
      },
      {
        q: "Wat kost affiliate marketing?",
        a: "De commissie ligt afhankelijk van de branche meestal tussen enkele procenten en tientallen procenten van de orderwaarde. Daarnaast rekenen netwerken opstartkosten en een maandelijkse of transactiegebonden fee. Reken dat volledig door in je marge voordat je begint. Blijft er te weinig over, dan is het kanaal simpelweg niet geschikt.",
      },
      {
        q: "Is het hetzelfde als een partnerprogramma?",
        a: "In de praktijk vaak wel. Partnerprogramma is de bredere, vriendelijkere term en wordt ook gebruikt voor samenwerkingen zonder commissie per verkoop. Affiliate marketing verwijst specifiek naar de vorm waarbij per behaald resultaat wordt afgerekend. Vraag bij een aanbod dus altijd door op wat er precies wordt uitbetaald en wanneer.",
      },
    ],
    dienst: {
      label: "Online marketingstrategie",
      to: "/online-marketing-strategie/",
      note: "We beoordelen per kanaal of het bij je marge en je verkoopproces past, voordat je erin investeert.",
    },
    gerelateerd: ["internet-marketing", "conversie", "direct-marketing"],
    publicatie: "2026-11-13",
  },

  "direct-marketing": {
    slug: "direct-marketing",
    term: "Direct marketing",
    synoniemen: ["directe marketing", "direct mail", "telemarketing"],
    h1: "Direct marketing: rechtstreeks benaderen en om een reactie vragen",
    title: "Direct marketing | Rechtstreeks benaderen, direct meten",
    description:
      "Direct marketing benadert de klant rechtstreeks en vraagt om een meetbare reactie. Welke vormen er zijn, wat het oplevert en welke regels gelden.",
    definitie:
      "Direct marketing is het rechtstreeks benaderen van een specifieke ontvanger met een boodschap die om een meetbare reactie vraagt. Denk aan een gerichte mailing, een telefoongesprek of een brief met een duidelijke oproep tot actie.",
    waarom: [
      "Het onderscheidende is de meetbaarheid. Bij een billboard of een merkcampagne raad je naar het effect; bij direct marketing weet je precies hoeveel mensen je hebt benaderd en hoeveel er reageerden. Dat maakt het mogelijk om per campagne te berekenen wat een klant je heeft gekost, en om die kosten te vergelijken met je andere kanalen.",
      "Voor een MKB-bedrijf werkt het vooral goed bij een afgebakende doelgroep die je kunt benoemen: bestaande klanten, oud-klanten, of een lijst bedrijven in een specifieke sector en regio. Hoe scherper die afbakening, hoe hoger het responspercentage en hoe minder je uitgeeft aan mensen die toch nooit klant worden.",
    ],
    voorbeeld: {
      h: "Wat de respons bepaalt",
      p: [
        "In direct marketing bestaat een oude vuistregel die nog steeds klopt: de lijst weegt het zwaarst, daarna het aanbod, en pas daarna de creatieve uitwerking. Een middelmatige brief naar precies de juiste tweehonderd bedrijven presteert beter dan een prachtige campagne naar tweeduizend willekeurige adressen.",
        "Meet altijd per campagne. Gebruik een eigen telefoonnummer, een aparte landingspagina of een unieke code, zodat je kunt herleiden welke reacties uit welke actie kwamen. Zonder die scheiding weet je aan het eind van het kwartaal wel dat er iets binnenkwam, maar niet waardoor.",
      ],
    },
    vragen: [
      {
        q: "Mag ik zomaar bedrijven bellen of mailen?",
        a: "Voor telefonisch benaderen van bedrijven gelden andere regels dan voor consumenten, waarvoor een register bestaat. Voor e-mail geldt het opt-in-principe, met een beperkte uitzondering voor bestaande klanten. Bij twijfel: elke commerciële boodschap hoort een duidelijke afmeldmogelijkheid te bevatten. Bij twijfel is even navragen goedkoper dan een klacht achteraf.",
      },
      {
        q: "Werkt direct mail per post nog?",
        a: "In sommige branches verrassend goed, juist omdat de brievenbus leger is geworden dan de mailbox. Het is duurder per contact, dus het loont alleen bij een scherp afgebakende lijst en een klantwaarde die de kosten kan dragen. Meet het altijd met een eigen responscode.",
      },
      {
        q: "Wat is een goed responspercentage?",
        a: "Dat verschilt te sterk per branche en per lijst om er een getal aan te hangen. Zinvoller is de rekensom erachter: kosten van de actie gedeeld door het aantal klanten dat eruit voortkwam. Zolang dat bedrag onder je klantwaarde blijft, was de campagne rendabel.",
      },
    ],
    dienst: {
      label: "E-mailmarketing uitbesteden",
      to: "/online-marketing/emailmarketing/",
      note: "De digitale variant van direct marketing, met meting die laat zien wat elke campagne opleverde.",
    },
    gerelateerd: ["e-mailmarketing", "opt-in", "print-marketing"],
    publicatie: "2026-11-20",
  },

  "print-marketing": {
    slug: "print-marketing",
    term: "Print marketing",
    synoniemen: ["printmarketing", "drukwerk", "offline marketing", "advertentie krant"],
    h1: "Print marketing: waar drukwerk nog steeds werkt",
    title: "Print marketing | Waar drukwerk nog steeds werkt",
    description:
      "Print marketing omvat alle marketing via gedrukte media. Wanneer het nog rendeert, hoe je het meetbaar maakt en hoe het samenwerkt met online.",
    definitie:
      "Print marketing omvat alle marketingactiviteiten via gedrukte media: advertenties in kranten en vakbladen, folders, brochures, direct mail en drukwerk in de winkel. Het is een van de oudste vormen van marketing en nog altijd niet verdwenen.",
    waarom: [
      "Het argument om het af te schrijven ligt voor de hand: je kunt niet klikken op papier en meten is lastig. Toch houdt het stand, en niet uit nostalgie. Drukwerk heeft een fysieke aanwezigheid die digitale advertenties missen. Een brochure die op de keukentafel blijft liggen, blijft dagen zichtbaar; een banner is na een seconde weg.",
      "Voor een MKB-bedrijf is de relevante vraag niet print óf online, maar waar de doelgroep zit en wat het per klant kost. In sommige branches en leeftijdsgroepen levert een advertentie in het regionale blad of een gerichte huis-aan-huisverspreiding nog altijd goedkopere aanvragen op dan advertenties. In andere is het weggegooid geld.",
    ],
    voorbeeld: {
      h: "Hoe je print wél meetbaar maakt",
      p: [
        "Zet er nooit alleen je algemene website-adres op. Gebruik een korte, unieke URL die naar een eigen landingspagina wijst, bijvoorbeeld jouwdomein.nl/actie. In Analytics zie je dan precies hoeveel bezoekers en aanvragen die uiting opleverde.",
        "Werkt ook goed: een QR-code met een campagneparameter erin, een uniek telefoonnummer, of een kortingscode die alleen op dat drukwerk staat. Zonder een van die drie is je printcampagne een uitgave waarvan je het rendement achteraf alleen kunt vermoeden, en dan wordt het bij de eerste bezuiniging geschrapt, terecht of niet.",
      ],
    },
    vragen: [
      {
        q: "Is print marketing nog rendabel?",
        a: "In specifieke situaties zeker: een lokale doelgroep, een oudere doelgroep, of een branche waar een fysieke brochure onderdeel is van het verkoopproces. Beoordeel het net als elk ander kanaal op kosten per aanvraag, niet op gevoel of gewoonte. Dat vraagt wel dat je de respons meetbaar maakt met een eigen code.",
      },
      {
        q: "Hoe combineer ik print met online?",
        a: "Laat het drukwerk de aandacht trekken en online het gesprek afronden. Verwijs vanaf print naar een specifieke landingspagina die het aanbod herhaalt. Andersom kun je mensen die je site bezochten later benaderen via een gerichte mailing, mits je de gegevens rechtmatig hebt.",
      },
      {
        q: "Wat kost een printcampagne?",
        a: "Sterk wisselend: van een paar honderd euro voor een lokale advertentie tot enkele duizenden voor ontwerp, druk en verspreiding van een folder. De kosten liggen vrijwel volledig vooraf vast, wat het minder flexibel maakt dan online, waar je halverwege nog kunt bijsturen.",
      },
    ],
    dienst: {
      label: "Online marketingstrategie",
      to: "/online-marketing-strategie/",
      note: "We kijken per kanaal wat een aanvraag kost, zodat print en online op dezelfde meetlat liggen.",
    },
    gerelateerd: ["direct-marketing", "citymarketing", "advertorial"],
    publicatie: "2026-11-20",
  },

  citymarketing: {
    slug: "citymarketing",
    term: "Citymarketing",
    synoniemen: ["stadsmarketing", "stadspromotie", "regiomarketing", "gebiedsmarketing"],
    h1: "Citymarketing: een stad of regio in de markt zetten",
    title: "Citymarketing | Een stad of regio in de markt zetten",
    description:
      "Citymarketing promoot een stad of regio bij bewoners, bezoekers en bedrijven. Wat het inhoudt en hoe lokale ondernemers ervan profiteren.",
    definitie:
      "Citymarketing is het geheel aan activiteiten waarmee een stad, gemeente of regio zichzelf aantrekkelijk maakt voor specifieke doelgroepen: bewoners, bezoekers, bedrijven en studenten. Het is marketing waarbij het product een plaats is.",
    waarom: [
      "Voor een gemeente is het een concurrentievraagstuk. Steden concurreren om inwoners die er willen wonen, bedrijven die zich willen vestigen en bezoekers die er hun geld uitgeven. De instrumenten zijn dezelfde als in gewone marketing: onderzoek naar de doelgroep, een scherpe positionering, een merkverhaal en gerichte promotie.",
      "Voor een lokale ondernemer is het relevant om een andere reden. Citymarketing trekt bezoekers naar je regio; jouw local SEO bepaalt of ze bij jou uitkomen. Wie zoekt op iets doen in Venlo of overnachten in Limburg, komt eerst op de campagne van de regio en daarna op de aanbieders. Sta je daar niet tussen, dan profiteer je niet van promotie waar je via je gemeentelijke lasten aan meebetaalt.",
    ],
    voorbeeld: {
      h: "Waar je als ondernemer op kunt aanhaken",
      p: [
        "Vrijwel elke regio heeft een promotieplatform, een VVV-site of een ondernemersvereniging met een online bedrijvenoverzicht. Een complete, actuele vermelding daarop levert twee dingen op: bezoekers die via dat platform binnenkomen, en een link naar je site die je autoriteit in Google versterkt.",
        "Daarnaast kun je meeliften op de zoekopdrachten die de regiopromotie genereert. Wordt er campagne gevoerd rond een evenement of een thema, maak dan een pagina die aansluit op wat bezoekers daarover zoeken. Dat is dezelfde logica als local SEO, alleen dan met de gemeente als partij die de vraag opwekt.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met local SEO?",
        a: "Citymarketing promoot de plaats als geheel en wordt gevoerd door een gemeente of regionale organisatie. Local SEO zorgt dat jouw bedrijf gevonden wordt binnen die plaats. Het eerste vergroot de vraag, het tweede bepaalt of jij daarvan profiteert. Beide werken het best als je op dezelfde zoekopdrachten aanwezig bent.",
      },
      {
        q: "Kan een ondernemer meedoen aan citymarketing?",
        a: "Vaak wel, via de ondernemersvereniging, het regionale promotieplatform of gezamenlijke campagnes rond evenementen. Het levert zelden direct aanvragen op, maar wel vermeldingen, links en zichtbaarheid bij bezoekers die anders nooit van je bedrijf hadden gehoord. Vraag bij je ondernemersvereniging na welke campagnes er lopen en waar je op kunt aanhaken.",
      },
    ],
    dienst: {
      label: "Local SEO voor je werkgebied",
      to: "/online-marketing/local-seo/",
      note: "Zichtbaar in het lokale zoekresultaat en op de kaart, zodat regionale vraag ook bij jou uitkomt.",
    },
    gerelateerd: ["print-marketing", "yahoo-discovery", "merkpositionering"],
    publicatie: "2026-11-20",
  },

  "wat-is-marketing-automation": {
    slug: "wat-is-marketing-automation",
    term: "Marketing automation",
    synoniemen: ["marketingautomatisering", "marketing automation software", "automations", "lead nurturing"],
    h1: "Wat is marketing automation?",
    title: "Wat is marketing automation? Uitleg en software",
    description:
      "Marketing automation automatiseert terugkerende marketingtaken en campagnes. Wat het oplevert, wanneer het te vroeg is en welke software er speelt.",
    definitie:
      "Marketing automation is technologie waarmee terugkerende marketingtaken en campagnes automatisch worden uitgevoerd over meerdere kanalen. Het doel is contact onderhouden met potentiële klanten zonder dat iemand elke mail handmatig verstuurt.",
    waarom: [
      "De aanleiding is bijna altijd hetzelfde probleem: er komen aanvragen binnen die nog niet klaar zijn om te kopen, en die verdwijnen vervolgens in een map waar niemand meer naar kijkt. Automation vangt precies die groep op. Iemand die een brochure downloadt, krijgt daarna automatisch de drie mails die hem verder helpen, en pas als hij daarop reageert, gaat er bij verkoop een belletje af.",
      "De belangrijkste waarschuwing hoort er meteen bij: automation lost geen gebrek aan verkeer op. Heb je twintig aanvragen per maand, dan is een softwarepakket van honderden euro's per maand overdreven en pak je die twintig sneller persoonlijk op. Het rendeert pas als het volume te groot wordt om met de hand bij te houden.",
    ],
    voorbeeld: {
      h: "Hoe een eenvoudige flow eruitziet",
      p: [
        "Iemand vult op je site een formulier in om een prijslijst te ontvangen. Dag nul: de prijslijst wordt automatisch gemaild. Dag drie: een mail met de drie vragen die klanten in dit stadium meestal stellen. Dag zeven: een korte case van een vergelijkbare klant. Dag veertien: een uitnodiging voor een vrijblijvend gesprek.",
        "Klikt iemand onderweg op de link naar je prijzenpagina, dan krijgt hij een label in het systeem en ziet je verkoper dat er interesse is. Reageert hij nergens op, dan stopt de reeks vanzelf zonder dat iemand er tijd aan kwijt is. Dat is het hele idee: aandacht besteden waar die iets oplevert.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met e-mailmarketing?",
        a: "E-mailmarketing verstuurt berichten aan een lijst op een moment dat jij kiest. Automation reageert op gedrag: een download, een klik, een verjaardag of een aankoop een jaar geleden. In de praktijk zit e-mailmarketing altijd in automation, maar niet andersom. Begin dus met e-mail en breid pas uit als het volume daarom vraagt.",
      },
      {
        q: "Welke software wordt het meest gebruikt?",
        a: "HubSpot is in Nederland de bekendste en biedt marketing, verkoop en CRM in één omgeving. Daarnaast zijn er lichtere en goedkopere pakketten die vooral op e-mail en eenvoudige flows zijn gericht. Voor de meeste MKB-bedrijven volstaat die tweede categorie ruimschoots.",
      },
      {
        q: "Wanneer is marketing automation te vroeg?",
        a: "Als je nog geen stabiele stroom aanvragen hebt, of als je verkoopproces niet is uitgeschreven. Automatiseren van een proces dat nog niet werkt, levert alleen sneller hetzelfde matige resultaat op. Zorg eerst voor verkeer en een helder proces, automatiseer daarna.",
      },
    ],
    dienst: {
      label: "E-mailmarketing uitbesteden",
      to: "/online-marketing/emailmarketing/",
      note: "We beginnen met de flows die het meest opleveren en breiden pas uit als het volume dat rechtvaardigt.",
    },
    gerelateerd: ["e-mailmarketing", "opt-in", "see-think-do-care"],
    publicatie: "2026-11-27",
  },

  "cms-content-management-systeem": {
    slug: "cms-content-management-systeem",
    term: "CMS (contentmanagementsysteem)",
    synoniemen: ["content management systeem", "cms", "websitebeheer systeem"],
    h1: "CMS: het systeem waarmee je je eigen website beheert",
    title: "CMS | Wat een contentmanagementsysteem is",
    description:
      "Een CMS laat je de inhoud van je website aanpassen zonder programmeerkennis. Wat het is, welke er zijn en waar je op let bij het kiezen.",
    definitie:
      "Een CMS, of contentmanagementsysteem, is software waarmee je de inhoud van je website beheert zonder programmeerkennis. Je past teksten, afbeeldingen en pagina's aan via een beheeromgeving in plaats van in de code.",
    waarom: [
      "Voor een ondernemer is dit het verschil tussen zelfstandig zijn en afhankelijk. Zonder CMS moet je voor elke tekstwijziging bij je webbouwer aankloppen, met de bijbehorende wachttijd en factuur. Met een CMS pas je een prijs of een openingstijd zelf aan in twee minuten. Dat klinkt klein, maar het bepaalt in de praktijk of je site actueel blijft.",
      "Voor vindbaarheid is de keuze eveneens relevant. Een CMS bepaalt hoe makkelijk je titels, omschrijvingen en URL's kunt instellen, hoe snel je pagina's laden en of je structured data kunt toevoegen. Een systeem dat die dingen niet of moeizaam ondersteunt, kost je maandelijks tijd of posities, en dat merk je pas als je er al in zit.",
    ],
    voorbeeld: {
      h: "Waar je op let bij het kiezen",
      p: [
        "Vier vragen halen de meeste twijfel weg. Kun je zelf titels, omschrijvingen en URL's aanpassen zonder plug-in of ontwikkelaar? Kun je het systeem verlaten en je content meenemen, of zit je vast aan één leverancier? Wie doet de updates en de beveiliging? En hoe snel zijn de pagina's die het systeem oplevert op een telefoon?",
        "In de praktijk komt de keuze meestal neer op WordPress voor gewone websites, een e-commerceplatform als je een webshop hebt, of een gehost systeem als je liever niets zelf onderhoudt. Alle drie werken; wat niet werkt is een systeem kiezen op de mooiste demo zonder deze vier vragen te stellen.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen open source en gehost?",
        a: "Open source, zoals WordPress, installeer je op je eigen hosting: je hebt volledige vrijheid maar bent zelf verantwoordelijk voor updates en beveiliging. Bij een gehost systeem regelt de aanbieder dat, tegen een maandbedrag en met minder vrijheid om af te wijken.",
      },
      {
        q: "Is een CMS gratis?",
        a: "De software vaak wel, de rest niet. Bij open source betaal je voor hosting, een thema, plug-ins en onderhoud. Bij gehoste systemen betaal je een maandbedrag waarin dat is inbegrepen. Reken altijd met de totale kosten per jaar, niet met de licentieprijs.",
      },
      {
        q: "Kan ik later overstappen naar een ander CMS?",
        a: "Het kan, maar het is werk. Content is meestal te exporteren, de vormgeving zelden. Het grootste risico zit in de URL's: veranderen die, dan moet je alles doorverwijzen met 301-redirects. Zonder dat verlies je de posities die je hebt opgebouwd.",
      },
    ],
    dienst: {
      label: "Website advies en laten bouwen",
      to: "/online-marketing/website-advies/",
      note: "We kiezen het systeem op basis van wat je zelf wilt kunnen aanpassen, niet op basis van wat wij makkelijk vinden.",
    },
    gerelateerd: ["wordpress", "joomla", "webmaster"],
    publicatie: "2026-11-27",
  },

  wordpress: {
    slug: "wordpress",
    term: "WordPress",
    synoniemen: ["wordpress cms", "wp", "wordpress website"],
    h1: "WordPress: het meest gebruikte CMS ter wereld",
    title: "WordPress | Voordelen, nadelen en onderhoud",
    description:
      "WordPress draait een groot deel van het web. Waarom het zo populair is, waar de valkuilen zitten en wat het onderhoud van je vraagt.",
    definitie:
      "WordPress is een gratis, open source contentmanagementsysteem waarmee je websites, blogs en webshops beheert zonder programmeerkennis. Het is het meest gebruikte CMS ter wereld en draait op een aanzienlijk deel van alle websites.",
    waarom: [
      "De populariteit heeft een praktische reden: er is voor vrijwel elk probleem al een oplossing gemaakt. Duizenden thema's en plug-ins, en een enorm aanbod aan ontwikkelaars die ermee werken. Voor een ondernemer betekent dat vooral vrijheid: je zit niet vast aan één leverancier, en je kunt altijd iemand anders vinden die je site kan overnemen.",
      "Diezelfde openheid is het risico. Elke plug-in die je installeert, is code van iemand anders op jouw server. Wordt die niet bijgehouden, dan ontstaat er een beveiligingslek. Een WordPress-site die twee jaar niet is bijgewerkt, is geen stabiele site maar een tikkende klok. Onderhoud is bij WordPress geen luxe maar een voorwaarde.",
    ],
    voorbeeld: {
      h: "Wat een gezonde WordPress-site kenmerkt",
      p: [
        "Een beperkt aantal plug-ins, en van elk kun je uitleggen waarom hij er is. Plug-ins die je niet gebruikt zijn verwijderd, niet alleen gedeactiveerd. Updates worden eerst op een testomgeving gedraaid en pas daarna live, met een back-up als terugvaloptie.",
        "Daarnaast: een SEO-plug-in die je titels, omschrijvingen en sitemap regelt, geoptimaliseerde afbeeldingen, en caching zodat de pagina's snel laden. Dat laatste is bij WordPress het vaakste knelpunt: het systeem zelf is niet traag, maar een stapeling van zware thema's en plug-ins maakt het dat wel.",
      ],
    },
    vragen: [
      {
        q: "Is WordPress geschikt voor een webshop?",
        a: "Met WooCommerce zeker, en voor de meeste kleine tot middelgrote webshops werkt dat prima. Bij zeer grote assortimenten of complexe voorraadkoppelingen loop je tegen grenzen aan en is een specifiek e-commerceplatform meestal een betere basis. De grens ligt praktisch rond enkele duizenden producten of complexe voorraadkoppelingen.",
      },
      {
        q: "Is WordPress goed voor SEO?",
        a: "De basis is uitstekend: schone URL's, eenvoudige controle over titels en omschrijvingen en een automatische sitemap via een SEO-plug-in. WordPress rankt niet vanzelf beter dan andere systemen, maar het legt je ook nergens beperkingen op. Dat is precies wat je wilt.",
      },
      {
        q: "Wat kost het onderhoud?",
        a: "Voor een gemiddelde MKB-site ligt dat in de markt op enkele tientallen tot enkele honderden euro's per maand, afhankelijk van hoeveel maatwerk erin zit. Vraag altijd expliciet of het herstellen van een storing binnen dat bedrag valt of apart wordt gefactureerd.",
      },
    ],
    dienst: {
      label: "WordPress onderhoud",
      to: "/online-marketing/wordpress-onderhoud/",
      note: "Updates eerst op staging, back-up vooraf, en monitoring zodat je het merkt voordat je klanten het merken.",
    },
    gerelateerd: ["cms-content-management-systeem", "staging", "webmaster"],
    publicatie: "2026-11-27",
  },

  joomla: {
    slug: "joomla",
    term: "Joomla",
    synoniemen: ["joomla cms", "joomla website"],
    h1: "Joomla: het CMS tussen WordPress en maatwerk in",
    title: "Joomla | Wat het is en voor wie het geschikt is",
    description:
      "Joomla is een open source CMS met sterk gebruikersbeheer. Waar het goed in is, waar het tekortschiet en wanneer je beter iets anders kiest.",
    definitie:
      "Joomla is een gratis, open source contentmanagementsysteem waarmee je websites en online toepassingen bouwt. Het zit qua complexiteit tussen WordPress en een maatwerkoplossing in en is sterk in gebruikersbeheer.",
    waarom: [
      "Joomla was jarenlang een van de grootste systemen ter wereld en draait daardoor nog onder veel bestaande sites, vooral bij verenigingen, onderwijsinstellingen en organisaties met leden. Waar het van oudsher goed in is, is precies dat: verschillende gebruikersrollen met verschillende rechten, zonder dat je daar extra software voor nodig hebt.",
      "Tegelijk is het aandeel al jaren dalend, en dat heeft praktische gevolgen. Er zijn minder ontwikkelaars die ermee werken, minder uitbreidingen die actief worden onderhouden en minder documentatie waar je zelf iets aan hebt. Voor een ondernemer betekent dat een kleinere vijver als je hulp zoekt, en een groter risico als je huidige partij ermee stopt.",
    ],
    voorbeeld: {
      h: "Blijven of overstappen",
      p: [
        "Draait je Joomla-site goed, wordt hij bijgehouden en is je vindbaarheid in orde, dan is er geen enkele reden om over te stappen. Migreren kost geld en brengt risico met zich mee, en een ander CMS rankt niet vanzelf beter.",
        "Overstappen wordt wel serieus als je het onderhoud niet meer geregeld krijgt, als je op een oude versie zit die geen beveiligingsupdates meer ontvangt, of als je bouwer ermee stopt. Doe je dat, plan dan de 301-redirects van elke oude URL naar de nieuwe vóór de livegang. Dat is het onderdeel waar migraties standaard misgaan.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met WordPress?",
        a: "WordPress is eenvoudiger in dagelijks gebruik en heeft een veel groter aanbod aan thema's, plug-ins en ontwikkelaars. Joomla is van huis uit sterker in gebruikersrollen en meertaligheid, maar vraagt meer technische kennis van degene die het beheert. Voor de meeste MKB-sites valt dat verschil uit in het voordeel van WordPress.",
      },
      {
        q: "Is Joomla goed voor SEO?",
        a: "Technisch kan het prima: je kunt titels, omschrijvingen en URL's instellen en er zijn uitbreidingen voor sitemaps en structured data. In de praktijk is er meer handwerk nodig dan in WordPress, waar SEO-plug-ins veel standaard afvangen. Reken dus op meer inrichtingstijd aan het begin van een traject.",
      },
      {
        q: "Kan ik van Joomla naar WordPress overstappen?",
        a: "Ja, en daar bestaan migratiehulpmiddelen voor. Content en afbeeldingen komen meestal goed over, vormgeving zelden. Het belangrijkste werk zit niet in de migratie zelf maar in het behouden van je URL-structuur of het doorverwijzen daarvan. Verandert er een URL zonder redirect, dan verlies je de positie die eraan hing.",
      },
    ],
    dienst: {
      label: "Website advies en laten bouwen",
      to: "/online-marketing/website-advies/",
      note: "Bij een migratie plannen we de redirects vóór de livegang, zodat je posities meeverhuizen.",
    },
    gerelateerd: ["cms-content-management-systeem", "wordpress", "magento"],
    publicatie: "2026-12-04",
  },

  magento: {
    slug: "magento",
    term: "Magento",
    synoniemen: ["adobe commerce", "magento webshop", "magento open source"],
    h1: "Magento: e-commerceplatform voor grotere webshops",
    title: "Magento | E-commerceplatform voor grote webshops",
    description:
      "Magento, nu Adobe Commerce, is gemaakt voor omvangrijke webshops. Wat het aankan, wat het kost en wanneer het te zwaar is voor je situatie.",
    definitie:
      "Magento is een e-commerceplatform van Adobe voor het bouwen en beheren van webshops. Er zijn twee smaken: Magento Open Source, gratis en zelf te installeren, en Adobe Commerce, de betaalde versie met meer functionaliteit en ondersteuning.",
    waarom: [
      "Magento is gebouwd voor complexiteit. Grote assortimenten, meerdere winkels en talen onder één beheeromgeving, verschillende prijzen per klantgroep en koppelingen met voorraad- en boekhoudsystemen. Kom je die eisen tegen, dan is dit een van de weinige platforms dat het zonder kunstgrepen aankan.",
      "Precies daarom is het voor de meeste MKB-webshops te zwaar. Het vraagt een ontwikkelaar voor vrijwel elke aanpassing, stevige hosting om snel te blijven, en structureel onderhoud. Een webshop met tweehonderd producten is met een lichter platform sneller live, goedkoper in beheer en in de praktijk sneller in laadtijd.",
    ],
    voorbeeld: {
      h: "Wanneer Magento de juiste keuze is",
      p: [
        "Vuistregel: als je met de hand kunt bijhouden wat er in je assortiment gebeurt, heb je Magento niet nodig. Wordt het interessant als je duizenden artikelen hebt met varianten, je in meerdere landen levert met verschillende btw-regimes en prijzen, of als je zakelijke klanten hebt met eigen afspraken.",
        "Reken bij de afweging niet alleen de bouwkosten maar ook de doorlopende kosten mee: hosting, onderhoud, updates en de ontwikkelaar die je nodig hebt voor wijzigingen. Voor SEO is Magento op zichzelf prima, mits de laadtijd op orde blijft. Dat laatste is bij zware Magento-installaties het meest voorkomende knelpunt.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil tussen Magento Open Source en Adobe Commerce?",
        a: "Open Source is gratis en installeer je op eigen hosting, met beperkte functionaliteit en zonder ondersteuning. Adobe Commerce is de betaalde cloudversie met uitgebreidere functies, waaronder fijnmazige rechten per gebruiker, en met ondersteuning vanuit Adobe. Voor de meeste Nederlandse webshops is Open Source ruimschoots voldoende.",
      },
      {
        q: "Is Magento geschikt voor een kleine webshop?",
        a: "Zelden. De bouw- en beheerkosten wegen niet op tegen wat je ervoor terugkrijgt bij een beperkt assortiment. Een lichter platform is dan sneller live, makkelijker zelf te beheren en in de praktijk sneller, wat direct in je conversie terugkomt. Kies pas voor Magento als je aan de eisen ervan toekomt.",
      },
      {
        q: "Hoe zit het met SEO in Magento?",
        a: "De basis is aanwezig: instelbare URL's, titels, omschrijvingen en canonicals. Twee aandachtspunten: filtercombinaties die eindeloos veel dubbele URL's opleveren, en laadtijd. Beide zijn oplosbaar, maar ze vragen aandacht van iemand die het platform kent. Reken daar bij de begroting van je SEO-traject op, want het is geen standaardwerk.",
      },
    ],
    dienst: {
      label: "SEO uitbesteden aan een vaste specialist",
      to: "/online-marketing/seo-uitbesteden/",
      note: "Bij webshops beginnen we bij filter-URL's, canonicals en laadtijd. Daar zit vrijwel altijd de eerste winst.",
    },
    gerelateerd: ["prestashop", "cms-content-management-systeem", "conversie"],
    publicatie: "2026-12-04",
  },

  prestashop: {
    slug: "prestashop",
    term: "PrestaShop",
    synoniemen: ["presta shop", "prestashop webshop"],
    h1: "PrestaShop: webshopsoftware voor het middensegment",
    title: "PrestaShop | Webshopsoftware voor het middensegment",
    description:
      "PrestaShop is open source webshopsoftware die je zelf host. Wat het kan, wat het van je vraagt en hoe het zich verhoudt tot de alternatieven.",
    definitie:
      "PrestaShop is gratis, open source software waarmee je een webshop bouwt en beheert. Je installeert hem op je eigen hosting en breidt hem uit met modules voor betalen, verzenden en marketing.",
    waarom: [
      "PrestaShop zit qua zwaarte tussen een eenvoudige webshopmodule en een enterprise-platform in. Je krijgt een volwaardige webshop met productbeheer, orders, klanten en statistieken, zonder de complexiteit en kosten van de grote platforms. Voor een middelgrote webshop met een paar honderd tot een paar duizend producten is dat vaak een prettige verhouding.",
      "Wat het van je vraagt, is technische betrokkenheid. Je regelt zelf de hosting, de installatie, de updates en de beveiliging. Modules komen van verschillende makers en worden niet allemaal even goed onderhouden. Heb je die kennis niet in huis en wil je die ook niet inkopen, dan is een gehost platform waarschijnlijk een rustiger keuze.",
    ],
    voorbeeld: {
      h: "Waar je op let voordat je kiest",
      p: [
        "Test het zelf voordat je beslist. PrestaShop biedt een demo-omgeving waarin je het beheer kunt doorlopen: producten aanmaken, een bestelling afhandelen, de statistieken bekijken. Voelt dat logisch, dan is het waarschijnlijk een goede match; loop je nu al vast, dan wordt dat na de bouw niet beter.",
        "Kijk daarnaast naar de modules die je nodig hebt en of ze actief worden bijgehouden. Een webshop die draait op vijf modules waarvan er drie al twee jaar geen update hebben gehad, is een beveiligingsprobleem in wording. En reken de kosten van die modules mee: de software is gratis, de uitbreidingen zelden.",
      ],
    },
    vragen: [
      {
        q: "Wat is het verschil met WooCommerce?",
        a: "WooCommerce is een uitbreiding op WordPress en past goed als je site vooral inhoud is met een webshop erbij. PrestaShop is van de grond af als webshop gebouwd en is daardoor sterker in ordebeheer en productstructuur, maar minder geschikt als contentplatform.",
      },
      {
        q: "Moet ik zelf hosting regelen?",
        a: "Ja, dat is inherent aan zelf hosten. Kies een partij met ervaring in PrestaShop en voldoende snelheid, want laadtijd raakt bij een webshop direct je conversie. Heb je hier geen zin in, dan is een gehost platform een realistischer keuze.",
      },
      {
        q: "Is PrestaShop goed voor SEO?",
        a: "De basis is in orde: instelbare URL's, titels, omschrijvingen en een sitemap. Let net als bij andere webshopsoftware op filter- en sorteer-URL's die eindeloos veel varianten van dezelfde pagina opleveren. Met canonicals en crawlregels is dat goed te beheersen. Laat die instellingen wel controleren voordat je de webshop live zet.",
      },
    ],
    dienst: {
      label: "Website advies en laten bouwen",
      to: "/online-marketing/website-advies/",
      note: "We kiezen het platform op je assortiment en je eigen technische ruimte, niet op wat er in de mode is.",
    },
    gerelateerd: ["magento", "cms-content-management-systeem", "wordpress"],
    publicatie: "2026-12-04",
  },
};
