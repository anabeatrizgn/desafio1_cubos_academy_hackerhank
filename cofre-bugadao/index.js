function processData(input) {
  const membros = input.trim().toLowerCase().split("\n");
  let senha = membros[0];
  senha = senha.split("");
  let digitacao = membros[1];
  digitacao = digitacao.split("");

  let confirmacao = false;
  for (i = 0; i < senha.length; i++) {
    if (digitacao.indexOf(senha[i]) !== -1) {
      let indice = digitacao.indexOf(senha[i]);
      digitacao.splice(0, indice - 1);
      confirmacao = true;
    } else {
      confirmacao = false;
    }

    if (!confirmacao) {
      break;
    }
  }

  if (confirmacao) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}
