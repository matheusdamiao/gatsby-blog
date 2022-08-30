import { getImage, StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import Depoimento from './Depoimento'
import { useStaticQuery, graphql } from 'gatsby'
import Botao from './Botao'
import Icone from './../images/icone-depo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


const Depoimentos = () => {

    const data = useStaticQuery(graphql`
    query {
      
     avatar1: file(relativePath: {eq: "avatar1.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    
  
     
     avatar2: file(relativePath: {eq: "avatar2.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    
  
     
     avatar3: file(relativePath: {eq: "avatar3.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    
    } 
    `
   )

    const {avatar1, avatar2, avatar3} = data

    const [depoimentoState, setDepoimentoState] = useState([
      {  
       nome: 'Maria',
       foto: getImage(avatar1),
       texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
      },
      {  
      nome: 'João',
      foto: getImage(avatar2),
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
      },
       {  
      nome: 'Pedro',
      foto: getImage(avatar3),
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
      },
      {  
        nome: 'Henrique',
        foto: getImage(avatar2),
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
        },
        {  
          nome: 'Luana',
          foto: getImage(avatar2),
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
          },
          {  
            nome: 'Zaara',
            foto: getImage(avatar2),
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
            }    
      
     ])

   


   const style = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',

    // position: 'absolute'
   }

    // const sliderDepoimento = (direcao)=> {
      

    //   if (direcao === 1) {
    //     let removido = depoimentoState.shift();
    //     depoimentoState.push(removido);
    //     setDepoimentoState([...depoimentoState])
    //     return
    //   }
    //   else { 

    //     let ultimo = depoimentoState[depoimentoState.length - 1]
    //     let removido = depoimentoState.pop()
    //     setDepoimentoState([depoimentoState.splice(2, removido)])   
    //     setDepoimentoState([depoimentoState.unshift(ultimo)])
    //     setDepoimentoState([...depoimentoState])
    //     console.log(removido)
    //     return
    //   }

    //    }
  
   


  return (
    <>
    <div style={{position: 'relative', width: '100%', marginTop: '50px'}}>
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <img src={Icone} />
          <h1 style={{fontSize: '40px' ,textAlign: 'center', marginTop: '0px', marginBottom: '0px', fontFamily: 'Caudex'}}> Depoimentos</h1>
      </div>
      <div style={style}>
        <Swiper
        modules={[Navigation, Pagination]}
        className='swiper-depoimento-principal'        
        pagination={{clickable: 'true'}}
        spaceBetween={50}
       >

          <SwiperSlide className='swiper-depoimento'>
      
             <Depoimento nome={depoimentoState[0].nome} avatar={depoimentoState[0].foto} text={depoimentoState[0].texto} key={depoimentoState[0].index}  />
             <Depoimento nome={depoimentoState[3].nome} avatar={depoimentoState[3].foto} text={depoimentoState[3].texto} key={depoimentoState[3].index}  />
      
          </SwiperSlide>

          <SwiperSlide className='swiper-depoimento'>
         
             <Depoimento nome={depoimentoState[1].nome} avatar={depoimentoState[1].foto} text={depoimentoState[1].texto} key={depoimentoState[1].index}  />
             <Depoimento nome={depoimentoState[4].nome} avatar={depoimentoState[4].foto} text={depoimentoState[4].texto} key={depoimentoState[4].index}  />

          </SwiperSlide>

          <SwiperSlide className='swiper-depoimento'>
         
             <Depoimento nome={depoimentoState[2].nome} avatar={depoimentoState[2].foto} text={depoimentoState[2].texto} key={depoimentoState[2].index}  />
             <Depoimento nome={depoimentoState[5].nome} avatar={depoimentoState[5].foto} text={depoimentoState[5].texto} key={depoimentoState[5].index}  />

          </SwiperSlide>

        </Swiper>


          {/* {depoimentoState.filter((value, index)=> index < 3).map( (card)=> {
              return <Depoimento nome={card.nome} avatar={card.foto} text={card.texto} key={card.index}  />
        })} */}
      </div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', position: 'absolute', top: '60%'}}>
      {/* <button onClick={()=> sliderDepoimento(2)} style={{backgroundColor: 'white', border: 'none', cursor: 'pointer' }}><StaticImage src="./../images/arrow-alt-circle-right-solid-2.png" /> </button>
      <button onClick={()=> sliderDepoimento(1)} style={{backgroundColor: 'white', border: 'none', cursor: 'pointer' }}><StaticImage src="./../images/arrow-alt-circle-right-solid.png" /> </button> */}
      </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '80px'}}>
      <Botao size={'250px'} color={'rgb(247, 239, 174)'} height={'50px'} border={'none'}> Agende uma reunião</Botao>
     </div>   
      </>
  )
}

export default Depoimentos
