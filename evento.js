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
