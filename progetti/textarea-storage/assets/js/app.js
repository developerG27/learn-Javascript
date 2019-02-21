//salvo in una costante il form
const form = document.getElementById('formulario')
//salvo il contenitore dei tweets
const lista_tweets = document.getElementById('lista-tweets')

//aggiungo una funzione che si eseguirà all'evento submit
form.addEventListener('submit', aggiungereTweet)
//funzione che si eseguirà all'evento click del contenitore tweet
lista_tweets.addEventListener('click',delateTweet)

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
}

//funzione che cancella il tweet
function delateTweet(event){
    //disattivo l'evento di default
    event.preventDefault()
    //Se il nome delal classe dell'evento è delate
    if(event.target.className === 'delate'){
        //rimuove l'elemento
        console.log(event.target.parentElement.remove())
    }
}