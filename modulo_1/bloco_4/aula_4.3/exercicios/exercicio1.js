// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let resultado = 1;

for (let index = 1; index <= 10 ; index += 1) {
    resultado *= index;
}

console.log(resultado);