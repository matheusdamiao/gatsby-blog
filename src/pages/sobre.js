import { StaticImage } from "gatsby-plugin-image"
import "./../components/style.scss"
import React from "react"
import MenuDesktop from "../components/MenuDesktop"
import Footer from "../components/Footer"
import fotobg from "./../images/foto-advogadas-svg.svg"
import advogadas from "./../images/advogadas-juntas.png"
import Seo from "../components/seo"

const sobre = () => {
  return (
    <>
      <Seo />
      <MenuDesktop />
      <div className="about-hero">
        <div className="about-hero-content">
          <small> Escritório</small>
          <h1>Conheça melhor nossa equipe</h1>
          <h3>
            Especialistas em Direito de Família e Sucessões, atuamos e prezamos
            por uma advocacia humanizada
          </h3>
        </div>

        <div className="about-hero-picture">
          <img src={fotobg} alt="" />
        </div>
      </div>

      <section className="about-office">
        <div className="title">
          <small>Quem somos</small>
          <h3>Cupullile e Medeiros Advogadas</h3>
        </div>
        <div className="body-text">
          <p>
            O escritório Cupulille & Medeiros Advogadas é especialista na
            resolução de conflitos familiares, com ênfase na garantia do Direito
            das Mulheres e do Direito das Crianças e dos Adolescentes, com um
            olhar sensível, engajado e acolhedor. Oferecemos serviços
            multidisciplinares, contando com parcerias em todo Brasil para
            atuação conjunta, afinal, juntas somos mais fortes!
          </p>
        </div>
        <div className="div-imagem">
          <img src={advogadas} alt="" />
        </div>
      </section>

      <div className="nossa-equipe">
        <h3>Nossa equipe</h3>
        <p>
          O escritório Cupulille & Medeiros Advogadas é formado por uma equipe
          de duas mulheres, especialistas em Direito de Família e Sucessões,
          atuando e prezando por uma advocacia humanizada.
        </p>
      </div>

      <section className="section-about">
        <div className="section-wrap">
          <div className="section-info">
            <h2> Vanessa Cupullile</h2>
            <small> OAB 39493430 </small>
          </div>

          <div className="section-bio">
            <p>
              Pós-graduanda em Planejamento Patrimonial, Familiar e Sucessório
              pela Legale Educacional. Pós-graduada em Direito de Famílias e
              Sucessões pela Pontífica Universidade Católica do Rio de Janeiro
              (PUC-Rio). Graduada em Direito pela Universidade Candido Mendes.
              Delegada da Comissão de Assistência às Vítimas de Violência
              Doméstica da OAB de Niterói. Atuação e experiência com direito de
              família, sucessões, direito civil e violência doméstica e
              familiar.{" "}
            </p>
          </div>

          <div className="section-picture">
            <StaticImage src="./../images/vanessa-foto.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="section-about">
        <div className="section-wrap">
          <div className="section-info">
            <h2> Thays Medeiros </h2>
            <small> OAB 39493430 </small>
          </div>

          <div className="section-bio">
            <p>
              Graduada em Direito pela Universidade Candido Mendes. Delegada da
              Comissão de Assistência às Vítimas de Violência Doméstica da OAB
              de Niterói. Atuação e experiência com direito de família,
              sucessões, direito trabalhista, direito do consumidor, direito
              civil e violência doméstica e familiar.{" "}
            </p>
          </div>

          <div className="section-picture">
            <StaticImage src="./../images/thays-foto.svg" alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default sobre
