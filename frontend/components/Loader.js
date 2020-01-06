import React from 'react'

const Loader = () => {
  return (
    <div
      className="valign-wrapper center-align"
      style={{ top: '45%', left: '45%', position: 'absolute' }}
    >
      <div className="preloader-wrapper big active ">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
