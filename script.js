const navbar = document.querySelector("nav")
const search = document.querySelector(".bar")
const iconSearch = document.querySelector(".icon-search-hide")
let img = document.querySelector(".logo .logo-pg")
console.log(img)

search.style.display = 'none'
iconSearch.style.display = 'none'

document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  if(!(posicaoy == 0)){
    navbar.classList.add('navScroll')
    search.style.display = ''
    iconSearch.style.display = ''
    img.src = "./assets/fg-dark.svg"
    
  }else{
    navbar.classList.remove('navScroll')
    search.style.display = 'none'
    iconSearch.style.display = 'none'
    img.src = "./assets/fg.svg"
  }
});