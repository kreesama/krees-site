// script.js

// année auto
const y = document.getElementById('y'); if(y) y.textContent = new Date().getFullYear();

// dropdowns click + hover tidy
document.querySelectorAll('.dd-btn').forEach(btn=>{
  btn.addEventListener('mouseenter',()=>{
    document.querySelectorAll('.dd-panel').forEach(p=>{ if(p!==btn.nextElementSibling) p.style.display='none'; });
    btn.nextElementSibling.style.display='block';
  });
  btn.addEventListener('click',()=>{
    const p = btn.nextElementSibling;
    const open = getComputedStyle(p).display==='block';
    document.querySelectorAll('.dd-panel').forEach(x=>x.style.display='none');
    p.style.display = open ? 'none' : 'block';
  });
});
document.addEventListener('click',e=>{
  if(!e.target.closest('.dd')) document.querySelectorAll('.dd-panel').forEach(p=>p.style.display='none');
});

// CAROUSEL “APPLE-LIKE”
// 1 flèches pour bouger
// 2 auto-glisse selon la position de la souris gauche/droite
document.querySelectorAll('.carousel').forEach(car=>{
  const track = car.querySelector('.car-track');
  const left = car.querySelector('.left');
  const right = car.querySelector('.right');

  const scrollBy = amt => track.scrollBy({left:amt, behavior:'smooth'});
  left.addEventListener('click', ()=>scrollBy(-track.clientWidth*0.8));
  right.addEventListener('click', ()=>scrollBy(track.clientWidth*0.8));

  let raf = null;
  const onMove = e=>{
    const rect = car.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zone = rect.width * 0.25; // zones latérales
    let speed = 0;
    if(x < zone) speed = -6;          // glisse vers la gauche
    else if(x > rect.width - zone) speed = 6; // vers la droite
    if(speed!==0){
      if(!raf){
        const loop = ()=>{ track.scrollLeft += speed; raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
      }
    }else if(raf){ cancelAnimationFrame(raf); raf=null; }
  };
  car.addEventListener('mousemove', onMove);
  car.addEventListener('mouseleave', ()=>{ if(raf){ cancelAnimationFrame(raf); raf=null; }});
});
