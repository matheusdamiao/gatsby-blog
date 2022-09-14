import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import NewCardBlog from './NewCardBlog'
import * as style from './NewBlogsection.module.css'
import { graphql, useStaticQuery } from 'gatsby'


const NewBlogSection = () => {


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

const blogPosts = data.allMarkdownRemark.nodes
const [post1, post2, post3] = blogPosts
console.log(post2)

  return (
    <div className={style.divPrincipal}>
        <div className={style.divTitulo}>
            <h4> artigos selecionados </h4>
            <h2> Últimas postagens </h2>
        </div>

        <div className={style.divSlider}>
            <Swiper>
            
                <SwiperSlide>
                    <NewCardBlog 
                    title={post1.frontmatter.title}
                    imagem={post1.frontmatter.imagem}
                    date={post1.frontmatter.date}
                    // description={post1.frontmatter.description}
                    hashtags={post1.frontmatter.hashtags}
                    avatar={post1.frontmatter.avatar}
                    bio='Advogada especialista em Direito da Família'
                    nome={post1.frontmatter.author}
                    oab='23920' />
                </SwiperSlide> 

                <SwiperSlide>
                    <NewCardBlog 
                    title={post2.frontmatter.title}
                    imagem={post2.frontmatter.imagem}
                    date={post2.frontmatter.date}
                    // description={post2.frontmatter.description}
                    hashtags={post2.frontmatter.hashtags}
                    avatar={post2.frontmatter.avatar}
                    bio='Advogada especialista em Direito da Família'
                    nome={post2.frontmatter.author}
                    oab='23920' />
                </SwiperSlide> 


                <SwiperSlide>
                    <NewCardBlog 
                    title={post3.frontmatter.title}
                    imagem={post3.frontmatter.imagem}
                    date={post3.frontmatter.date}
                    // description={post3.frontmatter.description}
                    hashtags={post3.frontmatter.hashtags}
                    avatar={post3.frontmatter.avatar}
                    bio='Advogada especialista em Direito da Família'
                    nome={post3.frontmatter.author}
                    oab='23920' />
                </SwiperSlide> 
          
            </Swiper>
        </div>
    </div>
  )
}

export default NewBlogSection
