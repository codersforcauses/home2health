import React, { Component, Fragment } from 'react'
import SEO from '../components/SEO'
import Link from 'next/link'
import Router from 'next/router'
import SocialShare from './../components/SocialShare'

class RoyalPerthHospital extends Component {
  render() {
    return (
      <Fragment>
        <SEO title={`Home2Health - Royal Perth Hospital`}></SEO>
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
                Royal Perth Hospital
              </h4>
              <p className="flow-text"> </p>
            </div>
            <div className="row">
              <div>
                <blockquote>
                  Royal Perth Hospital is a major public teaching hospital
                  located in the Perth CBD. In mid-2016, Homeless Healthcare
                  established its first in-reach program in collaboration with
                  Royal Perth Hospital. The in reach program is modelled on the
                  internationally renowned and evidence based Pathway program
                  that operates in 11 hospitals in the UK. The aim of RPH
                  Homeless Team is to improve outcomes for homeless patients by
                  providing support, improved discharge planning and continuity
                  of care. GPs and nurses from Homeless Healthcare work
                  alongside RPH Homeless Team staff.
                </blockquote>
              </div>
            </div>
            <div className="section">
              <div className="row">
                <div className="col s6">
                  <img
                    alt="RPH Image"
                    src="/images/hospitalPrograms/royalPerth/003_Homeless-Healthcare_160914.png"
                    style={{ position:'relative', width: '100%'}}
                  ></img>
                </div>
                <div className="col s6">
                  <ul style={{position:'relative', bottom:'30px'}}>
                    <h4>Further Reading</h4>
                    <li>
                      <a
                        href="https://rph.health.wa.gov.au/About-us/News/RPHs-Homeless-Team-is-a-WA-Health-Excellence-Awards-finalist"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        WA Excellence Award's Finalist
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/RPH_Homeless_Team_infographic_-_May_2018.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        RPH Homeless Team Inforgraphic (May 2018)
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/RPHHomelessTeamEvalSummary2-Feb2019.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        RPH Homeless Team Evaluation Summary (Feb 2019)
                      </a>
                    </li>
                    <li>
                      <a
                        href="/research_papers/RPHHomelessTeamReport2-Feb2019.pdf"
                        target="_blank"
                        ref="noopener noreferrer"
                      >
                        RPH Homeless Team Report
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SocialShare title={`Home2Health - Royal Perth Hospital`}></SocialShare>
      </Fragment>
    )
  }
}
export default RoyalPerthHospital
