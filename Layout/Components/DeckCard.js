import React from 'react';
import DeleteDeckButton from './Buttons/DeleteDeckButton';
import StudyButton from './Buttons/StudyButton';
import ViewDeckButton from './Buttons/ViewDeckButton';

const DeckCard = ({ deck }) => {
    
    return (
        <div className='card my-2' >
            <div className='card-body'>
              <h5 className='card-total'>{deck.cards.length} cards</h5>
                <h5 className='card-title'>{deck.name}</h5>
                <p className="card-text">{deck.description}</p>
                <div className='d-flex justify-content-between'>
                    <div>
                        <ViewDeckButton deck={deck}/>
                        <StudyButton deck={deck}/>
                    </div>
                    <div>
                        <DeleteDeckButton deck={deck} />
                    </div>
                </div>                       
            </div>                
        </div>
    )
}

export default DeckCard;