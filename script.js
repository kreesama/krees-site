// script.js — header dynamique + carousels intuitifs
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

  // Smooth scroll for anchor links
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

  // Carousels: auto-width, drag to scroll, hover edge nudges
  const makeCarousel = (el) => {
    let isDown=false, startX=0, scrollLeft=0, raf;
    const nudge = (dir)=>{ cancelAnimationFrame(raf);
      const step=()=>{ el.scrollLeft += dir*2.2; raf=requestAnimationFrame(step); };
      raf=requestAnimationFrame(step);
    };
    el.addEventListener('mousedown',e=>{isDown=true; startX=e.pageX-el.offsetLeft; scrollLeft=el.scrollLeft; e.preventDefault();});
    window.addEventListener('mouseup',()=>{isDown=false; cancelAnimationFrame(raf);});
    el.addEventListener('mousemove',e=>{ if(!isDown) return; const x=e.pageX-el.offsetLeft; const walk=(x-startX)*1.1; el.scrollLeft=scrollLeft-walk; });
    // touch
    let touchStart=0, touchLeft=0;
    el.addEventListener('touchstart',e=>{touchStart=e.touches[0].pageX; touchLeft=el.scrollLeft},{passive:true});
    el.addEventListener('touchmove',e=>{const dx=e.touches[0].pageX-touchStart; el.scrollLeft=touchLeft-dx;},{passive:true});
    // hover edges
    el.addEventListener('mousemove',e=>{
      if(isDown) return;
      const rect=el.getBoundingClientRect();
      const x=e.clientX-rect.left;
      const edge=40;
      if(x<edge) nudge(-1); else if(x>rect.width-edge) nudge(1); else cancelAnimationFrame(raf);
    });
    el.addEventListener('mouseleave',()=>cancelAnimationFrame(raf));
  };
  document.querySelectorAll('.carousel, .logo-carousel').forEach(makeCarousel);
})();
