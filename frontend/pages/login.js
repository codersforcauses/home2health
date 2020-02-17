import React, { Component } from 'react'
import Link from 'next/link'
import Form from '../components/Form'
import AppContext, { Consumer } from '../Context'
import Router from 'next/router'
export default class UserSignIn extends Component {
  state = {
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
    const context = this.context
    const { email, password, errors } = this.state
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
            Router.push(context.from)
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
      <div className="container">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form
            cancel={cancel}
            errors={errors}
            submit={submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <div className="input-field">
                  <input
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
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.change}
                  />
                  <label for="password">Password</label>
                </div>
              </React.Fragment>
            )}
          />
          <p>
            Don't have a user account? <Link href="/register">Click here</Link>{' '}
            to sign up!
          </p>
        </div>
      </div>
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
