// script.js  — header dynamique + liens sûrs + aide UX
(() => {
  // Header hide on scroll down / show on scroll up
  const header = document.getElementById('siteHeader');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) header.classList.add('hide');
    else header.classList.remove('hide');
    lastY = y;
  }, {passive:true});

  // Keep dropdown open while moving towards it (hover already but add focus)
  document.querySelectorAll('.has-dd > a, .dropdown a').forEach(el=>{
    el.addEventListener('focus', e => e.currentTarget.closest('.has-dd')?.classList.add('focus'));
    el.addEventListener('blur',  e => e.currentTarget.closest('.has-dd')?.classList.remove('focus'));
  });

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();
