

window.addEventListener("load",() =>{
    const form = document.querySelector("#insert");
    const input = document.querySelector("#insert");
    const listaElementi = document.querySelector("#tasks");
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
         
         const task = input.value;
         
         if(!task) {
            alert("Inserisci una task");
            return;
         }
           
         const elementiTask =document.createElement("div");
         elementiTask.classList.add("tas");

         const ContenutoElementiTask = document.createElement ("div");
         ContenutoElementiTask.classList.add("contenuto");
          
         elementiTask.appendChild(ContenutoElementiTask);

         const inputElementiTask = document.createElement("input")
         inputElementiTask.classList.add("task");
         inputElementiTask.type="text"
         inputElementiTask.value = task;
         inputElementiTask.setAttribute("readonly","readonly");

         ContenutoElementiTask.appendChild(inputElementiTask);

         listaElementi.appendChild(elementiTask);
        })
})