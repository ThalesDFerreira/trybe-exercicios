import React from 'react';
import Nome from './components/Nome';
import './App.css';

class App extends React.Component {
  state = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
  };

  uperCaseName = (event) => {
    return this.setState({
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeCheckbox = ({target}) => {
    const {tipo} = target;
    console.log(tipo);
    // const value = target.type === "checkbox" ? target.checked : target.value;
  };

  render() {
    const { nome } = this.state;

    return (
      <div>
        <form>
          <fieldset>
            <Nome nome={nome} onInputChange={this.uperCaseName} />
            <label htmlFor="email">
              E-mail:
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input type="number" name="cpf" id="cpf" />
            </label>
            <label htmlFor="endereco">
              Endereço:
              <input type="text" name="endereco" id="endereco" />
            </label>
            <label htmlFor="cidade">
              Cidade:
              <input type="text" name="cidade" />
            </label>
            <select name="estado">
              Estado:
              <option value="">SP</option>
              <option value="">MG</option>
            </select>
            <label name="moradia">
              Moradia:
              <label htmlFor="casa">
                Casa
                <input type="radio" id="casa" name="moradia" onChange={this.handleChangeCheckbox} />
              </label>
              <label htmlFor="apartamento">
                Casa
                <input type="radio" id="apartamento" name="moradia" onChange={this.handleChangeCheckbox}/>
              </label>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
