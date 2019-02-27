/*
Le variabili servono per memorizzare valori o oggetti, quando si dichiara una variabile deve seguire alcune regole:
- il suo nome non deve essere una parola riservata
- non può iniziare con un numero
- non può contenere caratteri speciali:
    - lo spazio
    - il trattino (-)
    - il punto interrogativo (?)
    - il punto (.)
Sono ammessi:
-L'underscore (_)
- Il simbolo del dollaro ($)

Variabili valide
var nome
var variabile
var $nomeVariabile
var _variabile

Variabili non valide
var function
var 1variabile
var nome.variabile

Differenze tra let e var cost
Let permette dichiarare variabili limitando il suo scope
var permette dichiarare una variabili raggiungibile ovunque
const permette dichiarare una variabile che non può cambiare il suo valore
Il punto e virgola (;) è opzionale

Quando dichiariamo una variabile senza assegnargli un valore, gli viene assegnato automaticamente undefined

*/