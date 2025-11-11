// année auto et petites interactions
document.getElementById("y").textContent = new Date().getFullYear();

// menus déroulants au clavier et sur mobile
document.querySelectorAll(".dd-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> {
    const panel = btn.nextElementSibling;
    const opened = document.querySelector(".dd-panel.open");
    if(opened && opened!==panel) opened.classList.remove("open");
    panel.classList.toggle("open");
  });
});
document.addEventListener("click", (e)=>{
  if(!e.target.closest(".dd")) document.querySelectorAll(".dd-panel.open").forEach(p=>p.classList.remove("open"));
});

// carousel auto et boutons
document.querySelectorAll(".carousel").forEach(c=>{
  const track = c.querySelector(".track");
  const left = c.querySelector(".left");
  const right = c.querySelector(".right");
  const step = 320;

  left.addEventListener("click", ()=> track.scrollBy({left:-step,behavior:"smooth"}));
  right.addEventListener("click", ()=> track.scrollBy({left: step,behavior:"smooth"}));

  if(c.dataset.auto==="true"){
    let auto = setInterval(()=> track.scrollBy({left: step,behavior:"smooth"}), 3500);
    c.addEventListener("mouseenter", ()=> clearInterval(auto));
    c.addEventListener("mouseleave", ()=> auto = setInterval(()=> track.scrollBy({left: step,behavior:"smooth"}), 3500));
  }
});