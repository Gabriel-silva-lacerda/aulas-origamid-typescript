function ativarMenu(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this.innerText);
}

const button3 = document.querySelector("button");
button3?.addEventListener("click", ativarMenu);
