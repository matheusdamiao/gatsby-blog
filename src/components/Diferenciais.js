import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as style from "./Diferenciais.module.css"
import human from "./../images/human.svg"
import experience from "./../images/experience.svg"
import respect from "./../images/respect.svg"
import process from "./../images/process.svg"

const Diferenciais = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     icone1: file(relativePath: { eq: "human.svg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }

  //     icone2: file(relativePath: { eq: "experience.svg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }

  //     icone3: file(relativePath: { eq: "respect.svg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }

  //     icone4: file(relativePath: { eq: "process.svg" }) {
  //       childImageSharp {
  //         gatsbyImageData
  //       }
  //     }
  //   }
  // `)

  // const { icone1, icone2, icone3, icone4 } = data

  const cardInfo = [
    {
      // icone: getImage(icone1),
      icone: human,
      title: "Atendimento personalizado e humanizado",
      // body: "Lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum",
    },
    {
      // icone: getImage(icone2),
      icone: experience,
      title: "Experiência na área",
      // body: "Lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum",
    },
    {
      // icone: getImage(icone3),
      icone: respect,
      title: "Sensibilidade, Respeito e Empatia",
      // body: "Lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum",
    },
    {
      // icone: getImage(icone4),
      icone: process,
      title: "Relatórios Processuais para acompanhar seu processo",
      // body: "Lorem ipsum  lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum",
    },
  ]

  return (
    <div id="diferenciais">
      <div className={style.divPrincipal}>
        {/* <h2 className={style.topico}> especialistas </h2> */}
        <p className={style.titulo}> Nosso diferencial está em cada detalhe </p>

        <div className={style.cards}>
          {cardInfo.map(card => {
            return (
              <div className={style.card} key={card.title}>
                <div className={style.cardIcon}>
                  <img src={card.icone} alt="icone" loading="eager" />
                </div>

                <h3>{card.title}</h3>
                {/* <p>{card.body}</p> */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Diferenciais
