/*
parlare di oggetti in javascript, vuol dire parlare di prototipi
this fa riferimento all'oggetto appena creato, nelle arrow function this === window
La parola riservata new si utilizza per creare un nuovo oggetto con il prototipo indicato
*/

function heredaDe(prototipoHijo,prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn

  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre,apellido,altura) {
  this.nombre = nombre
  this. apellido = apellido
  this.altura = altura
  return this
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
  (this.altura > 1.8) ? console.log('soy alto') : console.log('no soy alto')
} 

function Desarollador(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarollador, Persona)

Desarollador.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} y soy desarollador`)
}


// var sacha = new Persona('Sacha', 'Lifszyc',1.72)
// var erika = new Persona('Erika', 'Luna',1.62)
// var arturo = new Persona('Arturo', 'Martinez',2.0)


/*Javascript non supporta l'ereditarietà, perchè non supporta le classi, in Javascript non ci sono classi ma prototipi ai quali aggiungiamo i metodi che ricevono funzioni, non esiste un sistema per la quale un prototipo erediti da un altro.
Questo problema è stato risolto con l'ereditarietà prototipale:
-Come funziona? E' possibile creare prototipi figli, questo figlio ogni volta che non troverà un metodo dentro se stesso lo cercherà in papà nonno, si ad arrivare al prototipo giusto, se in caso non viene trovato nulla Javascript lancerà l'errore
*/