// script.js  dynamique
/* ========= KREES SCRIPT DYNAMIQUE ========= */
document.addEventListener("DOMContentLoaded", () => {
  // année footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // scroll doux pour ancres
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const id = a.getAttribute("href");
      if(id.length>1){
        const el = document.querySelector(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:"smooth",block:"start"}); }
      }
    });
  });

  // bouton retour haut
  const toTop = document.querySelector(".to-top");
  if(toTop){
    window.addEventListener("scroll",()=>{
      toTop.style.opacity = window.scrollY>300 ? "1" : ".6";
    });
  }
});
