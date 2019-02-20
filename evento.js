/*
Un evento è una funzione che si esegue quando succede qualcosa
*/

//Creiamo un input
var btn = document.createElement("INPUT")
//gli diamo un id
btn.id = 'btn-primary'
//inseriamo il suo tipo
btn.type="button"
//inseriamo il suo valore
btn.value = 'cliccami'
//lo inseriamo all'interno del body
document.body.appendChild(btn)


/*
Per creare un evento del mouse bisogna inserire la funzione addEventListener e dargli come parametro il tipo di evento
*/
//Eventi mouse
//click
btn.addEventListener('click',function(){
    console.log('hai cliccato')
    btn.style.background="red"
})

//Doppio click
btn.addEventListener('dblclick',function(){
    console.log('hai cliccato due volte')
})

//Mouse sopra
btn.addEventListener('mouseover',function(){
    console.log('sei sopra')
})

//Mouse fuori
btn.addEventListener('mouseout',function(){
    console.log('sei uscito')
})


//Eventi tastiera
//Creiamo un input di tipo text e lo inseriamo nel body
var inputText = document.createElement("INPUT")
inputText.id ='input-text'
inputText.type="text"
document.body.appendChild(inputText)

//Focus
inputText.addEventListener('focus',function(){
    console.log("sei dentro l'input")
})

//Blur
inputText.addEventListener('blur',function(){
    console.log("sei fuori dall'input")
})

//Key Down: quando premi in tasto in più grazie ai metodi aggiunti ci permette sapere quali tasti sono stati premuti
inputText.addEventListener('keydown',function(event){
    console.log("Hai premuto un tasto", String.fromCharCode(event.keyCode))
})

//Key press
inputText.addEventListener('keypress',function(event){
    console.log("Tasto premuto", String.fromCharCode(event.keyCode))
})

//Key up
inputText.addEventListener('keyup',function(event){
    console.log("Hai lasciato il tasto", String.fromCharCode(event.keyCode))
})

