/* ========= KREES SCRIPT DYNAMIQUE ========= */

const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));

$$('[data-dropdown]').forEach(drop => {
  const trigger = drop.querySelector('[data-trigger]');
  const panel = drop.querySelector('[data-panel]');
  if (!trigger || !panel) return;

  const open = () => { panel.classList.add('open'); trigger.setAttribute('aria-expanded','true'); };
  const close = () => { panel.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); };

  trigger.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    const isOpen = panel.classList.contains('open');
    $$('[data-panel].open').forEach(p => p !== panel && p.classList.remove('open'));
    if (isOpen) close(); else open();
  });

  drop.addEventListener('mouseenter', open);
  drop.addEventListener('mouseleave', close);
});

document.addEventListener('click', () => {
  $$('[data-panel].open').forEach(p => p.classList.remove('open'));
});

window.addEventListener('load', () => {
  const hero = $('.hero-inner');
  if(hero){
    hero.style.opacity = 0;
    hero.style.transform = "translateY(18px)";
    requestAnimationFrame(()=>{
      hero.style.transition = "opacity .9s ease, transform .9s ease";
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
    });
  }
});

const revealEls = $$('[data-reveal], .fade, .footer-inner');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('reveal','visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('reveal','visible'));
}

$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const tgt = document.querySelector(id);
    if (!tgt) return;
    e.preventDefault();
    const top = tgt.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior:'smooth' });
  });
});

const toTop = $('#toTop');
if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const onTopBtn = () => toTop.classList.toggle('show', window.scrollY > 600);
  document.addEventListener('scroll', onTopBtn, { passive: true });
  window.addEventListener('load', onTopBtn);
}

$$('[data-wa]').forEach(a => {
  a.addEventListener('click', e => {
    const num = a.getAttribute('data-wa') || '+33663841018';
    const msg = encodeURIComponent('Hello Krees je viens du site');
    a.href = `https://wa.me/${num.replace(/\D/g,'')}?text=${msg}`;
  });
});
$$('[data-ig]').forEach(a => {
  a.addEventListener('click', e => { a.href = 'https://www.instagram.com/kreesama'; });
});

$$('a[target="_blank"]').forEach(a => { if (!a.rel) a.rel = 'noopener'; });
