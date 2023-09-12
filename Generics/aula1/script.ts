// Exemplo 1
function retorno<Tipo>(a: Tipo): Tipo {
  return a;
}

retorno("A Game").charAt(0);
// retorno<string>(a: string): string

retorno(200).toFixed();
// retorno<number>(a: number): number

// Exemplo 2
function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
  return lista.slice(0, 5);
}

const numeros3 = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão"];

const five1 = firstFive(numeros);
const five2 = firstFive(frutas);

// Exemplo 3
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg;
  else return null;
}

notNull(200)?.toFixed();
notNull("André")?.toLowerCase();

// Exemplo 4
function tipoDado<T>(a: T) {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);
