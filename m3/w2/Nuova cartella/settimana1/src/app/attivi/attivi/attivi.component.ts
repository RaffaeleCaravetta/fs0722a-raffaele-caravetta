import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/interface/interface';
import { ServiceService } from 'src/app/service/service.service';



@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrls: ['./attivi.component.scss']
})
export class AttiviComponent implements OnInit {

  posts: Interface[] = this.ps.getPostFiltrati(true)

 //pSrv:ServiceService;

  constructor(private ps:ServiceService) {
     //this.pSrv=ps
    }


  ngOnInit(): void {
  this.posts=this.ps.getPostFiltrati(true)
  }

  disattiva(id:number) {
    console.log(id);
    this.posts = this.posts.filter(p=p.id!=id)
  }

}



