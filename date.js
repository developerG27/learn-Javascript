//Ritorna la data completa
var data = new Date()
console.log(data)

//ritorna l'anno corrente
console.log(new Date().getFullYear())

//ritorna il mese: il conteggio parte da zero quindi dobbiamo convertirlo in numero e aggiungergli 1
console.log(parseInt(new Date().getMonth()) + 1)

//ritorna il giorno
console.log(new Date().getDate())

//ritorna l'ora
console.log(new Date().getHours())

//ritorna il minuto
console.log(new Date().getMinutes())

//ritona il secondo
console.log(new Date().getSeconds())

//ritorna il millesecondo
console.log(new Date().getMilliseconds())