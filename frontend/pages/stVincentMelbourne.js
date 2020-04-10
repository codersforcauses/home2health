import React, { Component, Fragment } from 'react'
import SEO from '../components/SEO'
import Link from 'next/link'

class StVincentMelbourne extends Component {
  render() {
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.carousel')
    //   var instances = M.Carousel.init(elems, options)
    // });

    //var instance = M.Carousel.getInstance(elem);

    return (
      <Fragment>
        <SEO title={`Home2Health - St Vincent's Melbourne`}></SEO>
        <div className="container">
          <div className="section">
            <div>
              <h4
                style={{
                  marginBottom: 0,
                  textAlign: 'center',
                  color: '#424242', // offblack
                }}
              >
                {''}
                St Vincent's Hospital Melbourne
              </h4>
              <p className="flow-text"> </p>
            </div>
            <div className="row">
              <div>
                <blockquote>
                  St Vincent's Hospital Melbourne is a tertiary public
                  healthcare service. Their services includes numerous homeless
                  healthcare services in addition to standard hospital services
                  that range from emergency and critical care to pallaitive and
                  residential care.
                </blockquote>
              </div>
            </div>
            <div className="section">
              <div className="row">
                <div className="col left">
                  <img
                    alt="St Vincent Image"
                    src="images/hospitalPrograms/stVincent/ALERT.jpg"
                    style={{ height: 400 }}
                  ></img>
                  <ul>
                    <h4>Further Reading</h4>
                    <li>
                      <a href="../public/research_papers/SVHM - ALERT Infographic.pdf">
                        SVHM Homelessness Programs - ALERT Infographic
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM - CHOPS Infographic.pdf">
                        SVHM Homelessness Programs - CHOPS Infographic
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM - CHOPS Infographic[1].pdf">
                        SVHM Homelessness Programs - CHOPS Infographic 2
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM - Prague House  infographic.pdf">
                        SVHM Homelessness Programs - Prague House Infographic
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM - The Cottage Infographic.pdf">
                        SVHM Homelessness Programs - The Cottage Infographic
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM Infographic.pdf">
                        SVHM Homelessness Programs Infographic
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM Report - sept 2017.pdf">
                        SVHM Homelessness Programs Report (Sep 2017)
                      </a>
                    </li>
                    <li>
                      <a href="../public/research_papers/SVHM_-_CHOPS_Infographic.pdf">
                        SVHM Homelessness Programs - CHOPS Infographic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

      // add materialize carousel with images to link into subheadings for hospital programs...
    )
  }
}
export default StVincentMelbourne
