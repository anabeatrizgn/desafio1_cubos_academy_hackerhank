function solucao(texto) {
  let textoCorrigido = texto.trim();
  let quantidade = [];
  quantidade = textoCorrigido.split(" ");
  quantidade = quantidade.filter((x) => x != "");
  console.log(quantidade.length);
}

function processData(input) {
  solucao(input);
}
