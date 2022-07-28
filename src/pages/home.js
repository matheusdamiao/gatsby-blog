import React from "react"
import  { graphql }  from "gatsby"
import AreasDeAtuacao from '../components/AreaDeAtuacao'
import HeroSection from '../components/HeroSection'
import Diferenciais from '../components/Diferenciais'
import Depoimentos from "../components/Depoimentos"
import PageTemplate from "../components/PageTemplate"
import FormSection from "../components/FormSection"
import { getImage } from "gatsby-plugin-image"

const Home = ({data}) => {

const { imagem1, imagem2 } = data

  const aboutData = 
    {
      titulo: 'Nossa Equipe',
      subtitulo: 'Direito de família com quem respeita cada história',
      body: 'Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado para lidar com casos',
      imagem: getImage(imagem1)
    }
    
  const direitoData = 
    {
      titulo: 'Direito Familiarista',
      subtitulo: 'Conheça mais sobre os direitos que sua família tem',
      body: 'Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado para lidar com casos',
      imagem: getImage(imagem2)
    }
  
  




  
  return (
    <div>
      <HeroSection />
      <AreasDeAtuacao />
      <Diferenciais />
      <Depoimentos />
      <PageTemplate inverted={true} imagem={aboutData.imagem} subtitulo={aboutData.subtitulo} titulo={aboutData.titulo}> 
         {aboutData.body}
      </PageTemplate>
      <PageTemplate inverted={false} imagem={direitoData.imagem} subtitulo={direitoData.subtitulo} titulo={direitoData.titulo}> 
         {direitoData.body}
      </PageTemplate>
      <FormSection /> 
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

     imagem2: file(relativePath: {eq: "imagem-familia.png"}) {
                childImageSharp {
                   gatsbyImageData
                   }
                }
    
   }
`