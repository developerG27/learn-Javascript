//Variabili
const carrello = document.getElementById('carrito')
const corsi = document.getElementById('lista-cursos')
const listaCorsi = document.querySelector('#lista-carrito tbody')

//Listener
caricareEventiListener()

function caricareEventiListener(){
    //Parte quando si fa click in 'Aggiungi al carrello'
    corsi.addEventListener('click',comprareCorso)


    //Quando si elimina un corso dal carrello
    carrello.addEventListener('click',eliminareCorso)
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
    //Creo un oggetto estrapolando i dati dal DOM
    const infoCorso = {
        //Src dell'immagine
        immagine: corso.querySelector('img').src,
        //IL contenuto dell'h4
        titolo: corso.querySelector('h4').textContent,
        //il contenuto dello span all'interno di .precio
        prezzo: corso.querySelector('.precio span').textContent,
        id: corso.querySelector('a').getAttribute('data-attribute')
    }
    inserisciCarrello(infoCorso)
}

//Mostra il corso selezionato nel carrello
function inserisciCarrello(corso){
    //crea un tr
    const row = document.createElement('tr')
    //al tr gli aggiunge un template string con l'oggetto creato precedentemene
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

//Elimina il corso dal carrello nel DOM
function eliminareCorso(e){
    e.preventDefault()

    let corso
    //se quello che clicchiamo contiene la classe borrar-curso
    if(e.target.classList.contains('borrar-curso')){
        //elemento cliccato, il padre, il padre, rimosso
        e.target.parentElement.parentElement.remove()
    }
}