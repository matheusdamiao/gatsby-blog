import React from "react"
import MenuDesktop from "./MenuDesktop"
import * as style from "./HeroSectionNew.module.css"
import foto from "./../images/foto-hero.svg"

const HeroSectionNew = () => {
  return (
    <div className={style.main}>
      <div className={style.divPrincipal}>
        <div className={style.div}>
          <p> Advocacia de Família e Sucessões</p>
          <h1> O direito da sua família em primeiro lugar</h1>
          <h3>
            {" "}
            Com atendimento humanizado, ajudamos você e sua família na resolução
            de problemas jurídicos{" "}
          </h3>
          <button>
            {" "}
            <a href="/home#contato"> Agende uma reunião </a>
          </button>
        </div>

        <div className={style.divFoto}>
          <img src={foto} />
        </div>
      </div>
    </div>
  )
}

export default HeroSectionNew
