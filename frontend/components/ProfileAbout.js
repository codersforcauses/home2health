import React, { Component } from 'react'

// const Picture = styled.img`
//   border-radius: 50%;
//   border: 3px solid white;
//   width: 100px;
// `

class ProfileAbout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutme: 'Please describe yourself',
      qualifications: 'Please add qualifications'
    }
  }

  render() {
    function Profile({ user }) {
      return (
        <div class="container" style={{ width: '90%' }}>
          <div class="section">
            <h4 style={{ margin: '1rem 0 0 0' }}>About Me</h4>
            <div class="container" style={{ width: '90%' }}>
              <p>{this.state.aboutme}</p>
              <ul>
                {Object.keys(user).map(key => (
                  <li key={key}>
                    {key}: {user[key].toString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="divider" />
          <div class="section">
            <h4 style={{ margin: '1rem 0 0 0' }}>Qualifications</h4>
            <div class="container" style={{ width: '90%' }}>
              <p>{this.state.qualifications}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ProfileAbout
