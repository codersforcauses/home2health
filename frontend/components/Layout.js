import React, { Component, Fragment } from 'react'
import Header from './Header'
import Head from './Meta'
import '../public/stylesheets/style.css'
import Footer from './Footer'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Head />
        <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
