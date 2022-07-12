import React from 'react'
import { useState} from 'react'
import Card from './Card'
import Botao from './Botao'



const AreasDeAtuacao = () => {


    // const [cards, setCards] = useState([
    //     {
    //         icon: require('./../icons/icon-1.png'),
    //         title: 'Guarda' ,
    //         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' ,
    //         }, 
    //         {
    //         icon: require('./../icons/icon-2.png'),
    //         title: 'Divórcio',
    //         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue'   
    //         },
    //         {
    //         icon: require('./../icons/icon-3.png'),
    //         title: 'Pensão Alimentícia',
    //         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' 
    //         },
    // ])



    // const cardData = [
    //     {
    //     icon: require('./../icons/icon-1.png'),
    //     title: 'Guarda' ,
    //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' ,
    //     }, 
    //     {
    //     icon: require('./../icons/icon-2.png'),
    //     title: 'Divórcio',
    //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue'   
    //     },
    //     {
    //     icon: require('./../icons/icon-3.png'),
    //     title: 'Pensão Alimentícia',
    //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam dolor ac nibh congue' 
    //     },
        
    // ] 
     
    const cardsStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            
    }

  return (
    <div style={{display: 'flex', alignItems: 'center', flexWrap: 'nowrap', flexDirection: 'column'}} >
      <h2 style={{textAlign: 'center', fontWeight: 'light'}}>Áreas de Atuação</h2>
      <div style={cardsStyle}>
        {/* {cards.map( (card)=> {
            return <Card icon={card.icon} title={card.title}> {card.body}</Card>
        })} */}
      </div>
      <Botao size={'250px'} color={'F7EFAE'} height={'50px'} border={'none'} >
        Agende uma reunião
      </Botao>
    </div>
  )
}

export default AreasDeAtuacao
