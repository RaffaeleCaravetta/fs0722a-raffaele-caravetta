async function htmlPopolation() {
    let album1 = ("index.json")
       try {  
        let album2 = await fetch(album1) 
            return await album2.json();}
       catch{
               document.write("C'è stato un errore, il documento non è caricato correttamente")
            }
 } 

          
        let album3 = async function album4(){
            let album = await htmlPopolation()
          //  let divAlbum= document.querySelector(".divAlbum") 
            //divAlbum.setAttribute("id",album.title)
            //let prova = divAlbum.id === album.title? true : false;
           /* let divAppend = document.getElementById("#appendChild") 
           if (prova === true){
                   for (let e of album.tracks.data){
                    let div = document.createElement("div")
                    div.innerHTML =`<div class="p-2 w-100">${e.title}+" <br>"+ ${e.artist.name} </div>
                    <div class="p-2 flex-shrink-1  opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg></div>
                     `
                  div.classList.add("d-flex")
                  
                  

               
                    console.log(div)
                   }
            } */
           // divAppend.innerHTML(div)
       // location.href=("album.html")     
       let albums = []
       albums.push(album)
       console.log(albums)
       let img= document.querySelector(".immagineIndex")
      console.log(img)
      img.src=albums[0].tracks.data[0].album.md5_image
      img.style.maxWidth="100%"
      let h1 =document.querySelector(".titoloIndex")
      h1.textContent=albums[0].tracks.data[0].title
      let img1 = document.querySelector(".a")
      img1.src=  albums[0].cover_small 
      let albumIndex = document.querySelector(".albumIndex")
      albumIndex.textContent =" " + albums[0].artist.name
      albumIndex.style.color = "white"
      albumIndex.style.fontWeight = "bold"




      let songs=[]
     for (let e of album.tracks.data){
               songs.push(e.title)

               let a = document. createElement("div")
               let h5=document.createElement("h5")
               h5.style.color="white"
               h5.textContent=e.title
               let p = document.createElement("p")
               p.style.color="grey"
               p.textContent=albums[0].artist.name
               a.appendChild(h5)
               a.appendChild(p)
               let appendChild= document.querySelector("#appendChild")
               appendChild.appendChild(a)
      };
       
        console.log(songs)
         
      }
        album3()
        
     