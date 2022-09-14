import React from 'react'
import * as style from './NewBio.module.css'

const NewBio = ({avatar, oab, nome, bio}) => {
  return (
    <div className={style.divPrincipal}>
        <div className={style.avatar}>
            <img src={avatar}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{margin: '0'}}>{nome}</p>
            <small>{oab}</small>
            <p>{bio}</p>
        </div>
    </div>
  )
}

export default NewBio
