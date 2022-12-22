async function prendiAbbigliamento() {
    let abbigliamento = ("Abbigliamento.json")
       try {  
        let collezioneCapi = await fetch(abbigliamento) 
            return await collezioneCapi.json();}
       catch{
               document.write("C'è stato un errore, i cani stanno pascolando al posto delle pecore")
            }
 }
 async function gestisciAbbigliamento() {
    var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var capiAbbigliamento = /** @class */ (function () {
    // il costruttore della classe referenzia le proprietà
    function capiAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    return capiAbbigliamento;
}());
// classe ArmadioAbbigliamento estende CapiAbbigliamento
var ArmadioAbbigliamento = /** @class */ (function (_super) {
    __extends(ArmadioAbbigliamento, _super);
    //passaggio dei parametri al costruttore
    function ArmadioAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        // utilizzo del comando super passare come parametro le proprietà della superclasse
        return _super.call(this, id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) || this;
    }
    // implementazione metodo getsaldocapo
    ArmadioAbbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    // implementazione metodo getacquistocapo 
    ArmadioAbbigliamento.prototype.getacquistocapo = function () {
        return Math.floor(this.prezzoivainclusa - this.getsaldocapo());
    };
    return ArmadioAbbigliamento;
}(capiAbbigliamento));
// set proprietà al costruttore
/* let capo = new ArmadioAbbigliamento(e.id,e.codprod,e.collezione,e.capo,e.modello,e.quantita,e.colore,e.prezzoivaesclusa,e.prezzoivainclusa,e.disponibile,e.saldo)
 // chiamo il metodo getUtileTasse
 let saldo = capo.getsaldocapo()
 console.log('\n');
 
 console.log('saldo di questo capo d\'abbigliamento:'+saldo+'€');
  
  // chiamo il metodo getacquistocapo
 let prezzoFinale= capo.getacquistocapo()
 

// stampo tutte le istanze
 console.log('Prezzo finale di questo capo:'+prezzoFinale+'€');
 */
 
    let capi = await prendiAbbigliamento()
   

         
        
    for (let e of capi){
        
     
    
// set proprietà al costruttore
let capo = new ArmadioAbbigliamento(e.id,e.codprod,e.collezione,e.capo,e.modello,e.quantita,e.colore,e.prezzoivaesclusa,e.prezzoivainclusa,e.disponibile,e.saldo)
          // chiamo il metodo getUtileTasse
          console.log(capo)
          let saldo = capo.getsaldocapo()
          console.log('\n');
          
          console.log('saldo di questo capo d\'abbigliamento:'+saldo+'€');
           
           // chiamo il metodo getacquistocapo
          let prezzoFinale= capo.getacquistocapo()
          

         // stampo tutte le istanze
          console.log('Prezzo finale di questo capo:'+prezzoFinale+'€');
         
          let ul = document.querySelector(".ul")
          let li = document.createElement("li")
          li.setAttribute("class", "list-group-item")
         
          li.textContent= capo.capo + ":" + " prezzo iniziale: " +  capo.prezzoivainclusa + "€, prezzo scontato: " + capo.getacquistocapo() +"€"
       
            ul.appendChild(li)
         }
         
        /* for (let elemento of span){
            
             elemento.textContent = capo[i].getacquistocapo()}
          }
         */
          

        }

prendiAbbigliamento()
gestisciAbbigliamento()