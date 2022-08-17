import React from 'react'
import Card from './Card'
import Botao from './Botao'
import { getImage} from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

const AreasDeAtuacao = () => {
  const data = useStaticQuery(graphql`
  query {
    
   icone1: file(relativePath: {eq: "icon-1.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  

   
   icone2: file(relativePath: {eq: "icon-2.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  

   
   icone3: file(relativePath: {eq: "icon-3.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  
  } 
  `
 )

 const { icone1, icone2, icone3 } = data
       
    const cardData = [
        {
        icone: getImage(icone1),
        title: 'Guarda' ,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue',
        }, 
        {         
        icone: getImage(icone2),    
        title: 'Divórcio',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue'   
        },
        {
        icone: getImage(icone3),             
        title: 'Pensão Alimentícia',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' 
        },
        {
        icone: getImage(icone1),
        title: 'Guarda' ,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue',
        }, 
        {         
        icone: getImage(icone2),    
        title: 'Divórcio',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue'   
        },
        {
        icone: getImage(icone3),             
        title: 'Pensão Alimentícia',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' 
        }
        
    ] 
     

    const cardsStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            maxWidth: '1200px'
            
    }

  return (
    <div id='atuacao' style={{display: 'flex', alignItems: 'center', flexWrap: 'nowrap', flexDirection: 'column', marginTop: '100px'}} >
      <h2  style={{textAlign: 'center', fontWeight: 'light', width: '100%', fontFamily: 'Caudex', marginBottom: '0', fontSize: '2.5em'}}> Atuação em Direito da Família e Sucessões </h2>
      <p style={{marginBottom:'70px', padding: '20px', textAlign: 'center'}}> Algumas áreas em que prestamos serviços aos nossos clientes </p>
      <div style={cardsStyle}>
        {cardData.map( (card)=> {
          return  <Card icon={card.icone} title={card.title}> {card.body}</Card>
                    
                  
        })
      }
      </div>
       
    
      <div style={{margin: '20px 20px'}} >
      <Botao size={'250px'} color={'rgb(247, 239, 174)'} height={'50px'} border={'none'} >
        Agende uma reunião
      </Botao>
      </div>
    </div>
  )
}

export default AreasDeAtuacao
