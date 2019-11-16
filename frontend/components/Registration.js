{/*Need to combine with Auth0 functionality for email and password confirmation*/}

import React, { Component } from 'react'
import Link from 'next/link';

export default class Registration extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  validateForm() {
    return (this.state.email.length > 0 && this.state.password.length > 0 && this.state.password == this.state.confirmPassword); // ensures that the correct input is in the section, modify to add autho0 verification
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0; 
  }

  handleChange(event) {
    this.setState({[ event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.setState({ newUser: "test" });
    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit = { this.handleConfirmationSubmit }>
        <div controlID = "confirmationCode">
          <ControlLabel>Confirmation Code</ControlLabel>
        </div>
            {/**add auth0 password verification*/}
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
            </button>
      </form>
    );
  }

  renderForm() {
    return (
      <div className="container">
        <form className="row" onSubmit={this.handleSubmit} style={{'marginTop': '7rem'}}>
          <div className="col s12 offset-m2 m8 input-field">
            <input name="email" type="email" className="validate" value={this.state.email} onChange={this.handleChange} />
            <label htmlFor="email"> Email </label>
        </div>
        <div className="col s12 offset-m2 m8 input-field">
            <input name="password" type="password" className="validate" value={this.state.password} onChange={this.handleChange} />
            <label htmlFor="password"> Password </label>
        </div>
        <Link href="#"> 
            <button className=" col s2 offset-m2 btn waves-effect waves-light" disabled={ !this.validateForm }>
              Register
            </button>
        </Link>
        {/** add 'registering loading button */}
          </form>
        </div>
    );
  }

  render() {
    return (
      <div className = "Registration">
        {this.state.newUser === null
        ? this.renderForm()
        : this.renderConfirmationForm()}
      </div>
    );
  }
}