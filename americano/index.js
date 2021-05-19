function solucao(numeros) {
  let soma = numeros.reduce((acc, item) => acc + item);
  let indice = 0;
  if (soma <= numeros.length) {
    indice = soma;
  } else {
    indice =
      soma % numeros.length === 0 ? numeros.length : soma % numeros.length;
  }

  console.log(indice);
}
