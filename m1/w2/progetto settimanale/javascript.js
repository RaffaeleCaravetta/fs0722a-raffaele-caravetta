alert("ciao Luca");
   

function aggiungiCifra(elemento) { // creo una funzione che mi fa a pescare l'elemento e la richiamo con html
    let cifraCliccata = elemento.textContent; //pongo una variabile uguale al contenuto dell'elemento cliccato
    document.getElementById("numbers").value += cifraCliccata; // Uso il lettore di dati getelement di document , selezioni il valore dell'id numeri + la cifra cliccata
}

function uguale(){ //creo un'altra funzione per svolgere le operazioni matematiche all'interno dell'input
    document.getElementById("numbers").value = eval (document.getElementById("numbers").value);// creo un'uguaglianza tra la funzione dichiarata numbers e l'elemento selezionato dall'id numbers.
     //do' il valore di eval+crifrecliccate

}

function cancella() { // creo una funzione che mi fa a pescare l'elemento e la richiamo con html
    let cancella = document.getElementById("numbers").value; //pongo una variabile uguale al contenuto dell'elemento cliccato
    cancella=cancella.slice(0,-1);//applico la condizione
    console.log(cancella); //mando il console cifraCliccata
    document.getElementById("numbers").value=cancella; //assegno la funzione al valore dell'input
}

function cancellaTutto() { // creo una funzione che mi fa a pescare l'elemento e la richiamo con html
    document.getElementById("numbers").value="";
}
