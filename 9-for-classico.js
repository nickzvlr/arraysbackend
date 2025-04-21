const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão: executada apenas uma vez
//segunda expressão: condição de execução(ou parada)
//terceira expressão: executada após cada iteração(executada sempre no final do bloco (loop) )
for (let i = 0; i < notas.length; i++) {
  // i = indice
  // i++ significa: "some 1 ao valor de i"
  // é o que faz o loop passar para o próximo item do array a cada rodada
  console.log(i, notas[i]);
}
