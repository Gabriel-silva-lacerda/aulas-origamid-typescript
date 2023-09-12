function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
somar(3, 4);
somar(3, 4, 1);

const subtrair = (a: number, b: number): number => a - b;

subtrair(10, 2);

type Callback = (event: MouseEvent) => void;

function pintarTela(cor: string) {
  document.body.style.background = cor;
}

pintarTela("black");

// Erro, void não pode ser verificado
// if (pintarTela('black')) {
// }

const btn1 = document.querySelector("button");

// Erro, void não pode ser verificado
// if (btn1 && btn1.click()) {
// }

// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

if (isString("teste")) {
  console.log("É string");
}

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

abortar("Um erro ocorreu");
console.log("Tente novamente");
