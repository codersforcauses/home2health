import React, { Component, Fragment } from 'react'
import Header from './Header'
import Head from './Meta'
import '../public/stylesheets/style.css'
import Footer from './Footer'

class Layout extends Component {
  componentDidMount() {
    const M = require('materialize-css')
    M.AutoInit()
    const elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems, { constrainWidth: false, coverTrigger: false })
    // only constrain width to that of activator only for 'What's Happening in Australia?' dropdown
    const elemHappening = document.querySelector('.theHappening')
    M.Dropdown.init(elemHappening, { coverTrigger: false })
    const elemDropdownMobile = document.querySelector(
      '.happeningDropdownMobile'
    )
  }

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
