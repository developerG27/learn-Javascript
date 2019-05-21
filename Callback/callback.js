const city = ['London','New York','Madrid','Paris','Sidney']

//Callaback inline
city.forEach((city) => {
  console.log(city);
})



// class Person {
//   constructor(name,surname,height) {
//     this.name = name
//     this. surname = surname
//     this.height = height
//     return this
//   }

//   greetings(fn){
//     var { name, surname } = this
//     console.log(`Hola me llamo ${this.name} ${this.surname}`)
//     if(fn){
//       fn(name, surname)
//     }
//   }

//   tall(){
//     return this.height > 1.8
//   }
// }

// class Developer extends Person{
//   constructor(name, surname, height){
//     super(name, surname, height)
//   }

//   greetings(fn){
//     var { name, surname } = this
//     console.log(`Hola, me llamo ${name} ${surname} y soy Developer`)
//   }
//   if(fn){
//     fn(name, surname, true)
//   }
// }

// function responderSaludo(name, surname, esDev){
//   console.log(`Buenos Dias ${name} ${surname} no sabia que eras dev`)
//   if(esDev){
//     console.log("No sabia que eras dev")
//   }
// } 

// var sacha = new Person('Sacha', 'Lifszyc',1.72)
// var erika = new Person('Erika', 'Luna',1.62)
// var arturo = new Developer('Arturo', 'Martinez',2.0)

// sacha.greetings()
// erika.greetings(responderSaludo)
// arturo.greetings(responderSaludo)

// /*
// */


// const API_URL = 'https://swapi.co/api/'
// const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
// const opts = {crossDomain: true}

// function obtenerPersonje(id, callback){
//   const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

//   $
//     .get(url, opts, callback)
//     .fail(() => {
//       console.log(`Sucediò un error. No se pudo obtener el Personje ${id}`)
//     })
// }

// obtenerPersonje(1, function(Personje){
//   console.log(`Hola, yo soy ${Personje.name}`)

//   obtenerPersonje(2, function(Personje){
//     console.log(`Hola, yo soy ${Personje.name}`)

//     obtenerPersonje(3,function(Personje){
//       console.log(`Hola, yo soy ${Personje.name}`)

//       obtenerPersonje(4, function(Personje){
//         console.log(`Hola, yo soy ${Personje.name}`)

//         obtenerPersonje(5, function(Personje){
//           console.log(`Hola, yo soy ${Personje.name}`)

//           obtenerPersonje(6, function(Personje){
//             console.log(`Hola, yo soy ${Personje.name}`)

//             obtenerPersonje(7, function(Personje){
//               console.log(`Hola, yo soy ${Personje.name}`)
//             })
//           })
//         })
//       })
//     })
//   })

// })


//CALLBACK https://platzi.com/clases/1339-fundamentos-javascript/12959-callbacks8214/