const notas = [7, 4, 6, 9];
const novaListaNotas = [...notas, 10]; // Clonando o array e adicionando 10 com spread operator

// novaListaNotas.push(10);

console.log(novaListaNotas); // [7, 4, 6, 9, 10]
console.log(notas); // [7, 4, 6, 9]
