"use strict";
let produto = "Livro";
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
    volante: 2
};
function somar1(a, b) {
    return a + b;
}
somar1(5, 10);
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
