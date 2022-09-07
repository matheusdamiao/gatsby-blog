import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Bars from './../images/bars-solid.svg'
import Logo from './../images/logo-mobile.png'
import LogoSVG from './../images/logo-svg.svg'
import LogoComprido from './../images/logo-svg-comprido.svg'

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

  const [clicked, setClicked] = useState(false)
  
  const toggleMenu = () =>{
    setClicked(!clicked)

    
  }

  const closeMenu = () =>{
    if(typeof window !== 'undefined')
    if (window.innerWidth > 800) {
      setClicked(false)
    }
  }

 
  
   
    useEffect(()=>{

      const isBrowser = typeof window !== "undefined"
      if(isBrowser) {

      

      window.addEventListener('resize', closeMenu)

      const divMenu = document.querySelector('.div-menu-mobile');

      window.addEventListener('click', (e)=>{
        
        const insideDiv = e.composedPath().includes(divMenu)
        if(!insideDiv) {
          setClicked(false)
        }
  
      })

    }
    },[clicked])


   
    
    
  return (
    <>
      <div className='divMenu'>
        <div style={{minWidth: '150px', marginLeft: '20px'}}>
          <img
          src={LogoSVG}
          alt='logo'
          width={350}
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
        <div style={{width: '100%', padding: '0', marginLeft: '50px'}}>
            <StaticImage
            src='./../images/logo-mobile.png'
            quality={100}
            alt='logo' className='logo-mobile' />
        </div>  
        <div style={{width: '100%', padding: '0', margin: '0', textAlign: 'right', marginRight: '50px'}} onClick={toggleMenu}>
          <StaticImage 
          src='./../images/bars-solid.svg' className='menuBars'/>
        </div> 
        
      </div> 
      <div className= {clicked ? 'menuAtivo' : 'menuDesativado'} onChange={closeMenu}>
          <ul className='ul-mobile'>
            <li style={liStyle}><a href='#atuacao'>Serviços</a></li>
            <li style={liStyle}><a href=''>Blog</a></li>
            <li style={liStyle}><a href=''>Sobre</a></li>
            <li style={liStyle}><a href='#contato'>Contato</a></li>
          </ul>
      </div>
    </>
  )
}

export default MenuDesktop
