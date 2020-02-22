import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Router from 'next/router'

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
          <div className="carousel" size="large">
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
          </div>
        </div>
      </Fragment>

      // add materialize carousel with images to link into subheadings for hospital programs...
    )
  }
}
export default RoyalPerthHospital
