import React from "react"
import  { graphql }  from "gatsby"
import AreasDeAtuacao from '../components/AreaDeAtuacao'
import HeroSection from '../components/HeroSection'
import Diferenciais from '../components/Diferenciais'
import Depoimentos from "../components/Depoimentos"
import PageTemplate from "../components/PageTemplate"
import { getImage } from "gatsby-plugin-image"

const Home = ({data}) => {

const { imagem1 } = data

  const aboutData = 
    {
      titulo: 'Nossa Equipe',
      subtitulo: 'Direito de família com quem respeita cada história',
      body: 'Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado para lidar com casos',
      imagem: getImage(imagem1)
    }
  





  
  return (
    <div>
      <HeroSection />
      <AreasDeAtuacao />
      <Diferenciais />
      <Depoimentos />
      <PageTemplate imagem={aboutData.imagem} subtitulo={aboutData.subtitulo} titulo={aboutData.titulo}> 
         {aboutData.body}
      </PageTemplate>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    imagem1: file(relativePath: {eq: "foto-advogadas.png"}) {
                childImageSharp {
                   gatsbyImageData
                   }
                }

    
    
   }
`