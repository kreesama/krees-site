document.querySelector('#y').textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if(toggle){
  toggle.addEventListener('click', ()=> list.classList.toggle('open'));
}
