var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nome: 'Juan',
  apellido: 'Gomez',
  year: 12
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)

  if(persona.ingeniero){
    console.log('Ingeniero') 
  }

  if(persona.cocinero){
    console.log('cocinero')
  }

  if(persona.drone){
    console.log('drone')
  }
  
  if(persona.guitarrista){
    console.log('guitarrista')
  }

}

imprimirProfesiones(sacha)

var gian = {
  nome: 'Gian',
  year: 23
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona){
//   return persona.year >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({year}) => year >= MAYORIA_DE_EDAD

const imprimirSiEsMayorDeEdad = persona => esMayorDeEdad(persona) 
  ? console.log(`${persona.nome} es mayor de edad`) : console.log(`${persona.nome} es menor de edad`)

const permitirAcceso = persona => (!esMayorDeEdad(persona)) 
  ? console.log('Acceso denegado') : console.log('acceso permitido')

imprimirSiEsMayorDeEdad(gian)