var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona){
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})

var gian = {
  nome: 'Gian',
  year: 23
}
var sabrina = {
  nome: 'Sabrina',
  year: 23
}


function imprimirNombreYEdad({nome, year}){
  console.log(`Ciao, mi chiamo ${nome} e ho ${year}`)
}

imprimirNombreYEdad(gian)


function compleanos(persona){
  return {
    ...persona, 
    edad: persona.edad +1
  }
}

compleanos(sacha)