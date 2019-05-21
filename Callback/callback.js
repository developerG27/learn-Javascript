const city = ['London','New York','Madrid','Paris','Sidney']

//Callaback inline
city.forEach((city) => {
  console.log(city)
})

//Si aggiungono nuovi paesi dopo 2 secondi
function newCity(city){
  setTimeout(function(){
    city.push(city)
  },2000)
}

//I paesi si mostrano dopo 1 secondo
function showCity(){
  setTimeout(() => {
    let html = '';
    city.forEach((city) => {
      html +=`<li>${city}</li>`
    })
    document.getElementById('app').innerHTML = html
  },1000)
}

showCity();