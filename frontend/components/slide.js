import React from 'react';

const Slide = ({ images }) => {
  const styles = {
    backgroundImage: '${images}',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

export default Slide;