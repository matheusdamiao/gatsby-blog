import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Botao from './Botao'
import MenuDesktop from './MenuDesktop'
import whatsapp from '../images/whatsapp.svg'


const HeroSection = () => {

    const heroSectionStyle = {
        display: 'flex',
        width: '90%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: '50px auto',
        flexDirection: 'row-reverse'
        

        
    }

    const heroSectionPartOne = {
        
        width: '100%',
        minWidth: '400px',
        maxWidth: '600px'
           
        
    }

    const heroSectionPartTwo = {
        display: 'flex',
        maxwidth: '700px',
        minWidth: '300px',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
  return (
    <>
    <MenuDesktop />
    <div style={heroSectionStyle}>
        
       

                 


        <div style={heroSectionPartTwo}>
            <StaticImage 
            src="../images/hero-picture.png"
            alt="hero-picture"     
               
            />

        </div>



        <div style={heroSectionPartOne}>
            <h1 style={{fontSize:'50px', fontFamily:'Caudex', fontWeight: '500', maxWidth: '100%'}}>  O direito da sua família em primeiro lugar </h1>
            <h3 style={{fontSize: '20px', fontWeight: '300', marginTop: '0', width:'90%', lineHeight:'30px'}}> Precisando de advogados para te orientar  no que é o melhor a ser feito? </h3>
            <div style={{display: 'flex',  justifyContent: 'space-between', maxWidth:'550px', height:'120px', flexWrap: 'wrap', alignItems: 'space-between', margin: '5px 5px'}}>
                <Botao color={'#AE8FAF'} size={'250px'} height={'50px'} border={'none'}>
                    Agende uma reunião
                    </Botao>
                <Botao color={'#FFFFFF'} size={'250px'} height={'50px'} border={'0.2px solid gray'}>
                    Conheça seus direitos
                </Botao>
            </div>
        </div> 


    </div>
    
    </>
  )
}

export default HeroSection
