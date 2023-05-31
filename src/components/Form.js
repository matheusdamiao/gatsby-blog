import React, { useState } from "react"
import "./style.scss"
import * as style from "./Form.module.css"
import Spining from "./Spining"

const Form = () => {
  const [inputs, setInputs] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)

    fetch("/home", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...inputs,
      }),
    })
      .then(e =>
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      )
      .then(e => setIsSent(true))
      .catch(
        error =>
          console.log(`Ops, ocorreu este erro: ${error}`) && setIsSent(false)
      )

    setInputs({})
  }

  const handleInput = e => {
    let nome = e.target.name
    let value = e.target.value
    setInputs({
      ...inputs,
      [nome]: [value],
    })
  }

  return (
    <div className="form">
      <div className={style.divTitulo}>
        <h3> Fale Conosco</h3>
        <h1> Mande uma mensagem </h1>
        <p>
          Estamos aqui para lhe ajudar. Preencha o formulário abaixo e
          entraremos em contato o mais rápido possível.
        </p>
      </div>

      <form
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className="formContato"
        name="form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="form" />
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          value={inputs.nome || ""}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          name="telefone"
          value={inputs.telefone || ""}
          onChange={handleInput}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={inputs.email || ""}
          onChange={handleInput}
        />
        <textarea
          type="text"
          placeholder="Escreva sua mensagem aqui"
          name="text"
          value={inputs.text || ""}
          onChange={handleInput}
          required
        />
        <button type="submit">
          {isLoading ? (
            <Spining />
          ) : !isSent ? (
            "Enviar mensagem"
          ) : (
            "Mensagem enviada!"
          )}
        </button>
      </form>
    </div>
  )
}

export default Form
