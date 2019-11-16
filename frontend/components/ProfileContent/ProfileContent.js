import React, { Component, Fragment } from 'react'
import ProfileAbout from '../ProfileAbout'

const ProfileContent = props => {
  const { profile } = props

  return (
    <Fragment>
      <div class="row grey lighten-1" style={{ borderRadius: '1rem' }}>
        <div class="col s12" style={{ padding: 0 }}>
          <ProfileAbout profile={profile} />
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileContent
