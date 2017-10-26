import React, { Component } from 'react';
import { contacts } from '../data.js';

class Contact extends Component {
  constructor() {
    super();

    this.renderContact = this.renderContact.bind(this);
  }

  renderContact(name, link) {
    return (
      <li key={name}>
        <a href={link} target="_blank">{name}</a>
      </li>
    )

  }
  render() {
    return (
      <section className="contact">
        <ul>
          {contacts.map(item => this.renderContact(item.name, item.link))}
        </ul>
      </section>
    );
  }
}

export default Contact;
