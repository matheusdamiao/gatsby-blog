import React from "react"
import MenuDesktop from "../components/MenuDesktop"
import guarda from "./../images/people-roof-solid.svg"
import userShield from "./../images/user-shield.svg"
import venusSolid from "./../images/venus-solid.svg"
import briefcase from "./../images/briefcase.svg"
import idCard from "./../images/id-card-solid.svg"
import cart from "./../images/cart-shopping.svg"
import Footer from "../components/Footer"

const areasdeatuacao = () => {
  return (
    <>
      <MenuDesktop />
      <div className="header">
        <h1>Áreas de Atuação</h1>
        <h3>
          Com atendimento humanizado, ajudamos você e sua família na resolução
          de problemas jurídicos
        </h3>
      </div>
      <div className="wrapperContent">
        <section id="direito_das_familias">
          <img src={guarda} alt="" />
          <h2>Direito das Famílias e das Sucessões</h2>
          <ul>
            <li>
              Pensão Alimentícia (revisão de alimentos, alimentos gravídicos,
              alimentos avoengos)
            </li>
            <li>
              Guarda e Regulamentação do Regime de Convívio (Plano parental)
            </li>
            <li>Divórcio, Dissolução de União Estável e Partilha de Bens</li>
            <li> Investigação de Paternidade</li>
            <li>Planejamento Patrimonial</li>
            <li>Pacto Antenupcial (escolha do Regime de Bens)</li>
            <li>Filiação Socioafetiva </li>
            <li>Adoção </li>
          </ul>
        </section>

        <section id="direito_penal">
          <img src={userShield} alt="" />
          <h2>Direito Penal</h2>
          <ul>
            <li>Violência Doméstica e Familiar </li>
            <li>Lei Maria da Penha</li>
            <li> Violência Sexual</li>
            <li> Ameaças</li>
            <li> Perseguições (stalking) </li>
          </ul>
        </section>

        <section id="direitos_sexuais">
          <img src={venusSolid} alt="" />
          <h2>Direitos Sexuais e Reprodutivos</h2>
          <ul>
            <li>Violência Obstétrica</li>
            <li> Aborto legal</li>
            <li> Direito a Maternidade, creche e escola para os filhos</li>
          </ul>
        </section>

        <section id="direito_trabalhista">
          <img src={briefcase} alt="" />
          <h2>Direito Trabalhista</h2>
          <ul>
            <li>Assédio Sexual e Moral</li>
            <li> Direito da Mulher Gestante</li>
            <li> Igualdade Salarial</li>
            <li>Demais direitos trabalhistas</li>
          </ul>
        </section>

        <section id="direito_civil">
          <img src={idCard} alt="" />
          <h2>Direito Civil</h2>
          <ul>
            <li>Ações de indenizações por danos morais e materiais</li>
            <li> Demais demandas cíveis</li>
          </ul>
        </section>

        <section id="direito_consumidor">
          <img src={cart} alt="" />
          <h2>Direito do Consumidor</h2>
          <ul>
            <li>Ações em defesa do direito do consumidor </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default areasdeatuacao
