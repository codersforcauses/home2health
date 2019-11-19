import React from 'react'
import LogoLink from '../LogoLink'

export default props => {
  const {
    _id,
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
      <div className="row grey lighten-1 profileHeader">
        <div className="col m3">
          <img className="responsive-img" src={img} />
        </div>

        <div className="col m9">
          <div style={{ marginLeft: '1rem' }}>
            <div className="section">
              <h3>{first_name + ' ' + middle_name + ' ' + last_name}</h3>
            </div>
            <p>{title}</p>
          </div>
        </div>
        <div className="section">
          <h6>
            {profession} at {workplace}
          </h6>
        </div>
        <div className="section">
          {profiles.map(profiles => (
            <LogoLink link={profiles} />
          ))}
        </div>
      </div>
    </>
  )
}

const style = (
  <style>{`
    .profileHeader {
      border-radius: 0.3rem;
      margin-top: 2rem;
      padding: 1rem;
    }
    .section {
      padding: 10px 0 10px 0;
    }
    h1 {
      margin: 0;
    }
  `}</style>
)
