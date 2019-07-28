/*jshint esversion: 6 */

import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 // ensures that the correct input is in the sectino, modify to add autho0 verification
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
          <div
            class="btn"
            block
            beSize="large"
            disabled={!this.validateForm}
            type="submit"
          >
            Login
          </div>
        </form>
      </div>
    )
  }
}
