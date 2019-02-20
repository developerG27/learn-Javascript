var script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.3.1.min.js'
document.head.appendChild(script)

var div = document.createElement('DIV')
div.id = 'box'
document.body.appendChild(div)


$(document).ready(function(){
    //carica l'url inserita
    $('#box').load('https://reqres.in/')

    $.ajax({
        type: 'POST'
        url:
    })
})