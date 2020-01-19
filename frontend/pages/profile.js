import React, { Component } from 'react'
import AppContext, { Consumer } from '../Context'
import Router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default class Profile extends Component {
  static contextType = AppContext
  componentDidMount() {
    const context = this.context
    console.log(context)
    if (!context.authenticatedUser) {
      Router.replace('/login')
      console.log("You shouldn't be able to access this page")
    }
  }
  render() {
    return (
      <Consumer>
        {context => {
          if (context.authenticatedUser) {
            return (
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
            )
          }
        }}
      </Consumer>
    )
  }
}
