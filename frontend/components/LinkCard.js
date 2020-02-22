import React from 'react'
export const LinkCard = ({ alt, src, link, reportTitle, date }) => (
  <div className="col s6 m3">
    <div className="card">
      <div className="card-image">
        <img alt={alt} src={src} />
      </div>
      <div className="card-action">
        <a href={link} style={{ marginRight: 0 }}>
          {reportTitle}
          <br />
          {date ? `(${date})` : ''}
        </a>
      </div>
    </div>
  </div>
)
