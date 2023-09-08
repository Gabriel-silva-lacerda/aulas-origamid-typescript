"use strict";
let total2 = 200;
total2 = '300';
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return 'Não é número';
    }
}
const button = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();
