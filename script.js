// script.js
// année auto et amélioration UX des menus sur mobile
document.getElementById('y').textContent = new Date().getFullYear();

// ferme un menu quand on en ouvre un autre
document.querySelectorAll('.dd-btn').forEach(btn=>{
  btn.addEventListener('mouseenter',()=>{
    document.querySelectorAll('.dd-panel').forEach(p=>{ if(p!==btn.nextElementSibling) p.style.display='none'; });
    btn.nextElementSibling.style.display='block';
  });
});
document.addEventListener('click',e=>{
  if(!e.target.closest('.dd')) document.querySelectorAll('.dd-panel').forEach(p=>p.style.display='none');
});
