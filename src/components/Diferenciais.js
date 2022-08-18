import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Diferenciais = () => {

    const data = useStaticQuery(graphql`
  query {
    
   icone1: file(relativePath: {eq: "icon-10.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
     
   icone2: file(relativePath: {eq: "icon-11.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
     
   icone3: file(relativePath: {eq: "icon-12.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  
    icone4: file(relativePath: {eq: "icon-13.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }

  }
  `
    )


  const { icone1, icone2, icone3, icone4} = data

  const cardInfo = [
    {
        icone: getImage(icone1),
        body: 'Atendimento humanizado'
    },
    {
        icone: getImage(icone2),
        body: 'Experiência na área'
    },
    {
        icone: getImage(icone3),
        body: 'Sensibilidade e Respeito'
    },
    {
        icone: getImage(icone4),
        body: 'Acompanhe seu processo'
    }

  ]


  return (
    <div>
        
        <div style={{height: '100%', marginTop: '100px', backgroundColor: 'rgba(240,229,240, 0.1)', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>

        <h2 style={{width: '100%', textAlign: 'center', fontSize: '3.5rem', fontFamily:'Caudex', fontWeight: '700', fontStyle: 'normal', lineHeight: '90%', letterSpacing: '1px', color: 'rgb(63, 63, 63)'}} >Por que contratar especialistas <br/> em Direito Familiarista?</h2>

        {cardInfo.map( (card) =>{
            return <div style={{width: '200px', height: '250px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '40px'}}> 
                        
                        <GatsbyImage
                        image={card.icone}
                        alt='icone'   
                        quality={100}           
                        width={300}
                        />
                        
                        <p>{card.body}</p>
                    </div>
        })}


        </div>
    </div>
  )
}

export default Diferenciais
