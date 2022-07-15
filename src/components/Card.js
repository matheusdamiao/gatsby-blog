
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
        textAlign: 'center',
        border: '1px solid black',
        margin: '10px',
        padding: '10px'
   } 

   const styleH1 = {
    fontSize: '20px',
    margin: '0'
   }

   const styleP = {
    fontSize: '15px',
    padding: '10px'
   }

  return (
    <div style={style}>
      <GatsbyImage 
      image={icon}
      alt='icon'
      loading='eager'
      />

      <h1 style={styleH1}>{title}</h1>
      <p style={styleP}>{children}</p>
    </div>
  )
}

export default Card
