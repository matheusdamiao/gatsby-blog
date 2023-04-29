import { getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import Depoimento from "./Depoimento"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCards, Navigation, Pagination, Parallax } from "swiper"
import * as style from "./Depoimentos.module.css"
import "swiper/css/pagination"

const Depoimentos = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar1: file(relativePath: { eq: "avatar1.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      avatar2: file(relativePath: { eq: "avatar2.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      avatar3: file(relativePath: { eq: "avatar3.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const { avatar1, avatar2, avatar3 } = data

  const [depoimentoState, setDepoimentoState] = useState([
    {
      nome: "Maria",
      foto: getImage(avatar1),
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.",
    },
    {
      nome: "João",
      foto: getImage(avatar2),
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.",
    },
    {
      nome: "Pedro",
      foto: getImage(avatar3),
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.",
    },
    {
      nome: "Henrique",
      foto: getImage(avatar2),
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.",
    },
    {
      nome: "Luana",
      foto: getImage(avatar2),
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.",
    },
    {
      nome: "Zaara",
      foto: getImage(avatar2),
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.",
    },
  ])

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.divTitulo}>
          <h3> Depoimentos </h3>
          <h1> Os relatos das nossas clientes</h1>
        </div>
        <div className={style.slider}>
          <Swiper
            modules={[Navigation, Pagination, EffectCards, Autoplay, Parallax]}
            className={style.swiperDepoimentoPrincipal}
            pagination={{
              clickable: "true",
            }}
            gap={0}
            Navigation
            effect="cards"
            cardsEffect={{ slideShadows: false }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            parallax={{
              parallax: true,
              enabled: true,
            }}
          >
            <SwiperSlide className={style.swiperDepoimento}>
              <Depoimento
                data-swiper-parallax-duration="3000"
                nome={depoimentoState[0].nome}
                avatar={depoimentoState[0].foto}
                text={depoimentoState[0].texto}
                key={depoimentoState[0].index}
              />
            </SwiperSlide>

            <SwiperSlide className={style.swiperDepoimento}>
              <Depoimento
                data-swiper-parallax-duration="3000"
                nome={depoimentoState[1].nome}
                avatar={depoimentoState[3].foto}
                text={depoimentoState[3].texto}
                key={depoimentoState[3].index}
              />
            </SwiperSlide>

            <SwiperSlide
              data-swiper-parallax-duration="1000"
              className={style.swiperDepoimento}
            >
              <Depoimento
                nome={depoimentoState[2].nome}
                avatar={depoimentoState[1].foto}
                text={depoimentoState[1].texto}
                key={depoimentoState[1].index}
              />
            </SwiperSlide>

            <SwiperSlide
              data-swiper-parallax-duration="1000"
              className={style.swiperDepoimento}
            >
              <Depoimento
                nome={depoimentoState[3].nome}
                avatar={depoimentoState[4].foto}
                text={depoimentoState[4].texto}
                key={depoimentoState[4].index}
              />
            </SwiperSlide>

            <SwiperSlide
              data-swiper-parallax-duration="600"
              className={style.swiperDepoimento}
            >
              <Depoimento
                nome={depoimentoState[5].nome}
                avatar={depoimentoState[5].foto}
                text={depoimentoState[5].texto}
                key={depoimentoState[5].index}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Depoimentos
