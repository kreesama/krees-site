// script.js  remplacer intégralement ton fichier par ce code
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");
if(toggle){
  toggle.addEventListener("click", ()=> menu.classList.toggle("show"));
}
menu?.querySelectorAll("a").forEach(a=>{
  a.addEventListener("click", ()=> menu.classList.remove("show"));
});
document.getElementById("year").textContent = new Date().getFullYear();
