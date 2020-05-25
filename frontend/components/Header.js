import React, { Component } from 'react'
import Link from 'next/link'
import { Consumer } from '../Context'

const links = {
  housingFirstPrograms: '/housingprograms',
  hospitalPrograms: [
    {
      link: '/RoyalPerthHospital',
      name: 'Royal Perth Hospital',
    },
    {
      link: '/StVincentMelbourne',
      name: "St Vincent's Hospital Melbourne",
    },
    {
      link: '#',
      name: "St Vincent's Hospital Sydney",
    },
    {
      link: '#',
      name: 'Katherine Hospital',
    },
  ],
  gpServices: '/gp-services',
  dualDiagnosisServices: [
    {
      link: '/Dual-Diagnosis-Services/HODDS',
      name: 'HODDS',
    },
    {
      link: '/Dual-Diagnosis-Services/CHOPS',
      name: 'CHOPS',
    },
  ],
  peerWorkerPrograms: '/peer-worker-programs',
  outreach: '/outreach',
  medicalRecoveryCentre: '/medical-recovery-centre',
  resources: '/resources',
}

const MultiLinks = ({ linkObjects }) => {
  return linkObjects.map(({ link, name }, i) => (
    <React.Fragment key={name}>
      <Link href={link}>
        <a className="links">{name}</a>
      </Link>
      {linkObjects.length - 1 > i && <p className="divider" />}
    </React.Fragment>
  ))
}

const DesktopHeaderLinks = (props) => (
  <li>
    <a
      className="dropdown-trigger theHappening"
      href="#"
      data-target="happeningDropdown"
    >
      What's happening in Australia?
      <i className="material-icons right">arrow_drop_down</i>
    </a>
    <ul id="happeningDropdown" className="dropdown-content">
      <li>
        <Link href={links.housingFirstPrograms}>
          <a>Housing first programs</a>
        </Link>
      </li>
      <li className="divider" />
      <ul className="collapsible">
        <li
          onMouseEnter={() => props.handleEnterHover('hospitalPrograms')}
          onMouseLeave={() => props.handleLeaveHover('hospitalPrograms')}
        >
          <div
            className="collapsible-header"
            id="hospitalPrograms"
            style={{
              color: '#26a69a',
            }}
          >
            Hospital Programs
            <span class="extender">&#9662;</span>
          </div>

          <div
            className="collapsible-body"
            style={{
              display: `${props.hospitalProgramsHover ? 'block' : 'none'}`,
              padding: 10,
            }}
          >
            <MultiLinks linkObjects={links.hospitalPrograms}></MultiLinks>
          </div>
        </li>
      </ul>

      <li>
        <Link href={links.gpServices}>
          <a>GP services</a>
        </Link>
      </li>
      <li className="divider" />

      <ul class="collapsible">
        <li
          onMouseEnter={() => props.handleEnterHover('dualDiagnosisServices')}
          onMouseLeave={() => props.handleLeaveHover('dualDiagnosisServices')}
        >
          <div
            className="collapsible-header"
            id="dual-diagnosis-services"
            style={{
              color: '#26a69a',
            }}
          >
            Dual Diagnosis Services
            <span class="extender">&#9662;</span>
          </div>
          <div
            className="collapsible-body"
            style={{
              display: `${props.dualDiagnosisServicesHover ? 'block' : 'none'}`,
              padding: 10,
            }}
          >
            <MultiLinks linkObjects={links.dualDiagnosisServices}></MultiLinks>
          </div>
        </li>
      </ul>
      <li className="divider" />
      <li>
        <Link href={links.peerWorkerPrograms}>
          <a>Peer worker programs</a>
        </Link>
      </li>
      <li className="divider" />
      <li>
        <Link href={links.outreach}>
          <a>Outreach</a>
        </Link>
      </li>
      <li className="divider" />
      <li>
        <Link href={links.medicalRecoveryCentre}>
          <a>Medical recovery centre</a>
        </Link>
      </li>
      <li className="divider" />
      <li>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
      </li>
    </ul>
  </li>
)

