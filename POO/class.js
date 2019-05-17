class Usuario {
  constructor(nome, cognome, email, eta){
    this.nome = nome
    this.cognome = cognome
    this.email = email
    this.eta = eta
  }

  saludar(){
    return console.log(`Ciao mi chiamo ${this.nome}`)
  }
}

let gian = new Usuario('Gian', 'Cognome','gian.pumayalla@gmail.com',23)
console.log(gian)

class Professore extends Usuario{
  constructor(nome, cognome, email, eta, esperienza, linguaggi){
    super(nome, cognome, email, eta)
    this.linguaggi = linguaggi
    this.esperienza = esperienza
  }
}

class Estudiante extends Usuario{
  constructor(nome, cognome, email, eta, attivo, ){
    super(nome, cognome, email, eta)
    this.attivo = attivo
  }
}

let fernand = new Professore('Fernand','Guzman','fernan@gmail.com',33, 13, 'Javascript ')

console.log(fernand);