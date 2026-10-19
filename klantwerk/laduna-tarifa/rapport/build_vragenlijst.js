// Vragenlijst voor Maria (La Duna Tarifa) – input voor de nieuwe website. Engelstalig, want de klant communiceert in het Engels.
const L = require('./ba_lib.js');

const SECTIONS = [
  ['1. Goals and priorities', 'What the website must achieve, so every page is built around it.', [
    ['How many bookings per season do you want the website to bring in (2027)? A rough number per activity is fine.', 'Sets the target we design and measure against.'],
    ['Which product should the website push first? Please rank: windsurf lessons, wing foil lessons, kitesurf lessons, SUP/surf, rental, windsurf camp, kids summer camp, groups/corporate.', 'Decides the order in the menu and on the homepage.'],
    ['What is your maximum capacity per day (students per instructor, boards, wings)? Are there weeks you are always fully booked?', 'We should not promote what is already sold out, and push the quiet weeks.'],
    ['Which months are hardest to fill? Should the site push those (e.g. with an offer)?', 'Off-season campaigns and content timing.'],
    ['What is a good booking worth to you on average, per activity? (You mentioned windsurf packages of €150–205.)', 'Needed to set Google Ads bids and measure ROI.'],
  ]],
  ['2. Booking form and the 10% direct-booking discount', 'The heart of the new site: how people book and pay.', [
    ['Which activities and packages should be bookable online with 10% off? Is rental included? Camps? Private lessons?', 'Defines what the booking form offers.'],
    ['Should guests pay online (full amount or a deposit), or only reserve and pay at the beach? If deposit: how much?', 'Online payment converts better but needs a payment provider (e.g. Stripe, Redsys).'],
    ['Do you use a booking or planning system today (Bookinglayer, Regiondo, FareHarbor, a spreadsheet, WhatsApp only)? Should the website connect to it?', 'Avoids double bookings and double work.'],
    ['Exact conditions of the 10%: online only? Valid for how long? Combinable with the 2x1 offer, groups or repeat customers? Minimum number of lessons?', 'Clear rules prevent discussion at the beach and keep margin under control.'],
    ['Your cancellation and no-wind policy, word for word: refund, voucher or rebooking? Up to how many days before?', 'This is the biggest trust question for new customers; it must be visible next to the price.'],
    ['Which details do you need from a guest when booking (name, phone, email, level, weight/height, age, date, language, accommodation)?', 'Keeps the form as short as possible: every extra field costs bookings.'],
    ['Who receives the booking and how fast is it confirmed? By email, WhatsApp, or both? Who replies outside opening hours?', 'Fast confirmation is what you do better than competitors; we want to show it.'],
    ['Do you want gift vouchers to be bookable online?', 'Extra revenue in winter (Christmas, birthdays).'],
  ]],
  ['3. Offer and prices for 2027', 'All prices on the new site must be correct before launch.', [
    ['Please confirm or update all 2027 prices: windsurf (group, packs, private, kids), wing foil, kitesurf, SUP/surf, rentals.', 'Prices are shown on every page and in Google; outdated prices cost trust.'],
    ['Private windsurf lesson: what is the price? Wing foil private (€165): is that 1 or 2 hours?', 'Missing or unclear on the current site.'],
    ['Kitesurf rental: which prices per hour/day?', 'Not on the current site at all.'],
    ['Windsurf camp 2027: which dates, which accommodation options, prices?', 'Camp pages rank well; they need current dates.'],
    ['Kids summer camp 2027: dates, ages, price per week/day, location, separate phone number (664 328 356) or the main number?', 'The current page still shows 2025.'],
    ['Accommodation: should the Laduna penthouse be bookable or only on request? Is the motorhome rental still offered?', 'Decides whether accommodation gets its own booking flow.'],
    ['Combination packages you want to sell (lessons + accommodation, lessons + rental, family packs)?', 'Packages raise the average booking value.'],
  ]],
  ['4. Trust: why people choose La Duna', 'Visitors from Ads and Google do not know you yet. These answers become the trust blocks on the site.', [
    ['How many years exactly? The intake says "more than 18 years", the current site says "20 years". Since which year?', 'One consistent fact is important for Google and AI search.'],
    ['How many Google reviews do you have, and the average score? Also TripAdvisor or other platforms? May we show them on the site?', 'Reviews next to the booking button are the strongest trust signal.'],
    ['Which certifications and approvals do you have (FAV, VDWS, IKO, Andalusian Sailing Federation, Tarifa municipality)? Can you send logos or certificates?', 'Logos of official bodies increase trust, especially for parents.'],
    ['Insurance and safety: which insurance is included, how many rescue boats, what is the instructor-to-student ratio?', 'Safety is the first worry of beginners and families.'],
    ['Can you introduce the team: name, photo, languages, certificates and one sentence per instructor?', 'Faces sell; a team page also helps with Google (E-E-A-T).'],
    ['What is the story of La Duna (founder, family, why Valdevaqueros)? Would you share it on an "About us" page?', 'A real story differentiates you from the big schools.'],
    ['Any press, awards, partners or brand ambassadors (Goya, Quatro, Cabrinha, KT)?', 'Extra proof on the homepage.'],
    ['Do you dare to give a guarantee, e.g. "standing on the board after lesson 1, or a free extra lesson"?', 'A guarantee can be the strongest CRO element on the page.'],
  ]],
  ['5. Your customers and their questions', 'So the site answers questions before people ask them on WhatsApp.', [
    ['What are the 10 questions you get most often on WhatsApp before people book?', 'These become the FAQs on every page (also good for Google and ChatGPT).'],
    ['Why do people hesitate or not book in the end (price, wind, level, fear, dates)?', 'We address each doubt on the page.'],
    ['Which nationalities book the most? Should the site also be in German, French, Italian or Dutch, or only Spanish and English?', 'Search Console shows visitors from Italy, France, Switzerland, Germany and the UK.'],
    ['Share of families with children versus adults? Minimum age per activity (we now show 4 for windsurf, 10 for kite)?', 'Determines photos, wording and which page comes first.'],
    ['Do you work with hotels, campsites or agencies that send customers? Should they have their own page or discount code?', 'Partner links and codes are easy extra bookings.'],
  ]],
  ['6. Menu and structure', 'You asked for a clear, strong menu. Please check the proposal.', [
    ['Proposed menu: Lessons (Windsurf, Wing foil, Kitesurf) · SUP & Surf · Rental · Camps · Stay · Contact, plus a "Book now -10%" button. Anything missing or too much?', 'The menu decides how quickly visitors find the booking button.'],
    ['Should the beach bar/lounge, shop or second-hand equipment sale get a place on the site?', 'Possible extra pages and search terms ("tiendas windsurf tarifa").'],
    ['Do you still want the blog? Who would write for it, and how often?', 'Blog posts can win the big terms "wing foil" and "wingfoil" (14,600 searches/month in Spain).'],
    ['Do you need pages for jobs ("trabaja con nosotros") or instructor internships?', 'Keep or remove existing pages that have visitors.'],
  ]],
  ['7. Google, Ads and tracking', 'Needed to make the site work with Google Ads and Meta, and to measure bookings.', [
    ['Can you give us access to Google Search Console, Google Analytics, Google Business Profile, Google Ads and Meta Business Suite (as user, not password)?', 'We need data and must set up conversion tracking before launch.'],
    ['Which Google Ads campaigns run now, with which keywords, landing pages and monthly budget?', 'Each campaign gets its own matching landing page.'],
    ['Is the domain laduntarifaofertas.com yours? We see Google Ads from it ("Wing foil tarifa | Aparcamiento y Más Laduna").', 'If not yours, someone is advertising on your brand name.'],
    ['What is ladunatarifa.com (mentioned in your intake) used for? Should it redirect to the new site?', 'Three domains splitting your Google strength is a risk.'],
    ['Do you agree with tarifawindsurfing.es as the main site and the English version linked to it (as proposed in our email)?', 'Decides the setup of both domains and all redirects.'],
    ['Which offers work best in your Meta ads? Should they get a landing page on the site with the same offer?', 'Same offer on ad and page = higher conversion.'],
  ]],
  ['8. Photos, video and branding', 'The design is only as strong as the material.', [
    ['Do you have more photos or video (drone, lessons, team, lagoon, kite, SUP, wing foil in action, happy customers)? In the highest quality available?', 'We are missing strong kite and SUP photos; some current images are small.'],
    ['Do you have written permission from parents for the photos of children we use?', 'Required under GDPR before publishing.'],
    ['Logo in vector format (SVG, AI or PDF) and your brand colours/fonts. Do you have an Adobe Fonts licence (Futura PT / Proxima Nova)?', 'Without a licence we use similar free fonts.'],
    ['Websites you like (any sector)? And websites you do not like?', 'Helps us get the look right in the first round.'],
    ['Tone of voice: personal and fun ("we"), or more formal? Spanish "tú" or "usted"?', 'Consistent tone across pages, ads and WhatsApp.'],
  ]],
  ['9. Practical and legal', 'Needed before going live.', [
    ['Company name, NIF/CIF and registered address for the legal notice and privacy policy. Which email address may be shown on the site?', 'Required by Spanish law (LSSI) and missing today.'],
    ['Which phone/WhatsApp numbers should be on the site, and who answers them?', 'The site now shows 669 865 555; the summer camp uses another number.'],
    ['Newsletter: should the booking form add people to MailerLite (with consent)?', 'Repeat bookings and referrals are one of your 12-month goals.'],
    ['Who will update prices and dates after launch: you, your team, or us?', 'Decides how we set up editing.'],
    ['Deadline: the site should be live before the 2027 season (March). Is there an earlier date (e.g. Easter campaigns)? Who gives final approval?', 'Planning and feedback rounds.'],
  ]],
];

