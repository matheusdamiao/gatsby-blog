import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Star from './../images/star.png'
import quotesLeft from './../images/quotesLeft.png'
import quotesRight from './../images/quotesRight.png'
import * as style from './Depoimento.module.css'

const Depoimento = ({nome, avatar, text, key}) => {

  

  return (
    <div className={style.divDepoimento}>
       <h4> {nome} </h4>
          <GatsbyImage
          image={avatar}
          alt='avatar'
          quality={100}
          />
      
      <div className={style.stars}>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
        <img src={Star} alt=''/>
      </div>
      <div className={style.divQuote}>
        <img className={style.quoteLeft} src={quotesLeft}/>
        <p> {text} </p>
        <img className={style.quoteRight} src={quotesRight} />
      </div>
      
        
    </div>
  )
}

export default Depoimento
