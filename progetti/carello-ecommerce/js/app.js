//Variabili
const carrello = document.getElementById('carrito')
const corsi = document.getElementById('lista-cursos')
const listaCorsi = document.querySelector('#lista-carrito tbody')

//Listener
caricareEventiListener()

function caricareEventiListener(){
    //Parte quando si fa click in 'Aggiungi al carrello'
    corsi.addEventListener('click',comprareCorso)
}

//Funzioni
//Funzione che aggiunge il corso al carrello
function comprareCorso(e){
    e.preventDefault()

    //quando viene fatto click su un elemento che contiene la classe 'agregar-carrito'
    if(e.target.classList.contains('agregar-carrito')){
        //ritorna l'elemento
        const corso = e.target.parentElement.parentElement

        leggereDatiCorso(corso)
    }
}

//Legge i dati del corso
function leggereDatiCorso(corso){
    const infoCorso = {
        immagine: corso.querySelector('img').src,
        titolo: corso.querySelector('h4').textContent,
        prezzo: corso.querySelector('.precio span').textContent,
        id: corso.querySelector('a').getAttribute('data-attribute')
    }

    inserisciCarrello(infoCorso)
}

//Mostra il corso selezionato nel carrello
function inserisciCarrello(corso){
    const row = document.createElement('tr')
    row.innerHTML = `
        <td> 
          <img src=" ${corso.immagine} ">
        </td>
        <td> ${corso.titolo} </td>
        <td>${corso.prezzo}</td>
        <td> <a href="#" class=" borrar-curso " data-id=" ${corso.id} "> X </a>
        `
    listaCorsi.appendChild(row)
}
