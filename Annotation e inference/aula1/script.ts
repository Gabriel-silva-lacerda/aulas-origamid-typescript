let produto: string = "Livro";
const preco: number = 200;

const carro = {
  marca: 'Audi',
  portas: 5,
  volante: 2
};

function somar1(a: number, b: number) {
  return a + b;
}

somar1(5, 10);

const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = 'R$ ' + produto.preco;
  return produto;
}

const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);


