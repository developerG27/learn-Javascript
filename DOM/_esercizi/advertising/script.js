//Hai una lista di paragrafi e devi inserire al centro una pubblicità
const post = document.getElementById('post') //seleziono il contenitore
const ad = document.createElement('div') //creo un div
ad.id = 'js' //aggiungo un id al div
ad.textContent = 'Pubblicità' //aggiungo il testo

const getMiddleChild = element => { //funzione che prende il figlio centrale
  const childs = element.children //prende la lista dei figli
  const l = childs.length //calcola la quantità dei figli
  const i = Math.floor(l / 2) // lo divido a metà e arrotondo
  return childs[i] //lista dei figli con il numero nella metà
}

console.log(getMiddleChild(post));

const middleChild = getMiddleChild(post) //racchiudo in una variabile il paragrafo centrale
middleChild.appendChild(ad) //inserisco la pubblicità dopo il paragrafo centrale