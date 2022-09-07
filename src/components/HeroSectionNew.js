import React from 'react'
import MenuDesktop from './MenuDesktop'
import * as style from './HeroSectionNew.module.css'
import foto from './../images/foto-hero.svg'
// import foto from './../images/foto-hero-colorida.svg'
import logo from './../images/new-logoo.svg'
import bars from './../images/bars-solid.svg'
import { StaticImage } from 'gatsby-plugin-image'

const HeroSectionNew = () => {
  return (
    <div className={style.main}>
        {/* <MenuDesktop /> */}
        <div className={style.menu}> 
          <div className={style.logoDiv}>
            <img 
            src={logo}
              />
          </div>
          <ul>
            <a> Blog</a>
            <a> Sobre</a>
            <a> Contato </a>
           

          </ul>
          {/* <div className='menubar'>
            <StaticImage
            width={50}
            src='./../images/bars-solid.svg'
            />
          </div> */}
        </div>

        <div className={style.divPrincipal}>
          <div className={style.div}>
              <p> Advocacia Familiarista</p>
              <h1> O direito da sua família em primeiro lugar</h1>
              <h3> Advogadas especializadas em direito de família </h3>
              <button> Agende uma reunião</button>
          </div>

          <div className={style.divFoto}>
            <img 
            src={foto}
            />

          </div>
        </div>
    </div>
  )
}

export default HeroSectionNew
