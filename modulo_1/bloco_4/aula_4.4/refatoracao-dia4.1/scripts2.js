const a = 50;
const b = 80;

function maiorValor(a, b) {
    if (a > b) {
        return a + ' é maior que ' + b;
    }
    else {
        return b + ' é maior que ' + a;
    }
}

console.log(maiorValor(a, b));