import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MenuDesktop = () => {
  const menuStyle = {
    width: '100%',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop : '50px'
  }

  const ulStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  }

  const liStyle = {
    fontSize: '20px', 
    fontFamily: 'Caudex',
    listStyle: 'none',
    padding: '15px 30px',
    borderRadius: '25px 25px',
    cursor: 'pointer'
  }

  return (
    <div style={menuStyle}>
      <StaticImage 
      src="../images/logo.png"
      alt='logo'
      minWidth='150px'   
      />

      <ul style={ulStyle}>
        <li style={liStyle}>Serviços</li>
        <li style={liStyle}>Blog</li>
        <li style={liStyle}>Sobre</li>
        <li style={{fontSize: '20px', fontFamily: 'Caudex', listStyle: 'none', background: '#F7EFAE', padding: '10px 35px', borderRadius: '25px 25px', cursor: 'pointer'}}>Contato</li>
      </ul>
    </div>
  )
}

export default MenuDesktop
