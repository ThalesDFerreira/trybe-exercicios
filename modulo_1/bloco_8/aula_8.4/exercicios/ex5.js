const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA(arr) {
  return arr.reduce((acc, nome) =>
    acc + nome.split('').reduce((acumulator, letra) => {
      if (letra === 'a' || letra === 'A') return acumulator + 1;
      return acumulator;
    }, 0), 0);
}

console.log(containsA(names));