/*
Una volta che una funzione ritorna un errore interrompe l'esecuzione, utilizzando try e catch l'esecuzione non viene interrotta
*/

try{
    funzioneRotta()
} catch(error){
    console.log(error)
} finally {
    console.log('viene eseguita sempre')
}

function ottenereClienti(){
    console.log('Scaricando..')
    setTimeout(function(){
        console.log('Completo')
    },3000)
}

ottenereClienti()