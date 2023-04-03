import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import logoInsta from "./../images/instagram-square-brands4.svg"
import logoLi from "./../images/linkedin-brands4.svg"
import logo from "../images/logo-last-stroke.svg"
import { Link } from "gatsby"
import * as style from "./Footer.module.css"
import logoPhone from "../images/phone.svg"
import logoMail from "../images/logo-mail.svg"
import logoClock from "../images/logo-clock.svg"

const Footer = () => {
  return (
    <>
      <div className={style.divPrincipal}>
        <div>
          <img src={logo} alt="logo" width={400} />
        </div>
        <div className={style.wrapperContent}>
          <div className={style.contato}>
            <h3>Contato</h3>
            <span>
              <img src={logoPhone} alt="logo" width={40} />
              <p> (21) 22349-2934 / (21) 99923-8192</p>
            </span>

            <span>
              <img src={logoMail} alt="logo" width={40} />
              <p> elasdescomplicam@gmail.com </p>
            </span>

            <span>
              <img src={logoClock} width={40} alt="logo" />
              <p> 8:00 - 18:00 </p>
            </span>
          </div>

          <div className={style.social}>
            <h3> Social </h3>
            <div className={style.divLogos}>
              <a href="./">
                <img src={logoInsta} width={40} alt="" />{" "}
              </a>
              <a href="./">
                <img src={logoLi} width={40} alt="" />{" "}
              </a>
            </div>
          </div>

          <div className={style.siteMap}>
            <h3>Site</h3>
            <div className={style.siteMapWrapper}>
              <div className={style.links1}>
                <Link to="">Áreas de atuação</Link>
                <Link to="">Especialistas</Link>
                <Link to="">Depoimentos</Link>
              </div>
              <div className={style.links2}>
                <Link to=""> Blog</Link>
                <Link to=""> Escritório</Link>
                <Link to=""> Fale conosco </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.copy}>
        <p>
          Copyright © Cupulille & Medeiros Advogadas - 2023 - Todos os direitos
          reservados.
        </p>
        <p>
          All family images by Vlada Karpovich via{" "}
          <a
            href="https://www.pexels.com/@vlada-karpovich/collections/"
            alt=""
            target="_blank"
          >
            Pexels
          </a>
        </p>
        <code>
          Desenvolvido por{" "}
          <a href="http://matheusdamiao.netlify.com" target="_blank">
            Matheus Damião
          </a>
        </code>
      </div>
    </>
  )
}

export default Footer
