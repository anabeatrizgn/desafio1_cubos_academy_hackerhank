function solucao(numero, limiteInferior, limiteSuperior) {
  let resposta =
    numero <= limiteSuperior && numero >= limiteInferior
      ? "PERTENCE"
      : "NÃO PERTENCE";
  console.log(resposta);
}
