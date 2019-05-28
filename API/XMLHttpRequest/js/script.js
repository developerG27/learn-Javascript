const c = document.getElementById('myContent')
const b = document.getElementById('btnLoad')
const l = document.getElementById('loading')

l.style.display = 'none'

b.addEventListener('click', e => {
  l.style.display = 'block'
  const xhr = new XMLHttpRequest();
  console.log(xhr.readyState);


  // xhr.open('metodo','dove', 'asincrona o no')
  xhr.open('GET','./data.html', true)

  //Cosa bisogna fare con i dati?
  xhr.addEventListener('load', e => {
    console.log(e.target)
    c.innerHTML = e.target.responseText
    l.style.display = 'none'
  })

  // Realizzare la richiesta
  xhr.send()
})