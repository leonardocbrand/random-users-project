function encontrarNumeroMaisFrequente(array) {
  // Cria um objeto para armazenar as contagens de cada número
  const contagens = {};

  // Itera sobre o array e conta a frequência de cada número
  for (let i = 0; i < array.length; i++) {
    const numero = array[i];

    // Se o número já existe no objeto de contagens, incrementa a contagem em 1
    if (contagens[numero]) {
      contagens[numero]++;
    } else {
      // Se o número não existe no objeto de contagens, inicializa a contagem como 1
      contagens[numero] = 1;
    }
  }

  let numeroMaisFrequente;
  let frequenciaMaisAlta = 0;

  // Itera sobre as contagens para encontrar o número mais frequente
  for (const numero in contagens) {
    if (contagens[numero] > frequenciaMaisAlta) {
      frequenciaMaisAlta = contagens[numero];
      numeroMaisFrequente = numero;
    }
  }

  return parseInt(numeroMaisFrequente);
}

// Exemplo de uso da função
const array = [1, 3, 5, 3, 1, 1, 5, 1, 4];
const numeroMaisFrequente = encontrarNumeroMaisFrequente(array);
console.log(numeroMaisFrequente);
