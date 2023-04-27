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
import { motion } from "framer-motion"

const Index = () => {
  return (
    <>
      <MenuDesktop />
      <motion.div
        style={{
          width: "100%",
          overflowX: "hidden",
          margin: "100px auto",
          marginBottom: "20px",
        }}
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
          delay: 0.5,
        }}
      >
        <Seo title="" />
        <HeroSectionNew />
        <AreasDeAtuacao />
        <Diferenciais />
        <Depoimentos />
        <Page />
        <NewBlogSection />
        <FormSection />
        <Footer />
      </motion.div>
    </>
  )
}

export default Index
