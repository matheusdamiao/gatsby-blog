import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Botao from './Botao'
import MenuDesktop from './MenuDesktop'


const HeroSection = () => {

    const heroSectionStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '25px 25px'
    }


  return (
    <div style={heroSectionStyle}>
        <MenuDesktop />
       

        <div>
            <h1>  O direito da sua família em primeiro lugar </h1>
            <h3> Precisando de advogados para te orientar  no que é o melhor a ser feito? </h3>
            <Botao color={'#AE8FAF'} size={'200px'} height={'50px'}>
                Agende uma reunião
                </Botao>
            <Botao color={'#FFFFFF'} size={'200px'} height={'50px'}>
                Conheça seus direitos
            </Botao>
        </div>           


        <div>
            <StaticImage 
            src="../images/hero-picture.png"
            alt="hero-picture"          
            />

        </div>
    </div>
  )
}

export default HeroSection
