function processData(input) {
  let nomeSemEspaco = input.trim();
  let nomeCorrigido = "";
  if (
    nomeSemEspaco ===
    nomeSemEspaco[0].toLowerCase() + nomeSemEspaco.substr(1).toUpperCase()
  ) {
    nomeCorrigido =
      nomeSemEspaco[0].toUpperCase() + nomeSemEspaco.substr(1).toLowerCase();
    console.log(nomeCorrigido);
  } else if (nomeSemEspaco === nomeSemEspaco.toUpperCase()) {
    nomeCorrigido = nomeSemEspaco.toLowerCase();
    console.log(nomeCorrigido);
  } else {
    console.log(nomeSemEspaco);
  }
}
