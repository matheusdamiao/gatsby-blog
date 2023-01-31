import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        background: "rgba(224, 203, 225, 0.5)",
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <StaticImage src="../images/new-logo.svg" alt="logo" />
      <p style={{ marginTop: "25px", textAlign: "center" }}>
        Copyright © Cupulille & Medeiros Advogadas - 2022 <br />
        Todos os direitos reservados.
      </p>
      <code style={{ textAlign: "center" }}>
        Desenvolvido por Matheus Damião & Luana Almeida
      </code>
    </div>
  )
}

export default Footer
