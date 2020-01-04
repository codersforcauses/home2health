import React from 'react'

export default props => (
  <>
    {style}
    <img className="responsive-img" src={props.image} />
  </>
)

const style = (
  <style jsx="true">{`
    .responsive-img {
      border: 4px solid white;
    }
  `}</style>
)
