import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personal, professional } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { personal.nome }
        </div>
        <div>
          Email:
          { personal.email }
        </div>
        <div>
          CPF:
          { personal.cpf }
        </div>
        <div>
          Endereço:
          { personal.endereco }
        </div>
        <div>
          Cidade:
          { personal.cidade }
        </div>
        <div>
          Estado:
          { personal.estado }
        </div>
        <div>
          Currículo:
          { professional.curriculo }
        </div>
        <div>
          Cargo:
          { professional.cargo }
        </div>
        <div>
          Descrição do cargo:
          { professional.descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personal: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  professional: PropTypes.shape({
    curriculo: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  personal: state.personalReducer,
  professional: state.professionalReducer,
});

export default connect(mapStateToProps)(FormDataDisplay);
