let timeout = setTimeout(figuracce(),5000)
    
function figuracce(){
//triangolo
var base_triangolo = document.querySelector("#a");
var altezza_triangolo = document.querySelector("#b");
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
console.log(figura_cerchio)
let nmb = Math.floor(Math.random() * 1000)
let array = []
array.push(figura_triangolo,
figura_rettangolo,
figura_quadrato,
figura_trapezio,
figura_cerchio)


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
        base: base_triangolo === null || base_triangolo === void 0 ? void 0 : base_triangolo.textContent,
        altezza: altezza_triangolo === null || altezza_triangolo === void 0 ? void 0 : altezza_triangolo.textContent,
        area: function () {
            return this.base * this.altezza / 2;
        }
    },
    {
        nome: nomiFigureGeometriche.RETTANGOLO,
        img: "./Immagini_figure_geometriche/rettangolo.png",
        base: base_rettangolo === null || base_rettangolo === void 0 ? void 0 : base_rettangolo.textContent,
        altezza: altezza_rettangolo === null || altezza_rettangolo === void 0 ? void 0 : altezza_rettangolo.textContent,
        area: function () {
            return this.base * this.altezza;
        }
    },
    {
        nome: nomiFigureGeometriche.QUADRATO,
        img: "./Immagini_figure_geometriche/quadrato.png",
        lato: lato_quadrato === null || lato_quadrato === void 0 ? void 0 : lato_quadrato.textContent,
        area: function () {
            return this.lato * 2;
        }
    },
    {
        nome: nomiFigureGeometriche.TRAPEZIO,
        img: "./Immagini_figure_geometriche/trapezio.png",
        baseM: base_M_trapezio === null || base_M_trapezio === void 0 ? void 0 : base_M_trapezio.textContent,
        basem: base_m_trapezio === null || base_m_trapezio === void 0 ? void 0 : base_m_trapezio.textContent,
        altezza: altezza_trapezio === null || altezza_trapezio === void 0 ? void 0 : altezza_trapezio.textContent,
        area: function () {
            return (this.baseM + this.basem) * this.altezza / 2;
        }
    },
    {
        nome: nomiFigureGeometriche.CERCHIO,
        img: "./Immagini_figure_geometriche/cerchio.png",
        raggio: raggio_cerchio === null || raggio_cerchio === void 0 ? void 0 : raggio_cerchio.textContent,
        area: function () {
            return 3.14 * (this.raggio * 2);
        }
    }
];
/**/
function calcolaArea(elemento) {
    if (elemento.name == "triangolo") {
        var p0 = document.querySelector("#p0");
        p0.textContent = figure_geometriche[0].area();
    }
    else if (elemento.name == "rettangolo") {
        var p1 = document.querySelector("#p1");
        p1.textContent = figure_geometriche[1].area();
    }
    else if (elemento.name == "quadrato") {
        var p2 = document.querySelector("#p2");
        p2.textContent = figure_geometriche[2].area();
    }
    else if (elemento.name == "trapezio") {
        var p3 = document.querySelector("#p3");
        p3.textContent = figure_geometriche[3].area();
    }
    else if (elemento.name == "cerchio") {
        var p4 = document.querySelector("#p4");
        p4.textContent = figure_geometriche[4].area();
    }
}





for (let e of array){
    let timer = setInterval(
    e.setAttribute(`transform`,`translate(${nmb}px,${nmb}px)`)
,3000 )
}}