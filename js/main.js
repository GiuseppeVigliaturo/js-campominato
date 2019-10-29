/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.*/

//genero dei numeri casuali e popolo un array di 16 elementi
var listamine = [];

console.log(listamine.length);
var i= 0;
var numTmp;

while (listamine.length < 16) { //finchè il mio array non arriva a 16 tu continua a popolarlo
  numTmp = numRandom(1,100); //generami numeri casuali da 1 a 100 alla volta

  if (listamine.includes(numTmp) == false) { //se il numero è già presente dimmelo
    listamine.push(numTmp); //pusha il numero nell'array
  }

}

console.log(listamine);

//chiedo all'utente di inserire una lista di numeri mai uguali da 1 a 100 alla volta
var j = 0;
var mossa = false;
var punteggio = 0;
var numInseriti = [];
while (j <= 84 && mossa == false) {
  var user = parseInt(prompt("inserisci un numero da 1 a 100 sperando non sia una mina"));

  var verifica= presente(user, numInseriti);
  if (verifica == true) {
   console.log("hai già inserito il numero: ",user);
 }else {
   numInseriti.push(user);
 }

  mossa = presente (user, listamine);

  if (mossa == true) {
    alert("gioco terminato hai perso")
  }else {
    punteggio +=1;
  }

  j++;
}
console.log("Il tuo punteggio è: ",punteggio);


//funzioni
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function presente(valore, array){
  var found = false;
  var i=0;
  while (found == false && i < array.length) {
    if (array[i] == valore) {
      found = true;
    }
    i++;
  }
  return found;
}
