import React from 'react'
import Form from './Form'
import Contato from './Contato'


const FormSection = () => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1400px',
    width: '100%',
    flexWrap: 'wrap-reverse',
    
    
  }




  return (
    <div style={style}>
     
      <Contato />
      <Form />
    </div>
  )
}

export default FormSection
