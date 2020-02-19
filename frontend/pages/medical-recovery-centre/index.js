import React from 'react'

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
      <blockquote>
        The Cottage is a supportive, home like environment where Complex Care
        Services and Hospital in the Home (HITH) services are provided to people
        who are homeless or at risk of homelessness.
        <br />
        <br />
        The aim is to provide holistic, recuperative care to clients with a
        nursing need, as an alternative to staying in hospital.
        <br />
        <br />
        The Cottage focuses on building rapport and trust between clients and
        staff, enabling staff to establish a safe environment and platform from
        which they can address clients’ health issues.
      </blockquote>
      <div className="row flex-container">
        <div className="col s12 m3 card-margin">
          <a
            href="https://drive.google.com/open?id=1bNTOFku6OnhaZta7gEB9BE9ZQhGzcV3X"
            target="_blank"
          >
            <div class="card ">
              <div class="card-image">
                <img src="/images/the-cottage-infographic-preview.png" />
              </div>
              <div className="card-action">The Cottage Infographic</div>
            </div>
          </a>
        </div>
        <div className="col s12 m3 card-margin">
          <a
            href="https://drive.google.com/open?id=1VhauhRFC6ftOIkMhGsXw6QUjGPOTyJQA"
            target="_blank"
          >
            <div class="card">
              <div class="card-image">
                <img src="/images/the-cottage-gazey-preview.png" />
              </div>
              <div className="card-action">
                The Cottage: Providing Medical Respite Care (Gazey et al 2018)
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

const TierneyHouse = () => {
  return (
    <>
      <h2>Tierney House</h2>
      <blockquote>TBA</blockquote>
    </>
  )
}

const TBAPerth = () => {
  return (
    <>
      <h2>TBA Perth</h2>
      <blockquote>
        The recent Sustainable Health Review recommended the establishment of
        MRC in Perth.
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
