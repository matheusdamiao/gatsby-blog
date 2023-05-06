import React from "react"
import logoInsta from "./../images/instagram-square-brands4.svg"
import logoLi from "./../images/linkedin-brands4.svg"
import logo from "../images/logo-novo.svg"
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
          <img src={logo} alt="logo" width={300} />
        </div>
        <div className={style.wrapperContent}>
          <div className={style.contato}>
            <h3>Contato</h3>
            <span>
              <img src={logoPhone} alt="logo" width={40} />
              <p> (21) 97187-7705</p>
            </span>

            <span>
              <img src={logoMail} alt="logo" width={40} />
              <p> contato@cupulillemedeirosadv.com </p>
            </span>

            <span>
              <img src={logoClock} width={40} alt="logo" />
              <p> 9:00 - 18:00 </p>
            </span>
          </div>

          <div className={style.social}>
            <h3> Social </h3>
            <div className={style.divLogos}>
              <a
                href="https://www.instagram.com/elas.descomplicam/"
                target="_blank"
              >
                <img src={logoInsta} width={40} alt="" />{" "}
              </a>
            </div>
          </div>

          <div className={style.siteMap}>
            <h3>Site</h3>
            <div className={style.siteMapWrapper}>
              <div className={style.links1}>
                <Link to="/areasdeatuacao">Áreas de atuação</Link>
                <Link to="/#diferenciais"> Diferenciais </Link>
                <Link to="/#depoimentos">Depoimentos</Link>
              </div>
              <div className={style.links2}>
                <Link to="/blog"> Blog</Link>
                <Link to="/sobre"> Escritório</Link>
                <Link to="/#contato"> Fale conosco </Link>
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
        <code>
          Desenvolvido por{" "}
          <a href="http://matheusdamiao.com.br" target="_blank">
            Matheus Damião
          </a>
        </code>
      </div>
    </>
  )
}

export default Footer
