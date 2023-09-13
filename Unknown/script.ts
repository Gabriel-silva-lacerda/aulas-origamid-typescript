function typeGuard2(value: unknown) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard2("Origamid");
typeGuard2(200);
typeGuard2(document.body);
