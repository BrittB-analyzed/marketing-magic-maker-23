// Inhoud van het prototype: per pagina EN + NL. Beelden komen van de huidige Wix-site.
const ID = {
  nina: '2b8723_ded3e73ec23d483c84f10e5a1c30da5a', ninaPalms: '2b8723_00ff2e823e1344899224eca55c8f0deb',
  brideWindow: '2b8723_0942c1a00b1f4c289d8e29f853aec848', sea: '2b8723_0eb2b60987ba4ace9a6cc6c0250982ba',
  coupleRocks: '2b8723_1d6084247d7b4cefa090399ea82a5f87', pendulum: '2b8723_27dca625207c47dbabda9627f83ec2ec',
  villaWoman: '2b8723_390d457e77474818a30a828babdb25be', bridePerfume: '2b8723_4c434b32ea9f415dbd8cb742d6765a77',
  dinner: '2b8723_4ddc8640fffe4c5cb19350a94b4dcb9b', cliff: '2b8723_54b91e19262e4b998c1ba633d4c84bf8',
  brideBW: '2b8723_5582b0db1d5243e2b6bf38f42b1039e2', kids: '2b8723_6592b94055f04515aacc774ae2eecd09',
  balcony: '2b8723_89094b27a68044b8813f36dcbf547e14', kiss: '2b8723_942a41055a4848d4b5a63182cf2d069c',
  aerialBeach: '2b8723_96bf4a47b0a944d8a8edb3d8fca7df20', sunset: '2b8723_a6f6d3e9427d4765b526599582e56aea',
  coupleBW: '2b8723_abc407a1f5924cb5b28420b2e132566d', prayer: '2b8723_bcb7ee9dc25c4d0ea5ed7f0712157570',
  hat: '2b8723_add39ab1de824f719e1b1a551e4074f8', child: '2b8723_c514c4f249564d88a5a95a3c7b1896b2',
  skincare: '2b8723_d6dba45e358a491d8d5f6f63d77bc470', proposalBW: '2b8723_da293a364add446eb37348572628ce49',
  villaAerial: '2b8723_df973dd2ff19497a95f6fa461493e9d5', proposal: '2b8723_f00a2496391f42c7822829334762bfb7',
  pool: '2b8723_f3fefec48e974933ac5bb8a16f429117', fashion: '2b8723_f9addc0eba5d4238a3fbb3e8cb63c2fe',
  trees: '2b8723_ff8c2389bfb949a3a6ec582fb9b68c87',
};
const src = (k, w = 1600) => `https://static.wixstatic.com/media/${ID[k]}~mv2.jpg/v1/fit/w_${w},h_${w},q_80,enc_auto/${k}.jpg`;
const img = (k, alt, cls = '', w = 1200) => `<img src="${src(k, w)}" alt="${alt}" loading="lazy"${cls ? ` class="${cls}"` : ''}>`;
const poster = (id, f, w = 1000) => `https://static.wixstatic.com/media/2b8723_${id}f00${f}.jpg/v1/fill/w_${w},h_${Math.round(w * 9 / 16)},al_c,q_80,enc_auto/poster.jpg`;

const V = {
  esmeeFilm: ['dcb62f260e5a4cb6a6e189cfc11a7e3e', 1], esmeeHi: ['8c8322e69b8b48fdabf697a75b62d9af', 2],
  kimberley: ['0ddfd7f720954b95a8b3044d252a1487', 3], bruno: ['19e14163611243f9ab33d0a199c294a5', 2],
  canFurnet: ['366351b41cd34a0eaef10a6797248cc0', 2], portinatx: ['fffe961999df4839b7825e6efb07c19c', 1],
  genesis: ['0906c6c01b24444fa8afa184ab0d6154', 1], indonesia: ['13fb3355d06b4390bc4706fa3b8af501', 1],
};
const video = (k, kicker, title, alt) => `<div class="video"><img src="${poster(...V[k])}" alt="${alt}" loading="lazy"><i></i><span><small>${kicker}</small>${title}</span></div>`;

const hero = (k, alt, eyebrow, h1, text, ctas, crumbs = '', short = false) => `<section class="hero${short ? ' short' : ''}" style="padding:0">
  <img src="${src(k, 2200)}" alt="${alt}" fetchpriority="high">
  <div class="wrap">${crumbs}<span class="eyebrow">${eyebrow}</span><h1>${h1}</h1><p>${text}</p><div class="btns">${ctas}</div></div>
</section>`;
const crumb = (homePath, label) => `<nav class="crumbs" aria-label="breadcrumb"><a href="${homePath}">Home</a> / ${label}</nav>`;
const WA = 'https://wa.me/31648587673';

const quotes = lang => `<div class="quotes">
  <blockquote>“We had tears in our eyes and are extremely grateful to Nina. We were allowed to relive the day one more time.”<footer>Esmee &amp; Ido</footer></blockquote>
  <blockquote>“Thank you so much for this beautiful wedding film. You made a piece of art, a memory forever.”<footer>Sharona &amp; Ricardo</footer></blockquote>
  <blockquote>“She captured every emotion – the stillness, the surprise, the joy. Dreamy, timeless, and full of heart.”<footer>Robert &amp; Irina · ${lang === 'en' ? 'proposal' : 'aanzoek'}</footer></blockquote>
</div>
<p class="note" style="margin-top:36px"><span class="ph">${lang === 'en' ? '[Add Google review widget + number of reviews once the Google Business Profile is live]' : '[Google-reviews + aantal toevoegen zodra het Google Bedrijfsprofiel live is; oorspronkelijke Nederlandse reviews opvragen]'}</span></p>`;

