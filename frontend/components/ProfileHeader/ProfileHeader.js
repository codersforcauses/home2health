import React from 'react'

const ProfileHeader = props => {
  const { uid, profile } = props
  const {
    _id,
    first_name,
    middle_name,
    last_name,
    title,
    profession,
    workplace,
    img,
    contact,
    profiles
  } = profile

  return (
    <div
      class="row grey lighten-1"
      style={{ borderRadius: '1rem', marginTop: '2rem', padding: '1rem' }}
    >
      <div class="col m3">
        <img class="responsive-img" src={img} />
      </div>
      <div class="col m9">
        <div style={{ marginLeft: '1rem' }}>
          <div class="section">
            <div class="row" style={{ marginBottom: 0 }}>
              <h3 style={{ marginTop: 0, marginBottom: 0 }}>
                {first_name + ' ' + middle_name + ' ' + last_name}
              </h3>
            </div>
            <div class="row">
              <p style={{ marginTop: 0, marginBottom: 0 }}>{title}</p>
            </div>
            <div class="row" style={{ marginBottom: 0 }}>
              <h6 style={{ marginTop: 0, marginBottom: 0 }}>
                {profession} at {workplace}
              </h6>
            </div>
          </div>
          <div class="divider" />
          <div class="section">
            <div class="row" style={{ marginBottom: 0 }}>
              <h6 style={{ marginTop: 0, marginBottom: 0 }}>Contact:</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
