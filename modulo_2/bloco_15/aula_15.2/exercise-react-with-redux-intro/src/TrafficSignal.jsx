import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  switch (signalColor) {
  case 'red':
    return redSignal;
  case 'green':
    return greenSignal;
  case 'yellow':
    return yellowSignal;
  default:
    return null;
  }
};

function TrafficSignal({ signalColor }) {

  const { mapStateToProps, mapDispatchToProps } = this.props;
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={}>Red</button>
        <button type="button" onClick={}>
          Yellow
        </button>
        <button type="button" onClick={}>Green</button>
      </div>
      <img className="signal" src={ renderSignal(signalColor) } alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color,
});

const mapDispatchToProps = () => ({
  changeSignal: '', /* Coloque seu código aqui... */
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  // changeSignal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
