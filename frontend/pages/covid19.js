import React, { Component } from 'react'
import Link from 'next/link'
import SEO from '../components/SEO'
import Contact from '../components/Contact'
import Partners from '../components/Partners'
import AppContext, { Consumer } from '../Context'

class Covid extends Component {
  static contextType = AppContext
  render() {
    return (
      <>
        <div className="container">
          <div className="row" style={{ marginTop: '40px' }}>
            <img
              src="covid/covid-letter-head.PNG"
              alt="COVID19 Home2Health Letterhead"
            ></img>
          </div>
          <div className="row">
            <h4 style={{ textAlign: 'center' }}>Covid-19 Resources</h4>
          </div>
          <div className="row">
            <ul className="covid-resources">
              <li>
                <a
                  href="/covid/covid-faq-1.pdf"
                  target="_blank"
                  style={{ fontSize: 'large' }}
                >
                  Coronavirus FAQs (frequently asked questions) for homelessness
                  services with shared or congregate living settings
                </a>
              </li>
              <li>
                <a
                  href="/covid/covid-faq-2.pdf"
                  target="_blank"
                  style={{ fontSize: 'large' }}
                >
                  Coronavirus FAQs (frequently asked questions) for the
                  homelessness sector in Western Australia
                </a>
              </li>
              <li>
                <a
                  href="/covid/covid-harm-min.pdf"
                  target="_blank"
                  style={{ fontSize: 'large' }}
                >
                  Harm minimisation advice for people who use alcohol and other
                  drugs
                </a>
              </li>
              <li>
                <a
                  href="/covid/covid-homeless-info.pdf"
                  target="_blank"
                  style={{ fontSize: 'large' }}
                >
                  Coronavirus FAQs (frequently asked questions) for those
                  experiencing homelessness
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Covid
