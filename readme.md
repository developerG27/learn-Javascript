#Javascript  6h 34min



Differenze tra let e var cost
Let permette dichiarare variabili limitando il suo scope 
var permette dichiarare una variabili raggiungibile ovunque
const permette dichiarare una variabile che non può cambiare il suo valore
Il punto e virgola (;) è opzionale

Libri:  https://jsparagatos.com/


Perchè jQuery non è più la libreria più adatta
A causa dell'abuso di questa libreria, in quanto veniva usato quando realmente non era necessario
Non bisogna essere dipendenti da una libreria, bisogna conoscere la tecnologia che c'è dietro


Processo Asincrono:
E' un codice che si sta eseguendo ma non ha ancora terminato di eseguirsi prima che inizi ad eseguirsi un altro codice





Script Per i corsi
let t = ['']
document.querySelectorAll( '.MaterialContent-duration' ).forEach( el => t.push( el.textContent ) );

const tN = t.map( el => { let acum = parseInt( '0'+el.split(':')[0] ); return parseInt('0'+acum ) } );
const tt = String( ( tN.reduce( ( acum, el ) => { acum += parseInt( 1*el ); return 1*acum } ) / 60 ).toFixed(2) ).split('.');
const d = `${tt[0]} hs` + ( tt[1] ? ` ${~~(tt[1]*60/100)} min` : '' )

const html = document
  .querySelector( '.CourseBanner-title' )
  .textContent + `<small style='color:darkred;font-weight:normal'><br>Duración apróx.: <b>${d}</b><br>Cant. de videos : <b>${t.length}</b></small>`

document.querySelector( '.CourseBanner span' ).innerHTML = html


Le promesse soo una forma di eseguire il nostro codice in maniera asincrona evitano che si riprodusca un callback hell

Perchè due oggetti siano identicamente uguali (===) devono fare riferimento allo stesso spazio in memoria
