import React from 'react'


const Botao = ({size, color, children, height}) => {
    const style = {
        background: '#AE8FAF',
        boxShadow: '-rgba(255, 255, 255, 0.25), 0px 3.36475px 3.36475px rgba(0, 0, 0, 0.25)',
        borderRadius: '38px',
        width: `${size}`,
        backgroundColor: `${color}`,
        height: `${height}`,
        cursor: 'pointer'
    
    }
  return (
    <button style={style}>
    {children}
    </button>
  )
}

export default Botao
