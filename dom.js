/*
DOM: document object model
E' il padre di tutti i documenti
Document
    root (html)
    head
        title
    body
 */
//Crea un paragrafo nel document
var paragrafo = document.createElement("p")
//Crea del testo nel documento
var node = document.createTextNode('Questo è il nuovo menu')
//Inserisce il testo all'interno del paragrafo
paragrafo.appendChild(node)
//Inserisce il paragrafo all'interno del body, ora è visibile
var elementoCreato =  document.body.appendChild(paragrafo)
//Cambia il colore del font al paragrafo
elementoCreato.style.color= 'red'


/*
L'oggetto window al suo interno raccchiude tutto il dom
*/

prompt()
confirm()

window.location.search //ritorna il query string



/*
BOM: Browser Object Model
*/

//Ritorna l'altezza visibile del nostro browser
console.log(window.innerHeight)

//Ritorna la lunghezza visibile del nostro browser
console.log(window.innerWidth)

//Ritorna l'altezza totale del browser
console.log(screen.height)

//Ritorna la lunghezza totale del browser
console.log(screen.width)

//ritorna l'url
console.log(window.location)

//reindirizzare l'utente
window.location.href= 'http://google.com'

//apre un nuova finestra nel browser con lunghezza e altezza di 200px
window.open('http://google.com', '', 'width=200, height=200')