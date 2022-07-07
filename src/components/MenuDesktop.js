import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MenuDesktop = () => {
  const menuStyle = {
    
    
    width: '100%',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const ulStyle = {
    display: 'flex',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '0',
    padding: '0',
  }

  const liStyle = {
    fontSize: '25px', 
    fontFamily: 'Caudex',
    listStyle: 'none'
  }

  return (
    <div style={menuStyle}>
      <StaticImage 
      src="../images/logo.png"
      alt='logo'
      />
      <ul style={ulStyle}>
        <li style={liStyle}>Serviços</li>
        <li style={liStyle}>Blog</li>
        <li style={liStyle}>Sobre</li>
        <li style={liStyle}>Contato</li>
      </ul>
    </div>
  )
}

export default MenuDesktop
