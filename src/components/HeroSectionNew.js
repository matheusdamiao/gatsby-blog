import React from 'react'
import MenuDesktop from './MenuDesktop'
import * as style from './HeroSectionNew.module.css'
import foto from './../images/foto-heromenor.svg'
import logo from './../images/new-logoo.svg'

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
