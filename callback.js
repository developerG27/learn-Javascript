/*

*/
class Persona {
  constructor(nombre,apellido,altura) {
    this.nombre = nombre
    this. apellido = apellido
    this.altura = altura
    return this
  }

  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    if(fn){
      fn(nombre, apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarollador`)
  }
  if(fn){
    fn(nombre, apellido, true)
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buenos Dias ${nombre} ${apellido} no sabia que eras dev`)
  if(esDev){
    console.log("No sabia que eras dev")
  }
} 

var sacha = new Persona('Sacha', 'Lifszyc',1.72)
var erika = new Persona('Erika', 'Luna',1.62)
var arturo = new Desarollador('Arturo', 'Martinez',2.0)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)

/*
*/


const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain: true}

function obtenerPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucediò un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function(personaje){
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3,function(personaje){
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(5, function(personaje){
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, function(personaje){
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })

})


//CALLBACK https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks8214/