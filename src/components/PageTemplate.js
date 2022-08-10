import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Botao from './Botao'


const PageTemplate = ({titulo, subtitulo, children, imagem, inverted}) => {

  return (
    <div className='page' style={{flexDirection: inverted === true ? 'row' : 'row-reverse'}}>
      
      <div className='page-image'>
        <GatsbyImage
        image={imagem}
        alt='imagem'
        quality={100}    
        />
      </div>

      <div className='page-content'>       
        <h1 >{titulo}</h1>
        <h3 > {subtitulo}</h3>
        <p>{children}</p>
        <Botao size={'250px'} color={'rgba(174, 143, 175, 1)'} height={'50px'} border={'none'} > Saiba mais</Botao>
      </div>
    </div>
  )
}

export default PageTemplate
