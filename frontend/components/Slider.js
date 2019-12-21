import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import './slider.css'

export default class Slider extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper">
          <AwesomeSlider>
            <div data-src="images/landing/1.jpg" />
            <div data-src="images/landing/2.jpg" />
            <div data-src="images/landing/3.jpg" />
            <div data-src="images/landing/4.jpg" />
            <div data-src="images/landing/5.jpg" />
            <div data-src="images/landing/6.jpg" />
            <div data-src="images/landing/7.jpg" />
            <div data-src="images/landing/8.jpg" />
            <div data-src="images/landing/9.jpg" />
            <div data-src="images/landing/10.jpg" />
          </AwesomeSlider>
        </div>
      </div>
    )
  }
}
