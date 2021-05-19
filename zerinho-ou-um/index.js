function solucao(jogadores) {
  let sorteado0 = jogadores.filter((x) => x.jogada === 0);
  let sorteado1 = jogadores.filter((x) => x.jogada === 1);

  if (sorteado0.length === 1) {
    console.log(sorteado0[0].nome);
  } else if (sorteado1.length === 1) {
    console.log(sorteado1[0].nome);
  } else {
    console.log("NINGUEM");
  }
}
