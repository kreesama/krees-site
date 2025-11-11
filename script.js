// burger
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if(toggle){
  toggle.addEventListener('click', () => {
    const shown = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
  });
}
// dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const li = e.target.closest('.has-dropdown');
    const drop = li.querySelector('.dropdown');
    const open = drop.style.display === 'block';
    document.querySelectorAll('.has-dropdown .dropdown').forEach(d=>d.style.display='none');
    drop.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
  });
});
// fermer au clic extérieur
document.addEventListener('click', e=>{
  if(!e.target.closest('.has-dropdown')){
    document.querySelectorAll('.has-dropdown .dropdown').forEach(d=>d.style.display='none');
  }
});
