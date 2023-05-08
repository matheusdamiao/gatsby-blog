import "./../components/style.scss"
import React from "react"
import MenuDesktop from "../components/MenuDesktop"
import Footer from "../components/Footer"
import fotobg from "./../images/thays_e_vanessa.svg"
import advogadas from "./../images/advogadass.svg"
import vanessa from "./../images/vanessa.svg"
import thays from "./../images/thays.svg"
import Seo from "../components/seo"
import { motion } from "framer-motion"

const sobre = () => {
  return (
    <>
      <MenuDesktop />

      <motion.div
        initial={{
          opacity: 0,
          x: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 100,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        <Seo title="Sobre nós" />
        <div className="about-hero">
          <div className="about-hero-content">
            <small> Escritório</small>
            <h1>Conheça melhor nossa equipe</h1>
            <h3>
              Especialistas em Direito de Família e Sucessões, atuamos e
              prezamos por uma advocacia humanizada
            </h3>
          </div>

          <div className="about-hero-picture">
            <img src={fotobg} alt="" />
          </div>
        </div>

        <section className="about-office">
          <div className="title">
            <small>Quem somos</small>
            <h3>Cupulille e Medeiros Advogadas</h3>
          </div>
          <div className="body-text">
            <p>
              O escritório Cupulille & Medeiros Advogadas é especialista na
              resolução de conflitos familiares, com ênfase na garantia do
              Direito das Mulheres e do Direito das Crianças e dos Adolescentes,
              com um olhar sensível, engajado e acolhedor. Oferecemos serviços
              multidisciplinares, contando com parcerias em todo Brasil para
              atuação conjunta, afinal, juntas somos mais fortes!
            </p>
          </div>
          <div className="div-imagem">
            <img src={advogadas} alt="" />
          </div>
        </section>

        <section className="section-about">
          <div className="section-wrap">
            <div className="section-info">
              <h2> Vanessa Cupullile</h2>
              <small> OAB/RJ 228.992</small>
            </div>

            <div className="section-bio">
              <p>
                Pós-graduanda em Planejamento Patrimonial, Familiar e Sucessório
                pela Legale Educacional. Pós-graduada em Direito de Famílias e
                Sucessões pela Pontífica Universidade Católica do Rio de Janeiro
                (PUC-Rio). Graduada em Direito pela Universidade Candido Mendes.
                Delegada da Comissão de Assistência às Vítimas de Violência
                Doméstica da OAB de Niterói. Atuação e experiência com direito
                de família, sucessões, direito civil e violência doméstica e
                familiar.{" "}
              </p>
            </div>

            <div className="section-picture">
              <img src={vanessa} alt="" />
            </div>
          </div>
        </section>

        <section className="section-about">
          <div className="section-wrap">
            <div className="section-info">
              <h2> Thays Medeiros </h2>
              <small> OAB/RJ 232.951</small>
            </div>

            <div className="section-bio">
              <p>
                Graduada em Direito pela Universidade Candido Mendes. Delegada
                da Comissão de Assistência às Vítimas de Violência Doméstica da
                OAB de Niterói. Atuação e experiência com direito de família,
                sucessões, direito trabalhista, direito do consumidor, direito
                civil e violência doméstica e familiar.{" "}
              </p>
            </div>

            <div className="section-picture">
              <img src={thays} alt="" />
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </>
  )
}

export default sobre
