import React, { Component } from 'react'

class ProfilePublication extends Component {
  render() {
    return (
      <>
        {style}
        <div className="grey lighten-1 profileContent">
          <div className="col s12" style={{ padding: 0 }}>
            <h4 style={{ margin: '0' }}>Publications</h4>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const style = (
  <style jsx="true">{`
    .profileContent {
      margin: 2rem auto;
    }
  `}</style>
)

export default ProfilePublication
