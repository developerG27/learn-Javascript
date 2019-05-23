//selezionare dal DOM un elemento con il id title
const title = document.getElementById('title')
console.log(title.getAttribute('id'))

//selezionare dal DOM gli elemeenti h2
const subtitle = document.querySelector('h2')

//inserire l'id all'elemento
subtitle.setAttribute('id','subtitle')

//inserire la classe all'elemento
title.classList.add('main','title')

//Creare il tag p
const paragrafo = document.createElement('p')

//Cambiare il testo di paragrafo
paragrafo.textContent = "Sono un paragrafo"

//Settare id paragrafo
paragrafo.id = 'teacher'

//Inserire nel DOM paragrafo
document.body.appendChild(paragrafo)