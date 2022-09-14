import React from 'react'


const NewBio = ({avatar, oab, nome, bio}) => {
  return (
    <div style={{display: 'flex'}}>
        <div>
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
