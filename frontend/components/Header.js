import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render() {
    return (
      <nav class="lighten-1 white" id="header">
        <div class="nav-wrapper container">
          <Link href="/">
            <a id="logo-container" href="/" class="brand-logo">
              Home2Health
            </a>
          </Link>
          <ul class="right hide-on-med-and-down">
            <li>
              <a
                class="dropdown-trigger theHappening"
                href="#"
                data-target="happeningDropdown"
              >
                What's happening in Australia?
                <i class="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="happeningDropdown" class="dropdown-content">
                <li>
                  <a href=".">Housing first programs</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Hospital programs</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">GP services</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Dual diagnosis services</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Peer worker programs</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Outreach</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Medical recovery centre</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="memberDropdown">
                Members Area
                <i class="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="memberDropdown" class="dropdown-content">
                <li>
                  <a href=".">About membership</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Become a member</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Discussion board</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="dropdown-trigger" href="#" data-target="blogDropdown">
                Blog
                <i class="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="blogDropdown" class="dropdown-content">
                <li>
                  <Link href="/posts">
                    <a>Posts</a>
                  </Link>
                </li>
                <li class="divider" />
                <li>
                  <Link href="/posts/form">
                    <a>Create Form</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <Link href="#">
                <a>Login</a>
              </Link>
            </li>
          </ul>
          <ul id="nav-mobile" class="sidenav">
            <li>
              <a
                class="dropdown-trigger"
                href="#"
                data-target="happeningDropdownMobile"
              >
                What's happening in Australia?
              </a>
              <ul
                id="happeningDropdownMobile"
                class="dropdown-content dropdownMobile"
              >
                <li>
                  <a href=".">Housing first programs</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Hospital programs</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">GP services</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Dual diagnosis services</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Peer worker programs</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Outreach</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Medical recovery centre</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-trigger"
                href="#"
                data-target="memberDropdownMobile"
              >
                Members Area
              </a>
              <ul id="memberDropdownMobile" class="dropdown-content">
                <li>
                  <a href=".">About membership</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Become a member</a>
                </li>
                <li class="divider" />
                <li>
                  <a href=".">Discussion board</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="dropdown-trigger"
                href="#"
                data-target="blogDropdownMobile"
              >
                Blog
              </a>
              <ul id="blogDropdownMobile" class="dropdown-content">
                <li>
                  <a href="/post">Posts</a>
                </li>
                <li class="divider" />
                <li>
                  <a href="/post/form">Create Form</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <Link href="#">
                <a>Login</a>
              </Link>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
    )
  }
}

export default Header
