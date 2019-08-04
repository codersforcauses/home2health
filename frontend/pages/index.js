import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Contact from '../components/Contact'

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
              <div className="col s12">
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
        </div>
        <div className="section grey lighten-1">
          <div className="container">
            <h4 className="center">Our partners</h4>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col s6 m3 l3"
                style={{ backgroundColor: 'white', height: 'auto' }}
              >
                <img
                  alt="Royal Perth Hospital logo"
                  className="partner-img"
                  src="/static/partner-rph.jpeg"
                />
              </div>
              <div className="col s6 m3 l3 partner-div">
                <img
                  alt="Coders for Causes logo"
                  className="partner-img"
                  src="/static/partner-cfc.png"
                />
              </div>
              <div className="col s6 m3 l3 partner-div">
                <img
                  alt="Homeless Healthcare logo"
                  className="partner-img"
                  src="/static/partner-hh.png"
                />
              </div>
              <div className="col s6 m3 l3 partner-div">
                <img
                  alt="UWA logo"
                  className="partner-img"
                  src="/static/partner-uwa.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </Fragment>
    )
  }
}

export default Index
