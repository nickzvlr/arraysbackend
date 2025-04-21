const alunos = ["Ana", "Maria", "Nicolas", "Ryan"];
const medias = [7, 3.5, 6, 9];

//alunos.filter((aluno, i) =>
const reprovados = alunos.filter((_, i) => {
  return medias[i] < 7;
});

console.log(reprovados); // ["Maria", "Nicolas"]
