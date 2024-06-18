import React from "react"
import * as style from "./HeroSectionNew.module.css"
import advsjuntas from "./../images/as-duas-juntas-bg.webp"

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
          {/* <StaticImage
            src="./../images/as-duas-juntas-bg.webp"
            alt="Advogadas Vanessa e Thays no escritório"
            loading="eager"
            placeholder="blurred"
            quality={100}
            objectFit="cover"
            class={style.img}
            objectPosition="center"
            imgStyle={{ height: "100%", width: "100%" }}
          /> */}
          <img src={advsjuntas} alt="Advogadas Vanessa e Thays no escritório" />
        </div>
      </div>
    </div>
  )
}

export default HeroSectionNew
