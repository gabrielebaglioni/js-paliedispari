//chiedere all'utente di inserire una parola 
// fare un check tramite una funzione, che definirà se è palindroma o no
//salvo in una costante la parola chiesta
//creo una funzione 
const word = prompt("inserisci una parola");
function palidromeChek(word){
   //salvo all'interno la lunghezza del mio imput
   const Wordlenght = word.length;
   //ciclo per metà della lunghezza del mio imput
   for(let i = 0; i < Wordlenght / 2; i++){
      //controllo che entrambe le metà siano uguali 
      if(word[i] == word[Wordlenght - 1 + i]){
         return "la parola è palindroma"
      }else{
         return "la parola non è palindroma"
      }
   }

}
//chiamo la funzione
const check = palidromeChek(word)
console.log(check)




/////////PAROLA PALINDROMA CON PROPRIETà DELLE STRINGHE/////////////
 //           PRIMO TENTANTIVO BARANDO
// var parola = 'osso';

// var parolaInversa = invertiParola(parola);

// if(parola == parolaInversa){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }
  
// function invertiParola(str){
//   var strInversa = str.split('').reverse().join('');  
//   return strInversa;
// }

//              SECONDO TENTATIVO NON ANDATO A BUON FINE

// const parola = "otto";
// let invertiParola = ParolaInversa (parola);
// if (parola == invertiParola){
//    console.log("la parola è palindroma");
// } else{
//    console.log("la parola non è palindroma");
// }


// function ParolaInversa(inverti){
//    let invertiParola = "";
//    let i = parola.length - 1;
//    while(i < 0){
//       invertiParola += inverti[i];
//       i --;
//    }
//    return  invertiParola;
// }



