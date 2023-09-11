const button1 = document.querySelector("button");

function handleClick(event: MouseEvent) {
  console.log(event.pageX);
}

button?.addEventListener("click", handleClick);

function handleScroll(event: Event) {
  console.log(event);
}

window.addEventListener("scroll", handleScroll);

function ativarMenu(event: Event) {
  console.log(event.type);
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("pointerdown", ativarMenu);
