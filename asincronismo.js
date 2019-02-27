/*
Javascript è in grado di eseguire un solo compito alla volta, indipendentemente dalla potenza di calcolo del tuo computer.
E' in grado di delegare alcune funzioni ad altri processi

Javascript al suo interno ha una pila di esecuzione chiamata callstack dove andranno le chiamate di esecuzione.


Processo Asincrono:
E' un codice che si sta eseguendo ma non ha ancora terminato di eseguirsi prima che inizi ad eseguirsi un altro codice


*/

console.log('a')
setTimeout(function(){
  console.log('b')
},0)
console.log('c')

setTimeout(() => console.log('d'),2000)




/**
 Async Await è la forma più semplice di realizzare azioni asincrone
 E' importante pensare agli array quando si usano async await
 Async Await ferma l'esecuzione del programma fin quando tutte le promesse non vengono risolte
 */
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain: true}

function obtenerPersonaje(id){
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
      .get(url, opts, function(data){
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedio un erore a obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
  var ids = [1,2,3,4,5,6,7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch(id){
    onError(id)
  }
}

obtenerPersonajes()

