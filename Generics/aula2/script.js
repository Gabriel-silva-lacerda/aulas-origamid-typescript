"use strict";
// Exemplo 1
function extractText(el) {
    return el.innerText;
}
const link2 = document.querySelector("a");
if (link2) {
    console.log(extractText(link2));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
// Exemplo 2
function $(selector) {
    return document.querySelector(selector);
}
const link5 = $("a")?.href;
