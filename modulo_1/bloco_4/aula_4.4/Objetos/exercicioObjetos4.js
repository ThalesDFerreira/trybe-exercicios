// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

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

console.log("A jogadora " + player.name + " foi eleita a melhor do mundo por " + (player["bestInTheWorld"].length) + " vezes");