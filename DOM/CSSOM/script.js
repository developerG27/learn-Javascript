const title = document.querySelector('h1')
const description = document.querySelector('p')

//modifica lo stile
title.style.color = 'blue'


//dichiaro il media query
const mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)')
console.log(mediumBp);

//Condizionale 
const changeColor = () =>{
  if(mediumBp.matches){
    document.body.style.background = 'red'
  } else{
    document.body.style.background = 'yellow'
  }
}

//qunado il dom si carica fai partire la funzione
addEventListener('DOMContentLoaded',changeColor)

//Quando si ridimensiona la finestra fai partire la funzione
addEventListener('resize', changeColor)