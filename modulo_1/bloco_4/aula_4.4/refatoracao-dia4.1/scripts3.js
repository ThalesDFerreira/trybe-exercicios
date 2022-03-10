const a = 50;
const b = 80;
const c = 100;

function maiorValor(a, b, c) {
    if (a > b && a > c) {
        return a + " é maior que " + b + " e " + c;
    }
    else if (b > a && b > c) {
        return b + " é maior que " + a + " e " + c;
    }
    else {
        return c + " é maior que " + a + " e " + b;
    }
}