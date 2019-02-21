//Seleziona tutte le immagini dal DOM e le fa stampa in console
let immagini = document.images
let immaginiArray = Array.from(immagini)
immaginiArray.forEach(function(immagini){
    console.log(immagini)
})