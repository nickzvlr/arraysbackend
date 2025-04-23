const alunos = ["João", "Maria", "José", "Nicolas"];
const medias = [10, 8, 7.5, 9];

// Criando um array de arrays
const lista = [alunos, medias];

function procurarAluno(aluno) {
  if (lista[0].includes(aluno)) {
    const indice = lista[0].indexOf(aluno);
    const mediaAluno = lista[1][indice];
    console.log(`A média do aluno ${aluno} é: ${mediaAluno}`);
  } else {
    console.log(`O aluno ${aluno} não foi encontrado.`);
  }
}

procurarAluno("João"); // A média do aluno Maria é: 8
procurarAluno("joao"); // O aluno Vini não foi encontrado.
