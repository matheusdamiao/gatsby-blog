import React from "react"
import * as style from "./HeroSectionNew.module.css"
import foto from "./../images/foto-hero.svg"
import fotoadvs from "./../images/fotoAdvogadas.png"
import advsjuntas from "./../images/advogadas-juntas.png"

const HeroSectionNew = () => {
  return (
    <div className={style.main}>
      <div className={style.divPrincipal}>
        <div className={style.div}>
          <h1> O direito da sua família em primeiro lugar</h1>
          <h3>
            {" "}
            Com atendimento humanizado, ajudamos mulheres, mães, crianças e
            adolescentes na prevenção e resolução de conflitos familiares.
          </h3>
          <button>
            {" "}
            <a href="/home#contato"> Agende uma reunião </a>
          </button>
        </div>

        <div className={style.divFoto}>
          <img src={advsjuntas} />
        </div>
      </div>
    </div>
  )
}

export default HeroSectionNew
