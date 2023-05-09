import React, { useState } from "react"
import { graphql } from "gatsby"
import MenuDesktop from "../components/MenuDesktop"
import CardBlog from "../components/CardBlog"
import Footer from "../components/Footer"
import Seo from "../components/seo"
import linkedin from "./../images/linkedin-logo.svg"
import facebook from "./../images/facebook-logo.svg"
import twitter from "./../images/twitter-logo.svg"
import copy from "./../images/copy-paste.svg"

const BlogPostagem = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next, site } = data

  const [copyStatus, setCopyStatus] = useState("Copiar link")

  const copyLink = () => {
    if (copyStatus === "Copiado!") {
      setCopyStatus("Copiar link")
      navigator.clipboard.writeText("")
      return
    }
    navigator.clipboard.writeText(
      `${site.siteMetadata.siteUrl + post.fields.slug}`
    )
    setCopyStatus("Copiado!")
  }

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <MenuDesktop />

      <article className="blog-post">
        <header className="blog-post-header">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-header-avatar">
            <small> {post.frontmatter.date}</small>
          </div>
          <img width={1000} src={post.frontmatter.imagem} alt="" />
        </header>

        <section
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <span className="span-bio"></span>
        <div className="blog-post-bio">
          <img src={post.frontmatter.avatar} alt="" />
          <div className="blog-post-author">
            <p className="blog-author-name"> {post.frontmatter.author} </p>
            <p>Advogada especialista em direito familliarista</p>
          </div>
        </div>
        <span className="span-bio"></span>
      </article>

      <div className="share-post">
        <h3> Compartilhe este artigo </h3>
        <div className="links">
          <ul>
            <a
              rel="noopener noreferrer"
              href={
                "https://www.linkedin.com/shareArticle?url=" +
                site.siteMetadata.siteUrl +
                post.fields.slug
              }
              target="_blank"
            >
              <img src={linkedin} width={50} alt="" />
            </a>
          </ul>
          <ul>
            <a
              rel="noopener noreferrer"
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                site.siteMetadata.siteUrl +
                post.fields.slug
              }
              target="_blank"
            >
              <img src={facebook} width={50} alt="" />
            </a>
          </ul>
          <ul>
            <a
              rel="noopener noreferrer"
              href={
                "https://www.twitter.com/share?url=" +
                site.siteMetadata.siteUrl +
                post.fields.slug
              }
              target="_blank"
            >
              <img src={twitter} width={50} alt="" />
            </a>
          </ul>
          <ul>
            <button className="copy-btn" onClick={() => copyLink()}>
              {" "}
              <img src={copy} width={50} alt="" /> {copyStatus}{" "}
            </button>
          </ul>
        </div>
      </div>

      <h3 className="posts-antes-depois-header">
        {" "}
        Conheça outros artigos em nosso blog
      </h3>

      <div className="posts-antes-depois">
        {previous && (
          <div>
            <a style={{ paddingLeft: "20px" }} href={previous.fields.slug}>
              {" "}
              Anterior
            </a>
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
        )}
        {next && (
          <div>
            <a
              style={{ textAlign: "right", display: "block" }}
              href={next.fields.slug}
            >
              {" "}
              Próximo{" "}
            </a>
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
        )}
      </div>
      <Footer />
    </>
  )
}

export default BlogPostagem

export const pageQuery = graphql`
  query BlogPost($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }

    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
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
