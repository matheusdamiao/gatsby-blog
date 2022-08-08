
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Card = ({icon, title, children}) => {
  
   const style= {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxWidth: '300px',
        width: '100%',
        height: '350px',
        borderRadius: '46px',
        textAlign: 'center',
        border: '1px solid black',
        margin: '10px',
        marginBottom: '50px',
        padding: '10px 10px',
        border: 'none',
        backgroundColor: 'rgb(243, 240, 240, 0.85)',
        outline: 'none',
        boxShadow: '-4px -4px 4px rgba(255, 255, 255, 0.5), 0px 4px 4px rgba(0, 0, 0, 0.15)'
   } 

   const styleH1 = {
    fontSize: '20px',
    margin: '0',
    width: '100%'
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
