let cardapio = 1;

let trybeLancheFeliz = 1;
let xcTrybe = 2;
let trybeWooper = 3;
let xTrybe = 4;
let Triplo trybeComJS = 5;

function optionsMenu(number) {
    // Desenvolva seu código nessa função

    switch (cardapio) {

        case 1:
            console.log('Trybe lanche feliz');
            break;

        case 2:
            console.log('McTrybe');
            break;

        case 3:
            console.log('TrybeWooper');
            break;

        case 4:
            console.log('X-Trybe');
            break;

        case 5:
            console.log('Triplo Trybe com JS');
            break;

        default: 
            console.log("Não temos esta opção ainda :(");
    }
}

module.exports = optionsMenu;