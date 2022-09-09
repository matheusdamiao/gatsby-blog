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
            <a> Atuação </a>
            <a> Sobre nós </a>
            <a> Contato </a>
          </ul>
          <div className={style.menubar}>
            <StaticImage
            color={'white'}
            width={30}
            src='./../images/bars-solid.svg'
            />
          </div>
        </div>

        <div className={style.divPrincipal}>
          <div className={style.div}>
              <p> Advocacia de Família e Sucessões</p>
              <h1> O direito da sua família em primeiro lugar</h1>
              <h3> Com atendimento humanizado, ajudamos você e sua família na resolução de problemas jurídicos </h3>
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