"use strict";
function normalizarTexto(texto) {
    return texto.trim().toLocaleLowerCase();
}
console.log(normalizarTexto("Gabriel"));
const input = document.querySelector('input');
const total1 = localStorage.getItem('total');
if (total1 && input) {
    input.value = total1;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p)
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input)
    input.addEventListener('keyup', totalMudou);
