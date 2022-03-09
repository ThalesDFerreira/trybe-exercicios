// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let caracter = "";
let caracterDoArray = "";

for (let index = 0; index < array.length; index += 1) {
    caracter = array[index].split('');   
}

// for (let index2 = 0; index2 < caracter.length; index2 += 1) {
//     caracterDoArray = caracterDoArray + caracter[index2];
}

console.log(array);
console.log(caracter);
console.log(caracterDoArray);