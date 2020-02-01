import React from 'react'
import Link from 'next/link'

export default () => {
  const m0 = {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 50
  }
  return (
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
      <h6>
        The 50 Lives 50 Homes project is the first Housing First program in
        Western Australia, and one of the first in Australia. 50 Lives is a
        collective impact initiative aiming to provide long-term housing and
        support to the most vulnerable individuals and families rough sleeping
        in Perth. The collaborative includes 28 different organisations in Perth
        (with backbone support from
        <em>
          <a href="https://www.ruah.org.au/"> Ruah Community Services</a>
        </em>
        ) , including homelessness services, housing agencies, health providers,
        and mental health and community services.
        <br />
        <br />
        To date, over 200 people have been housed through the 50 Lives project.
        The Home2Health Team have been involved in the evaluation of 50 Lives
        since 2016. The evaluation draws on a mix of data including the
        VI-SPDAT, administrative hospital and police data and interviews with 50
        Lives clients and organisations involved in the project.
        <br />
        <br />
        See below for more information:
      </h6>
      <div style={{ textAlign: 'center' }}>
        <div className="row">
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img
                  alt="50 Lifes 50 Homes logo"
                  src="/50Homes50Lifes/50HomesDoc.png"
                  width="200px"
                />
              </div>
              <div className="card-action">
                <a href="/50Homes50Lifes/50_Lives_First_Report_June_2017.pdf">
                  50 Lives 50 Homes Report 1 (June 2017)
                </a>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img
                  alt="50 Lifes 50 Homes logo"
                  src="/50Homes50Lifes/50HomesDoc.png"
                  width="200px"
                />
              </div>
              <div className="card-action">
                <a href="/50Homes50Lifes/50_Lives_Infographic_June_2017.pdf">
                  Infographic <br />
                  (June 2017)
                </a>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img
                  alt="50 Lifes 50 Homes logo"
                  src="/50Homes50Lifes/50HomesDoc.png"
                  width="200px"
                />
              </div>
              <div className="card-action">
                <a href="/50Homes50Lifes/50_Lives_Snapshot_April_2018.pdf">
                  Snapshot Report <br />
                  (Apr 2018)
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img
                  alt="50 Lifes 50 Homes logo"
                  src="/50Homes50Lifes/50HomesDoc.png"
                  width="200px"
                />
              </div>
              <div className="card-action">
                <a href="/50Homes50Lifes/50_Lives_Second_Report_Sept_2018.pdf">
                  50 Lives 50 Homes Report 2 (Sept 2018)
                </a>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img
                  alt="50 Lifes 50 Homes logo"
                  src="/50Homes50Lifes/50HomesDoc.png"
                  width="200px"
                />
              </div>
              <div className="card-action">
                <a href="/50Homes50Lifes/Wood_et_al_2018_-_Hospital_Collaboration_with_a_Housing_First_program.pdf">
                  Hospital Collaboration Paper (Wood et al 2018)
                </a>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image">
                <img
                  alt="50 Lifes 50 Homes logo"
                  src="/50Homes50Lifes/50HomesDoc.png"
                  width="200px"
                />
              </div>
              <div className="card-action">
                <a href="https://www.facebook.com/50Lives50HomesPerth/">
                  Our Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 style={{ marginBottom: 0 }}>Early Initiative: 20 Lifes 20 Homes</h4>
      <h6 style={{ margin: '1rem 0 0' }}>
        The 20 Lives 20 Homes project will be the first place-based trial of the
        50 Homes 50 Lives housing first model in the metropolitan area, based in
        Fremantle. The St Patrick’s 20 Lives 20 Homes team will work along with
        Ruah and a range of collaborating agencies, to provide intensive wrap
        around support to individuals facing complex barriers to exiting
        homelessness. This project is due to commence in 2019.
      </h6>
    </div>
  )
}
