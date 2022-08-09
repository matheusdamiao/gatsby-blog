import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Botao from './Botao'




const PageTemplate = ({titulo, subtitulo, children, imagem, inverted}) => {

  // const style = {
  //   display: 'flex',
  //   flexDirection: inverted === true ? 'row' : 'row-reverse',
  //   alignItems: 'center',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   marginTop: '250px',
  //   width: '100%'
  // }

  // const stylePart1 = {
  //   maxWidth: '500px',
  //   width: '100%'
  // }

  // const stylePart2 = {
  //   maxWidth: '500px', 
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-start',
  //   height: '500px',
  //   width: '100%',
  //   marginLeft: '10px'
    
  // }


  return (
    <div className='page' style={{flexDirection: inverted === true ? 'row' : 'row-reverse'}}>
      <div className='page-image'>
        <GatsbyImage
        image={imagem}
        alt='imagem'    
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
