import React from 'react'
import Link from 'next/link'

const LogoLink = props => {
  let icon

  switch (props.service) {
    case 'email':
      icon = 'far fa-envelope'
      break
    case 'twitter':
      icon = 'fab fa-twitter'
      break
    case 'facebook':
      icon = 'fab fa-facebook'
      break
    default:
      icon = 'fas fa-question'
  }

  return (
    <>
      {style}
      <a href={props.href} className="logo-link">
        <i class={`${icon} fa-2x`}></i>
      </a>
    </>
  )
}

const style = (
  <style jsx="true">{`
    .logo-link {
      padding: 0 5px;
    }
  `}</style>
)

export default LogoLink
