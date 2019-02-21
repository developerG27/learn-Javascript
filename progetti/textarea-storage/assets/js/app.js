//salvo in una costante il form
const form = document.getElementById('formulario')

//aggiungo una funzione che si eseguirà all'evento submit
form.addEventListener('submit', aggiungereTweet)

//creo la funzione e gli aggiungo come parametro un evento
function aggiungereTweet(evento){
    //elimino l'evento che il browser fa di default
    evento.preventDefault()
    //salvo in una costante il contenuto della textarea
    const tweet = document.getElementById('tweet').value
    //salvo in una costante il contenitore dei tweet
    const lista_tweets = document.getElementById('lista-tweets')
    //inizializzo un elemento <li>
    const li = document.createElement('li')
    //al tag <li> gli aggiungo il testo del valore della textarea
    li.innerText = tweet
    //Al contenitore dei tweet gli appendo il tag <li>
    lista_tweets.appendChild(li)
}