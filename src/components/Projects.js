import React, { Component } from 'react';
import { projects } from '../data.js';

class Projects extends Component {
  constructor() {
    super();
    this.renderProject = this.renderProject.bind(this);
  }

  renderProject(title, demoLink, codeLink, description) {
    return (
      <li className="project" key={title}>
        <h2>{title}</h2>
        <span>
          <a href={demoLink} target="_blank">Demo</a> / <a href={codeLink} target="_blank">Code</a>
        </span>
        <p dangerouslySetInnerHTML={{__html: description}}></p>
      </li>
    )
  }

  render() {
    return (
      <section className="projects">
        <ul>
          {projects.map(item =>
            this.renderProject(item.title, item.demoLink, item.codeLink, item.description)
          )}
        </ul>
      </section>
    );
  }
}

export default Projects;
