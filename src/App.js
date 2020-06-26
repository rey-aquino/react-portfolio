import React, { Component } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <Header />
      </div>
    );
  }
}

export default App;
