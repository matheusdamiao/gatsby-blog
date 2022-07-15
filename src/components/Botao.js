import React from 'react'


const Botao = ({size, color, children, height, border}) => {
    const style = {
        background: '#AE8FAF',
        boxShadow: 'none',
        border: `${border}`,
        fontSize: '15px',
        borderRadius: '25px',
        width: `${size}`,
        backgroundColor: `${color}`,
        height: `${height}`,
        cursor: 'pointer', 
      }
      
  return (
    <button style={style}>
    {children}
    </button>
  )
}

export default Botao
