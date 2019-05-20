/*
JSON: Javascript Object Notation
Sono array associativi
*/

var film = {
    titolo : 'Interstellar',
    year : 2014,
    paese: 'Stati Uniti'
}

console.log(film)
console.log(film.nome) // Interstellar

//Cambiare il valore di una proprietà
film.titolo = 'Ex Machina'
film.year = 2015
console.log(film.titolo) //Ex Machina

//Inserirli all'interno del DOM
var index;
for(index in film){
    var paragrafo = document.createElement('P')
    document.body.appendChild(paragrafo)
    paragrafo.append(film[index])
}