const operacoes = require('./operacoes');
const readline = require('readline-sync');

console.log('Calculadora Simples');
const num1 = readline.questionInt('Digite um número: ');
const oper = readline.question('Digite a operação: (+, -, *, /)');
const num2 = readline.questionInt('Digite um número: ');

switch (oper) {
  case '+':
    operacoes.sum(num1, num2)
  break;
  case '-':
    operacoes.sub(num1, num2)
    break;
  case '*':
    operacoes.mult(num1, num2)
    break;
  case '/':
    operacoes.div(num1, num2)
    break;
  default:
    console.log('Opa! Operação desconhecida!')
}