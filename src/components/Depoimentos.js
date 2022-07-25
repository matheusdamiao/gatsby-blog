import { getImage, StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import Depoimento from './Depoimento'
import { useStaticQuery, graphql } from 'gatsby'
import Botao from './Botao'
import Icone from './../images/icone-depo.png'

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
       texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
      },
      {  
      nome: 'João',
      foto: getImage(avatar2),
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
      },
       {  
      nome: 'Pedro',
      foto: getImage(avatar3),
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
      },
      {  
        nome: 'Henrique',
        foto: getImage(avatar2),
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
        },
        {  
          nome: 'Luana',
          foto: getImage(avatar2),
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
          },
          {  
            nome: 'Zaara',
            foto: getImage(avatar2),
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
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

    const sliderDepoimento = (direcao)=> {
      

      if (direcao === 1) {
        let removido = depoimentoState.shift();
        depoimentoState.push(removido);
        setDepoimentoState([...depoimentoState])
        return
      }
      else { 

        let ultimo = depoimentoState[depoimentoState.length - 1]
        let removido = depoimentoState.pop()
        setDepoimentoState([depoimentoState.splice(2, removido)])   
        setDepoimentoState([depoimentoState.unshift(ultimo)])
        setDepoimentoState([...depoimentoState])
        console.log(removido)
        return
      }

       }
  
   


  return (
    <>
    <div style={{position: 'relative', width: '100%'}}>
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <img src={Icone} />
      <h1 style={{textAlign: 'center', marginTop: '100px', marginBottom: '100px'}}> Depoimentos</h1>
      </div>
      <div style={style}>
          {depoimentoState.filter((value, index)=> index < 3).map( (card)=> {
              return <Depoimento nome={card.nome} avatar={card.foto} text={card.texto} key={card.index}  />
        })}
      </div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', position: 'absolute', top: '60%'}}>
      <button onClick={()=> sliderDepoimento(2)} style={{backgroundColor: 'white', border: 'none', cursor: 'pointer' }}><StaticImage src="./../images/arrow-alt-circle-right-solid-2.png" /> </button>
      <button onClick={()=> sliderDepoimento(1)} style={{backgroundColor: 'white', border: 'none', cursor: 'pointer' }}><StaticImage src="./../images/arrow-alt-circle-right-solid.png" /> </button>
      </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom: '80px'}}>
      <Botao size={'250px'} color={'rgb(247, 239, 174)'} height={'50px'} border={'none'}> Agende uma reunião</Botao>
     </div>   
      </>
  )
}

export default Depoimentos
