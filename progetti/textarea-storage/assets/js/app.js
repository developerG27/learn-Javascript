//Variabili
const listaTweets = document.getElementById('lista-tweets')

//Event Listener
eventListener()
function eventListener(){
    //l'elemento con id #formulario tiene traccia dell'evento submit
    document.querySelector('#formulario').addEventListener('submit',agregarTweet)

    //eliminare tweet
    listaTweets.addEventListener('click',borrarTweet)
}

//Function
function agregarTweet(e){
    //Previene l'azione di default
    e.preventDefault()
    console.log('Formulario inviato')
    //Prende il contenuto di #tweet
    const tweet = document.getElementById('tweet').value
    //creo un elemento li
    const li = document.createElement('li')
    //a li gli aggiungo il testo contenuto in tweet
    li.innerText = tweet
    //<li> viene aggiunto al DOM
    listaTweets.appendChild(li)

    //creare button per eliminare
    const buttonDelate = document.createElement('a')
    //Aggiungere una classe
    buttonDelate.classList = 'borrar-tweet'
    //aggiunge il suo contenuto
    buttonDelate.innerText = 'X'
    //aggiungi il button alla lista del DOM
    li.appendChild(buttonDelate)

    console.log(tweet)
}

function borrarTweet(e){
    e.preventDefault()
    if(e.target.className === 'borrar-tweet'){
        console.log(e.target.parentElement.remove())
        console.log('Tweet Eliminato')
    }
    console.log('Hai fatto click alla lista')
}