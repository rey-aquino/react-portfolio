import React, { Component } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <Header />
        <Introduction />
        <Skills />
      </div>
    );
  }
}

export default App;
