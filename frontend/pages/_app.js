import App from 'next/app'
import React from 'react'
import Layout from '../components/Layout'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    const M = require('materialize-css')
    M.AutoInit()
    const elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems, { constrainWidth: false, coverTrigger: false })
    // only constrain width to that of activator only for 'What's Happening in Australia?' dropdown
    const elemHappening = document.querySelector('.theHappening')
    M.Dropdown.init(elemHappening, { coverTrigger: false })

    /* Mobile */
    const elemDropdownMobile = document.querySelectorAll('.dropdownMobile')
    M.Dropdown.init(elemDropdownMobile, {
      constrainWidth: true,
      coverTrigger: false
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
