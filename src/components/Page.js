import React from "react"
import * as style from "./Page.module.css"
import foto from "./../images/fotoAdvogadas.png"

const Page = () => {
  return (
    <div className={style.divPrincipal}>
      <div className={style.titulo}>
        <h3> escritório </h3>
        <h1> Conheça nossa equipe</h1>
      </div>

      <div className={style.textoEfoto}>
        <div className={style.divTexto}>
          <p>
            {" "}
            Especialistas em direito da famiília, as advogadas Vanessa Cupullile
            e Thaís Medeiros possuem em comum a atenção e o cuidado para lidar
            com cada caso.{" "}
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
