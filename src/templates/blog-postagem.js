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

      <div className='avatar-blog-card'>
          <img src={post.frontmatter.avatar} width={40}/> 
            <p> {post.frontmatter.author} </p>
      </div>
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
            
              />
              </div>

            }
            {next && 
        // <div className='post-depois'>
        //     <Link to={next.fields.slug}><p style={{textAlign: 'right'}}> Próximo </p></Link>
        //     <div className='div-foto'>
        //       <img  src={next.frontmatter.imagem}/>
        //     </div>
        //     <small>{next.frontmatter.date}</small>
        //     <h3>{next.frontmatter.title}</h3>
        //     <p>{next.frontmatter.hashtags}</p>

        // </div>

        <div>
        <a style={{textAlign: 'right', display: 'block'}}href={next.fields.slug}> Próximo </a>
        <CardBlog 
        link={next.fields.slug}
        title={next.frontmatter.title}
        imagem={next.frontmatter.imagem}
        data={next.frontmatter.date}
        hashtags={next.frontmatter.hashtags}
      
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
        date(formatString: "DD/MM/YYYY")
        imagem
        hashtags
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

      }
    }
  }
`
