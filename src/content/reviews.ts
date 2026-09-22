import parketreusLogo from "@/assets/logos/parketreus-logo.avif.asset.json";
import greenEnergyLogo from "@/assets/logos/Greenenergywoodpellets-logo.avif.asset.json";
import steelGardenLogo from "@/assets/logos/steelgarden-logo.avif.asset.json";
import vanToorLogo from "@/assets/logos/vantoor-interiors.avif.asset.json";
import vogelvoerLogo from "@/assets/logos/vogelvoerkopenlogo_1.avif.asset.json";
import bruidsmodeLogo from "@/assets/logos/bruidsmode-outlet.jpg.asset.json";
import tienEuroTaxiLogo from "@/assets/logos/10-euro-taxi.png.asset.json";
import vanOfferbeekLogo from "@/assets/logos/van-offerbeek-logo.avif.asset.json";

export type Review = {
  logo?: string;
  logoAlt?: string;
  name: string;
  role?: string;
  url?: string;
  title: string;
  quote?: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Patrick Trump",
    url: "https://www.drumcafe.nl/",
    logo: "/assets/logos/drumcafe-logo.svg",
    logoAlt: "Logo Drum Cafe",
    title: "Prettige samenwerking",
    quote: "Prettige samenwerking, korte lijntjes en erg betrokken bij mijn bedrijf.",
  },
  {
    name: "Monique Schoens",
    url: "https://parketreus.nl/",
    logo: parketreusLogo.url,
    logoAlt: "Logo Parketreus",
    role: "Eigenaresse",
    title: "Verschillende nummer 1 posities behaald!",
    quote: "Voor onze website waren we op zoek naar een betrouwbare partner om meer bezoekers te genereren en een betere vindbaarheid. Dit is gelukt. Dankzij onze samenwerking met B-Analysed is ons bedrijf gegroeid en scoren we middels seo op meerdere zoekwoorden nummer 1 positie. Dank je wel Britt hiervoor 🙂",
  },
  {
    name: "Mike Daemen",
    title: "Geweldige samenwerking!",
    quote: "Superfijn samengewerkt met Britt. Korte lijnen en snelle reacties. Ik kan niets anders dan B. Analyzed online marketing aanbevelen!",
  },
  {
    name: "Janneke",
    role: "Eigenaresse",
    title: "Betere score in zoekmachines en optimalisatie van de website",
    quote: "B. Analyzed heeft in 2025 de online promotie en Google-ranking van mijn bedrijf verzorgd, met indrukwekkende resultaten. Mijn website scoort inmiddels aanzienlijk beter in de zoekmachines, zowel nationaal als internationaal. Daarnaast is mijn website technisch en inhoudelijk geoptimaliseerd en heeft Britt mooie artikelen over mijn bedrijf geschreven. Britt is gedreven, professioneel en denkt proactief mee. Ze communiceert helder en werkt doelgericht. Ik ben zeer tevreden over de samenwerking.",
  },
  {
    name: "Gaby ter Horst",
    role: "Eigenaresse",
    title: "Fijn samenwerken",
    quote: "Binnen korte tijd gezocht voor aanzienlijke verbetering in de zoekresultaten.",
  },
  {
    name: "Dean Henry",
    role: "CEO",
    title: "Involved and result oriented!",
  },
  {
    name: "Hanneke Weerts",
    url: "https://www.greenenergywoodpellets.com/",
    logo: greenEnergyLogo.url,
    logoAlt: "Logo Green Energy Woodpellets",
    title: "Fijne communicatie en onze vindbaarheid is verbeterd!",
    quote: "Britt is erg kundig, ze geeft goed advies en is erg behulpzaam. De vindbaarheid van Green Energy Woodpellets via Google is gestegen met de juiste keywords. Ze helpt waar ze kan en legt alles goed en duidelijk uit. Hierdoor kunnen we ook zelf veel meer doen om de vindbaarheid van onze webshop te blijven verbeteren. Britt blijft het gehele proces alles goed in de gaten houden en ook de communicatie is erg fijn. Goed bereikbaar en korte lijntjes. Aanrader!",
  },
  {
    name: "Jelle Tax",
    title: "Uitstekende resultaten!",
    quote: "Goed geholpen door Britt met de SEO van mijn websites, resultaten zijn uitstekend!",
  },
  {
    name: "Jasper Meerman",
    title: "Extreem gemotiveerd en boekt resultaat",
    quote: "Extreem gemotiveerde marketer die gaat voor resultaat en dat ook boekt. No nonsens en recht door zee. Ik raad een ieder die op zoek is naar een goede online marketing consultant en uitvoerder aan om met Brit samen te werken!",
  },
  {
    name: "Miriam Direks",
    url: "https://euro-hubner.nl/",
    logo: "/assets/logos/euro-hubner-logo.svg",
    logoAlt: "Logo Euro Hübner",
    role: "CEO",
    title: "Teamwork makes the dream work!",
    quote: "I was very lucky to start a great assignment together with Britt: creating a new, modern and fresh look for our website www.euro-hubner.nl, so that it would meet all our requirements and expectations. Project management (Website Launch) We started from scratch with the construction, readability, findability and writing of engaging, catchy texts and it was in the meantime very important not to lose sight of the usability. Britt did a fantastic job in this, both in communicating with the website builders and in providing ideas about implementations that I did not know existed. With a sharp eye, she also monitored the technical side of the website (loading speed, structure, visibility etc.) SEO After setting up the frame of our website, Britt was an indispensable factor in the SEO implementation. By creating short, clear URLs and guiding us on how to fill the text blocks with the right key-words, our site scores very well in the ranking. Google ADS After the website launch, Britt also fine-tuned our Google ADS campaigns. We are already noticing a strong increase in the number of requests we receive. And that is exactly what we want! Collaboration Aside from her expertise, professionalism and specialism, I got to know Britt as super enthusiastic, honest, critical where necessary, helpful and very, very pleasant person to work with! So, can I recommend Britt? Without hesitation: Yes,….. 100%",
  },
  {
    name: "Joep",
    url: "https://www.ldhmoda.nl/",
    logo: "/assets/logos/ldhmoda-logo.png",
    logoAlt: "Logo LDH Moda",
    role: "Eigenaar LDH Moda",
    title: "Top SEO specialist",
  },
  {
    name: "Sjoerd Remery",
    title: "Positief, Kwaliteit en Professionaliteit",
    quote: "Goede resultaten en positieve aanpak. Echt een aanrader.",
  },
  {
    name: "Rene Brouwer",
    title: "Britt is betrokken en heeft veel kennis",
    quote: "Ik heb Britt ervaren als een betrokken seo adviseur, met kennis over de vele aspecten van het vakgebied. Ze stelt een haalbaar stappenplan en reageert meestal snel op vragen. We waren op weg goede resultaten te boeken, tot we – als reisorganisatie – hard werden geraakt door de corona crisis en gedwongen waren om ook haar activiteiten even op een laag pitje te zetten. Tijdelijk, hopelijk. Enige puntje voor verbetering: ik had soms behoefte aan iets meer structuur en overzicht. Maar zoals gezegd: wij komen terug.",
  },
  {
    name: "Andre Wiggers",
    title: "Mooi resultaat!",
    quote: "Hele prettige samenwerking en een heel mooi resultaat. 🙂",
  },
  {
    name: "Klant",
    title: "Super!",
    quote: "Positief, Responsiviteit, Kwaliteit, Professionaliteit en Waarde",
  },
  {
    name: "Ron Thielen",
    title: "Sterke groei door de inspanningen van Britt",
    quote: "Mede door de online inspanningen van Britt maken we een sterke groei door. Het is prettig samenwerken en Britt weet waar ze het over heeft. Een aanrader!",
  },
  {
    name: "Jeffrey Vervuren",
    title: "Mooie resultaten behaald!",
  },
  {
    name: "Sophie Verbers",
    title: "Fijne samenwerking",
  },
  {
    name: "Wesley Kissen",
    url: "https://www.steelgarden.nl/",
    logo: steelGardenLogo.url,
    logoAlt: "Logo Steel Garden",
    role: "Eigenaar Steel Garden",
    title: "Top bedrijf",
    quote: "Een half jaar geleden begonnen met de samenwerking. Met een mega groot resultaat in ons bedrijf. Meer aanvragen. Verbeteringen in onze website. Britt is een echte SEO-specialist!",
  },
  {
    name: "Tatijana",
    url: "https://jananails.nl/",
    logo: "/assets/logos/jananails-logo.svg",
    logoAlt: "Logo Jana Nails",
    role: "Eigenaresse Jana Nails",
    title: "Ten eerste wil ik de kwaliteit van de dienstverlening benadrukken. B-analyzed heeft bewezen over diepgaande kennis en expertise te beschikken op het gebied van online marketing.",
    quote: "Ik wil graag mijn ervaring delen over de professionele diensten van b-analyzed op het gebied van online marketing en vindbaarheid. Na een prettige samenwerking met het team van b-analyzed, kan ik met volle overtuiging zeggen dat zij een uitstekende partner zijn om uw online aanwezigheid te optimaliseren. Ten eerste wil ik de kwaliteit van de dienstverlening benadrukken. B-analyzed heeft bewezen over diepgaande kennis en expertise te beschikken op het gebied van online marketing. Hun team van professionals heeft de vaardigheden om uw online strategie te analyseren en te verbeteren, met als resultaat een verhoogde vindbaarheid en zichtbaarheid voor uw bedrijf. De aangeleverde tekstreview was van uitstekende kwaliteit, goed gestructureerd en in overeenstemming met mijn wensen. Wat de samenwerking met b-analyzed extra aangenaam maakte, was de open communicatie en de betrokkenheid van het team. Ze waren altijd bereid om mijn vragen te beantwoorden en mijn input serieus te nemen. Ze namen de tijd om mijn doelen en behoeften te begrijpen, en werkten nauw met mij samen om een effectieve strategie te ontwikkelen die past bij mijn bedrijf. De transparantie en heldere communicatie maakten de hele ervaring zeer positief. Bovendien was ik onder de indruk van de resultaten die b-analyzed heeft weten te behalen. Dankzij hun expertise en inzet heb ik een significante verbetering gezien in de vindbaarheid van mijn bedrijf op verschillende online platforms. Dit heeft geleid tot een stijging van het aantal bezoekers op mijn website en uiteindelijk tot een grotere klantenkring. Ik ben meer dan tevreden met de behaalde resultaten. Al met al kan ik b-analyzed ten zeerste aanbevelen aan iedereen die zijn online marketing en vindbaarheid wil verbeteren. Hun professionele aanpak, uitstekende service en prettige samenwerking hebben mij overtuigd van hun toegevoegde waarde. Aarzel niet om contact op te nemen met b-analyzed als u op zoek bent naar een betrouwbare partner om uw online aanwezigheid te versterken. Warme groet, Tatijana van Jana Nails, nagelgroothandel",
  },
  {
    name: "Kevin Jaspers",
    role: "Eigenaar",
    title: "Britt is betrouwbaar en heel goed in haar werk",
    quote: "Ondertussen een samenwerking van 1,5 jaar. Britt heeft mij enorm geholpen een duw de goede richting in. Ik wilde heel graag wat met de marketing en advertizing vanuit mijn bedrijf. Echter ben ik altijd erg wantrouwend geweest, dit omdat er veel oplichters bij zijn. Britt heeft vanaf begin af aan alles super en duidelijk verwoord. De tijd genomen om mijn vragen te beantwoorden, dingen uit te zoeken en zaken op papier te zetten die ik moest aanpassen in bijvoorbeeld mijn website. Ze heeft hierin echt het tegendeel bewezen betreft mijn wantrouwen in deze branch en laten zien dat ze heel betrouwbaar is, en gewoon heel goed in haar werk is. Britt denkt out of the box en kan mij ook enorm motiveren door te pakken. In de 1,5 jaar tijd beschik ik over meer kennis over mijn bedrijf (de achterliggende cijfers) en heb ik er toch een hoop mooie opdrachten aan over mogen houden door alle binnen gekomen ‘leads’. Kortom erg tevreden en hopende dat deze samenwerking nog langer voort mag duren. Wij scoren momenteel op nummer 1 in Google met het beveiliging Venlo en al goed met camerabewaking bedrijf.",
  },
  {
    name: "Roy van Offerbeek",
    url: "https://www.worldofart.nl/",
    logo: vanOfferbeekLogo.url,
    logoAlt: "Logo Van Offerbeek",
    role: "Eigenaar Van Offerbeek en World Of Art",
    title: "Wij scoren al jarenlang in de top 3 met het zoekwoord \"houten wereldkaart\" dankzij Britt van B. Analyzed",
    quote: "De kans is heel groot dat u mij zal vinden via google als u een “houten wereldkaart” wanddecoratie zoekt. Met dank aan Britt Daemen van B-Analyzed.",
  },
  {
    name: "Lorenzo",
    url: "https://zwembad-online.nl/",
    logo: "/assets/logos/zwembad-online-logo.png",
    logoAlt: "Logo Zwembad-online.nl",
    role: "Eigenaar Zwembad-online.nl",
    title: "Mooi om te zien hoe snel we stijgen in Google met relevante keywords",
  },
  {
    name: "Thijs Timmermans",
    role: "CEO",
    title: "Top SEO specialist",
    quote: "Britt van B. Analyzed marketing is een top SEO specialist en heeft er in 3 maanden tijd voor gezorgd dat wij met een aantal belangrijke keywords in de top 3 van Google ranken. IPTV kopen en IPTV abonnement stonden binnen no time in de top 3 van Google. Deze rankings hebben direct voor veel meer relevante bezoekers en klanten gezorgd. De communicatie gaat via Whatsapp, de lijntjes zijn kort en ze responstijd is super snel. Wij hopen nog lang samen te werken met B. Analyzed marketing.",
  },
  {
    name: "Mohsinne",
    url: "https://www.10eurotaxi.nl/",
    logo: tienEuroTaxiLogo.url,
    logoAlt: "Logo 10 Euro Taxi",
    role: "Eigenaar 10 Euro Taxi",
    title: "Aanzienlijk meer bezoekers op onze website",
    quote: "Door de SEO inspanningen van B. Analyzed zijn we in een korte tijd flink gestegen in de zoekresultaten met taxi Den Bosch en luchthaven taxi en hebben daardoor aanzienlijk meer bezoekers op onze site. Wij zijn tevreden met Britt van B. Analyzed marketing.",
  },
  {
    name: "Relaxation Spas",
    role: "Eigenaar Relaxation Spas",
    title: "Professionele diensten geleverd",
    quote: "Uitstekende service en professionele diensten geleverd, wij zijn zeer content met B analyzed en werken graag in toekomst verder. Helemaal top!",
  },
  {
    name: "Linda S",
    url: "https://hondnet.nl/",
    role: "Eigenaar Hondnet.nl",
    title: "Britt heeft veel kennis van SEO",
    quote: "Wij hebben Britt van B. Analyzed ingehuurd om te helpen onze zichtbaarheid online te vergroten, en we zijn erg blij met de resultaten. In een korte tijd heeft ze ons geholpen om aanzienlijk te stijgen in de resultaten van zoekmachines, wat heeft geresulteerd in meer bezoekers naar onze site. Britt heeft veel kennis van SEO en is in staat geweest om effectief strategieën te implementeren die ons betere resultaten hebben opgeleverd dan we ooit zelf hadden kunnen bereiken. Ze is ook altijd beschikbaar om vragen te beantwoorden en ons te helpen problemen op te lossen die we mogelijk hebben. We zouden Britt ten zeerste aanbevelen aan iedereen die zijn online aanwezigheid wil verbeteren.",
  },
  {
    name: "Andy",
    url: "https://www.janiceofficial.com/",
    logo: "/assets/logos/janice-logo.webp",
    logoAlt: "Logo Janice",
    role: "Medeeigenaar Janice.nl",
    title: "Onze bezoekersaantallen zijn vermedigvuldigd",
    quote: "In december 2019 kwamen we Britt egen in Thailand. Haar digital nomad instelling was voor ons doorslaggevend om met Britt in zee te gaan. Heerlijk hoe je over de hele wereld kunt werken en dat het niet uitmaakt waar je bent. Het enige wat je nodig hebt is je laptop, wifi en een goede instelling. En die heeft Britt. Zij heeft de SEO van onze site zo enorm goed aangepakt dat we in de afgelopen maanden enorm zijn gestegen in Google, maar ook met ons bereik. Onze bezoekersaantallen zijn enorm vermedigdvuldidg. Een duidelijk plan met doorzettingsvermogen van Britt heeft een enorme meerwaarde geleverd aan onze website. Daarnaast heeft haar levensinstelling ons geinspireerd en zullen wij ok als Digital nomads ons bedrijf gaan runnen. Ik zeg, Bedankt Britt!",
  },
  {
    name: "Ab van Sleep Factory",
    role: "Eigenaar Sleep Factory BV",
    title: "Een echte aanpakker die je van A tot Z ontzorgt",
    quote: "B. Analyzed is de partner op het gebied van SEO en SEA. Het is een echte aanpakker die je in veel werkzaamheden ontzorgt. Of het nu om een log gaat of installatie van conversie optimalisatie apps. Heel erg fijn werken met Britt. Ik werk nu al een aantal maanden samen met Britt van B. Analzyed marketing en de resultaten zijn enorm positief.",
  },
  {
    name: "Rinie Jongenelen",
    url: "https://bruidsmodeoutlet.be/",
    logo: bruidsmodeLogo.url,
    logoAlt: "Logo De Bruidsmode Outlet",
    role: "Eigenaar De Bruidsmode Outlet",
    title: "Zeer tevreden met de samenwerking",
    quote: "Britt van B. Analyzed marketing heeft ervoor gezorgd dat we binnen 8 maanden 300% meer leads hebben binnengehaald door middel van Google Ads en SEO. Britt is een harde werker die altijd voor resultaat gaat. B. Analyzed is een echte aanbeveling!",
  },
  {
    name: "Ron Tielen",
    url: "https://vogelvoerkopen.nl/",
    logo: vogelvoerLogo.url,
    logoAlt: "Logo Vogelvoerkopen.nl",
    role: "Eigenaar Vogelvoerkopen.nl",
    title: "Kwaliteit, professionaliteit en responsiteit",
    quote: "Mede door de online inspanningen van Britt maken we een sterke groei door. Het is prettig samenwerken en Britt weet waar ze het over heeft. Een aanrader!",
  },
  {
    name: "Topsuits Lommel",
    url: "https://topsuits.be/",
    logo: "/assets/logos/topsuits-logo.png",
    logoAlt: "Logo Topsuits",
    role: "Eigenaar",
    title: "Wij bevelen B. Analyzed zeker aan!",
    quote: "Britt van B. Analyzed heeft ons bedrijf goed geholpen met haar advies en SEO en SEA werkzaamheden. Het aantal aanvragen is in 8 maanden ruim verdubbeld. Een echte aanrader!",
  },
  {
    name: "Raymond van Hardware Tips",
    url: "https://hardwaretips.nl/",
    role: "Eigenaar",
    title: "Zeer prettige samenwerking met mooie resultaten!",
    quote: "Zeer prettige samenwerking met mooie resultaten in enkele maanden. Britt reageert snel en uitgebreid erg positief",
  },
  {
    name: "Hazique G.M.",
    url: "https://swissescape.ch/",
    role: "Co-founder Swiss Escape",
    title: "Efficient and very responsive!",
    quote: "I really enjoyed working with Britt for Facebook Ads and SEO optimization. She was efficient and very responsive to all my questions. She went out of her away to work to give suggestions of other ways to improve our marketing, and she did it with passion.",
  },
  {
    name: "Anis Al Furcate",
    role: "Taxi chauffeur",
    title: "Zeer tevreden!",
    quote: "Zeer tevreden over het gewerkte werk van Britt!! Voorheen altijd klant geweest bij een marketingbureau die gedurende een lange periode niet ons doel heeft kunnen bereiken. Uiteraard wel altijd de facturen ontvangen. Via ons netwerk in contact gekomen met Britt. Middels enkele contactmomenten met Britt hebben we de mogelijkheden bekeken en een doelstelling geformuleerd. In mum van tijd is onze doelstelling bereikt! Britt heeft haar belofte kunnen waarmaken met betrekking tot het te realiseren doelstelling. Wat ons betreft een echte aanrader! Ook wij blijven uiteraard met Britt samenwerken!",
  },
  {
    name: "Veronique Deeke",
    url: "https://www.hastbo.com/",
    logo: "/assets/logos/hastbo-logo.jpg",
    logoAlt: "Logo HASTBO",
    role: "Mede-eigenaar HASTBO",
    title: "Wij kijken uit naar de toekomstige samenwerking en zullen hier zeker maandelijks gebruik van maken",
    quote: "Voor onze webshop waren wij opzoek naar een programmeur om een module te ontwikkelen om onze producten aan de klant direct online te kunnen aanbieden. Britt Daemen van B. analyzed geeft feedback en een duidelijke strategisch plan. Zij heeft verschillende bedrijven voor ons benaderd. Het resultaat wij hebben een derde partij gevonden, welke de module aan het ontwikkelen is tegen een aantrekkelijke prijs. Zodra de module gereed is en op onze site is geïntegreerd, zullen wij B. Analyzed weer inschakelen om onze website te optimaliseren. Het is heel prettig dat B. Anaylzed je op elke vlak van het internetmarketing kan ondersteunen. Waardoor wij maar een partij hoeven in te schakelen voor de benodigde diensten. Wij kijken uit naar de toekomstige samenwerking en zullen hier zeker maandelijks gebruik van maken.",
  },
  {
    name: "Matthew Metcalf",
    role: "Eigenaar Mojo Divers Koh Tao",
    title: "the results speak for themselves!",
    quote: "Britt got my website from page 6 to page 1 in 7 months. Lots of advice given and the results speak for themselves",
  },
  {
    name: "Bertie Lukassen",
    role: "Muzikant / Artiest / Eigenaar artiestenbureau",
    title: "Het resultaat is geweldig!",
    quote: "Via deze weg wil ik je heel erg bedanken voor deze prettige en duidelijke samenwerking. Ook het resultaat is geweldig, boven verwachtingen. Alles is overzichtelijk, helder, duidelijk, goede communicatie en vooral het persoonlijk contact is erg fijn. Hopelijk mogen wij nog lang een beroep op je doen.",
  },
  {
    name: "Sylvia Sijbers",
    role: "Psycholoog",
    title: "Onze website heeft inmiddels meer unieke bezoekers dan ooit tevoren!",
    quote: "Voor de vernieuwing en optimalisatie van onze website hebben wij de hulp ingeschakeld van Britt Daemen. Zij heeft ervoor gezorgd dat onze Website een nieuwe frisse look heeft, en volledig Google proof is. Onze website heeft inmiddels meer unieke bezoekers dan ooit tevoren en is optimaal vindbaar op het internet. Er is een prettige, structurele samenwerking tot stand gekomen met deze expert op het gebied van optimalisatie, de lijnen zijn kort en de prijs-serviceverhouding is prima. We kunnen altijd terugvallen op haar expertise en uitgebreide kennis, kortom wij zijn meer dan tevreden met het resultaat!",
  },
  {
    name: "Chantal J.",
    role: "Fashionista Your Fashion Avenue",
    title: "Ze denkt echt mee met jouw bedrijf en we hebben veel aan haar advies en feedback gehad!",
    quote: "Om de naamsbekendheid van Your Fashion Avenue te vergroten en meer traffic te generen hebben wij online marketing specialist Britt Daemen ingeschakeld. Ik ben erg tevreden over haar persoonlijke en professionele aanpak. Door het grondig vooronderzoek weet ze een goede strategie en advies neer te leggen. Ze denkt echt mee met jouw bedrijf en we hebben veel aan haar advies en feedback gehad. De website is inmiddels helemaal geoptimaliseerd en google proof. Tevens zijn de unieke bezoekers gestegen, dus wij zijn helemaal tevreden. Bedankt namens YFA!",
  },
  {
    name: "Ferry van Poel",
    url: "https://vantoorinteriors.nl/",
    logo: vanToorLogo.url,
    logoAlt: "Logo Van Toor Interiors",
    role: "CEO Van Toor Interiors",
    title: "Wij zijn onder de indruk van haar aantoonbare resultaten!",
    quote: "Wij waren op zoek naar een freelance SEO-specialist, maar bovenal naar partner voor al onze website-activiteiten. Dat is voor ons Britt van B. Analyzed geworden. Waren we voorheen elders maandelijks veel geld kwijt voor nauwelijks merkbare resultaten, merken we nu vanaf dag één dat Britt voor ons aan het werk is en zijn we onder de indruk van haar aantoonbare resultaten. Wij zijn dan ook meer dan tevreden over de activiteiten van B. Analyzed en recommanderen haar van harte!",
  },
  {
    name: "Sjan en Micha Horowitz",
    url: "https://www.trythai.nl/",
    role: "Eigenaar van Try Thai",
    title: "We zijn landelijk beter bereikbaar en dat merken we aan alles!",
    quote: "Wij hebben nooit geweten dat internetmarketing zoveel impact heeft op onze aanvragen. We zijn landelijk beter bereikbaar en dat merken we aan alles. Wij zijn erg tevreden met B. Analyzed en zullen zeker nog gebruik maken van haar marketingdiensten!",
  },
  {
    name: "Janneke Boeiakaloa",
    url: "https://willkamayuspirit.com/",
    logo: "/assets/logos/willkamayu-logo.png",
    logoAlt: "Logo Willkamayu Spirit",
    role: "Owner Willkamayu Spirit",
    title: "A lot of gratefulness for our friend Britt!",
    quote: "A lot of gratefulness for our friend Britt! She really helped us a lot with our project in Peru! We just started and doing online everything by ourselves(all is new for us), and Britt gave us a big energy online boost! Amazing!!! Really appreciate that she is still open and gives effort to help us, while she is on her travel/ work journey again!! Thank you Britt, we hope to see you again here in Peru! Love",
  },
  {
    name: "Ralph Renierkens",
    title: "De volgende keer zullen we zeker weer gebruiken maken van de diensten van B Analyzed!",
    quote: "Dankzij de goede ondersteuning van B Analyzed hebben we een top website in elkaar kunnen steken. Makkelijk te vinden via zoekmachines en ziet er erg goed uit. Volgende keer zullen we zeker weer gebruiken maken van de diensten van B Analyzed.",
  },
  {
    name: "Nikkie van Dillen",
    role: "Ondernemer bij Zagtvlees",
    title: "Prettig contact en snel handelen",
    quote: "B Analyzed heeft een uitgebreide sitecheck voor de webshop van Steak Away / Zagt Vlees gedaan. Met de tips van Britt kunnen wij weer vooruit en als alle input is doorgevoerd zullen wij in de toekomst zeker contact opnemen om aan de slag te gaan met Google Adwords campagnes. Pluspunten:",
  },
  {
    name: "Ahrefs alternatieven in 2026: welke SEO-tool past het beste bij jouw bedrijf?",
    role: "26 June 2026",
    title: "Blogs",
  },
];
