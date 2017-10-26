import React, { Component } from 'react';
import { sections } from '../data.js';
import { CSSTransitionGroup } from 'react-transition-group';

class Header extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(section) {
    const name = `${section}-button ${section === this.props.activeSection ? 'active' : ''}`;
    return (
      <button
        key={section === this.props.activeSection ? `${performance.now()}` : section}
        className={name} 
        onClick={(e) => this.props.toggleActiveSection(section)}
      >
        {section}
      </button>
    )
  }

  render() {
    const items = sections.map(item => this.renderButton(item))
    return (
      <header>
        <h1>Jeff Bothe</h1>
        <h2>web developer</h2>
        <CSSTransitionGroup
          className="header-buttons"
          component="nav"
          transitionName="active-button"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          key='trans-group'
        >
          {items}
        </CSSTransitionGroup>
      </header>
    );
  }
}

export default Header;
