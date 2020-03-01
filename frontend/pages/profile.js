import React, { Component } from 'react'
import SEO from '../components/SEO'
import AppContext, { Consumer } from '../Context'
import Router from 'next/router'
import Link from 'next/link'

export default class Profile extends Component {
  static contextType = AppContext
  componentDidMount() {
    const context = this.context
    const { pathname } = Router
    if (!context.authenticatedUser) {
      context.actions.redirectToSignIn(pathname)
    }
  }
  render() {
    return (
      <Consumer>
        {context => {
          if (context.authenticatedUser) {
            return (
              <React.Fragment>
                <SEO title={`Home2Health - Profile`}></SEO>
                <div className="bounds">
                  <div className="grid-100">
                    <h1>
                      You are authenticated! {context.authenticatedUser.name}
                    </h1>
                    <Link href="/">
                      <a>Go to home page</a>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}
