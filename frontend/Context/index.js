import React, { Component } from 'react'
import Data from '../Data'
const AppContext = React.createContext()

export class Provider extends Component {
  constructor() {
    super()
    this.data = new Data()
  }
  state = {
    authenticatedUser: null
  }

  render() {
    const { authenticatedUser } = this.state

    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn
      }
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

  signIn = async (email, password) => {
    const user = await this.data.signInUser(email, password)
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user
        }
      })
    }
    return user
  }

  signOut = () => {}
}

export const Consumer = AppContext.Consumer

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    )
  }
}
