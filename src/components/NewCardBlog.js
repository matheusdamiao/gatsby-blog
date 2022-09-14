import React from 'react'
import * as style from './NewCardBlog.module.css'
import NewBio from './NewBio'

const NewCardBlog = ({imagem, title, date, description, avatar, nome, oab, bio, hashtags}) => {


  return (
    <div className={style.divPrincipal}>
      <div className={style.divImagem}>
        <img src={imagem}/>
      </div>

      <div className={style.divTexto}>
        <h3>{title}</h3>
        <small> {date}</small>
        <p>{description}</p>
        <div>
            <span>{hashtags[0]}</span>
            <span>{hashtags[1]}</span>
            <span>{hashtags[2]}</span>
        </div>
        <NewBio avatar={avatar} nome={nome} oab={oab} bio={bio}/>
      </div>
    </div>
  )
}

export default NewCardBlog
