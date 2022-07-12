import React from 'react'
import { graphql } from "gatsby"
import Bio from './../components/bio'
import Botao from './../components/Botao'

const teste = ({data}) => {

  return (
    <div>
        {data.allMarkdownRemark.nodes.map( (pic) => {
            return <ul>
                <h1> {pic.frontmatter.title}</h1>
                <p> {pic.frontmatter.description}</p>
                <img src={pic.frontmatter.imagem} alt="algo"/> 
                
            </ul>
        })
        }
        <Bio />
        <Botao size={'200px'} color={'#AE8FAF'} height={'50px'}> Testando botao </Botao>
    </div>
  )
}

export default teste


export const pageQuery = graphql`

  query  {
    allMarkdownRemark(filter: {id: {eq: "51609dd1-85f6-50bb-981d-d27a9e6fd7e3"}}) {
      nodes {
        frontmatter {
          title
          description
          date
          thumbnail
          imagem
        }
        id
      }
    }
  }

  
  

`