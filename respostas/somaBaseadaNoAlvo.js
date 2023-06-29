function encontrarIndicesDaSoma(array, target) {
  // Cria um objeto para armazenar os valores já percorridos e seus respectivos índices
  const valoresPercorridos = {};

  // Itera sobre o array
  for (let i = 0; i < array.length; i++) {
    const numeroAtual = array[i];
    const complemento = target - numeroAtual;

    // Verifica se o complemento já foi percorrido
    if (valoresPercorridos[complemento] !== undefined) {
      // Retorna os índices correspondentes aos dois números
      return [valoresPercorridos[complemento], i];
    }

    // Armazena o valor atual e seu índice no objeto de valores percorridos
    valoresPercorridos[numeroAtual] = i;
  }

  // Caso nenhum par seja encontrado, retorna um array vazio
  return [];
}

// Exemplo de uso da função
const array = [2, 7, 11, 15];
const target = 9;
const indices = encontrarIndicesDaSoma(array, target);
console.log(indices);
