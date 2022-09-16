import React from 'react'
import Form from './Form'
import Contato from './Contato'


const FormSection = () => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
    
    
  }

  return (
    <div id='contato' style={style}>
     
      <Form />
      {/* <Contato /> */}

    </div>
  )
}

export default FormSection
