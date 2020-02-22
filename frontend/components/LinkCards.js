import React from 'react'
import { LinkCard } from './LinkCard'
export const LinkCards = ({ cardDetails }) => (
  <div class="row center-align">
    {cardDetails.map((card, i) => (
      <LinkCard {...card} key={i}></LinkCard>
    ))}
  </div>
)