const contactSection = (lang, dark = true) => {
  const en = lang === 'en';
  return `<section id="contact" class="${dark ? 'dark' : 'sand'}"><div class="wrap contact">
  <div>
    <span class="eyebrow">${en ? 'Check your date' : 'Check je datum'}</span>
    <h2>${en ? 'Let’s tell your story' : 'Laten we jullie verhaal vertellen'}</h2>
    <p class="lead">${en ? 'Tell me about your day, your plans or your project. I reply within 24 hours, in English or Dutch, and we’ll plan a personal (video) call to get to know each other.' : 'Vertel over jullie dag, plannen of project. Ik reageer binnen 24 uur en we plannen een persoonlijk (video)gesprek om kennis te maken. Gewoon in het Nederlands.'}</p>
    <ul class="contact-lines">
      <li>WhatsApp: <a href="${WA}">+31 6 4858 7673</a></li>
      <li>E-mail: <a href="mailto:info@ninapurafilms.com">info@ninapurafilms.com</a></li>
      <li>Instagram: <a href="https://www.instagram.com/ninapurafilms">@ninapurafilms</a></li>
    </ul>
  </div>
  <form name="contact-${lang}" method="POST" data-netlify="true" action="#">
    <input type="hidden" name="form-name" value="contact-${lang}">
    <div><label for="n-${lang}">${en ? 'Name' : 'Naam'}</label><input id="n-${lang}" name="name" autocomplete="name" required></div>
    <div><label for="e-${lang}">E-mail</label><input id="e-${lang}" name="email" type="email" autocomplete="email" required></div>
    <div><label for="t-${lang}">${en ? 'What can I capture?' : 'Waarvoor?'}</label><select id="t-${lang}" name="type">
      ${(en ? ['Wedding – photo + film', 'Wedding – photo', 'Wedding – film', 'Proposal / couple shoot', 'Family / portrait shoot', 'Villa / real estate', 'Brand / event', 'Something else'] : ['Bruiloft – foto + film', 'Bruiloft – foto', 'Bruiloft – trouwfilm', 'Aanzoek / loveshoot', 'Familie- / portretshoot', 'Villa / vastgoed', 'Merk / event', 'Iets anders']).map(o => `<option>${o}</option>`).join('')}
    </select></div>
    <div><label for="d-${lang}">${en ? 'Date (if known)' : 'Datum (indien bekend)'}</label><input id="d-${lang}" name="date" type="date"></div>
    <div class="full"><label for="m-${lang}">${en ? 'Your story' : 'Jullie verhaal'}</label><textarea id="m-${lang}" name="message" placeholder="${en ? 'Location, number of guests, what matters most to you…' : 'Locatie, aantal gasten, wat jullie het belangrijkst vinden…'}"></textarea></div>
    <div class="full"><button class="btn" type="submit">${en ? 'Send & check availability' : 'Verstuur & check beschikbaarheid'}</button></div>
  </form>
</div></section>`;
};

const ctas = (lang, contactPath) => `<a class="btn" href="${contactPath}">${lang === 'en' ? 'Check your date' : 'Check je datum'}</a><a class="btn ghost" href="${WA}">WhatsApp Nina</a>`;

const faqSchema = list => ({ '@type': 'FAQPage', mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) });
const faqHtml = list => `<div class="faq">${list.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;

/* ---------------- EN ---------------- */
const P = {
  en: { home: '/', weddings: '/ibiza-wedding-photographer-videographer/', photoshoots: '/ibiza-photoshoot/', villas: '/villa-real-estate-brand-content-ibiza/', guide: '/getting-married-in-ibiza/', about: '/about/', contact: '/contact/' },
  nl: { home: '/nl/', weddings: '/nl/trouwfotograaf-trouwfilm-ibiza/', photoshoots: '/nl/fotoshoot-ibiza/', villas: '/nl/villa-en-merkcontent-ibiza/', guide: '/nl/trouwen-op-ibiza/', about: '/nl/over-nina/', contact: '/nl/contact/' },
};

const weddingFaqEn = [
  ['Do you offer both photography and film?', 'Yes. I can capture your wedding in photos, on film, or both. Booking photo and film with one person means one calm presence on your day instead of two crews, and one consistent style across your photos and your film.'],
  ['Where in Ibiza do you work?', 'All over the island: fincas in the countryside, cliffside venues on the west coast with views of Es Vedrà, beach clubs, private villas and the old town of Dalt Vila. I also travel to Formentera and worldwide.'],
  ['Do you use a drone?', 'Yes, when the location and regulations allow it. Parts of Ibiza – such as the airport zone and protected natural areas – have restrictions, so I check permissions per venue in advance.'],
  ['How far in advance should we book?', 'Peak season dates (May to October, especially Saturdays) often book 9–15 months ahead. Smaller elopements and proposals can sometimes be arranged within a few weeks.'],
  ['When do we receive our photos and film?', '<span class="ph">[delivery time: e.g. sneak peek within 48 hours, full gallery within X weeks, film within X weeks]</span>'],
];
const weddingFaqNl = [
  ['Doe je zowel fotografie als een trouwfilm?', 'Ja. Ik leg jullie bruiloft vast in foto’s, op film of allebei. Foto én film bij één persoon betekent één rustige aanwezigheid op jullie dag in plaats van twee crews, en één consistente stijl in je foto’s en je film.'],
  ['Waar op Ibiza werk je?', 'Op het hele eiland: fincas op het platteland, locaties op de kliffen aan de westkust met uitzicht op Es Vedrà, beachclubs, privévilla’s en de oude stad Dalt Vila. Ook Formentera en de rest van de wereld.'],
  ['Gebruik je een drone?', 'Ja, als de locatie en de regels het toelaten. Op delen van Ibiza – zoals rond het vliegveld en in beschermde natuurgebieden – gelden beperkingen. Ik check dat vooraf per locatie.'],
  ['Hoe ver van tevoren moeten we boeken?', 'Data in het hoogseizoen (mei t/m oktober, vooral zaterdagen) zijn vaak 9–15 maanden vooraf vergeven. Een kleine elopement of aanzoek kan soms binnen een paar weken.'],
  ['Spreek je Nederlands?', 'Ja, ik ben Nederlands. Het voorgesprek, de planning en de dag zelf kunnen volledig in het Nederlands – handig als jullie familie meereist.'],
  ['Wanneer ontvangen we de foto’s en de film?', '<span class="ph">[levertijd: bijv. sneak peek binnen 48 uur, volledige galerij binnen X weken, film binnen X weken]</span>'],
];

const guideFaqEn = [
  ['Can foreigners legally get married in Ibiza?', 'A civil wedding in Spain usually requires at least one partner to be a legal resident, which makes it complicated for most international couples. The common solution: make it legal at home and celebrate with a symbolic ceremony in Ibiza. A Catholic church wedding is possible but requires extra paperwork through your home parish.'],
  ['What is the best month to get married in Ibiza?', 'May, June and September are the sweet spot: warm, golden light and fewer crowds. July and August are the hottest and busiest months with the highest venue rates. October is still warm and often quieter.'],
  ['How much does a wedding in Ibiza cost?', 'It depends mostly on the venue, guest count and date. Venue hire, catering and accommodation make up the largest share; photography and film are typically a smaller but lasting part of the budget. Get quotes early for peak-season Saturdays.'],
  ['What time is sunset in Ibiza in summer?', 'In June and July the sun sets after 21:00, which makes a late-afternoon ceremony followed by sunset portraits a popular choice.'],
];
const guideFaqNl = [
  ['Is trouwen op Ibiza rechtsgeldig?', 'Een burgerlijk huwelijk in Spanje vraagt meestal dat minstens één partner in Spanje woont. Daarom kiezen de meeste Nederlandse en Belgische stellen ervoor om in Nederland of België officieel te trouwen (vaak kort en eenvoudig op het gemeentehuis) en op Ibiza een symbolische ceremonie te houden. Kerkelijk trouwen kan, maar vraagt extra papierwerk via je eigen parochie.'],
  ['Wat is de beste maand om op Ibiza te trouwen?', 'Mei, juni en september: warm, prachtig licht en minder druk. Juli en augustus zijn het heetst en het drukst, met de hoogste prijzen. Oktober is vaak nog warm en rustiger.'],
  ['Wat kost trouwen op Ibiza?', 'Dat hangt vooral af van de locatie, het aantal gasten en de datum. Locatiehuur, catering en overnachtingen zijn de grootste posten; fotografie en film zijn een kleiner, maar blijvend deel van het budget. Vraag voor zaterdagen in het hoogseizoen vroeg offertes op.'],
  ['Kun je op Ibiza trouwen zonder gasten?', 'Ja. Een elopement – alleen jullie twee, eventueel met een celebrant – is op Ibiza heel goed te organiseren, bijvoorbeeld op een klif bij zonsondergang of op een rustig strand in het noorden.'],
  ['Hoe laat gaat de zon onder op Ibiza?', 'In juni en juli gaat de zon na 21:00 uur onder. Een ceremonie aan het eind van de middag met daarna een shoot bij zonsondergang is daarom populair.'],
];

const pkgs = (lang, contact) => {
  const en = lang === 'en';
  const list = en
    ? [['Photography', 'Wedding photography', ['Pre-wedding call & planning', 'From getting ready to first dance', 'Online gallery, edited in my style', 'Print rights'], false],
       ['Photo + film', 'The complete story', ['Photography and film by one maker', 'Highlight film (3–5 min) + full film', 'Drone footage where allowed', 'Social media teaser within one week'], true],
       ['Film', 'Wedding film', ['Pre-wedding call & music choice', 'Highlight film (3–5 min)', 'Full ceremony & speeches', 'Drone footage where allowed'], false]]
    : [['Fotografie', 'Trouwfotografie', ['Voorgesprek & planning', 'Van voorbereidingen tot openingsdans', 'Online galerij, bewerkt in mijn stijl', 'Afdrukrechten'], false],
       ['Foto + film', 'Het complete verhaal', ['Foto én film door één maker', 'Highlightfilm (3–5 min) + volledige film', 'Dronebeelden waar toegestaan', 'Teaser voor social media binnen een week'], true],
       ['Film', 'Trouwfilm', ['Voorgesprek & muziekkeuze', 'Highlightfilm (3–5 min)', 'Volledige ceremonie & speeches', 'Dronebeelden waar toegestaan'], false]];
  return `<div class="packages">${list.map(([h, sub, items, feat]) => `<div class="pkg${feat ? ' feat' : ''}"><span class="eyebrow">${feat ? (en ? 'Most chosen' : 'Meest gekozen') : sub}</span><h3>${h}</h3><div class="price">${en ? 'from' : 'vanaf'} <span class="ph">€ [..]</span></div><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul><a class="btn${feat ? '' : ' ghost'}" href="${contact}">${en ? 'Request the full brochure' : 'Vraag de brochure aan'}</a></div>`).join('')}</div>`;
};

export const pages = [];
const add = (lang, key, crumb, title, desc, og, body, opts = {}) => pages.push({ lang, key, crumb, title, desc, og: src(og, 1200), path: P[lang][key], body, ...opts });

for (const lang of ['en', 'nl']) {
  const en = lang === 'en', p = P[lang], c = ctas(lang, p.contact);
  const T = (a, b) => (en ? a : b);

  /* HOME */
  add(lang, 'home', 'Home',
    T('Ibiza Photographer & Videographer | Nina Pura Films', 'Fotograaf & videograaf op Ibiza | Nina Pura Films'),
    T('Wedding, proposal, family and villa photography & film on Ibiza by Nina Snip. Natural, emotional storytelling – photo and film by one maker. Check your date.',
      'Nederlandse fotograaf & videograaf op Ibiza. Trouwfotografie, trouwfilms, loveshoots en villa-content – foto én film door één maker. Check je datum.'),
    'proposal',
    `${hero('proposal', T('Couple embracing on the rocks of Ibiza at golden hour', 'Stel omarmt elkaar op de rotsen van Ibiza tijdens golden hour'),
      'Nina Pura Films · Ibiza',
      T('Ibiza photographer &amp; videographer', 'Fotograaf &amp; videograaf op Ibiza'),
      T('Weddings, proposals and the people you love – captured in photos and film in the purest, most natural way. Based in Ibiza, available worldwide.',
        'Bruiloften, aanzoeken en de mensen van wie je houdt – vastgelegd in foto en film, puur en natuurlijk. Nederlandse maker, gevestigd op Ibiza.'), c)}
