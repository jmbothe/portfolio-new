import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sections from './components/Sections'

class App extends Component {
  constructor() {
    super();

    this.toggleActiveSection = this.toggleActiveSection.bind(this);
    this.state = {
      activeSection: 'About',
    }
  }

  toggleActiveSection(section) {
    this.setState({activeSection: section})
  }

  render() {
    return (
      <div className="App">
        <Header activeSection = {this.state.activeSection} toggleActiveSection={this.toggleActiveSection}/>
        <Sections activeSection = {this.state.activeSection} />
      </div>
    );
  }
}

export default App;
