"use strict";
const produto1 = ["Notebook", 2500];
const produto2 = ["Notebook", 2500];
const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string
const [nome, preco2] = produto2;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button2 = getText("button");
if (button2) {
    const [buttonElement, buttonText] = button;
}
