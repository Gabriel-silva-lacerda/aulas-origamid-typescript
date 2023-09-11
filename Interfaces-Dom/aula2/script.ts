const links2 = document.querySelectorAll(".link");
console.log(links2);

const mudarCor = (e: HTMLElement) => {
  e.style.color = "red";
  e.style.border = "2px solid red";
};

links2.forEach((link) => {
  if (link instanceof HTMLElement) mudarCor(link);
});
