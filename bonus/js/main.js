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

if (scelta ===0) {
  alert("hai scelto difficoltà facile");
  while (listamine.length < 16) { //finchè il mio array non arriva a 16 tu continua a popolarlo
    numGenerato = numRandom(1,100); //generami numeri casuali da 1 a 100 alla volta

    if (listamine.includes(numGenerato) == false) { //se il numero è già presente dimmelo
      listamine.push(numGenerato); //pusha il numero nell'array
    }

  }

  console.log(listamine);



  //chiedo all'utente di inserire una lista di numeri mai uguali da 1 a 100 uno alla volta


  while (punteggio <= 84 && mossa == false) {
    var user = parseInt(prompt("inserisci un numero da 1 a 100 sperando non sia una mina"));
  //controllo se il numero inserito è una mina
    mossa = presente (user, listamine);

    if (mossa == true) {
      alert("gioco terminato hai perso");
    }else {
      //controllo se il numero inserito è già stato inserito altrimenti lo inserisco
        var verifica= presente(user, numInseriti);
        if (verifica == true) {
         console.log("hai già inserito il numero: ",user);
       }else if (user > 100 ) {
         alert("non puoi inserire numeri superiori a 100 so dove abiti");
       }else if (isNaN(user) === true) {
         alert("devi inserire un numero non fare il furbo o ti spezzo le gambe");

       }

       else {
         numInseriti.push(user);
         punteggio +=1;
       }
    }

  }
}


if (scelta ===1) {
  alert("hai scelto difficoltà media numeri fino a 80");
  while (listamine.length < 16) { //finchè il mio array non arriva a 16 tu continua a popolarlo
    numGenerato = numRandom(1,80); //generami numeri casuali da 1 a 100 alla volta

    if (listamine.includes(numGenerato) == false) { //se il numero è già presente dimmelo
      listamine.push(numGenerato); //pusha il numero nell'array
    }

  }

  console.log(listamine);



  //chiedo all'utente di inserire una lista di numeri mai uguali da 1 a 100 uno alla volta


  while (punteggio <= 64 && mossa == false) {
    var user = parseInt(prompt("inserisci un numero da 1 a 80 sperando non sia una mina"));
  //controllo se il numero inserito è una mina
    mossa = presente (user, listamine);

    if (mossa == true) {
      alert("gioco terminato hai perso");
    }else {
      //controllo se il numero inserito è già stato inserito altrimenti lo inserisco
        var verifica= presente(user, numInseriti);
        if (verifica == true) {
         console.log("hai già inserito il numero: ",user);
       }else if (user > 80 ) {
         alert("non puoi inserire numeri superiori a 80 so dove abiti");
       }else if (isNaN(user) === true) {
         alert("devi inserire un numero non fare il furbo o ti spezzo le gambe");

       }

       else {
         numInseriti.push(user);
         punteggio +=1;
       }
    }

  }
}

if (scelta === 2) {
    alert("hai scelto difficoltà media numeri fino a 50");
  while (listamine.length < 16) { //finchè il mio array non arriva a 16 tu continua a popolarlo
    numGenerato = numRandom(1,50); //generami numeri casuali da 1 a 100 alla volta

    if (listamine.includes(numGenerato) == false) { //se il numero è già presente dimmelo
      listamine.push(numGenerato); //pusha il numero nell'array
    }

  }

  console.log(listamine);



  //chiedo all'utente di inserire una lista di numeri mai uguali da 1 a 100 uno alla volta


  while (punteggio <= 34 && mossa == false) {
    var user = parseInt(prompt("inserisci un numero da 1 a 50 sperando non sia una mina"));
  //controllo se il numero inserito è una mina
    mossa = presente (user, listamine);

    if (mossa == true) {
      alert("gioco terminato hai perso");
    }else {
      //controllo se il numero inserito è già stato inserito altrimenti lo inserisco
        var verifica= presente(user, numInseriti);
        if (verifica == true) {
         console.log("hai già inserito il numero: ",user);
       }else if (user > 50 ) {
         alert("non puoi inserire numeri superiori a 50 so dove abiti");
       }else if (isNaN(user) === true) {
         alert("devi inserire un numero non fare il furbo o ti spezzo le gambe");

       }

       else {
         numInseriti.push(user);
         punteggio +=1;
       }
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
