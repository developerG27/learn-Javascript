console.log('hello world');
const noCambia = "Leonidas"
let cambia = "@LeonidasEsteban"

function cambiarNombre(){
  cambia = nuevoNombre
}

const getUser = new Promise(function(todoBien, todoMal){
  //chiamare un api
  setTimeout(function(){
    //dopo 3 secondi
  }, 3000)
  todoBien();
})

getUser
  .then(function(){
    console.log('todo esta bien')
  })
