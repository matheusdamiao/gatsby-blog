import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Botao from './Botao'
import './style.scss'
import Micro from './../images/microphone-svg.svg' 


const Form = () => {


  const [inputs, setInputs ] = useState({})

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/home", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"), ...inputs      
      }),
    })
      .then((e) => alert("/thank-you/" + e.status))
      .catch((error) => alert(error));
  
  
    // console.log(e);
    // setInputs({

    // })

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
          <img
          // src='./../images/icone-contato.png'
          src={Micro}
          alt='icone'
          quality={100}
          width={80}
          />
          <h1 style={{width: '100%'}}> Fale Conosco</h1>
        </div>
        <p>Estamos aqui para lhe ajudar. 
          Preencha o formulário abaixo e entrarmos em contato o mais rápido possível.
        </p>
        <form method='POST' netlify-honeypot="bot-field" data-netlify="true" className='formContato' name='form' onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="form" />
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
