const listaEstudantes = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "André",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);

console.log(`Alunos da sala 1: ${sala1}`); // Alunos da sala 1: João,Juliana,Ana,Caio,Lara,Marjorie,Guilherme,Aline
console.log(`Alunos da sala 2: ${sala2}`); // Alunos da sala 2: Fabiana,André,Carlos,Paulo,Bia,Vivian,Isabela,Vinícius,Renan,Renata,Daisy,Camilo