<section><div class="wrap split">
  <div>
    <span class="eyebrow">${T('Everyone has a story to tell', 'Iedereen heeft een verhaal')}</span>
    <h2>${T('Photo and film by one maker', 'Foto én film door één maker')}</h2>
    <p class="lead">${T('Hi, I’m Nina Snip – a Dutch photographer and videographer living in Ibiza. I don’t outsource filming or editing: from our first call to your final film, you work with me.', 'Hoi, ik ben Nina Snip – Nederlandse fotograaf en videograaf, wonend op Ibiza. Ik besteed filmen en monteren niet uit: van het eerste gesprek tot jullie film werk je met mij.')}</p>
    <p>${T('That means one calm presence on your day, one consistent style across photos and film, and someone who knows the island’s light, venues and hidden spots.', 'Dat betekent één rustige aanwezigheid op jullie dag, één stijl in foto én film, en iemand die het licht, de locaties en de verborgen plekken van het eiland kent.')}</p>
    <a class="more" href="${p.about}">${T('More about Nina →', 'Meer over Nina →')}</a>
  </div>
  ${img('kiss', T('Bride and groom kissing in a green garden – Ibiza wedding photography', 'Bruid en bruidegom kussen in een groene tuin – trouwfotografie'))}
</div></section>
<section class="sand"><div class="wrap">
  <span class="eyebrow">${T('What I capture', 'Wat ik vastleg')}</span>
  <h2>${T('Weddings, photoshoots &amp; villas on Ibiza', 'Bruiloften, fotoshoots &amp; villa’s op Ibiza')}</h2>
  <div class="cards">
    <a class="card" href="${p.weddings}"><div class="im">${img('brideWindow', T('Bride in her dress looking out of a doorway', 'Bruid in trouwjurk kijkt door een deuropening'), '', 800)}</div><h3>${T('Weddings &amp; elopements', 'Bruiloften &amp; elopements')}</h3><p>${T('Wedding photography and wedding films, from intimate elopements to full celebrations.', 'Trouwfotografie en trouwfilms, van intieme elopement tot groot feest.')}</p><span class="more">${T('Wedding photography &amp; film →', 'Trouwfotograaf &amp; trouwfilm →')}</span></a>
    <a class="card" href="${p.photoshoots}"><div class="im">${img('coupleRocks', T('Couple photoshoot on the cliffs of Ibiza', 'Loveshoot op de kliffen van Ibiza'), '', 800)}</div><h3>${T('Photoshoots', 'Fotoshoots')}</h3><p>${T('Couple shoots, surprise proposals, family and portrait sessions during your stay.', 'Loveshoots, verrassingsaanzoeken, familie- en portretshoots tijdens je verblijf.')}</p><span class="more">${T('Ibiza photoshoot →', 'Fotoshoot op Ibiza →')}</span></a>
    <a class="card" href="${p.villas}"><div class="im">${img('villaAerial', T('Drone view of a luxury villa on Ibiza', 'Dronebeeld van een luxe villa op Ibiza'), '', 800)}</div><h3>${T('Villas &amp; brands', 'Villa’s &amp; merken')}</h3><p>${T('Real estate photography, rental videos, drone footage and brand content.', 'Vastgoedfotografie, verhuurvideo’s, dronebeelden en content voor merken.')}</p><span class="more">${T('Villa &amp; brand content →', 'Villa- &amp; merkcontent →')}</span></a>
  </div>
