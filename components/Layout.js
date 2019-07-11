import React, { Component } from "react";
import Header from "./Header";
import "../public/stylesheets/materialize.min.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
