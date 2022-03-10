// 5 - Acesse a chave medals e faça um console.log no seguinte formato: 
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

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

console.log("A jogadora possui " + (player.medals["golden"]) + " medalhas de ouro e " + (player.medals["silver"]) + " medalhas de prata");