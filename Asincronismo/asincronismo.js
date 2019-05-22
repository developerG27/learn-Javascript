console.log('a')
setTimeout(function(){
  console.log('b')
},0)
console.log('c')

setTimeout(() => console.log('d'),2000)




/**
 Async Await è la forma più semplice di realizzare azioni asincrone
 E' importante pensare agli array quando si usano async await
 Async Await ferma l'esecuzione del programma fin quando tutte le promesse non vengono risolte
 */

