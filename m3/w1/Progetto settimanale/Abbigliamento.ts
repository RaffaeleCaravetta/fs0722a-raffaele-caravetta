abstract class capiAbbigliamento{

    // proprietà di classe
        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number

 // il costruttore della classe referenzia le proprietà
constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
    this.id=id
    this.codprod=codprod
    this.collezione=collezione
    this.capo=capo
    this.modello=modello
    this.quantita=quantita
    this.colore=colore
    this.prezzoivaesclusa=prezzoivaesclusa
    this.prezzoivainclusa=prezzoivainclusa
    this.disponibile=disponibile
    this.saldo=saldo

 }  

     // dichiarazione dei metodi astratti
    public abstract   getsaldocapo():number
    public abstract getacquistocapo():number
 

}
         // classe ArmadioAbbigliamento estende CapiAbbigliamento
        class ArmadioAbbigliamento extends capiAbbigliamento{

             //passaggio dei parametri al costruttore
            constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
              
                // utilizzo del comando super passare come parametro le proprietà della superclasse
              super(id,codprod,collezione,capo,modello,quantita,colore,prezzoivaesclusa,prezzoivainclusa,disponibile,saldo)


            }

             // implementazione metodo getsaldocapo
             public  getsaldocapo():number{

                return this.prezzoivainclusa * this.saldo /100
 
             }
                   
               // implementazione metodo getacquistocapo 
             public  getacquistocapo():number{
 
                 return Math.floor(this.prezzoivainclusa - this.getsaldocapo())
                 
             }  
             
         }
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
