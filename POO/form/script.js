class Utente {
  constructor(nome,cognome,email,password){
    this.nome = nome
    this.cognome = cognome
    this.email = email
    this.password = password
  }
}

let form1 = document.getElementById('formulario');

form1.addEventListener('submit', e =>{
  e.preventDefault()
  let nome = e.target.nome.value
  let cognome = e.target.cognome.value
  let email = e.target.email.value
  let password = e.target.password.value

  let utente = new Utente(
    nome,
    cognome,
    email,
    password
  )
    
  console.log(utente);
});
