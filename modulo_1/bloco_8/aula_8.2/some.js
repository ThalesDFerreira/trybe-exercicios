// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (name, arr) => {
//   return arr.some(nomeArr => nomeArr === name);
// }
// console.log(hasName('Ana', names));

const hasName = names.some(name => 'Ana' === name);
console.log(hasName);