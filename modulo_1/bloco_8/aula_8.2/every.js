// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 18 },
  { name: 'Cláudia', age: 18 },
  { name: 'Bruna', age: 18 },
];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every(pessoa => pessoa.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));

const verifyAges2 = people.every((pessoa) => pessoa.age >= 18);
console.log(verifyAges2);