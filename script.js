// script.js

// Header hide on scroll down show on scroll up
let lastY = window.scrollY;
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > lastY && y > 80) header.style.transform = 'translateY(-100%)';
  else header.style.transform = 'translateY(0)';
  lastY = y;
});

// Accordéon
document.querySelectorAll('.acc').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const panel = btn.nextElementSibling;
    const open = panel.style.display === 'block';
    document.querySelectorAll('.acc-panel').forEach(p=>p.style.display='none');
    if(!open) panel.style.display='block';
  });
});

// Carousels pointer follow on desktop keep native touch scroll on mobile
const isTouch = matchMedia('(pointer: coarse)').matches;
document.querySelectorAll('[data-carousel]').forEach(rail=>{
  if(!isTouch){
    rail.addEventListener('mousemove',(e)=>{
      const rect = rail.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      const target = (rail.scrollWidth - rail.clientWidth) * ratio;
      rail.scrollTo({left:target, behavior:'smooth'});
    });
  }
});

// Mobile drawer
const drawer = document.getElementById('mobileDrawer');
const burger = document.getElementById('menuToggle');
const body = document.body;

function openDrawer(){
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  body.style.overflow='hidden';
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  body.style.overflow='';
}
burger.addEventListener('click', ()=> drawer.classList.contains('open') ? closeDrawer() : openDrawer());
drawer.addEventListener('click', e=>{ if(e.target === drawer) closeDrawer(); });
document.querySelectorAll('.drawer a').forEach(a=> a.addEventListener('click', closeDrawer));
