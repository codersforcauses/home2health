import React, { Component, Fragment } from 'react'
import ProfileAbout from './ProfileAbout'

class ProfileContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleTab: {
        toggleAbout: true,
        togglePosts: false,
        toggleComments: false
      }
    }

    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(tab) {
    // this.setState({ toggleAbout: false, togglePosts: false, toggleComments: false })
    let { toggleTab } = this.state;
    Object.keys(toggleTab).forEach(key => toggleTab[key] = false);
    toggleTab = {...toggleTab, [tab]: true}
    this.setState({ toggleTab })
  }

  render() {
    return (
      <Fragment>
        <div class="row grey lighten-1" style={{ borderRadius: '1rem' }}>
          <div class="col s12" style={{padding: 0}}>
            <ul class="tabs" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
              <li class="tab col s4 grey lighten-1">
                <a href="#about" onClick={(e) => this.handleTabChange('toggleAbout', e)}>Profile</a>
              </li>
              <li class="tab col s4 grey lighten-1">
                <a href="#posts" onClick={(e) => this.handleTabChange('togglePosts', e)}>Posts</a>
              </li>
              <li class="tab col s4 grey lighten-1">
                <a href="#comments" onClick={(e) => this.handleTabChange('toggleComments', e)}>Comments</a>
              </li>
            </ul>
            <div id="about" class="blue">
                <ProfileAbout />
            </div>
            <div id="posts" class="green">
            </div>
            <div id="comments" class="red">
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProfileContent
