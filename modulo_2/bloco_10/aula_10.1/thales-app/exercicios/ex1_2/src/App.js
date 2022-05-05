import React from 'react';
import './App.css';

const tarefas = ['Estudar', 'Almoçar', 'Trabalhar', 'Descaçar'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
    <div>
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
    );
  }
}

export default App;
