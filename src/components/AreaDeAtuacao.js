import React from "react"
import Card from "./Card"

import guarda from "./../images/people-roof-solid.svg"
import userShield from "./../images/user-shield.svg"
import venusSolid from "./../images/venus-solid.svg"
import briefcase from "./../images/briefcase.svg"
import idCard from "./../images/id-card-solid.svg"
import cart from "./../images/cart-shopping.svg"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const AreasDeAtuacao = () => {
  const cardData = [
    {
      icone: guarda,
      title: "Direito das Famílias e das Sucessões",
      link: "direito_das_familias",
    },
    {
      icone: userShield,
      title: "Direito Penal",
      link: "direito_penal",
    },
    {
      icone: venusSolid,
      title: "Direitos Sexuais e Reprodutivos",
      link: "direitos_sexuais",
    },
    {
      icone: briefcase,
      title: "Direito Trabalhista",
      link: "direito_trabalhista",
    },
    {
      icone: idCard,
      title: "Direito Civil",
      link: "direito_civil",
    },
    {
      icone: cart,
      title: "Direito do Consumidor",
      link: "direito_consumidor",
    },
  ]

  return (
    <div className="atuacao-div" id="atuacao">
      <h2> Áreas de Atuação </h2>
      <p> Serviços que prestamos as nossas clientes </p>

      <div className="wrapperCards">
        <Card icon={cardData[0].icone} title={cardData[0].title}>
          {cardData[0].link}
        </Card>
        <Card icon={cardData[1].icone} title={cardData[1].title}>
          {cardData[1].link}
        </Card>
        <Card icon={cardData[2].icone} title={cardData[2].title}>
          {cardData[2].link}
        </Card>

        <Card icon={cardData[3].icone} title={cardData[3].title}>
          {cardData[3].link}
        </Card>
        <Card icon={cardData[4].icone} title={cardData[4].title}>
          {cardData[4].link}
        </Card>
        <Card icon={cardData[5].icone} title={cardData[5].title}>
          {cardData[5].link}
        </Card>
      </div>
    </div>
  )
}

export default AreasDeAtuacao
