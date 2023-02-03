import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCards, Navigation, Pagination, Parallax } from "swiper"
import NewCardBlog from "./NewCardBlog"
import * as style from "./NewBlogsection.module.css"
import { graphql, useStaticQuery } from "gatsby"

const NewBlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            imagem
            description
            hashtags
            date(formatString: "DD/MM/YYYY")
            author
            avatar
          }
          excerpt
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
        <h4> blog </h4>
        <h2> Conheça nossas últimas publicações </h2>
      </div>

      <div className={style.divSlider}>
        <Swiper
          modules={[Navigation, Pagination, EffectCards, Autoplay, Parallax]}
          className={style.swiperDepoimentoPrincipal}
          breakpoints={{
            800: {
              slidesPerView: 1,
              gap: 150,
            },
            1000: {
              slidesPerView: 2.1,
            },
          }}
          pagination={{
            clickable: "true",
            type: "bullets",
          }}
          gap={20}
          Navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          parallax={{
            parallax: true,
            enabled: true,
          }}
        >
          <SwiperSlide>
            <NewCardBlog
              title={post1.frontmatter.title}
              imagem={post1.frontmatter.imagem}
              date={post1.frontmatter.date}
              description={post1.excerpt}
              hashtags={post1.frontmatter.hashtags}
              avatar={post1.frontmatter.avatar}
              bio="Advogada especialista em Direito da Família"
              nome={post1.frontmatter.author}
              oab="23920"
              link={post1.fields.slug}
            />
          </SwiperSlide>

          <SwiperSlide>
            <NewCardBlog
              title={post2.frontmatter.title}
              imagem={post2.frontmatter.imagem}
              date={post2.frontmatter.date}
              description={post2.excerpt}
              hashtags={post2.frontmatter.hashtags}
              avatar={post2.frontmatter.avatar}
              bio="Advogada especialista em Direito da Família"
              nome={post2.frontmatter.author}
              oab="23920"
              link={post2.fields.slug}
            />
          </SwiperSlide>

          <SwiperSlide>
            <NewCardBlog
              title={post3.frontmatter.title}
              imagem={post3.frontmatter.imagem}
              date={post3.frontmatter.date}
              description={post3.excerpt}
              hashtags={post3.frontmatter.hashtags}
              avatar={post3.frontmatter.avatar}
              bio="Advogada especialista em Direito da Família"
              nome={post3.frontmatter.author}
              oab="23920"
              link={post3.fields.slug}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default NewBlogSection
