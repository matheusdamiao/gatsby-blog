import React from "react"
import * as style from "./Page.module.css"
import foto from "./../images/thays_e_vanessa.svg"
import { StaticImage } from "gatsby-plugin-image"
import foto2 from "./../images/about-lawyers.webp"

const Page = () => {
  return (
    <div className={style.divPrincipal}>
      {/* <div className={style.titulo}>
        <h3> Escritório </h3>
        <h1> Conheça melhor a nossa equipe</h1>
      </div> */}

      <div className={style.textoEfoto}>
        <div className={style.divTexto}>
          <div className={style.titulo}>
            <h3> Escritório </h3>
            <h1> Conheça melhor a nossa equipe</h1>
          </div>
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
          <img src={foto2} alt="Vanessa Cupulille e Thays Medeiros" />
          {/* <StaticImage
            src="./../images/about-lawyers.webp"
            alt="Advogadas Vanessa e Thays no escritório"
            loading="eager"
            placeholder="blurred"
            quality={100}
            objectFit="cover"
            objectPosition="center"
            imgStyle={{ width: "100%", maxHeight: "400px", height: "100%" }}
          /> */}
          {/* <img src={foto} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Page
