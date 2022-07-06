import React from 'react';
import MyContext from './MyContext';

class MyProvider extends React.Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    }
  };
  
  moveCar = (car, side) => {
    this.setState({
      cars: { ...this.state.cars, [car]: side },
    })
  }
  

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    }

    const { children } = this.props;
    return (
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
