//Salvare nel local storage partendo da un input
var inputText = document.createElement('INPUT')
inputText.type = "text"
inputText.id = "input-text"
document.body.appendChild(inputText)

inputText.addEventListener('keypress',function(event){
    if(event.keyCode == 13) {
        var testo = inputText.value
        localStorage.setItem("testo", testo)
    }
})