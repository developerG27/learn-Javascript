let elemento = document.all
//elemento = document.body
//elemento = document.forms[0]
let immagini = document.images
let immaginiArray = Array.from(immagini)
immaginiArray.forEach(function(immagini){
    console.log(immagini)
})
elementoArray = Array.from(elemento)


console.log(elementoArray)