import React from 'react'
import MenuDesktop from '../components/MenuDesktop'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'
import { Link, graphql } from "gatsby"


const blog = ({data}) => {

    const postagens = data.allMarkdownRemark.nodes


  return (
    <>
    <MenuDesktop/>
        <div className='about-hero'>
            <div className='about-hero-content'>
                <h1 style={{fontSize: '3.5em', lineHeight: '60px'}} >Conheça melhor os direitos de sua família</h1>
                <h3> Leia os artigos em nosso blog e saiba mais</h3>
            </div>

            <div className='about-hero-picture'>
                <StaticImage
                src='./../images/pexels-andrea-piacquadio-3820203 2.png'
                width={450}
                quality={100} />
            </div>

        </div>

            <h2 style={{textAlign: 'center'}}> Nosso Blog </h2>
            
        <div className='blog-page'>
                  
            {postagens.map((post)=>{
                return(

                <Link to={post.fields.slug} >
                <div style={{maxWidth: '400px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{alignText: 'center'}}> {post.frontmatter.title}</h2>
                    <img src={post.frontmatter.imagem} width={250}/>

                    <p> {post.frontmatter.date} </p>
                    <p> {post.frontmatter.description}</p>
                </div>
                </Link>    
                )
            })}



        </div>


    <Footer/>
    </>
  )
}

export default blog


export const pageQ = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          imagem
        }
      }
    }
  }
`