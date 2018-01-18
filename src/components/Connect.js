import React, { Component } from "react";
import { connect } from "../data.js";

class Connect extends Component {
  constructor() {
    super();

    this.renderConnect = this.renderConnect.bind(this);
  }

  renderConnect(name, link) {
    return (
      <li key={name}>
        <a href={link} target="_blank">
          {name}
        </a>
      </li>
    );
  }
  render() {
    return (
      <section className="connect">
        <ul>
          {connect.map(item => this.renderConnect(item.name, item.link))}
        </ul>
      </section>
    );
  }
}

export default Connect;
