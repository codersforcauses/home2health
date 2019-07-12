import React, { Component } from "react";
import Header from "./Header";
import Head from './Meta';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
