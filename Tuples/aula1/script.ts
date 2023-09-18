const produto1: (string | number)[] = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];

const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string

const [nome, preco2] = produto2;

function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button2 = getText("button");

if (button2) {
  const [buttonElement, buttonText] = button;
}
