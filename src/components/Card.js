
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Card = ({icon, title, children}) => {

   const style= {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '300px',
        height: '350px',
        borderRadius: '46px',
        textAlign: 'center'
   } 


  return (
    <div style={style}>
      <GatsbyImage 
      image={icon}
      alt='icon'
      />
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default Card
