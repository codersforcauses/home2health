import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <div className="container">
      <br />
      <img
        alt="50 Lifes 50 Homes logo"
        className="logo-img"
        src="/logos/50life-logo.png"
      />
      <br />
      <br />
      <h7 style={{ marginBottom: 0 }}>About 50 Lifes 50 Homes</h7>
      <h6 style={{ margin: '1rem 0 0' }}>
        The 50 Lives 50 Homes project is the first Housing First program in
        Western Australia, and one of the first in Australia. 50 Lives is a
        collective impact initiative aiming to provide long-term housing and
        support to the most vulnerable individuals and families rough sleeping
        in Perth. The collaborative includes 28 different organisations in Perth
        (with backbone support from Ruah Community Services), including
        homelessness services, housing agencies, health providers, and mental
        health and community services. To date, over 200 people have been housed
        through the 50 Lives project. The Home2Health Team have been involved in
        the evaluation of 50 Lives since 2016. The evaluation draws on a mix of
        data including the VI-SPDAT, administrative hospital and police data and
        interviews with 50 Lives clients and organisations involved in the
        project.
        <br />
        <br />
        See below for more information:
        <br />
        <br />
        <a
          class="blue-text text-lighten-3"
          href="https://www.facebook.com/50Lives50HomesPerth/"
        >
          Our Facebook Page
        </a>
        <br />
        50 Lives 50 Homes Report 1 (June 2017)
        <br />
        50 Lives 50 Homes Infographic (June 2017)
        <br />
        50 Lives 50 Homes Snapshot Report (Apr 2018)
        <br />
        50 Lives 50 Homes Report 2 (Sept 2018)
        <br />
        Hospital Collaboration Paper (Wood et al 2018)
        <br />
      </h6>
      <h7 style={{ marginBottom: 0 }}>About 20 Lifes 20 Homes</h7>
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
