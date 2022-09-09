import React, { useEffect, useState } from 'react'
import Card from './Card'
import Botao from './Botao'
import { getImage} from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AreasDeAtuacao = () => {
  const data = useStaticQuery(graphql`
  query {
    
   icone1: file(relativePath: {eq: "icon-1.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  

   
   icone2: file(relativePath: {eq: "icon-2.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  

   
   icone3: file(relativePath: {eq: "icon-3.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  
  } 
  `
 )

 const { icone1, icone2, icone3 } = data
       
    const cardData = [
        {
        icone: getImage(icone1),
        title: 'Guarda' ,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue',
        }, 
        {         
        icone: getImage(icone2),    
        title: 'Divórcio',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue'   
        },
        {
        icone: getImage(icone3),             
        title: 'Pensão Alimentícia',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' 
        },
        {
        icone: getImage(icone1),
        title: 'Guarda' ,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue',
        }, 
        {         
        icone: getImage(icone2),    
        title: 'Divórcio',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue'   
        },
        {
        icone: getImage(icone3),             
        title: 'Pensão Alimentícia',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' 
        }
        
    ] 
     

 
  return (
    <div className='atuacao-div' id='atuacao'>
      <h2> áreas de atuação </h2>
      <p > Serviços que prestamos aos nossos clientes </p>
          
      
       <Swiper
        modules={[Pagination]}
        className='swiper-atuacao-principal'
        pagination={{clickable: 'true'}}
        spaceBetween={0}
        slidesPerView={1}
       >
               
        <SwiperSlide className='swiper-atuacao'>  
                        <Card icon={cardData[0].icone} title={cardData[0].title}> {cardData[0].body}</Card> 
                        <Card icon={cardData[1].icone} title={cardData[1].title}> {cardData[1].body}</Card>  
                        <Card icon={cardData[2].icone} title={cardData[2].title}> {cardData[2].body}</Card> 
                        <Card icon={cardData[2].icone} title={cardData[2].title}> {cardData[2].body}</Card> 


        </SwiperSlide>

        <SwiperSlide className='swiper-atuacao'>  
                     
                        <Card icon={cardData[3].icone} title={cardData[3].title}> {cardData[3].body}</Card> 
                        <Card icon={cardData[2].icone} title={cardData[2].title}> {cardData[2].body}</Card> 
                         <Card icon={cardData[2].icone} title={cardData[2].title}> {cardData[2].body}</Card> 
                        <Card icon={cardData[5].icone} title={cardData[5].title}> {cardData[5].body}</Card> 

        </SwiperSlide>

       
       

              
       </Swiper>
       
        


      {/* <div style={{margin: '20px 20px'}} >
        <Botao size={'250px'} color={'rgb(247, 239, 174)'} height={'50px'} border={'none'} >
          Agende uma reunião
        </Botao>
      </div> */}
    </div>
  )
}

export default AreasDeAtuacao
