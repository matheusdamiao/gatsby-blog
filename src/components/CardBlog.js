import React, { useEffect, useState } from 'react'
import {Link } from 'gatsby'
import Avatar from './../images/avatar1.png'
import HashTag from './HashTag'

const CardBlog = ({link, title, imagem, data, description, hashtags}) => {


    const [tags, setTags] = useState(['separação', 'casamento', 'pensão'])


    useEffect( ()=>{
        if(hashtags) {
            let tag1 = hashtags[0]
            let tag2 = hashtags[1]
            let tag3 = hashtags[2]

            setTags([tag1, tag2, tag3])
            console.log(tags)

        }   

    }, [hashtags])
           
  return (
    
    
    <Link to={link} >
        
        <div className='blog-card'>
            <div className='div-foto'>
                <img src={imagem} />
            </div>
            <small> {data} </small>
            <h3> {title}</h3>
             <div className='hashTags-div'>
                <HashTag color={'#FEFFD9'}> #{tags[0]}</HashTag>
                <HashTag color={'#FEEBFF'}> #{tags[1]} </HashTag>
                <HashTag color={'#EAEAEA'}> #{tags[2]} </HashTag>

             </div>
             {/* <p> {description}</p> */}
            <div className='avatar-blog-card'>
                <img src={Avatar} width={40}/> 
                <p> Vanessa Cupulille</p>
            </div>
     </div>

     </Link>  
          
)

}

export default CardBlog


