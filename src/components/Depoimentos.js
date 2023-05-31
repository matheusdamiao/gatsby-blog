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
      avatar1: file(relativePath: { eq: "luciana.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      avatar2: file(relativePath: { eq: "wanessa.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      avatar3: file(relativePath: { eq: "tatiana.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }

      avatar4: file(relativePath: { eq: "vanusa.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const { avatar1, avatar2, avatar3, avatar4 } = data

  const [depoimentoState, setDepoimentoState] = useState([
    {
      nome: "Luciana",
      foto: getImage(avatar1),
      texto:
        "Nos últimos tempos tem sido difícil encontrarmos profissionais que, além de desempenharem com excelência seu papel, também tenham a  capacidade e a humanidade de comunicar com os seus clientes e de entender os seus receios.        Tive a sorte de encontrar Thays e Vanessa,  que, desde o primeiro momento, souberam nos escutar e segurar nossas mãos quando o desespero tomou conta de nossa família.     Parabenizo e agradeço a ambas por terem nos acompanhado neste momento complicado de nossas vidas e pelo sucesso na jornada que seguimos juntas. E sabemos que não foi fácil!",
    },
    {
      nome: "Wanessa",
      foto: getImage(avatar2),
      texto:
        "Vanessa e Thays são profissionais maravilhosas, muito humanas, dedicadas ao trabalho, que foram essenciais no momento mais difícil da vida da minha família. Sem elas, os processos seriam muito mais difíceis de se lidar. Tenho só a agradecer por toda dedicação, comprometimento e carinho que elas tiveram",
    },
    {
      nome: "Tatiana",
      foto: getImage(avatar3),
      texto:
        "Parabéns pela dedicação e profissionalismo, que vocês tem, características essas que são muito admiráveis! Vocês fazem um ótimo trabalho, em momentos de desespero vocês sabem me acalmar e explicar do jeito que consigo entender, foram dois processos e graças a Deus e a vocês que foi só sucesso, não tenho palavras para dizer o quanto sou grata por ter contratado vocês, desejo tudo de maravilhoso e muito sucesso para as minhas advogadas, que Deus continue abençoando sempre. Muito obrigada Vanessa e Thays.",
    },
    {
      nome: "Vanusa",
      foto: getImage(avatar4),
      texto:
        "Bom, falar das minhas advogadas é muito fácil. Elas em primeiro lugar são amigas e  profissionais em tudo. Graças à  Deus tenho elas em minha vida",
    },
  ])

  return (
    <>
      <div id="depoimentos" className={style.mainDiv}>
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
              disableOnInteraction: true,
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
                nome={depoimentoState[2].nome}
                avatar={depoimentoState[2].foto}
                text={depoimentoState[2].texto}
                key={depoimentoState[2].index}
              />
            </SwiperSlide>

            <SwiperSlide
              data-swiper-parallax-duration="1000"
              className={style.swiperDepoimento}
            >
              <Depoimento
                nome={depoimentoState[3].nome}
                avatar={depoimentoState[3].foto}
                text={depoimentoState[3].texto}
                key={depoimentoState[3].index}
              />
            </SwiperSlide>

            {/* <SwiperSlide
              data-swiper-parallax-duration="600"
              className={style.swiperDepoimento}
            >
              <Depoimento
                nome={depoimentoState[5].nome}
                avatar={depoimentoState[5].foto}
                text={depoimentoState[5].texto}
                key={depoimentoState[5].index}
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Depoimentos
