//Seleziona tutte le immagini dal DOM e le fa stampa in console
let immagini = document.images
let immaginiArray = Array.from(immagini)
immaginiArray.forEach(function(immagini){
    console.log(immagini)
})


//Traversing è potersi introdurre a qualsiasi elemento del DOM e muoversi in qualsiasi direzione
const navigazione = document.querySelector('#navigazione')
console.log(navigazione.children)


//Creare elementi da Javascript
const link = document.createElement('a')
//aggiungere la classe
link.className = 'link'
//aggiungere id
link.id = 'nuovo-id'
//aggiungere un attributo
link.setAttribute('href','#')
//aggiungere testo
link.appendChild(document.createTextNode('Nuovo link'));
//aggiungere al dom
document.body.appendChild(link)
console.log(link)

//Rimpiazzare elementi del DOM
const nuovoH1 = document.createElement('h1')
nuovoH1.id = 'header'
nuovoH1.appendChild(document.createTextNode('I migliori corsi'))
const precedenteH1 = document.querySelector('#vecchio-h1')
const contenitoreH1 = document.querySelector('con-h1')
//Rimpiazza
contenitoreH1.replaceChild(precedenteH1, nuovoH1)