// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false