// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que 
// retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
  let ePrimo = true;
  for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {
    if (index % indexDivisor === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorNumeroPrimo = index;
  }
}

console.log(maiorNumeroPrimo);