const DesktopHeader = (props) => (
  <ul className="right hide-on-med-and-down">
    <DesktopHeaderLinks {...props}></DesktopHeaderLinks>
    <li>
      <a className="dropdown-trigger" href="#" data-target="memberDropdown">
        Members Area (coming soon)
        <i className="material-icons right">arrow_drop_down</i>
      </a>
      <ul id="memberDropdown" className="dropdown-content">
        <li>
          <a href=".">Discussion board</a>
        </li>
        <li className="divider" />

        <li>
          <a href=".">Become a member</a>
        </li>
        <li className="divider" />
        <li>
          <a href=".">About membership</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="dropdown-trigger" href="#" data-target="blogDropdown">
        Blog
        <i className="material-icons right">arrow_drop_down</i>
      </a>
      <ul id="blogDropdown" className="dropdown-content">
        <li>
          <Link href="/posts/1">
            <a>Posts</a>
          </Link>
        </li>
        <li className="divider" />
        <li>
          <Link href="/posts/form">
            <a>Create Post</a>
          </Link>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">News (coming soon)</a>
    </li>
    <li>
      {props.authUser ? (
        <React.Fragment>
          <Link href="/logout">Log Out</Link>
        </React.Fragment>
      ) : (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}
    </li>
  </ul>
)

const MobileHeaderLinks = (props) => (
  <li>
    <div class="collapsible-header">What's Happening In Australia</div>
    <div class="collapsible-body">
      <p>
        <Link href={links.housingFirstPrograms}>
          <a>Housing first programs</a>
        </Link>
      </p>
      <p className="divider" />
      <ul className="collapsible">
        <li>
          <div
            className="collapsible-header"
            id="hospitalPrograms"
            style={{
              color: '#26a69a',
            }}
          >
            Hospital Programs
            <span class="extender">&#9662;</span>
          </div>

          <div
            className="collapsible-body"
            style={{
              display: `${props.hospitalProgramsHover ? 'block' : 'none'}`,
              padding: 10,
            }}
          >
            <MultiLinks linkObjects={links.hospitalPrograms}></MultiLinks>
          </div>
        </li>
      </ul>
      <p>
        <Link href={links.gpServices}>
          <a>GP services</a>
        </Link>
      </p>
      <p>
        <ul class="collapsible">
          <li>
            <div
              className="collapsible-header"
              id="dual-diagnosis-services"
              style={{
                color: '#26a69a',
              }}
            >
              Dual Diagnosis Services
              <span class="extender">&#9662;</span>
            </div>
            <div
              className="collapsible-body"
              style={{
                display: `${
                  props.dualDiagnosisServicesHover ? 'block' : 'none'
                }`,
                padding: 10,
              }}
            >
              <MultiLinks
                linkObjects={links.dualDiagnosisServices}
              ></MultiLinks>
            </div>
          </li>
        </ul>
      </p>
      <p>
        <Link href={links.peerWorkerPrograms}>
          <a>Peer worker programs</a>
        </Link>
      </p>
      <p>
        <Link href={links.outreach}>
          <a>Outreach</a>
        </Link>
      </p>
      <p>
        <Link href={links.medicalRecoveryCentre}>
          <a>Medical recovery centre</a>
        </Link>
      </p>
      <p>
        <Link href="/resources">
          <a>Resources</a>
        </Link>
      </p>
    </div>
  </li>
)

const MobileHeader = (props) => (
  <ul id="nav-mobile" className="sidenav">
    <ul class="collapsible">
      <MobileHeaderLinks
        hospitalProgramsHover={props.hospitalProgramsHover}
        dualDiagnosisServicesHover={props.dualDiagnosisServicesHover}
      ></MobileHeaderLinks>
    </ul>
    <li>
      <a
        className="dropdown-trigger dropdownMobile"
        href="#"
        data-target="memberDropdownMobile"
      >
        Members Area (coming soon)
      </a>
      <ul id="memberDropdownMobile" className="dropdown-content">
        <li>
          <a href=".">Discussion board</a>
        </li>
        <li>
          <a href=".">Become a member</a>
        </li>
        <li>
          <a href=".">About membership</a>
        </li>
      </ul>
    </li>
    <li>
      <a
        className="dropdown-trigger dropdownMobile"
        href="#"
        data-target="blogDropdownMobile"
      >
        Blog
      </a>
      <ul id="blogDropdownMobile" className="dropdown-content">
        <li>
          <Link href="/posts/1">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/form">
            <a>Create Post</a>
          </Link>
        </li>
      </ul>
    </li>
    <li>
      <Link href="#">
        <a className="navitem">News (coming soon)</a>
      </Link>
    </li>

    <li>
      {props.authUser ? (
        <React.Fragment>
          <Link href="/logout">
            <a className="navitem">Log Out</a>
          </Link>
        </React.Fragment>
      ) : (
        <Link href="/login">
          <a className="navitem">Login</a>
        </Link>
      )}
    </li>
  </ul>
)

class Header extends Component {
  state = {
    hospitalProgramsHover: false,
    dualDiagnosisServicesHover: false,
  }
  handleEnterHover = (hoverName) => {
    this.setState({
      [hoverName + 'Hover']: true,
    })
  }
  handleLeaveHover = (hoverName) => {
    this.setState({
      [hoverName + 'Hover']: false,
    })
  }

  render() {
    return (
      <Consumer>
        {(context) => {
          const authUser = context.authenticatedUser
          return (
            <nav className="lighten-1 white" id="header">
              <div className="nav-wrapper container">
                <Link href="/">
                  <a id="logo-container" className="brand-logo">
                    Home2Health
                  </a>
                </Link>
                <DesktopHeader
                  handleEnterHover={this.handleEnterHover}
                  handleLeaveHover={this.handleLeaveHover}
                  hospitalProgramsHover={this.state.hospitalProgramsHover}
                  dualDiagnosisServicesHover={
                    this.state.dualDiagnosisServicesHover
                  }
                  authUser={authUser}
                ></DesktopHeader>
                <MobileHeader
                  hospitalProgramsHover={this.hospitalProgramsHover}
                  dualDiagnosisServicesHover={
                    this.state.dualDiagnosisServicesHover
                  }
                  authUser={authUser}
                ></MobileHeader>
                <a
                  href="#"
                  data-target="nav-mobile"
                  className="sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
              </div>
            </nav>
          )
        }}
      </Consumer>
    )
  }
}

export default Header
