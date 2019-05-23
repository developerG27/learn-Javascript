const parent = document.getElementById('parent')
const ad = document.createElement('div')
ad.id = 'EDteam'
ad.textContent = 'Publicidad'

//prima che inizi l'elemento
parent.insertAdjacentElement('beforebegin', ad)

//dopo che l'elemento inizia
parent.insertAdjacentElement('afterbegin', ad)

//prima che finisca l'elemento
parent.insertAdjacentElement('beforeend', ad)

//dopo che finise l'elemento
parent.insertAdjacentElement('afterend', ad)