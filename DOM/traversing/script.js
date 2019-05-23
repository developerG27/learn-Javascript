const parent = document.getElementById('parent')
const grandson = document.getElementById('grandson-2')


console.log(parent.children); //Tutti i figli di parent

console.log(parent.hasChildNodes()); //ritorna true perchè ha figli

console.log(granson.parentElement()); //permette salire di livello