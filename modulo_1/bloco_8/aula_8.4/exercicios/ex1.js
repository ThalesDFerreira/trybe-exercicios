const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// 1 - Dada uma matriz, transforme em um array.

function flatten(arr) {
  const arrayUnico = arr.reduce((acumulator, array) => acumulator.concat(array), []);
  return arrayUnico;
}

console.log(flatten(arrays));
