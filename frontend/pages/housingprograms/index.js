import React from 'react'
import SEO from '../../components/SEO'
import Link from 'next/link'
import { LinkCards } from '../../components/LinkCards'

export default () => {
  const m0 = {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 50
  }

  const cardDetails = [
    {
      alt: '50 Lifes 50 Homes logo',
      src: '/50Homes50Lifes/logo2-50L.png',
      link: '/50Homes50Lifes/50_Lives_First_Report_June_2017.pdf',
      reportTitle: '50 Lives 50 Homes Report 1 (June 2017)'
    },
    {
      alt: '50 Lifes 50 Homes logo',
      src: '/50Homes50Lifes/InfoGraphics50H.png',
      link: '/50Homes50Lifes/50_Lives_Infographic_June_2017.pdf',
      reportTitle: '50 Lives 50 Homes Infographic (June 2017)'
    },
    {
      alt: '50 Lifes 50 Homes logo',
      src: '/50Homes50Lifes/50HomesDoc.png',
      link: '/50Homes50Lifes/50_Lives_Snapshot_April_2018.pdf',
      reportTitle: '50 Lives 50 Homes Snapshot Report ',
      date: 'Apr 2018'
    },
    {
      alt: '50 Lifes 50 Homes logo',
      src: '/50Homes50Lifes/logo2-50L.png',
      link: '/50Homes50Lifes/50_Lives_Second_Report_Sept_2018.pdf',
      reportTitle: '50 Lives 50 Homes Report 2 (Sept 2018)'
    },
    {
      alt: '50 Lifes 50 Homes logo',
      src: '/images/landing/9.jpg',
      link: 'Hospital Collaboration Paper (Wood et al 2018)',
      reportTitle: 'Hospital Collaboration Paper (Wood et al 2018)'
    },
    {
      alt: '50 Lifes 50 Homes logo',
      src: '/50Homes50Lifes/fb_img.png',
      link: 'https://www.facebook.com/50Lives50HomesPerth/',
      reportTitle: 'Our Facebook Page'
    }
  ]

  return (
    <React.Fragment>
      <SEO title="Home2Health - Housing First Programs"></SEO>
      <div className="container">
        <img
          style={{
            margin: '50px auto 10px auto',
            maxHeight: '300px',
            maxWidth: '800px',
            display: 'block'
          }}
          alt="50 Lifes 50 Homes logo"
          src="/50Homes50Lifes/50life-logo.png"
        />
        <h4 style={{ marginBottom: 0 }}>About 50 Lifes 50 Homes</h4>
        <p>
          The 50 Lives 50 Homes project is the first Housing First program in
          Western Australia, and one of the first in Australia. 50 Lives is a
          collective impact initiative aiming to provide long-term housing and
          support to the most vulnerable individuals and families rough sleeping
          in Perth. The collaborative includes 28 different organisations in
          Perth (with backbone support from
          <em>
            <a href="https://www.ruah.org.au/" style={{ color: '#0f6489' }}>
              {' '}
              Ruah Community Services
            </a>
          </em>
          ) , including homelessness services, housing agencies, health
          providers, and mental health and community services.
          <br />
          <br />
          To date, over 200 people have been housed through the 50 Lives
          project. The Home2Health Team have been involved in the evaluation of
          50 Lives since 2016. The evaluation draws on a mix of data including
          the VI-SPDAT, administrative hospital and police data and interviews
          with 50 Lives clients and organisations involved in the project.
          <br />
          <br />
          See below for more information:
        </p>
        <div style={{ textAlign: 'center' }}>
          <LinkCards cardDetails={cardDetails}></LinkCards>
        </div>
        <h4 style={{ marginBottom: 0 }}>Early Initiative: 20 Lifes 20 Homes</h4>
        <p style={{ margin: '1rem 0 0' }}>
          The 20 Lives 20 Homes project will be the first place-based trial of
          the 50 Homes 50 Lives housing first model in the metropolitan area,
          based in Fremantle. The St Patrick’s 20 Lives 20 Homes team will work
          along with Ruah and a range of collaborating agencies, to provide
          intensive wrap around support to individuals facing complex barriers
          to exiting homelessness. This project is due to commence in 2019.
        </p>
      </div>
    </React.Fragment>
  )
}
