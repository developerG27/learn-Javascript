/*
Un closure è una funzione che ricorda lo stato delle cose di quando fu creata
Un
*/
function crearSaludo(finalDeFrase){
  return function(nombre){
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Sacha')
saludoMexicano('Sacha')
saludoColombiano('Sacha')