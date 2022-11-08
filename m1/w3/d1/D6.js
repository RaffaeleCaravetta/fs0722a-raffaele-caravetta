/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function areaRettangolo(l1,l2){
   return l1*l2 
}
areaRettangolo(5,15)
console.log(areaRettangolo(5,15));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1,num2){
let numeriInteri = [4.4,4.4]
 
if (numeriInteri[0] === numeriInteri[1]){
    return  Math.floor ((num1+num2)*3);
}else {
    return  Math.floor (num1+num2)
}
}
crazySum(4.4,4)
console.log(crazySum(4.4,4))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function(numb){
    if (numb > 19 ){
        return Math.abs (numb - 19) *3
    } else {
        return Math.abs (numb - 19)
    }
}

console.log (crazyDiff(21));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n){
    
    if ( n >20 &&  n<=100 || n===400) {
        console.log(true)    
} else {
    console.log(false)
}
}
boundary(20)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n){
    if (n%2==0 && n%3==0 || n%2==0 && n%7==0){
        console.log(true)
    } else {
        console.log(false)
    }
}
check3and7(142)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa){
   let stringaReverse=""
    for (let i=stringa.length -1 ; i>=0;i--){
        stringaReverse +=stringa[i]
    }
    
    return stringaReverse
}
reverseString("EPICODE")
console.log(reverseString("EPICODE"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(string){
    
    return string[0].toUpperCase() +  string.slice(1);

}
upperFirst("ciao sono raffaele caravetta")
console.log(upperFirst("ciao sono raffaele caravetta"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(ciao){
    let varA =""
    for(let i=1;i<ciao.length-1;i++){
        varA += ciao[i]
    }return varA
}
cutString("RaffaelE")
console.log(cutString("RaffaelE"))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom (n){
    let ciaoo =[]
    for (let i=0;i<11;i++){
    return ciaoo.push(Math.random()*11)
}
}
giveMeRandom(33)
console.log(giveMeRandom(33))
/* SCRIVI QUI LA TUA RISPOSTA */
