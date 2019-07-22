import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <nav class="lighten-1 white" id="header">
        <div class="nav-wrapper container">
          {" "}
          <a id="logo-container" href="#" class="brand-logo">
            Home2Health
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              {" "}
              <a class="dropdown-trigger" href="#" data-target="dropdown2">
                What's happening in Australia?
                <i class="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="dropdown2" class="dropdown-content">
                <li>
                  {" "}
                  <a href=".">Housing first programs</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Hospital programs</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">GP services</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Dual diagnosis services</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Peer worker programs</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Outreach</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Medical recovery centre</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a class="dropdown-trigger" href="#" data-target="dropdown3">
                Members area
                <i class="material-icons right">arrow_drop_down</i>
              </a>
              <ul id="dropdown3" class="dropdown-content">
                <li>
                  {" "}
                  <a href=".">About membership</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Become a member</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Discussion board</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#">In the news</a>
            </li>
          </ul>
          <ul id="nav-mobile" class="sidenav">
            <li>
              {" "}
              <a class="dropdown-trigger" href="#" data-target="dropdown12">
                What's happening in Australia?
              </a>
              <ul id="dropdown12" class="dropdown-content">
                <li>
                  {" "}
                  <a href=".">Housing first programs</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Hospital programs</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">GP services</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Dual diagnosis services</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Peer worker programs</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Outreach</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Medical recovery centre</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a class="dropdown-trigger" href="#" data-target="dropdown13">
                Members area
              </a>
              <ul id="dropdown13" class="dropdown-content">
                <li>
                  {" "}
                  <a href=".">About membership</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Become a member</a>
                </li>
                <li class="divider" />
                <li>
                  {" "}
                  <a href=".">Discussion board</a>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <a href="#">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#">In the news</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger">
            {" "}
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
