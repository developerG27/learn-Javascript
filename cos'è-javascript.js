/*
A cosa serve Javascript?
Javascript è un linguaggio di programmazione che permette a gli sviluppatori manipolare il comportamento di un sito web, negli ultimi anni però, la sua evoluzione è stata talmente esponenziale che ha influenzato quasi tutti i rami dell'informatica.

E' in assoluto il linguaggio protagonista del web moderno in quanto permette di:
- Manipolare gli elementi all'interno del browser
- Validare i form
- Creare chat in live
- Webscraping
- Applicazioni lato server

Ma il suo uso non si ferma solo al web, si può anche
- Programmare l' Internet Of Thing (Internet delle cose)
- Creare software per Windows, Mac, Linux (Electron)
- Sviluppo di applicazioni native per Android e iOS (React Native)
- Creare Videogiochi online (canvas)

La storia di Javascript
Fu creato da Brendan Eich nel 1995 e il primo nome di questo linguaggio fu Mocha, poi venne sostituito da LiveScript e successivamente, tramite accordi commerciali si arrivo a Javascript.
Javascript non è Java, non condivide praticamente nulla se non che entrambi sono linguaggi di programmazione.
Visto l'enorme successo che il web stava avendo in quegli anni Microsoft decise di sviluppare Internet Explorer e al suo interno ci inserirì un linguaggio di programmazione scritto da loro e lo chiamò JScript.
Per gli sviluppatori questo diventò un incubo in quanto dovevano scrivere e tastare il codice due volte

Nel 1997 Nacque Ecma-262, ora riconsciuto come EcmaScript, che permise standardizzare il linguaggio.
Tuttavia EcmaScript non è Javascript.
Javascript è molto di più in quanto al suo interno troviamo:
- Core (EcmaScript)
- DOM (Document Object Model)
- BOM (Browser Object Model)
EcmaScript non è legato al web in quanto definisce solo la sintassi del linguaggio, questo ha portato a estrapolarlo dal web e così sono nate nuove tecnologie come Node.js

EcmaScript (ES)
Ecma sta per European Computer Manufacturers Association.
Negli anni si è evoluto:
-ES1: Giugno 1997, è la stessa versione che fu prodotta da Brendan Eich
-ES2: Giugno 1998, ci furono piccolissimi cambiamenti
-ES3: Dicembre 1999, permise un salto di qualità in quanto portò Javascript come lo conosciamo oggi
-ES4: ebbe un cambiamento troppo radicale, furono introdotte variabili fortemente tipicizzate, classi, ereditarietà per questo motivo fu presto abbandonata.
-ES5: Dicembre 2009, aggiunge i JSON, la strict mode
-ES6: Giugno 2015, si sono aggiunte le classi, sono stati aggiunti i rest e spread operator, destructuring
-ES7: Giugno 2016
-ES8: Giugno 2017
-ES9: Giugno 2018
-ES10

Caratteristiche
E' un linguaggio di programmazione multi paradigma, questo vuol dire che può essere:
- Orientato ad oggetti basato su prototipi (il più comune)
- Funzionale
- Interpretato
- Imperativo
Non ha bisogno di essere compilato in quanto viene interpretato dal browser,
Non è obbligatorio inserire il punto e virgola
E' debolmente tipicizzato, ossia non bisogna dichiarare il tipo della variabile
console.log('hello world')
NaN : not a number
Non è uguale a niente, nemmeno a se stesso

Commenti
I commenti servono per poter inserire delle linee senza che queste vengano prese in considerazione, se usate in maniera corretta questo migliora di gran lunga il lavoro dello sviluppatore, esistono due tipologie di commenti
//Commenti ad una linea
/* Commenti multilinea *|
Bisogna però tenere in considerazione che il codice Javascript viene visto nei vari browser e quindi devono essere elimininati prima di pubblicare il progetto online

Variabili e costanti
Le variabili servono per memorizzare valori o oggetti, quando si dichiara una variabile bisogna seguire alcune regole:
- il suo nome non deve essere una parola riservata (lista )
abstract
else
int
switch
boolean
extends
interface
synchronized
break
false
long
this
byte
final
native
throw
case
finally
new
throws
catch
float
null
transient
char
for
package
true
class
function
private
try
const
goto
protected
typeof
continue
if
public
var
default
implements
return
void
delete
import
short
while
do
in
static
with
double
instanceof
super

- non può iniziare con un numero
- non può contenere caratteri speciali:
    - lo spazio
    - il trattino (-)
    - il punto interrogativo (?)
    - il punto (.)
Sono ammessi:
-L'underscore (_)
- Il simbolo del dollaro ($)

Esempio di variabili valide:
var nome
var variabile
var $nomeVariabile
var _variabile

Variabili non valide
var function
var 1variabile
var nome.variabile
Quando dichiariamo una variabile senza assegnargli un valore, gli viene assegnato automaticamente undefined

Le variabili moderne
Con l'arrivo di ES6, sono state introdotte nuove tipologie di variabili
- let
- const
let permette dichiarare una variabile raggiungibile solo nel suo stesso contesto
var permette dichiarare una variabile raggiungibile ovunque
const permette dichiarare una variabile che non può cambiare il suo valore

let nome = 'gian'
const ANNO_DI_NASCITA = 1996


*/

