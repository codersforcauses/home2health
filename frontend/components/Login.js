/*jshint esversion: 6 */

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import ControlLabel from "react-bootstrap/ControlLabel";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
        password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0; // ensures that the correct input is in the sectino, modify to add autho0 verification
  }

  handleChange = event => {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  handleSubmit = event => {
      event.preventDefault();
  }

  render() {
      return (
          <div className = "Login">
              <form onSubmit={this.handleSubmit}>
                  <FormGroup controlID = "email" bsSize = "large">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        autoFocus
                        type = "email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlID = "password" bsSize = "large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type = "password"
                    />
                    </FormGroup>
                <Button
                    block
                    beSize = "large"
                    disabled={!this.validateForm}
                    type = "submit"
                >
                    Login
                </Button>
            </form>
        </div>
      );
  }
}

      