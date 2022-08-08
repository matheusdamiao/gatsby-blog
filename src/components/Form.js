import { StaticImage } from 'gatsby-plugin-image'
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
    <div className='form'>
      <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start', marginLeft: '10px' }}>
        <StaticImage
        src='./../images/icone-contato.png'
        alt='icone'
        />
        <h1 style={{width: '100%'}}> Fale Conosco</h1>
      </div>
      <p>Estamos aqui para lhe ajudar. 
        Preencha o formulário abaixo para entrarmos em contato o mais rápido possível.
      </p>
      <form className='formContato' name='form-contato' onSubmit={handleSubmit} netlify>
        <input type='text' placeholder='Nome' name='nome' value={inputs.nome || ''} onChange={handleInput}/>
        <input type='text' placeholder='Telefone' name='telefone' value={inputs.telefone || ''} onChange={handleInput}/>
        <input type='email' placeholder='E-mail' name='email' value={inputs.email || ''} onChange={handleInput}/>
        <textarea type='text' placeholder='Escreva sua mensagem aqui' name='text' value={inputs.text || ''} onChange={handleInput} />
        <div style={{marginLeft: '20px', width: '100%'}}>
        <Botao type='submit' size={'100%'} color={'rgb(247, 239, 174)'} height={'50px'} border={'none'}> Enviar</Botao>
        </div>
      </form>
    </div>
  )
}

export default Form
