//includere jQuery da Javascript
var script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.3.1.min.js'
document.head.appendChild(script)

var paragrafo = document.createElement('P')
paragrafo.id = 'id-paragrafo'
paragrafo.classList = 'class-paragrafo'
paragrafo.innerHTML='ciao' //inserisce del testo all'interno del paragrafo
document.body.appendChild(paragrafo)

//Quando il documento è pronto
$(document).ready(function(){
    console.log('sono pronto')

    //selettore ID
    $('#id-paragrafo').css('background','red') //seleziono il paragrafo appena creato e modifichiamo il suo css

    //Selettore Class
    $('.class-paragrafo').css('color','white')

    //Selettorre Tag
    $('p').click(function(){
        $('p').css('background','black')
    })

    //Selettore Attributo
    $('[attributo ="valore"]')
})