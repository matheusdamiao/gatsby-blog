import React from 'react'
import { graphql, Link } from 'gatsby'
import MenuDesktop from '../components/MenuDesktop'

const blogPostagem = ({data}) => {

    const post = data.markdownRemark
    const { previous, next } = data;

  return (
    <>
    
      <MenuDesktop />
    <article className='blog-post'>
      <header className='blog-post-header'>
        <h1>{post.frontmatter.title}</h1>
        <div className='blog-post-header-avatar'>
             <small> {post.frontmatter.date}</small>
             {/* <img src={post.frontmatter.avatar??} /> */}
        </div>
        <img width={1000} src={post.frontmatter.imagem}/>
      </header>      
      
      <section 
      className='blog-post-body'
        dangerouslySetInnerHTML={{ __html: post.html }}
       />
    </article> 




    <h3 className='posts-antes-depois-header'> Conheça outros artigos em nosso blog</h3>


    <div className='posts-antes-depois'>


            {previous &&
        <div className='post-antes'>

            <Link to={previous.fields.slug}><p> Anterior </p> </Link>
            <img src={previous.frontmatter.imagem}/>
            <small>{previous.frontmatter.date}</small>
            <h3>{previous.frontmatter.title}</h3>
            
        </div>
            }
            {next && 
        <div className='post-depois'>
            <Link to={next.fields.slug}><p> Próximo </p></Link>
            <img  src={next.frontmatter.imagem}/>
            <small>{next.frontmatter.date}</small>
            <h3>{next.frontmatter.title}</h3>
        </div>
            
            }

    </div>
    </>
  )
}

export default blogPostagem

export const pageQuery = graphql`
  query BlogPost(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description 
        imagem
      }
    }

    
    allImageSharp(filter: {id: {eq: $id}}) {
      nodes {
        gatsbyImageData
        id
      }
    }
    
    

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        imagem
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        imagem
      }
    }
  }
`
