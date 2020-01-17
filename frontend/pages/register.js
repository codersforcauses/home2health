import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Form from '../components/Form'
import withContext from '../Context'

export default withContext(
  class UserSignUp extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      errors: []
    }

    render() {
      const { name, email, password, errors } = this.state

      return (
        <Fragment>
          <div className="bounds">
            <div className="grid-33 centered signin">
              <h1>Sign Up</h1>
              <Form
                cancel={this.cancel}
                errors={errors}
                submit={this.submit}
                submitButtonText="Sign Up"
                elements={() => (
                  <React.Fragment>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={this.change}
                      placeholder="Name"
                    />
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
                Already have a user account?{' '}
                <Link to="/signin">Click here</Link> to sign in!
              </p>
            </div>
          </div>
        </Fragment>
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

    submit = () => {
      const { context } = this.props
      console.log(context)
      const { name, email, password } = this.state
      const user = { name, email, password }
      context.data
        .createUser(user)
        .then(errors => {
          if (errors.length) {
            this.setState({ errors })
          } else {
            console.log(`${email} is successfully signed up and authenticated!`)
          }
        })
        .catch(err => {
          console.log(err)
          this.props.history.push('/error')
        })
    }

    cancel = () => {
      this.props.history.push('/')
    }
  }
)
