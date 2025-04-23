const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 9, 7];
const salaJava = [6, 7, 4, 8, 5, 6];
const salaPython = [8, 9, 7, 3.5];

function calculaMedia(listaDeNotas) {
  //   const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
  //     return acumulador + nota;
  //   }, 0);

  const somaDasNotas = listaDeNotas.reduce(
    (acumulador, nota) => acumulador + nota,
    0
  );

  const media = somaDasNotas / listaDeNotas.length;
  return media;
}

console.log(`A média de JS é ${calculaMedia(salaJS).toFixed(1)}`);
console.log(`A média de Java é ${calculaMedia(salaJava)}`);
console.log(`A média de Python é ${calculaMedia(salaPython).toFixed(1)}`);
