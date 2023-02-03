import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as style from "./Footer.module.css"
import logoInsta from "./../images/instagram-square-brands4.svg"
import logoLi from "./../images/linkedin-brands4.svg"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <div className={style.divPrincipal}>
        <div>
          <StaticImage width={400} src="../images/new-logo.svg" alt="logo" />
        </div>
        <div className={style.wrapperContent}>
          <div className={style.contato}>
            <h3>Contato</h3>
            <span>
              <StaticImage src="../images/icone-tel.png" alt="logo" />
              <p> (21) 22349-2934 / (21) 99923-8192</p>
            </span>

            <span>
              <StaticImage src="../images/icone-msg.png" alt="logo" />
              <p> elasdescomplicam@gmail.com </p>
            </span>

            <span>
              <StaticImage src="../images/icone-clock.png" alt="logo" />
              <p> 8:00 - 18:00 </p>
            </span>
          </div>

          <div className={style.social}>
            <h3> Social </h3>
            <div className={style.divLogos}>
              <a href="./">
                <img src={logoInsta} />{" "}
              </a>
              <a href="./">
                <img src={logoLi} />{" "}
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
