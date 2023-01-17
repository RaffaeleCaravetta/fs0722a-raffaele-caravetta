import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Interface } from 'src/app/interface/interface';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-inattivi',
  templateUrl: './inattivi.component.html',
  styleUrls: ['./inattivi.component.scss']
})
export class InattiviComponent implements OnInit {

  posts:Interface[] = []

  constructor(private ps:ServiceService) {

  }
  ngOnInit(): void {
    this.posts=this.ps.getPostFiltrati(false)
  }

  attiva(id:number) {
    console.log(id);
    this.posts = this.posts.filter(p=p.id!=id)
  }
}
