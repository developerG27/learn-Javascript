/*
I callback avevano il problema di annidazione, per questo sono nate le promesse
Prima era necessario usare librerie esterne ma ora la maggior parte dei browser supportano le promesse, se vogliamo verificare se le promesse sono supportate dal nostro utente possiamo usare 'polifield'.
Questo capisce se il browser supporta le promesse e se non le supporta crea la classe della promessa.

Doddiamo pensare alle promesse come valori che ancora non conosciamo, è la promessa di un azione asincrona succeda e ritorni.

Le promesse hanno tre stati e sono come qualsiasi oggetto in javascript:
pending: è il primo stato quando viene creata.
fulfilled: la promessa si è risolta positivamente
rejected: se succede qualche errore 

per oottenere il valore di una promessa usiamo la funzione .then() e gli passiamo come parametro una funzione che abbia come parametro un valore che aspettiamo

Se succede qualche errore usiamo .catch() e gli si assegna un parametro che riceverà un errore

new Promise( function (resolve, reject){
  ...
}).then(valore => {
  ...
}).catch(err => {
  ...
})
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

obtenerPersonaje(1)
  .then(personaje=>{
    console.log(`Hola, yo soy ${personaje.name}`)
    return obtenerPersonaje(2)
  })
  .then(personaje => {
    console.log(`Hola, yo soy ${personaje.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje => {
    console.log(`Hola, yo soy ${personaje.name}`)
    return obtenerPersonaje(4)
  })
  .then(personaje => {
    console.log(`Hola, yo soy ${personaje.name}`)
    return obtenerPersonaje(5)
  })
  .then(personaje => {
    console.log(`Hola, yo soy ${personaje.name}`)
    return obtenerPersonaje(6)
  })
  .then(personaje => {
    console.log(`Hola, yo soy ${personaje.name}`)
    return obtenerPersonaje(7)
  })
  .catch(onError)
