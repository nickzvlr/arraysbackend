const notas = [10, 6.5, 8, 5.5];

let soma = 0;

// notas.forEach(somaNotas);

// function somaNotas(nota) {
//   soma += nota;
// }

notas.forEach(function (nota) {
  soma += nota;
});

const media = soma / notas.length;
console.log(`A média é ${media}`);
