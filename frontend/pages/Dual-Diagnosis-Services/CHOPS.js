import React from 'react'
import SEO from '../../components/SEO'
import Link from 'next/link'
import LinksCard from '../../components/LinkCards'
import { LinkCards } from './../../components/LinkCards'

export default () => {
  return (
    <React.Fragment>
      <SEO title="Home2Health - Dual Diagnosis Services - CHOPS"></SEO>
      <div className="container">
        <div className="row">
          <h4 style={{ marginBottom: 0 }}>
            Claredon Homeless Outreach Psychiatric Service (CHOPS)
          </h4>
          <p style={{ margin: '1rem 0 0' }}>
            The 20 Lives 20 Homes project will be the first place-based trial of
            the 50 Homes 50 Lives housing first model in the metropolitan area,
            based in Fremantle. The St Patrick’s 20 Lives 20 Homes team will
            work along with Ruah and a range of collaborating agencies, to
            provide intensive wrap around support to individuals facing complex
            barriers to exiting homelessness. This project is due to commence in
            2019.
          </p>
          <p>More details below:</p>
        </div>
        <LinkCards
          cardDetails={[
            {
              alt: '50 Lifes 50 Homes logo',
              src: '/images/Dual-Diagnosis-Services/CHOPS_Infographic_1.png',
              link: '/research_papers/SVHM_-_CHOPS_Infographic.pdf',
              reportTitle: 'CHOPS Infographic'
            }
          ]}
        ></LinkCards>
      </div>
    </React.Fragment>
  )
}
