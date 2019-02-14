/*

*/
class Persona {
  constructor(nombre,apellido,altura) {
    this.nombre = nombre
    this. apellido = apellido
    this.altura = altura
    return this
  }

  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} y soy desarollador`)
  }
}


// var sacha = new Persona('Sacha', 'Lifszyc',1.72)
// var erika = new Persona('Erika', 'Luna',1.62)
// var arturo = new Desarollador('Arturo', 'Martinez',2.0)


/*
*/