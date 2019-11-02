/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati, la partita termina,
altrimenti continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.*/

//scelgo la difficoltà
var scelta = parseInt(prompt("scegli tra la modalità: facile=0, medio=1 e difficile=2"));
//genero dei numeri casuali e popolo un array di 16 elementi
var listamine = [];
var mossa = false;
var punteggio = 0;
var numInseriti = [];
var i= 0;
var numGenerato;
var maxRandom;
var punteggioMax;


  if (scelta ===0) {
    alert("hai scelto difficoltà facile numeri fino a 100");
    maxRandom = 100;
    punteggioMax = 84;
  }
  else if (scelta ===1) {
    alert("hai scelto difficoltà media numeri fino a 80");
    maxRandom = 80;
    punteggioMax = 64;
  }
  else if (scelta ===2) {
    alert("hai scelto difficoltà difficile numeri fino a 50");
    maxRandom = 50;
    punteggioMax = 34;
  }
  else {
  alert("non hai scelto un valore valido non puoi giocare");
  }



  while (listamine.length < 16) { //finchè il mio array non arriva a 16 tu continua a popolarlo
    numGenerato = numRandom(1,maxRandom); //generami numeri casuali da 1 a 100 alla volta

    if (listamine.includes(numGenerato) == false) { //se il numero è già presente dimmelo
      listamine.push(numGenerato); //pusha il numero nell'array
    }

  }

  console.log(listamine);


  //chiedo all'utente di inserire una lista di numeri mai uguali da 1 a 100 uno alla volta

  while (punteggio <= punteggioMax && mossa == false) {
    var user = parseInt(prompt("inserisci un numero da 1 a " + maxRandom + " sperando non sia una mina"));
  //controllo se il numero inserito è una mina
    mossa = presente (user, listamine);

    if (mossa == true) {
      alert("gioco terminato hai perso");
    }else {
      //controllo se il numero inserito è già stato inserito altrimenti lo inserisco
        var verifica= presente(user, numInseriti);
        if (verifica == true) {
         console.log("hai già inserito il numero: ",user);
       }else if (user > maxRandom) {
         alert("non puoi inserire numeri superiori a " + maxRandom + " so dove abiti");
       }else if (isNaN(user) === true) {
         alert("devi inserire un numero non fare il furbo o ti spezzo le gambe");

       }

       else {
         numInseriti.push(user);
         punteggio +=1;
       }
    }

  }



console.log("Il tuo punteggio è: ",punteggio);
console.log(numInseriti);

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
