// script.js  menu stable + utilitaires
document.addEventListener('DOMContentLoaded', () => {
  // année
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // dropdowns stables avec délai
  const DELAY = 160; // ms
  document.querySelectorAll('.has-sub').forEach(li => {
    let closeTimer;
    li.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      li.classList.add('open');
    });
    li.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => li.classList.remove('open'), DELAY);
    });
    // garder ouvert si on survole le dropdown
    const dd = li.querySelector('.dropdown');
    if (dd){
      dd.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      dd.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => li.classList.remove('open'), DELAY);
      });
    }
  });
});
