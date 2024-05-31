import { navbar, search, iconSearch, pg, photo ,aderir, modal, closeModal } from "./elements.js"

//evento navbar
export const scroll = document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if(!(posicaoy == 0)){
    navbar.classList.add('navScroll')
    search.style.display = 'flex'
    iconSearch.style.display = 'flex'
    pg.src = "./assets/fg-dark.svg"
    photo.src = "./assets/Photo-Gallery-dark.svg"
    
  }else{
    navbar.classList.remove('navScroll')
    search.style.display = 'none'
    iconSearch.style.display = 'none'
    pg.src = "./assets/fg.svg"
    photo.src = "./assets/Photo-Gallery.svg"
  }
});


aderir.addEventListener('click', ()=>{
  modal.classList.remove('hide2')
 
})
closeModal.addEventListener('click', ()=> {
  modal.classList.add('hide2')
})