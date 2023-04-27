import React, { useEffect, useState } from "react"
import MenuDesktop from "../components/MenuDesktop"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import CardBlog from "../components/CardBlog"
import SearchIcon from "./../images/search-icon.svg"
import fotobg from "./../images/hero-blog-foto.png"
import NewBlogSection from "../components/NewBlogSection"
import Seo from "../components/seo"
import HashTag from "../components/HashTag"
import TagIcon from "./../images/tags-icon.svg"
import { motion } from "framer-motion"

const Blog = ({ data }) => {
  const queryData = data.allMarkdownRemark.nodes

  const emptyInput = ""
  const [searchState, setSearchState] = useState({
    postsFiltrados: [],
    query: emptyInput,
  })

  const [fullPostsList, setFullPostsList] = useState([])

  const inputFunction = (e, q) => {
    let query
    if (q) {
      query = q
    } else {
      query = e.target.value
    }
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
    console.log(postsFiltrados, query)
  }, [searchState])

  // Posts render logic
  const { postsFiltrados, query } = searchState
  const temInput = postsFiltrados && query !== emptyInput
  const postagens = temInput ? postsFiltrados : fullPostsList

  // tags
  const [showTags, setShowTags] = useState([])

  useEffect(() => {
    organizeTags()
  }, [])

  const organizeTags = () => {
    let tags = []
    let allTags = queryData.map(post => {
      tags.push(post.frontmatter.hashtags)
    })
    let uniqueTags = tags
      .flat()
      .filter((v, i, a) => a.indexOf(v) == i)
      .join(", ")

    let clickableTags = uniqueTags.split(", ").map(tag => (
      <HashTag
        backgroundColor="#AE8FAF"
        color="white"
        setSearchState={setSearchState}
        tag={tag}
      >
        {tag}
      </HashTag>
    ))
    console.log(clickableTags)
    setShowTags(clickableTags)
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -200,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 200,
      }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
      <Seo title="Blog" />
      <MenuDesktop />
      <div className="blog-hero">
        <div className="blog-hero-content">
          <p>Blog</p>
          <h1>Conheça melhor os direitos de sua família</h1>
          <h3> Leia os artigos em nosso blog e saiba mais</h3>
        </div>

        <div className="blog-hero-picture">
          <img src={fotobg} alt="" />
        </div>
      </div>

      <NewBlogSection />

      <div className="blog-title-div">
        <h4> todos os artigos</h4>
        <h2> Aprenda mais sobre seus direitos </h2>
      </div>

      <div className="search-div">
        <div className="div-input">
          <img src={SearchIcon} width={20} alt="" />
          <input
            className="search-input"
            type="text"
            value={"" || searchState.query}
            onChange={e => inputFunction(e)}
          />
          <button onClick={e => inputFunction(e, query)}> Pesquisar </button>
        </div>

        <div className="search-hashtags">
          <div className="tags">
            <img src={TagIcon} width={30} />
            {/* <p> tags </p> */}
            <div className="arrayTags">{showTags}</div>
          </div>
        </div>
      </div>

      <div className="blog-page">{postagens}</div>

      <Footer />
    </motion.div>
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
