import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Aboult from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Meu portifólio</h1>
          <Link to="/">Inicio</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/about">Sobre mim</Link>
          <Link to="/contact">Contato</Link>
        </header>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projects" component={ Projects } />
          <Route path="/about" component={ Aboult } />
          <Route path="/contact" component={ Contact } />
        </Switch>
      </div>
    );
  }
}

export default App;
