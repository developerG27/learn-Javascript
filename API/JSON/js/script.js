const c = document.getElementById('myContent')
const b = document.getElementById('btnLoad')
const l = document.getElementById('loading')

l.style.display = 'none'

b.addEventListener('click', evt => {
  l.style.display = 'block'
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET','./data.json', true)

  //Cosa bisogna fare con i dati?
  xhr.addEventListener('load', e => {
    console.log(e.target.responseText);
    const data = JSON.parse(e.target.responseText)
    draw(data)
    console.log(data);

    l.style.display = 'none'
  })

  // Realizzare la richiesta
  xhr.send()
})

const draw = data => {
  data.forEach(n => {
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const content = document.createElement('p')
    const datenew = document.createElement('span')

    title.textContent = n.Titulo
    content.textContent = n.Contenido
    datenew.textContet = n.Fecha

    container.appendChild(title)
    container.appendChild(content)
    container.appendChild(datenew)

    c.appendChild(container)
  });
}