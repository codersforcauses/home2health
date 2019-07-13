import React, { Component } from 'react'
import Header from './Header'
import Head from './Meta'
import '../public/stylesheets/style.css'
import Footer from './Footer'

class Layout extends Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
