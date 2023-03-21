import React from "react"
import AreasDeAtuacao from "../components/AreaDeAtuacao"
import Diferenciais from "../components/Diferenciais"
import Depoimentos from "../components/Depoimentos"
import FormSection from "../components/FormSection"
import Footer from "../components/Footer"
import HeroSectionNew from "../components/HeroSectionNew"
import Page from "../components/Page"
import NewBlogSection from "../components/NewBlogSection"
import MenuDesktop from "../components/MenuDesktop"
import Seo from "../components/seo"

const Index = () => {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        margin: "100px auto",
        marginBottom: "20px",
      }}
    >
      <Seo title="" />
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

export default Index
