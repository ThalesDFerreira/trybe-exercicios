// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;

const simpsons = 'simpsons.json';

const lerArquivo = async () => {
  const data = await fs.readFile(simpsons, 'utf-8');
  const personagens = JSON.parse(data);
  personagens.forEach((personagem) => {
    console.log(`${personagem.id} - ${personagem.name}`);
  });
};

const lerPersonagens = async () => {
  const data = await fs.readFile(simpsons, 'utf-8');
  const personagens = JSON.parse(data);
  return personagens;
};

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const buscaPersonagem = (id) => {
  return new Promise( async (resolve, reject) => {
    const personagens = await lerPersonagens();
    const busca = personagens.find((personagem) => {
      return parseInt(personagem.id) === id;
    });
    if (!busca) {
      reject(new Error('id não encontrado'));
    }
    resolve(busca);
  });
};

const main = async () => {
  console.log(await buscaPersonagem(2));
}

main();