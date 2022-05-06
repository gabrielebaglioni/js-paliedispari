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
      if(word[i] == word[Wordlenght - 1 - i]){
         return "la parola è palindroma"
      }else{
         return "la parola non è palindroma"
      }
   }

}
//chiamo la funzione
const check = palidromeChek(word)
console.log(check)