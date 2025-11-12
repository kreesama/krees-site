// Header: cacher en scroll down, réafficher en scroll up
let lastY = window.scrollY;
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 80) header.classList.add('hide');
  else header.classList.remove('hide');
  lastY = y;
});

// Menus déroulants fiables au survol et au focus
document.querySelectorAll('.has-sub').forEach(li=>{
  const btn = li.querySelector('.menu-btn');
  const panel = li.querySelector('.submenu');
  const open = () => { panel.style.display='block'; btn.setAttribute('aria-expanded','true'); };
  const close = () => { panel.style.display='none'; btn.setAttribute('aria-expanded','false'); };
  btn.addEventListener('mouseenter', open);
  btn.addEventListener('focus', open);
  li.addEventListener('mouseleave', close);
  panel.addEventListener('mouseenter', open);
  panel.addEventListener('mouseleave', close);
  // Ouverture au clic pour mobile
  btn.addEventListener('click', (e)=>{ e.preventDefault(); (panel.style.display==='block'?close():open()); });
});

// Smooth scroll avec offset du header
const offset = 76;
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({top:y, behavior:'smooth'});
  });
});
