import React from 'react'
import { graphql, Link } from 'gatsby'
import MenuDesktop from '../components/MenuDesktop'
import CardBlog from '../components/CardBlog'

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
      <span className='span-bio'></span>
      <div className='blog-post-bio'>
        
        <img src={post.frontmatter.avatar}/> 
        <div className='blog-post-author'>
          <p className='blog-author-name'> {post.frontmatter.author} </p>
          <p>Advogada especialista em direito familliarista</p>
        </div>
        
      </div>
      <span className='span-bio'></span>
    </article> 




    <h3 className='posts-antes-depois-header'> Conheça outros artigos em nosso blog</h3>


    <div className='posts-antes-depois'>


            {previous &&
        
              <div>
              <a style={{paddingLeft: '20px'}}href={previous.fields.slug}> Anterior</a>
              <CardBlog 
              link={previous.fields.slug}
              title={previous.frontmatter.title}
              imagem={previous.frontmatter.imagem}
              data={previous.frontmatter.date}
              hashtags={previous.frontmatter.hashtags}
              author={previous.frontmatter.author}
              avatar={previous.frontmatter.avatar}
              />
              </div>

            }
            {next && 
       

              <div>
              <a style={{textAlign: 'right', display: 'block'}}href={next.fields.slug}> Próximo </a>
              <CardBlog 
              link={next.fields.slug}
              title={next.frontmatter.title}
              imagem={next.frontmatter.imagem}
              data={next.frontmatter.date}
              hashtags={next.frontmatter.hashtags}
              author={next.frontmatter.author}
              avatar={next.frontmatter.avatar}
              />

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
        date(formatString: "DD/MM/YYYY")
        description
        hashtags
        imagem
        author
        avatar
      }
    }

      

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        imagem
        hashtags
        author
        avatar
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        imagem
        hashtags
        author
        avatar

      }
    }
  }
`
