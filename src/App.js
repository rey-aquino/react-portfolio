import React, { Component } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Introduction from './components/Introduction';

class App extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <Header />
        <Introduction />
      </div>
    );
  }
}

export default App;
