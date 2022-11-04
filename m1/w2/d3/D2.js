/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let dataType= "I datatype di javascript sono numeri, array, oggetti,boolean e stringhe. Nelle variabili i numeri per essere calcolati come numeri vanno inseriti senza virgolette, altrimenti vengono calcolati come testo, al pari di una parola.Gli array sono gruppi di valori,per esempio nella variabile -dati- inseriamo -nome,cognome,eta,luogo di nascita-. e vanno divisi dalla virgola. Gli oggetti sono il contenuto delle variabili. I boolean sono delle condizioni per verificare se una cosa che noi abbiamo dichiarato è vera o falsa. Le stringhe sono il valore della variabile espresso in testo all'interno delle virgolette.";
console.log(dataType);
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Raffaele";
console.log();
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let firstNumber = 12;
let secondNumber = 20;

console.log(firstNumber + secondNumber);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
let name= "Raffo"
const cognome =" Caravetta";
cognome = cognome +name;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4;
console.log(y - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1="john";
let name2="John";
console.log("name1 e name2 sono uguali:",name1 === name2);
console.log(
  "name1 e name2 in lowercase sono uguali:",
  name1.toLowerCase()=== name2.toLowerCase()
)





/* SCRIVI QUI LA TUA RISPOSTA */
