import React, { Component } from 'react'
import Link from 'next/link'
import { Consumer } from '../Context'
class Header extends Component {
  state = {
    hospitalProgramsHover: false
  }
  handleEnterHover = hoverName => {
    this.setState({
      [hoverName + 'Hover']: true
    })
  }
  handleLeaveHover = hoverName => {
    this.setState({
      [hoverName + 'Hover']: false
    })
  }

  render() {
    return (
      <Consumer>
        {context => {
          const authUser = context.authenticatedUser
          return (
            <nav className="lighten-1 white" id="header">
              <div className="nav-wrapper container">
                <Link href="/">
                  <a id="logo-container" className="brand-logo">
                    Home2Health
                  </a>
                </Link>
                <ul className="right hide-on-med-and-down">
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
                        <Link href="/housingprograms">
                          <a>Housing first programs</a>
                        </Link>
                      </li>
                      <li className="divider" />
                      <ul className="collapsible">
                        <li
                          onMouseEnter={() =>
                            this.handleEnterHover('hospitalPrograms')
                          }
                          onMouseLeave={() =>
                            this.handleLeaveHover('hospitalPrograms')
                          }
                        >
                          <div
                            className="collapsible-header"
                            id="hospitalPrograms"
                            style={{ color: '#26a69a' }}
                            // color="#26a69a"
                          >
                            Hospital Programs
                            <span class="extender">&#9662;</span>
                          </div>

                          <div
                            className="collapsible-body"
                            style={{
                              display: `${
                                this.state.hospitalProgramsHover
                                  ? 'block'
                                  : 'none'
                              }`,
                              padding: 10
                            }}
                          >
                            <Link href="/RoyalPerthHospital">
                              <a className="links">Royal Perth Hospital</a>
                            </Link>
                            <li className="divider" />
                            <Link href="#">
                              <a className="links">
                                St Vincent's Hospital Melbourne
                              </a>
                            </Link>
                            <li className="divider" />
                            <Link href="#">
                              <a className="links">
                                St Vincent's Hospital Sydney
                              </a>
                            </Link>
                            <li className="divider" />
                            <Link href="#">
                              <a className="links">Katherine Hospital</a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <li className="divider" />
                      <li>
                        <a href=".">GP services</a>
                      </li>
                      <li className="divider" />

                      <ul class="collapsible">
                        <li
                          onMouseEnter={this.handleEnterHover}
                          onMouseLeave={this.handleLeaveHover}
                        >
                          <div
                            className="collapsible-header"
                            id="dual-diagnosis-services"
                          >
                            Dual Diagnosis Services
                          </div>
                          <div
                            className="collapsible-body"
                            style={{
                              display: `${this.state.hover ? 'block' : 'none'}`
                            }}
                          >
                            <a href="">HODDS</a>
                            <a href="">CHOPS</a>
                          </div>
                        </li>
                      </ul>
                      {/* <a
                          class="dropdown-button"
                          data-activates="dropdown2"
                          data-hover="hover"
                          data-alignment="left"
                        >
                          Dual Diagnosis Services
                          <span class="right-triangle">&#9656;</span>
                        </a> */}

                      <li className="divider" />
                      <li>
                        <a href=".">Peer worker programs</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href=".">Outreach</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href=".">Medical recovery centre</a>
                      </li>
                      <li className="divider" />
                      <li>
                        <Link href="/resources">
                          <a>Resources</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="dropdown-trigger"
                      href="#"
                      data-target="memberDropdown"
                    >
                      Members Area
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
                    <a
                      className="dropdown-trigger"
                      href="#"
                      data-target="blogDropdown"
                    >
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
                    <a href="#">News</a>
                  </li>
                  <li>
                    {authUser ? (
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
                <ul id="nav-mobile" className="sidenav">
                  <li>
                    <a
                      className="dropdown-trigger dropdownMobile"
                      href="#"
                      data-target="happeningDropdownMobile"
                    >
                      What's happening in Australia?
                    </a>

                    <ul
                      id="happeningDropdownMobile"
                      className="dropdown-content"
                    >
                      <li>
                        <a href=".">Housing first programs</a>
                      </li>
                      <ul className="collapsible">
                        <li
                          onMouseEnter={this.handleEnterHover}
                          onMouseLeave={this.handleLeaveHover}
                        >
                          <div
                            className="collapsible-header"
                            id="hospitalPrograms"
                            color=""
                          >
                            Hospital Programs
                          </div>

                          <div
                            className="collapsible-body"
                            style={{
                              display: `${
                                this.state.hospitalProgramsHover
                                  ? 'block'
                                  : 'none'
                              }`
                            }}
                          >
                            <Link href="/RoyalPerthHospital">
                              <a>Royal Perth Hospital</a>
                            </Link>
                          </div>

                          <div
                            className="collapsible-body"
                            style={{
                              display: `${
                                this.state.hospitalProgramsHover
                                  ? 'block'
                                  : 'none'
                              }`
                            }}
                          >
                            <Link href="#">
                              <a>St Vincent's Hospital Melbourne</a>
                            </Link>
                          </div>

                          <div
                            className="collapsible-body"
                            style={{
                              display: `${
                                this.state.hospitalProgramsHover
                                  ? 'block'
                                  : 'none'
                              }`
                            }}
                          >
                            <Link href="#">
                              <a>St Vincent's Hospital Sydney</a>
                            </Link>
                          </div>

                          <div
                            className="collapsible-body"
                            style={{
                              display: `${
                                this.state.hospitalProgramsHover
                                  ? 'block'
                                  : 'none'
                              }`
                            }}
                          >
                            <Link href="#">
                              <a>Katherine Hospital</a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <li>
                        <a href=".">GP services</a>
                      </li>
                      <li>
                        <Link href="/Dual-Diagnosis-Services">
                          <a>Dual diagnosis services</a>
                        </Link>
                      </li>
                      <li>
                        <a href=".">Peer worker programs</a>
                      </li>
                      <li>
                        <a href=".">Outreach</a>
                      </li>
                      <li>
                        <a href=".">Medical recovery centre</a>
                      </li>
                      <li>
                        <a href="/resources">Resources</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="dropdown-trigger dropdownMobile"
                      href="#"
                      data-target="memberDropdownMobile"
                    >
                      Members Area
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
                      <a className="navitem">News</a>
                    </Link>
                  </li>

                  <li>
                    {authUser ? (
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
