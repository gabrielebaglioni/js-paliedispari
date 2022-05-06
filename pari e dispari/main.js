
//__________________________________
//
//               main
//___________________________________
//chiediamo all'utente se vuole pari o disparo 
//asseconda della sua scelta gli chiediamo di inserire un numero pari o dispari tra 1 e 5 
// const Sutente = prompt("scegli pari o dispari");
// const Nutente = Number(prompt("inserisci un numero compreso tra 1 e 5 asseconda della tua scelta precedente"));
// let somma = Number(0);

// let Ncomp = getRandomNumber (1, 5);
//  console.log(Ncomp);
// somma = Ncomp + Nutente;
// console.log(somma);


//l'utente sceglie un numero
const Sutente = prompt("scegli pari o dispari");
let numero;
// 
do{
   numero = Number(prompt("inserire un numerio da 1 a 5"));
} while (numero > 5);
const somma = numero + getRandomNumber(1, 5);
// controllo se la somma è pari o dispari e nomino il vincitore
if(isEven(somma)){
   console.log(somma);
   console.log("hai vinto");
} else{
   console.log(somma);
   console.log("hai");
}


// sommiamo i due numeri, 
// vedo se la somma è apri o dispari
//










//__________________________________

//            FUNZIONI
//_________________________________//  
// pari o dispri    
function isEven(num) {
   if( num % 2 === 0 ) {
       return true;
   }
   return false;
}
/*
   restituisce un numero random in un range min e max
*/
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*
   restituisce una lista di X(numeri) random tra min e max
*/
function getRandomNumbersList(nElements, min, max) {
   const numbers = [];
   for(let i = 0; i < nElements; i++) {
       numbers.push(getRandomNumber(min, max));
   }
   return numbers;
}
