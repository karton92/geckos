import React, { Component } from "react";
import "../styles/Contact.css";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  state = {
    value: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h1>Kontakt:</h1>
          <textarea
            value={this.state.value}
            placeholder="Wpisz wiadomość"
            onChange={this.handleChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value ? true : false}
          message="Masz niewypełniony formularz. Czy napewno chcesz opuścić tą stronę?"
        />
      </div>
    );
  }
}

export default Contact;
