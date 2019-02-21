//Variabili
const carrello = document.getElementById('carrito')
const corsi = document.getElementById('lista-cursos')

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

function leggereDatiCorso(corso){
    console.log(corso)
}