</div></section>
<section class="dark"><div class="wrap">
  <span class="eyebrow">${T('Films', 'Films')}</span>
  <h2>${T('Watch a story', 'Bekijk een verhaal')}</h2>
  <div class="videos">
    ${video('esmeeFilm', T('Wedding film · 5:46', 'Trouwfilm · 5:46'), 'Esmee &amp; Ido', T('Bride walking down the aisle – wedding film', 'Bruid loopt naar het altaar – trouwfilm'))}
    ${video('bruno', T('Highlight clip · 0:56', 'Highlightclip · 0:56'), 'Bruno &amp; Genevieve', T('Wedding venue with sea views – highlight clip', 'Trouwlocatie met zeezicht – highlightclip'))}
  </div>
  <p class="note" style="margin-top:20px"><span class="ph">${T('[Videos: host on Vimeo/YouTube and embed with a click-to-play facade]', '[Video’s: hosten op Vimeo/YouTube en inladen met klik-om-af-te-spelen]')}</span></p>
  ${quotes(lang)}
</div></section>
<section><div class="wrap">
  <span class="eyebrow">${T('How it works', 'Zo werkt het')}</span>
  <h2>${T('From first call to final film', 'Van eerste gesprek tot film')}</h2>
  <ol class="steps">
    <li><h3>${T('Check your date', 'Check je datum')}</h3><p>${T('Send a message or WhatsApp. You’ll hear from me within 24 hours.', 'Stuur een bericht of WhatsApp. Binnen 24 uur hoor je van me.')}</p></li>
    <li><h3>${T('Personal call', 'Persoonlijk gesprek')}</h3><p>${T('We talk about your story, wishes, locations and music.', 'We bespreken jullie verhaal, wensen, locaties en muziek.')}</p></li>
    <li><h3>${T('The day', 'De dag')}</h3><p>${T('I work calmly and mostly unseen, with an eye for light and emotion.', 'Ik werk rustig en grotendeels onzichtbaar, met oog voor licht en emotie.')}</p></li>
    <li><h3>${T('Your story', 'Jullie verhaal')}</h3><p>${T('You receive your photos and film, edited by me personally.', 'Je ontvangt foto’s en film, door mij persoonlijk bewerkt.')}</p></li>
  </ol>
</div></section>
<section class="sand"><div class="wrap split rev">
  <div>
    <span class="eyebrow">${T('Planning a wedding in Ibiza?', 'Trouwen op Ibiza?')}</span>
    <h2>${T('The Ibiza wedding guide', 'De gids voor trouwen op Ibiza')}</h2>
    <p class="lead">${T('Venues by area, the best months, what it costs and how to make it legal – everything I wish every couple knew before they started planning.', 'Locaties per regio, de beste maanden, de kosten en hoe je het rechtsgeldig maakt – alles wat ik elk stel had willen vertellen voordat ze begonnen met plannen.')}</p>
    <a class="btn ghost" style="color:var(--ink)" href="${p.guide}">${T('Read the guide', 'Lees de gids')}</a>
  </div>
  ${img('aerialBeach', T('Drone shot of a couple on a white sand beach', 'Dronebeeld van een stel op een wit strand'))}
</div></section>
${contactSection(lang)}`);

  /* WEDDINGS */
  const wf = en ? weddingFaqEn : weddingFaqNl;
  add(lang, 'weddings', T('Weddings', 'Bruiloften'),
    T('Ibiza Wedding Photographer &amp; Videographer | Nina Pura Films', 'Trouwfotograaf &amp; trouwfilm op Ibiza | Nina Pura Films'),
    T('Ibiza wedding photographer and videographer for villas, fincas, beaches and elopements. Photo and film by one maker, drone included. Check your date.',
      'Trouwen op Ibiza? Nederlandse trouwfotograaf én trouwvideograaf voor villa’s, fincas, stranden en elopements. Foto en trouwfilm door één maker. Check je datum.'),
    'trees',
    `${hero('trees', T('Bride and groom under the trees on their wedding day', 'Bruid en bruidegom onder de bomen op hun trouwdag'),
      T('Weddings &amp; elopements', 'Trouwen op Ibiza'),
      T('Ibiza wedding photographer &amp; videographer', 'Trouwfotograaf &amp; trouwfilm op Ibiza'),
      T('Natural, emotional wedding photography and films – from an intimate cliffside elopement to a three-day villa celebration.',
        'Natuurlijke, emotionele trouwfotografie en trouwfilms – van een intieme elopement op de kliffen tot een driedaags feest in een villa.'), c, crumb(p.home, T('Weddings', 'Bruiloften')), true)}
<section><div class="wrap split">
  <div class="intro">
    <span class="eyebrow">${T('Your day, your story', 'Jullie dag, jullie verhaal')}</span>
    <h2>${T('One maker for your photos and your film', 'Eén maker voor je foto’s én je trouwfilm')}</h2>
    <p class="lead">${T('Most couples book a photographer and a videographer separately. With me you get both – one calm presence, one style, one person who knows your story.', 'De meeste stellen boeken een trouwfotograaf en een trouwvideograaf apart. Bij mij krijg je allebei – één rustige aanwezigheid, één stijl, één persoon die jullie verhaal kent.')}</p>
    <ul class="checks">
      <li>${T('Personal call beforehand to get to know you and your plans', 'Persoonlijk voorgesprek om jullie en jullie plannen te leren kennen')}</li>
      <li>${T('Documentary approach: real moments, little posing', 'Documentaire stijl: echte momenten, weinig poseren')}</li>
      <li>${T('Drone footage for that extra Ibiza dimension (where allowed)', 'Dronebeelden voor die extra Ibiza-dimensie (waar toegestaan)')}</li>
      <li>${T('English and Dutch – great for international families', 'Nederlands en Engels – fijn voor internationale families')}</li>
      <li>${T('All editing done by me, never outsourced', 'Alle montage en bewerking door mij, nooit uitbesteed')}</li>
    </ul>
  </div>
  ${img('bridePerfume', T('Bride getting ready by the window, applying perfume', 'Bruid maakt zich klaar bij het raam'))}
