import React, { Component } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Proficiency from './components/Proficiency';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import AchievementsCertifications from './components/AchievementsCertifications';

class App extends Component {
  render() {
    return (
      <div>
        <Preloader />
        <Header />
        <Introduction />
        <Skills />
        <Proficiency />
        <Experiences />
        <Projects />
        <AchievementsCertifications />
      </div>
    );
  }
}

export default App;
