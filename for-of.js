const notas = [10, 6.5, 8, 5.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;

console.log(`A média é ${media}`); // A média é 7.0
