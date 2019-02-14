var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros:111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros:111
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros:111
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros:111
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros:111
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros:111
}

var personas = [sacha, alan, martin, dario, vicky, paula] 
// for(var i = 0; i <personas.length; i++){
//   var persona = personas[i]
//   console.log(`${persona.nombre} mide ${persona.altura}`)
// }

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.6
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

// var personasAltas = persona.filter(function(persona){
//   return persona.altura > 1.8
// })

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(pasarAlturaACms)

console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)

// var acum = 0

// for(var i = 0; i<personas.length; i++){
//   acum += personas[i].cantidadDeLibros
// }

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)