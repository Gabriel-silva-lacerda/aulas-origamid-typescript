function arrendodaValor(n: string): string;
function arrendodaValor(n: number): number;
function arrendodaValor(n: number | string): number | string {
  if (typeof n === "number") {
    return Math.ceil(n);
  } else {
    return Math.ceil(Number(n)).toString();
  }
}

console.log(arrendodaValor(300.32));
console.log(arrendodaValor("300.32"));
