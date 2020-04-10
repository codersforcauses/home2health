import React, { Component, Fragment } from 'react'
import Header from './Header'
import '../public/stylesheets/style.css'
import Footer from './Footer'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        {style}
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    )
  }
}

const style = (
  <style jsx="true">{`
    #__next {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }
  `}</style>
)

export default Layout
