import React, { Component } from 'react';
import { about } from '../data.js';

class About extends Component {
  render() {
    return (
      <section className="about">
        <p>{about}</p>
      </section>
    );
  }
}

export default About;
