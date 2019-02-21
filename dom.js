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

