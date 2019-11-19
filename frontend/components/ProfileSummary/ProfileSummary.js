import React from 'react'
import LogoLink from '../LogoLink'

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
        <div className="col m3 imageWrapper">
          <img className="responsive-img" src={img} />
        </div>

        <div className="col m9">
          <div className="profile-details">
            <div className="profile-name">
              <h1>{first_name + ' ' + middle_name + ' ' + last_name}</h1>
            </div>
            <div className="profile-title">
              <p>{title}</p>
            </div>
            <div className="profile-profession">
              <p>
                {profession} at {workplace}
              </p>
            </div>
            <div className="profile-contact">
              {profiles.map(profiles => (
                <LogoLink link={profiles} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const style = (
  <style>{`
    .profile-summary-wrapper {
      border-radius: 0.3rem;
      padding: 1rem;
    }
    .imageWrapper {
      padding: 0 !important;
    }
    .profile-details {
      margin-left: 1rem;
    }
    .profile-name h1 {
      font-weight: 600; 
      margin: 0px;
    }
    .profile-title {

    }
    .profile-profession {

    }

    .section {
      padding: 10px 0 10px 0;
    }
    h1 {
      margin: 0;
    }
  `}</style>
)
