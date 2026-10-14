// Prototype Steinbrückner Nederland - interactie
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // Mobiel menu
  const toggle = $('.menu-toggle'), nav = $('nav.main');
  if (toggle) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Keuzehulp: DBA of EBA
  const chooser = $('#keuzehulp-form');
  if (chooser) chooser.addEventListener('change', () => {
    const fleet = chooser.elements.vloot.value, mode = chooser.elements.bediening.value;
    if (!fleet || !mode) return;
    let key = 'combi';
    if (fleet === 'groot' && mode === 'auto') key = 'dba';
    else if (fleet === 'klein' && mode === 'hand') key = 'eba';
    else if (fleet === 'groot' && mode === 'hand') key = 'combi';
    else if (fleet === 'klein' && mode === 'auto') key = 'dba-klein';
    else if (fleet === 'midden') key = mode === 'auto' ? 'dba' : 'eba';
    $$('.result').forEach(r => r.classList.toggle('show', r.dataset.result === key));
  });

  // Wasbeurt-calculator: kosten van extern wassen per jaar
  const calc = $('#calc');
  if (calc) {
    const fmt = n => '€ ' + Math.round(n).toLocaleString('nl-NL');
    const upd = () => {
      const v = +calc.elements.voertuigen.value, w = +calc.elements.wasbeurten.value, p = +calc.elements.prijs.value, m = +calc.elements.minuten.value;
      $$('[data-val]', calc).forEach(el => {
        const n = el.dataset.val; el.textContent = n === 'prijs' ? fmt(calc.elements[n].value) : calc.elements[n].value;
      });
      const jaarWas = v * w * 12;
      const extern = jaarWas * p;
      const uren = jaarWas * m / 60;
      $('#c-was').textContent = jaarWas.toLocaleString('nl-NL');
      $('#c-kosten').textContent = fmt(extern);
      $('#c-uren').textContent = Math.round(uren).toLocaleString('nl-NL');
      $('#c-advies').textContent = v >= 20 ? 'Met deze vlootomvang is een DBA portaalwasstraat meestal de logische keuze.' : 'Bij deze vlootomvang is een EBA mobiele wasborstel vaak de slimste instap.';
    };
    calc.addEventListener('input', upd); upd();
  }

  // Meerstaps offerteformulier
  $$('.multistep').forEach(form => {
    const steps = $$('.fstep', form), bars = $$('.progress span', form);
    let i = 0;
    const show = n => {
      i = n; steps.forEach((s, k) => s.classList.toggle('active', k === i));
      bars.forEach((b, k) => b.classList.toggle('on', k <= i));
    };
    form.addEventListener('click', e => {
      if (e.target.matches('[data-next]')) {
        const fields = $$('input,select,textarea', steps[i]);
        if (fields.every(f => f.reportValidity())) show(i + 1);
      }
      if (e.target.matches('[data-prev]')) show(i - 1);
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.querySelector('.form-body').style.display = 'none';
      form.querySelector('.form-done').style.display = 'block';
    });
    // Voorselectie via ?oplossing=dba|eba
    const pre = new URLSearchParams(location.search).get('oplossing');
    if (pre && form.elements.oplossing) form.elements.oplossing.value = pre;
    const ond = new URLSearchParams(location.search).get('onderwerp');
    if (ond && form.elements.onderwerp) form.elements.onderwerp.value = ond;
    show(0);
  });

  // Berichten-tabs
  const tabs = $$('.tabs button');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.setAttribute('aria-selected', x === t));
    const f = t.dataset.filter;
    $$('[data-type]').forEach(p => p.hidden = f !== 'alle' && p.dataset.type !== f);
  }));
  const hash = location.hash.replace('#', '');
  const hit = tabs.find(t => t.dataset.filter === hash);
  if (hit) hit.click();

  // CRO-annotaties (alleen prototype)
  const cro = $$('[data-cro]');
  if (cro.length) {
    const btn = document.createElement('button');
    btn.className = 'cro-toggle'; btn.textContent = 'Toon CRO-toelichting';
    document.body.appendChild(btn);
    let tip;
    btn.addEventListener('click', () => {
      const on = document.body.classList.toggle('show-cro');
      btn.textContent = on ? 'Verberg CRO-toelichting' : 'Toon CRO-toelichting';
    });
    cro.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (!document.body.classList.contains('show-cro')) return;
        tip = document.createElement('div'); tip.className = 'cro-tip'; tip.textContent = el.dataset.cro;
        document.body.appendChild(tip);
        const r = el.getBoundingClientRect();
        tip.style.left = Math.min(r.left + scrollX, innerWidth - 320) + 'px';
        tip.style.top = (r.top + scrollY - tip.offsetHeight - 10) + 'px';
      });
      el.addEventListener('mouseleave', () => tip && tip.remove());
    });
  }
})();
