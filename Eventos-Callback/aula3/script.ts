const btn = document.querySelector("button");
const nav = document.querySelector("nav");

btn?.addEventListener("click", () => {
  nav?.classList.toggle("active");
  if (nav?.classList.contains("active")) {
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Fechar Menu");
  } else {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Abrir Menu");
  }
});
