import React, { Component } from 'react'
import Link from 'next/link'
import SEO from '../components/SEO'

import Contact from '../components/Contact'
import Partners from '../components/Partners'
import Slider from '../components/Slider'

class Index extends Component {
  render() {
    return (
      <>
        <SEO title="Home2Health"></SEO>
        <div className="container">
          <div className="section">
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="col s6">
                <h3 style={{ marginBottom: 0 }}>
                  Let's talk about homelessness.
                </h3>
                <h5 style={{ margin: '1rem 0 0' }}>
                  There has been a growing number of homeless health programs
                  and research in Australia recently. This is a space to share
                  ideas and learn what else is happening in homelessness and
                  health in Australia.
                </h5>
                <div style={{ margin: '1rem 0 0' }}>
                  <Link href="/login">
                    <a
                      className="btn waves-effect waves-light"
                      style={{ marginRight: '1rem' }}
                    >
                      Log in
                    </a>
                  </Link>
                  <Link href="/register">
                    <a className="btn waves-effect waves-light">Sign up</a>
                  </Link>
                </div>
              </div>
              <div className="col s6 valign-wrapper">
                <Slider />
              </div>
            </div>
          </div>
          <div>
            <Partners />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </>
    )
  }
}

export default Index
