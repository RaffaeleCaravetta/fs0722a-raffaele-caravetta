import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Interface } from '../interface/interface';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {


@Input() post!:Interface;

@Output() toggleEmitter = new EventEmitter()

constructor() { }

ngOnInit(): void {

  }
  toggle(){
this.toggleEmitter.emit(this.post.id)
  }
}