</div></section>
<section class="sand"><div class="wrap">
  <span class="eyebrow">${T('Wedding films', 'Trouwfilms')}</span>
  <h2>${T('Ibiza wedding videographer', 'Trouwfilm laten maken op Ibiza')}</h2>
  <p class="lead">${T('A wedding film lets you hear the vows, the laughter and the speeches again. I edit every film myself, with music chosen together with you.', 'Met een trouwfilm hoor je de geloften, het gelach en de speeches opnieuw. Ik monteer elke film zelf, met muziek die we samen kiezen.')}</p>
  <div class="videos">
    ${video('esmeeHi', T('Wedding highlights · 0:59', 'Highlights · 0:59'), 'Esmee &amp; Ido', T('Bride and father before the ceremony', 'Bruid en vader vlak voor de ceremonie'))}
    ${video('kimberley', T('Wedding highlights · 1:13', 'Highlights · 1:13'), 'Kimberley &amp; Eddie', T('Wedding couple next to a classic car', 'Bruidspaar naast een klassieke auto'))}
  </div>
</div></section>
<section><div class="wrap">
  <span class="eyebrow">${T('Portfolio', 'Portfolio')}</span>
  <h2>${T('Wedding photography', 'Trouwfotografie')}</h2>
  <div class="gallery">
    ${img('kiss', T('Wedding kiss in the garden', 'Trouwkus in de tuin'), 'g1')}
    ${img('brideBW', T('Black and white portrait of a bride', 'Zwart-witportret van een bruid'), 'g2')}
    ${img('kids', T('Flower girl and page boy walking down the aisle', 'Bruidsmeisje en bruidsjonker lopen naar voren'), 'g3')}
    ${img('dinner', T('Wedding guests at a long dinner table outdoors', 'Gasten aan een lange diner­tafel buiten'), 'g4')}
    ${img('aerialBeach', T('Aerial photo of a couple on the beach', 'Luchtfoto van een bruidspaar op het strand'), 'g5')}
  </div>
</div></section>
<section class="sand"><div class="wrap">
  <span class="eyebrow">${T('Packages', 'Pakketten')}</span>
  <h2>${T('Wedding packages', 'Pakketten')}</h2>
  <p class="lead">${T('Every wedding is different, so every quote is personal. These packages give you an idea.', 'Elke bruiloft is anders, dus elke offerte is persoonlijk. Deze pakketten geven een indicatie.')}</p>
  ${pkgs(lang, p.contact)}
</div></section>
<section class="dark"><div class="wrap">
  <span class="eyebrow">${T('Kind words', 'Wat stellen zeggen')}</span><h2>${T('Couples about Nina', 'Stellen over Nina')}</h2>
  ${quotes(lang)}
</div></section>
<section><div class="wrap">
  <span class="eyebrow">FAQ</span><h2>${T('Questions about your Ibiza wedding', 'Vragen over trouwen op Ibiza')}</h2>
  ${faqHtml(wf)}
  <p style="margin-top:30px">${T('Still planning? Read the', 'Nog aan het plannen? Lees de')} <a href="${p.guide}">${T('guide to getting married in Ibiza', 'gids over trouwen op Ibiza')}</a>.</p>
</div></section>
${contactSection(lang)}`,
    { schema: [faqSchema(wf), { '@type': 'Service', name: T('Wedding photography and videography in Ibiza', 'Trouwfotografie en trouwfilm op Ibiza'), serviceType: T('Wedding photographer & videographer', 'Trouwfotograaf & trouwvideograaf'), provider: { '@id': 'https://www.ninapurafilms.com/#business' }, areaServed: 'Ibiza' }] });

  /* PHOTOSHOOTS */
  add(lang, 'photoshoots', T('Photoshoots', 'Fotoshoots'),
    T('Ibiza Photoshoot for Couples, Proposals &amp; Families', 'Fotoshoot op Ibiza: loveshoot, aanzoek &amp; familie'),
    T('Book an Ibiza photoshoot: couple shoots, secret proposals, family and portrait sessions at the island’s most beautiful spots. Photo and video available.',
      'Fotoshoot op Ibiza tijdens je vakantie: loveshoot, verrassingsaanzoek, familie- of portretshoot op de mooiste plekken van het eiland. Ook met video.'),
    'coupleRocks',
    `${hero('coupleRocks', T('Couple photoshoot on the cliffs of Ibiza at sunset', 'Loveshoot op de kliffen van Ibiza bij zonsondergang'),
      T('Couples · proposals · families', 'Loveshoot · aanzoek · familie'),
      T('Ibiza photoshoot', 'Fotoshoot op Ibiza'),
      T('Turn your holiday into memories you’ll keep forever – a relaxed shoot at golden hour, with someone who knows where the light is best.',
        'Maak van je vakantie herinneringen voor altijd – een ontspannen shoot tijdens golden hour, met iemand die weet waar het licht het mooist is.'), c, crumb(p.home, T('Photoshoots', 'Fotoshoots')), true)}
<section><div class="wrap">
  <div class="cards">
    <div class="card"><div class="im">${img('proposalBW', T('Surprise proposal on the rocks in Ibiza', 'Verrassingsaanzoek op de rotsen op Ibiza'), '', 800)}</div><h3>${T('Proposal photographer', 'Aanzoek vastleggen')}</h3><p>${T('I stay hidden while you pop the question, then guide you through relaxed portraits afterwards. Photo, video or both – and help choosing the perfect spot.', 'Ik blijf verborgen tijdens het aanzoek en begeleid jullie daarna bij ontspannen portretten. Foto, video of allebei – en hulp bij het kiezen van de perfecte plek.')}</p></div>
    <div class="card"><div class="im">${img('coupleBW', T('Black and white couple portrait', 'Zwart-wit portret van een stel'), '', 800)}</div><h3>${T('Couple shoot', 'Loveshoot')}</h3><p>${T('Honeymoon, anniversary or just because: a natural session at a hidden beach, a cliff or in the old town of Dalt Vila.', 'Huwelijksreis, jubileum of zomaar: een natuurlijke shoot op een verborgen strand, een klif of in de oude stad Dalt Vila.')}</p></div>
    <div class="card"><div class="im">${img('child', T('Child on holiday getting sunscreen', 'Kind op vakantie wordt ingesmeerd'), '', 800)}</div><h3>${T('Family &amp; portrait', 'Familie &amp; portret')}</h3><p>${T('Real moments with the people you love – the whole family on holiday, or a portrait session for yourself or your brand.', 'Echte momenten met de mensen van wie je houdt – het hele gezin op vakantie, of een portretshoot voor jezelf of je merk.')}</p></div>
  </div>
