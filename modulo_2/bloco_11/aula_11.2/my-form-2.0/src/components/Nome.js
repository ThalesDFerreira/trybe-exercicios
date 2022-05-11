import React from 'react';

class Name extends React.Component {
  render() {
    const { nome, onInputChange } = this.props;

    return (
      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={onInputChange}
          maxLength="40"
          required
        />
      </label>
    );
  }
}

export default Name;
