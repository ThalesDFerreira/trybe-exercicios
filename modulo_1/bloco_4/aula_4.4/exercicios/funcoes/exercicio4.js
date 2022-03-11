// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function biggerName(names) {
    let quantidadeCaracteres = 0;
    let result = "";
    for (let index in names) {
        if (names[index].length > quantidadeCaracteres) {
            quantidadeCaracteres = names[index].length;
            result = names[index];
        }
    }
    return result;
}

console.log(biggerName(names));