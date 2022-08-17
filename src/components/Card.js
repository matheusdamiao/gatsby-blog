
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Card = ({icon, title, children}) => {
  
   const style= {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-around',
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
        backgroundColor: 'rgba(244, 244, 244, 0.7)',
        boxShadow: '-4px -4px 4px rgba(255, 255, 255, 0.4), 0px 4px 4px rgba(0, 0, 0, 0.15)'
   } 

   const styleH1 = {
    fontSize: '20px',
    margin: '0',
    width: '100%'
   }

   const styleP = {
    fontSize: '14px',
    color: 'grey',
    padding: '10px',
    marginTop: '10px'
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
