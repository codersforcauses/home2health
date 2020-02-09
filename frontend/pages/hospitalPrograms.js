import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Router from 'next/router'

class HospitalPrograms extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="section">
            <h4
              style={{
                marginBottom: 0,
                textAlign: 'center',
                color: '#424242' // offblack
              }}
            >
              {' '}
              Hospital Programs
            </h4>
            <p className="flow-text"> </p>
          </div>
        </div>
      </Fragment>

      // add materialize carousel with images to link into subheadings for hospital programs...
    )
  }
}
export default HospitalPrograms
