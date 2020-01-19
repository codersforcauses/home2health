import React, { Component } from 'react'
import { Consumer } from '../Context'
import Router from 'next/router'
class Profile extends Component {
  render() {
    console.log(this.props)
    return (
      <Consumer>
        {context => {
          if (!context.authenticatedUser) {
            console.log("You shouldn't be able to access this page")
          } else {
            return (
              <div className="bounds">
                <div className="grid-100">
                  <h1>
                    You are authenticated! {context.authenticatedUser.name}
                  </h1>
                </div>
              </div>
            )
          }
        }}
      </Consumer>
    )
  }
}
export default Profile
