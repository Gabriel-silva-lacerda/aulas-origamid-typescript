"use strict";
function arrendodaValor(n) {
    if (typeof n === "number") {
        return Math.ceil(n);
    }
    else {
        return Math.ceil(Number(n)).toString();
    }
}
console.log(arrendodaValor(300.32));
console.log(arrendodaValor("300.32"));
