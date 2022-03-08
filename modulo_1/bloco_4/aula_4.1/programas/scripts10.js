const produto = 5;
const valorVendaProduto = 10;
const impostoProduto = 1.2;
let quantVenda = 1000;

if (produto >= 0 && valorVendaProduto >= 0) {
    const totalCustoProduto = produto * impostoProduto;
    const totalLucro = (totalCustoProduto - valorVendaProduto) * quantVenda;

    console.log(totalLucro);
}
else {
    console.log('Error, os valores não podem ser negativos!')
}