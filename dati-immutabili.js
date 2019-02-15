/*
Un valore immutabile è un valore che non può cambiare dopo essere stato definito, si può modificare ma deve essere un oggetto differente
*/

const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

// const cumpleanos = persona => persona.edad ++

const cumpleanosInmutable = persona =>({
  ...persona, 
  edad: persona.edad +1 
})