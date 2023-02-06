import { StaticImage } from "gatsby-plugin-image"
import "./../components/style.scss"
import React from "react"
import MenuDesktop from "../components/MenuDesktop"
import curriculo from "./../images/files/curriculum.pdf"
import Footer from "../components/Footer"
import fotobg from "./../images/foto-advogadas-svg.svg"

const sobre = () => {
  return (
    <>
      <MenuDesktop />
      <div className="about-hero">
        <div className="about-hero-content">
          <small> Escritório</small>
          <h1>Conheça melhor nossa equipe</h1>
          <h3>
            {" "}
            Advogadas especializadas em resolver conflitos jurídicos
            relacionados à família{" "}
          </h3>
        </div>

        <div className="about-hero-picture">
          <img src={fotobg} alt="" />
        </div>
      </div>

      <section className="section-about">
        <div className="section-info">
          <h2> Vanessa Cupullile</h2>
          <small> OAB 39493430 </small>
        </div>

        <div className="section-wrap">
          <div className="section-picture">
            <StaticImage src="./../images/vanessa-foto.svg" alt="" />
          </div>

          <div className="section-bio">
            <p>
              Especialistas em direito da famiília, as advogadas Vanessa
              Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado
              para lidar com casos{" "}
            </p>
            <button className="button-about">
              {" "}
              <a href={curriculo} title="Curriculo em pdf">
                {" "}
                Currículo{" "}
              </a>{" "}
            </button>
          </div>
        </div>
      </section>

      <section className="section-about">
        <div className="section-wrap">
          <div className="section-info">
            <h2> Thays Medeiros </h2>
            <small> OAB 39493430 </small>
          </div>

          <div className="section-picture">
            <StaticImage src="./../images/thays-foto.svg" alt="" />
          </div>

          <div className="section-bio">
            <p>
              Especialistas em direito da famiília, as advogadas Vanessa
              Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado
              para lidar com casos{" "}
            </p>
            <button className="button-about">
              {" "}
              <a href={curriculo} title="Curriculo em pdf">
                {" "}
                Currículo{" "}
              </a>{" "}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default sobre
