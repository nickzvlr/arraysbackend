const notas = [10, 7.5, 8, 1.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i];
}

const media = somaNotas / notas.length;
console.log(`A média é ${media.toFixed(1)}`);
