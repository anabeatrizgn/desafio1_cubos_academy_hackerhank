function solucao(lista) {
  let media = lista.reduce((acc, ind) => acc + ind);
  media /= lista.length;
  console.log(media);
}
