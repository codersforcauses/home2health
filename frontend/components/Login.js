import React, { Component } from 'react';

import Link from 'next/link';


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (this.state.email.length > 0 && this.state.password.length > 0); // ensures that the correct input is in the section, modify to add autho0 verification
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  } // ensures that the validateForm function has passed at least once

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
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
          {/* Placeholder "#" used until backend is created..... */}
          <Link href="#"> 
            <button className=" col s2 offset-m2 btn waves-effect waves-light" disabled={!this.validateForm}>
              Login
            </button>
          </Link>
        </form>
      </div>
    )
  }
}
