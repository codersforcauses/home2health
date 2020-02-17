import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Form from '../components/Form'
import AppContext, { Consumer } from '../Context'
import Router from 'next/router'

export default class UserSignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errors: []
  }
  static contextType = AppContext
  componentDidMount() {
    const context = this.context
    if (context.authenticatedUser) {
      Router.push('/profile')
    }
  }
  render() {
    const { name, email, password, errors } = this.state

    return (
      <Consumer>
        {context => {
          let submit = () => {
            const { name, email, password } = this.state

            // New user payload
            const user = {
              name,
              email,
              password
            }
            context.data
              .createUser(user)
              .then(errors => {
                if (errors.length) {
                  this.setState({ errors })
                } else {
                  context.actions
                    .signIn(email, password)
                    .then(user => {
                      if (user === null) {
                        this.setState(() => {
                          return { errors: ['Sign-in was unsuccessful'] }
                        })
                      } else {
                        Router.push('/profile')
                        console.log(`SUCCESS! ${email} is now signed in!`)
                      }
                    })
                    .catch(err => {
                      console.log(err)
                      Router.push('/error')
                    })
                }
              })
              .catch(err => {
                // handle rejected promises
                this.setState({
                  errors: ['The email already exists in our database.']
                })
              })
          }
          return (
            <Fragment>
              <div className="container">
                <div className="grid-33 centered signin">
                  <h1>Sign Up</h1>
                  <Form
                    cancel={this.cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Register"
                    elements={() => (
                      <Fragment>
                        <div className="input-field">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={this.change}
                          />
                          <label for="name">Name</label>
                        </div>
                        <div className="input-field">
                          <input
                            className="input-field "
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            onChange={this.change}
                          />
                          <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                          <input
                            className="input-field "
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.change}
                          />
                          <label for="password">Password</label>
                        </div>
                      </Fragment>
                    )}
                  />
                  <p>
                    Already have a user account?{' '}
                    <Link href="/login">Click here</Link> to sign in!
                  </p>
                </div>
              </div>
            </Fragment>
          )
        }}
      </Consumer>
    )
  }

  change = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState(() => {
      return {
        [name]: value
      }
    })
  }

  cancel = () => {}
}
