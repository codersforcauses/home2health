import React, { Component } from 'react'
import Link from 'next/link'
import SEO from '../components/SEO'

import Contact from '../components/Contact'
import Partners from '../components/Partners'
import Slider from '../components/Slider'
import AppContext, { Consumer } from '../Context'

class Index extends Component {
  static contextType = AppContext
  render() {
    return (
      <>
        <SEO title="Home2Health"></SEO>
        <div className="container">
          <div className="section">
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="col s12 m6">
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
                  {this.context.authenticatedUser == null ? (
                    <div>
                      <Link href="/login">
                        <a
                          className="btn waves-effect waves-light"
                          style={{ margin: '0 1rem 0 0' }}
                        >
                          Log in
                        </a>
                      </Link>
                      <Link href="/register">
                        <a className="btn waves-effect waves-light">Sign up</a>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <b>
                        Welcome, {Object(this.context.authenticatedUser).name}!
                      </b>
                    </div>
                  )}
                </div>
              </div>
              <div className="col s12 m6 valign-wrapper">
                <Slider />
              </div>
            </div>
          </div>
          <div className="row">
            <p style={{ fontSize: 'large' }}>
              In wanting to contribute to minimising the impact of the virus we
              have compiled some documents with important information
              particularly for those experiencing homelessness to help against
              coronavirus which you can access via the link below. Stay safe,
              take good care and remember that help is always available to you
              and please don't hesitate to reach out to healthcare providers.
            </p>
            <img
              src="covid/covid-letter-head.PNG"
              alt="COVID19 Home2Health Letterhead"
            ></img>
            <Link href="/covid19">
              <a className="waves-effect waves-light btn-large">
                Access Our Covid-19 Resources
              </a>
            </Link>
          </div>
          <div style={{ position: 'relative', bottom: '80px' }}>
            <Partners />
          </div>
          <div style={{ position: 'relative', bottom: '80px' }}>
            <Contact />
          </div>
        </div>
      </>
    )
  }
}

export default Index
