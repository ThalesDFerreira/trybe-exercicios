// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'maça', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['nutela', 'leite', 'aveia'];

const fruitSalad = (fruit, additional) => {
  const novaSpecialFruit = [... fruit, ... additional];
  return novaSpecialFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));