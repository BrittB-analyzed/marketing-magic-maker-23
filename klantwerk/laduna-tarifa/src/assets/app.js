// La Duna Tarifa – consent mode v2, WhatsApp-boekformulier, conversie-events. Geen dependencies.
(() => {
  const GA_ID = '__GA_ID__';
  const KEY = 'ld_consent';
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Consent mode v2: alles standaard geweigerd tot de bezoeker kiest.
  gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });

  let loaded = false;
  function loadGA() {
    if (loaded || !GA_ID || GA_ID.startsWith('__')) return;
    loaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || 'null');
      return v && Date.now() - v.t < 365 * 864e5 ? v.c : null;
    } catch { return null; }
  }
  function apply(choice) {
    gtag('consent', 'update', { analytics_storage: choice, ad_storage: choice, ad_user_data: choice, ad_personalization: choice });
    if (choice === 'granted') loadGA();
  }

  const track = (name, params = {}) => gtag('event', name, { page_type: document.body.dataset.page, ...params });

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.cookie');
    const saved = read();
    if (saved) apply(saved); else if (banner) banner.hidden = false;

    document.addEventListener('click', (e) => {
      const c = e.target.closest('[data-consent]');
      if (c) {
        const choice = c.dataset.consent;
        try { localStorage.setItem(KEY, JSON.stringify({ c: choice, t: Date.now() })); } catch {}
        apply(choice);
        banner.hidden = true;
        return;
      }
      if (e.target.closest('[data-cookie-settings]')) { banner.hidden = false; return; }

      const t = e.target.closest('[data-track]');
      if (t) track(t.dataset.track === 'phone' ? 'click_call' : 'click_whatsapp', { location: t.closest('header,main,footer,.sticky-cta')?.className || '' });

      const pick = e.target.closest('[data-pick]');
      if (pick) {
        const field = document.querySelector('.booking-form [name="pick"]');
        if (field) field.value = pick.dataset.pick;
        track('select_package', { item_name: pick.dataset.pick });
      }

      // Dropdowns in het hoofdmenu (touch + toetsenbord; hover werkt via CSS)
      const trig = e.target.closest('.nav-trigger');
      document.querySelectorAll('.has-sub.open').forEach((li) => {
        if (!trig || li !== trig.parentElement) { li.classList.remove('open'); li.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); }
      });
      if (trig) {
        const li = trig.parentElement, open = !li.classList.contains('open');
        li.classList.toggle('open', open); li.classList.toggle('closed', !open);
        trig.setAttribute('aria-expanded', String(open));
      }

      // Mobiel menu sluiten na klik
      const mob = document.querySelector('.nav-mobile[open]');
      if (mob && e.target.closest('.nav-mobile a')) mob.open = false;
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const li = document.querySelector('.has-sub.open, .has-sub:focus-within');
      if (li) { li.classList.remove('open'); li.classList.add('closed'); const t = li.querySelector('.nav-trigger'); t.setAttribute('aria-expanded', 'false'); t.focus(); }
    });
    document.querySelectorAll('.has-sub').forEach((li) => {
      li.addEventListener('mouseleave', () => li.classList.remove('closed'));
      li.addEventListener('mouseenter', () => document.querySelectorAll('.has-sub.open').forEach((o) => {
        if (o !== li) { o.classList.remove('open'); o.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); }
      }));
    });

    const form = document.querySelector('.booking-form');
    if (form) form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const es = form.dataset.lang === 'es';
      const lines = [
        `${form.dataset.msg}: ${d.get('activity')}${d.get('pick') ? ` (${d.get('pick')})` : ''}`,
        d.get('date') ? `${es ? 'Fecha' : 'Date'}: ${new Date(d.get('date')).toLocaleDateString(es ? 'es-ES' : 'en-GB')}` : '',
        `${es ? 'Personas' : 'People'}: ${d.get('people') || 1}`,
        `${es ? 'Nivel' : 'Level'}: ${d.get('level')}`,
      ].filter(Boolean);
      track('generate_lead', { method: 'whatsapp_form', activity: d.get('activity') });
      window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    });
  });
})();
