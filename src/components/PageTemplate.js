import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Botao from './Botao'




const PageTemplate = ({titulo, subtitulo, children, imagem, inverted}) => {

  const style = {
    display: 'flex',
    flexDirection: inverted === true ? 'row' : 'row-reverse',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '250px',
    width: '100%'
  }

  const stylePart1 = {
    maxWidth: '500px',
    width: '100%'
  }

  const stylePart2 = {
    maxWidth: '500px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '500px',
    width: '100%',
    marginLeft: '10px'
    
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
        <h1 style={{fontSize: '4em',fontFamily:'Caudex', fontWeight: '700', fontStyle: 'normal', lineHeight: '90%', letterSpacing: '0.04em'}}>{titulo}</h1>
        <h3 style={{marginTop: '0', marginBottom: '70px', fontSize: '35px', fontWeight: '400', fontFamily: 'Caudex'}}> {subtitulo}</h3>
        <p style={{fontFamily: 'Caudex', fontWeight: '400', fonstSize: '18px'}}>{children}</p>
        <Botao size={'250px'} color={'rgba(174, 143, 175, 1)'} height={'50px'} border={'none'} > Saiba mais</Botao>

      </div>
    </div>
  )
}

export default PageTemplate