</div></section>
<section class="sand"><div class="wrap split rev">
  <div>
    <span class="eyebrow">${T('Good to know', 'Goed om te weten')}</span>
    <h2>${T('How an Ibiza photoshoot works', 'Zo werkt een fotoshoot op Ibiza')}</h2>
    <ul class="checks">
      <li>${T('Duration: <span class="ph">[e.g. 1–2 hours]</span>, usually at sunrise or golden hour', 'Duur: <span class="ph">[bijv. 1–2 uur]</span>, meestal bij zonsopkomst of golden hour')}</li>
      <li>${T('Location advice included – west coast for sunsets, the north for quiet coves', 'Advies over de locatie – de westkust voor zonsondergangen, het noorden voor rustige baaien')}</li>
      <li>${T('Online gallery with edited photos within <span class="ph">[X days]</span>', 'Online galerij met bewerkte foto’s binnen <span class="ph">[X dagen]</span>')}</li>
      <li>${T('Add a short video or reel – perfect for sharing', 'Voeg een korte video of reel toe – ideaal om te delen')}</li>
      <li>${T('Price from <span class="ph">€ [..]</span>', 'Vanaf <span class="ph">€ [..]</span>')}</li>
    </ul>
    <div class="btns"><a class="btn" href="${p.contact}">${T('Book your shoot', 'Boek je fotoshoot')}</a></div>
  </div>
  ${img('proposal', T('Couple laughing after a proposal in Ibiza', 'Stel lacht na het aanzoek op Ibiza'))}
</div></section>
<section class="dark"><div class="wrap">
  <span class="eyebrow">${T('A thousand times yes', 'Duizend keer ja')}</span><h2>${T('What couples say', 'Wat stellen zeggen')}</h2>
  ${quotes(lang)}
</div></section>
${contactSection(lang, false)}`);

  /* VILLAS */
  add(lang, 'villas', T('Villas &amp; brands', 'Villa’s &amp; merken'),
    T('Villa &amp; Real Estate Photography and Video Ibiza', 'Villa- en vastgoedfotografie &amp; video op Ibiza'),
    T('Photography, video and drone footage for Ibiza villas, holiday rentals, real estate agents and brands. Content that sells and rents. Request a quote.',
      'Fotografie, video en dronebeelden voor villa’s, vakantieverhuur, makelaars en merken op Ibiza. Content die verkoopt en verhuurt. Vraag een offerte aan.'),
    'villaAerial',
    `${hero('villaAerial', T('Drone photo of a hillside villa in Ibiza', 'Dronefoto van een villa op een heuvel op Ibiza'),
      T('Real estate · rentals · brands', 'Vastgoed · verhuur · merken'),
      T('Villa &amp; brand content in Ibiza', 'Villa- &amp; merkcontent op Ibiza'),
      T('Photos, video tours and drone footage that make people want to be there – for holiday rentals, real estate and lifestyle brands.',
        'Foto’s, videotours en dronebeelden waardoor mensen er willen zijn – voor vakantieverhuur, vastgoed en lifestylemerken.'), c, crumb(p.home, T('Villas &amp; brands', 'Villa’s &amp; merken')), true)}
<section><div class="wrap split">
  <div>
    <span class="eyebrow">${T('For owners, agents and brands', 'Voor eigenaren, makelaars en merken')}</span>
    <h2>${T('Content that rents and sells', 'Content die verhuurt en verkoopt')}</h2>
    <ul class="checks">
      <li>${T('Interior and exterior photography in natural light', 'Interieur- en exterieurfotografie in natuurlijk licht')}</li>
      <li>${T('Video tours for sale and rental listings, plus vertical reels', 'Videotours voor verkoop en verhuur, plus verticale reels')}</li>
      <li>${T('Drone photography and video of the property and its surroundings', 'Dronefoto’s en -video van het pand en de omgeving')}</li>
      <li>${T('Lifestyle shoots with models for brands, retreats and hospitality', 'Lifestyleshoots met modellen voor merken, retreats en horeca')}</li>
    </ul>
    <p>${T('Worked with: Le Exclusif Real Estate, Genesis Health and private villa owners.', 'Gewerkt voor o.a. Le Exclusif Real Estate, Genesis Health en particuliere villa-eigenaren.')} <span class="ph">${T('[confirm client names + logos]', '[klantnamen + logo’s bevestigen]')}</span></p>
  </div>
  ${img('pool', T('Two models at a villa pool in Ibiza – brand shoot', 'Twee modellen bij een villazwembad op Ibiza – merkshoot'))}
</div></section>
<section class="dark"><div class="wrap">
  <span class="eyebrow">${T('Recent work', 'Recent werk')}</span><h2>${T('Villa &amp; lifestyle films', 'Villa- &amp; lifestylefilms')}</h2>
  <div class="videos">
    ${video('canFurnet', T('Real estate · sale', 'Vastgoed · verkoop'), 'Can Furnet', T('Bright villa living room – property video', 'Lichte woonkamer van een villa – vastgoedvideo'))}
    ${video('portinatx', T('Holiday rental · 1:45', 'Vakantieverhuur · 1:45'), 'Portinatx', T('Drone shot of a villa terrace with shade sail', 'Dronebeeld van een villaterras met schaduwdoek'))}
    ${video('genesis', T('Brand trailer · 3:07', 'Merktrailer · 3:07'), 'Genesis Health – Thrive', T('Cliff at sunset – brand trailer', 'Klif bij zonsondergang – merktrailer'))}
    ${video('indonesia', T('Travel · 1:05', 'Reizen · 1:05'), 'Indonesia', T('Surfer on a wave – travel film', 'Surfer op een golf – reisfilm'))}
  </div>
</div></section>
<section><div class="wrap">
  <div class="gallery">
    ${img('cliff', T('Aerial view of Ibiza coastline and cliffs', 'Luchtfoto van de kust en kliffen van Ibiza'), 'g1')}
    ${img('villaWoman', T('Presenter at a modern villa', 'Presentatrice bij een moderne villa'), 'g2')}
    ${img('skincare', T('Skincare product shoot', 'Productshoot huidverzorging'), 'g3')}
    ${img('prayer', T('Portrait for a wellness brand', 'Portret voor een wellnessmerk'), 'g4')}
    ${img('fashion', T('Fashion shoot with two women', 'Modeshoot met twee vrouwen'), 'g5')}
  </div>
