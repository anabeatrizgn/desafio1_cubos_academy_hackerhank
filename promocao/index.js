function solucao(precos) {
  if (precos.length >= 3) {
    let menorPreco = precos.reduce((acc, item) => (item < acc ? item : acc));
    let index = precos.indexOf(menorPreco);
    precos.splice(index, 1, menorPreco / 2);
  }

  let total = precos.reduce((acc, item) => item + acc);
  console.log(total);
}
