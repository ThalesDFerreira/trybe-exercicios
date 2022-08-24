1 - Cire a pasta do projeto

2 - Entre na pasta e inicie o node:

npm init -y

3 - Instale as dependências

npm install -D mocha@10.0.0 chai@4.3.6 express@4.17.1 nodemon chai-http@4.3.0

4 - crie o arquivo .gitignore na raiz do projeto:

# dependencies
/node_modules

5 - ESLint Trybe na pasta raiz do projeto

npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 -D

touch .eslintignore .eslintrc.json

// .eslintignore

node_modules

// .eslintrc.json
{
  "env": {
    "es2020": true
  },
  "extends": "trybe-backend",
  "rules": {
    "sonarjs/no-duplicate-string": ["error", 5]
  }
}

6 - Organize as pastas de trabalho:
    Crie na raiz do projeto a pasta "src";
    Crie na raiz do projeto a pasta "tests/integration"

7 - Dentro da pasta "src" adicione um arquivo "app.js":

const express = require('express');

const app = express();

module.exports = app;

8 - Ainda dentro da pasta "src" adicione um arquivo "server.js":

// src/server.js
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('server running on port 3001'));

9 - Configure o package.json

// package.json

"test": "mocha ./tests/integration --exit"
"start": "node src/server.js",
"dev": "nodemon src/server.js",
"lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."

10 - Importantes comandos

npm start = iniciar a aplicação, caso haja modificação em algum arquivo terá que parar a aplicação e inicia-la novamente.

npm run dev = inicia a aplicação com o nodemon, então, caso haja modificação em algum arquivo NÃO terá que parar a aplicação e inicia-la novamente.

npm run test / npm test = executa os testes da aplicação.

11 - Morgan:

npm i morgan

// DEPOIS

require('express-async-errors');
const morgan = require('morgan');

app.use(morgan('dev'));

12 - CORS:

npm install cors@2.8

const cors = require('cors');
app.use(cors());

13 - EXPRESS-ASYNC-ERROR

npm i express-async-error

importar ele no "app" depois do "express"

require('express-async-error');