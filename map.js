const notas = [10, 6.5, 8, 5.5, 7];

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// });

const notasAtualizadas = notas.map((nota) => (nota + 1 >= 10 ? 10 : nota + 1));

console.log(notasAtualizadas); // [11, 7.5, 9, 6.5, 8]
