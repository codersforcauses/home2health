import React from 'react'
import AppContext, { Consumer } from '../Context'
import Router from 'next/router'

export default class Logout extends React.Component {
  static contextType = AppContext
  componentDidMount() {
    const context = this.context
    const { pathname } = Router
    if (!context.authenticatedUser && typeof window !== 'undefined') {
      context.actions.redirectToSignIn(pathname)
    } else {
      context.actions
        .signOut()
        .then(Router.replace('/'))
        .catch(err => console.log(err))
    }
  }
  render() {
    return <div></div>
  }
}