</div></section>
${contactSection(lang, false)}`,
    { schema: [{ '@type': 'Service', name: T('Villa, real estate and brand photography & video in Ibiza', 'Villa-, vastgoed- en merkfotografie & video op Ibiza'), provider: { '@id': 'https://www.ninapurafilms.com/#business' }, areaServed: 'Ibiza' }] });

  /* GUIDE */
  const gf = en ? guideFaqEn : guideFaqNl;
  const areas = en
    ? [['West coast (Sant Josep, Cala d’Hort)', 'Dramatic cliffs, views of Es Vedrà and the best sunsets on the island.', 'Sunset ceremonies, elopements'],
       ['North (Sant Joan, Portinatx)', 'Green, quiet and rural with hidden coves.', 'Intimate weddings, family-style fincas'],
       ['East (Santa Eulària)', 'Relaxed, rustic fincas and sandy beaches.', 'Long dinners, larger groups'],
       ['Ibiza Town &amp; Dalt Vila', 'Historic walls, narrow streets and the harbour.', 'Couple portraits, city vibe'],
       ['South (Ses Salines)', 'Beach clubs and white sand in a protected natural park.', 'Beach parties – check drone rules']]
    : [['Westkust (Sant Josep, Cala d’Hort)', 'Spectaculaire kliffen, uitzicht op Es Vedrà en de mooiste zonsondergangen.', 'Ceremonie bij zonsondergang, elopement'],
       ['Noorden (Sant Joan, Portinatx)', 'Groen, rustig en landelijk met verborgen baaien.', 'Kleine bruiloften, fincas'],
       ['Oosten (Santa Eulària)', 'Ontspannen, rustieke fincas en zandstranden.', 'Lange diners, grotere groepen'],
       ['Ibiza-stad &amp; Dalt Vila', 'Historische muren, smalle straatjes en de haven.', 'Bruidsportretten, stadse sfeer'],
       ['Zuiden (Ses Salines)', 'Beachclubs en wit zand in een beschermd natuurpark.', 'Strandfeest – let op droneregels']];
  add(lang, 'guide', T('Wedding guide', 'Trouwen op Ibiza'),
    T('Getting Married in Ibiza: Venues, Costs &amp; Legal Guide', 'Trouwen op Ibiza: locaties, kosten &amp; rechtsgeldigheid'),
    T('Planning a wedding in Ibiza? Venues by area, the best months, what it costs and how to make it legal – a practical guide by an Ibiza wedding photographer.',
      'Trouwen op Ibiza? Locaties per regio, de beste maanden, kosten en hoe je het rechtsgeldig regelt – praktische gids van een Nederlandse trouwfotograaf op Ibiza.'),
    'sunset',
    `${hero('sunset', T('Silhouette of a woman at sunset in Ibiza', 'Silhouet van een vrouw bij zonsondergang op Ibiza'),
      T('Guide · updated 2026', 'Gids · bijgewerkt 2026'),
      T('Getting married in Ibiza', 'Trouwen op Ibiza'),
      T('Everything you need to know before you start planning: where, when, what it costs and how to make it legal.', 'Alles wat je wilt weten voordat je gaat plannen: waar, wanneer, wat het kost en hoe je het rechtsgeldig regelt.'),
      `<a class="btn" href="${p.weddings}">${T('Wedding photo &amp; film', 'Trouwfotograaf &amp; trouwfilm')}</a>`, crumb(p.home, T('Wedding guide', 'Trouwen op Ibiza')), true)}
