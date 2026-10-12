// Mobiel menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('nav.main').classList.toggle('open');
});

// Prototype: formulier toont bevestiging in plaats van te verzenden
document.querySelectorAll('form.quote').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    form.parentElement.querySelector('.form-done')?.classList.add('show');
  });
});

// Pakketknop vult het soort feest/pakket in het formulier
document.querySelectorAll('[data-package]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const field = document.querySelector('#bericht');
    if (field) field.value = 'Ik heb interesse in de ' + btn.dataset.package + '.';
  });
});

// CRO-uitleg tonen/verbergen (presentatiemodus voor de klant)
const toggle = document.createElement('button');
toggle.className = 'cro-toggle';
toggle.type = 'button';
toggle.textContent = 'Toon CRO-uitleg';
toggle.addEventListener('click', () => {
  const on = document.body.classList.toggle('show-cro');
  toggle.textContent = on ? 'Verberg CRO-uitleg' : 'Toon CRO-uitleg';
});
document.body.appendChild(toggle);

// Hero-slideshow: crossfade elke 6 seconden, met bolletjes en bijschrift
document.querySelectorAll('.hero').forEach((hero) => {
  const slides = [...hero.querySelectorAll('.hero-slides .slide')];
  if (slides.length < 2) return;
  const dots = hero.querySelector('.hero-dots');
  const caption = hero.querySelector('.hero-caption');
  let current = 0;
  let timer;
  const show = (i) => {
    slides[current].classList.remove('active');
    dots.children[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots.children[current].classList.add('active');
    if (caption) caption.textContent = slides[current].dataset.caption;
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(current + 1), 6000); };
  slides.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Foto ' + (i + 1) + ': ' + s.dataset.caption);
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => { show(i); start(); });
    dots.appendChild(b);
  });
  // Afbeeldingen vooraf laden zodat de overgang niet hapert
  slides.forEach((s) => { const m = s.style.getPropertyValue('--img').match(/url\('(.+)'\)/); if (m) new Image().src = m[1]; });
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', start);
  start();
});
