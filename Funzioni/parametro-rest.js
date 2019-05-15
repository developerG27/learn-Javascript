const numeri = (...numeri) => {
  let risultato = 0
  for(let i = 0; i < numeri.length; i++){
    risultato += numeri[i]
  }
  console.log(risultato);
}

numeri(1,2,3,4,5,6);