import React from "react"
import * as style from "./Page.module.css"
import foto from "./../images/fotoAdvogadas.png"

const Page = () => {
  return (
    <div className={style.divPrincipal}>
      <div className={style.titulo}>
        <h3> Escritório </h3>
        <h1> Conheça melhor a nossa equipe</h1>
      </div>

      <div className={style.textoEfoto}>
        <div className={style.divTexto}>
          <p>
            {" "}
            O escritório possui como principal objetivo o empoderamento
            feminino, através da garantia e consciência dos seus direitos.
          </p>

          <a href="/sobre">
            {" "}
            <button>Saiba mais</button>{" "}
          </a>
        </div>

        <div className={style.foto}>
          <img src={foto} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page
