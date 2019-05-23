const title = document.querySelector('h1')
const description = document.querySelector('p')

//modifica lo stile
title.style.color = 'blue'


const mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)')
console.log(mediumBp);

const changeColor = () =>{
  if(mediumBp.matches){
    document.body.style.background = 'red'
  } else{
    document.body.style.background = 'yellow'
  }
}

addEventListener('DOMContentLoaded',changeColor)
addEventListener('resize', changeColor)