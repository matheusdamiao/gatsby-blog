import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const Contato = () => {

  const style = {
    marginTop: '200px',
    maxWidth: '400px',
    margin: '200px auto',
    width: '100%'
    
  }



  return (
    <div style={style}>
      <StaticImage 
        src="../images/logo.png"
        alt='logo'
        />

      <h3> Contato </h3> 
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        
        
        <span className='span'>
          <StaticImage 
            src="../images/icone-tel.png"
            alt='logo'
          />
          <p> (21) 22349-2934 / (21) 99923-8192</p>
        </span>

        <span className='span'>
          <StaticImage 
            src="../images/icone-msg.png"
            alt='logo'
          />
          <p> elasdescomplicam@gmail.com </p>
        </span>

        <span className='span'>
          <StaticImage 
            src="../images/icone-clock.png"
            alt='logo'
          />
          <p> 8:00 - 18:00 </p>
        </span>
      </div>



    </div>
  )
}

export default Contato
