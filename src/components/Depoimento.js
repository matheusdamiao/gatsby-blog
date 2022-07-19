import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const Depoimento = ({nome, avatar, text}) => {

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
        border: '1px solid black',
        margin: '10px',
        padding: '10px'
    }

  return (
    <div style={style}>
      <h2>{nome} </h2>
      <GatsbyImage
      image={avatar}
      alt='avatar'
      />
      <p> {text} </p>
    </div>
  )
}

export default Depoimento
