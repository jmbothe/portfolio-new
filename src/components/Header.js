import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { sections } from '../data.js';

class Header extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(section) {
    const name = `${section}-button${section === this.props.activeSection ? ' active' : ''}`;
    return (
      <button
        key={section}
        className={name} 
        onClick={(e) => this.props.toggleActiveSection(section)}
      >
        {section}
      </button>
    )
  }

  render() {
    const items = this.props.activeSection === 'initial'
    ? <button
        key={'about'}
        className={'About-button'}
        onClick={(e) => this.props.toggleActiveSection('about')}
      >
        about
      </button>
    : sections.map(item => this.renderButton(item))
    return (
      <header>
        <h1>Jeff Bothe</h1>
        <h2>web developer</h2>
        <CSSTransitionGroup
          component="nav"
          transitionName="open-nav"
          transitionEnterTimeout={600}
          transitionLeave={false}
        >
          {items}
        </CSSTransitionGroup>
      </header>
    );
  }
}

export default Header;
