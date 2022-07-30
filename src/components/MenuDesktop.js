import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Bars from './../images/bars-solid.svg'

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
    <>
      <div className='divMenu'>
        <div style={{minWidth: '150px', marginLeft: '20px'}}>
          <StaticImage 
          src="../images/logo.png"
          alt='logo'
          />
        </div>  
        <ul style={ulStyle}>
          <li style={liStyle}>Serviços</li>
          <li style={liStyle}>Blog</li>
          <li style={liStyle}>Sobre</li>
          <li style={{fontSize: '20px', fontFamily: 'Caudex', listStyle: 'none', background: '#F7EFAE', padding: '10px 35px', borderRadius: '25px 25px', cursor: 'pointer'}}>Contato</li>
        </ul>
      </div>
      <div className='div-menu-mobile'>
        <div style={{height:'80px', marginLeft: '80px', marginTop: '20px'}}>
            <StaticImage 
            src="../images/logo-mobile.png"
            alt='logo'
              />
          </div>  
        <img src={Bars} className='menuBars'/>
      </div>
    </>
  )
}

export default MenuDesktop
