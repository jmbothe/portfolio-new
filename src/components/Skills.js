import React, { Component } from 'react';
import { skills } from '../data.js';

class Skills extends Component {
  constructor() {
    super();
    this.renderSkill = this.renderSkill.bind(this);
  }

  renderSkill(title, items) {
    return (
      <li className="skill" key={title}>
      <h2>{title}</h2>
      <ul>
      {items.map(item => <li key={item}>{item}</li>)}
      </ul>
      </li>
    )
  }

  render() {
    return (
      <section className="skills">
        <ul>
          {skills.map(item => this.renderSkill(item.title, item.items))}
        </ul>
      </section>
    );
  }
}

export default Skills;
