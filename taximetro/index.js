function solucao(min, km) {
  let preco1 = min > 20 ? 20 * 50 + (min - 20) * 30 : min * 50;
  let preco2 = km > 10 ? 10 * 70 + (km - 10) * 50 : km * 70;
  let precoTotal = preco1 + preco2;
  console.log(precoTotal);
}
