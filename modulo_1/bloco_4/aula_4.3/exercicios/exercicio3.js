// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2].length < menorPalavra.length) {
        menorPalavra = array[index2];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);