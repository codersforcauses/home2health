import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  componentDidMount() {
    const M = require('materialize-css');
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  }
}

export default Header;
