import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { readDeck } from "../../utils/api";
import StudyButton from './Buttons/StudyButton';
import DeleteDeckButton from './Buttons/DeleteDeckButton';
import CardList from './CardList';
import EditDeckButton from './Buttons/EditDeckButton';
import CreateCardButton from './Buttons/CreateCardButton';

const Deck = ({ deck, setDeck })  => {
    const { deckId } = useParams();
    
    useEffect (() => {
        async function loadDecks(){
            const currentDeck = await readDeck(deckId);
            setDeck(currentDeck);
        }
        loadDecks();
    }, [deckId]);

    if(!deck) {
        return <h1>Please wait, loading...</h1>
    }
    
    return (
        <div>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>        
        </div>
        

        <div className='card my-2 border-0' >
            <div className='card-body p-0'>
                <h5 className='card-title'>{deck.name}</h5>
              <h5 className="card-total">{deck.cards.length}Cards</h5>
                <p className="card-text">{deck.description}</p>
                <div className='d-flex justify-content-between'>
                    <div>
                        <EditDeckButton deck={deck}/>
                        <StudyButton deck={deck}/>
                        <CreateCardButton deck={deck} />
                    </div>
                    <div>
                        <DeleteDeckButton deck={deck} />
                    </div>
                </div>                       
            </div>                
        </div>
        
        <br/>
        <h1>Cards</h1>
        
        <CardList cards={deck.cards} key={deck.id} />
        
    </div>
)
}

export default Deck;