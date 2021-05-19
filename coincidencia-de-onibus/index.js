function solucao(a, b) {
  let resto = 1,
    x = a,
    y = b;

  while (resto != 0) {
    resto = x % y;
    x = y;
    y = resto;
  }

  let hIguais = (a * b) / x;
  console.log(hIguais);
}
