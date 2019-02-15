const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc'
}
function saludar(){
  console.log(`Hola, mi nombre es ${this.nombre}`)
}

const saludarASacha = (saludar.bind(sacha, 'Hola che'), 1000)

saludar.call(sacha, 'Hola che')

saludar.apply(sacha, ['Hola che'])