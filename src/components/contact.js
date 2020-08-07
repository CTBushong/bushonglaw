import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", message: "" };
    console.log("we're in the constructor")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "https://getform.io/f/a463b01f-80bf-484b-b72f-a54fa6272cef",
        this.state,
        { headers: { Accept: "application/json" } }
      )
      .then(function(response) {
        console.log(response);
        alert(`Thanks for your message! I'll get back to you as soon as I can.`);
        document.getElementById("contact-form").reset()

      })
      .catch(function(error) {
        console.log(error);
        alert(`Sorry, something went wrong on my end. Maybe use email instead or try again later.`);
      });
  };

  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Message Me</h2>
            <div>
            Email me at <a href="mailto:Chris@BushongLaw.com">Chris@BushongLaw.com</a> or fill out the form below.
            </div>
          </div>
          <form
            id="contact-form" 
            onSubmit={this.handleSubmit}
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" required onChange={this.handleChange}/>
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required onChange={this.handleChange}/>
              </label>
            </div>
            <div>
              <label>
                Message: <textarea type="text" name="message" required onChange={this.handleChange}></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
