import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "./Contato.module.css"
import logoInsta from "./../images/instagram-square-brands4.svg"
import fone from "./../images/fone.svg"
import msg from "./../images/msg.svg"
import clock from "./../images/clock.svg"

const Contato = () => {
  return (
    <div className={style.divGeral}>
      <div className={style.divPrincipal}>
        <div className={style.divTitulo}>
          <h3> Fale Conosco</h3>
          <h1> Atendimento </h1>
        </div>

        <div className={style.divSpan}>
          <span className="span">
            {/* <StaticImage src="../images/icone-tel.png" alt="logo" /> */}
            <img src={fone} alt="icone" width={30} />
            <p> (21) 97187-7705</p>
          </span>

          <span className="span">
            {/* <StaticImage src="../images/icone-msg.png" alt="logo" /> */}
            <img src={msg} alt="icone" width={30} />

            <p> contato@cupulillemedeirosadv.com </p>
          </span>

          <span className="span">
            {/* <StaticImage src="../images/icone-clock.png" alt="logo" /> */}
            <img src={clock} alt="icone" width={30} />
            <p> 8:00 - 18:00 </p>
          </span>
        </div>
      </div>

      <div className={style.divSocial}>
        {/* <h3> Siga-nos</h3> */}
        <h1> Siga nossa rede social </h1>
        <div className={style.divLogos}>
          <a
            href="https://www.instagram.com/elas.descomplicam/"
            target="_blank"
            alt=""
          >
            <img src={logoInsta} alt="" />{" "}
          </a>
          {/* <a href="./" alt="">
            <img src={logoLi} alt="" />{" "}
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Contato
