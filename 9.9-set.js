const nomes = [
  "Ana",
  "Bia",
  "Carlos",
  "Carlos",
  "Nicolas",
  "Nicolas",
  "Nicolas",
];

const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados); // [ 'Ana', 'Bia', 'Carlos', 'Nicolas' ]

// const nomesAtualizados = new Set(nomes);

// const listaNomesAtualizados = [...nomesAtualizados];

// console.log(nomesAtualizados); // Set(5) { 'Ana', 'Bia', 'Carlos', 'Nicolas' }
// console.log(listaNomesAtualizados); // [ 'Ana', 'Bia', 'Carlos', 'Nicolas' ]
