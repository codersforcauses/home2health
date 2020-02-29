import React, { Component } from 'react'

const ProfileAbout = props => {
  const { profile } = props
  const { about } = profile

  return (
    <>
      {style}
      <div className="grey lighten-1 profileContent">
        <div className="col s12" style={{ padding: 0 }}>
          <h4 style={{ margin: '0' }}>About Me</h4>
          <div>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </>
  )
}

const style = (
  <style jsx>{`
    .profileContent {
      padding: 2rem;
      border-radius: 0.3rem;
      border: 2px solid #0f6489;
    }
    h1 {
      margin: 0;
    }
    p {
      margin: 0.5rem;
    }
  `}</style>
)

export default ProfileAbout
