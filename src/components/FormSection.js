import React from "react"
import Form from "./Form"
import Contato from "./Contato"
import "./style.scss"

const FormSection = () => {
  return (
    <div id="contato" className="formSection">
      <Form />
      <Contato />
    </div>
  )
}

export default FormSection
