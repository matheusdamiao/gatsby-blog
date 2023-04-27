import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import logo from "./../images/logo-last-stroke.svg"
import zapp from "./../images/zap-component.svg"
import { Link } from "gatsby"
import * as style from "./Menu.module.css"
import { motion } from "framer-motion"

const MenuDesktop = () => {
  const [clicked, setClicked] = useState(false)

  const toggleMenu = () => {
    setClicked(!clicked)
  }

  // const closeMenu = () => {
  //   if (typeof window !== "undefined")
  //     if (window.innerWidth > 800) {
  //       setClicked(false)
  //     }
  // }

  // useEffect(() => {
  //   const isBrowser = typeof window !== "undefined"

  //   if (isBrowser) {
  //     window.addEventListener("resize", closeMenu)
  //     const divMenu = document.querySelector(".div-menu-mobile")
  //     window.addEventListener("click", e => {
  //       const insideDiv = e.composedPath().includes(divMenu)
  //       if (!insideDiv) {
  //         setClicked(false)
  //       }
  //     })
  //   }
  // }, [clicked])

  return (
    <>
      <div className={style.divMenu}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link className={style.divLogo} to="/" alt="homepage">
            <img src={logo} alt="logo" width={325} />
          </Link>
        </div>
        <ul className={style.divLinks}>
          <li>
            <Link to="/areasdeatuacao" style={{ whiteSpace: "nowrap" }}>
              Áreas de atuação{" "}
            </Link>
          </li>
          <li>
            <Link to="/#atuacao">Serviços</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {" "}
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={style.lastLi}>
            {" "}
            <Link to="/#contato">Contato</Link>
          </li>
        </ul>
      </div>

      <div className="div-menu-mobile">
        <div className="div-logo-mobile">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="div-bars" onClick={toggleMenu}>
          <StaticImage
            src="./../images/bars-solid.svg"
            alt=""
            className="menuBars"
          />
        </div>
      </div>

      <motion.div
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
        }}
        className={clicked ? "menuAtivo" : "menuDesativado"}
      >
        <ul className="ul-mobile">
          <li onClick={() => toggleMenu()}>
            <Link to="/areasdeatuacao">Áreas de atuação </Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/#atuacao">Serviços</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li onClick={() => toggleMenu()}>
            <Link to="/#contato">Contato</Link>
          </li>
        </ul>
      </motion.div>
      <a
        className={style.zapLink}
        href="https://api.whatsapp.com/send?phone=5521971877705"
      >
        <img src={zapp} alt="zap" className={style.zapImg} />
      </a>
    </>
  )
}

export default MenuDesktop
