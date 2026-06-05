const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
const carrusel = document.querySelector(".carrusel");

const btnSiguiente = document.getElementById("siguiente");
const btnAnterior = document.getElementById("anterior");

let indice = 0;

btnSiguiente.addEventListener("click", () => {

    indice++;

    if(indice > 2){
        indice = 0;
    }

    carrusel.style.transform =
        `translateX(-${indice * 100}%)`;

});

btnAnterior.addEventListener("click", () => {

    indice--;

    if(indice < 0){
        indice = 2;
    }

    carrusel.style.transform =
        `translateX(-${indice * 100}%)`;

});