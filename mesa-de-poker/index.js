function solucao(min, max, valores) {
  let permitidos = [];
  permitidos = valores.filter((x) => x >= min && x <= max);
  console.log(permitidos);
}
