import React from 'react';
import AllPokemons from '../data';
import Pokemon from './Pokemon';

class RenderizaPoke extends React.Component {
  render() {
    return AllPokemons.map((elemento) => {
      return <Pokemon pokemon={elemento} />;
    });
  }
}

export default RenderizaPoke;
