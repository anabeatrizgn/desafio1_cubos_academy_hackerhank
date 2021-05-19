function processData(input) {
  const membros = input.split(" ");

  let grupo1 = parseInt(membros[0]);
  let grupo2 = parseInt(membros[1]);
  let grupo3 = parseInt(membros[2]);
  let grupo4 = parseInt(membros[3]);

  if (grupo1 > grupo3) {
    grupo4 += grupo3;
    grupo1 -= grupo3;
    if (grupo1 === grupo2) {
      grupo2 % 2 === 0
        ? (grupo4 += grupo2 / 2 + Math.ceil(grupo1 / 4))
        : (grupo4 += grupo2);
      //grupo1 = 0
      //grupo2 = 0
    } else if (grupo1 < grupo2) {
      grupo4 += Math.ceil(grupo1 / 2);
      grupo2 -= Math.ceil(grupo1 / 2);
      //grupo1 = 0
      grupo2 % 2 === 0
        ? (grupo4 += grupo2 / 2)
        : (grupo4 += Math.ceil(grupo2 / 2));
      //grupo2 = 0
    } else if (grupo1 > grupo2) {
      grupo2 === 0
        ? (grupo4 += Math.ceil(grupo1 / 4))
        : (grupo4 += Math.ceil(grupo2 / 2) + Math.ceil(grupo1 / 4));
    }
  } else if (grupo1 <= grupo3) {
    grupo4 += grupo3;
    //grupo1 = 0;
    //grupo3 = 0;
    if (grupo2 !== 0) {
      grupo4 += Math.ceil(grupo2 / 2);
    }
  }

  console.log(grupo4);
}
