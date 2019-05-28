const c = document.getElementById('myContent')
const b = document.getElementById('btnLoad')

b.addEventListener('click', e => {
  const xhr = new XMLHttpRequest();
  // xhr.open('metodo','dove', 'asincrona o no')
  xhr.open('GET','./data.html', true)

  //Cosa bisogna fare con i dati?
  xhr.addEventListener('load', e => {
    console.log(e.target)
    c.innerHTML = e.target.responseText
  })

  // Realizzare la richiesta
  xhr.send()
})