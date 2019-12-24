import React from 'react'
import Link from 'next/link'

const LogoLink = props => {
  let icon
  let href = props.href

  switch (props.service) {
    case 'email':
      icon = 'fas fa-envelope'
      href = `mailto:${props.href}`
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
      <Link href={href}>
        <a className="logo-link">
          <i class={`${icon} fa-2x`}></i>
        </a>
      </Link>
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
