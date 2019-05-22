/*
Le funzioni possono avere anche parametri opzionali, basta assegnargli un valore di default
*/
function saluto(nome, show = false) {
  if (show == false) {
    console.log(`Cioa ${nome}`)
  } else {
    document.write(`Ciao ${nome}`)
  }
}

saluto(nome)


/*
Le funzioni al loro interno possono avere altre funzioni in modo tale da essere più ordinati
*/
function saluto(nome, show = false) {
  if (show == false) {
    tramiteConsole(nome)
  } else {
    tramiteWrite(nome)
  }
}

function tramiteConsole(nome) {
  console.log(`Ciao ${nome}`)
}

function tramiteWrite(nome) {
  document.write(`Ciao ${nome}`)
}

function saluto(

)

/*
Parametro rest e spread
Rest ...
*/

function listaFrutta(fruttaUno, fruttaDue, ...altra_frutta) {
  console.log(`Frutta uno: ${fruttaUno}`)
  console.log(`Frutta due: ${fruttaDue}`)
  console.log(`Altra frutta ${altra_frutta}`)
}

listaFrutta('Arancia', 'Mela', 'Anguria', 'Pera', 'Melone', 'Cocco')
var frutti = ['Arancia', 'Mela']
listaFrutta(...frutti, 'Anguria', 'Pera', 'Melone', 'Cocco')

/*
Funzioni anonime: è una funzione che non ha un nome
*/
var film = function (nome) {
  return `il film è ${nome}`
}
film('prova')

/*
Arrow function
*/
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

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  }

  if (persona.cocinero) {
    console.log('cocinero')
  }

  if (persona.drone) {
    console.log('drone')
  }

  if (persona.guitarrista) {
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


/*
Un closure è una funzione che ricorda lo stato delle cose di quando fu creata
Un
*/
function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Sacha')
saludoMexicano('Sacha')
saludoColombiano('Sacha')