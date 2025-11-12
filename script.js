let lastY = window.scrollY || 0;
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const y = window.scrollY || 0;
  if (y > lastY && y > 80) header.classList.add('hide');
  else header.classList.remove('hide');
  lastY = y;
});

document.querySelectorAll('.menu-item.has-sub').forEach(it => {
  let timer;
  const btn = it.querySelector('.menu-btn');
  const sub = it.querySelector('.submenu');

  const open = () => { it.classList.add('open'); btn.setAttribute('aria-expanded','true'); };
  const close = () => { it.classList.remove('open'); btn.setAttribute('aria-expanded','false'); };

  it.addEventListener('mouseenter', () => { clearTimeout(timer); open(); });
  it.addEventListener('mouseleave', () => { timer = setTimeout(close, 220); });
  btn.addEventListener('focus', open);
  sub.addEventListener('focusin', open);
  sub.addEventListener('focusout', e => { if (!sub.contains(e.relatedTarget)) close(); });
});
