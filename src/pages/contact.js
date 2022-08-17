import React from 'react'

const contact = () => {
  return (
    <div>
         <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="form-contato"/>
         <input type="hidden" name="bot-field" />
         <input type='text'  name='nome' />
        <input type='text'  name='telefone' />
        <input type='email'  name='email' />
        <textarea type='text' name='text'  />
      
    </div>
  )
}

export default contact
