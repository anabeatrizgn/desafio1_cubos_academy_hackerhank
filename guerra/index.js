function processData(input) {
  const criancas = input.split("");
  let tempoAtual = 0;
  let tempoFinal = 0;
  let tempoJaIniciado = false;

  // considerando as duas pontas da jogada = <
  for (let i = 0; i < criancas.length; i++) {
    const crianca = criancas[i];
    if (crianca === ".") {
      tempoAtual++;
    } else if (crianca === ">") {
      if (tempoJaIniciado) {
        if (tempoAtual > tempoFinal) {
          tempoFinal = tempoAtual;
        }
        tempoAtual = 0;
      } else {
        tempoJaIniciado = true;
        tempoAtual = 0;
      }
    } else if (crianca === "<") {
      if (tempoJaIniciado) {
        tempoAtual = Math.ceil(tempoAtual / 2);
      }
      if (tempoAtual > tempoFinal) {
        tempoFinal = tempoAtual;
      }
      tempoAtual = 0;
      tempoJaIniciado = false;
    }
  }

  if (tempoJaIniciado && tempoAtual > tempoFinal) {
    tempoFinal = tempoAtual;
  }
  console.log(tempoFinal);
}
