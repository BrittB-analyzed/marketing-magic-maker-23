// Alle pagina's, per id met een es- en en-variant (hreflang-paar).
// ES-slugs volgen de bestaande URL's die al verkeer krijgen (zie GSC-export 03-10-2026).
// Prijzen overgenomen van tarifawindsurfing.es (okt 2026).

const incES = {
  water: ['Instructores titulados FAV, VDWS o IKO', 'Material del año: Goya, Quatro, KT, Cabrinha', 'Neopreno, chaleco y casco', 'Seguro de accidentes', 'Lancha de rescate en el agua'],
};
const incEN = {
  water: ['FAV, VDWS or IKO certified instructors', 'Current-year gear: Goya, Quatro, KT, Cabrinha', 'Wetsuit, buoyancy vest and helmet', 'Accident insurance', 'Rescue boat on the water'],
};

export const pages = [
  // ───────────────────────── HOME ─────────────────────────
  {
    id: 'home',
    type: 'home',
    es: {
      slug: '',
      title: 'Windsurf en Tarifa: escuela, clases y wing foil | La Duna',
      description: 'Escuela de windsurf, wing foil y kitesurf a pie de playa en Valdevaqueros. Grupos pequeños, laguna para aprender y material del año. Clases desde 79 €.',
      kicker: 'Playa de Valdevaqueros · Tarifa',
      h1: 'Aprende windsurf y wing foil en Tarifa, a pie de playa',
      lead: 'Escuela familiar con más de 18 años en Valdevaqueros. Grupos pequeños, una laguna de agua tranquila para tus primeras horas y un equipo que te sigue por WhatsApp antes, durante y después de tu clase.',
      blocks: [
        { t: 'cards', title: '¿Qué quieres aprender?', items: [
          { ref: 'windsurf', title: 'Windsurf', text: 'Del primer día al planeo. Iniciación 2 h, packs de 3 y 5 clases.', price: 'desde 79 €' },
          { ref: 'wing', title: 'Wing foil', text: 'El deporte que más crece en Tarifa. Grupo, semiprivada o privada.', price: 'desde 79 €' },
          { ref: 'kite', title: 'Kitesurf', text: 'Cursos IKO en grupo cerrado, semiprivados o privados.', price: 'desde 120 €' },
          { ref: 'sup', title: 'SUP & Surf', text: 'Plan perfecto para días sin viento y para toda la familia.', price: 'desde 40 €' },
        ] },
        { t: 'features', title: 'Por qué aprender con La Duna', items: [
          ['Laguna para aprender', 'Agua plana y poco profunda junto a la escuela: progresas más rápido y con menos miedo.'],
          ['Método Laduna Flow™', 'Nuestro método propio: pocas teorías, mucho tiempo en el agua y correcciones en vídeo.'],
          ['Grupos pequeños', 'Atención personal y el instructor siempre cerca. Nada de clases masificadas.'],
          ['Material del año', 'Goya, Quatro, KT y Cabrinha. Material adaptado a tu peso y nivel.'],
          ['Seguridad', 'Lancha de rescate, seguro incluido y escuela homologada por la Federación Andaluza de Vela.'],
          ['Todo en un sitio', 'Clases, alquiler, bar de playa y ayuda con tu alojamiento en Tarifa.'],
        ] },
        { t: 'steps', title: 'Así de fácil es reservar', items: [
          ['Escríbenos', 'Por WhatsApp o con el formulario: actividad, fecha y número de personas.'],
          ['Te confirmamos', 'Miramos la previsión de viento y te proponemos el mejor horario.'],
          ['Al agua', 'Llegas, te damos el material y empiezas. Sin viento, cambiamos la fecha o te devolvemos el dinero.'],
        ] },
        { t: 'gallery', title: 'Un día en La Duna', items: ['equipo-escuela', 'laguna-aerea', 'salto-bandera', 'kitesurf-agua'] },
        { t: 'faq', items: [
          ['¿Cuál es la mejor época para hacer windsurf en Tarifa?', 'De marzo a noviembre. En primavera y otoño hay menos gente y viento constante; en verano hay más ambiente y el agua está más templada. Abrimos todos los días de 10:30 a 19:30.'],
          ['¿Puedo aprender si nunca lo he probado?', 'Sí. La mayoría de nuestros alumnos empieza desde cero. En la clase de iniciación de 2 horas (79 €) ya navegas solo en la laguna.'],
          ['¿Qué pasa si no hay viento o hay demasiado?', 'Cambiamos la clase a otro día o te devolvemos el importe. Con levante fuerte (más de 35 nudos) no damos clase por seguridad.'],
          ['¿Desde qué edad se puede hacer windsurf?', 'Damos clases de windsurf para niños desde los 4 años, kitesurf desde los 10 años. Siempre con material de su talla.'],
          ['¿Dónde está la escuela?', 'En la playa de Valdevaqueros, carretera N-340 km 74, a unos 10 minutos en coche del centro de Tarifa. Hay parking junto a la playa.'],
        ] },
      ],
    },
    en: {
      slug: '',
      title: 'Windsurf School in Tarifa – Lessons & Wing Foil | La Duna',
      description: 'Beachfront windsurf, wing foil and kitesurf school on Valdevaqueros beach, Tarifa. Small groups, a flat-water lagoon for beginners and new gear. Lessons from €79.',
      kicker: 'Valdevaqueros beach · Tarifa, Spain',
      h1: 'Learn to windsurf and wing foil in Tarifa, right on the beach',
      lead: 'Family-run school with 18+ years on Valdevaqueros beach. Small groups, a flat-water lagoon for your first hours and a team that looks after you on WhatsApp before, during and after your lesson.',
      blocks: [
        { t: 'cards', title: 'What would you like to learn?', items: [
          { ref: 'windsurf', title: 'Windsurf', text: 'From day one to planing. 2-hour taster, 3 and 5-lesson packs.', price: 'from €79' },
          { ref: 'wing', title: 'Wing foil', text: 'Tarifa’s fastest-growing sport. Group, semi-private or private.', price: 'from €79' },
          { ref: 'kite', title: 'Kitesurf', text: 'IKO courses for closed groups, semi-private or private.', price: 'from €120' },
          { ref: 'sup', title: 'SUP & Surf', text: 'Perfect for no-wind days and the whole family.', price: 'from €40' },
        ] },
        { t: 'features', title: 'Why learn with La Duna', items: [
          ['Beginner lagoon', 'Flat, shallow water right next to the school: you learn faster and with less fear.'],
          ['Laduna Flow™ method', 'Our own teaching method: little theory, lots of water time and video feedback.'],
          ['Small groups', 'Personal attention with your instructor always close by. No crowded classes.'],
          ['Current-year gear', 'Goya, Quatro, KT and Cabrinha, matched to your weight and level.'],
          ['Safety first', 'Rescue boat, insurance included and a school approved by the Andalusian Sailing Federation.'],
          ['All in one place', 'Lessons, rental, beach bar and help finding a place to stay in Tarifa.'],
        ] },
        { t: 'steps', title: 'Booking is easy', items: [
          ['Message us', 'On WhatsApp or with the form: activity, date and number of people.'],
          ['We confirm', 'We check the wind forecast and suggest the best time slot.'],
          ['Hit the water', 'Arrive, get your gear and go. No wind? We reschedule or refund you.'],
        ] },
        { t: 'gallery', title: 'A day at La Duna', items: ['equipo-escuela', 'laguna-aerea', 'salto-bandera', 'kitesurf-agua'] },
        { t: 'faq', items: [
          ['When is the best time to windsurf in Tarifa?', 'March to November. Spring and autumn are quieter with steady wind; summer is busier with warmer water. We are open every day from 10:30 to 19:30.'],
          ['Can I learn if I have never tried it?', 'Yes. Most of our students start from zero. In the 2-hour taster lesson (€79) you will already be sailing on your own in the lagoon.'],
          ['What happens if there is no wind, or too much?', 'We move your lesson to another day or refund you. In strong Levante (over 35 knots) we do not teach, for safety.'],
          ['What is the minimum age?', 'Windsurf lessons for kids from age 4, kitesurf from age 10, always with child-sized gear.'],
          ['Where is the school?', 'On Valdevaqueros beach, N-340 road km 74, about 10 minutes by car from Tarifa town. Parking next to the beach.'],
        ] },
      ],
    },
  },

  // ───────────────────────── WINDSURF ─────────────────────────
  {
    id: 'windsurf',
    type: 'service',
    service: 'windsurf',
    es: {
      slug: 'curso-de-windsurf-en-tarifa',
      title: 'Curso de windsurf en Tarifa · Clases desde 79 € | La Duna',
      description: 'Clases y cursos de windsurf en Tarifa para todos los niveles. Iniciación 2 h por 79 €, pack de 5 clases 310 €. Laguna para aprender, material Goya y seguro incluido.',
      kicker: 'Clases de windsurf · Valdevaqueros',
      h1: 'Curso de windsurf en Tarifa',
      lead: 'Aprende windsurf en la laguna de Valdevaqueros con instructores titulados y material del año. Desde una primera clase de 2 horas hasta el pack completo para dominar el planeo.',
      summary: 'Una clase de iniciación de windsurf en La Duna Tarifa dura 2 horas y cuesta 79 € por persona, con todo el material, neopreno y seguro incluidos. El pack más elegido son 5 clases (10 horas) por 310 €. Abrimos de marzo a noviembre, todos los días de 10:30 a 19:30.',
      blocks: [
        { t: 'prices', title: 'Cursos de windsurf en grupo', items: [
          { name: 'Siente el viento', meta: '1 clase · 2 horas · iniciación', price: 79, unit: 'por persona', features: ['Primeros bordos en la laguna', 'Ideal para probar', 'Niños y adultos'] },
          { name: 'Fluye con el viento', meta: '3 clases · 6 horas', price: 205, unit: 'por persona', features: ['Control de dirección', 'Virar y trasluchar', 'Navegar de forma autónoma'] },
          { name: 'Domina el viento', meta: '5 clases · 10 horas', price: 310, unit: 'por persona', badge: 'El más elegido', featured: true, features: ['Progresión rápida', 'Corrección en vídeo', 'Base para alquilar solo'] },
          { name: 'Máster del océano', meta: '5 clases + alquiler ilimitado', price: 605, unit: 'por persona', features: ['Para estancias largas', 'Practica cuando quieras', 'Ideal para familias'] },
        ] },
        { t: 'prices', title: 'Clases privadas y niños', items: [
          { name: 'Clase privada', meta: 'Planeo, waterstart, maniobras, saltos', priceText: 'Consultar', features: ['Instructor solo para ti', 'Horario flexible', 'Todos los niveles'] },
          { name: 'Niños 4–8 años', meta: 'Privada o en grupo · por hora', price: 75, unit: 'temporada baja (90 € en alta)', features: ['Material de su talla', 'En la laguna, agua poco profunda', 'Juegos y confianza en el agua'] },
        ] },
        { t: 'includes', title: 'Incluido en todas las clases', items: incES.water },
        { t: 'text', img: 'laguna-aerea', title: '¿Por qué aprender windsurf en Tarifa?', html: '<p>Tarifa es la capital europea del viento: con levante y poniente casi todo el año, rara vez te quedas sin navegar. En Valdevaqueros tenemos además una <strong>laguna de agua plana</strong> junto a la escuela, perfecta para tus primeras horas. Cuando ya controlas la vela, pasas al mar con el instructor y la lancha cerca.</p><p>Con nuestro método <strong>Laduna Flow™</strong> pasas la mayor parte del tiempo en el agua, no escuchando teoría en la arena.</p>' },
        { t: 'faq', items: [
          ['¿Cuántas clases necesito para aprender windsurf?', 'Con 1 clase de 2 horas ya navegas en la laguna. Para navegar solo con seguridad recomendamos 3 clases (6 h); con 5 clases (10 h) la mayoría puede alquilar material por su cuenta.'],
          ['¿Hace falta estar en forma o saber nadar?', 'Debes saber nadar y tener una forma física normal. Usamos velas ligeras y tablas grandes, así que no hace falta fuerza.'],
          ['¿Qué tengo que llevar?', 'Bañador, toalla, crema solar y agua. Nosotros ponemos tabla, vela, neopreno, chaleco y casco.'],
          ['¿Qué pasa si no hay viento?', 'Cambiamos la clase de día o te devolvemos el dinero. Con más de 35 nudos tampoco damos clase.'],
          ['¿Puedo hacer windsurf con niños?', 'Sí, desde los 4 años en clase privada o grupo de niños, en la laguna y con material de su talla.'],
        ] },
        { t: 'related', items: ['rentWindsurf', 'camp', 'wing', 'stay'] },
      ],
    },
    en: {
      slug: 'windsurf-lessons',
      title: 'Windsurf Lessons in Tarifa · From €79 | La Duna',
      description: 'Windsurf lessons and courses in Tarifa for all levels. 2-hour taster €79, 5-lesson pack €310. Beginner lagoon, Goya gear and insurance included.',
      kicker: 'Windsurf lessons · Valdevaqueros',
      h1: 'Windsurf lessons in Tarifa',
      lead: 'Learn to windsurf in the Valdevaqueros lagoon with certified instructors and current-year gear. From a 2-hour taster to the full pack that gets you planing.',
      summary: 'A beginner windsurf lesson at La Duna Tarifa lasts 2 hours and costs €79 per person, with all gear, wetsuit and insurance included. The most popular option is 5 lessons (10 hours) for €310. Open March to November, daily 10:30–19:30.',
      blocks: [
        { t: 'prices', title: 'Group windsurf courses', items: [
          { name: 'Feel the wind', meta: '1 lesson · 2 hours · taster', price: 79, unit: 'per person', features: ['First runs in the lagoon', 'Perfect to try it out', 'Kids and adults'] },
          { name: 'Flow with the wind', meta: '3 lessons · 6 hours', price: 205, unit: 'per person', features: ['Steering control', 'Tacking and gybing', 'Sail independently'] },
          { name: 'Master the wind', meta: '5 lessons · 10 hours', price: 310, unit: 'per person', badge: 'Most popular', featured: true, features: ['Fast progression', 'Video feedback', 'Ready to rent on your own'] },
          { name: 'Ocean master', meta: '5 lessons + unlimited rental', price: 605, unit: 'per person', features: ['For longer stays', 'Practise whenever you like', 'Great for families'] },
        ] },
        { t: 'prices', title: 'Private lessons and kids', items: [
          { name: 'Private lesson', meta: 'Planing, waterstart, manoeuvres, jumps', priceText: 'On request', features: ['Instructor just for you', 'Flexible times', 'All levels'] },
          { name: 'Kids 4–8 years', meta: 'Private or group · per hour', price: 75, unit: 'low season (€90 high season)', features: ['Child-sized gear', 'Shallow lagoon', 'Games and water confidence'] },
        ] },
        { t: 'includes', title: 'Included in every lesson', items: incEN.water },
        { t: 'text', img: 'laguna-aerea', title: 'Why learn to windsurf in Tarifa?', html: '<p>Tarifa is Europe’s wind capital: with Levante and Poniente winds most of the year, you rarely miss a session. At Valdevaqueros we also have a <strong>flat-water lagoon</strong> next to the school, ideal for your first hours. Once you control the sail, you move to the sea with your instructor and the rescue boat close by.</p><p>With our <strong>Laduna Flow™</strong> method you spend most of your time on the water, not listening to theory on the sand.</p>' },
        { t: 'faq', items: [
          ['How many lessons do I need to learn windsurfing?', 'After one 2-hour lesson you are sailing in the lagoon. To sail safely on your own we recommend 3 lessons (6 h); after 5 lessons (10 h) most people can rent gear independently.'],
          ['Do I need to be fit or able to swim?', 'You need to be able to swim and have normal fitness. We use light sails and big boards, so you do not need much strength.'],
          ['What should I bring?', 'Swimwear, towel, sunscreen and water. We provide board, sail, wetsuit, vest and helmet.'],
          ['What if there is no wind?', 'We move your lesson to another day or refund you. We also do not teach above 35 knots.'],
          ['Can kids learn windsurfing?', 'Yes, from age 4 in private or kids’ group lessons, in the lagoon with child-sized gear.'],
        ] },
        { t: 'related', items: ['rentWindsurf', 'camp', 'wing', 'stay'] },
      ],
    },
  },

  // ───────────────────────── WING FOIL ─────────────────────────
  {
    id: 'wing',
    type: 'service',
    service: 'wing foil',
    es: {
      slug: 'wingfoil-tarifa',
      title: 'Wing foil en Tarifa: clases y cursos desde 79 € | La Duna',
      description: 'Aprende wing foil en Tarifa con instructores titulados. Clase en grupo 2 h por 79 €, semiprivada 120 €, privada 165 €. Material del año y lancha de seguridad.',
      kicker: 'Clases de wing foil · Valdevaqueros',
      h1: 'Clases de wing foil en Tarifa',
      lead: 'El wing foil es la forma más rápida de volar sobre el agua. Te enseñamos paso a paso: primero el ala en la arena, después la tabla grande y, cuando estás listo, el foil.',
      summary: 'En La Duna Tarifa una clase de wing foil en grupo dura 2 horas y cuesta 79 € por persona (mínimo 3). La clase semiprivada para 2 personas cuesta 120 € por persona y la privada 165 €. El curso privado de 3 días empieza en 270 €. Material, neopreno y seguro incluidos.',
      blocks: [
        { t: 'prices', title: 'Clases de wing foil', items: [
          { name: 'Clase en grupo', meta: '2 horas · mínimo 3 personas', price: 79, unit: 'por persona', features: ['Manejo del ala en tierra', 'Primeros bordos en tabla grande', 'Progreso en equipo'] },
          { name: 'Semiprivada', meta: '2 horas · 2 personas', price: 120, unit: 'por persona', badge: 'Mejor relación', featured: true, features: ['Más enfoque técnico', 'Control del ala garantizado', 'Ideal en pareja'] },
          { name: 'Privada', meta: '1 persona', price: 165, unit: 'por clase', features: ['Atención 100 % personal', 'Corrección continua', 'Ritmo a tu medida'] },
          { name: 'Pack curso privado', meta: '3 días', price: 270, from: true, unit: 'por persona', features: ['Vuelo con foil', 'Giros', 'Control avanzado'] },
        ] },
        { t: 'includes', title: 'Incluido en todas las clases', items: incES.water },
        { t: 'text', img: 'wing-playa', title: 'Wing foil en Valdevaqueros', html: '<p>Valdevaqueros es uno de los mejores spots de Europa para aprender wing foil: viento constante, mucho espacio y una laguna de agua plana para practicar el manejo del ala sin olas. Si ya haces windsurf o kitesurf, aprenderás todavía más rápido.</p><p>Cuando terminas el curso puedes <a href="{{rentWing}}">alquilar material de wing foil</a> en la misma escuela y seguir practicando.</p>' },
        { t: 'faq', items: [
          ['¿Es difícil aprender wing foil?', 'Es más fácil que el kitesurf y muy intuitivo. Casi todos los alumnos navegan con el ala en la primera clase; volar con el foil suele llegar entre la 3.ª y la 5.ª hora.'],
          ['¿Necesito experiencia previa?', 'No. Si has hecho windsurf, kite o surf aprenderás antes, pero empezamos desde cero.'],
          ['¿Cuál es la mejor época para el wing foil en Tarifa?', 'De marzo a noviembre. Primavera y otoño son ideales: viento fiable y menos gente en el agua.'],
          ['¿Es seguro?', 'Sí: usamos casco y chaleco, foils cortos para aprender y una lancha de rescate vigila el agua.'],
          ['¿Puedo alquilar material después del curso?', 'Sí, desde 60 € la hora con material del año, siempre que el instructor confirme que tu nivel y el viento lo permiten.'],
        ] },
        { t: 'related', items: ['rentWing', 'windsurf', 'kite', 'stay'] },
      ],
    },
    en: {
      slug: 'wing-foil-lessons',
      title: 'Wing Foil Lessons in Tarifa · From €79 | La Duna',
      description: 'Learn wing foiling in Tarifa with certified instructors. Group lesson 2 h €79, semi-private €120, private €165. Current-year gear and safety boat.',
      kicker: 'Wing foil lessons · Valdevaqueros',
      h1: 'Wing foil lessons in Tarifa',
      lead: 'Wing foiling is the fastest way to fly over the water. We teach you step by step: the wing on the sand first, then a big board and, when you are ready, the foil.',
      summary: 'At La Duna Tarifa a group wing foil lesson lasts 2 hours and costs €79 per person (minimum 3). A semi-private lesson for 2 costs €120 per person and a private lesson €165. The 3-day private course starts at €270. Gear, wetsuit and insurance included.',
      blocks: [
        { t: 'prices', title: 'Wing foil lessons', items: [
          { name: 'Group lesson', meta: '2 hours · minimum 3 people', price: 79, unit: 'per person', features: ['Wing handling on land', 'First runs on a big board', 'Learn as a team'] },
          { name: 'Semi-private', meta: '2 hours · 2 people', price: 120, unit: 'per person', badge: 'Best value', featured: true, features: ['More technical focus', 'Wing control guaranteed', 'Great for couples'] },
          { name: 'Private', meta: '1 person', price: 165, unit: 'per lesson', features: ['100% personal attention', 'Continuous feedback', 'Your own pace'] },
          { name: 'Private course pack', meta: '3 days', price: 270, from: true, unit: 'per person', features: ['Foil flight', 'Turns', 'Advanced control'] },
        ] },
        { t: 'includes', title: 'Included in every lesson', items: incEN.water },
        { t: 'text', img: 'wing-playa', title: 'Wing foiling at Valdevaqueros', html: '<p>Valdevaqueros is one of Europe’s best spots to learn wing foiling: steady wind, plenty of space and a flat-water lagoon to practise wing handling without waves. If you already windsurf or kite, you will learn even faster.</p><p>After your course you can <a href="{{rentWing}}">rent wing foil gear</a> at the same school and keep practising.</p>' },
        { t: 'faq', items: [
          ['Is wing foiling hard to learn?', 'It is easier than kitesurfing and very intuitive. Almost everyone is cruising with the wing in the first lesson; foil flight usually comes between hour 3 and 5.'],
          ['Do I need previous experience?', 'No. Windsurf, kite or surf experience helps, but we start from zero.'],
          ['When is the best time for wing foiling in Tarifa?', 'March to November. Spring and autumn are ideal: reliable wind and fewer people on the water.'],
          ['Is it safe?', 'Yes: helmet and vest, short training foils and a rescue boat watching the water.'],
          ['Can I rent gear after the course?', 'Yes, from €60 per hour with current-year gear, as long as your instructor confirms your level and the wind allow it.'],
        ] },
        { t: 'related', items: ['rentWing', 'windsurf', 'kite', 'stay'] },
      ],
    },
  },

  // ───────────────────────── KITESURF ─────────────────────────
  {
    id: 'kite',
    type: 'service',
    service: 'kitesurf',
    es: {
      slug: 'curso-de-kitesurf-en-tarifa',
      title: 'Curso de kitesurf en Tarifa (IKO) desde 120 € | La Duna',
      description: 'Cursos de kitesurf en Valdevaqueros, Tarifa, con instructores IKO. Semiprivada 2 h 120 €, privada 165 €, grupo cerrado 3 días desde 210 €. Material y seguro incluidos.',
      kicker: 'Escuela de kitesurf · Valdevaqueros',
      h1: 'Curso de kitesurf en Tarifa',
      lead: 'Aprende kitesurf en Valdevaqueros, el spot más famoso de Tarifa, con instructores IKO/FAV, material Cabrinha y lancha de apoyo. Grupos reducidos y clases adaptadas a tu nivel.',
      summary: 'Una clase de kitesurf en La Duna Tarifa dura unas 2 horas. Semiprivada (2 personas) cuesta 120 € por persona, privada 165 €, y el curso de 3 días en grupo cerrado de 4 personas 210 € por persona. Edad mínima: 10 años. Material, seguro y lancha incluidos.',
      blocks: [
        { t: 'prices', title: 'Cursos de kitesurf', items: [
          { name: 'Grupo cerrado', meta: '3 días · 3–4 personas', price: 210, from: true, unit: 'por persona (4 pers.) · 240 € con 3', features: ['Solo grupos ya formados', 'Ideal amigos o familia', 'Curso completo de iniciación'] },
          { name: 'Semiprivada', meta: '2 personas · 2 h', price: 120, unit: 'por persona', badge: 'Más progreso', featured: true, features: ['Más atención, más progreso', 'Pack 3 clases: 299 €/pers.', 'Ritmo compartido'] },
          { name: 'Privada', meta: '1 persona · 2 h', price: 165, unit: 'por clase', features: ['Instructor solo para ti', 'Pack 3 clases: 450 €', 'Máxima progresión'] },
          { name: 'Clase en barco (VIP)', meta: '1 hora', price: 215, unit: 'por clase', features: ['Instructor y barco contigo', 'Ideal para waterstart', 'Spots fuera de la playa'] },
        ] },
        { t: 'includes', title: 'Incluido en todos los cursos', items: ['Instructor certificado IKO / FAV', 'Cometa, tabla, arnés, casco y chaleco', 'Seguro de accidentes', 'Barco de apoyo cuando es necesario'] },
        { t: 'text', img: 'kite-clase-barco', title: 'Clase de kitesurf en barco', html: '<p>En la clase VIP el instructor y la lancha van contigo. Empiezas en aguas abiertas, sin otros kites alrededor, y si te caes la lancha te recoge al momento. Es la forma más rápida de conseguir el <strong>waterstart</strong> y tus primeros bordos.</p><p>Ideal también si ya has hecho un curso en grupo y quieres dar el salto a navegar solo.</p>' },
        { t: 'faq', items: [
          ['¿Desde qué edad se puede hacer kitesurf?', 'Desde los 10 años, según peso y madurez del alumno.'],
          ['¿Cuánto dura una clase de kitesurf?', 'Aproximadamente 2 horas. La clase en barco dura 1 hora.'],
          ['¿Necesito experiencia?', 'No, los cursos están pensados para principiantes absolutos.'],
          ['¿Qué pasa si no hay viento?', 'Reprogramamos la clase o te devolvemos el dinero.'],
          ['¿Puedo combinar el curso con alojamiento?', 'Sí, te ayudamos a encontrar alojamiento en Tarifa cerca de la escuela. Escríbenos por WhatsApp.'],
        ] },
        { t: 'related', items: ['rentKite', 'wing', 'stay', 'adaptive'] },
      ],
    },
    en: {
      slug: 'kitesurf-lessons',
      title: 'Kitesurf Lessons in Tarifa (IKO) · From €120 | La Duna',
      description: 'Kitesurf courses on Valdevaqueros beach, Tarifa, with IKO instructors. Semi-private 2 h €120, private €165, 3-day closed group from €210. Gear and insurance included.',
      kicker: 'Kitesurf school · Valdevaqueros',
      h1: 'Kitesurf lessons in Tarifa',
      lead: 'Learn to kitesurf at Valdevaqueros, Tarifa’s most famous spot, with IKO/FAV instructors, Cabrinha gear and boat support. Small groups and lessons matched to your level.',
      summary: 'A kitesurf lesson at La Duna Tarifa lasts about 2 hours. Semi-private (2 people) costs €120 per person, private €165, and the 3-day closed group course for 4 people €210 per person. Minimum age: 10. Gear, insurance and boat support included.',
      blocks: [
        { t: 'prices', title: 'Kitesurf courses', items: [
          { name: 'Closed group', meta: '3 days · 3–4 people', price: 210, from: true, unit: 'per person (4 ppl) · €240 with 3', features: ['Pre-formed groups only', 'Great for friends or family', 'Full beginner course'] },
          { name: 'Semi-private', meta: '2 people · 2 h', price: 120, unit: 'per person', badge: 'More progress', featured: true, features: ['More attention, more progress', '3-lesson pack: €299 pp', 'Shared pace'] },
          { name: 'Private', meta: '1 person · 2 h', price: 165, unit: 'per lesson', features: ['Instructor just for you', '3-lesson pack: €450', 'Fastest progression'] },
          { name: 'Boat lesson (VIP)', meta: '1 hour', price: 215, unit: 'per lesson', features: ['Instructor and boat with you', 'Ideal for waterstart', 'Spots away from the beach'] },
        ] },
        { t: 'includes', title: 'Included in every course', items: ['IKO / FAV certified instructor', 'Kite, board, harness, helmet and vest', 'Accident insurance', 'Support boat when needed'] },
        { t: 'text', img: 'kite-clase-barco', title: 'Kitesurf boat lesson', html: '<p>In the VIP lesson your instructor and the boat stay with you. You start in open water with no other kites around, and if you fall the boat picks you up straight away. It is the fastest way to nail your <strong>waterstart</strong> and first runs.</p><p>Also ideal if you have done a group course and want to start riding on your own.</p>' },
        { t: 'faq', items: [
          ['What is the minimum age for kitesurfing?', 'From 10 years, depending on the student’s weight and maturity.'],
          ['How long is a kitesurf lesson?', 'About 2 hours. The boat lesson is 1 hour.'],
          ['Do I need experience?', 'No, our courses are designed for complete beginners.'],
          ['What if there is no wind?', 'We reschedule your lesson or refund you.'],
          ['Can I combine the course with accommodation?', 'Yes, we help you find a place to stay in Tarifa near the school. Message us on WhatsApp.'],
        ] },
        { t: 'related', items: ['rentKite', 'wing', 'stay', 'adaptive'] },
      ],
    },
  },

  // ───────────────────────── SUP & SURF ─────────────────────────
  {
    id: 'sup',
    type: 'service',
    service: 'SUP y surf',
    es: {
      slug: 'sup-surf',
      title: 'Clases de surf y paddle surf en Tarifa desde 40 € | La Duna',
      description: 'Clases de surf y SUP en Valdevaqueros, Tarifa: grupo 2 h 40 €, semiprivada 50 €, privada 60 €. Alquiler de tabla de SUP o surf desde 25 €/hora.',
      kicker: 'Escuela de surf y SUP · Tarifa',
      h1: 'Clases de surf y paddle surf en Tarifa',
      lead: 'El plan perfecto para los días de poco viento, para niños y para quien quiere probar algo nuevo. Clases en grupo, semiprivadas o privadas y alquiler por horas.',
      summary: 'En La Duna Tarifa una clase de surf o paddle surf en grupo dura 2 horas y cuesta 40 € por persona (mínimo 3–4 personas). La semiprivada cuesta 50 € por persona y la privada de 1 hora 60 €. Alquiler de tabla y remo desde 25 € la hora.',
      blocks: [
        { t: 'prices', title: 'Clases de surf y SUP', items: [
          { name: 'Clase en grupo', meta: '2 horas · mín. 3–4 personas', price: 40, unit: 'por persona', features: ['Ideal familias y amigos', 'Material incluido', 'Todos los niveles'] },
          { name: 'Semiprivada', meta: '2 horas · 3 personas', price: 50, unit: 'por persona', badge: 'Popular', featured: true, features: ['Más atención', 'Grupo reducido', 'Material incluido'] },
          { name: 'Privada', meta: '1 hora · 1 persona', price: 60, unit: 'por clase', features: ['Instructor solo para ti', 'Horario flexible', 'Progreso rápido'] },
        ] },
        { t: 'text', img: 'sup-agua', title: 'Paddle surf en Tarifa', html: '<p>Con poco viento, el agua de Valdevaqueros y de las calas cercanas queda transparente: perfecta para remar en SUP, ver el fondo y disfrutar de la costa. Es un plan tranquilo para familias, parejas y para quien llega a Tarifa sin experiencia.</p>' },
        { t: 'table', title: 'Alquiler de SUP y surf', cols: ['Duración', 'Precio (tabla + remo)'], rows: [['1 hora', '25 €'], ['2 horas', '35 €'], ['3 horas', '40 €']], note: 'Mismo precio para SUP y surf.' },
        { t: 'faq', items: [
          ['¿Hay olas para surfear en Tarifa?', 'Sí, sobre todo con poniente y en otoño-invierno. En verano, con poco oleaje, el paddle surf es la opción ideal.'],
          ['¿Pueden hacerlo los niños?', 'Sí, el SUP es perfecto para niños y familias. Para los más pequeños recomendamos la clase privada o semiprivada.'],
          ['¿Qué incluye la clase?', 'Tabla, remo o tabla de surf, neopreno y chaleco cuando es necesario, e instructor titulado.'],
        ] },
        { t: 'related', items: ['windsurf', 'summer', 'wing', 'stay'] },
      ],
    },
    en: {
      slug: 'sup-surf',
      title: 'Surf & SUP Lessons in Tarifa from €40 | La Duna',
      description: 'Surf and SUP lessons at Valdevaqueros, Tarifa: group 2 h €40, semi-private €50, private €60. SUP or surfboard rental from €25 per hour.',
      kicker: 'Surf & SUP school · Tarifa',
      h1: 'Surf and paddleboard lessons in Tarifa',
      lead: 'The perfect plan for light-wind days, for kids and for anyone who wants to try something new. Group, semi-private or private lessons and hourly rental.',
      summary: 'At La Duna Tarifa a group surf or SUP lesson lasts 2 hours and costs €40 per person (minimum 3–4 people). Semi-private is €50 per person and a 1-hour private lesson €60. Board and paddle rental from €25 per hour.',
      blocks: [
        { t: 'prices', title: 'Surf and SUP lessons', items: [
          { name: 'Group lesson', meta: '2 hours · min. 3–4 people', price: 40, unit: 'per person', features: ['Great for families and friends', 'Gear included', 'All levels'] },
          { name: 'Semi-private', meta: '2 hours · 3 people', price: 50, unit: 'per person', badge: 'Popular', featured: true, features: ['More attention', 'Small group', 'Gear included'] },
          { name: 'Private', meta: '1 hour · 1 person', price: 60, unit: 'per lesson', features: ['Instructor just for you', 'Flexible times', 'Fast progress'] },
        ] },
        { t: 'text', img: 'sup-agua', title: 'Paddleboarding in Tarifa', html: '<p>On light-wind days the water at Valdevaqueros and nearby coves turns crystal clear: perfect for stand-up paddling, spotting the seabed and enjoying the coast. A relaxed plan for families, couples and anyone new to Tarifa.</p>' },
        { t: 'table', title: 'SUP and surf rental', cols: ['Duration', 'Price (board + paddle)'], rows: [['1 hour', '€25'], ['2 hours', '€35'], ['3 hours', '€40']], note: 'Same price for SUP and surf.' },
        { t: 'faq', items: [
          ['Are there waves to surf in Tarifa?', 'Yes, mainly with Poniente wind and in autumn and winter. In summer, with small swell, SUP is the ideal choice.'],
          ['Can kids join?', 'Yes, SUP is perfect for kids and families. For younger children we recommend a private or semi-private lesson.'],
          ['What is included?', 'Board and paddle or surfboard, wetsuit and vest when needed, and a certified instructor.'],
        ] },
        { t: 'related', items: ['windsurf', 'summer', 'wing', 'stay'] },
      ],
    },
  },

  // ───────────────────────── ALQUILER WINDSURF ─────────────────────────
  {
    id: 'rentWindsurf',
    type: 'service',
    service: 'alquiler de windsurf',
    es: {
      slug: 'alquiler-windsurf-tarifa',
      title: 'Alquiler de windsurf en Tarifa desde 80 €/día | La Duna',
      description: 'Alquiler de material de windsurf en Valdevaqueros, Tarifa: 1 día 80 €, 1 semana 345 €. Material Goya y Quatro del año, cambio de vela según el viento.',
      kicker: 'Alquiler de material · Valdevaqueros',
      h1: 'Alquiler de windsurf en Tarifa',
      lead: 'Material Goya, Quatro y KT del año, a pie de playa. Cambia de vela o tabla cuando cambie el viento. Cuantos más días, más barato el día.',
      summary: 'Alquilar un equipo completo de windsurf en La Duna Tarifa cuesta 80 € al día, 195 € por 3 días seguidos y 345 € por una semana. Si los días no son seguidos, 1 semana cuesta 380 €. Puedes cambiar de vela o tabla según el viento.',
      blocks: [
        { t: 'table', title: 'Tarifas de alquiler de windsurf', cols: ['Duración', 'Días seguidos', 'Días sueltos'], rows: [
          ['1 día', '80 €', '80 €'], ['2 días', '145 €', '160 €'], ['3 días', '195 €', '215 €'], ['4 días', '245 €', '270 €'], ['5 días', '295 €', '325 €'],
          ['1 semana (6–7 días)', '345 €', '380 €'], ['8 días', '375 €', '415 €'], ['9 días', '405 €', '445 €'], ['10 días', '435 €', '480 €'],
          ['11 días', '465 €', '515 €'], ['12 días', '495 €', '545 €'], ['13 días', '530 €', '585 €'], ['14 días', '565 €', '625 €'],
        ], note: 'Recomendamos reservar con antelación en julio y agosto.' },
        { t: 'includes', title: 'Qué incluye el alquiler', items: ['Tabla y vela completas del año', 'Cambio de vela o tabla según el viento (según disponibilidad)', 'Asesoramiento sobre el spot y el viento del día', 'Lancha de rescate en el agua'] },
        { t: 'faq', items: [
          ['¿Puedo cambiar de vela si cambia el viento?', 'Sí, puedes cambiar de vela o tabla durante el día según disponibilidad.'],
          ['¿Qué nivel necesito para alquilar?', 'Alquilamos a todos los niveles. Si estás empezando, el instructor te asesora sobre la zona y el material.'],
          ['¿Hace falta reservar?', 'En temporada alta (julio y agosto) recomendamos reservar por WhatsApp para asegurar tu material.'],
        ] },
        { t: 'related', items: ['windsurf', 'rentWing', 'rentKite', 'stay'] },
      ],
    },
    en: {
      slug: 'windsurf-rental',
      title: 'Windsurf Rental in Tarifa from €80/day | La Duna',
      description: 'Windsurf gear rental on Valdevaqueros beach, Tarifa: 1 day €80, 1 week €345. Current-year Goya and Quatro gear, swap sails as the wind changes.',
      kicker: 'Gear rental · Valdevaqueros',
      h1: 'Windsurf rental in Tarifa',
      lead: 'Current-year Goya, Quatro and KT gear, right on the beach. Swap sail or board when the wind changes. The more days, the cheaper per day.',
      summary: 'Renting a complete windsurf set at La Duna Tarifa costs €80 per day, €195 for 3 consecutive days and €345 for a week. For non-consecutive days a week costs €380. You can swap sail or board as the wind changes.',
      blocks: [
        { t: 'table', title: 'Windsurf rental rates', cols: ['Duration', 'Consecutive days', 'Flexible days'], rows: [
          ['1 day', '€80', '€80'], ['2 days', '€145', '€160'], ['3 days', '€195', '€215'], ['4 days', '€245', '€270'], ['5 days', '€295', '€325'],
          ['1 week (6–7 days)', '€345', '€380'], ['8 days', '€375', '€415'], ['9 days', '€405', '€445'], ['10 days', '€435', '€480'],
          ['11 days', '€465', '€515'], ['12 days', '€495', '€545'], ['13 days', '€530', '€585'], ['14 days', '€565', '€625'],
        ], note: 'We recommend booking ahead in July and August.' },
        { t: 'includes', title: 'What the rental includes', items: ['Complete current-year board and sail', 'Swap sail or board as the wind changes (subject to availability)', 'Advice on the spot and the day’s wind', 'Rescue boat on the water'] },
        { t: 'faq', items: [
          ['Can I swap sails if the wind changes?', 'Yes, you can change sail or board during the day, subject to availability.'],
          ['What level do I need to rent?', 'We rent to all levels. If you are a beginner, the instructor will advise you on the area and the gear.'],
          ['Do I need to book?', 'In high season (July and August) we recommend booking on WhatsApp to secure your gear.'],
        ] },
        { t: 'related', items: ['windsurf', 'rentWing', 'rentKite', 'stay'] },
      ],
    },
  },

  // ───────────────────────── ALQUILER WING ─────────────────────────
  {
    id: 'rentWing',
    type: 'service',
    service: 'alquiler de wing foil',
    es: {
      slug: 'alquiler-wingfoil',
      title: 'Alquiler de wing foil en Tarifa desde 60 € | La Duna',
      description: 'Alquila material de wing foil del año en Valdevaqueros, Tarifa: 1 hora 60 €, 2 horas 70 €, 3 horas 75 €. Ala, tabla y foil completos.',
      kicker: 'Alquiler de wing foil · Valdevaqueros',
      h1: 'Alquiler de wing foil en Tarifa',
      lead: 'Equipo completo de wing foil del año —ala, tabla y foil— para practicar a tu aire. Puedes combinarlo con una clase previa para sacarle más partido.',
      summary: 'Alquilar un equipo completo de wing foil en La Duna Tarifa cuesta 60 € por 1 hora, 70 € por 2 horas y 75 € por 3 horas. El alquiler depende de tu nivel, del viento y del criterio de seguridad del instructor.',
      blocks: [
        { t: 'table', title: 'Tarifas de alquiler de wing foil', cols: ['Duración', 'Equipo completo'], rows: [['1 hora', '60 €'], ['2 horas', '70 €'], ['3 horas', '75 €']], note: 'Material del año. Ideal para progresar libremente.' },
        { t: 'text', img: 'wing-clase-2', title: 'Condiciones', html: '<p>El alquiler depende de tu nivel, de las condiciones de viento y del criterio de seguridad del instructor. ¿Aún no navegas solo? Empieza con una <a href="{{wing}}">clase de wing foil</a> y alquila después.</p>' },
        { t: 'related', items: ['wing', 'rentWindsurf', 'rentKite', 'stay'] },
      ],
    },
    en: {
      slug: 'wing-foil-rental',
      title: 'Wing Foil Rental in Tarifa from €60 | La Duna',
      description: 'Rent current-year wing foil gear on Valdevaqueros beach, Tarifa: 1 hour €60, 2 hours €70, 3 hours €75. Complete wing, board and foil.',
      kicker: 'Wing foil rental · Valdevaqueros',
      h1: 'Wing foil rental in Tarifa',
      lead: 'Complete current-year wing foil set — wing, board and foil — to practise at your own pace. Combine it with a lesson first to get more out of it.',
      summary: 'Renting a complete wing foil set at La Duna Tarifa costs €60 for 1 hour, €70 for 2 hours and €75 for 3 hours. Rental depends on your level, the wind and the instructor’s safety judgement.',
      blocks: [
        { t: 'table', title: 'Wing foil rental rates', cols: ['Duration', 'Complete set'], rows: [['1 hour', '€60'], ['2 hours', '€70'], ['3 hours', '€75']], note: 'Current-year gear. Ideal to progress freely.' },
        { t: 'text', img: 'wing-clase-2', title: 'Conditions', html: '<p>Rental depends on your level, the wind conditions and the instructor’s safety judgement. Not riding independently yet? Start with a <a href="{{wing}}">wing foil lesson</a> and rent afterwards.</p>' },
        { t: 'related', items: ['wing', 'rentWindsurf', 'rentKite', 'stay'] },
      ],
    },
  },

  // ───────────────────────── ALQUILER KITE ─────────────────────────
  {
    id: 'rentKite',
    type: 'service',
    service: 'alquiler de kitesurf',
    es: {
      slug: 'alquiler-de-kitesurf',
      title: 'Alquiler de kitesurf en Tarifa · Valdevaqueros | La Duna',
      description: 'Alquiler de material de kitesurf Cabrinha del año a pie de playa en Valdevaqueros, Tarifa. Cometas, tablas y arneses. Pide precio y disponibilidad por WhatsApp.',
      kicker: 'Alquiler de kitesurf · Valdevaqueros',
      h1: 'Alquiler de kitesurf en Tarifa',
      lead: 'Cometas y tablas Cabrinha del año en el spot de kite más conocido de Tarifa. Te aconsejamos el tamaño de cometa según el viento del día.',
      summary: 'En La Duna Tarifa alquilamos material de kitesurf Cabrinha del año a pie de playa en Valdevaqueros. El precio depende del material y de la duración: escríbenos por WhatsApp y te respondemos con precio y disponibilidad.',
      blocks: [
        { t: 'includes', title: 'Material disponible', items: ['Cometas Cabrinha del año en varios tamaños', 'Tablas twin tip', 'Arnés, casco y chaleco', 'Consejo sobre el viento y el spot'] },
        { t: 'text', img: 'kitesurf-agua', title: 'Kitesurf en Valdevaqueros', html: '<p>Valdevaqueros es la playa de referencia del kitesurf en Tarifa: arena amplia para montar y despegar, y viento casi todos los días de la temporada. Para alquilar debes navegar de forma autónoma. Si aún no es tu caso, mira nuestros <a href="{{kite}}">cursos de kitesurf</a>.</p>' },
        { t: 'related', items: ['kite', 'rentWing', 'rentWindsurf', 'stay'] },
      ],
    },
    en: {
      slug: 'kite-rental',
      title: 'Kitesurf Rental in Tarifa · Valdevaqueros | La Duna',
      description: 'Current-year Cabrinha kitesurf gear for rent right on Valdevaqueros beach, Tarifa. Kites, boards and harnesses. Ask for price and availability on WhatsApp.',
      kicker: 'Kite rental · Valdevaqueros',
      h1: 'Kitesurf rental in Tarifa',
      lead: 'Current-year Cabrinha kites and boards at Tarifa’s best-known kite spot. We advise you on kite size for the day’s wind.',
      summary: 'At La Duna Tarifa we rent current-year Cabrinha kitesurf gear right on Valdevaqueros beach. Price depends on gear and duration: message us on WhatsApp and we will reply with price and availability.',
      blocks: [
        { t: 'includes', title: 'Available gear', items: ['Current-year Cabrinha kites in several sizes', 'Twin tip boards', 'Harness, helmet and vest', 'Advice on wind and spot'] },
        { t: 'text', img: 'kitesurf-agua', title: 'Kitesurfing at Valdevaqueros', html: '<p>Valdevaqueros is Tarifa’s reference kite beach: plenty of sand to rig and launch, and wind almost every day of the season. To rent you need to ride independently. If you are not there yet, check our <a href="{{kite}}">kitesurf lessons</a>.</p>' },
        { t: 'related', items: ['kite', 'rentWing', 'rentWindsurf', 'stay'] },
      ],
    },
  },

  // ───────────────────────── WINDSURF CAMP ─────────────────────────
  {
    id: 'camp',
    type: 'service',
    service: 'windsurf camp',
    es: {
      slug: 'windsurf-camp',
      title: 'Windsurf camp en Tarifa con alojamiento | La Duna',
      description: 'Windsurf camp en Tarifa: 3 clases (6 h), alquiler gratis para practicar, videocorrección, SUP y media pensión. Con alojamiento en tienda Kampaoh o hostel desde 204 €.',
      kicker: 'Camps de windsurf · puentes y vacaciones',
      h1: 'Windsurf camp en Tarifa',
      lead: 'Clases, material, alojamiento y comidas en un solo paquete. Organizamos camps en puentes y vacaciones para principiantes y nivel intermedio, solos, en pareja o en familia.',
      summary: 'El windsurf camp de La Duna Tarifa incluye 3 clases de windsurf (6 horas), alquiler de material gratis para practicar, videocorrección, SUP en tu tiempo libre y media pensión. Con alojamiento en hostel desde 204 € o en tienda Kampaoh desde 231 € por persona.',
      blocks: [
        { t: 'includes', title: 'Qué incluye el camp', items: ['3 clases de windsurf (6 horas)', 'Alquiler de material gratis para practicar después', 'Videocorrección', 'SUP gratis en tu tiempo libre', 'Media pensión (en tiendas Kampaoh)', '3 noches de alojamiento'] },
        { t: 'text', img: 'instructor-briefing', title: 'Así es un día de camp', html: '<p>Por la mañana, clase de windsurf con tu instructor y corrección en vídeo. Por la tarde, practicas con el material de alquiler incluido o te relajas con un SUP en la laguna. Por la noche, cena con el grupo y a descansar para el día siguiente.</p>' },
        { t: 'table', title: 'Precio por persona (3 noches)', cols: ['Alojamiento', 'Precio'], rows: [
          ['Tienda Kampaoh · 1 persona', '332 €'], ['Tienda Kampaoh · 2 personas', '251 € / pers.'], ['Tienda Kampaoh · 3 personas', '242 € / pers.'], ['Tienda Kampaoh · 4 personas', '231 € / pers.'], ['Hostel, habitación compartida (sin media pensión)', '204 € / pers.'],
        ], note: 'Precios de la última edición. Fechas de los camps 2027 en breve: pregúntanos por WhatsApp.' },
        { t: 'faq', items: [
          ['¿Para qué nivel es el camp?', 'De iniciación a intermedio. Para nivel avanzado ofrecemos clases privadas dentro del camp.'],
          ['¿Pueden venir niños?', 'Sí, las familias con niños son bienvenidas y hay clases para jóvenes.'],
          ['¿Qué pasa si no hay viento?', 'Te devolvemos las clases que no se puedan dar. Con más de 35 nudos no damos clase; tenemos dos zonas para adaptarnos al viento.'],
          ['¿En qué idioma son las clases?', 'En español e inglés.'],
        ] },
        { t: 'related', items: ['windsurf', 'stay', 'summer', 'rentWindsurf'] },
      ],
    },
    en: {
      slug: 'windsurf-camp',
      title: 'Windsurf Camp in Tarifa with Accommodation | La Duna',
      description: 'Windsurf camp in Tarifa: 3 lessons (6 h), free gear rental to practise, video coaching, SUP and half board. With Kampaoh tent or hostel accommodation from €204.',
      kicker: 'Windsurf camps · long weekends & holidays',
      h1: 'Windsurf camp in Tarifa',
      lead: 'Lessons, gear, accommodation and meals in one package. We run camps over long weekends and holidays for beginners and intermediates — solo, as a couple or as a family.',
      summary: 'The La Duna Tarifa windsurf camp includes 3 windsurf lessons (6 hours), free gear rental to practise, video coaching, free SUP and half board. With hostel accommodation from €204 or a Kampaoh tent from €231 per person.',
      blocks: [
        { t: 'includes', title: 'What the camp includes', items: ['3 windsurf lessons (6 hours)', 'Free gear rental to practise afterwards', 'Video coaching', 'Free SUP in your spare time', 'Half board (Kampaoh tents)', '3 nights’ accommodation'] },
        { t: 'text', img: 'instructor-briefing', title: 'A day at camp', html: '<p>In the morning, a windsurf lesson with your instructor and video coaching. In the afternoon, practise with the included rental gear or chill on a SUP in the lagoon. In the evening, dinner with the group and rest for the next day.</p>' },
        { t: 'table', title: 'Price per person (3 nights)', cols: ['Accommodation', 'Price'], rows: [
          ['Kampaoh tent · 1 person', '€332'], ['Kampaoh tent · 2 people', '€251 pp'], ['Kampaoh tent · 3 people', '€242 pp'], ['Kampaoh tent · 4 people', '€231 pp'], ['Hostel, shared room (no half board)', '€204 pp'],
        ], note: 'Prices from the latest edition. 2027 camp dates coming soon: ask us on WhatsApp.' },
        { t: 'faq', items: [
          ['What level is the camp for?', 'Beginner to intermediate. Advanced riders can add private lessons.'],
          ['Can kids join?', 'Yes, families with children are welcome and there are lessons for young riders.'],
          ['What if there is no wind?', 'Lessons that cannot go ahead are refunded. We do not teach above 35 knots; we have two spots to adapt to the wind.'],
          ['What language are lessons in?', 'Spanish and English.'],
        ] },
        { t: 'related', items: ['windsurf', 'stay', 'summer', 'rentWindsurf'] },
      ],
    },
  },

  // ───────────────────────── CAMPAMENTO VERANO ─────────────────────────
  {
    id: 'summer',
    type: 'service',
    service: 'campamento de verano',
    es: {
      slug: 'campamentoverano',
      title: 'Campamento de verano en Tarifa (7–10 años) | La Duna',
      description: 'Campamento de verano en Tarifa para niños de 7 a 10 años: kayak, SUP, surf, skate y slackline. Julio y agosto, de 10:30 a 14:00. 100 € por semana o 25 € por día.',
      kicker: 'Campamento de verano · julio y agosto',
      h1: 'Campamento de verano en Tarifa',
      lead: 'Mañanas al aire libre para niños de 7 a 10 años: deportes de agua, skate y juegos en la naturaleza, con monitores que conocen el mar de Tarifa.',
      summary: 'El campamento de verano de La Duna Tarifa es para niños de 7 a 10 años, en julio y agosto, de 10:30 a 14:00 (hasta las 15:00 con comida). Cuesta 100 € por semana o 25 € por día suelto. Actividades: kayak, SUP, surf, skate, slackline y piscina.',
      blocks: [
        { t: 'prices', title: 'Precios', items: [
          { name: 'Semana completa', meta: 'Lunes a viernes · 10:30–14:00', price: 100, unit: 'por semana', featured: true, badge: 'Mejor precio', features: ['Kayak, SUP y surf', 'Skate en mini rampa y slackline', 'Piscina, excursiones y juegos'] },
          { name: 'Día suelto', meta: '10:30–14:00', price: 25, unit: 'por día', features: ['Ideal para probar', 'Mismas actividades', 'Comida opcional (hasta 15:00)'] },
        ] },
        { t: 'text', img: 'nino-arena', title: 'Información práctica', html: '<p><strong>Lugar:</strong> Camping Tarifa, N-340 km 78,870, 11380 Tarifa.<br><strong>Fechas:</strong> de mediados de julio a finales de agosto (fechas 2027 por confirmar).<br><strong>Comida:</strong> no incluida; se puede comer en el camping por un pequeño suplemento.</p><p>Por seguridad, informa siempre de medicación, alergias, intolerancias o necesidades especiales al inscribir a tu hijo o hija.</p>' },
        { t: 'faq', items: [
          ['¿Mi hijo necesita saber nadar?', 'Sí, recomendamos que sepa nadar. Siempre usan chaleco en las actividades de agua.'],
          ['¿Puedo apuntarlo solo unos días?', 'Sí, por 25 € al día.'],
          ['¿Incluye comida?', 'No, pero se puede comer en el camping y recoger a los niños a las 15:00.'],
        ] },
        { t: 'related', items: ['sup', 'windsurf', 'camp', 'stay'] },
      ],
    },
    en: {
      slug: 'summer-camp',
      title: 'Kids Summer Camp in Tarifa (Ages 7–10) | La Duna',
      description: 'Summer camp in Tarifa for kids aged 7–10: kayak, SUP, surf, skate and slackline. July and August, 10:30–14:00. €100 per week or €25 per day.',
      kicker: 'Kids summer camp · July & August',
      h1: 'Kids summer camp in Tarifa',
      lead: 'Outdoor mornings for kids aged 7 to 10: water sports, skating and nature games, with instructors who know Tarifa’s sea.',
      summary: 'The La Duna Tarifa summer camp is for kids aged 7 to 10, in July and August, 10:30–14:00 (until 15:00 with lunch). It costs €100 per week or €25 per single day. Activities: kayak, SUP, surf, skate, slackline and swimming pool.',
      blocks: [
        { t: 'prices', title: 'Prices', items: [
          { name: 'Full week', meta: 'Monday–Friday · 10:30–14:00', price: 100, unit: 'per week', featured: true, badge: 'Best price', features: ['Kayak, SUP and surf', 'Mini-ramp skate and slackline', 'Pool, excursions and games'] },
          { name: 'Single day', meta: '10:30–14:00', price: 25, unit: 'per day', features: ['Great to try it out', 'Same activities', 'Optional lunch (until 15:00)'] },
        ] },
        { t: 'text', img: 'nino-arena', title: 'Practical information', html: '<p><strong>Location:</strong> Camping Tarifa, N-340 km 78.870, 11380 Tarifa.<br><strong>Dates:</strong> mid-July to end of August (2027 dates to be confirmed).<br><strong>Lunch:</strong> not included; available at the campsite for a small fee.</p><p>For safety, always tell us about medication, allergies, intolerances or special needs when you sign up your child.</p>' },
        { t: 'faq', items: [
          ['Does my child need to swim?', 'Yes, we recommend it. Kids always wear a vest during water activities.'],
          ['Can I book just a few days?', 'Yes, at €25 per day.'],
          ['Is lunch included?', 'No, but kids can have lunch at the campsite and be picked up at 15:00.'],
        ] },
        { t: 'related', items: ['sup', 'windsurf', 'camp', 'stay'] },
      ],
    },
  },

  // ───────────────────────── ADAPTADO ─────────────────────────
  {
    id: 'adaptive',
    type: 'service',
    service: 'windsurf y kitesurf adaptado',
    es: {
      slug: 'windsurf-kitesurf-adaptado',
      title: 'Windsurf y kitesurf adaptado en Tarifa | La Duna',
      description: 'Escuela adaptada en Tarifa: clases de windsurf y kitesurf para personas con discapacidad, con material e instructores preparados. Cuéntanos tu caso por WhatsApp.',
      kicker: 'Escuela adaptada · Valdevaqueros',
      h1: 'Windsurf y kitesurf adaptado en Tarifa',
      lead: 'Creemos que el viento es para todos. Adaptamos clases de windsurf y kitesurf a personas con discapacidad física, sensorial o intelectual, con calma y en grupos muy reducidos.',
      summary: 'La Duna Tarifa ofrece clases adaptadas de windsurf y kitesurf para personas con discapacidad, en la laguna de Valdevaqueros y con instructores preparados. Cada clase se diseña según la persona: escríbenos por WhatsApp para preparar la tuya.',
      blocks: [
        { t: 'steps', title: 'Cómo preparamos tu clase', items: [
          ['Hablamos contigo', 'Nos cuentas tus necesidades, experiencia y objetivos.'],
          ['Adaptamos el plan', 'Elegimos material, zona (laguna o mar) y número de instructores.'],
          ['Disfrutas del agua', 'Clase a tu ritmo, con lancha y apoyo en todo momento.'],
        ] },
        { t: 'text', img: 'adaptado-windsurf', title: 'Material adaptado', html: '<p>Usamos tablas de windsurf con asiento, cometas y barras adaptadas y la lancha como apoyo. La laguna de Valdevaqueros, con agua plana y poco profunda, es el lugar ideal para empezar con total seguridad.</p>' },
        { t: 'related', items: ['windsurf', 'kite', 'sup', 'contact'] },
      ],
    },
    en: {
      slug: 'adaptive-watersports',
      title: 'Adaptive Windsurf & Kitesurf in Tarifa | La Duna',
      description: 'Adaptive school in Tarifa: windsurf and kitesurf lessons for people with disabilities, with suitable gear and trained instructors. Tell us your needs on WhatsApp.',
      kicker: 'Adaptive school · Valdevaqueros',
      h1: 'Adaptive windsurf and kitesurf in Tarifa',
      lead: 'We believe the wind is for everyone. We adapt windsurf and kitesurf lessons for people with physical, sensory or intellectual disabilities, calmly and in very small groups.',
      summary: 'La Duna Tarifa offers adaptive windsurf and kitesurf lessons for people with disabilities, in the Valdevaqueros lagoon with trained instructors. Every lesson is designed around the person: message us on WhatsApp to plan yours.',
      blocks: [
        { t: 'steps', title: 'How we plan your lesson', items: [
          ['We talk', 'You tell us about your needs, experience and goals.'],
          ['We adapt', 'We choose gear, area (lagoon or sea) and number of instructors.'],
          ['You enjoy the water', 'A lesson at your pace, with boat and support at all times.'],
        ] },
        { t: 'text', img: 'adaptado-windsurf', title: 'Adapted equipment', html: '<p>We use windsurf boards with a seat, adapted kites and bars, and the boat for support. The Valdevaqueros lagoon, with flat and shallow water, is the ideal place to start safely.</p>' },
        { t: 'related', items: ['windsurf', 'kite', 'sup', 'contact'] },
      ],
    },
  },

  // ───────────────────────── ALOJAMIENTO ─────────────────────────
  {
    id: 'stay',
    type: 'service',
    service: 'alojamiento',
    es: {
      slug: 'alojamiento-tarifa',
      title: 'Alojamiento en Tarifa cerca de Valdevaqueros | La Duna',
      description: 'Dónde dormir en Tarifa para tus vacaciones de windsurf o kite: ático Laduna con vistas al mar, bungalows en camping, hotel a 3 km de la escuela y apartamentos.',
      kicker: 'Alojamiento · Tarifa',
      h1: 'Alojamiento en Tarifa para tus vacaciones de windsurf',
      lead: 'Te ayudamos a encontrar el mejor sitio según la época, el presupuesto y si vienes solo, en pareja o en familia. Combina clases y alojamiento y no te preocupes de nada.',
      summary: 'La Duna Tarifa te ayuda a encontrar alojamiento cerca de la escuela de Valdevaqueros: el ático Laduna con vistas al mar, bungalows en camping, el Hotel Dulce Nombre a 3 km, y casas y apartamentos en Tarifa. Escríbenos y te proponemos la mejor opción.',
      blocks: [
        { t: 'features', title: 'Opciones que recomendamos', items: [
          ['Ático Laduna con vistas al mar', 'Nuestro propio alojamiento, ideal para parejas o familias. Pregúntanos disponibilidad.'],
          ['Bungalows en camping', 'Cerca de la playa, cómodos y económicos para grupos y familias.'],
          ['Hotel Dulce Nombre', 'Habitaciones y apartamentos a 3 km de la escuela.'],
          ['Casas y apartamentos en Tarifa', 'Para estancias largas, en el pueblo o junto a la costa.'],
        ] },
        { t: 'text', img: 'laguna-aerea', title: 'Duerme cerca del agua', html: '<p>Valdevaqueros está a 10 minutos de Tarifa. Si te alojas cerca de la escuela, aprovechas cada racha de viento sin coger el coche. Escríbenos con tus fechas y te decimos qué opción encaja mejor.</p>' },
        { t: 'related', items: ['camp', 'windsurf', 'wing', 'contact'] },
      ],
    },
    en: {
      slug: 'accommodation-tarifa',
      title: 'Accommodation in Tarifa near Valdevaqueros | La Duna',
      description: 'Where to stay in Tarifa for your windsurf or kite holiday: Laduna penthouse with sea views, campsite bungalows, a hotel 3 km from the school and apartments.',
      kicker: 'Where to stay · Tarifa',
      h1: 'Accommodation in Tarifa for your windsurf holiday',
      lead: 'We help you find the best place for the season, your budget and whether you travel solo, as a couple or with family. Combine lessons and accommodation and relax.',
      summary: 'La Duna Tarifa helps you find accommodation near the Valdevaqueros school: the Laduna penthouse with sea views, campsite bungalows, Hotel Dulce Nombre 3 km away, and houses and apartments in Tarifa. Message us and we will suggest the best option.',
      blocks: [
        { t: 'features', title: 'Options we recommend', items: [
          ['Laduna penthouse with sea views', 'Our own accommodation, ideal for couples or families. Ask us for availability.'],
          ['Campsite bungalows', 'Close to the beach, comfortable and affordable for groups and families.'],
          ['Hotel Dulce Nombre', 'Rooms and apartments 3 km from the school.'],
          ['Houses and apartments in Tarifa', 'For longer stays, in town or by the coast.'],
        ] },
        { t: 'text', img: 'laguna-aerea', title: 'Stay close to the water', html: '<p>Valdevaqueros is 10 minutes from Tarifa. Staying close to the school means you catch every gust without taking the car. Send us your dates and we will tell you which option fits best.</p>' },
        { t: 'related', items: ['camp', 'windsurf', 'wing', 'contact'] },
      ],
    },
  },

  // ───────────────────────── GRUPOS ─────────────────────────
  {
    id: 'groups',
    type: 'service',
    service: 'grupos y empresas',
    es: {
      slug: 'grupos-y-empresas',
      title: 'Team building y grupos en Tarifa: deportes de agua | La Duna',
      description: 'Team building, eventos de empresa, colegios y universidades en Tarifa: windsurf, wing foil, SUP y bar de playa en Valdevaqueros. Presupuesto a medida por WhatsApp.',
      kicker: 'Empresas, colegios y grupos',
      h1: 'Team building y actividades para grupos en Tarifa',
      lead: 'Un día en la playa que tu equipo no olvidará. Organizamos actividades de windsurf, wing foil, SUP y juegos en la laguna para empresas, colegios, universidades y despedidas.',
      summary: 'La Duna Tarifa organiza team building y actividades de grupo en la playa de Valdevaqueros: windsurf, wing foil, SUP y juegos en la laguna, con bar de playa y monitores bilingües. Precio a medida según número de personas y duración.',
      blocks: [
        { t: 'features', title: 'Para quién', items: [
          ['Empresas', 'Team building, incentivos y eventos con actividad en el agua y comida en el bar de playa.'],
          ['Colegios y universidades', 'Grupos escolares y de Erasmus con monitores titulados y seguro.'],
          ['Grupos de amigos y familias', 'Cumpleaños, despedidas o reuniones familiares.'],
        ] },
        { t: 'text', img: 'grupo-playa', title: 'Cómo organizamos tu evento', html: '<p>Nos cuentas cuántas personas sois, la fecha y el objetivo del día. Te proponemos un programa con una o varias actividades, monitores bilingües, seguro y, si quieres, comida en el bar de playa. Adaptamos el plan a la previsión de viento.</p>' },
        { t: 'related', items: ['sup', 'windsurf', 'stay', 'contact'] },
      ],
    },
    en: {
      slug: 'groups-and-corporate',
      title: 'Team Building & Group Activities in Tarifa | La Duna',
      description: 'Team building, corporate events, schools and universities in Tarifa: windsurf, wing foil, SUP and a beach bar on Valdevaqueros. Custom quote on WhatsApp.',
      kicker: 'Companies, schools and groups',
      h1: 'Team building and group activities in Tarifa',
      lead: 'A beach day your team will remember. We organise windsurf, wing foil, SUP and lagoon games for companies, schools, universities and celebrations.',
      summary: 'La Duna Tarifa organises team building and group activities on Valdevaqueros beach: windsurf, wing foil, SUP and lagoon games, with a beach bar and bilingual instructors. Custom pricing based on group size and duration.',
      blocks: [
        { t: 'features', title: 'Who it is for', items: [
          ['Companies', 'Team building, incentives and events with water activities and food at the beach bar.'],
          ['Schools and universities', 'School and Erasmus groups with certified instructors and insurance.'],
          ['Friends and families', 'Birthdays, stag and hen parties or family get-togethers.'],
        ] },
        { t: 'text', img: 'grupo-playa', title: 'How we organise your event', html: '<p>Tell us your group size, date and goal for the day. We propose a programme with one or more activities, bilingual instructors, insurance and, if you like, food at the beach bar. We adapt the plan to the wind forecast.</p>' },
        { t: 'related', items: ['sup', 'windsurf', 'stay', 'contact'] },
      ],
    },
  },

  // ───────────────────────── CONTACTO ─────────────────────────
  {
    id: 'contact',
    type: 'contact',
    es: {
      slug: 'contacto',
      title: 'Contacto y cómo llegar · Valdevaqueros, Tarifa | La Duna',
      description: 'Contacta con La Duna Tarifa: WhatsApp y teléfono +34 669 86 55 55. Playa de Valdevaqueros, N-340 km 74, Tarifa. Abierto de marzo a noviembre, 10:30–19:30.',
      kicker: 'Contacto',
      h1: 'Contacto y cómo llegar',
      lead: 'La forma más rápida de reservar es WhatsApp: te respondemos normalmente en menos de una hora durante el horario de la escuela.',
      blocks: [],
    },
    en: {
      slug: 'contact',
      title: 'Contact & Directions · Valdevaqueros, Tarifa | La Duna',
      description: 'Contact La Duna Tarifa: WhatsApp and phone +34 669 86 55 55. Valdevaqueros beach, N-340 km 74, Tarifa. Open March to November, 10:30–19:30.',
      kicker: 'Contact',
      h1: 'Contact and directions',
      lead: 'The fastest way to book is WhatsApp: we usually reply within an hour during school hours.',
      blocks: [],
    },
  },

  // ───────────────────────── LEGAL ─────────────────────────
  {
    id: 'legal',
    type: 'legal',
    es: { slug: 'aviso-legal', title: 'Aviso legal | La Duna Tarifa', description: 'Aviso legal de tarifawindsurfing.es, web de La Duna Tarifa.', h1: 'Aviso legal', html: 'legal' },
    en: { slug: 'legal-notice', title: 'Legal notice | La Duna Tarifa', description: 'Legal notice for tarifawindsurfing.com, website of La Duna Tarifa.', h1: 'Legal notice', html: 'legal' },
  },
  {
    id: 'privacy',
    type: 'legal',
    es: { slug: 'politica-de-privacidad', title: 'Política de privacidad | La Duna Tarifa', description: 'Cómo trata La Duna Tarifa tus datos personales.', h1: 'Política de privacidad', html: 'privacy' },
    en: { slug: 'privacy-policy', title: 'Privacy policy | La Duna Tarifa', description: 'How La Duna Tarifa handles your personal data.', h1: 'Privacy policy', html: 'privacy' },
  },
  {
    id: 'cookies',
    type: 'legal',
    es: { slug: 'politica-de-cookies', title: 'Política de cookies | La Duna Tarifa', description: 'Qué cookies usa esta web y cómo gestionarlas.', h1: 'Política de cookies', html: 'cookies' },
    en: { slug: 'cookie-policy', title: 'Cookie policy | La Duna Tarifa', description: 'Which cookies this website uses and how to manage them.', h1: 'Cookie policy', html: 'cookies' },
  },
];

// Oude URL's → nieuwe pagina-id (301). Bron: GSC-export .es en navigatie huidige .com.
export const redirects = {
  es: {
    '/wingfoil': 'wing',
    '/windsurf': 'windsurf',
    '/kitesurf': 'kite',
    '/clases-windsurf-tarifa-2x1': 'windsurf',
    '/kitesurf-adaptad-windsurf': 'adaptive',
    '/camp-sem-y-puent': 'camp',
    '/ubicacion': 'contact',
    '/trabaja-con-nosotros': 'contact',
    '/tarifa-alojamiento-atico-vistas-al-mar': 'stay',
    '/laduna-atico-form': 'stay',
    '/poltica-de-cookies': 'cookies',
    '/poltica-de-privacidad': 'privacy',
  },
  en: {
    '/wingfoil-curso-wing-foil': 'wing',
    '/kitesurf-course': 'kite',
    '/accomodation-tarifa': 'stay',
  },
};
