import React, { useState } from "react"
import { graphql } from "gatsby"
import AreasDeAtuacao from "../components/AreaDeAtuacao"
import Diferenciais from "../components/Diferenciais"
import Depoimentos from "../components/Depoimentos"
import FormSection from "../components/FormSection"
import Footer from "../components/Footer"
import HeroSectionNew from "../components/HeroSectionNew"
import Page from "../components/Page"
import NewBlogSection from "../components/NewBlogSection"
import MenuDesktop from "../components/MenuDesktop"

const Home = ({ data }) => {
  // const { imagem1, imagem2 } = data

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        margin: "100px auto",
        marginBottom: "20px",
      }}
    >
      <MenuDesktop />
      <HeroSectionNew />
      <AreasDeAtuacao />
      <Diferenciais />
      <Depoimentos />
      <Page />
      <NewBlogSection />
      <FormSection />
      <Footer />
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    imagem1: file(relativePath: { eq: "foto-advogadas.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }

    imagem2: file(relativePath: { eq: "imagem-familia.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
