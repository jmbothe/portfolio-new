import React, { Component } from 'react';
import Header from './components/Header';
import Sections from './components/Sections'

class App extends Component {
  constructor() {
    super();

    this.toggleActiveSection = this.toggleActiveSection.bind(this);
    this.state = {
      activeSection: 'initial',
    };
  }

  toggleActiveSection(section) {
    this.setState({activeSection: section})
    // document.querySelectorAll('button').forEach((item) => {
    //   item.disabled = true
    // })
    // setTimeout(() => {
    //   document.querySelectorAll('button').forEach((item) => {
    //     item.disabled = false
    //   })
    // }, 300)
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
