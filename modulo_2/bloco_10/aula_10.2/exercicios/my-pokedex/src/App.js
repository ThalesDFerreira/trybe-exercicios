import React from 'react';
import './App.css';
import RenderizaPoke from './Components/RenderizaPoke';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Pokemons</h1>
        </header>
        <RenderizaPoke />
      </main>
    );
  }
}

export default App;
