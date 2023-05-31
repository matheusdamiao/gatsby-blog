import React from "react"
import * as style from "./HeroSectionNew.module.css"
// import advsjuntas from "./../images/advogadass.svg"
import { StaticImage } from "gatsby-plugin-image"

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
            <a href="/#contato"> Agende uma reunião </a>
          </button>
        </div>

        <div className={style.divFoto}>
          <StaticImage
            src="./../images/advogadass.svg"
            alt="Advogadas Vanessa e Thays no escritório"
            loading="eager"
            placeholder="blurred"
            quality={100}
            objectFit="cover"
            objectPosition="center"
            imgStyle={{ height: "100%", width: "100%" }}
          />
          {/* <img src={advsjuntas} alt="Advogadas Vanessa e Thays no escritório" /> */}
        </div>
      </div>
    </div>
  )
}

export default HeroSectionNew
