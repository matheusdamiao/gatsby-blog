import { getImage, StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import Depoimento from './Depoimento'
import { useStaticQuery, graphql } from 'gatsby'
import Botao from './Botao'

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
    maxWidth: '100%',
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
    <div style={{position: 'absolute', width: '100%'}}>
      <h1 style={{textAlign: 'center', marginTop: '200px', marginBottom: '100px'}}> Depoimentos</h1>
      <div style={style}>
          {depoimentoState.filter((value, index)=> index < 3).map( (card)=> {
              return <Depoimento nome={card.nome} avatar={card.foto} text={card.texto}   />
        })}
      </div>
      <button onClick={()=> sliderDepoimento(2)} style={{backgroundColor: 'white', position:'absolute', right: '95%', top: '70%', border: 'none', cursor: 'pointer' }}><StaticImage src="./../images/arrow-alt-circle-right-solid-2.png" /> </button>
      <button onClick={()=> sliderDepoimento(1)} style={{backgroundColor: 'white', position:'absolute', left: '95%', top: '70%', border: 'none', cursor: 'pointer' }}><StaticImage src="./../images/arrow-alt-circle-right-solid.png" /> </button>
    </div>
  )
}

export default Depoimentos
