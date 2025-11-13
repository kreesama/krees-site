// script.js

// header sticky : cache en scroll bas, montre en scroll haut
let lastY = window.scrollY;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (!header) return;
  if (y > lastY && y > 80) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastY = y;
});

// carrousels horizontaux
document.querySelectorAll('[data-scroller]').forEach(scroller => {
  scroller.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scroller.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive:false });

  scroller.addEventListener('mousemove', e => {
    if (e.buttons !== 1) return;
    scroller.scrollLeft -= e.movementX;
  });
});

// smooth scroll ancres internes
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  });
});

// burger + sous menus mobile
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.has-sub > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.matchMedia('(max-width:840px)').matches) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
