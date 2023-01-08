//triangolo
let base_triangolo = document.querySelector("#a")
let altezza_triangolo = document.querySelector("#b")


//rettangolo
let base_rettangolo = document.querySelector("#c")
let altezza_rettangolo = document.querySelector("#d")


//quadrato
let lato_quadrato = document.querySelector("#e")


//trapezio
let base_M_trapezio = document.querySelector("#f")
let base_m_trapezio = document.querySelector("#g")
let altezza_trapezio = document.querySelector("#h")


//cerchio
let raggio_cerchio = document.querySelector("#i")


enum nomiFigureGeometriche{
    TRIANGOLO = "Triangolo",
    RETTANGOLO = "Rettangolo",
    QUADRATO = "Quadrato",
    TRAPEZIO = "Trapezio",
    CERCHIO = "Cerchio"
}

const figure_geometriche =[ 
{
    nome:nomiFigureGeometriche.TRIANGOLO ,
    img:"./Immagini_figure_geometriche/triangolo.png",
    base: base_triangolo?.textContent,
    altezza: altezza_triangolo?.textContent,
    area: function(){
        return this.base * this.altezza / 2
    } ,
},
{
    nome: nomiFigureGeometriche.RETTANGOLO,
    img: "./Immagini_figure_geometriche/rettangolo.png",
    base: base_rettangolo?.textContent,
    altezza: altezza_rettangolo?.textContent,
    area: function(){
        return this.base * this.altezza
    },
},
{
    nome: nomiFigureGeometriche.QUADRATO,
    img: "./Immagini_figure_geometriche/quadrato.png",
    lato:lato_quadrato?.textContent,
    area: function(){
    return this.lato * 2
    },
},
{
    nome: nomiFigureGeometriche.TRAPEZIO,
    img: "./Immagini_figure_geometriche/trapezio.png",
    baseM : base_M_trapezio?.textContent,
    basem: base_m_trapezio?.textContent,
    altezza: altezza_trapezio?.textContent,
    area: function(){
        return (this.baseM + this.basem) * this.altezza / 2
    },
},
{
    nome: nomiFigureGeometriche.CERCHIO, 
    img: "./Immagini_figure_geometriche/cerchio.png",
    raggio: raggio_cerchio?.textContent,
    area: function(){
        return 3.14 * (this.raggio * 2)
    },
}]


    /**/


    function calcolaArea(elemento) {
            
        if(elemento.textContent == "Calcola area triangolo"){
            let p0:any = document.querySelector("#0")
            p0.textContent = figure_geometriche[0].area
        }else if(elemento.textContent == "Calcola area rettangolo"){
            let p1:any = document.querySelector("#1")
            p1.textContent = figure_geometriche[1].area
        }else if(elemento.textContent == "Calcola area quadrato"){
                let p2:any = document.querySelector("#2")
                p2.textContent = figure_geometriche[2].area
        }else if(elemento.textContent == "Calcola area trapezio"){
                let p3:any = document.querySelector("#3")
                p3.textContent = figure_geometriche[3].area
        }else if(elemento.textContent == "Calcola area cerchio"){
            let p4:any = document.querySelector("#4")
            p4.textContent = figure_geometriche[4].area
        }
    }