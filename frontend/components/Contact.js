import React, { useState } from 'react'
import Axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [organistation, setOrganistation] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sentEmail, setSentEmail] = useState(false)
  const [loading, setLoading] = useState(false)

  const validEmail = () => {
    console.log(name, email, message)
    return name !== '' && email !== '' && message !== ''
  }

  const sendEmail = async () => {
    if (validEmail()) {
      setLoading(true)
      try {
        await Axios.post(`${process.env.API_BACKEND_URL}/email`, {
          name,
          organistation,
          email,
          message
        })
      } catch (_) {}

      setLoading(false)
      setSentEmail(true)
    }
  }

  return (
    <div className="section white">
      <div className="container">
        <h4 className="header center">Contact us</h4>
        <h5 className="header col s12 light center">
          Home2Health is a research team from the School of Population and
          Global Health
          <br /> at the University of Western Australia. Please contact us
          below:
        </h5>
      </div>
      {!sentEmail ? (
        <div className="container">
          <form>
            <div className="row">
              <div className="col s12 m10 offset-m1">
                <div className="row contactrow">
                  <div className="input-field col s12">
                    <input
                      id="contact_name"
                      type="text"
                      value={name}
                      required=""
                      onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="contact_name">Name</label>
                    <span
                      className="helper-text"
                      data-error="Please enter a valid name"
                      data-success=""
                    />
                  </div>
                </div>
                <div className="row contactrow">
                  <div className="input-field col s12">
                    <input
                      id="contact_organisation"
                      type="text"
                      value={organistation}
                      onChange={e => setOrganistation(e.target.value)}
                    />
                    <label htmlFor="contact_organisation">Organisation</label>
                    <span className="helper-text">Optional</span>
                  </div>
                </div>
                <div className="row contactrow">
                  <div className="input-field col s12">
                    <input
                      id="contact_email"
                      type="email"
                      className="validate"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="contact_email">Email</label>
                    <span
                      className="helper-text"
                      data-error="Please enter a valid email"
                      data-success=""
                    />
                  </div>
                </div>
                <div className="row contactrow">
                  <div className="input-field col s12">
                    <textarea
                      id="contact_message"
                      className="materialize-textarea"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                    <label htmlFor="contact_message">Message</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center">
              {!loading ? (
                <button
                  className="btn waves-effect waves-light"
                  onClick={sendEmail}
                >
                  Send
                </button>
              ) : (
                <div id="progress-bar" className="progress">
                  <div className="indeterminate" />
                </div>
              )}
            </div>
          </form>
        </div>
      ) : (
        <h3 style={{ textAlign: 'center', margin: '4rem 0' }}>Message sent!</h3>
      )}
    </div>
  )
}

export default Contact
