// script.js  remplacer tout le fichier
// Sticky header hide on scroll down, show on scroll up
let lastY = window.scrollY;
const header = document.querySelector('[data-sticky]');
const clamp = (n, min, max)=>Math.max(min, Math.min(n, max));
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('hide', y > lastY && y > 100);
  lastY = y;
});

// Horizontal scrollers  pointer moves and wheel
document.querySelectorAll('[data-scroller]').forEach(scroller=>{
  scroller.addEventListener('mousemove', e=>{
    const r = scroller.getBoundingClientRect();
    const ratio = clamp((e.clientX - r.left) / r.width, 0, 1);
    scroller.scrollLeft = (scroller.scrollWidth - r.width) * ratio;
  }, {passive:true});
  scroller.addEventListener('wheel', e=>{
    if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
      scroller.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, {passive:false});
});

// Chips open corresponding details
document.querySelectorAll('.chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    const id = chip.getAttribute('data-acc');
    const el = document.querySelector(id);
    if(el){ el.open = true; el.scrollIntoView({behavior:'smooth', block:'center'}); }
  });
});

// Smooth anchor scrolling
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

// Mobile burger  open/close + submenu toggles
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
if(burger){
  burger.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.has-sub > a').forEach(link=>{
  link.addEventListener('click', e=>{
    if(window.matchMedia('(max-width:860px)').matches){
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
