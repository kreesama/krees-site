// script.js  remplacer tout le fichier
// header hide show on scroll up
let lastY = window.scrollY;
const header = document.querySelector('[data-sticky]');
const clamp = (n, min, max)=>Math.max(min, Math.min(n, max));
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const goingUp = y < lastY;
  header.classList.toggle('hide', !goingUp && y > 100);
  lastY = y;
});

// horizontal scroller mouse move
document.querySelectorAll('[data-scroller]').forEach(scroller=>{
  scroller.addEventListener('mousemove', e=>{
    const rect = scroller.getBoundingClientRect();
    const ratio = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    scroller.scrollLeft = (scroller.scrollWidth - rect.width) * ratio;
  }, {passive:true});
  scroller.addEventListener('wheel', e=>{
    if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
      scroller.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, {passive:false});
});

// smooth anchor
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
