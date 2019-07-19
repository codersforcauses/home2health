import React, { Component, Fragment } from 'react'
import ProfileAbout from './ProfileAbout'
import ProfilePosts from './ProfilePosts'
import ProfileComments from './ProfileComments'

class ProfileContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    }

  render() {
    return (
      <Fragment>
        <div class="row grey lighten-1" style={{ borderRadius: '1rem' }}>
          <div class="col s12" style={{padding: 0}}>
            <ul class="tabs" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
              <li class="tab col s4 grey lighten-1">
                <a href="#about">Profile</a>
              </li>
              <li class="tab col s4 grey lighten-1">
                <a href="#posts">Posts</a>
              </li>
              <li class="tab col s4 grey lighten-1">
                <a href="#comments">Comments</a>
              </li>
            </ul>
            <div id="about">
                <ProfileAbout />
            </div>
            <div id="posts">
              <ProfilePosts />
            </div>
            <div id="comments">
              <ProfileComments />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProfileContent
