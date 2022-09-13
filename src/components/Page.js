import React from 'react'
import * as style from './Page.module.css'
import foto from './../images/fotoAdvogadas.png'

const Page = () => {
  return (
    <div className={style.divPrincipal}>
        <div className={style.titulo}>
            <h3> escritório </h3>
            <h1> Conheça nossa equipe</h1>
        </div>


        <div className={style.textoEfoto}>

            <div className={style.divTexto}>
                <p> Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thaís Medeiros possuem em comum a atenção e o cuidado para lidar com casos Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thaís Medeiros possuem em comum a atenção e o cuidado para lidar com casos  </p>
                <button> Saiba mais</button>
            </div>    


            <div className={style.foto}>
                <img
                src={foto}
                />
            </div>
        

        </div>
    </div>
  )
}

export default Page
