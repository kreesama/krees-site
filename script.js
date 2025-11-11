// script.js
// année auto
const y = document.getElementById('y'); if(y) y.textContent = new Date().getFullYear();

// affichage intelligent des menus et fermeture au clic extérieur
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
