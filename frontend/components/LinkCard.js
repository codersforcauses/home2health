import React from 'react'
export const LinkCard = ({ alt, src, link, reportTitle, date }) => (
  <div className="col m4 s12">
    <div className="card">
      <div className="card-image">
        <img alt={alt} src={src} width="200px" height="162px" />
      </div>
      <div className="card-action">
        <a href={link}>
          {reportTitle}
          <br />
          {date ? `(${date})` : ''}
        </a>
      </div>
    </div>
  </div>
)
