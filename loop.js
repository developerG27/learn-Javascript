var sacha = {
  nome: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del ano ${sacha.nome} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

while(sacha.peso > META){
  if(comeMucho()){
    aumentarDePeso(sacha)
  }
  if(realizaDeporte()){
    adelgazar(sacha)
  }
  dias += 1
}
console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg`)


// for(var i = 1; i <= 365; i++){
//   var random = Math.random()
//   if(random < 0.25){
//     //aumento del peso
//     aumentarDePeso(sacha)
//   } else if(random < 0.5){
//     //adelgazar
//     adelgazar(sacha)
//   }
// }

console.log(`Al final del ano ${sacha.nome} pesa ${sacha.peso.toFixed(2)}kg`)