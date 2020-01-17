import React, { Component } from 'react'
import Data from './Data'
const AppContext = React.createContext()

export class Provider extends Component {
  constructor() {
    super()
    this.data = new Data()
  }

  render() {
    const value = { data: this.data }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

  signIn = async () => {}

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
