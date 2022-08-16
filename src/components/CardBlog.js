import React from 'react'
import {Link } from 'gatsby'
import Avatar from './../images/avatar1.png'
import HashTag from './HashTag'

const CardBlog = ({link, title, imagem, data, description, hashtags}) => {

           
  return (
    
    
    <Link to={link} >
        
        <div className='blog-card'>
            <div className='div-foto'>
                <img src={imagem} />
            </div>
            <small> {data} </small>
            <h3> {title}</h3>
             <div className='hashTags-div'>
                <HashTag color={'#FEFFD9'}> {hashtags}</HashTag>
                <HashTag color={'#FEEBFF'}> {hashtags} </HashTag>
                <HashTag color={'#EAEAEA'}> {hashtags} </HashTag>

             </div>
             <p > {description}</p>
            <div className='avatar-blog-card'>
                <img src={Avatar} width={40}/> 
                <p> Vanessa Cupulille</p>
            </div>
     </div>

     </Link>  
          
)

}

export default CardBlog


