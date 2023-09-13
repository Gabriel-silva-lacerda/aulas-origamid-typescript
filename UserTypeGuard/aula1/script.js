"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos2(json);
}
fetchCursos();
function handleCursos2(data) {
    if (data instanceof Array) {
        console.log("É instância de Array");
    }
    if (Array.isArray(data)) {
        console.log("É array");
    }
}
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        data.toUpperCase();
    }
}
handleData("Origamid");
handleData(200);
