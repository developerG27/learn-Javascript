/*
Ci permette salvare informazione all'interno del browser.
Accetta solo valori di tipo string, quindi se vogliamo salvare degli oggetti dovremo prima convertirlo
*/

//Verificare se nel browser del nostro utente è disponibile il local storage
if(typeof(Storage) !== 'undefined'){
    console.log('Local Storage disponibile')
} else{
    console.log('Local Storage non disponibile')
}

//Salvare dati
localStorage.setItem("titolo","Impara Javascript")

//Recupare il dato
console.log(localStorage.getItem("titolo"))

//Salvere un oggetto
var utente = {
    nome: 'Gian',
    email: 'gian.pumayalla@gmail.com',
    web: 'http://napssive.it'
}
localStorage.setItem('utente',JSON.stringify(utente))

//Recuperare oggetto: per recuperarlo prima dobbiamo convertirlo nuovamente a un json
console.log(JSON.parse(localStorage.getItem('utente')))

//Ripulire il local Storage
localStorage.removeItem('utente') //elimina l'oggetto dal local storage

localStorage.clear() //rimuove tuttto