/*
- Creare un formulario che abbia tre campi: nome, cognome, year
- Creare un button con il tipo submit
*/

var form = document.createElement('FORM')
form.id="id-form"
var inputNome = document.createElement('INPUT')
var inputCognome = document.createElement('INPUT')
var inputYear = document.createElement('INPUT')

var inputNome = document.createElement('INPUT')
var inputCognome = document.createElement('INPUT')
var inputYear = document.createElement('INPUT')
var inputSubmit = document.createElement('INPUT')

inputNome.type="text"
inputNome.name="nome"
inputNome.id="id-nome"

inputCognome.type="text"
inputCognome.name="cognome"
inputCognome.id="id-cognome"

inputYear.type="text"
inputYear.name="year"
inputYear.id="id-year"

inputSubmit.type="button"
inputSubmit.value="Invia"
inputSubmit.id ="id-submit"

document.body.appendChild(inputNome)
document.body.appendChild(inputCognome)
document.body.appendChild(inputYear)
document.body.appendChild(inputSubmit)