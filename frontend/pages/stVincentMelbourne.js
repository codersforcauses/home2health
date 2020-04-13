import React, { Component, Fragment } from 'react'
import SEO from '../components/SEO'
import Link from 'next/link'

class StVincentMelbourne extends Component {
  render() {
    return (
      <Fragment>
        <SEO title={`Home2Health - St Vincent's Melbourne`}></SEO>
        <div className="container">
          <div className="section">
            <div>
              <h4
                style={{
                  marginBottom: 0,
                  textAlign: 'center',
                  color: '#424242', // offblack
                }}
              >
                {''}
                St Vincent's Hospital Melbourne
              </h4>
              <p className="flow-text"> </p>
            </div>
            <div className="row">
              <div>
                <blockquote>
                  St Vincent's Hospital Melbourne is a tertiary public
                  healthcare service. Their services includes numerous homeless
                  healthcare services in addition to standard hospital services
                  that range from emergency and critical care to pallaitive and
                  residential care.
                </blockquote>
              </div>
            </div>
            <div className="section">
              <div className="row">
                <div className="col left">
                  <img
                    alt="St Vincent Image"
                    src="images/hospitalPrograms/stVincent/ALERT.jpg"
                    style={{ height: 400 }}
                  ></img>
                  <ul>
                    <h4>Further Reading</h4>
                    <li>
                      <a
                        href="/research_papers/SVHMInfographic.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        SVHM Homelessness Programs Infographic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/SVHM-ALERTInfographic.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        SVHM Homelessness Programs - ALERT Infographic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/SVHM_CHOPS_Infographic.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        SVHM Homelessness Programs - CHOPS Infographic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/SVHM-PragueHouseinfographic.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        SVHM Homelessness Programs - Prague House Infographic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/SVHM-TheCottageInfographic.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        SVHM Homelessness Programs - The Cottage Infographic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/SVHMReport-sept2017.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        SVHM Homelessness Programs Report (Sep 2017)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default StVincentMelbourne
