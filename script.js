// année auto
const y = document.getElementById("y"); if (y) y.textContent = new Date().getFullYear();

// ouverture/fermeture propre des menus au clic + clavier
document.querySelectorAll(".dd-btn").forEach(btn=>{
  btn.addEventListener("click", e=>{
    const panel = btn.nextElementSibling;
    document.querySelectorAll(".dd-panel").forEach(p=>{ if(p!==panel) p.classList.remove("open") });
    panel.classList.toggle("open");
  });
  btn.addEventListener("keydown", e=>{
    if(e.key==="ArrowDown"){e.preventDefault(); btn.nextElementSibling.querySelector("a")?.focus();}
  });
});
document.addEventListener("click", e=>{
  if(!e.target.closest(".dd")) document.querySelectorAll(".dd-panel.open").forEach(p=>p.classList.remove("open"));
});

// améliorer l’accessibilité des <details> (fermer les autres quand on en ouvre un)
document.querySelectorAll(".accordion details").forEach(d=>{
  d.addEventListener("toggle", ()=>{
    if(d.open){
      document.querySelectorAll(".accordion details").forEach(o=>{ if(o!==d) o.removeAttribute("open"); });
    }
  });
});
