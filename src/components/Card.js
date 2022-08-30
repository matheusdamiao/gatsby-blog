
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Card = ({icon, title, children}) => {
  
  return (
    <div className='card-div'>
      <GatsbyImage 
      image={icon}
      alt='icon'
      loading='eager'
      />

      <h1>{title}</h1>
      <p >{children}</p>
    </div>
  )
}

export default Card
