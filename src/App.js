import React, { Component } from 'react';

import NavbarTranslate from './components/NavbarTranslate';
import Footer from './components/Footer';

import Home from './paginas/Home';
class App extends Component {
  render() {
    return (
      <div>
          <NavbarTranslate />
          <Home />
          <Footer />
      </div>
    );
  }
}

export default App;
