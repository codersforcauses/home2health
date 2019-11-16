import React, { Component } from 'react'

const ProfileAbout = props => {
  const { profile } = props
  const { about } = profile

  return (
    <div class="container" style={{ width: '90%' }}>
      <div class="section">
        <h4 style={{ margin: '1rem 0 0 0' }}>About Me</h4>
        <div class="container" style={{ width: '90%' }}>
          <p>{about}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileAbout
