// Exemplo 1
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar(" Produto ");
normalizar(["Banana ", " UVA"]);

// Exemplo 2
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "div"): HTMLDivElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
