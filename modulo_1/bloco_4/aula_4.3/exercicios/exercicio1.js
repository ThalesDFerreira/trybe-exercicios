// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let factory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado = 1;

for (let index = 0; index < factory.length; index += 1) {
    resultado = resultado * factory[index];
    console.log(resultado);
}

console.log(resultado);