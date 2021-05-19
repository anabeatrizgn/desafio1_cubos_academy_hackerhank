function solucao(lista) {
  let maioresDeIdade = [];
  maioresDeIdade = lista.filter((x) => x >= 18);
  if (maioresDeIdade.length !== 0) {
    let maisNovo = maioresDeIdade.reduce((acc, item) =>
      item < acc ? item : acc
    );
    console.log(maisNovo);
  } else {
    console.log("CRESÇA E APAREÇA");
  }
}
