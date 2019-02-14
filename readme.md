#Javascript  6h 34min



Differenze tra let e var cost
Let permette dichiarare variabili limitando il suo scope 
var permette dichiarare una variabili raggiungibile ovunque
const permette dichiarare una variabile che non può cambiare il suo valore
Il punto e virgola (;) è opzionale





Libri:  https://jsparagatos.com/

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