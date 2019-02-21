//salvo in una costante il form
const form = document.getElementById('formulario')
//salvo il contenitore dei tweets
const lista_tweets = document.getElementById('lista-tweets')

//aggiungo una funzione che si eseguirà all'evento submit
form.addEventListener('submit', aggiungereTweet)
//funzione che si eseguirà all'evento click del contenitore tweet
lista_tweets.addEventListener('click',delateTweet)
document.addEventListener('DOMContentLoaded', localStoragePronto)

//creo la funzione che aggiunge i tweet e gli aggiungo come parametro un evento
function aggiungereTweet(evento){
    //elimino l'evento che il browser fa di default
    evento.preventDefault()
    //salvo in una costante il contenuto della textarea
    const tweet = document.getElementById('tweet').value
    //creo bottone di eliminazione
    const delate = document.createElement('a')
    //gli aggiungo una classe
    delate.classList = 'delate'
    //aggiungo il suo contenuto
    delate.innerText = 'X'
    //crea un tag <li>
    const li = document.createElement('li')
    //al tag <li> gli aggiungo il testo del valore della textarea
    li.innerText = tweet
    //al tag <li> aggiunto il bottone delate
    li.appendChild(delate)
    //Al contenitore dei tweet gli appendo il tag <li>
    lista_tweets.appendChild(li)
    //aggiungere al local storage
    aggiungereTweetLocalStorage(tweet)
}

//funzione che cancella il tweet dal DOM
function delateTweet(event){
    //disattivo l'evento di default
    event.preventDefault()
    //Se il nome delal classe dell'evento è delate
    if(event.target.className === 'delate'){
        //rimuove l'elemento
        event.target.parentElement.remove()
        delateTweetLocalStorage(event.target.parentElement.textContent)
    }
}

//Mostrare dati dal local storage
function localStoragePronto(){
    let tweets
    tweets = ottenereTweetLocalStorage()

    tweets.forEach(function(tweet){
        //creo bottone di eliminazione
        const delate = document.createElement('a')
        //gli aggiungo una classe
        delate.classList = 'delate'
        //aggiungo il suo contenuto
        delate.innerText = 'X'

        //crea un tag <li>
        const li = document.createElement('li')
        //al tag <li> gli aggiungo il testo del valore della textarea
        li.innerText = tweet
        //al tag <li> aggiunto il bottone delate
        li.appendChild(delate)
        //Al contenitore dei tweet gli appendo il tag <li>
        lista_tweets.appendChild(li)
    })
}

//aggiungere tweeet al local storage
function aggiungereTweetLocalStorage(tweet){
    let tweets;
    //faccio partire la funzione
    tweets = ottenereTweetLocalStorage()

    //aggiungere il nuovo all'interno dell'array
    tweets.push(tweet)

    //Convertire da array a string prima di inserirlo in local storage
    localStorage.setItem('tweets',JSON.stringify(tweets))
}

//controlla se ci sono elementi nel local Storage, ritorna un array
function ottenereTweetLocalStorage(){
    let tweets;
    //Se nel local storage non esiste 'tweets'
    if(localStorage.getItem('tweets') === null){
        //ritorna un array vuoto
        tweets = []
    } else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets
}

//eliminare tweet dal local storage
function delateTweetLocalStorage(tweet){
    let tweets, tweetCancellato
    //Elimina la x dal tweet
    tweetCencellato = tweet.substring(0, tweet.length - 1)

    tweets = ottenereTweetLocalStorage()

    tweets.forEach(function(tweet, index){
        if(tweetCencellato === tweet){
            tweets.splice(index, 1)
        }
    })

    localStorage.setItem('tweets', JSON.stringify(tweets))
}