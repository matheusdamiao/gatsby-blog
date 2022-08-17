import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import CardBlog from './CardBlog'

const BlogSection = () => {

const data = useStaticQuery(graphql`
query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
    nodes {
      frontmatter {
         date
         hashtags
         imagem
         title
            }
        fields {
          slug
              }   
          }
        }
    }
`)

    const blogPost = data.allMarkdownRemark.nodes;



  return (
    <div style={{width: '100%', height:'100vh', backgroundColor: '#F0E5F0', display: 'flex', alignItems: 'center'}}>
        {blogPost.map((post)=>{
            return <CardBlog  
            link={post.fields.slug}
            title={post.frontmatter.title}
            imagem={post.frontmatter.image} 
            data={post.frontmatter.date}
            hashtags={post.frontmatter.hashtags}/>
        })}    
      
    </div>
  )
}

export default BlogSection
