function somma(a,b,callback){
  return callback(a+b)
}

document.getElementById('operator').addEventListener('click', () => {
  var a = parseInt(document.getElementById('a').value)
  var b = parseInt(document.getElementById('b').value)

  somma(a,b, function (r){
    console.log(`il risultato è  ${r} `);
  })
})