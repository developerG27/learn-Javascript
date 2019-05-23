const linguaggi = ['Javascript', 'C#', 'Python', 'Php']
const listaLinguaggi = document.createElement('ul')
const listaLinguaggiContenitore = document.getElementById('container')
const listaLinguaggiFragment = document.createDocumentFragment()
listaLinguaggiContenitore.appendChild(listaLinguaggi)

for (let linguaggio of linguaggi){
  const li = document.createElement('li')
  listaLinguaggiFragment.appendChild(li)
  li.textContent = linguaggio
}

listaLinguaggi.appendChild(listaLinguaggiFragment)