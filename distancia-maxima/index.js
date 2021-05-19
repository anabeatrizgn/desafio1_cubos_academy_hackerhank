function processData(input) {
  const linhas = input.trim().split("\n");
  const coordenadas = linhas.slice(1);
  let distancia = 0;
  const x = [];
  const y = [];

  coordenadas.forEach((item) => {
    x.push(parseFloat(item.slice(0, item.indexOf(" "))));
    y.push(parseFloat(item.slice(item.indexOf(" ") + 1)));
  });

  for (let i = 0; i < x.length; i++) {
    for (let z = i + 1; z < y.length; z++) {
      const calculo = Math.sqrt(
        Math.pow(x[z] - x[i], 2) + Math.pow(y[z] - y[i], 2)
      );
      if (calculo > distancia) {
        distancia = calculo;
      }
    }
  }

  console.log(distancia);
}
