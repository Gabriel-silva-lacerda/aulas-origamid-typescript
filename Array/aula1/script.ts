const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];

function maiorQue10(data: Array<number>) {
  return data.filter((n) => n > 10);
}
maiorQue10(numeros);

function filtrarValores(data: Array<number | string>) {
  return data.filter((item) => typeof item === 'number');
}
filtrarValores(valores);

const dados: (string | number)[][] = [
  ['senhor dos aneis', 80],
  ['a guerra dos tronos', 120],
];

