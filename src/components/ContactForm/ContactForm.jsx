import React, { Component } from "react";
import { Label, Form } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleInputChange = event => {
    const {name, value} = event.currentTarget;
    this.setState({[name]:value});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
<Label>Name
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value = {this.state.name}
  onChange = {this.handleInputChange}
      />
      </Label>
      <button type="submit">Add contact</button>
      </Form>
      
      
    )
  }

    
}

export default ContactForm