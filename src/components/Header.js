import React, { Component } from 'react';
import { sections } from '../data.js';
import { CSSTransitionGroup } from 'react-transition-group';

class Header extends Component {
  constructor() {
    super();
    this.renderButton = this.renderButton.bind(this)
  }

  // renderButton(section) {
  //   if (section === this.props.activeSection) {
  //     return (
  //       <CSSTransitionGroup
  //         component="div"
  //         className="active-button-container"
  //         transitionName="active-button"
  //         transitionEnterTimeout={5000}
  //         transitionLeaveTimeout={5000}
  //         key={section}
  //       >
  //         <button
  //           key={`${performance.now()}`}
  //           className={`${section}-button active`} 
  //           onClick={(e) => this.props.toggleActiveSection(section)}
  //         >
  //           {section}
  //         </button>
  //       </CSSTransitionGroup>
  //     )
  //   } else {
  //     return (
  //       <div key={`${performance.now()}`}>
  //         <button
  //           className={`${section}-button`} 
  //           onClick={(e) => this.props.toggleActiveSection(section)}
  //         >
  //           {section}
  //         </button>
  //       </div>
  //     )
  //   }
  // }

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

  // render() {
  //   const sections = ['About', 'Projects', 'Skills', 'Contact', 'Just Because']
  //   return (
  //     <header>
  //       <h1>Jeff Bothe</h1>
  //       <h2>web developer</h2>
  //       <nav className="header-buttons">
  //         {sections.map(item => this.renderButton(item))}
  //       </nav>
  //     </header>
  //   );
  // }
}

export default Header;
