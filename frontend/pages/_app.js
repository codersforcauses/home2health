import App from 'next/app'
import React from 'react'
import Layout from '../components/Layout'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // skip auto adding CSS as its already imported above

// FontAwesome icon library
// 1. Import it from free-solid-svg-icons or another package. fab references all brand icons.
// 2. Add to the library.
// 3. Use it by passing a lower case string of it to the React FontAwesomeIcon
//      e.g. <FontAwesomeIcon icon='envelope' />
// See https://github.com/FortAwesome/react-fontawesome#features for styling options
import { faEnvelope, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faEnvelope, faQuestion)

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
