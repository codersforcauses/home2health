import Reach from 'react'
import SEO from '../../components/SEO'
import SocialShare from '../../components/SocialShare'

import { LinkCards } from '../../components/LinkCards'

const OutReachPage = () => {
  return (
    <>
      {style}
      <div className="container">
        <h1>Outreach</h1>
        <StreetHealth />
        <StreetDoctor />
      </div>
      <SocialShare></SocialShare>
    </>
  )
}

const StreetHealth = () => {
  return (
    <>
      <SEO title="Home2Health - Outreach"></SEO>
      <h2>Street Health</h2>
      <blockquote>
        <p>
          Street Health is a service operated by Homeless Healthcare that
          provides healthcare to rough sleepers in CBD parks in Perth and
          Fremantle.
        </p>
      </blockquote>
      <LinkCards
        cardDetails={[
          {
            alt: 'Street Health Infographic Preview Image',
            src: '/images/street-health-infographic-preview.png',
            link:
              'https://drive.google.com/open?id=1do43kATRBb8L4MbSx9F0WZowiC8W9aVn',
            reportTitle: 'Street Health Infographic',
          },
          {
            alt: 'Street Health Infographic Preview Image',
            src:
              '/images/medics-for-homeless-in-funding-plea-west-australian-preview.png',
            link:
              'https://thewest.com.au/news/perth/medics-for-homeless-in-funding-plea-ng-b88525248z',
            reportTitle:
              'Medics for Homeless Funding Plea (The West Australian)',
          },
        ]}
      />
    </>
  )
}

const StreetDoctor = () => {
  return (
    <>
      <h2>Street Doctor</h2>
      <blockquote>
        <p>TBA</p>
      </blockquote>
    </>
  )
}

const style = (
  <style jsx="true">{`
    .flex-container {
      display: flex;
      justify-content: center;
    }
    .card-margin {
      margin: 0 !important;
    }import SocialShare from './../../components/SocialShare';

    main {
      flex: 1 0 auto;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
  `}</style>
)

export default OutReachPage
