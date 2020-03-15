import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h2>Number</h2>
          <input
            type="tel"
            pattern="(\+?\d[- .]*){7,13}"
            name="number"
            placeholder="Enter Number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
