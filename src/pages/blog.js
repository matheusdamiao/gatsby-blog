import * as React from "react"
import AreasDeAtuacao from '../components/AreaDeAtuacao'
import HeroSection from '../components/HeroSection'
import Diferenciais from '../components/Diferenciais'
import Depoimentos from "../components/Depoimentos"

const PaginaBlog = () => {
  return (
    <div>
      <HeroSection />
      <AreasDeAtuacao />
      <Diferenciais />
      <Depoimentos />
    </div>
  )
}

export default PaginaBlog
