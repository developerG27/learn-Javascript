/*
Javascript è in grado di eseguire un solo compito alla volta, indipendentemente dalla potenza di calcolo del tuo computer.
E' in grado di delegare alcune funzioni ad altri processi

Javascript al suo interno ha una pila di esecuzione chiamata callstack dove andranno le chiamate di esecuzione.

*/

console.log('a')
setTimeout(function(){
  console.log('b')
},0)
console.log('c')

setTimeout(() => console.log('d'),2000)