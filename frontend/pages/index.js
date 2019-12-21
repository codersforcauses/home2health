import React, { Component, Fragment } from 'react'
import Link from 'next/link'

import Contact from '../components/Contact'
import Partners from '../components/Partners'
import Slider from '../components/Slider'

class Index extends Component {
  render() {
    return (
      <Fragment>
        <div className="section" id="index-banner">
          <div className="container">
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="col s12 m8">
                <h3 style={{ marginBottom: 0 }}>
                  Let's talk about homelessness.
                </h3>
              </div>
            </div>
            <div className="row" style={{ marginTop: '20px' }}>
              <h5 className="col s12 m8" style={{ margin: '0 0' }}>
                There has been a growing number of homeless health programs and
                research in Australia recently. This is a space to share ideas
                and learn what else is happening in homelessness and health in
                Australia.
              </h5>
            </div>
            <div className="row" style={{ marginBottom: '1rem' }}>
              <div className="col s12" style={{ marginBottom: '10px' }}>
                <Link href="#">
                  <a
                    className="btn-flat waves-effect waves-light"
                    style={{ marginRight: '1rem' }}
                  >
                    Log in
                  </a>
                </Link>
                <Link href="#">
                  <a className="btn waves-effect waves-light">Sign up</a>
                </Link>
              </div>
            </div>
          </div>
        <div>
        <Slider />
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
