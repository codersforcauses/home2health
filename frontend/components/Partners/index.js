import React from 'react'

const Partners = () => (
  <>
    {style}
    <div className="section white lighten-1">
      <h4 className="center">Our partners</h4>
      <div className="container">
        <div className="row partner-row partner-row-background">
          <img
            alt="Royal Perth Hospital logo"
            className="partner-img"
            src="/logos/partner-rph.jpeg"
          />
          <img
            alt="Coders for Causes logo"
            className="partner-img"
            src="/logos/partner-cfc.png"
          />
          <img
            alt="Homeless Healthcare logo"
            className="partner-img"
            src="/logos/partner-hh.png"
          />
          <img
            alt="UWA logo"
            className="partner-img"
            src="/logos/partner-uwa.jpeg"
          />
        </div>
      </div>
    </div>
  </>
)

const style = (
  <style jsx="true">
    {`
      .partner-row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      }
      .partner-img {
      }
    `}
  </style>
)

export default Partners
