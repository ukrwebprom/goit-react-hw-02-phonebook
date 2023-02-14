import React, { Component } from "react";
import Section from "./Section";
import ContactForm from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  handleFormSubmit = data => {
    console.log(data);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
          padding: '15px'
        }}
      >
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit}/>
        </Section>
        <Section title="Contacts">

        </Section>
      </div>
    );
  }
  
};
