const alunos = ["João", "Maria", "José", "Nicolas"];
const medias = [10, 8, 7.5, 9];

// Criando um array de arrays
const lista = [alunos, medias];

function procurarAluno(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista; // Desestruturando o array de arrays
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(`A média do aluno ${aluno} é: ${mediaAluno}`);
  } else {
    console.log(`O aluno ${aluno} não foi encontrado.`);
  }
}

procurarAluno("João"); // A média do aluno João é: 10
procurarAluno("joao"); // O aluno joao não foi encontrado.
