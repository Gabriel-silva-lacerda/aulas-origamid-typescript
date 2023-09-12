// Exemplo 1
function extractText<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText;
}

const link2 = document.querySelector("a");

if (link2) {
  console.log(extractText(link2));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link5 = $<HTMLAnchorElement>("a")?.href;
