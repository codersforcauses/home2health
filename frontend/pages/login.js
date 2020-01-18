import React, { Component } from 'react'
import Link from 'next/link'
import Form from '../components/Form'
import { Consumer } from '../Context'
import Router from 'next/router'
export default class UserSignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: []
  }

  render() {
    const { email, password, errors } = this.state

    return (
      <Consumer>
        {context => {
          let submit = () => {
            const { email, password } = this.state
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
          let cancel = () => {
            Router.push('/')
          }
          return (
            <div className="bounds">
              <div className="grid-33 centered signin">
                <h1>Sign In</h1>
                <Form
                  cancel={cancel}
                  errors={errors}
                  submit={submit}
                  submitButtonText="Sign In"
                  elements={() => (
                    <React.Fragment>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={this.change}
                        placeholder="User Name"
                      />
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.change}
                        placeholder="Password"
                      />
                    </React.Fragment>
                  )}
                />
                <p>
                  Don't have a user account?{' '}
                  <Link to="/signup">Click here</Link> to sign up!
                </p>
              </div>
            </div>
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

  submit = () => {}

  cancel = () => {}
}

/**/
