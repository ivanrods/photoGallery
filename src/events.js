import * as el from "./elements.js"

//evento navbar
export const scroll = document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if(!(posicaoy == 0)){
    el.navbar.classList.add('navScroll')
    el.explorer.style.color = "#636363"
    el.search.style.display = 'flex'
    el.iconSearch.style.display = 'flex'
    el.pg.src = "./assets/fg-dark.svg"
    el.photo.src = "./assets/Photo-Gallery-dark.svg"
    
  }else{
    el.navbar.classList.remove('navScroll')
    el.explorer.style.color = "white"
    el.search.style.display = 'none'
    el.iconSearch.style.display = 'none'
    el.pg.src = "./assets/fg.svg"
    el.photo.src = "./assets/Photo-Gallery.svg"
  }
});


el.aderir.addEventListener('click', ()=>{
  el.modal.classList.remove('hide2')
  el.body.style.overflow = "hidden";
 
})
el.login.addEventListener('click', ()=>{
  el.modal.classList.remove('hide2')
  el.body.style.overflow = "hidden";
 
})
el.load.addEventListener('click', ()=>{
  el.modal.classList.remove('hide2')
  el.body.style.overflow = "hidden";
 
})
el.closeModal.addEventListener('click', ()=> {
  el.modal.classList.add('hide2')
  el.body.style.overflow = "auto";
  
})

el.menu.addEventListener('click', ()=>{
  el.content.classList.remove('hide2')
})
el.closeContent.addEventListener('click', ()=>{
  el.content.classList.add('hide2')
})

el.explorer.addEventListener('click', ()=>{
  
})