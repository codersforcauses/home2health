import React from 'react'

import { LinkCards } from '../../components/LinkCards'

const MedicalRecoveryCentre = () => {
  return (
    <>
      {style}
      <div className="container">
        <h1>Medical Recovery Centre</h1>
        <TheCottage />
        <TierneyHouse />
        <TBAPerth />
      </div>
    </>
  )
}

const TheCottage = () => {
  return (
    <>
      <h2>The Cottage</h2>
      <p>
        The Cottage is a supportive, home like environment where Complex Care
        Services and Hospital in the Home (HITH) services are provided to people
        who are homeless or at risk of homelessness.
      </p>
      <p>
        The aim is to provide holistic, recuperative care to clients with a
        nursing need, as an alternative to staying in hospital.
      </p>
      <p>
        The Cottage focuses on building rapport and trust between clients and
        staff, enabling staff to establish a safe environment and platform from
        which they can address clients’ health issues.
      </p>

      <LinkCards
        cardDetails={[
          {
            alt: 'The Cottage Infographic Preview Image',
            src: '/images/the-cottage-infographic-preview.png',
            link:
              'https://drive.google.com/open?id=1bNTOFku6OnhaZta7gEB9BE9ZQhGzcV3X',
            reportTitle: 'The Cottage Infographic'
          },
          {
            alt: 'The Cottage Gazey Preview Image',
            src: '/images/the-cottage-gazey-preview.png',
            link:
              'https://drive.google.com/open?id=1VhauhRFC6ftOIkMhGsXw6QUjGPOTyJQA',
            reportTitle:
              'The Cottage: Providing Medical Respite Care (Gazey et al 2018)'
          }
        ]}
      />
    </>
  )
}

const TierneyHouse = () => {
  return (
    <>
      <h2>Tierney House</h2>
      <p>TBA</p>
    </>
  )
}

const TBAPerth = () => {
  return (
    <>
      <h2>TBA Perth</h2>
      <p>
        The recent Sustainable Health Review recommended the establishment of
        MRC in Perth.
      </p>
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
    }
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

export default MedicalRecoveryCentre
