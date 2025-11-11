document.querySelectorAll('.has-sub .subbtn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.currentTarget.parentElement.classList.toggle('open')
  })
})

document.getElementById('year')?.append(new Date().getFullYear())

// rendre le logo vers l accueil et stylisé premium
document.querySelectorAll('.brand').forEach(a=>{
  a.addEventListener('mouseenter', ()=> a.style.filter='brightness(1.2)')
  a.addEventListener('mouseleave', ()=> a.style.filter='')
})
