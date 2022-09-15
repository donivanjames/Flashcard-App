import React from 'react';
import CardTile from './CardTile';


const CardList = ({ cards }) => {
  
  const cardList = cards.map(card => {
    return (<CardTile card={card} key={card.id} />)
  })

  return (
    <div>
        {cardList}
    </div>
  )
}

export default CardList;