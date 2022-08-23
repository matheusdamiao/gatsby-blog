import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import CardBlog from './CardBlog'
import Book from './../images/book-svg.svg'

const BlogSection = () => {

const data = useStaticQuery(graphql`
query {
  allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        imagem
        hashtags
        date (formatString: "DD/MM/YYYY")
        author
        avatar
      }
      fields {
        slug
      }
    }
  }
}
`)

          

  return (
    <div style={{width: '100%', height:'100%', marginTop: '150px'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingBottom: '50px'}}>
        <img src={Book} width={100}/>
        <div>
          <h1 style={{paddingLeft: '40px', marginBottom: '10px', fontSize: '3.5rem', fontFamily:'Caudex', fontWeight: '700', fontStyle: 'normal', lineHeight: '90%', letterSpacing: '1px', color: 'rgb(63, 63, 63)'}}> Últimas Postagens</h1>
          <p style={{textAlign: 'center', paddingLeft: '40px'}}>Artigos e notíciais relacionadas ao direito da família</p>
        </div>
      </div>
      
      

      <div style={{width: '100%',flexWrap: 'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          {data.allMarkdownRemark.nodes.map((post)=>{
              return <CardBlog  
              link={post.fields.slug}
              title={post.frontmatter.title}
              imagem={post.frontmatter.imagem} 
              data={post.frontmatter.date}
              hashtags={post.frontmatter.hashtags}
              author={post.frontmatter.author}
              avatar={post.frontmatter.avatar}
              />
          })}    
        
      </div>
    </div>
  )
}

export default BlogSection
