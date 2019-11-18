import React from 'react';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
const RightArrow = (props) => {
  return (
    <div className="nextArrow" size="small" onClick={props.goToNextSlide}>
      <i className="material-icons">arrow_forward</i>
    </div>
  );
}

export default RightArrow;