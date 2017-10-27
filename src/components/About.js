import React, { Component } from "react";
import { about } from "../data.js";

class About extends Component {
  render() {
    return (
      <section className="about" dangerouslySetInnerHTML={{ __html: about }} />
    );
  }
}

export default About;
