/*
E' un metodo che ci permettere fare richieste asincrone, è l'evoluzione di XMLHttpRequest
Il suo sistema è basato su Richieste (Request) e risposte (Response), questo permette a un documento mantenere un contatto con il server in modo sicuro

Il metodo Fetch() realizza una richiesta al server che gli viene passato come parametro
L'oggeto ritorna una promessa con l'oggetto Response anche se la richiesta non è andata a buon fine
Una volta ottenuto la risposta questa ritornerà alcuni metodi che potranno gestire il suo contenuto

API:
https://jsonplaceholder.typicode.com/
 */
fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(e => console.error('Errore'))

//fetch('https://reqres.in/api/users').then(resp => resp.json()).then(json => console.log(json));