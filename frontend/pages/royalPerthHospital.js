import React, { Component, Fragment } from 'react'
import Link from 'next/link'

class RoyalPerthHospital extends Component {
  render() {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.carousel')
    //   var instances = M.Carousel.init(elems, options)
    // });

    //var instance = M.Carousel.getInstance(elem);

    return (
      <Fragment>
        <div className="container">
          <div className="section">
            <div>
              <h4
                style={{
                  marginBottom: 0,
                  textAlign: 'center',
                  color: '#424242' // offblack
                }}
              >
                {''}
                Royal Perth Hospital
              </h4>
              <p className="flow-text"> </p>
            </div>
            <div className="row">
              <div>
                <blockquote>
                  Royal Perth Hospital is a major public teaching hospital
                  located in the Perth CBD. In mid-2016, Homeless Healthcare
                  established its first in-reach program in collaboration with
                  Royal Perth Hospital. The in reach program is modelled on the
                  internationally renowned and evidence based Pathway program
                  that operates in 11 hospitals in the UK. The aim of RPH
                  Homeless Team is to improve outcomes for homeless patients by
                  providing support, improved discharge planning and continuity
                  of care. GPs and nurses from Homeless Healthcare work
                  alongside RPH Homeless Team staff.
                </blockquote>
              </div>
              {/* <div className="col s6">
                <img
                  alt="RPH Work"
                  style={{
                    marginTop: '15px',
                    marginBottom: 0,
                    width: '1080x',
                    height: '220px',
                    color: '#424242' // offblack
                  }}
                  src="/images/hospitalPrograms/royalPerth/003_Homeless-Healthcare_160914.png"
                />
              </div> */}
            </div>
            <div className="section">
              <div className="row">
                <div className="col left">
                  <img
                    alt="RPH Image"
                    src="/images/hospitalPrograms/royalPerth/003_Homeless-Healthcare_160914.png"
                    style={{ height: 400 }}
                  ></img>
                  <ul className="col right">
                    <h4>Further Reading</h4>
                    <li>
                      <a href="https://rph.health.wa.gov.au/About-us/News/RPHs-Homeless-Team-is-a-WA-Health-Excellence-Awards-finalist">
                        WA Excellence Award's Finalist
                      </a>
                    </li>
                    <li>
                      <a>RPH Homeless Team Report 1 (May 2018)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="carousel" size="large">
          <a className="carousel-item" href="#one!">
            <img src="https://lorempixel.com/250/250/nature/1" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://lorempixel.com/250/250/nature/2" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://lorempixel.com/250/250/nature/3" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://lorempixel.com/250/250/nature/4" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="https://lorempixel.com/250/250/nature/5" />
          </a>
        </div> */}
      </Fragment>

      // add materialize carousel with images to link into subheadings for hospital programs...
    )
  }
}
export default RoyalPerthHospital
