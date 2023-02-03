import React, { useEffect, useState } from "react"
import MenuDesktop from "../components/MenuDesktop"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import CardBlog from "../components/CardBlog"
import HashTag from "../components/HashTag"
import SearchIcon from "./../images/search-icon.svg"
import TagsIcon from "./../images/tags-icon.svg"
import fotobg from "./../images/hero-blog-foto.png"
import NewBlogSection from "../components/NewBlogSection"

const Blog = ({ data }) => {
  const queryData = data.allMarkdownRemark.nodes

  const emptyInput = ""
  const [searchState, setSearchState] = useState({
    postsFiltrados: [],
    query: emptyInput,
  })

  const [fullPostsList, setFullPostsList] = useState([])

  const inputFunction = e => {
    const query = e.target.value
    const postsFiltrados = fullPostsList.filter(post => {
      return (
        (post.props.author &&
          post.props.author.toLowerCase().includes(query.toLowerCase())) ||
        post.props.title.toLowerCase().includes(query.toLowerCase()) ||
        (post.props.hashtags &&
          post.props.hashtags
            .join(",")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setSearchState({
      query,
      postsFiltrados,
    })
  }

  const getAllPostsInfo = posts => {
    const postList = posts.map(post => {
      return (
        <CardBlog
          title={post.frontmatter.title}
          link={post.fields.slug}
          imagem={post.frontmatter.imagem}
          data={post.frontmatter.date}
          description={post.frontmatter.description}
          hashtags={post.frontmatter.hashtags}
          author={post.frontmatter.author}
          avatar={post.frontmatter.avatar}
        />
      )
    })

    setFullPostsList(postList)
  }

  useEffect(() => {
    getAllPostsInfo(queryData)
    console.log(fullPostsList)
  }, [])

  const { postsFiltrados, query } = searchState
  const temInput = postsFiltrados && query !== emptyInput
  const postagens = temInput ? postsFiltrados : fullPostsList

  return (
    <>
      <MenuDesktop />
      <div className="blog-hero">
        <div className="blog-hero-content">
          <p>Blog</p>
          <h1>Conheça melhor os direitos de sua família</h1>
          <h3> Leia os artigos em nosso blog e saiba mais</h3>
        </div>

        <div className="blog-hero-picture">
          <img src={fotobg} />
        </div>
      </div>

      <NewBlogSection />

      <div className="blog-title-div">
        <h4> todos os artigos</h4>
        <h2> Aprenda mais sobre seus direitos </h2>
      </div>

      <div className="search-div">
        <div className="div-input">
          <img src={SearchIcon} width={20} />
          <input
            className="search-input"
            type="text"
            onChange={e => inputFunction(e)}
          />
          <button> Pesquisar </button>
        </div>

        {/* <div className="search-hashtags">
          <div className="tags">
            <img src={TagsIcon} width={25} />
            <p> tags </p>
          </div> */}
        {/* {fullPostsList.map((post)=>{
                 return  <HashTag>{post.props.hashtags}</HashTag>
                            
                })} */}
        {/* </div> */}
      </div>

      <div className="blog-page">{postagens}</div>

      <Footer />
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
