import { Injectable } from '@angular/core';
import { Interface } from '../interface/interface';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  allPosts = [
    {
      "id":1,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type":"news"
  },
  {
      "id":2,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type":"politics"
  },
  {
      "id":3,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type":"education"
  },
  {
      "id":4,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":false,
      "type":"news"
  },
  {
      "id":5,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":false,
      "type":"news"
  }
]

constructor() { }

getPost(): Interface[]{
  return this.allPosts
}

getPostAttivi(){
  return this.allPosts.filter(p=>p.active)
  this.allPosts.filter((p)=>{
    return p.active
  })
}

getPostInattivi(){
  return this.allPosts.filter(p=>p.active==false)
}
getPostFiltrati(a:boolean ){
  return this.allPosts.filter(p=>p.active==a)
}

/*getPostFiltrati(a:boolean) {
  let p = fetch("assets/db(2).json")

  console.log(p)
  let j = p.then((response)=>{
    return response.json
  })

  let filteredPromise = j.then((posts:Interface[])=>{
    return posts.filter(p=>p.active==a)
  })

return filteredPromise
}

async getPostsFiltered(a:boolean) {
  let p = await fetch("assets/db(2).json")
  let posts:Interface[] = await response.json()
  let arr = posts.filter(p=>p.active==a)
  return arr
}

fetchData() {
  return fetch().then(res=>res.json()).then
}

*/
}