<section><div class="wrap article">
  <p class="note">${T('By Nina Snip, wedding photographer &amp; videographer in Ibiza', 'Door Nina Snip, trouwfotograaf &amp; videograaf op Ibiza')}</p>
  <div class="toc"><strong>${T('In this guide', 'In deze gids')}</strong><ol>
    <li><a href="#legal">${T('Is it legal?', 'Is het rechtsgeldig?')}</a></li>
    <li><a href="#when">${T('Best time of year', 'Beste periode')}</a></li>
    <li><a href="#where">${T('Venues by area', 'Trouwlocaties per regio')}</a></li>
    <li><a href="#cost">${T('What does it cost?', 'Wat kost trouwen op Ibiza?')}</a></li>
    <li><a href="#faq">${T('Frequently asked questions', 'Veelgestelde vragen')}</a></li>
  </ol></div>
  <h2 id="legal">${T('Can you legally get married in Ibiza?', 'Is trouwen op Ibiza rechtsgeldig?')}</h2>
  <p>${gf[0][1]}</p>
  <h2 id="when">${T('The best time to get married in Ibiza', 'De beste periode om op Ibiza te trouwen')}</h2>
  <p>${gf[1][1]}</p>
  <p>${T('Golden hour is a photographer’s favourite: soft, warm light that flatters everyone. In summer that means a ceremony around 18:00 and portraits around sunset.', 'Golden hour is favoriet bij elke fotograaf: zacht, warm licht dat iedereen mooi maakt. In de zomer betekent dat een ceremonie rond 18:00 uur en portretten rond zonsondergang.')}</p>
  <h2 id="where">${T('Ibiza wedding venues by area', 'Trouwlocaties op Ibiza per regio')}</h2>
  <table class="table"><thead><tr><th>${T('Area', 'Regio')}</th><th>${T('Character', 'Karakter')}</th><th>${T('Best for', 'Ideaal voor')}</th></tr></thead><tbody>
    ${areas.map(r => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}
  </tbody></table>
  <p class="note"><span class="ph">${T('[Add 5–8 venues Nina has worked at, with a photo and a link to the venue]', '[5–8 locaties toevoegen waar Nina heeft gewerkt, met foto en link naar de locatie]')}</span></p>
  ${img('cliff', T('Cliffs and turquoise water on the coast of Ibiza', 'Kliffen en turquoise water aan de kust van Ibiza'))}
  <h2 id="cost">${T('What does a wedding in Ibiza cost?', 'Wat kost trouwen op Ibiza?')}</h2>
  <p>${gf[2][1]}</p>
  <table class="table"><thead><tr><th>${T('Budget item', 'Budgetpost')}</th><th>${T('What to consider', 'Waar je op let')}</th></tr></thead><tbody>
    <tr><td>${T('Venue', 'Locatie')}</td><td>${T('Villa, finca, beach club or restaurant; minimum spend and peak-season surcharges', 'Villa, finca, beachclub of restaurant; minimale besteding en toeslag in het hoogseizoen')}</td></tr>
    <tr><td>${T('Catering &amp; drinks', 'Catering &amp; drank')}</td><td>${T('Per person; often combined with the venue', 'Per persoon; vaak gekoppeld aan de locatie')}</td></tr>
    <tr><td>${T('Planner &amp; celebrant', 'Weddingplanner &amp; ceremoniespreker')}</td><td>${T('Highly recommended from abroad', 'Aanrader als je vanuit het buitenland plant')}</td></tr>
    <tr><td>${T('Photo &amp; film', 'Foto &amp; film')}</td><td>${T('Book early; one maker for both saves coordination', 'Vroeg boeken; één maker voor beide scheelt afstemming')} – <a href="${p.weddings}">${T('see packages', 'bekijk pakketten')}</a></td></tr>
    <tr><td>${T('Travel &amp; stay', 'Reis &amp; verblijf')}</td><td>${T('For you and your guests; book flights early in summer', 'Voor jullie en de gasten; boek vluchten in de zomer op tijd')}</td></tr>
  </tbody></table>
  <h2 id="faq">${T('Frequently asked questions', 'Veelgestelde vragen')}</h2>
  ${faqHtml(gf.slice(3))}
</div></section>
${contactSection(lang)}`,
    { schema: [faqSchema(gf), { '@type': 'Article', headline: T('Getting married in Ibiza: venues, costs & legal guide', 'Trouwen op Ibiza: locaties, kosten & rechtsgeldigheid'), author: { '@id': 'https://www.ninapurafilms.com/#nina' }, inLanguage: lang, dateModified: '2026-10-14' }] });

  /* ABOUT */
  add(lang, 'about', T('About', 'Over Nina'),
    T('About Nina Snip | Photographer &amp; Videographer in Ibiza', 'Over Nina Snip | Nederlandse fotograaf op Ibiza'),
    T('Meet Nina Snip: Dutch photographer and videographer living in Ibiza. Storytelling through love, life and purity – for weddings, families and brands.',
      'Maak kennis met Nina Snip: Nederlandse fotograaf en videograaf op Ibiza. Verhalen vertellen vanuit liefde, leven en puurheid – voor bruiloften, gezinnen en merken.'),
    'nina',
    `<section style="padding-top:140px"><div class="wrap split">
  <div>
    ${crumb(p.home, T('About', 'Over Nina')).replace('class="crumbs"', 'class="crumbs" style="opacity:.6"')}
    <span class="eyebrow">${T('About', 'Over mij')}</span>
    <h1 style="font-size:clamp(2.4rem,5vw,3.8rem)">${T('Hi, I’m Nina', 'Hoi, ik ben Nina')}</h1>
    <p class="lead">${T('A Dutch photographer and videographer, living in Ibiza. Storytelling has always been the common thread in my life.', 'Nederlandse fotograaf en videograaf, wonend op Ibiza. Verhalen vertellen is altijd de rode draad in mijn leven geweest.')}</p>
    <p>${T('After years in corporate sales I realised I was putting the sensitive, creative part of myself aside to hit targets. Picking up my camera again gave me back the energy I had missed. Today, sensitivity and empathy are exactly what I use in my work: to make people feel at ease and to capture who they really are.', 'Na jaren in de zakelijke sales merkte ik dat ik mijn gevoelige, creatieve kant wegstopte om targets te halen. Door mijn camera weer op te pakken kreeg ik de energie terug die ik zo lang had gemist. Nu zijn gevoeligheid en empathie juist mijn kracht: mensen op hun gemak stellen en vastleggen wie ze echt zijn.')}</p>
    <p>${T('I work with three themes – <strong>love, life and purity</strong> – and I don’t believe in one size fits all. Before every shoot we talk personally, and I do all filming and editing myself.', 'Ik werk vanuit drie thema’s – <strong>liefde, leven en puurheid</strong> – en geloof niet in one size fits all. Voor elke shoot hebben we een persoonlijk gesprek, en ik doe al het filmen en monteren zelf.')}</p>
    <ul class="checks">
      <li>${T('Based in Ibiza and the Netherlands, available worldwide', 'Gevestigd op Ibiza en in Nederland, wereldwijd beschikbaar')}</li>
      <li>${T('Photography + film + drone', 'Fotografie + film + drone')}</li>
      <li>${T('English, Dutch', 'Nederlands, Engels')} <span class="ph">${T('[Spanish?]', '[Spaans?]')}</span></li>
      <li><span class="ph">${T('[Years of experience / number of weddings]', '[Aantal jaar ervaring / aantal bruiloften]')}</span></li>
    </ul>
    <div class="btns"><a class="btn" href="${p.contact}">${T('Get to know each other', 'Kennismaken')}</a></div>
  </div>
  ${img('nina', T('Nina Snip with her camera', 'Nina Snip met haar camera'))}
</div></section>
<section class="sand"><div class="wrap">
  <div class="gallery">
    ${img('sea', T('Woman in the sea – black and white portrait', 'Vrouw in zee – zwart-witportret'), 'g1')}
    ${img('hat', T('Woman with a hat walking through a field', 'Vrouw met hoed loopt door een veld'), 'g2')}
    ${img('pendulum', T('Pendulum held up against the sunset', 'Pendel tegen de zonsondergang'), 'g3')}
    ${img('balcony', T('Woman on a balcony overlooking Ibiza', 'Vrouw op een balkon met uitzicht over Ibiza'), 'g4')}
    ${img('ninaPalms', T('Photographer with camera among palm trees', 'Fotograaf met camera tussen palmbomen'), 'g5')}
  </div>
  <p class="note" style="margin-top:16px"><span class="ph">${T('[Add a short personal intro video + a recent portrait of Nina]', '[Korte persoonlijke introvideo + recent portret van Nina toevoegen]')}</span></p>
</div></section>
${contactSection(lang)}`);

  /* CONTACT */
  add(lang, 'contact', 'Contact',
    T('Contact &amp; Check Your Date | Nina Pura Films', 'Contact &amp; datum checken | Nina Pura Films'),
    T('Check availability for your wedding, photoshoot or project in Ibiza. Message Nina via WhatsApp or the form – reply within 24 hours, in English or Dutch.',
      'Check de beschikbaarheid voor je bruiloft, fotoshoot of project op Ibiza. Stuur Nina een WhatsApp of vul het formulier in – reactie binnen 24 uur.'),
    'proposal',
    `<div style="height:78px"></div>${contactSection(lang, false).replace('<h2>', '<h1 style="font-size:clamp(2.4rem,5vw,3.6rem)">').replace('</h2>', '</h1>')}
<section><div class="wrap">${faqHtml(wf.slice(0, 4))}</div></section>`,
    { solid: true });
}

// Op de over- en contactpagina staat geen donkere hero, dus de header is daar effen.
for (const pg of pages) if (pg.key === 'about') pg.solid = true;
