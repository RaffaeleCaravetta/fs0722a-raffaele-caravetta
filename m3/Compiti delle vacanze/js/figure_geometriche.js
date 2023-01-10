
    
//triangolo
let base_triangolo = document.querySelector("#a");
let altezza_triangolo = document.querySelector("#b");
//rettangolo
var base_rettangolo = document.querySelector("#c");
var altezza_rettangolo = document.querySelector("#d");
//quadrato
var lato_quadrato = document.querySelector("#e");
//trapezio
var base_M_trapezio = document.querySelector("#f");
var base_m_trapezio = document.querySelector("#g");
var altezza_trapezio = document.querySelector("#h");
//cerchio
var raggio_cerchio = document.querySelector("#i");

let figura_triangolo = document.getElementById("triangolo")
let figura_rettangolo = document.querySelector("#rettangolo")
let figura_quadrato = document.querySelector("#quadrato")
let figura_trapezio = document.querySelector("#trapezio")
let figura_cerchio = document.querySelector("#cerchio")


let array = []
array.push(figura_triangolo,
figura_rettangolo,
figura_quadrato,
figura_trapezio,
figura_cerchio)
console.log(array)

var nomiFigureGeometriche;
(function (nomiFigureGeometriche) {
    nomiFigureGeometriche["TRIANGOLO"] = "Triangolo";
    nomiFigureGeometriche["RETTANGOLO"] = "Rettangolo";
    nomiFigureGeometriche["QUADRATO"] = "Quadrato";
    nomiFigureGeometriche["TRAPEZIO"] = "Trapezio";
    nomiFigureGeometriche["CERCHIO"] = "Cerchio";
})(nomiFigureGeometriche || (nomiFigureGeometriche = {}));
var figure_geometriche = [
    {
        nome: nomiFigureGeometriche.TRIANGOLO,
        img: "./Immagini_figure_geometriche/triangolo.png",
        base: base_triangolo === null || base_triangolo === void 0 ? void 0 : base_triangolo,
        altezza: altezza_triangolo === null || altezza_triangolo === void 0 ? void 0 : altezza_triangolo,
        area: function () {
            var p0 = document.querySelector("#p0");
            p0.textContent = this.base.value *= this.altezza.value / 2;
            this.base.value= ""
            this.altezza.value=""
        }
    },
    {
        nome: nomiFigureGeometriche.RETTANGOLO,
        img: "./Immagini_figure_geometriche/rettangolo.png",
        base: base_rettangolo === null || base_rettangolo === void 0 ? void 0 : base_rettangolo,
        altezza: altezza_rettangolo === null || altezza_rettangolo === void 0 ? void 0 : altezza_rettangolo,
        area: function () {
            var p1 = document.querySelector("#p1");
            p1.textContent = this.base.value *= this.altezza.value;
            this.base.value= ""
            this.altezza.value= ""
        }
    },
    {
        nome: nomiFigureGeometriche.QUADRATO,
        img: "./Immagini_figure_geometriche/quadrato.png",
        lato: lato_quadrato === null || lato_quadrato === void 0 ? void 0 : lato_quadrato,
        area: function () {
            var p2 = document.querySelector("#p2");
            p2.textContent = this.lato.value*= 2;
            this.lato.value=""
        }
    },
    {
        nome: nomiFigureGeometriche.TRAPEZIO,
        img: "./Immagini_figure_geometriche/trapezio.png",
        baseM: base_M_trapezio === null || base_M_trapezio === void 0 ? void 0 : base_M_trapezio,
        basem: base_m_trapezio === null || base_m_trapezio === void 0 ? void 0 : base_m_trapezio,
        altezza: altezza_trapezio === null || altezza_trapezio === void 0 ? void 0 : altezza_trapezio,
        area: function () {
            var p3 = document.querySelector("#p3");
            var add = parseInt(this.baseM.value) + parseInt(this.basem.value)
            console.log(add)
            p3.textContent = add *= this.altezza.value / 2;
            this.baseM.value= ""
            this.basem.value= ""
            this.altezza.value= ""
        }
    },
    {
        nome: nomiFigureGeometriche.CERCHIO,
        img: "./Immagini_figure_geometriche/cerchio.png",
        raggio: raggio_cerchio === null || raggio_cerchio === void 0 ? void 0 : raggio_cerchio,
        area: function () {
            var p4 = document.querySelector("#p4");
            p4.textContent = Math.floor( 3.14 * (this.raggio.value *= 2));
            this.raggio.value = ""
        }
    }
];
/**/
function calcolaArea(elemento) {
    if (elemento.textContent == "Calcola area triangolo") {
       figure_geometriche[0].area()
        
    }
    else if (elemento.textContent == "Calcola area rettangolo") {
        figure_geometriche[1].area();
    }
    else if (elemento.textContent == "Calcola area quadrato") {
       figure_geometriche[2].area();
    }
    else if (elemento.textContent == "Calcola area trapezio") {
       figure_geometriche[3].area();
    }
    else if (elemento.textContent == "Calcola area cerchio") {
       figure_geometriche[4].area();
    }
    else{
        elemento.textContent="C'è un problema nel calcolare questa area"
    }
}


setInterval(
function figuracce() {
    for (let e of array){
        let nmb = Math.floor(Math.random() * 1700)
        let nmb1 = Math.floor(Math.random() * 250)
        e.style.transform = `translate(${nmb}px,${nmb1}px)`
        
        console.log(e)
  }
}    
,3000 )
