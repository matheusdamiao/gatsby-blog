import React, { useEffect, useState } from 'react'
import MenuDesktop from '../components/MenuDesktop'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'
import { graphql } from "gatsby"
import CardBlog from '../components/CardBlog'
import HashTag from '../components/HashTag'

const Blog = ({data}) => {

    const postagens = data.allMarkdownRemark.nodes

    

    const [inputState, setInputState] = useState('')

    const [hashTags, setHashTags] = useState([])


    useEffect(()=>{

      
      const tags = postagens.map(posts =>  posts.frontmatter.hashtags)
      const arrayTags = tags.filter(tag => tag !== null)
      
      console.log(arrayTags)

      const umaArray = arrayTags.join(',').split(',');
      console.log(umaArray)
      
      let arrayFiltrado = umaArray.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1
        console.log(obj)
        return obj
      },[])
   
      let tagsNames = []
      for (let key in arrayFiltrado){
        tagsNames.push({tag: key, value: arrayFiltrado[key]})
      }

      tagsNames.sort((a,b) => b.value - a.value);
      console.log(tagsNames)
      setHashTags(tagsNames)

      
    
    


    },[inputState])




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

          <div className='search-div'>
            <input className ='search-input' type='text' placeholder='pesquise no blog...' value={inputState} onChange={(e)=> setInputState(e.target.value)}/>
            
            <div className='search-hashtags'>
              <p> tags populares </p>
                {hashTags && hashTags.map((tag)=> 
              {return  <span onClick={()=>setInputState(tag.tag)} style={{cursor: 'pointer'}}>
                <HashTag color='#FEFFD9'> #{tag.tag}</HashTag>
                
            </span> 
              })}
            </div>
          </div>

        <div className='blog-page'>
         {postagens.map((post)=> {

          return <CardBlog
                  title={post.frontmatter.title}
                  link={post.fields.slug}
                  imagem={post.frontmatter.imagem}
                  data={post.frontmatter.date}
                  description={post.frontmatter.description}
                  hashtags={post.frontmatter.hashtags}
                  author={post.frontmatter.author}
                  avatar={post.frontmatter.avatar}
                  />
         })}   
           
        </div>


    <Footer/>
    </>
  )
}

export default Blog


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
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          imagem
          hashtags
          author
          avatar
        }
      }
    }
  }
`