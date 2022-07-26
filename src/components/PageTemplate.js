import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Botao from './Botao'




const PageTemplate = ({titulo, subtitulo, children, imagem}) => {

  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }

  const stylePart1 = {

  }

  const stylePart2 = {
    width: '500px',
    
  }


  return (
    <div style={style}>
      <div style={stylePart1}>
        <GatsbyImage
        image={imagem}
        alt='imagem'    
        />
      </div>

      <div style={stylePart2}>
        <h1 style={{fontSize: '88px', fontFamily:'Caudex', fontWeight: '700', fontStyle: 'normal', lineHeight: '90%', letterSpacing: '-0.025em'}}>{titulo}</h1>
        <h3 style={{marginTop: '0', marginBottom: '70px', fontSize: '35px', fontWeight: '400', fontFamily: 'Caudex'}}> {subtitulo}</h3>
        <p>{children}</p>
        <Botao size={'250px'} color={'rgba(174, 143, 175, 1)'} height={'50px'} border={'none'} > Saiba mais</Botao>

      </div>
    </div>
  )
}

export default PageTemplate
