// 1 .🚀 Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
// ⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️
// 2 .🚀 Crie uma lista de tarefas simples seguindo os passos abaixo:
// insira a função Task a seguir acima do seu componente App dentro do arquivo App.js:
// agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start.
// por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App
    
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
        );
      }
    }

    export default App;
