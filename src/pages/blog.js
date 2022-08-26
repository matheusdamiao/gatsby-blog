import React, { useEffect, useState } from 'react'
import MenuDesktop from '../components/MenuDesktop'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer'
import { graphql } from "gatsby"
import CardBlog from '../components/CardBlog'
import HashTag from '../components/HashTag'
import SearchIcon from './../images/search-icon.svg'
import TagsIcon from './../images/tags-icon.svg'



const Blog = ({data}) => {

    const queryData = data.allMarkdownRemark.nodes
    
 
    const emptyInput = '';
    const [searchState, setSearchState] = useState({
      postsFiltrados: [],
      query: emptyInput,
    })

    const [fullPostsList, setFullPostsList] = useState([])


    const inputFunction = (e) => {
      const query = e.target.value;
      const postsFiltrados = fullPostsList.filter((post)=> {
        return (
           (post.props.author && post.props.author.toLowerCase().includes(query.toLowerCase()) )||
           post.props.title.toLowerCase().includes(query.toLowerCase()) || 
           (post.props.hashtags && post.props.hashtags.join(',').toLowerCase().includes(query.toLowerCase()))
           
        )
      })


      setSearchState({
        query,
        postsFiltrados
      })
      
    }

    
    const getAllPostsInfo = (posts) => {

      const postList = posts.map((post)=>{
        return  <CardBlog
                    title={post.frontmatter.title}
                    link={post.fields.slug}
                    imagem={post.frontmatter.imagem}
                    data={post.frontmatter.date}
                    description={post.frontmatter.description}
                    hashtags={post.frontmatter.hashtags}
                    author={post.frontmatter.author}
                    avatar={post.frontmatter.avatar}
        />
      })

      setFullPostsList(postList)
    }


    useEffect(()=>{

      getAllPostsInfo(queryData)
      console.log(fullPostsList)
      // const tags = postagens.map(posts =>  posts.frontmatter.hashtags)
      // const arrayTags = tags.filter(tag => tag !== null)
            
      // const umaArray = arrayTags.join(',').split(',');
            
      // let arrayFiltrado = umaArray.reduce((obj, b) => {
      //   obj[b] = ++obj[b] || 1
      //   return obj
      // },[])
   
      // let tagsNames = []
      // for (let key in arrayFiltrado){
      //   tagsNames.push({tag: key, value: arrayFiltrado[key]})
      // }

      // tagsNames.sort((a,b) => b.value - a.value);
      
      // setHashTags(tagsNames)

      // const titles = postagens.map( title => title.frontmatter.title)
      // setTitles(titles)
  
      // search(inputState)
    

    },[])


  const { postsFiltrados, query } = searchState
  const temInput = postsFiltrados && query !== emptyInput;
  const postagens = temInput ? postsFiltrados : fullPostsList


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
            <div className='div-input'>
              <img src={SearchIcon} width={20}/>
              <input className ='search-input' type='text' onChange={e => inputFunction(e)}/>
              <button> Pesquisar </button>
            </div>

            <div className='search-hashtags'>
              <div className='tags'>
                <img src={TagsIcon} width={25} />
                <p> tags </p> 
              </div>
                {/* {fullPostsList.map((post)=>{
                 return  <HashTag>{post.props.hashtags}</HashTag>
                            
                })} */}
            </div>
          </div>

              
        <div className='blog-page'>
            
            {postagens}

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