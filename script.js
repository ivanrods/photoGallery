const navbar = document.querySelector("nav")
const search = document.querySelector(".bar")
const iconSearch = document.querySelector(".icon-search-hide")
let pg = document.querySelector(".logo .logo-pg")
let photo = document.querySelector(".logo-photo")

search.style.display = 'none'
iconSearch.style.display = 'none'

document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if(!(posicaoy == 0)){
    navbar.classList.add('navScroll')
    search.style.display = ''
    iconSearch.style.display = ''
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