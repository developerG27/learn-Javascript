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

function esMayorDeEdad(persona){
  return persona.year >= MAYORIA_DE_EDAD
}

function imprimirSyEsMayorDeEdad(persona){
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nome} è maggiorenne`)
  } else{
    console.log(`${persona.nome} è minorenne`)
  }
}

imprimirSyEsMayorDeEdad(gian)