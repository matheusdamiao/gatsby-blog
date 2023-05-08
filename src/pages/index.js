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

      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          // margin: "80px auto",
          marginBottom: "20px",
        }}
      >
        <Seo title="" />
        <motion.div
          initial={{
            opacity: 0,
            x: 0,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 100,
          }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
            delay: 0.5,
          }}
        >
          <HeroSectionNew />
          <AreasDeAtuacao />
          <Diferenciais />
          <Page />
          <Depoimentos />
          <NewBlogSection />
          <FormSection />
          <Footer />
        </motion.div>
      </div>
    </>
  )
}

export default Index
