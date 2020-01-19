import React, { Component } from 'react'
import Data from '../Data'
import Cookies from 'js-cookie'
const AppContext = React.createContext()

export class Provider extends Component {
  constructor() {
    super()
    this.data = new Data()
  }
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  }

  render() {
    const { authenticatedUser } = this.state

    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
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
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 })
    }
    return user
  }

  signOut = async () => {
    try {
      this.setState({ authenticatedUser: null })
      const signOut = await this.data.signOutUser()
      if (signOut == null) {
        throw new Error('Error in signing out')
      }
      Cookies.remove('authenticatedUser')
    } catch (e) {
      console.log(e)
    }
  }
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
