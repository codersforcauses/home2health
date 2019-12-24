import React, { Component, Fragment } from 'react'
import Link from 'next/link'

import Contact from '../components/Contact'
import ProfileAbout from '../components/ProfileAbout'
import ProfileComments from '../components/ProfileComments'
import ProfileContent from '../components/ProfileContent'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePosts from '../components/ProfilePosts'
import Partners from '../components/Partners'
import Slider from '../components/Slider'


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
                {!ProfileAbout && !ProfileComments && !ProfileContent && !ProfileHeader && !ProfilePosts && (
                  <Link href="/login">
                    <a
                      className="btn-flat waves-effect waves-light btn-large"
                      style={{ marginRight: '1rem' }}
                    >
                      Log In
                    </a>
                  </Link>
                )}
                <Link href="/Registration">
                <a className="btn waves-effect waves-light btn-large">Sign up</a>
                </Link>
              <div className="col s6 valign-wrapper">
                <Slider />
              </div>
            </div>
          </div>
          <div>
            <Partners />
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
                  src="/images/partner-rph.jpeg"
                />
              </div>
              <div className="col s6 m3 l3 partner-div">
                <img
                  alt="Coders for Causes logo"
                  className="partner-img"
                  src="/images/partner-cfc.png"
                />
              </div>
              <div className="col s6 m3 l3 partner-div">
                <img
                  alt="Homeless Healthcare logo"
                  className="partner-img"
                  src="/images/partner-hh.png"
                />
              </div>
              <div className="col s6 m3 l3 partner-div">
                <img
                  alt="UWA logo"
                  className="partner-img"
                  src="/images/partner-uwa.jpeg"
                />
              </div>
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
