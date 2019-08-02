{/*Need to configure code in accordance with ESLint, particularly setting up the different buttons for the logins....*/}

import React, { Component } from 'react'
import Link from 'next/link';

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (this.state.email.length > 0 && this.state.password.length > 0 && this,state,password == this.state.confirmPassword); // ensures that the correct input is in the sectino, modify to add autho0 verification
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0; 
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
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
        <FormGroup controlID = "confirmationCode" bcSize = "large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            type = "tel"
            value = { this.state.confirmationCode }
            onChange = { this.handleChange }
            />
            <HelpBlock> Please check your email for the verification code </HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize = "large"
          disabled = { !this.validateConfirmationForm() }
          type = "submit"
          isLoading = { this.state.isLoading }
          text  = "Verify"
          loadingText = "Verifying....."
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit = { this.handleSubmit} >
        <FormGroup controlID = "email" bsSize = "large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
          autoFocus
          type = "email"
          value={ this.state.email }
          onChange={ this.handleChange }
          />
        </FormGroup>
        <FormGroup controlID = "password" bsSize = "large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
          value={ this.state.password }
          onChange={ this.handleChange }
          type = "password"
          />
          </FormGroup>
          <LoaderButton
            block
            bsSize = "large"
            disabled = { !this.validateForm() }
            type = "submit"
            isLoading = { this.state.isLoading }
            text = "Registration"
            loadingText = "Registering....."
            />
            </form>
    );
  }

  render() {
    return (
      <div className = "Registration">
        {this.state.newUser === null
        ? this.renderForm()
        : this.renderConfirmationForm()}
        <Link href="#"> 
            <button className=" col s12 offset-m2 m8 btn waves-effect waves-light" disabled={ !this.validateForm }>
              Login
            </button>
          </Link>
      </div>
    );
  }
}