import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  completati:List[]=this.todoSrv.list
  caricamento:boolean = false

  constructor(private todoSrv:TodosService) { }


  //OnInite setto un timeout di 2 secondi , ritorno il booleano "caricamento" true
  ngOnInit(): void {
    setTimeout (() => {
      this.caricamento = true

    },2000)
  }

  //setto il timeout e  richiamo la funzione "rimuovi elemento"
  rimuovi(id:number){
    setTimeout (() => {
      this.todoSrv.rimuoviElemento(id)
      //this.completati.splice(id,1)
      this.completati = this.completati.filter(item => item.id!==id)
    }, 2000);
  }

}
