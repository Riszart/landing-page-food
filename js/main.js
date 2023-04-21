function startRepeat(count){
  let a = ''
  for(i=0; i<5; i++){
    if(i < count)a += '&starf;'
    else a += '&star;'
  }
  return a
}
function createItems({name,price,description,image,start}){
  document.querySelector('#conten-elements').innerHTML += `
  <article class="article">
      <section class="top-article" style="background-image: url(${image})"></section>
      <section class="botton-article">
        <h2 class="title-h2">${name}</h2>
        <p class="text-p">${description}</p>
        <p class="price-p">S/.<span>${price}</span></p>
        <div class="content-start-class"><span class="start-class">${startRepeat(start)};</span><span class="resen"> / 35 reseñas</span></div>
      </section>
    </article> 
  `
}

elementsFood.forEach((item)=>{
  createItems(item)
})

const menu = document.querySelector('#menu-burger')
menu.addEventListener('click', ()=>{
  document.querySelector('#list-menu').classList.toggle('hidden')
  document.querySelector('#list-menu').classList.toggle('flex')
})