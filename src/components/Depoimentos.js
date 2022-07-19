import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import Depoimento from './Depoimento'
import { useStaticQuery, graphql } from 'gatsby'

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

    
   const depoimentos = [
    {  
     nome: 'Maria',
     foto: getImage(avatar1),
     texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
    },
    {  
    nome: 'Jonas',
    foto: getImage(avatar2),
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
    },
     {  
    nome: 'João',
    foto: getImage(avatar3),
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue, sed ultrices tortor fermentum.'
    }
   ]


   const style = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxWidth: '100%'
   }




  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '200px', marginBottom: '100px'}}> Depoimentos</h1>
    <div style={style}>
        {depoimentos.map( (card)=> {
            return <Depoimento nome={card.nome} avatar={card.foto} text={card.texto}   />
      })}
    </div>
    </>
  )
}

export default Depoimentos
