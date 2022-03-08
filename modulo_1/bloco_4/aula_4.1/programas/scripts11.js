const salario = 2000;
let alicotaInss;
let alicotaIr;

if (salario <= 1556.94) {
    alicotaInss = salario * 0.08;
}
else if (salario > 1556.94 && salario <= 2594.92) {
    alicotaInss = salario * 0.09;
}
else if (salario > 2594.92 && salario <= 5189.82) {
    alicotaInss = salario * 0.11;
}
else {
    alicotaInss = salario + 570.88;
};

let salarioDescontatoInss = salario - alicotaInss;
let valorImpostoInss = salario - salarioDescontatoInss;
// console.log(salarioDescontatoInss);
// console.log(valorImpostoInss);

if (salario <= 1903.98) {
    alicotaIr = salario * 1;
}
else if (salario >= 1903,99 && salario <= 2826,65) {
    alicotaIr = (salario * 0.075) - 142.80;
}
else if (salario >= 2826,66 && salario <= 3751.05) {
    alicotaIr = (salario * 0.15) - 354.80;
}
else if (salario >= 3751,06 && salario <= 4664.68) {
    alicotaIr = (salario * 0.225) - 636.13;
}
else { 
    alicotaIr = (salario * 0.275) - 869.36;
}

let salarioDescontatoIr = salario - alicotaIr;
let valorImpostoIr = salario - salarioDescontatoIr;
// console.log(salarioDescontatoIr);
// console.log(valorImpostoIr);

let salarioLiquido = salario - valorImpostoInss - valorImpostoIr;
console.log(salarioLiquido);