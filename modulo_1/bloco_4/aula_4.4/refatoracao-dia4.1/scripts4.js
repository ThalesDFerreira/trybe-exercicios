const praia = 1;

function positiveNegative(praia) {
    if (praia > 0) {
        return 'positive';
    } else if (praia < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}
console.log(positiveNegative(praia));