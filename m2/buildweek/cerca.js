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
     let img = document.querySelectorAll(".a")
         for (let e of img) {
           
           // element.style.maxWidth="24px"
            let ran = Math.floor(8 * Math.random())
            e.setAttribute("src", immagini[ran])
            e.style.maxWidth="35px"
            e.style.transform= 'rotate(30deg)'
            e.style.marginLeft='20%'
            
            console.log(e)
            
         }

         let home = document.querySelector(".home")
         let homep = document.querySelector(".homep")
         let cerca = document.querySelector(".cerca")
         let cercap = document.querySelector(".cercap")
         let libreria = document.querySelector(".libreria")
         let libreriap = document.querySelector(".libreriap")
         if(location.href === "http://127.0.0.1:5500/cerca.html"){
             home.classList.add("text-white-50") 
             homep.classList.add("text-white-50")
 
             libreria.classList.add("text-white-50")
             libreriap.classList.add("text-white-50")
         }

         function div(){
         let input = document.getElementsByTagName("input")
         console.log(input)
        
         let arr=[]
       
         arr.push(index.artist.name)

         console.log(arr)
         for (let e of arr){
            let element = e
            if(element.search(input.value)== -1){
                let div = document.createElement("div").innerHTML=element
                let header = document.getElementsByTagName("header")
                header.appendChild(div)

            }
         }
         
      }
        }
        index3()