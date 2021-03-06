import React, { Component } from 'react'
import Data from '../Data'
import Cookies from 'js-cookie'
import Router from 'next/router'
const AppContext = React.createContext()

export class Provider extends Component {
  constructor() {
    super()
    this.data = new Data()
  }
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
    from: null
  }

  render() {
    const { authenticatedUser, from } = this.state

    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
        redirectToSignIn: this.redirectToSignIn,
        createPost: this.createPost,
        createComment: this.createComment
      },
      from: from || '/profile'
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

  redirectToSignIn = pathname => {
    this.setState({ from: pathname })
    Router.push({ pathname: '/login', state: { from: pathname } })
  }

  signIn = async (email, password) => {
    const user = await this.data.signInUser(email, password)
    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user
        }
      })
      this.setState({ from: null })
      Cookies.set('authenticatedUser', JSON.stringify(user), {})
    }
    return user
  }

  createPost = async body => {
    const post = await this.data.createPost(body)
    return post
  }
  createComment = async body => {
    const comment = await this.data.createComment(body)
    return comment
  }

  signOut = async () => {
    try {
      this.setState(() => {
        if (this.state.authenticatedUser == null) {
          return null
        }
        return { authenticatedUser: null }
      })
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

export default AppContext
