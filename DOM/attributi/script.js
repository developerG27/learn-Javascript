const title = document.getElementById('title')
console.log(title.getAttribute('id'))

const subtitle = document.querySelector('h2')
subtitle.setAttribute('id','subtitle')

title.classList.add('main','title')

console.log(title.textContent)


//Creare elementi
const paragrafo = document.createElement('p')
paragrafo.textContent = "Sono un paragrafo"
paragrafo.id = 'teacher'
document.body.appendChild(paragrafo)