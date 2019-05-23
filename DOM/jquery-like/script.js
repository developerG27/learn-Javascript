const parent = document.getElementById('parent')
const ad = document.createElement('div')
ad.id = 'Jquery-like'
ad.textContent = 'Jquery Like'

//lo aggiunge prima dell'elemento
parent.before(ad)

//lo aggiunge dopo l'elemento
parent.after(ad)

//lo inserisci prima del figlio
parent.prepend(ad)

//lo insersice dopo il figlio
parent.append(ad)

//rimpiazza l'elemento
parent.replaceWith(ad)