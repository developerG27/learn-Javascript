setTimeout(function(){
  console.log("È passato 1 secondo")
  setTimeout(function(){
    console.log("Sono passati 2 secondi")
    setTimeout(function(){
      console.log("Sono passati 3 secondi")
      setTimeout(function(){
        console.log("Sono passati 4 secondi")
        // Possiamo continuare all'infinito
      }, 4000)
    }, 3000)
  }, 2000)
}, 1000)