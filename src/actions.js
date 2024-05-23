import { figures } from "./elements.js"

//rederezar imagens
export const render = () => {

for(let i = 0; i < 12; i++){
  figures.innerHTML += `
  <figure>
    <img src="https://source.unsplash.com/random?a=${i}" alt="">
  </figure>`
  
  }
}
render()