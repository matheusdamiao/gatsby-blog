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

    const postagens = data.allMarkdownRemark.nodes

    
    const [inputState, setInputState] = useState('')


    const inputFunction = (e) => {
      setInputState(e.target.value)
      
    }




    const [hashTags, setHashTags] = useState([])

    

    const [titles, setTitles] = useState([])

  
    const [searchState, setSearchState] = useState([])


    const search = (input) =>{
     
      
      const titlesFilter = titles.filter( title => title.match(input))
      
      console.log(titlesFilter)
  
      const postagensFiltradas = postagens.filter( post => post.frontmatter.title.match(titlesFilter))

         
      setSearchState(postagensFiltradas)
      console.log(postagensFiltradas)


      const postagensComFiltro = postagens.filter(post => post.frontmatter.title);


     

    }
  
   


    useEffect(()=>{

      
      const tags = postagens.map(posts =>  posts.frontmatter.hashtags)
      const arrayTags = tags.filter(tag => tag !== null)
      
      // console.log(arrayTags)

      const umaArray = arrayTags.join(',').split(',');
      // console.log(umaArray)
      
      let arrayFiltrado = umaArray.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1
        return obj
      },[])
   
      let tagsNames = []
      for (let key in arrayFiltrado){
        tagsNames.push({tag: key, value: arrayFiltrado[key]})
      }

      tagsNames.sort((a,b) => b.value - a.value);
      // console.log(tagsNames)


      setHashTags(tagsNames)



      const titles = postagens.map( title => title.frontmatter.title)
      setTitles(titles)
      
      
      


      search(inputState)
      
    


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
            <div className='div-input'>
              <img src={SearchIcon} width={20}/>
              <input className ='search-input' type='text' value={inputState} onChange={e => inputFunction(e)}/>
              <button onClick={()=> inputState !== '' ? search() : setInputState('')}> Pesquisar </button>
            </div>

            <div className='search-hashtags'>
              <div className='tags'>
                <img src={TagsIcon} width={25} />
                <p> tags </p> 
              </div>
                {hashTags && hashTags.map((tag)=> 
              {return  <span onClick={()=>setInputState(tag.tag)} style={{cursor: 'pointer'}}>
                <HashTag color='#FEFFD9'> {tag.tag}</HashTag>
                       </span> 
              })}
            </div>
          </div>

              
        <div className='blog-page'>

             



         {  searchState  ? searchState.map((post)=>{
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
         
         
         :
         
         
         
         postagens.map((post)=> {

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