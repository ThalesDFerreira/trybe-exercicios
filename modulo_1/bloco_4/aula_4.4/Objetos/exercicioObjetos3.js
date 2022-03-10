// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as 
// datas em que a jogadora Marta foi considerada a melhor do mundo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: [
        {
            best1: 2006,
        },
        {
            best2: 2007,
        },
        {
            best3: 2008,
        },
        {
            best4: 2009,
        },
        {
            best5: 2010,
        },
        {
            best6: 2018,
        },
    ],
};

console.log("A jogadora " + player.name + " tem " + player["age"] + " anos de idade");