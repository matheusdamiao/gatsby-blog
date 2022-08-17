import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Star from './../images/star.png'
import quotesLeft from './../images/quotesLeft.png'
import quotesRight from './../images/quotesRight.png'


const Depoimento = ({nome, avatar, text, key}) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '400px',
        height: '400px',
        borderRadius: '46px',
        textAlign: 'center',
        margin: '10px',
        padding: '10px',
        border: 'none',
        backgroundColor: 'rgba(244, 244, 244, 0.5)',
        outline: 'none',
        boxShadow: '-4px -4px 4px rgba(255, 255, 255, 0.5), 0px 4px 4px rgba(0, 0, 0, 0.15)'
    }

  return (
    <div style={style}>
      <h2 style={{margin: '0', marginTop: '10px'}}>{nome} </h2>
      <GatsbyImage
      image={avatar}
      alt='avatar'
      quality={100}
      />
      <div style={{display: 'flex'}}>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
      </div>
      <div>
        <img src={quotesLeft} style={{position: 'relative', right: '140px', top: '10px', margin: '0', padding: '0'}}   />
        <p style={{margin: '0 auto', width: '80%', textAlign: 'center' }}> {text} </p>
        <img src={quotesRight} style={{position: 'relative', left: '140px', margin: '0'}} />
      </div>
    </div>
  )
}

export default Depoimento
