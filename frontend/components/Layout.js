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
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column'
          }}
        >
          <Header />
          <div style={{ flex: '1 0 auto' }}>{this.props.children}</div>
          <Footer />
        </div>
      </Fragment>
    )
  }
}

export default Layout
