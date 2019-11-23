import React from 'react'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>


const LeftArrow = (props) => {
  return (
    <div className="backArrow" size="small" onClick={props.goToPrevSlide}>
      <i className="material-icons">arrow_back</i>
    </div>
  );
}

export default LeftArrow;