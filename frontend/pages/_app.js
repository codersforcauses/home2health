import App, { Container as NextContainer } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'

import ProfileAbout from '../components/ProfileAbout'

const user = ProfileAbout.user

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    if (ctx.req && ctx.req.session && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user
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

  constructor(props) {
    super(props)
    this.state = {
      user: props.pageProps.user
    }
  }

  render() {
    const { Component, pageProps } = this.props

    const props = {
      ...pageProps,
      user: this.state.user
    }

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
