import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: {name, type, averageWeight: {value, measurementUnit}, image} } = this.props;

    return (
      <div key={name}>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>
          Peso: {value} {measurementUnit}
        </p>
        <img src={image} />
      </div>
    );
  }
}

export default Pokemon;
