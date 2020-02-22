import React from 'react'
import LogoLink from '../LogoLink'
import ProfileImage from '../ProfileImage'

export default props => {
  const {
    first_name,
    middle_name,
    last_name,
    title,
    profession,
    workplace,
    img,
    profiles
  } = props.profile

  return (
    <>
      {style}
      <div className="row grey lighten-1 profile-summary-wrapper">
        <div className="col s12 m3 profile-image">
          <ProfileImage image={img} />
        </div>
        <div className="col s12 m9 profile-details">
          <div className="profile-name">
            <h3>{first_name + ' ' + middle_name + ' ' + last_name}</h3>
          </div>
          <div className="profile-title">
            <h5>{title}</h5>
          </div>
          <div className="profile-profession">
            <h5>
              {profession} at {workplace}
            </h5>
          </div>
          <div className="profile-contact">
            {profiles.map(profile => (
              <LogoLink
                key={profile.href}
                service={profile.service}
                href={profile.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const style = (
  <style jsx="true">{`
    @media only screen and (max-width: 600px) {
      .profile-name h2 {
        margin: 1rem 0 !important;
      }
    }
    .profile-summary-wrapper {
      border-radius: 0.3rem;
      padding: 1rem;
      border: 2px solid #0f6489;
    }
    .profile-image {
      padding: 0 !important;
      margin: 0 0 -5px 0;
    }
    .profile-details {
      padding: 0 0 0 1rem;
    }
    .profile-name h3 {
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: #0f6489;
    }
    .profile-title h5 {
      margin: 0;
      color: hsl(214, 7%, 47%);
    }
    .profile-profession h5 {
      margin: 0;
      color: hsl(214, 7%, 47%);
    }
    .profile-contact {
      margin-top: 1rem;
      display: flex;
    }
  `}</style>
)
