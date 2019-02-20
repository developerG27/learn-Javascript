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