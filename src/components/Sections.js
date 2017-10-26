import React, { Component } from 'react';
// import CSSTransitionGroup from 'react-addons-css-transition-group';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

class Sections extends Component {
  render() {
    const componentList = {About, Projects, Skills, Contact};
    const Element = componentList[this.props.activeSection];

    return (
      <div className="sections-container">
        <Element />
      </div>
    );
  }
}

export default Sections;
