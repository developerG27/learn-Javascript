const template = document.getElementById('template')

const myNewTemplate = template.content.cloneNode(true)

myNewTemplate.querySelector('h2').textContent = 'Napssive'
myNewTemplate.querySelector('p').textContent = 'Impara'

document.getElementById('content').appendChild(myNewTemplate)