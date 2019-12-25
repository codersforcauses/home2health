import React, { Component, Fragment } from 'react'
import Link from 'next/link'

import Contact from '../components/Contact'
import ProfileAbout from '../components/ProfileAbout'
import Partners from '../components/Partners'
import Slider from '../components/Slider'

const user = ProfileAbout.user

class Index extends Component {
  render() {
    return (
      <Fragment>
        <div className="section" id="index-banner">
          <div className="container">
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
                  {user ? (
                    <Link href="/ProfileAbout">
                      <a className="btn waves-effect waves-light">Profile</a>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <a className="btn waves-effect waves-light">Log In</a>
                    </Link>
                  )}
                  {user ? (
                    <Link href="/ProfileAbout">
                      <a className="btn waves-effect waves-light">Profile</a>
                    </Link>
                  ) : (
                    <Link href="/signup">
                      <a className="btn waves-effect waves-light">Sign Up</a>
                    </Link>
                  )}
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
      </Fragment>
    )
  }
}

export default Index
