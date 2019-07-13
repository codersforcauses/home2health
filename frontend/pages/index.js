import React, { Component } from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

class Index extends Component {
  render() {
    return (
      <Layout>
        <div class="section no-pad-bot" id="index-banner">
          <div class="container">
            <br />
            <br />
            <div class="row valign-wrapper">
              <div class="col s12 m12">
                <h2 class="header center">Let's talk about homelessness.</h2>
              </div>
            </div>
            <div class="row center">
              <h5 class="header col s12 light">
                There has been a growing number of homeless health programs and
                research in Australia recently.
                <br />
                This is a space to share ideas and learn what else is happening
                in homelessness and health in Australia.
              </h5>
            </div>
            <div class="row center">
              {' '}
              <a
                href="http://materializecss.com/getting-started.html"
                class="btn-large waves-effect waves-light"
              >
                Log in
              </a>
              <a
                href="http://materializecss.com/getting-started.html"
                class="btn-large waves-effect waves-light"
              >
                Sign up
              </a>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div class="section grey lighten-1">
          <div class="container">
            <br />
            <br />
            <h2 class="header center">Our partners</h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col s12 m3 l3 partner-div">
                <img
                  alt="Royal Perth Hospital logo"
                  class="partner-img"
                  src="/static/partner-rph.jpeg"
                />
              </div>
              <div class="col s12 m3 l3 partner-div">
                <img
                  alt="Coders for Causes logo"
                  class="partner-img"
                  src="/static/partner-cfc.png"
                />
              </div>
              <div class="col s12 m3 l3 partner-div">
                <img
                  alt="Homeless Healthcare logo"
                  class="partner-img"
                  src="/static/partner-hh.png"
                />
              </div>
              <div class="col s12 m3 l3 partner-div">
                <img
                  alt="UWA logo"
                  class="partner-img"
                  src="/static/partner-uwa.jpeg"
                />
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <Contact />
      </Layout>
    )
  }
}

export default Index
