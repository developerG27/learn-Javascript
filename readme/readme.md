# Documentazione Javascript 

## Introduzione
- Cos'è Javascript *
- Storia di Javascript 
- EcmaScript
- Caratteristiche di Javascript
- Commenti
- Variabili e costanti
- Tipologia di dati
- Gli operatori

## Condizionali
- Classici
- Multipli e annidati
- Switch

## Ciclo
- for
- while
- do-while

## Funzioni
- parametri
- tipologie
- scope
- this
- arrow function (funzioni a freccia)
- closures

## Array
- Destructuring
- Spread operator
- Ricorrenza (ciclare un array)
- Metodi principali

## Oggetto
- Literali e prototipi
- Proprietà
- Ricorrenza 
- Metodi

## Classi
- Ereditarietà
- Metodi principali

## DOM
- Cos'è il DOM
- JSON
- Nodi
- Manipolazione
- Css Object Model

## Eventi
- Mouse
- Tastiera
- Form
- Browser
- Propagazione
- Traversing

## Browser
- Windows
- Location
- History
- Browser
- Timers
- Date

## Local Storage 

## Asincronismo
- Protocollo HTTP
- API
- XMLHttpRequest
- Promesse
- Callback
- Ajax
- Fetch
- Async Await
- Websocket

## Librerie e Framework
- Jquery
- Angular
- React


Perchè jQuery non è più la libreria più adatta
A causa dell'abuso di questa libreria, in quanto veniva usato quando realmente non era necessario
Non bisogna essere dipendenti da una libreria, bisogna conoscere la tecnologia che c'è dietro


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

In Javascript esistono cinque tipi di dati primitivi:
numeri
stringhe
booleani
null
undefined
oggetti


Terminare un istruzione con il punto e virgola in Javascript non è obbligatorio


# Link di referenza 
- https://github.com/getify/You-Dont-Know-JS/blob/master/preface.md 
- https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md

Libri:  https://jsparagatos.com/

Javascript è case sensitive ossia fa distinzione tra maiuscole e minuscole
Javascript è un linguaggio interpretato
E' debolmente tipicizzato
Quando dichiariamo una variabile non cè bisogno di specificare il tipo di dato
Javascript è molto semplice da imparare, ma la sua completa padronanza è più difficile rispetto ad altri linguaggi