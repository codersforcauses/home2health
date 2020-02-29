import React, { useState } from 'react'
import SEO from '../components/SEO'

const SettingsPage = props => {
  // react state for these shits
  // preload
  const [email, setEmail] = useState('email@email.com')
  const [username, setUsername] = useState('username1')
  const [password, setPassword] = useState('')

  return (
    <>
      <SEO title={`Home2Health - Profile`}></SEO>
      <div className="container">
        <div className="row">
          <div style={{ padding: '0 0.75rem' }}>
            <h3>Settings</h3>
          </div>
          <div className="divider"></div>
          <div className="col s5">
            <h4>Account</h4>
          </div>
          <div className="col s7">
            <div className="input-field col s12">
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              ></input>
              <label for="username">Username</label>
            </div>
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></input>
              <label for="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
              <label for="password">Password</label>
            </div>
            <div className="input-field col s6">
              <input id="password-confirm" type="password"></input>
              <label for="password-confirm">Confirm Password</label>
            </div>
          </div>
          <div className="col s12">
            <button
              className="btn"
              type="submit"
              style={{ float: 'right', marginRight: '0.75rem' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsPage
