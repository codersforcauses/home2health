import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './slider.css';

const slider = (
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
);

export default class Slider extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          {id: 0, src: "images/landing/1.jpg"},
          {id: 1, src: "images/landing/2.jpg"},
          {id: 2, src: "images/landing/3.jpg"},
          {id: 3, src: "images/landing/4.jpg"},
          {id: 4, src: "images/landing/5.jpg"},
          {id: 5, src: "images/landing/6.jpg"},
          {id: 6, src: "images/landing/7.jpg"},
          {id: 7, src: "images/landing/8.jpg"},
          {id: 8, src: "images/landing/9.jpg"},
          {id: 9, src: "images/landing/10.jpg"},
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }

    slideWidth = () => {
      return document.querySelector('.slide').clientWidth;
   }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
          
          // This will not run if we met the if condition above
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
        }
  
    render() {
      return (
        <div className="slider">
  
          <div className="slider-wrapper">
              <AwesomeSlider >
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
      );
    }
}