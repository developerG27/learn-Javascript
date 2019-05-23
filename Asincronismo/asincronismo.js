console.log('a')
setTimeout(function(){
  console.log('b')
},0)
console.log('c')

setTimeout(() => console.log('d'),2000)