const coverChildren = L.cover({
  subject: 'La Duna Tarifa',
  docType: 'Website questionnaire',
  variant: 'N E W   W E B S I T E   2 0 2 7',
  dateLabel: 'DATE 9 OCTOBER 2026',
});

const W = [560, 4300, 2300, 2200];
const bodyChildren = [
  L.h1('Hi Maria,'),
  L.box([
    'Thank you for the information you already shared in the intake form: your USPs, competitors, target groups, keywords and goals. We have used it in the first version of the new website.',
    'To make the new tarifawindsurfing.es a site that ranks in Google, is quoted by AI search, supports your Google and Meta ads and, above all, turns visitors into bookings, we need some extra details. The 10% discount for direct online bookings will be the centre of the site, so section 2 is the most important.',
    'You can write your answers in the right-hand column, in English or Spanish. Short answers are fine; if you do not know something yet, just leave it open.',
  ]),
  L.spacer(),
  ...SECTIONS.flatMap(([title, intro, qs], si) => [
    ...(si === 1 ? [new L.Paragraph({ children: [new L.PageBreak()] })] : []),
    L.h2(title),
    L.sub(intro),
    L.table(['#', 'Question', 'Why we ask', 'Your answer'], W,
      qs.map((q, i) => [{ text: `${si + 1}.${i + 1}`, bold: true }, q[0], { text: q[1], color: L.GRAY }, '']), { size: 17 }),
  ]),
  L.h1('Next steps'),
  L.bullet('Send your answers (or a voice message on WhatsApp, that is fine too) and the photos/logo files.'),
  L.bullet('We process everything into the website and send you a preview link.'),
  L.bullet('One feedback round, then we connect the booking form, tracking and Google Ads, and go live before the 2027 season.'),
];

const doc = L.makeDoc({ subject: 'LA DUNA TARIFA', headerTitle: 'WEBSITE QUESTIONNAIRE', coverChildren, bodyChildren });
const out = 'vragenlijst-website-tarifawindsurfing-es-2026-10-09.docx';
L.Packer.toBuffer(doc).then((b) => { L.fs.writeFileSync(out, b); console.log('ok', out, SECTIONS.reduce((n, s) => n + s[2].length, 0), 'vragen'); });
