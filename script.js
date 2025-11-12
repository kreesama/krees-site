// Header hide on scroll down show on scroll up
let lastY = window.scrollY;
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 80) header.classList.add('hide');
  else header.classList.remove('hide');
  lastY = y;
});

// Keep mega menu open while moving into it
document.querySelectorAll('.has-sub').forEach(li=>{
  const btn = li.querySelector('.menu-btn');
  const panel = li.querySelector('.mega');

  let over = false;
  const open = () => { panel.style.display='grid'; btn.setAttribute('aria-expanded','true'); };
  const close = () => { panel.style.display='none'; btn.setAttribute('aria-expanded','false'); };

  btn.addEventListener('mouseenter', open);
  li.addEventListener('mouseleave', ()=>{ if(!over) close(); });

  panel.addEventListener('mouseenter', ()=>{ over = true; open(); });
  panel.addEventListener('mouseleave', ()=>{ over = false; close(); });
});
