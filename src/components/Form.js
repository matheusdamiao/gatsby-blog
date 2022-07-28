import React, { useState } from 'react'
import Botao from './Botao'
import './style.scss'


const Form = () => {


  const [inputs, setInputs ] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()
    setInputs({

    })
  }

  const handleInput = (e) => {
    let nome = e.target.name;
    let value = e.target.value;
     setInputs({
      ...inputs,
      [nome] : [value]
    })
    
  }
  

  return (
    <div>
      <h1> Fale Conosco</h1>
      <p>Estamos aqui para lhe ajudar. 
        Preencha o o formulário abaixo para entrarmos em contato o mais rápido possível.
      </p>
      <form className='formContato' name='form-contato' onSubmit={handleSubmit} netlify>
        <input type='text' placeholder='Nome' name='nome' value={inputs.nome || ''} onChange={handleInput}/>
        <input type='text' placeholder='Telefone' name='telefone' value={inputs.telefone || ''} onChange={handleInput}/>
        <input type='email' placeholder='e-mail' name='email' value={inputs.email || ''} onChange={handleInput}/>
        <Botao type='submit'> Enviar</Botao>
      </form>
    </div>
  )
}

export default Form
