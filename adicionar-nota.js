const notas = [10, 6, 8];

notas.push(7); // "Método" que adiciona a nota 7 ao final do array notas

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);
