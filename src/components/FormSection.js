import React from 'react'
import Form from './Form'
import Contato from './Contato'


const FormSection = () => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1000px',
    width: '100%',
    margin: '0px auto',
    flexWrap: 'wrap-reverse'
    
  }




  return (
    <div style={style}>
     
      <Contato />
      <Form />
    </div>
  )
}

export default FormSection
