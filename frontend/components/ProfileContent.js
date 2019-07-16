import React, { Component, Fragment } from 'react'

class ProfileContent extends Component {
  render() {
    return (
      <Fragment>
        <div class="row grey lighten-1" style={{ borderRadius: '1rem'}}>
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s4 grey lighten-1">
                <a onClick="">Profile</a>
              </li>
              <li class="tab col s4 grey lighten-1">
                <a onClick="">Posts</a>
              </li>
              <li class="tab col s4 grey lighten-1">
                <a onClick="">Comments</a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProfileContent
