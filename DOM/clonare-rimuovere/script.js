const pRemove = document.getElementById('remove')
const pClone = document.getElementById('clone')

//elimino l'elemento
pRemove.remove();

//clono l'elemento
pClone.after(pClone.cloneNode(true))