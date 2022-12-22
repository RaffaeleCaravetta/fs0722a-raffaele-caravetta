async function htmlPopolation() {
    let index1 = ("index.json")
       try {  
        let index2 = await fetch(index1) 
            return await index2.json();}
       catch{
               document.write("C'è stato un errore, il documento non è caricato correttamente")
            }
 }




        let index3 = async function provino(){
       let index = await htmlPopolation()
     console.log(index)
              


      
       
       
        let immagini= []
        index.tracks.data.forEach(element => {
             immagini.push(element.album.md5_image)
             }) 
     let div = document.querySelectorAll(".a")
         div.forEach(element => {
           // element.style.maxWidth="24px"
           
            let a = document.querySelectorAll(".imgRandom")
            for(let i of a){
                 let ran = Math.floor(21 * Math.random())
            i.src = immagini[ran]
             
}
          
       
            
         })

         let img1 = document.querySelectorAll(".ab")
         for (let e of img1){
            console.log(e)
            let ran = Math.floor(21 * Math.random())
            e.src= immagini[ran]
            e.style.width="100%"
            }
          
         

         
         let abc = document.querySelector(".abc")
         abc.setAttribute("src" ,index.cover)

          
         let p = document.querySelector(".text").innerHTML = index.contributors[0].name + "<br>" + index.title
         
        let home = document.querySelector(".home")
        let homep = document.querySelector(".homep")
        let cerca = document.querySelector(".cerca")
        let cercap = document.querySelector(".cercap")
        let libreria = document.querySelector(".libreria")
        let libreriap = document.querySelector(".libreriap")
        if(location.href === "http://127.0.0.1:5500/index.html"){
            cerca.classList.add("text-white-50") 
            cercap.classList.add("text-white-50")

            libreria.classList.add("text-white-50")
            libreriap.classList.add("text-white-50")
        }

             

  }
         
         index3()
                
                    
           function vai_all_album(){        
           location.href=("album.html")     
    } 
          
             
         
    
       
        

