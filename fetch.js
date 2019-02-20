/*
E' un metodo che ci permettere fare richieste asincrone, è l'evoluzione di XMLHttpRequest
Il suo sistema è basato su Richieste (Request) e risposte (Response), questo permette a un documento mantenere un contatto con il server in modo sicuro

Il metodo Fetch() realizza una richiesta al server che gli viene passato come parametro
L'oggeto ritorna una promessa con l'oggetto Response anche se la richiesta non è andata a buon fine
Una volta ottenuto la risposta questa ritornerà alcuni metodi che potranno gestire il suo contenuto

API:
https://jsonplaceholder.typicode.com/
 */

//E' stata realizzata una richiesta all'url indicata, di default è di tipo GET, questo processo genera una promessa e aspetta che il server risponda
fetch('https://reqres.in/api/users')
    //Si apre un canale che riceve la rispsta e la trasforma in JSON
    .then(data => data.json())
    //Abbiamo i dati pronti e la inseriamo nella console
    .then(data => console.log(data))
    //Se in caso ci sono errori nella prima promessa (conversione in JSON) ci ritorna un errore
    .catch(e => console.error('Errore'))

//fetch('https://reqres.in/api/users').then(resp => resp.json()).then(json => console.log(json));