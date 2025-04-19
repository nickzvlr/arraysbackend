**1. Adicionando Elemento e Calculando Média**  
Um array `notas` é criado com valores iniciais. Usa-se `push()` para adicionar um novo elemento (7). A média é calculada somando todos os elementos manualmente e dividindo pelo tamanho do array. O resultado é exibido via template string.

---

**2. Array Bidimensional (Matriz)**  
Dois arrays (`alunos` e `medias`) são combinados em um array bidimensional `lista`. Acessa-se elementos específicos usando índices duplos (ex: `lista[0][1]` para "Maria") para exibir o nome e a média correspondente.

---

**3. Modificando Array com `splice()`**  
O método `splice()` remove 2 elementos a partir do índice 1 ("Ana" e "Caio") e adiciona "Rodrigo" e "Fernanda". O array `listaEstudantes` é atualizado e exibido.

---

**4. Cálculo de Média com Array**  
Armazena notas em um array e calcula a média somando cada elemento individualmente. Demonstra como arrays simplificam o gerenciamento de múltiplos valores.

---

**5. Clonando Array com Spread Operator**  
Cria um novo array `novaListaNotas` clonando `notas` com `...` (spread operator) e adiciona 10. O array original permanece inalterado, mostrando imutabilidade.

---

**6. Busca em Array Bidimensional com Desestruturação**  
A função `procurarAluno` verifica se um aluno existe no array bidimensional. Usa desestruturação para separar alunos e médias, encontra o índice do aluno e exibe sua média. Case-sensitive (ex: "joao" não é encontrado).

---

**7. Dividindo Array com `slice()`**  
Divide `listaEstudantes` em duas salas usando `slice()`. A primeira metade vai para `sala1` e a segunda para `sala2`. Exibe as listas separadas.

---

**8-10. Filtrando Reprovados (Duplicados)**  
*(Códigos 8, 9 e 10 são idênticos)*  
Usa `filter()` para criar um array `reprovados` com alunos cuja média é menor que 7. O índice (`i`) é usado para comparar com o array `medias`.

---

**11. Somando Notas com `forEach()`**  
Calcula a soma das notas usando `forEach()` para iterar sobre o array. A média é exibida após a divisão pelo número de elementos.

---

**12. Concatenando Arrays com `concat()`**  
Combina `salaJS` e `salaPython` em um novo array `juntarSalas`. O método `concat()` não altera os arrays originais.

---

**13. Transformando Strings com `map()`**  
Converte todos os nomes do array para letras maiúsculas usando `map()`, gerando um novo array `nomesPadrao` sem modificar o original.

---

**14. Ajustando Notas com `map()` e Operador Ternário**  
Incrementa cada nota em 1 usando `map()`. Se o resultado ultrapassar 10, define como 10. O array original não é alterado.

---

**15. Média com Loop `for` e `toFixed()`**  
Calcula a média usando um loop `for` tradicional. Formata o resultado com `toFixed(1)` para exibir uma casa decimal.

---

**16. Busca em Array Bidimensional sem Desestruturação**  
Similar ao código 6, mas sem desestruturação. Acessa diretamente os índices do array bidimensional para encontrar a média do aluno.

---

*17. Cálculo de Média com `reduce()`*  
Define uma função `calculaMedia` que usa `reduce()` para somar as notas. A média é calculada e formatada com `toFixed()` para diferentes turmas.

---

**18. Removendo Duplicatas com `Set`**  
Elimina valores duplicados do array `nomes` convertendo-o em um `Set` (que só armazena valores únicos) e depois transformando-o de volta em array com spread operator.
