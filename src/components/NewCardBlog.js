import React from "react"
import * as style from "./NewCardBlog.module.css"

const NewCardBlog = ({
  imagem,
  title,
  date,
  description,
  avatar,
  nome,
  oab,
  bio,
  hashtags,
  link,
}) => {
  return (
    <a href={link} className={style.divPrincipal}>
      <div className={style.divImagem}>
        <img src={imagem} alt="" />
      </div>

      <div className={style.divTexto}>
        <h3>{title}</h3>
        <small> {date}</small>
        <p>{description}</p>
        <div className={style.tags}>
          <span>{hashtags[0]}</span>
          <span>{hashtags[1]}</span>
          <span>{hashtags[2]}</span>
        </div>
        {/* <NewBio avatar={avatar} nome={nome} oab={oab} bio={bio}/> */}
      </div>
    </a>
  )
}

export default NewCardBlog
