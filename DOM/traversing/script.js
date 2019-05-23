const parent = document.getElementById('parent')

console.log(parent.children) //Tutti i figli di parent

console.log(parent.hasChildNodes()) //ritorna true perchè ha figli


const newElement = document.createElement('h2') //creo nuovo elemento h2
newElement.textContent = 'Sono un nuovo elemento' //cambio il testo
parent.appendChild(newElement) //aggiunto a parent il nuovo elemento

//parent.insertBefore(nuovo)