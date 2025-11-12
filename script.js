// Menu accessibility open on click and keep open on hover
document.querySelectorAll('.menu').forEach(menu=>{
  const btn = menu.querySelector('.menu-btn');
  const panel = menu.querySelector('.menu-panel');

  const open = v => { menu.classList.toggle('open', v); btn.setAttribute('aria-expanded', String(v)); };

  btn.addEventListener('click', e => { e.stopPropagation(); open(!menu.classList.contains('open')); });
  menu.addEventListener('mouseenter', ()=>open(true));
  menu.addEventListener('mouseleave', ()=>open(false));
});

// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
