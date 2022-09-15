import React from 'react';
import EditCardButton from './Buttons/EditCardButton';
import DeleteCardButton from './Buttons/DeleteCardButton';

const CardTile = ({ card }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Front</h6>
        <p className="card-text">{card.front}</p>
        <h6 className="card-subtitle mb-2 text-muted">Back</h6>
        <p className="card-text">{card.back}</p>
        <div className='d-flex justify-content-end'>
          <EditCardButton card={card} />
          <DeleteCardButton card={card} />
        </div>
      </div>
    </div>
  )
}

export default CardTile;