// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let ARRAY = [2, 4, 6, 7, 10, 0, -3];

function indiceMenor(xablau) {
    let indiceMenor = 0;
    for (let indice in xablau) {
        if (xablau[indice] < xablau[indiceMenor]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(indiceMenor(ARRAY));
// indiceMenor([2, 4, 6, 7, 10, 0, -3]);

// indiceMenor(ARRAY);