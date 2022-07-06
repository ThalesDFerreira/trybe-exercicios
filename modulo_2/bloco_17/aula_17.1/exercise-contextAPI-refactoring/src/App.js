import React from 'react';
import './App.css';
import Cars from './components/Cars';
import MyProvider from './context/MyProvider';

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Cars />
        </div>
      </MyProvider>
    );
  }
}

export default App;
