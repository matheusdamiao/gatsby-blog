import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Botao from './Botao'
import './style.scss'
import Micro from './../images/microphone-svg.svg' 
import * as style from "./Form.module.css"

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


  const modal = () =>{
    const modalBtn = document.querySelector('.btn-modal');
    const modal = document.querySelector('.close');


    modalBtn.addEventListener('click', ()=> {
      modal.style.display = 'none'
    })


    return (
    <div className='modal-bg close'> 
      <div className='modal-block'>
        <p>
        Thank you for you contact!
        </p>
        <button className='btn-modal'> Ok! </button>
      </div>
   </div>)
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
      .then((e) => modal())
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
        <div className={style.divTitulo}>
          <h3> fale conosco</h3>
          <h1> Mande uma mensagem </h1>
          <p>Estamos aqui para lhe ajudar. 
          Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
          </p>
        </div>
       
        <form method='POST' netlify-honeypot="bot-field" data-netlify="true" className='formContato' name='form' onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="form" />
          <input type='text' placeholder='Nome' name='nome' value={inputs.nome || ''} onChange={handleInput}/>
          <input type='text' placeholder='Telefone' name='telefone' value={inputs.telefone || ''} onChange={handleInput}/>
          <input type='email' placeholder='E-mail' name='email' value={inputs.email || ''} onChange={handleInput}/>
          <textarea type='text' placeholder='Escreva sua mensagem aqui' name='text' value={inputs.text || ''} onChange={handleInput} />
          <button type='submit'> Enviar</button>
        </form>
      </div>
  )

}

export default Form
