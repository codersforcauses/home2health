import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render() {
    return (
      <nav className="lighten-1 white" id="header">
        <div className="nav-wrapper container">
          {' '}
          <Link href="/">
            <a id="logo-container" href="#" className="brand-logo">
              Home2Health
            </a>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/form">
                <a>Create Post</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
