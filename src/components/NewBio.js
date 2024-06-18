import React from "react"
import * as style from "./NewBio.module.css"

const NewBio = ({ avatar, oab, nome, bio }) => {
  return (
    <div className={style.divPrincipal}>
      <div className={style.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={style.divTexto}>
        <p className={style.nome}>{nome}</p>
        <small>OAB {oab}</small>
        <p className={style.bio}>{bio}</p>
      </div>
    </div>
  )
}

export default NewBio
